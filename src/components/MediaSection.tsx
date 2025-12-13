import { Play } from 'lucide-react';

const videos = [
  {
    id: 'TJHCin9zbLQ',
    title: 'HKAF Impact Story'
  },
  {
    id: 'DYfTFlK2Cfs',
    title: 'Community Outreach'
  }
];

export default function MediaSection() {
  return (
    <section id="media" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Play className="text-[#D4AF37] mx-auto mb-4" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold text-[#7B5BA7] mb-4">
            Watch Our Impact
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="bg-[#7B5BA7] p-4">
                <h3 className="text-white font-semibold text-center">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
