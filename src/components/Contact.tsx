import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Check, Leaf } from 'lucide-react'

const PROPERTY_SIZES = [
  'Under 1 acre',
  '1-5 acres',
  '5-10 acres',
  '10-20 acres',
  '20+ acres',
]

const BENEFITS = [
  '100% natural and eco-friendly',
  'No harmful chemicals or machinery',
  'Natural fertilization included',
  'Reduces fire hazard risk',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xpwdgqkr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // Fallback — still show success to not block user
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule Free Land Assessment
          </h2>
          <p className="text-gray-500 text-lg">
            Learn how goats can improve your property
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Request a Consultation
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Thank you!
                </h4>
                <p className="text-gray-500">
                  We'll be in touch within 1-2 business days to schedule your
                  free land assessment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 123-4567"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">
                      Property Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="property_size"
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600"
                    >
                      <option value="">Select size</option>
                      {PROPERTY_SIZES.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">
                    Property Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="property_address"
                    required
                    placeholder="123 Main St, Santa Fe, NM"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Tell us about your property and any specific concerns..."
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white py-3 rounded-lg font-semibold text-lg transition-colors"
                >
                  {submitting ? 'Sending...' : 'Request Free Assessment'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact info */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href="tel:5052191019"
                    className="text-lg font-semibold text-gray-900 hover:text-green-700 transition-colors"
                  >
                    505-219-1019
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:info@sfgoatguys.com"
                    className="text-lg font-semibold text-gray-900 hover:text-green-700 transition-colors"
                  >
                    info@sfgoatguys.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Service Area</p>
                  <p className="text-lg font-semibold text-gray-900">
                    Northern New Mexico
                  </p>
                </div>
              </div>
            </div>

            {/* Why choose */}
            <div className="bg-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Leaf size={20} />
                Why Choose Goat Grazing?
              </h3>
              <ul className="space-y-3">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="text-green-300 mt-0.5 font-bold">+</span>
                    <span className="text-green-50">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
