import { ExternalLink } from 'lucide-react'

const ARTICLES = [
  {
    emoji: '🔥',
    title: 'Fire Fuel Reduction in the American West',
    body: 'Targeted grazing is used by the USDA Forest Service and state fire agencies to reduce fine fuel loads in the wildland-urban interface. Goats consume the grasses, forbs, and brush that carry fire fastest — for a fraction of the cost of mechanical clearing.',
    source: {
      label: 'USFS Targeted Grazing Handbook',
      href: 'https://www.fs.usda.gov/rm/pubs/rmrs_gtr236.pdf',
    },
  },
  {
    emoji: '🌿',
    title: 'Weed Control Without Chemicals',
    body: 'Goats preferentially browse invasive species like cheatgrass, juniper seedlings, kochia, and Russian thistle that crowd out native plants and increase fire risk. No herbicide residue, no soil compaction, no runoff into waterways.',
    source: {
      label: 'USDA NRCS Prescribed Grazing',
      href: 'https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives/prescribed-grazing',
    },
  },
  {
    emoji: '💧',
    title: 'Watershed & Soil Health',
    body: 'Properly managed goat grazing increases native plant diversity, reduces erosion, and improves water infiltration. Hoof action breaks soil crusts and herd manure returns nutrients — benefits that mechanical methods and herbicides simply cannot provide.',
    source: {
      label: 'NRCS Grazing & Watershed Management',
      href: 'https://www.nrcs.usda.gov/conservation-basics/natural-resource-concerns/water/watersheds',
    },
  },
  {
    emoji: '📊',
    title: 'The Economics of Targeted Grazing',
    body: 'Studies show targeted grazing costs 30–60% less per acre than mechanical clearing and up to 80% less than repeated herbicide application over a 3-year management cycle — while delivering long-term ecosystem co-benefits that machines and chemicals cannot match.',
    source: {
      label: 'CSU Extension — Targeted Grazing',
      href: 'https://extension.colostate.edu/topic-areas/natural-resources/goats-for-vegetation-management/',
    },
  },
]

export default function WhyGoats() {
  return (
    <section id="why-goats" className="py-24 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Goats?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            The science and economics behind targeted grazing in the American West
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{article.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {article.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">{article.body}</p>
              <a
                href={article.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
              >
                {article.source.label}
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
