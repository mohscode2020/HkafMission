import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src="/logohkaf.jpeg" alt="HKAF Logo" className="h-12 sm:h-16" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors font-medium">
              Vision & Mission
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors font-medium">
              Programs
            </button>
            <button onClick={() => scrollToSection('media')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors font-medium">
              Media
            </button>
            <button onClick={() => scrollToSection('donate')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors font-medium">
              Donate
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors font-medium">
              Contact
            </button>
          </nav>

          <a
            href="https://wa.me/233204717173"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-[#D4AF37] text-white px-4 py-2 rounded-lg hover:bg-[#c19d2f] transition-all transform hover:scale-105"
          >
            <Phone size={18} />
            <span className="font-medium">+233 20 471 7173</span>
          </a>

          <button
            className="md:hidden text-[#7B5BA7]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors text-left font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors text-left font-medium">
                About Us
              </button>
              <button onClick={() => scrollToSection('vision')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors text-left font-medium">
                Vision & Mission
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors text-left font-medium">
                Programs
              </button>
              <button onClick={() => scrollToSection('media')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors text-left font-medium">
                Media
              </button>
              <button onClick={() => scrollToSection('donate')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors text-left font-medium">
                Donate
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#7B5BA7] transition-colors text-left font-medium">
                Contact
              </button>
              <a
                href="https://wa.me/233204717173"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[#D4AF37] text-white px-4 py-2 rounded-lg hover:bg-[#c19d2f] transition-all w-fit"
              >
                <Phone size={18} />
                <span className="font-medium">+233 20 471 7173</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
