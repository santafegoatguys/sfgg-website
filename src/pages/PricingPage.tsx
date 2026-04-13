import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  CheckCircle2,
  ArrowRight,
  Download,
  MapPin,
  Clock,
  Shield,
  TreePine,
  Dog,
  Fence,
} from 'lucide-react'

const HERD_TIERS = [
  {
    name: 'Full Herd',
    goats: 35,
    tagline: 'Maximum Coverage',
    bestFor: 'Larger properties, fastest clearing speed, comprehensive fuel reduction campaigns.',
    highlight: true,
    rows: [
      { period: 'Days 1–10', rate: 275, estDays: '5–10', estTotal: '$1,375–$2,750' },
      { period: 'Days 11–20', rate: 225, estDays: '11–20', estTotal: '$2,750–$3,875' },
      { period: 'Days 21–30', rate: 200, estDays: '21–30', estTotal: '$3,875–$5,125' },
    ],
  },
  {
    name: 'Standard Herd',
    goats: 20,
    tagline: 'Targeted Treatment',
    bestFor: 'Mid-size properties, targeted treatment zones, simultaneous second-job deployments.',
    highlight: false,
    rows: [
      { period: 'Days 1–10', rate: 225, estDays: '5–10', estTotal: '$1,125–$2,250' },
      { period: 'Days 11–20', rate: 185, estDays: '11–20', estTotal: '$2,250–$3,100' },
    ],
  },
  {
    name: 'Small Herd',
    goats: 15,
    tagline: 'Spot Treatment',
    bestFor: 'Smaller lots, spot treatments, residential defensible space, pilot engagements.',
    highlight: false,
    rows: [
      { period: 'Days 1–10', rate: 175, estDays: '5–10', estTotal: '$875–$1,750' },
      { period: 'Days 11–20', rate: 150, estDays: '11–20', estTotal: '$1,750–$2,750' },
    ],
  },
]

const INCLUDED = [
  { icon: Dog, label: 'Great Pyrenees livestock guardian dogs' },
  { icon: Fence, label: 'Portable electric fencing' },
  { icon: TreePine, label: 'Daily herd management & paddock moves' },
  { icon: Shield, label: 'Mobilization & site setup' },
  { icon: Clock, label: 'Daily site care & monitoring' },
]

