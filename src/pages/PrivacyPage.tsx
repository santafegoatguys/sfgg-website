import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | Santa Fe Goat Guys</title>
        <meta name="description" content="Privacy policy for Santa Fe Goat Guys. Learn how we collect and use your information when you request a grazing quote." />
        <link rel="canonical" href="https://santafegoatguys.com/privacy" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-2">
        <nav className="text-sm text-warm-gray">
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Privacy Policy</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-forest uppercase tracking-wider mb-3">
            Legal
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-warm-gray">Last updated: April 9, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Who We Are</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              Santa Fe Goat Guys is a goat grazing and vegetation management company based in Santa Fe, NM. This Privacy Policy explains how we collect, use, and protect the personal information you share with us through this website.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Information We Collect</h2>
            <p className="text-sm text-warm-gray leading-relaxed mb-3">
              When you submit our contact or quote request form, we collect the following information:
            </p>
            <ul className="text-sm text-warm-gray leading-relaxed space-y-1 list-disc list-inside">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property address</li>
              <li>Property photos (if submitted)</li>
              <li>Any additional details you include in your message</li>
            </ul>
            <p className="text-sm text-warm-gray leading-relaxed mt-3">
              We do not process payments through this website. No payment or financial information is collected here.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">How We Use Your Information</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              We use the information you provide solely to respond to your inquiry and to prepare a grazing quote for your property. We may follow up by phone or email regarding your request. We do not use your information for any other purpose.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">We Do Not Sell Your Data</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              We do not sell, rent, trade, or otherwise share your personal information with third parties for marketing or commercial purposes. Your information stays with Santa Fe Goat Guys and is used only to serve you.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Data Retention</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              We retain your contact information for as long as necessary to fulfill the purpose for which it was collected or as required by applicable law. If you would like us to delete your information, please contact us and we will do so promptly.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Cookies and Analytics</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              This website may use basic analytics tools (such as Google Analytics) to understand how visitors use the site. These tools may collect anonymous usage data such as page views and referral sources. No personally identifiable information is shared through these tools.
            </p>
          </div>

          <div className="bg-sand rounded-xl p-6">
            <h2 className="font-serif text-xl font-bold text-charcoal mb-3">Contact Us</h2>
            <p className="text-sm text-warm-gray leading-relaxed">
              If you have questions about this Privacy Policy or wish to request deletion of your data, please contact us at{' '}
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
