import { Home, Building2, Trees } from 'lucide-react'

const SERVICES = [
  {
    icon: Home,
    title: 'Residential',
    description:
      'Natural weed control for your yard or property. Our goats efficiently manage vegetation while providing natural fertilization.',
    image: '/images/services/eldorado-job.jpg',
  },
  {
    icon: Building2,
    title: 'Commercial',
    description:
      'Large-scale vegetation management for solar fields and commercial properties. Cost-effective and environmentally friendly.',
    image: '/images/herd/herd-in-pen.jpg',
  },
  {
    icon: Trees,
    title: 'Forestry',
    description:
      'Fire prevention through controlled grazing. We work with forestry services to reduce fire hazards naturally.',
    image: '/images/services/forestry.jpg',
    callout:
      'The aggregate residential insurance premium is reduced on average by 41% - 52% with ecological forestry practices.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Sustainable vegetation management solutions for every need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
                {service.callout && (
                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <span className="font-bold">Quick Fact:</span>{' '}
                      {service.callout}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            See the Difference
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/services/before.jpg"
                alt="Before goat grazing — overgrown vegetation"
                className="w-full h-72 object-cover"
              />
              <div className="bg-red-600 text-white text-center py-2 font-bold uppercase tracking-wide text-sm">
                Before
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/services/after.jpg"
                alt="After goat grazing — cleared vegetation"
                className="w-full h-72 object-cover"
              />
              <div className="bg-green-700 text-white text-center py-2 font-bold uppercase tracking-wide text-sm">
                After
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
