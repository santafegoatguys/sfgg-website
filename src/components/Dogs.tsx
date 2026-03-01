import { Shield } from 'lucide-react'

export default function Dogs() {
  return (
    <section className="py-20 px-4 bg-green-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield size={28} className="text-green-300" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet Mac &amp; Tango
              </h2>
            </div>
            <p className="text-xl text-green-200 font-medium mb-4">
              Our Livestock Guardian Dogs
            </p>
            <p className="text-green-100 text-lg leading-relaxed mb-6">
              Every SFGG grazing job is protected by our Great Pyrenees guardian
              dogs. Mac and Tango live with the herd 24/7, keeping our goats safe
              from predators while they work your property.
            </p>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start gap-2">
                <span className="text-green-300 font-bold mt-0.5">&#10003;</span>
                24/7 predator protection on your property
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-300 font-bold mt-0.5">&#10003;</span>
                Gentle with people, fierce with coyotes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-300 font-bold mt-0.5">&#10003;</span>
                Part of every job — no extra charge
              </li>
            </ul>
          </div>

          {/* Dog photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/dogs/mac-tango-ranch.jpg"
                alt="Mac and Tango — Great Pyrenees guardian dogs"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/dogs/dogs-july.jpg"
                alt="Guardian dogs with the herd"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="col-span-2 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/dogs/spypoint-evening.png"
                alt="Guardian dogs on trail cam monitoring the herd at dusk"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
