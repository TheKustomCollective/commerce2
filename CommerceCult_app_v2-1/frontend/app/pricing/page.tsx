'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business stage. Upgrade or downgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <PricingCard
            name="Starter"
            subtitle="For aspiring entrepreneurs"
            icon="🚀"
            monthlyPrice={0}
            annualPrice={0}
            billingCycle={billingCycle}
            popular={false}
            features={[
              'AI Business Plan Generator (3 per month)',
              'Basic Financial Calculator',
              '$0 Marketing Strategy Guide',
              'Community Forum Access',
              'Email Support',
              'Basic Templates Library',
            ]}
            limits="3 business plans/month, 10 mockups/month"
            cta="Get Started Free"
            link="/signup"
          />

          <PricingCard
            name="Professional"
            subtitle="For serious entrepreneurs"
            icon="💼"
            monthlyPrice={49}
            annualPrice={470}
            billingCycle={billingCycle}
            popular={true}
            features={[
              'Unlimited AI Business Plans',
              'AI Video Generator (20 videos/month)',
              'AI Podcast Generator (10 episodes/month)',
              'AI Product Mockups (Unlimited)',
              'AI Call Center Setup',
              'Marketing Toolbox (Full Access)',
              'ROI & Loan Calculators (Advanced)',
              'Priority Email Support',
              'Marketplace Vendor Access (Basic)',
              'Custom Branding',
              'Analytics Dashboard',
            ]}
            limits="Unlimited plans, 20 videos, 10 podcasts/month"
            cta="Start 14-Day Trial"
            link="/signup?plan=professional"
          />

          <PricingCard
            name="Business"
            subtitle="For growing companies"
            icon="🏢"
            monthlyPrice={149}
            annualPrice={1430}
            billingCycle={billingCycle}
            popular={false}
            features={[
              'Everything in Professional',
              'Unlimited AI Videos & Podcasts',
              'AI Call Center (Unlimited Agents)',
              'White-Label Shopping Cart Suite',
              'Payment Processing Integration',
              'Mailchimp + 50+ Integrations',
              'Marketplace Vendor (Premium)',
              'Instant Auction Access',
              'Dedicated Account Manager',
              '24/7 Phone Support',
              'Custom Integrations',
              'API Access',
            ]}
            limits="No limits on any features"
            cta="Start 14-Day Trial"
            link="/signup?plan=business"
          />

          <PricingCard
            name="Enterprise"
            subtitle="For large organizations"
            icon="🌐"
            monthlyPrice={null}
            annualPrice={null}
            billingCycle={billingCycle}
            popular={false}
            features={[
              'Everything in Business',
              'Unlimited Team Members',
              'Custom AI Model Training',
              'Multi-brand Management',
              'Advanced Security & Compliance',
              'Custom Contract Terms',
              'Dedicated Infrastructure',
              'On-premise Deployment Option',
              'SLA Guarantee (99.9% uptime)',
              'White-glove Onboarding',
              'Strategic Business Consulting',
              'Custom Feature Development',
            ]}
            limits="Completely customized to your needs"
            cta="Contact Sales"
            link="/about#contact"
          />

        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Add-ons & Extras</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AddonCard 
              icon="🎬" 
              name="Extra AI Videos" 
              description="50 additional videos per month" 
              price={29}
            />
            <AddonCard 
              icon="🎙️" 
              name="Extra Podcasts" 
              description="25 additional episodes per month" 
              price={19}
            />
            <AddonCard 
              icon="💰" 
              name="Marketplace Commission Reduction" 
              description="Reduce marketplace fees from 5% to 2.5%" 
              price={99}
            />
            <AddonCard 
              icon="🆘" 
              name="Premium Support Package" 
              description="1-hour response time, phone & Slack support" 
              price={199}
            />
          </div>
        </div>
      </section>

      {/* Marketplace Commission */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">💰 Marketplace Revenue Model</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-3">For Vendors (Sellers)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>5% commission</strong> on successful deals (2.5% with add-on)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>No listing fees or upfront costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>First $1,000 in sales: <strong>0% commission</strong></span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">For Buyers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Always free</strong> to browse and purchase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Buyer protection on all transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Escrow service included at no extra cost</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Processing Fees */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-4">💳 Payment Processing</h2>
            <p className="text-center text-gray-600 mb-8">
              We pass through standard processor fees with no markup
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">💳</div>
                <div className="font-bold mb-1">Credit Cards</div>
                <div className="text-2xl font-bold text-blue-600">2.9% + 30¢</div>
                <div className="text-xs text-gray-600 mt-1">Per transaction</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl mb-2">🏦</div>
                <div className="font-bold mb-1">ACH/Bank Transfer</div>
                <div className="text-2xl font-bold text-green-600">0.8%</div>
                <div className="text-xs text-gray-600 mt-1">Max $5 per transaction</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-bold mb-1">Digital Wallets</div>
                <div className="text-2xl font-bold text-purple-600">2.9% + 30¢</div>
                <div className="text-xs text-gray-600 mt-1">Apple Pay, Google Pay</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FAQ 
              question="Can I change plans anytime?"
              answer="Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any difference."
            />
            <FAQ 
              question="What payment methods do you accept?"
              answer="We accept all major credit cards (Visa, Mastercard, Amex, Discover), ACH bank transfers, and PayPal. Annual plans can also be invoiced."
            />
            <FAQ 
              question="Is there a free trial?"
              answer="Professional and Business plans come with a 60-day free trial. No credit card required to start. Starter plan is free forever."
            />
            <FAQ 
              question="What happens if I exceed my limits?"
              answer="We'll notify you when you're approaching limits. You can upgrade, purchase add-ons, or wait until next billing cycle."
            />
            <FAQ 
              question="Do you offer refunds?"
              answer="Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us for a full refund."
            />
            <FAQ 
              question="How does marketplace commission work?"
              answer="We charge 5% commission only on successful deals (when payment is received). First $1,000 in sales is commission-free for new vendors."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 10,000+ entrepreneurs who've launched with CommerceCult
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started Free →
          </Link>
        </div>
      </section>
    </div>
  )
}

