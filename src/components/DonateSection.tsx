import { Heart, BookOpen, ShoppingBag, Users, TreePine } from 'lucide-react';

const donationImpacts = [
  { icon: BookOpen, text: 'Educate children' },
  { icon: ShoppingBag, text: 'Provide school supplies' },
  { icon: Users, text: 'Mentor youth' },
  { icon: TreePine, text: 'Build righteous generations' }
];

export default function DonateSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#c19d2f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="text-white mx-auto mb-4" size={56} />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support the Kingdom Agenda
          </h2>
          <p className="text-xl text-white mb-8">
            Your donation helps transform lives and build Kingdom-minded generations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {donationImpacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all"
            >
              <impact.icon className="text-[#7B5BA7] mx-auto mb-3" size={40} />
              <p className="text-gray-800 font-semibold">{impact.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-[#7B5BA7] text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-[#6a4d96] transition-all transform hover:scale-105 shadow-2xl"
          >
            Partner With Us Today
          </button>
          <p className="text-white mt-6 text-lg">
            Contact us to learn more about donation options
          </p>
        </div>
      </div>
    </section>
  );
}
