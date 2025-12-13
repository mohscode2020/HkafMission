import { Phone, MapPin, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7B5BA7] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">
            Reach out to partner with us in advancing God's Kingdom
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 p-6 bg-[#E6DFF2] rounded-lg">
              <div className="bg-[#7B5BA7] p-3 rounded-full flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#7B5BA7] mb-2">
                  Call / WhatsApp
                </h3>
                <a
                  href="tel:+233204717173"
                  className="text-lg text-gray-700 hover:text-[#D4AF37] transition-colors"
                >
                  +233 20 471 7173
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-[#E6DFF2] rounded-lg">
              <div className="bg-[#7B5BA7] p-3 rounded-full flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#7B5BA7] mb-2">
                  Our Location
                </h3>
                <p className="text-lg text-gray-700">
                  Accra, Ghana
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#7B5BA7] to-[#9575cd] p-8 rounded-lg text-center">
              <Mail className="text-[#D4AF37] mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">
                Partner With Us
              </h3>
              <p className="text-white mb-6">
                Contact us to learn about partnership opportunities
              </p>
              <a
                href="https://wa.me/233204717173"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c19d2f] transition-all transform hover:scale-105"
              >
                Send WhatsApp Message
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3970.7653445!2d-0.10467080771923065!3d5.654356479644775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HKAF Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
