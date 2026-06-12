import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Shield,
  Landmark,
  ClipboardCheck,
  FileText,
  ArrowRight,
  CheckCircle2,
  Flame,
  AlertCircle,
  ChevronRight,
  Home,
  TreePine,
} from 'lucide-react'

const KEY_FACTS = [
  { value: '$10M', label: 'appropriated for NM homeowner wildfire mitigation grants' },
  { value: '~$7,000', label: 'per-home grants in the 2025–26 FAIR Plan pilot program' },
  { value: '50%+', label: 'of Wildfire Prepared Program grants must directly assist homeowners' },
  { value: 'IBHS', label: 'the national standard NM certification is benchmarked against' },
]

const MONEY_STREAMS = [
  {
    icon: TreePine,
    name: 'Wildfire Prepared Program (EMNRD)',
    detail:
      'Created by SB 33, run by the EMNRD Forestry Division. Funds assessments, home hardening, hazardous fuels reduction buffers, and certification — with at least half of all grant money reserved for helping individual homeowners through qualified contractors.',
    audience: 'NM residents who own a home in a designated high-risk area',
  },
  {
    icon: Landmark,
    name: 'OSI FAIR Plan Mitigation Grants',
    detail:
      'A parallel $10M appropriation to the Office of Superintendent of Insurance. The pilot awarded roughly $7,000 per home to FAIR Plan policyholders (starting in Otero County) for mitigation work benchmarked to IBHS Wildfire Prepared Home standards. The first certificate was issued in March 2026.',
    audience: 'FAIR Plan policyholders and homeowners in high wildfire-risk areas',
  },
]

const QUALIFY_CHECKS = [
  'You are a New Mexico resident and own your home',
  'Your home is in a high wildfire-risk area (most of the Santa Fe, Tesuque, Eldorado, La Cienega, and Los Alamos foothills WUI qualifies)',
  'You have a NM FAIR Plan policy, or have been non-renewed by your insurer (priority for the OSI grant stream)',
  'You live in a rural or underserved high-risk community (priority under program guidelines)',
]

const STEPS = [
  {
    icon: Shield,
    step: '01',
    title: 'Start with a FireReady Assessment',
    description:
      'A free FireReady.ai risk score — or a $39 full report — documents your risk with FEMA data for your exact location. That risk evidence is the foundation of any grant application.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Get a Treatment Plan in the State’s Own Categories',
    description:
      'We scope your work the way the Wildfire Prepared Act defines it: hazardous fuels reduction buffers, a noncombustible five-foot Zone 0, defensible space zones, and structure hardening. Grant reviewers see an exact fit, not a generic landscaping quote.',
  },
  {
    icon: Flame,
    step: '03',
    title: 'Do the Work Now — Don’t Wait on Santa Fe',
    description:
      'Fire season doesn’t wait for grant cycles. Our goat herd and vetted partner network complete the mitigation now, at our published rates, so your home is protected this season.',
  },
  {
    icon: FileText,
    step: '04',
    title: 'We Handle the Paperwork',
    description:
      'Before/after photos, scope-of-work summaries mapped to wildfire preparedness standards, and IBHS-aligned documentation — packaged for grant applications, certification, and your insurance agent.',
  },
]

