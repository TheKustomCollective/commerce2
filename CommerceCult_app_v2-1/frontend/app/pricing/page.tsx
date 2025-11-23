import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
          <p className="text-sm text-gray-500">No credit card required</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          
          <PricingCard
            name="Starter"
            price="$29"
            period="/month"
            description="Perfect for validating your business idea"
            features={[
              "1 Business Plan Generation",
              "Basic Market Analysis",
              "5 Template Access",
              "ROI Calculator",
              "Loan Calculator",
              "Email Support",
              "Community Access"
            ]}
            cta={{ text: "Start Free Trial", href: "/signup?plan=starter" }}
            popular={false}
          />

          <PricingCard
            name="Professional"
            price="$79"
            period="/month"
            description="For entrepreneurs ready to launch"
            features={[
              "5 Business Plans/month",
              "Advanced Market Analysis",
              "Unlimited Template Access",
              "AI Website Generator",
              "50 Landing Pages",
              "Funding Intelligence",
              "Priority Support",
              "All Calculators & Tools",
              "Custom Branding"
            ]}
            cta={{ text: "Start Free Trial", href: "/signup?plan=professional" }}
            popular={true}
          />

          <PricingCard
            name="Enterprise"
            price="$199"
            period="/month"
            description="For growing businesses and agencies"
            features={[
              "Unlimited Business Plans",
              "Full Market Intelligence",
              "Unlimited Templates",
              "Unlimited Websites",
              "Unlimited Landing Pages",
              "White-label Options",
              "API Access",
              "Dedicated Account Manager",
              "Custom Integrations",
              "Team Collaboration (up to 10 users)"
            ]}
            cta={{ text: "Start Free Trial", href: "/signup?plan=enterprise" }}
            popular={false}
          />

        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compare All Features</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Starter</th>
                  <th className="px-6 py-4 text-center font-semibold">Professional</th>
                  <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <FeatureRow feature="Business Plans/month" starter="1" professional="5" enterprise="Unlimited" />
                <FeatureRow feature="Market Analysis" starter="Basic" professional="Advanced" enterprise="Full" />
                <FeatureRow feature="Templates" starter="5" professional="Unlimited" enterprise="Unlimited" />
                <FeatureRow feature="Website Generator" starter="✗" professional="✓" enterprise="✓" />
                <FeatureRow feature="Landing Pages" starter="✗" professional="50/mo" enterprise="Unlimited" />
                <FeatureRow feature="Funding Intelligence" starter="✗" professional="✓" enterprise="✓" />
                <FeatureRow feature="Calculators" starter="Basic" professional="All" enterprise="All" />
                <FeatureRow feature="AI Content Generation" starter="Limited" professional="✓" enterprise="✓" />
                <FeatureRow feature="White-label" starter="✗" professional="✗" enterprise="✓" />
                <FeatureRow feature="API Access" starter="✗" professional="✗" enterprise="✓" />
                <FeatureRow feature="Team Members" starter="1" professional="1" enterprise="10" />
                <FeatureRow feature="Support" starter="Email" professional="Priority" enterprise="Dedicated" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FAQ 
              question="Can I cancel anytime?"
              answer="Yes! You can cancel your subscription at any time. No long-term contracts or commitments required."
            />
            <FAQ 
              question="What payment methods do you accept?"
              answer="We accept all major credit cards (Visa, Mastercard, American Express) and PayPal."
            />
            <FAQ 
              question="Is there a free trial?"
              answer="Yes! All plans come with a 14-day free trial. No credit card required to start."
            />
            <FAQ 
              question="Can I upgrade or downgrade my plan?"
              answer="Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle."
            />
            <FAQ 
              question="Do you offer refunds?"
              answer="We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund."
            />
            <FAQ 
              question="What happens to my data if I cancel?"
              answer="Your data remains accessible for 30 days after cancellation. You can export all your business plans and documents at any time."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of entrepreneurs building successful businesses with CommerceCult.
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
}

function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  cta, 
  popular 
}: { 
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: { text: string; href: string }
  popular: boolean
}) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg p-8 ${popular ? 'ring-2 ring-blue-600' : 'border border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-gray-600">{period}</span>
      </div>
      <Link 
        href={cta.href}
        className={`block text-center py-3 rounded-lg font-semibold mb-8 transition ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {cta.text}
      </Link>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FeatureRow({ feature, starter, professional, enterprise }: { feature: string; starter: string; professional: string; enterprise: string }) {
  return (
    <tr>
      <td className="px-6 py-4 text-gray-900 font-medium">{feature}</td>
      <td className="px-6 py-4 text-center text-gray-600">{starter}</td>
      <td className="px-6 py-4 text-center text-gray-600">{professional}</td>
      <td className="px-6 py-4 text-center text-gray-600">{enterprise}</td>
    </tr>
  )
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
