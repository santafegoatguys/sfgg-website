import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Shield,
  TreePine,
  ClipboardCheck,
  FileText,
  CalendarClock,
  Users,
  ArrowRight,
  CheckCircle2,
  Flame,
  Home,
  ChevronRight,
} from 'lucide-react'

const SERVICE_FLOW = [
  {
    icon: Shield,
    step: '01',
    title: 'Risk Assessment',
    description:
      'Start with a free 30-second FireReady score, then upgrade to our professional on-site assessment with zone-by-zone analysis.',
    pricing: 'Free online · $350–$500 on-site',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Treatment Plan',
    description:
      'We develop a detailed, prioritized plan covering defensible space zones, vegetation management, and home hardening — tailored to your property.',
    pricing: '$500–$1,500',
  },
  {
    icon: TreePine,
    step: '03',
    title: 'Coordinated Execution',
    description:
      'Our team and vetted partner network handle everything — targeted goat grazing, tree thinning, brush clearing, and debris removal.',
    pricing: '$1,500–$5,000+',
  },
  {
    icon: FileText,
    step: '04',
    title: 'Documentation',
    description:
      'Before-and-after photo documentation, insurance-ready reports, and IBHS Wildfire Prepared Home certification support.',
    pricing: 'Included or $200–$400 standalone',
  },
  {
    icon: CalendarClock,
    step: '05',
    title: 'Annual Maintenance',
    description:
      'Ongoing stewardship with seasonal vegetation management, annual re-assessments, and priority scheduling to keep your property protected year-round.',
    pricing: '$500–$1,500/year',
  },
]

const PACKAGES = [
  {
    name: 'Assessment + Consultation',
    price: '$350–$500',
    description: 'Professional assessment with actionable next steps',
    features: [
      'Free online FireReady risk score',
      'On-site professional assessment',
      'Property walk-through with expert guidance',
      'Before photos & written risk summary',
      '30-minute consultation',
    ],
    cta: 'Start with a Free Assessment',
    ctaUrl: 'https://fireready.ai/free-assessment?state=NM',
    highlight: false,
  },
  {
    name: 'Full Readiness Package',
    price: '$2,500–$6,000',
    description: 'Assessment through execution and documentation',
    features: [
      'Everything in Assessment + Consultation',
      'Detailed treatment plan by defensible space zone',
      'Coordinated execution (goats, tree work, brush clearing)',
      'Debris hauling',
      'Before/after photo documentation',
      'Insurance-ready documentation package',
    ],
    cta: 'Get Your Treatment Plan',
    ctaUrl: 'https://fireready.ai/free-assessment?state=NM',
    highlight: true,
  },
  {
    name: 'Annual Stewardship',
    price: '$4,000–$10,000/yr',
    description: 'Year-round protection with priority service',
    features: [
      'Everything in Full Readiness Package (Year 1)',
      'Annual re-assessment & updated treatment plan',
      'Seasonal goat grazing deployment',
      'Quarterly photo monitoring updates',
      'Priority scheduling',
      'IBHS certification support',
    ],
    cta: 'Talk to Us About Stewardship',
    ctaUrl: '#contact-wildfire',
    highlight: false,
  },
]

const HOA_PACKAGES = [
  {
    name: 'Community Assessment + Plan',
    price: '$5,000–$15,000',
    features: [
      'Per-home FireReady assessment ($20–$30/home for 20+ homes)',
      'Common area wildfire risk assessment',
      'Community-wide risk map',
      'Prioritized treatment recommendations',
      'Board presentation with findings',
    ],
  },
  {
    name: 'Community Wildfire Management',
    price: '$15,000–$50,000+/yr',
    features: [
      'Everything in Community Assessment',
      'Annual common-area vegetation management',
      'Coordinated homeowner defensible space services',
      'Ongoing documentation & reporting',
      'Firewise USA community recognition support',
    ],
  },
]

const STATS = [
  { value: '10,000+', label: 'NM homeowners hit by insurance non-renewals since 2021' },
  { value: '922', label: 'NM communities identified as at-risk for wildfire' },
  { value: '41–52%', label: 'average insurance premium reduction with defensible space' },
  { value: '$20M', label: 'in NM homeowner mitigation grants (SB 33)' },
]

