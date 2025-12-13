export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#E6DFF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7B5BA7] mb-4">
            About HKAF
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/reading_with_kids.jpeg"
              alt="HKAF Reading Program"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-[#7B5BA7]">His Kingdom Agenda Foundation (HKAF)</span> is a faith-driven foundation committed to transforming hearts, minds, and generations through the power of God's Word, education, discipleship, and mentorship.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe the agenda of God's Kingdom is immense and intentional. Through formal and informal education, we unlock human potential and maximize fruit-bearing in individuals and society.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4AF37]">
              <p className="text-xl font-semibold text-[#7B5BA7] italic">
                "Kingdom – God's Heartbeat, God's Priority"
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Occupy till I come
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
