const TEAM = [
  {
    name: 'Bailey McLendon',
    role: 'CEO & Lead Rancher',
    photo: '/images/team/bailey.jpg',
  },
  {
    name: 'Carl McLendon',
    role: 'Managing Director & Co-Rancher',
    photo: '/images/team/carl.jpg',
  },
  {
    name: 'Lane McLendon',
    role: 'Field Operations Support',
    photo: '/images/team/lane.jpg',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            The dedicated professionals behind Santa Fe Goat Guys
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-100 shadow-lg group-hover:border-green-300 transition-colors">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