const FAQS = [
  {
    q: 'What is the SFGG Wildfire Readiness Division?',
    a: 'We are the wildfire mitigation services arm of Santa Fe Goat Guys. While our goat grazing operations remain our foundation, the Wildfire Readiness Division offers comprehensive assessment-to-documentation wildfire protection services — including treatment planning, coordinated tree work, brush clearing, and insurance-ready documentation.',
  },
  {
    q: 'How is this different from a free assessment from the Fireshed Coalition or Forest Stewards Guild?',
    a: 'Those programs provide excellent assessments, but they end at the assessment. We take you all the way through — from assessment to treatment plan, coordinated execution, before/after documentation, and ongoing annual maintenance. We close the gap between knowing what to do and getting it done.',
  },
  {
    q: 'Do you do the work yourselves or hire it out?',
    a: 'Both. We perform targeted goat grazing and brush clearing directly. For tree thinning, removal, and hauling, we coordinate with vetted, licensed, and insured partner contractors. You always contract directly with partners for their licensed work — we manage the process so you don\'t have to.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Greater Santa Fe is our primary service area, including Las Campanas, Tesuque, Hyde Park Road, Bishop\'s Lodge, and Pacheco Canyon. We also serve Taos, Los Alamos, and surrounding WUI communities.',
  },
  {
    q: 'Can you help me with my homeowner\'s insurance?',
    a: 'We provide insurance-ready documentation packages with before/after photos, completed work summaries, and zone compliance reports. We also support the IBHS Wildfire Prepared Home certification process, which some insurers recognize. While we don\'t sell insurance, our documentation gives your agent or insurer exactly what they need.',
  },
  {
    q: 'What is FireReady?',
    a: 'FireReady (fireready.ai) is our technology platform that powers the initial risk assessment. It uses FEMA data, NFPA standards, and AI analysis to generate a risk score and zone-by-zone assessment. Think of it as the intake engine — once you complete a FireReady assessment, our team follows up with professional services.',
  },
  {
    q: 'Are there grants available to offset costs?',
    a: 'Yes. New Mexico\'s Wildfire Prepared Act (SB 33) allocated $20M for homeowner mitigation grants. FEMA BRIC grants are also available (application window: March 25 – July 23, 2026). We can help you navigate grant options as part of our service.',
  },
]

