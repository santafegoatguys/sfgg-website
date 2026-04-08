import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Load all pSEO markdown files at build time via Vite glob import
const pseoModules = import.meta.glob('/content/pseo/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

interface PseoContent {
  cityName: string
  h1: string
  metaDescription: string
  intro: string
  cta: string
  raw: string
}

function parsePseo(raw: string): PseoContent {
  const cityName = (raw.match(/^#\s+(.+)/m) || [])[1]?.trim() ?? ''
  const h1 = (raw.match(/\*\*H1:\*\*\s*(.+)/i) || [])[1]?.trim() ?? cityName
  const metaDescription = (raw.match(/\*\*Meta Description:\*\*\s*(.+)/i) || [])[1]?.trim() ?? ''

  // Intro: everything after **Intro Paragraph:** up to **CTA:**
  const introMatch = raw.match(/\*\*Intro Paragraph:\*\*\s*([\s\S]+?)(?=\*\*CTA:|$)/i)
  const intro = introMatch ? introMatch[1].trim() : ''

  // CTA: everything after **CTA:**
  const ctaMatch = raw.match(/\*\*CTA:\*\*\s*([\s\S]+?)$/i)
  const cta = ctaMatch ? ctaMatch[1].trim() : ''

  return { cityName, h1, metaDescription, intro, cta, raw }
}

function getPseoContent(slug: string): PseoContent | null {
  const key = `/content/pseo/${slug}.md`
  const raw = pseoModules[key]
  if (!raw) return null
  return parsePseo(raw)
}

export function getAllPseoSlugs(): string[] {
  return Object.keys(pseoModules).map((k) =>
    k.replace('/content/pseo/', '').replace('.md', '')
  )
}

export default function PseoPage() {
  const { slug } = useParams<{ slug: string }>()
  const content = slug ? getPseoContent(slug) : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!content) return <Navigate to="/" replace />

  const canonicalUrl = `https://santafegoatguys.com/pseo/${slug}`

  const schemaJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Santa Fe Goat Guys',
    description: content.metaDescription,
    url: canonicalUrl,
    areaServed: content.cityName,
    serviceType: 'Targeted Goat Grazing & Wildfire Fuel Reduction',
  })

  return (
    <HelmetProvider>
      <Helmet>
        <title>{content.h1} | Santa Fe Goat Guys</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{schemaJsonLd}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="bg-green-900 text-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">
              Targeted Goat Grazing · {content.cityName}, NM
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {content.h1}
            </h1>
            <p className="text-green-100 text-lg leading-relaxed">
              {content.intro}
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          {/* CTA card */}
          {content.cta && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
              <p className="text-amber-900 text-base leading-relaxed mb-4">{content.cta}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.fireready.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
                >
                  Free FireReady Assessment →
                </a>
                <a
                  href="/#contact"
                  className="inline-block bg-green-800 hover:bg-green-900 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
                >
                  Get a Grazing Quote
                </a>
              </div>
            </div>
          )}

          {/* Why SFGG for this area */}
          <div className="prose prose-green max-w-none">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Why Santa Fe Goat Guys for {content.cityName}?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 not-prose mb-8">
              {[
                { icon: '🐐', title: 'Spanish Goat Herd', desc: 'Navigates steep terrain and rocky slopes other methods can\'t reach' },
                { icon: '🐕', title: 'Great Pyrenees LGDs', desc: 'Livestock guardian dogs protect the herd 24/7 in predator country' },
                { icon: '📋', title: 'EMNRD Compliant', desc: 'Defensible space that meets New Mexico state standards' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="font-semibold text-green-900 text-sm mb-1">{title}</div>
                  <div className="text-green-700 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-green-900 mb-4">How It Works</h2>
            <ol className="space-y-3 not-prose mb-8">
              {[
                'Complete the free FireReady Home assessment — takes 30 seconds, maps your specific risk zones',
                'We visit your property and design a targeted grazing plan for your acreage and vegetation type',
                'Our herd arrives and systematically clears fire-prone understory, guided by Great Pyrenees LGDs',
                'You receive before/after documentation for insurance and EMNRD compliance records',
              ].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-green-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-gray-200 pt-10 mt-10 text-center">
            <p className="text-gray-500 text-sm mb-2">Serving {content.cityName} and surrounding Northern New Mexico communities</p>
            <Link to="/" className="text-green-700 hover:text-green-900 text-sm font-medium underline">
              ← Back to Santa Fe Goat Guys
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  )
}
