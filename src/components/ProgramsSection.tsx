import { Crown, Globe, Flame, Users, Music } from 'lucide-react';

const programs = [
  {
    icon: Crown,
    title: "Children – The King's Kids",
    scripture: 'Proverbs 22:6',
    items: [
      'School supplies & uniforms',
      'Literacy programs',
      'Library support',
      'Scholarships',
      'Mentorship'
    ]
  },
  {
    icon: Globe,
    title: 'Civic Responsibility',
    scripture: '',
    items: [
      'Integrity & excellence',
      'Environmental care',
      'Personal hygiene',
      'Avoid predators & gambling'
    ]
  },
  {
    icon: Flame,
    title: 'Youth',
    scripture: '',
    items: [
      'Mentorship',
      'Career guidance',
      'Discipleship'
    ]
  },
  {
    icon: Users,
    title: 'Adults',
    scripture: '',
    items: [
      'Parenting support',
      'Youth Builders',
      'Discipleship'
    ]
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-[#E6DFF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7B5BA7] mb-4">
            Mission & Programs
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#7B5BA7] p-4 rounded-full">
                  <program.icon className="text-[#D4AF37]" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#7B5BA7] text-center mb-2">
                {program.title}
              </h3>
              {program.scripture && (
                <p className="text-sm text-[#D4AF37] text-center mb-4 italic">
                  {program.scripture}
                </p>
              )}
              <ul className="space-y-2">
                {program.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#7B5BA7] to-[#9575cd] p-8 rounded-lg shadow-xl text-center">
          <Music className="text-[#D4AF37] mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-3">
            Ministry Song
          </h3>
          <p className="text-xl text-white italic">
            "A Charge to Keep I Have"
          </p>
        </div>
      </div>
    </section>
  );
}
