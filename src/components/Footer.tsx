import { Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#7B5BA7] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/logohkaf.jpeg" alt="HKAF Logo" className="h-16 mb-4" />
            <p className="text-white/90 leading-relaxed">
              His Kingdom Agenda Foundation
            </p>
            <p className="text-[#D4AF37] font-semibold mt-2 italic">
              Kingdom – God's Heartbeat, God's Priority
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/90 hover:text-[#D4AF37] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/90 hover:text-[#D4AF37] transition-colors"
                >
                  Vision & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/90 hover:text-[#D4AF37] transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/90 hover:text-[#D4AF37] transition-colors"
                >
                  Donate
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@hiskingdomagendafoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4AF37] transition-all transform hover:scale-110"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://facebook.com/hkaf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4AF37] transition-all transform hover:scale-110"
              >
                <Facebook size={24} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-white/90 mb-2">Call / WhatsApp:</p>
              <a
                href="tel:+233204717173"
                className="text-[#D4AF37] font-semibold text-lg hover:underline"
              >
                +233 20 471 7173
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} His Kingdom Agenda Foundation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