const NOT_INCLUDED = [
  'Tree removal or thinning (available through our Wildfire Readiness Division)',
  'Debris hauling',
  'Home hardening or structural modifications',
  'Stump grinding',
]

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Santa Fe Goat Guys — Targeted Grazing',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Santa Fe Goat Guys',
      url: 'https://santafegoatguys.com',
      telephone: '505-219-1019',
      email: 'info@sfgoatguys.com',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 35.687, longitude: -105.938 },
        geoRadius: '30 mi',
      },
    },
    description: 'Targeted goat grazing for wildfire fuel reduction, invasive species management, and defensible space creation in Santa Fe, New Mexico.',
    serviceType: 'Vegetation Management',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '875',
      highPrice: '5125',
      priceCurrency: 'USD',
      offerCount: 3,
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Pricing — Goat Grazing Rates | Santa Fe Goat Guys</title>
        <meta
          name="description"
          content="2026 goat grazing rates for Santa Fe and Northern NM. All-in daily pricing from $150–$275/day. No hidden fees. Full herd, standard, and small herd options. Free site assessment."
        />
        <meta
          name="keywords"
          content="goat grazing cost, goat grazing pricing, vegetation management cost, Santa Fe goat grazing, wildfire fuel reduction cost, defensible space cost, New Mexico"
        />
        <link rel="canonical" href="https://santafegoatguys.com/pricing" />
        <meta property="og:title" content="2026 Goat Grazing Rates | Santa Fe Goat Guys" />
        <meta property="og:description" content="All-in daily pricing from $150–$275/day. No hidden fees. Free site assessment." />
        <meta property="og:url" content="https://santafegoatguys.com/pricing" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-green-900 via-green-800 to-green-950">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">2026 Season</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing. No Surprises.
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            All-in daily rates include herd management, Great Pyrenees guardian dogs, portable fencing, paddock moves, and daily site care. No mobilization fees. No hidden line items.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl px-6 py-4">
            <span className="text-green-200 text-sm">Most residential defensible space projects:</span>
            <span className="text-white text-2xl font-bold">$1,500–$3,500</span>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-green-50 border-b border-green-200">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-green-200 p-6 text-center">
              <p className="text-sm text-gray-500 mb-1">Manual Brush Clearing</p>
              <p className="text-3xl font-bold text-red-600">~$1,800<span className="text-lg font-normal text-gray-400">/acre</span></p>
              <p className="text-xs text-gray-400 mt-1">Heavy equipment, fuel, labor, hauling debris</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-green-600 p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                SAVE 55–75%
              </div>
              <p className="text-sm text-gray-500 mb-1">Targeted Goat Grazing</p>
              <p className="text-3xl font-bold text-green-700">~$400–$800<span className="text-lg font-normal text-gray-400">/acre</span></p>
              <p className="text-xs text-gray-400 mt-1">Plus natural fertilization, zero equipment damage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Herd Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Choose Your Herd Size</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Rates decrease the longer goats are on-site — longer engagements get better daily pricing automatically.
          </p>

          <div className="space-y-10">
            {HERD_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border-2 overflow-hidden ${
                  tier.highlight ? 'border-green-600 shadow-lg' : 'border-gray-200'
                }`}
              >
                {/* Header */}
                <div className={`px-6 py-5 ${tier.highlight ? 'bg-green-700' : 'bg-gray-50'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className={`text-xl font-bold ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                        {tier.name} Deployment — {tier.goats} Goats
                      </h3>
                      <p className={`text-sm ${tier.highlight ? 'text-green-200' : 'text-gray-500'}`}>
                        {tier.bestFor}
                      </p>
                    </div>
                    {tier.highlight && (
                      <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider self-start">
                        Most Popular
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 text-left">
                        <th className="px-6 py-3 text-sm font-semibold text-gray-500">Engagement Period</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-500">Daily Rate</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-500">Est. Days*</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-500">Est. Total*</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tier.rows.map((row) => (
                        <tr key={row.period} className="border-b border-gray-100 last:border-0">
                          <td className="px-6 py-4 font-medium text-gray-900">{row.period}</td>
                          <td className="px-6 py-4">
                            <span className="text-lg font-bold text-green-700">${row.rate}</span>
                            <span className="text-gray-400 text-sm"> / day</span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{row.estDays} days</td>
                          <td className="px-6 py-4 font-semibold text-gray-900">{row.estTotal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            * Duration and total estimates based on moderate vegetation density (pinon-juniper scrub). Final quote confirmed after site assessment.
          </p>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Included */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Included in Every Rate</h3>
              <ul className="space-y-4">
                {INCLUDED.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-green-700" />
                    </div>
                    <span className="text-gray-700">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Not Included</h3>
              <ul className="space-y-4">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  <span className="font-bold">Need tree work + goat grazing?</span>{' '}
                  Our{' '}
                  <Link to="/wildfire-readiness" className="underline font-semibold hover:text-amber-700">
                    Wildfire Readiness Division
                  </Link>{' '}
                  coordinates the full service chain — assessment, planning, goat grazing, tree thinning, and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Service Terms</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <Clock size={24} className="text-green-700 mx-auto mb-2" />
              <p className="font-bold text-gray-900 text-sm">5-Day Minimum</p>
              <p className="text-xs text-gray-500 mt-1">All deployments</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <MapPin size={24} className="text-green-700 mx-auto mb-2" />
              <p className="font-bold text-gray-900 text-sm">30-Mile Service Area</p>
              <p className="text-xs text-gray-500 mt-1">From Santa Fe, NM</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <MapPin size={24} className="text-green-700 mx-auto mb-2" />
              <p className="font-bold text-gray-900 text-sm">Distance Surcharge</p>
              <p className="text-xs text-gray-500 mt-1">$0.75/mile over 30 mi (one-way)</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <CheckCircle2 size={24} className="text-green-700 mx-auto mb-2" />
              <p className="font-bold text-gray-900 text-sm">Free Site Assessment</p>
              <p className="text-xs text-gray-500 mt-1">Before every quote</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-green-200 text-lg mb-8">
            Every project starts with a free site assessment. We'll walk the property, evaluate vegetation density, and give you an exact quote — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/#contact"
              className="bg-white hover:bg-gray-100 text-green-800 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2 justify-center"
            >
              Request a Free Assessment <ArrowRight size={20} />
            </a>
            <a
              href="tel:5052191019"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call 505-219-1019
            </a>
          </div>
          <a
            href="/sfgg_rate_card_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm transition-colors"
          >
            <Download size={16} />
            Download 2026 Rate Card (PDF)
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
