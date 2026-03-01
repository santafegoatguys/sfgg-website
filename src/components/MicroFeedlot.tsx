import { ArrowRight } from 'lucide-react'

export default function MicroFeedlot() {
  return (
    <section id="micro-feedlot" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/herd/goats-eating.jpg"
              alt="Goat herd grazing"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Herd-in-a-Box
              </h3>
              <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                New
              </span>
            </div>
            <p className="text-xl text-green-700 font-medium mb-4">
              Micro-Feedlot Program
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Goats managed on your land. Real meat in the freezer. Minimal hassle.
              Our turnkey solution for 5-20 acre landowners in Northern New Mexico
              who want results without becoming a rancher.
            </p>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-0.5">&#10003;</span>
                We supply & manage the goats on your property
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-0.5">&#10003;</span>
                Natural vegetation management while building your herd
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-0.5">&#10003;</span>
                Premium Kiko meat for your freezer
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
