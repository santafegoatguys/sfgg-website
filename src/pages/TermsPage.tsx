import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service | Santa Fe Goat Guys</title>
        <meta name="description" content="Terms of service for Santa Fe Goat Guys targeted goat grazing and vegetation management services in Northern New Mexico." />
        <link rel="canonical" href="https://santafegoatguys.com/terms" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-2">
        <nav className="text-sm text-warm-gray">
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Terms of Service</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-forest uppercase tracking-wider mb-3">
            Legal
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-warm-gray">Last updated: April 9, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Service Area</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              Santa Fe Goat Guys provides targeted goat grazing and vegetation management services exclusively in Northern New Mexico. By requesting a quote or engaging our services, you confirm that the property to be serviced is located within our service area. We reserve the right to decline or cancel service for properties outside this region.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Accurate Property Information</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              The client is responsible for providing accurate and complete information about the property, including its boundaries, access points, existing vegetation, and any known hazards (such as buried utilities, water features, or toxic plants). Santa Fe Goat Guys relies on this information to provide safe and effective service. Inaccurate or incomplete information may affect the scope and quality of work performed.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Pre-Existing Conditions</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              Santa Fe Goat Guys is not liable for pre-existing conditions on the property, including but not limited to erosion, invasive species, soil instability, fencing damage, or other environmental issues present prior to service. Our grazing activities are designed to reduce vegetation; we make no guarantees about underlying land conditions.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Quotes and Estimates</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              All quotes provided by Santa Fe Goat Guys — whether by phone, email, or web form — are estimates only and are subject to confirmation following an in-person or virtual site visit. Final pricing may differ from the initial estimate based on actual site conditions, vegetation density, access constraints, or other factors discovered during the site visit. No binding contract is formed until a written agreement is signed by both parties.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Limitation of Liability</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              To the fullest extent permitted by law, Santa Fe Goat Guys shall not be liable for any indirect, incidental, consequential, or punitive damages arising from or related to the use of this website or the provision of services. Our total liability for any claim related to a service engagement shall not exceed the amount paid for that specific engagement.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Governing Law</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of the State of New Mexico, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Santa Fe County, New Mexico.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Changes to These Terms</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              We may update these Terms of Service from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website or services after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Contact Us</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              If you have questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:info@sfgoatguys.com" className="text-forest hover:underline">
                info@sfgoatguys.com
              </a>{' '}
              or by mail at Santa Fe Goat Guys, Santa Fe, NM.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
