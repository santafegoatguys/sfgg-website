import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getCityContent, getAllCities } from '../lib/city-content'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CityServicePage() {
  const { citySlug } = useParams<{ citySlug: string }>()
  const city = citySlug ? getCityContent(citySlug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [citySlug])

  if (!city) return <Navigate to="/" replace />

  const otherCities = getAllCities().filter((c) => c.slug !== citySlug)

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{city.h1} | Santa Fe Goat Guys</title>
        <meta name="description" content={city.metaDescription} />
        <link rel="canonical" href={`https://santafegoatguys.com/services/${city.slug}`} />
        <meta property="og:title" content={city.h1} />
        <meta property="og:description" content={city.metaDescription} />
        <meta property="og:url" content={`https://santafegoatguys.com/services/${city.slug}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaJsonLd)}</script>
      </Helmet>

      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-2">
        <nav className="text-sm text-warm-gray">
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">{city.cityName}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-forest uppercase tracking-wider mb-3">
            Serving {city.cityName}, New Mexico
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
            {city.h1}
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed mb-8">
            {city.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/#contact"
              className="bg-forest text-white px-6 py-3 rounded-lg font-medium hover:bg-forest-dark transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://fireready.ai/free-assessment?state=NM"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-forest text-forest px-6 py-3 rounded-lg font-medium hover:bg-forest hover:text-white transition-colors"
            >
              Free FireReady Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-sand py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-8">
            Services Available in {city.cityName}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.services.map((service) => (
              <div
                key={service}
                className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-3"
              >
                <span className="text-forest text-xl mt-0.5">&#10003;</span>
                <div>
                  <h3 className="font-semibold text-charcoal">{service}</h3>
                  <p className="text-sm text-warm-gray mt-1">
                    Professional goat grazing for {service.toLowerCase()} in {city.cityName} and surrounding areas.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Goats for This City */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-8">
            Why Goat Grazing in {city.cityName}?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '30-60% Less Cost',
                desc: `Targeted goat grazing costs significantly less than mechanical clearing in ${city.cityName}'s terrain, with better ecological outcomes.`,
              },
              {
                title: 'Zero Chemical Runoff',
                desc: `No herbicides, no soil compaction, no runoff into ${city.cityName}'s waterways. Goats provide natural fertilization as they work.`,
              },
              {
                title: 'EMNRD Compliant',
                desc: `Our grazing plans meet NM EMNRD defensible space standards for Zone 1 (0-30 ft) and Zone 2 (30-100 ft) around ${city.cityName} structures.`,
              },
            ].map((item) => (
              <div key={item.title} className="bg-sand rounded-xl p-6">
                <h3 className="font-serif font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-8 text-center">
            {city.cityName} Goat Grazing FAQ
          </h2>
          <div className="space-y-4">
            {city.faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-serif font-bold text-charcoal mb-2">{faq.question}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
            Also Serving Northern New Mexico
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                to={`/services/${c.slug}`}
                className="bg-sand text-charcoal px-4 py-2 rounded-full text-sm font-medium hover:bg-forest hover:text-white transition-colors"
              >
                {c.cityName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to protect your {city.cityName} property?
          </h2>
          <p className="text-green-100 mb-8">
            Get a free quote for targeted goat grazing. We'll assess your property and provide a custom plan.
          </p>
          <Link
            to="/#contact"
            className="bg-white text-forest px-8 py-4 rounded-lg text-base font-bold hover:bg-gray-50 transition-colors inline-block"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
