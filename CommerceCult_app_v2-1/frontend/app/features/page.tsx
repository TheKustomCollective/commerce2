import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Powerful Features for Every Entrepreneur</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to plan, launch, and grow your business with AI-powered intelligence
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Business Plan Generator */}
          <FeatureSection
            id="business-plan-generator"
            title="AI Business Plan Generator"
            description="Create comprehensive, investor-ready business plans in minutes, not weeks."
            icon="🧠"
            features={[
              "Generate plans from trending topics or your own ideas",
              "Analyze your current business and create growth strategies",
              "Financial projections and revenue models",
              "Market size and opportunity analysis",
              "Competitive landscape assessment",
              "Executive summary and pitch deck content",
              "SBA loan-ready documentation",
              "Customizable templates for every industry"
            ]}
            cta={{ text: "Try Business Plan Generator", href: "/signup" }}
          />

          {/* Market Analysis */}
          <FeatureSection
            id="market-analysis"
            title="AI Market Analysis"
            description="Validate your business idea with comprehensive market intelligence and competitor insights."
            icon="📊"
            reverse
            features={[
              "Real-time trending topic analysis",
              "Target audience identification",
              "Competitor analysis and positioning",
              "Market size and growth projections",
              "SWOT analysis generation",
              "Pricing strategy recommendations",
              "Market entry strategy",
              "Risk assessment and mitigation"
            ]}
            cta={{ text: "Analyze Your Market", href: "/signup" }}
          />

          {/* Website Generator */}
          <FeatureSection
            id="website-generator"
            title="AI Website & Content Generator"
            description="Launch professional websites with AI-generated content tailored to your business."
            icon="🌐"
            features={[
              "100+ industry-specific templates",
              "AI-generated website copy",
              "Landing page builder",
              "Full website generator",
              "SEO-optimized content",
              "Mobile-responsive designs",
              "E-commerce integration",
              "Custom branding and styling"
            ]}
            cta={{ text: "Create Your Website", href: "/signup" }}
          />

          {/* Funding Intelligence */}
          <FeatureSection
            id="funding"
            title="Funding Intelligence"
            description="Get matched with the right funding options and generate loan-ready applications."
            icon="💰"
            reverse
            features={[
              "SBA loan matching and requirements",
              "Business loan comparison",
              "Grant opportunities by industry",
              "Investor pitch deck generation",
              "Financial statements preparation",
              "Loan application assistance",
              "Funding milestone tracking",
              "Actionable metrics for lenders"
            ]}
            cta={{ text: "Explore Funding Options", href: "/signup" }}
          />

          {/* Calculators */}
          <FeatureSection
            id="calculators"
            title="Financial Calculators"
            description="Make informed decisions with AI-powered financial projections and analysis tools."
            icon="📈"
            features={[
              "ROI Calculator with industry benchmarks",
              "Loan Repayment Calculator",
              "Break-even Analysis",
              "Cash Flow Projections",
              "Pricing Strategy Calculator",
              "Startup Cost Estimator",
              "Revenue Forecasting",
              "Financial Scenario Planning"
            ]}
            cta={{ text: "Try Calculators", href: "/calculators" }}
          />

          {/* Templates Library */}
          <FeatureSection
            id="templates"
            title="500+ Business Templates"
            description="Access a comprehensive library of professional templates for every business need."
            icon="📝"
            reverse
            features={[
              "Business plan templates by industry",
              "Financial model templates",
              "Pitch deck templates",
              "Marketing plan templates",
              "Website templates",
              "Landing page designs",
              "Social media content templates",
              "Legal document templates"
            ]}
            cta={{ text: "Browse Templates", href: "/signup" }}
          />

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business Idea?</h2>
          <p className="text-xl mb-8">
            Start using our AI-powered tools today and join thousands of successful entrepreneurs.
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}

function FeatureSection({ 
  id, 
  title, 
  description, 
  icon, 
  features, 
  cta, 
  reverse = false 
}: { 
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  cta: { text: string; href: string }
  reverse?: boolean
}) {
  return (
    <div id={id} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
      <div className="flex-1">
        <div className="text-6xl mb-6">{icon}</div>
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-600 mb-8">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Link 
          href={cta.href}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {cta.text} →
        </Link>
      </div>
      <div className="flex-1">
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4">{icon}</div>
            <p className="text-gray-600">Visual preview coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}
