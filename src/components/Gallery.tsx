import { useState } from 'react'
import { X } from 'lucide-react'

const PHOTOS = [
  { src: '/images/hero/website-banner.jpg', alt: 'Herd grazing at sunset with mountains' },
  { src: '/images/herd/kiko-closeup.jpg', alt: 'Kiko goat close-up eating weeds' },
  { src: '/images/herd/goats-in-tree.jpg', alt: 'Goats reaching up into a tree to browse' },
  { src: '/images/services/forestry.jpg', alt: 'Herd at work in Canoncito with red rock cliffs' },
  { src: '/images/herd/goat-mtn.jpg', alt: 'Goat with New Mexico mountain backdrop' },
  { src: '/images/herd/goats-at-work.jpg', alt: 'The herd hard at work clearing brush' },
  { src: '/images/herd/goat-around-gate.jpg', alt: 'Young goat by the gate' },
  { src: '/images/herd/bailey-mountainair.jpg', alt: 'Bailey checking on the herd in Mountainair' },
  { src: '/images/herd/zebra.jpg', alt: 'Zebra the goat' },
  { src: '/images/dogs/tango-and-goat.jpg', alt: 'Guardian dog Tango with a goat' },
  { src: '/images/herd/goats-hanging-out.jpg', alt: 'Goats relaxing together' },
  { src: '/images/herd/mira.jpg', alt: 'Mira the goat' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Herd in Action
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kiko goats doing what they do best across Northern New Mexico
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PHOTOS.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                  i === 0 ? 'h-full min-h-64' : 'h-48'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={PHOTOS[lightbox].src}
            alt={PHOTOS[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm">
            {PHOTOS[lightbox].alt}
          </p>
        </div>
      )}
    </section>
  )
}
