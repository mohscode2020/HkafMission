import { Target, Users, TrendingUp, Award, Search, TreePine, Heart, Crown } from 'lucide-react';

const visionItems = [
  { icon: Crown, text: 'Prioritize the Kingdom agenda' },
  { icon: Users, text: 'Empower generations' },
  { icon: TrendingUp, text: 'Encourage fruit bearing' },
  { icon: Award, text: 'Sow excellence and greatness' },
  { icon: Search, text: 'Identify potential' },
  { icon: TreePine, text: 'Raise Oaks of Righteousness (Isaiah 61:3)' },
  { icon: Heart, text: 'Turn hearts toward God' },
  { icon: Target, text: 'Build Kingdom-minded people' }
];

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7B5BA7] mb-4">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#E6DFF2] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-[#E6DFF2]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-[#D4AF37] p-4 rounded-full">
                  <item.icon className="text-white" size={32} />
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