const FAQS = [
  {
    q: 'What is the New Mexico Wildfire Prepared Act (SB 33)?',
    a: 'Signed in April 2025, SB 33 created the Wildfire Prepared Program and Fund. The state provides technical assistance, conducts assessments, issues wildfire-prepared certifications, and awards grants — to local governments and to qualified contractors who help homeowners harden their homes and create defensible buffers. At least 50% of grant money must go toward directly assisting individual homeowners.',
  },
  {
    q: 'How much grant money can a homeowner get?',
    a: 'In the 2025–26 OSI pilot, FAIR Plan policyholders received grants of roughly $7,000 per home for mitigation work such as fire-resistant roofing and defensible space. Grant amounts and eligibility for the statewide Wildfire Prepared Program are set by the Fire Planning Task Force, which must publish updated guidelines by June 30 each year.',
  },
  {
    q: 'Am I guaranteed a grant?',
    a: 'No. The law itself states that it does not guarantee any benefits, and funding is limited. That’s why we recommend treating grants as a way to recover or offset mitigation costs — not a reason to delay protecting your home during fire season. We help you document everything so you’re application-ready the moment a window opens.',
  },
  {
    q: 'What is a "qualified entity" and why does it matter?',
    a: 'Under SB 33, a qualified entity is a contractor engaged to harden structures and assist homeowners — the channel through which at least half of all program grant money must flow. Santa Fe Goat Guys provides exactly the services the act funds: fuels-reduction buffers, defensible space, Zone 0 conversion, assessments, and documentation.',
  },
  {
    q: 'What are "wildfire preparedness standards"?',
    a: 'SB 33 requires New Mexico’s certification standards to be consistent with — and no less stringent than — national standards such as the IBHS Wildfire Prepared Home program. That includes a noncombustible five-foot zone around the structure (Zone 0), defensible space zones, and ignition-resistant materials. Our treatment plans are built to those standards, and many insurers offer 10–20% discounts for IBHS designation.',
  },
  {
    q: 'I have a FAIR Plan policy. What should I do?',
    a: 'FAIR Plan policyholders were first in line in the OSI pilot. Start with a free FireReady assessment so your risk and scope of work are documented, then talk to us — we track the program and can help you get application-ready. Call 505-219-1019.',
  },
  {
    q: 'Does goat grazing count as fundable mitigation?',
    a: 'Yes — SB 33 explicitly funds "hazardous fuels reduction to provide buffers," which is precisely what targeted grazing does: it removes the fine fuels that carry fire between properties and creates the buffer zones the law describes. Goats also reach steep, rocky terrain that machines can’t, with no soil damage.',
  },
]

