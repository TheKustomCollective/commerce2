import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Turn Your Business Ideas Into Reality
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered business intelligence software that generates comprehensive business plans, 
            analyzes market trends, and provides actionable metrics for securing funding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/fundmystartup" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-lg"
            >
              Enter FundMyStartup Contest 🎁
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Powerful AI-Driven Tools</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Everything you need to launch and grow your business</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🧠"
              title="AI Business Plan Generator"
              description="Generate comprehensive, investor-ready business plans based on trending topics or your existing business goals."
              href="/features/business-plan-generator"
            />
            <FeatureCard
              icon="📊"
              title="Market Analysis"
              description="AI-powered market research and competitor analysis to validate your business idea and identify opportunities."
              href="/features/market-analysis"
            />
            <FeatureCard
              icon="💰"
              title="Funding Intelligence"
              description="Get matched with SBA loans and funding options tailored to your business type with actionable metrics."
              href="/features/funding"
            />
            <FeatureCard
              icon="🌐"
              title="Website Generator"
              description="Create professional websites with AI-generated content. Choose from 100+ industry-specific templates."
              href="/features/website-generator"
            />
            <FeatureCard
              icon="📈"
              title="ROI Calculator"
              description="Calculate potential returns, break-even points, and financial projections with AI recommendations."
              href="/calculators/roi"
            />
            <FeatureCard
              icon="🏦"
              title="Loan Repayment Calculator"
              description="Plan your financing strategy with detailed loan repayment schedules and cost comparisons."
              href="/calculators/loan"
            />
          </div>
        </div>
      </section>

      {/* FundMyStartup CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🎉 FundMyStartup Campaign</h2>
          <p className="text-xl mb-8">
            Submit your innovative business idea for a chance to win funding, mentorship, and resources to launch your startup!
          </p>
          <Link 
            href="/fundmystartup" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-xl"
          >
            Enter the Contest Now →
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Step number="1" title="Describe Your Idea" description="Tell us about your business concept or choose from trending opportunities" />
            <Step number="2" title="AI Analysis" description="Our AI analyzes market trends, competition, and viability in seconds" />
            <Step number="3" title="Get Your Plan" description="Receive a comprehensive business plan with financial projections and metrics" />
            <Step number="4" title="Secure Funding" description="Access matched funding options and submit applications with confidence" />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Trusted by Entrepreneurs Worldwide</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Stat number="10,000+" label="Business Plans Generated" />
            <Stat number="$50M+" label="Funding Secured" />
            <Stat number="500+" label="Templates Available" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Business?</h2>
          <p className="text-xl mb-8">
            Join thousands of entrepreneurs using AI to turn their ideas into successful businesses.
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-xl"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, href }: { icon: string; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-5xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-xl text-gray-600">{label}</div>
    </div>
  )
}
