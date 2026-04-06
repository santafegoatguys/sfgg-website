import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FAQ_TOPICS } from '../lib/faq-content'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allFaqs = FAQ_TOPICS.flatMap((t) => t.faqs)
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://santafegoatguys.com' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://santafegoatguys.com/faq' },
    ],
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Santa Fe Goat Guys',
    url: 'https://santafegoatguys.com',
    description: 'Professional targeted goat grazing for wildfire prevention, defensible space creation, and vegetation management in Northern New Mexico.',
    telephone: '+1-505-780-0312',
    email: 'info@sfgoatguys.com',
    areaServed: { '@type': 'State', name: 'New Mexico' },
    knowsAbout: ['Targeted Grazing', 'Defensible Space', 'Wildfire Prevention', 'Vegetation Management', 'Goat Grazing'],
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Goat Grazing & Wildfire Prevention FAQ | Santa Fe Goat Guys</title>
        <meta name="description" content="Expert answers about targeted goat grazing costs, wildfire prevention, defensible space standards, and vegetation management in Northern New Mexico." />
        <link rel="canonical" href="https://santafegoatguys.com/faq" />
        <meta property="og:title" content="Goat Grazing & Wildfire Prevention FAQ" />
        <meta property="og:description" content="Expert answers about targeted goat grazing, defensible space, and wildfire prevention in New Mexico." />
        <meta property="og:url" content="https://santafegoatguys.com/faq" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-2">
        <nav className="text-sm text-warm-gray">
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">FAQ</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-forest uppercase tracking-wider mb-3">
            Frequently Asked Questions
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
            Goat Grazing & Wildfire Prevention FAQ
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed">
            Expert answers about targeted goat grazing costs, methods, defensible space standards, and vegetation management across Northern New Mexico.
          </p>
        </div>
      </section>

      {/* Topic Navigation */}
      <section className="bg-sand py-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {FAQ_TOPICS.map((topic) => (
              <a
                key={topic.slug}
                href={`#${topic.slug}`}
                className="bg-white text-charcoal px-3 py-1.5 rounded-full text-sm font-medium hover:bg-forest hover:text-white transition-colors border border-gray-200"
              >
                {topic.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Topics */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-16">
          {FAQ_TOPICS.map((topic) => (
            <div key={topic.slug} id={topic.slug}>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-6 scroll-mt-20">
                {topic.name}
              </h2>
              <div className="space-y-4">
                {topic.faqs.map((faq) => (
                  <div key={faq.question} className="bg-sand rounded-xl p-6">
                    <h3 className="font-semibold text-charcoal mb-2">{faq.question}</h3>
                    <p className="text-sm text-warm-gray leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://fireready.ai/free-assessment?state=NM" target="_blank" rel="noopener noreferrer" className="bg-sand rounded-xl p-6 hover:shadow-md transition-shadow block">
              <h3 className="font-serif font-bold text-charcoal mb-2">&#128293; Check Your Wildfire Risk</h3>
              <p className="text-sm text-warm-gray">Free AI assessment for your New Mexico property. 30 seconds, no account needed.</p>
            </a>
            <a href="https://grazematch.com/graziers" target="_blank" rel="noopener noreferrer" className="bg-sand rounded-xl p-6 hover:shadow-md transition-shadow block">
              <h3 className="font-serif font-bold text-charcoal mb-2">&#128506; Find Grazing Providers</h3>
              <p className="text-sm text-warm-gray">Browse our directory of targeted grazing services across the western US.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Have more questions?
          </h2>
          <p className="text-green-100 mb-8">
            Contact us for a free property assessment and custom grazing quote.
          </p>
          <Link
            to="/#contact"
            className="bg-white text-forest px-8 py-4 rounded-lg text-base font-bold hover:bg-gray-50 transition-colors inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