function PricingCard({ 
  name, 
  subtitle,
  icon,
  monthlyPrice, 
  annualPrice, 
  billingCycle,
  features, 
  limits,
  cta, 
  link,
  popular 
}: { 
  name: string
  subtitle: string
  icon: string
  monthlyPrice: number | null
  annualPrice: number | null
  billingCycle: 'monthly' | 'annual'
  features: string[]
  limits: string
  cta: string
  link: string
  popular: boolean
}) {
  const getPrice = () => {
    if (monthlyPrice === null) return 'Custom';
    const price = billingCycle === 'monthly' ? monthlyPrice : Math.round(annualPrice! / 12);
    return monthlyPrice === 0 ? 'Free' : `$${price}`;
  };

  const getSavings = () => {
    if (monthlyPrice === null || monthlyPrice === 0) return null;
    const annualTotal = monthlyPrice * 12;
    const savings = annualTotal - annualPrice!;
    return savings;
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105 ${popular ? 'ring-4 ring-purple-600 relative' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6">
        <div className="text-5xl mb-3">{icon}</div>
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-6">{subtitle}</p>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold">{getPrice()}</span>
            {monthlyPrice !== null && monthlyPrice > 0 && (
              <span className="text-gray-600">/month</span>
            )}
          </div>
          {billingCycle === 'annual' && getSavings() && (
            <p className="text-sm text-green-600 font-semibold mt-2">
              Save ${getSavings()}/year
            </p>
          )}
          {billingCycle === 'annual' && monthlyPrice !== null && monthlyPrice > 0 && (
            <p className="text-xs text-gray-500 mt-1">
              Billed ${annualPrice} annually
            </p>
          )}
        </div>

        <Link
          href={link}
          className={`block w-full text-center py-3 rounded-lg font-bold mb-6 transition ${
            popular
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {cta}
        </Link>

        <div className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
          {limits}
        </div>
      </div>
    </div>
  );
}

function AddonCard({ icon, name, description, price }: { icon: string; name: string; description: string; price: number }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-bold text-purple-600">${price}</span>
        <span className="text-sm text-gray-600">/month</span>
      </div>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-semibold text-lg hover:text-blue-600 transition"
      >
        <span>{question}</span>
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <p className="mt-3 text-gray-600">{answer}</p>
      )}
    </div>
  );
}
