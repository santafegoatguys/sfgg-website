import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const STEPS = [
  {
    number: 1,
    title: 'Initial Consultation',
    description:
      'We assess your property and vegetation needs, discussing your goals and timeline.',
  },
  {
    number: 2,
    title: 'Scheduling',
    description:
      'We work with you to find the optimal time for grazing, considering vegetation growth and weather conditions.',
  },
  {
    number: 3,
    title: 'Grazing Period',
    description:
      'Our goats work their magic, typically spending 3-7 days depending on property size and vegetation density.',
  },
  {
    number: 4,
    title: 'Monitoring & Support',
    description:
      'We monitor progress daily and provide updates throughout the grazing period.',
  },
]

const ACCORDION = [
  {
    title: 'Before Your Appointment',
    content:
      "We'll visit your property to assess vegetation type and density. We'll discuss your goals, identify target areas, and provide a clear timeline and quote. No obligations — just honest advice about whether goats are the right solution for your land.",
  },
  {
    title: 'During the Grazing',
    content:
      'Our herd arrives with portable electric fencing to keep goats contained in target areas. We check on the herd daily, rotate them as needed, and keep you updated with photos. Grazing typically takes 3-7 days depending on property size and vegetation density.',
  },
  {
    title: 'After Completion',
    content:
      "Once grazing is complete, we remove all fencing and equipment. You'll notice a significant reduction in brush and weeds, plus natural fertilization from the goats. We'll do a final walkthrough with you and discuss any follow-up recommendations.",
  },
]

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="process" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Understanding what to expect when you work with us
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {STEPS.map((step, i) => (
            <div key={step.number} className="text-center relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-green-200" />
              )}
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-md relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* What to Expect accordion */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What to Expect
          </h3>
          <div className="space-y-3">
            {ACCORDION.map((item, i) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {item.title}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-200 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-500 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
