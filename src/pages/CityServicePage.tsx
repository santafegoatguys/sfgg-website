import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getCityContent, getNearestCities, getFireReadyUrl, getGrazeMatchUrl } from '../lib/city-content'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CityServicePage() {
  const { citySlug } = useParams<{ citySlug: string }>()
  const city = citySlug ? getCityContent(citySlug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [citySlug])

  if (!city) return <Navigate to="/" replace />

  const nearestCities = getNearestCities(citySlug!, 8)
  const fireReadyUrl = getFireReadyUrl(citySlug!)
  const grazeMatchUrl = getGrazeMatchUrl(citySlug!)

  // FAQPage schema
  const faqSchema = {
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

  // LocalBusiness schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Santa Fe Goat Guys',
    description: `Professional targeted goat grazing and defensible space services in ${city.cityName}, New Mexico.`,
    url: 'https://santafegoatguys.com',
    areaServed: {
      '@type': 'City',
      name: city.cityName,
      containedInPlace: {
        '@type': 'State',
        name: 'New Mexico',
      },
    },
    serviceType: [
      'Targeted Grazing',
      'Defensible Space Creation',
      'Wildfire Fuel Reduction',
      'Vegetation Management',
    ],
    priceRange: '$$',
    telephone: '+1-505-780-0312',
    email: 'info@sfgoatguys.com',
  }

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://santafegoatguys.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://santafegoatguys.com/#contact' },
      { '@type': 'ListItem', position: 3, name: city.cityName, item: `https://santafegoatguys.com/services/${city.slug}` },
    ],
  }

  // HowTo schema — "How to create defensible space with goat grazing"
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Create Defensible Space in ${city.cityName} with Goat Grazing`,
    description: `Step-by-step guide to creating wildfire-safe defensible space around your ${city.cityName} property using targeted goat grazing.`,
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Assess Your Property', text: `Get a free wildfire risk assessment for your ${city.cityName} property at fireready.ai. This identifies your risk zones and vegetation types that need treatment.` },
      { '@type': 'HowToStep', position: 2, name: 'Request a Grazing Quote', text: `Contact Santa Fe Goat Guys for a free site evaluation. We assess vegetation density, terrain, and acreage to create a custom grazing plan for your ${city.cityName} property.` },
      { '@type': 'HowToStep', position: 3, name: 'Schedule the Herd', text: 'A herd of 40-80 Spanish goats arrives with portable fencing and livestock guardian dogs. The goats selectively browse fire-prone shrubs, juniper seedlings, and ladder fuels.' },
      { '@type': 'HowToStep', position: 4, name: 'Clear Zone 1 (0-30 ft)', text: 'Goats clear the critical defensible space zone around your home, creating 6-foot spacing between shrub crowns and removing understory vegetation per EMNRD standards.' },
      { '@type': 'HowToStep', position: 5, name: 'Maintain Annually', text: `Schedule annual maintenance grazing to keep vegetation from rebuilding fire risk. ${city.cityName}'s growing season means understory can regrow within 12-18 months.` },
    ],
    totalTime: 'P7D',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '200-400 per acre' },
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
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-2">
        <nav className="text-sm text-warm-gray">
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/#contact" className="hover:text-forest transition-colors">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">{city.cityName}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-forest uppercase tracking-wider mb-3">
            Serving {city.cityName}, New Mexico &middot; {city.county} County
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
              href={fireReadyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-forest text-forest px-6 py-3 rounded-lg font-medium hover:bg-forest hover:text-white transition-colors"
            >
              Free FireReady Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Fire Risk Profile */}
      <section className="bg-red-50 border-y border-red-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-8">
            {city.cityName} Fire Risk Profile
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Key facts */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-lg mt-0.5">&#9632;</span>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Elevation</p>
                  <p className="text-warm-gray text-sm">{city.elevation.toLocaleString()} ft</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-lg mt-0.5">&#9632;</span>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Primary Vegetation</p>
                  <p className="text-warm-gray text-sm">{city.primaryVegetation.join(', ')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-lg mt-0.5">&#9632;</span>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Terrain</p>
                  <p className="text-warm-gray text-sm">{city.terrain}</p>
                </div>
              </div>
              {city.population > 0 && (
                <div className="flex items-start gap-3">
                  <span className="text-red-600 text-lg mt-0.5">&#9632;</span>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">Approximate Population</p>
                    <p className="text-warm-gray text-sm">{city.population.toLocaleString()}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Fire history */}
            <div>
              {city.fireHistory.length > 0 ? (
                <>
                  <p className="font-semibold text-charcoal text-sm mb-3">Notable Fire History</p>
                  <div className="space-y-3">
                    {city.fireHistory.map((fire) => (
                      <div key={`${fire.name}-${fire.year}`} className="bg-white rounded-lg p-4 border border-red-100">
                        <p className="font-semibold text-charcoal text-sm">{fire.name} ({fire.year})</p>
                        <p className="text-warm-gray text-sm">
                          {fire.acres.toLocaleString()} acres burned
                          {fire.structures ? ` \u00B7 ${fire.structures.toLocaleString()} structures destroyed` : ''}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg p-4 border border-red-100">
                  <p className="font-semibold text-charcoal text-sm mb-1">No Major Recorded Fires</p>
                  <p className="text-warm-gray text-sm">
                    No major fires have been recorded in the immediate {city.cityName} area, but the surrounding vegetation and terrain create conditions consistent with communities that have experienced devastating wildfire. Defensible space is a preventive measure, not a reactive one.
                  </p>
                </div>
              )}
              <a
                href={fireReadyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-red-700 font-medium text-sm hover:text-red-800 transition-colors"
              >
                Check your {city.cityName} property risk free &rarr;
              </a>
            </div>
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

      {/* Ecosystem CTAs */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-8 text-center">
            Tools for {city.cityName} Property Owners
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={fireReadyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sand rounded-xl p-6 hover:shadow-md transition-shadow block"
            >
              <p className="text-2xl mb-2">&#128293;</p>
              <h3 className="font-serif font-bold text-charcoal mb-2">FireReady Home</h3>
              <p className="text-sm text-warm-gray mb-3">
                Free AI-powered wildfire risk assessment for your {city.cityName} property. Get your risk score in 30 seconds.
              </p>
              <span className="text-forest font-medium text-sm">Check your risk &rarr;</span>
            </a>
            <a
              href={grazeMatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sand rounded-xl p-6 hover:shadow-md transition-shadow block"
            >
              <p className="text-2xl mb-2">&#128506;</p>
              <h3 className="font-serif font-bold text-charcoal mb-2">Find Grazing Providers</h3>
              <p className="text-sm text-warm-gray mb-3">
                Search our directory of targeted grazing providers, processors, and producers across the western US.
              </p>
              <span className="text-forest font-medium text-sm">Browse providers &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {nearestCities.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
              Also Serving Near {city.cityName}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearestCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/services/${c.slug}`}
                  className="bg-sand text-charcoal px-4 py-2 rounded-full text-sm font-medium hover:bg-forest hover:text-white transition-colors"
                >
                  {c.cityName}
                </Link>
              ))}
            </div>
            <Link
              to="/#contact"
              className="inline-block mt-6 text-forest font-medium text-sm hover:text-forest-dark transition-colors"
            >
              View all service areas &rarr;
            </Link>
          </div>
        </section>
      )}

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