export default function WildfireReadinessPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SFGG Wildfire Readiness',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Santa Fe Goat Guys',
      url: 'https://santafegoatguys.com',
      telephone: '505-219-1019',
      email: 'info@sfgoatguys.com',
      areaServed: [
        { '@type': 'City', name: 'Santa Fe' },
        { '@type': 'City', name: 'Tesuque' },
        { '@type': 'City', name: 'Taos' },
        { '@type': 'City', name: 'Los Alamos' },
      ],
    },
    description:
      'Full-service wildfire readiness — from professional risk assessment through treatment planning, coordinated execution, and insurance-ready documentation.',
    serviceType: 'Wildfire Mitigation',
    areaServed: {
      '@type': 'State',
      name: 'New Mexico',
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Wildfire Readiness Services | Santa Fe Goat Guys</title>
        <meta
          name="description"
          content="Northern New Mexico's first full-service wildfire readiness operator. Professional assessments, treatment planning, coordinated execution, and insurance-ready documentation for homes and HOAs."
        />
        <meta
          name="keywords"
          content="wildfire readiness, defensible space, wildfire mitigation, Santa Fe wildfire, fire protection, goat grazing, home hardening, IBHS, New Mexico"
        />
        <link rel="canonical" href="https://santafegoatguys.com/wildfire-readiness" />
        <meta property="og:title" content="Wildfire Readiness Services | Santa Fe Goat Guys" />
        <meta
          property="og:description"
          content="Full-service wildfire mitigation for Northern NM — assessment, treatment planning, execution, and documentation."
        />
        <meta property="og:url" content="https://santafegoatguys.com/wildfire-readiness" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navbar />

      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Flame size={16} />
            <span>SFGG Wildfire Readiness Division</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Protect Your Property.
            <br />
            <span className="text-amber-400">From Assessment to Done.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            Northern New Mexico's first full-service wildfire readiness operator — from professional risk assessment through treatment planning, coordinated execution, and insurance-ready documentation.
          </p>
          <p className="text-gray-400 mb-10">
            Serving Greater Santa Fe · Las Campanas · Tesuque · Taos · Los Alamos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fireready.ai/free-assessment?state=NM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center gap-2 justify-center"
            >
              Free Risk Assessment <ArrowRight size={20} />
            </a>
            <a
              href="#packages"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2 justify-center"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── The Problem ─────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            The Gap Nobody's Filling
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Public programs will assess your property for free. Tree services will cut trees. But nobody in Northern New Mexico connects the dots — from understanding your risk to getting the work done and documented for your insurer.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="font-bold text-red-800 mb-2">Free assessments stop at a report</p>
              <p className="text-red-700 text-sm">The Fireshed Coalition and Forest Stewards Guild provide great assessments — but leave you to figure out execution on your own.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="font-bold text-red-800 mb-2">Contractors execute without a plan</p>
              <p className="text-red-700 text-sm">Tree services cut what you point to. Without a treatment plan, you might clear the wrong areas while missing critical defensible space gaps.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="font-bold text-red-800 mb-2">No one documents for insurance</p>
              <p className="text-red-700 text-sm">With 10,000+ NM insurance non-renewals since 2021, documentation matters. Nobody packages before/after evidence your insurer needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service Flow ────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 text-center mb-14 text-lg">
            One team manages the entire process — you never coordinate between vendors.
          </p>
          <div className="space-y-6">
            {SERVICE_FLOW.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                  <step.icon size={28} className="text-amber-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                      Step {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-shrink-0 md:text-right">
                  <p className="text-sm font-semibold text-gray-500">{step.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Residential Packages ────────────────────────────────── */}
      <section id="packages" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Residential Packages
          </h2>
          <p className="text-gray-600 text-center mb-14 text-lg">
            Choose the level of service that fits your property and goals.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border-2 p-8 flex flex-col ${
                  pkg.highlight
                    ? 'border-amber-500 bg-amber-50 shadow-xl relative'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-3xl font-bold text-amber-600 mb-2">{pkg.price}</p>
                <p className="text-sm text-gray-500 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={pkg.ctaUrl}
                  target={pkg.ctaUrl.startsWith('http') ? '_blank' : undefined}
                  rel={pkg.ctaUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.highlight
                      ? 'bg-amber-500 hover:bg-amber-600 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOA Section ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-4">
            <Users size={28} className="text-amber-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              HOA & Community Programs
            </h2>
          </div>
          <p className="text-gray-600 text-center mb-12 text-lg max-w-3xl mx-auto">
            Protect your entire community with coordinated assessments, treatment planning, and Firewise USA recognition support.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {HOA_PACKAGES.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-2xl font-bold text-amber-600 mb-6">{pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#contact-wildfire"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Us About Your Community <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Why SFGG ────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Santa Fe Goat Guys?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home size={20} className="text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Local & Owner-Operated</h3>
                <p className="text-gray-600 text-sm">Family-owned Northern NM business. Carl and Bailey personally oversee every project — not a corporate franchise or VC-backed startup.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TreePine size={20} className="text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Goat Grazing Advantage</h3>
                <p className="text-gray-600 text-sm">We're the only wildfire readiness operator with our own targeted grazing herd. Goats handle terrain machines can't reach and leave zero equipment damage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield size={20} className="text-blue-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Full Service Chain</h3>
                <p className="text-gray-600 text-sm">Nobody else in NM connects assessment → plan → execution → documentation → maintenance. We close every gap so nothing falls through the cracks.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText size={20} className="text-purple-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Technology-Backed</h3>
                <p className="text-gray-600 text-sm">FireReady.ai powers our assessments with FEMA data, NFPA standards, and AI analysis. You get real data, not guesswork.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 list-none">
                  {faq.q}
                  <ChevronRight
                    size={20}
                    className="text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-4"
                  />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed -mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact / CTA ───────────────────────────────────────── */}
      <section id="contact-wildfire" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950">
        <div className="max-w-3xl mx-auto text-center">
          <Flame size={40} className="text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Property?
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Start with a free online risk assessment or reach out directly. We'll walk you through your options — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://fireready.ai/free-assessment?state=NM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center gap-2 justify-center"
            >
              Free Risk Assessment <ArrowRight size={20} />
            </a>
            <a
              href="tel:5052191019"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call 505-219-1019
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400">
            <a href="mailto:info@sfgoatguys.com" className="hover:text-amber-400 transition-colors">
              info@sfgoatguys.com
            </a>
            <span>Serving Greater Santa Fe, Taos &amp; Los Alamos</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
