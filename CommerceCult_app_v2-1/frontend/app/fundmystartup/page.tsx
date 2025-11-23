'use client';

import Link from 'next/link';

export default function FundMyStartup() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 shadow-lg border-b-4 border-amber-500">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-amber-400 hover:text-amber-300 mb-2 inline-block text-sm">
            ← Back to CommerceCult
          </Link>
          <div className="flex items-center gap-4">
            {/* Graduation Cap Logo */}
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Cap base */}
                <polygon
                  points="50,30 10,45 50,60 90,45"
                  fill="#000000"
                  stroke="#FFD700"
                  strokeWidth="2"
                />
                {/* Cap top */}
                <rect
                  x="35"
                  y="20"
                  width="30"
                  height="15"
                  fill="#000000"
                  stroke="#FFD700"
                  strokeWidth="2"
                />
                {/* Tassel string */}
                <line
                  x1="65"
                  y1="25"
                  x2="75"
                  y2="40"
                  stroke="#FFD700"
                  strokeWidth="2"
                />
                {/* Tassel */}
                <circle cx="75" cy="40" r="4" fill="#FFD700" />
                <line x1="75" y1="44" x2="75" y2="52" stroke="#FFD700" strokeWidth="2" />
                <line x1="73" y1="52" x2="77" y2="52" stroke="#FFD700" strokeWidth="3" />
                <line x1="72" y1="54" x2="78" y2="54" stroke="#FFD700" strokeWidth="3" />
              </svg>
            </div>
            <h1 className="text-5xl font-serif font-bold">FundMyStartup</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Empowering Tomorrow's Entrepreneurs
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Join our academic community dedicated to nurturing innovative startups. 
          We provide the knowledge, resources, and funding to transform your ideas into reality.
        </p>
        <div className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg">
          Applications Opening Soon
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 shadow-inner">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Our Academic Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg shadow-md border-t-4 border-amber-500">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">Research-Backed</h4>
              <p className="text-gray-700">
                Our funding decisions are guided by rigorous market research and academic principles of business success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg shadow-md border-t-4 border-amber-500">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">Mentorship Program</h4>
              <p className="text-gray-700">
                Learn from experienced entrepreneurs and professors who provide guidance throughout your startup journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg shadow-md border-t-4 border-amber-500">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">Smart Funding</h4>
              <p className="text-gray-700">
                Access capital with educational support to ensure you're prepared for every stage of growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">$2M+</div>
              <div className="text-gray-300 font-serif">Total Funding</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-gray-300 font-serif">Startups Funded</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">85%</div>
              <div className="text-gray-300 font-serif">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">30+</div>
              <div className="text-gray-300 font-serif">Expert Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
          The Application Process
        </h3>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 font-serif">Submit Your Proposal</h4>
              <p className="text-gray-700">Present your startup idea with a comprehensive business plan and market analysis.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 font-serif">Academic Review</h4>
              <p className="text-gray-700">Our panel of experts evaluates your proposal using proven academic frameworks.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 font-serif">Mentorship Matching</h4>
              <p className="text-gray-700">Get paired with experienced mentors aligned with your industry and goals.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 font-serif">Receive Funding</h4>
              <p className="text-gray-700">Access capital and ongoing educational support to launch and grow your startup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-100 to-amber-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Ready to Launch Your Startup?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join the next cohort of funded entrepreneurs. Applications are reviewed quarterly.
          </p>
          <button className="bg-gray-900 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-800 transition-all duration-300 border-2 border-amber-500">
            Apply for Funding
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon points="50,30 10,45 50,60 90,45" fill="#000000" stroke="#FFD700" strokeWidth="2" />
                <rect x="35" y="20" width="30" height="15" fill="#000000" stroke="#FFD700" strokeWidth="2" />
                <line x1="65" y1="25" x2="75" y2="40" stroke="#FFD700" strokeWidth="2" />
                <circle cx="75" cy="40" r="4" fill="#FFD700" />
              </svg>
            </div>
            <span className="text-2xl font-serif font-bold">FundMyStartup</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 FundMyStartup. Empowering entrepreneurs through education and funding.
          </p>
        </div>
      </footer>
    </main>
  );
}