export default function WildfireGrantsPage() {
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
    name: 'SFGG Wildfire Grant Assistance — NM Wildfire Prepared Act (SB 33)',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Santa Fe Goat Guys',
      url: 'https://santafegoatguys.com',
      telephone: '505-219-1019',
      email: 'info@sfgoatguys.com',
    },
    description:
      'Help for New Mexico homeowners navigating Wildfire Prepared Act (SB 33) and OSI FAIR Plan mitigation grants — risk assessment, grant-aligned treatment plans, mitigation work, and application-ready documentation.',
    serviceType: 'Wildfire Mitigation Grant Assistance',
    areaServed: { '@type': 'State', name: 'New Mexico' },
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>NM Wildfire Mitigation Grants — SB 33 Help for Homeowners | Santa Fe Goat Guys</title>
        <meta
          name="description"
          content="New Mexico's Wildfire Prepared Act (SB 33) and OSI FAIR Plan program offer homeowners grants — roughly $7,000 per home in the 2025–26 pilot — for defensible space and home hardening. See if you qualify and get application-ready."
        />
        <meta
          name="keywords"
          content="New Mexico wildfire grants, SB 33, Wildfire Prepared Act, FAIR Plan mitigation grant, defensible space grant, home hardening grant, OSI wildfire grant, Santa Fe wildfire mitigation"
        />
        <link rel="canonical" href="https://santafegoatguys.com/wildfire-grants" />
        <meta property="og:title" content="NM Wildfire Mitigation Grants — SB 33 Help for Homeowners" />
        <meta
          property="og:description"
          content="New Mexico has dedicated state money to make homes wildfire prepared. Learn how the SB 33 and FAIR Plan grant programs work and how to get application-ready."
        />
        <meta property="og:url" content="https://santafegoatguys.com/wildfire-grants" />
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
            <Landmark size={16} />
            <span>NM Wildfire Prepared Act — SB 33 (2025)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            New Mexico Will Help Pay
            <br />
            <span className="text-amber-400">to Protect Your Home from Wildfire.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            The state has dedicated millions in grant money for defensible space, fuels-reduction buffers, and home hardening — and at least half of it must go to helping homeowners directly. Here’s how the programs work and how to get application-ready.
          </p>
          <p className="text-gray-400 mb-10">Updated June 2026 · Serving Greater Santa Fe, Taos &amp; Los Alamos</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fireready.ai/free-assessment?state=NM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center gap-2 justify-center"
            >
              Start with a Free Risk Assessment <ArrowRight size={20} />
            </a>
            <a
              href="tel:5052191019"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call 505-219-1019
            </a>
          </div>
        </div>
      </section>

      {/* ─── Key Facts Bar ──────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {KEY_FACTS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── What the Law Does ───────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            What the Wildfire Prepared Act Actually Does
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Signed in April 2025 after the Calf Canyon/Hermits Peak fire and 10,000+ insurance non-renewals, SB 33 created a state program — with real money behind it — to make New Mexico homes wildfire prepared. In plain English, the state will now:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="font-bold text-amber-900 mb-2">Fund assessments &amp; certification</p>
              <p className="text-amber-800 text-sm">
                The state conducts assessments and issues wildfire-prepared certificates, using standards benchmarked to the national IBHS Wildfire Prepared Home program — the same designation many insurers reward with 10–20% premium discounts.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="font-bold text-amber-900 mb-2">Fund fuels-reduction buffers</p>
              <p className="text-amber-800 text-sm">
                Grants pay for "hazardous fuels reduction to provide buffers" — treated areas that slow or stop fire spread between properties and give firefighters a safe zone to work from. This is exactly what targeted goat grazing creates.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="font-bold text-amber-900 mb-2">Fund home hardening</p>
              <p className="text-amber-800 text-sm">
                Money for noncombustible materials and structural changes — including the critical noncombustible five-foot zone (Zone 0) around your home that national research shows matters most against ember ignition.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="font-bold text-amber-900 mb-2">Put homeowners first, by law</p>
              <p className="text-amber-800 text-sm">
                At least 50% of all grant money must be awarded for the purpose of directly assisting eligible property owners with making their residences wildfire prepared — through qualified contractors who do the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Two Money Streams ───────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Two State Programs, One Goal
          </h2>
          <p className="text-gray-600 text-center mb-14 text-lg max-w-3xl mx-auto">
            New Mexico funds wildfire mitigation through two parallel channels. Knowing which one fits you is half the battle — we track both.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {MONEY_STREAMS.map((stream) => (
              <div key={stream.name} className="bg-white rounded-xl border border-gray-200 p-8">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <stream.icon size={24} className="text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{stream.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{stream.detail}</p>
                <p className="text-sm font-semibold text-amber-700">Best fit: {stream.audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Do You Qualify ──────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            Do You Likely Qualify?
          </h2>
          <p className="text-gray-600 text-center mb-10 text-lg">
            The more of these that apply to you, the stronger your position when grant windows open:
          </p>
          <ul className="space-y-4 max-w-2xl mx-auto mb-10">
            {QUALIFY_CHECKS.map((check) => (
              <li key={check} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5">
                <CheckCircle2 size={22} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{check}</span>
              </li>
            ))}
          </ul>
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 flex items-start gap-4 max-w-2xl mx-auto">
            <AlertCircle size={22} className="text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-bold">The honest fine print:</span> SB 33 explicitly does not guarantee benefits, funding is limited, and eligibility guidelines are updated by the state’s Fire Planning Task Force by June 30 each year. Santa Fe Goat Guys is a private company, not a government agency — we can’t award grants, but we make sure your mitigation work and documentation are ready the moment a window opens.
            </p>
          </div>
        </div>
      </section>

      {/* ─── How SFGG Helps ──────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            How We Get You Grant-Ready
          </h2>
          <p className="text-gray-600 text-center mb-14 text-lg">
            Protect your home this fire season — and position yourself for state money at the same time.
          </p>
          <div className="space-y-6">
            {STEPS.map((step) => (
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
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Want the full picture of our services and pricing first?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/wildfire-readiness"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors justify-center"
              >
                <Home size={18} /> Wildfire Readiness Services
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors justify-center"
              >
                Grazing Rates &amp; Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            NM Wildfire Grant FAQ
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="bg-gray-50 rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 list-none">
                  {faq.q}
                  <ChevronRight
                    size={20}
                    className="text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-4"
                  />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed -mt-2">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact / CTA ───────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950">
        <div className="max-w-3xl mx-auto text-center">
          <Flame size={40} className="text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fire Season Is Now. Grant Windows Are Opening.
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Start with a free risk assessment so your home’s risk — and the work it needs — is documented. We’ll walk you through your options, including every grant program you may qualify for.
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
