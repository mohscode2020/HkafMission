import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import VisionSection from './components/VisionSection';
import ProgramsSection from './components/ProgramsSection';
import MediaSection from './components/MediaSection';
import HappeningsSection from './components/HappeningsSection';
import DonateSection from './components/DonateSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <AboutSection />
      <VisionSection />
      <ProgramsSection />
      <MediaSection />
      <HappeningsSection />
      <DonateSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
