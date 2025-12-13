import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'His Kingdom Agenda Foundation',
    subtitle: 'Kingdom – God\'s Heartbeat, God\'s Priority',
    buttonText: 'Partner With Us',
    buttonLink: '#donate'
  },
  {
    title: 'Raising Kingdom-Minded Generations',
    subtitle: 'Empowering this generation to succeed and empower the next',
    buttonText: 'Our Vision',
    buttonLink: '#vision'
  },
  {
    title: 'Changing Future Generations, One Child at a Time',
    subtitle: 'Matthew 18:1–3',
    buttonText: 'Donate Now',
    buttonLink: '#donate'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7B5BA7]/90 to-[#7B5BA7]/70 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/5205904/pexels-photo-5205904.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
      ></div>

      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 opacity-95">
            {slides[currentSlide].subtitle}
          </p>
          <button
            onClick={() => scrollToSection(slides[currentSlide].buttonLink)}
            className="bg-[#D4AF37] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c19d2f] transition-all transform hover:scale-105 shadow-lg"
          >
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronRight className="text-white" size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-[#D4AF37] w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
