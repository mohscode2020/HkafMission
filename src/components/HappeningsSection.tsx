export default function HappeningsSection() {
  return (
    <section className="py-20 bg-[#E6DFF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7B5BA7] mb-4">
            Recent Impact & Updates
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-[#7B5BA7] mb-6">
            Dear HKAF Supporter,
          </h3>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Grace and peace be multiplied to you.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are pleased to share updates on the impact of your generosity. Your support continues to transform lives and raise future leaders rooted in Kingdom values.
          </p>
        </div>
      
    <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <img
              src="/shoesandbagsdonations.jpeg"
              alt="Shoes and BagsDonation"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-[#7B5BA7] mb-2">
                Kindergarten(KG) Support
              </h4>
              <p className="text-gray-700">
                Kindergarten(KG) learners received shoes and bags as awards for punctuality, completing homework, and doing assignments. 
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <img
              src="/shoes_donation_primarySch.jpeg"
              alt="shoes_donation_primarySch"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-[#7B5BA7] mb-2">
                Award for Quiz Winners
              </h4>
              <p className="text-gray-700">
                Winners of our monthly quiz were awarded with shoes and Bags.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <img
              src="/staff_donation.jpeg"
              alt="Child Support"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-[#7B5BA7] mb-2">
                Encouraging Positive Learning Habits
              </h4>
              <p className="text-gray-700">
                The initiative supports young learners by providing shoes and bags as a means of encouragement.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <img
              src="/donation_at_ebenezer1.jpeg"
              alt="Donation at Ebenezer"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-[#7B5BA7] mb-2">
                School Support Program
              </h4>
              <p className="text-gray-700">
                Providing essential school furniture and resources to empower learning.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <img
              src="/donation_at_ebenezer2.jpeg"
              alt="Community Donation"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-[#7B5BA7] mb-2">
                Educational Infrastructure
              </h4>
              <p className="text-gray-700">
                Building foundations for excellence in education and faith.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <img
              src="/childsuportdonation.jpeg"
              alt="Child Support"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-[#7B5BA7] mb-2">
                Child Support Initiative
              </h4>
              <p className="text-gray-700">
                Direct support changing lives one child at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
