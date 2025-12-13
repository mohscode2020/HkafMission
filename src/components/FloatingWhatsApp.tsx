import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/233204717173"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#D4AF37] text-white p-4 rounded-full shadow-2xl hover:bg-[#c19d2f] transition-all transform hover:scale-110 z-50 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
