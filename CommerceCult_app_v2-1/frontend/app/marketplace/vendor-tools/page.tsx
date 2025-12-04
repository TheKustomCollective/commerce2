'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function VendorToolsSuitePage() {
  const [activeTab, setActiveTab] = useState<'shopping-cart' | 'payments' | 'integrations' | 'network'>('shopping-cart');

  const paymentProcessors = [
    { name: 'Stripe', logo: '💳', status: 'connected', fees: '2.9% + 30¢', features: ['ACH', 'Cards', 'Digital Wallets'] },
    { name: 'PayPal', logo: '💰', status: 'available', fees: '3.49% + 49¢', features: ['PayPal', 'Venmo', 'Cards'] },
    { name: 'Square', logo: '◼️', status: 'available', fees: '2.6% + 10¢', features: ['In-person', 'Online', 'Invoicing'] },
    { name: 'Authorize.net', logo: '🏦', status: 'available', fees: '2.9% + 30¢', features: ['Enterprise', 'Fraud Detection'] },
    { name: 'Braintree', logo: '🌳', status: 'available', fees: '2.59% + 49¢', features: ['PayPal owned', 'Multi-currency'] },
  ];

  const integrations = [
    { 
      name: 'Mailchimp', 
      logo: '📧', 
      category: 'Email Marketing',
      status: 'connected',
      description: 'Sync customers, automate campaigns, track ROI'
    },
    { 
      name: 'QuickBooks', 
      logo: '📊', 
      category: 'Accounting',
      status: 'available',
      description: 'Auto-sync invoices, expenses, and revenue'
    },
    { 
      name: 'Shopify', 
      logo: '🛍️', 
      category: 'E-commerce',
      status: 'available',
      description: 'Import products, sync inventory in real-time'
    },
    { 
      name: 'Zapier', 
      logo: '⚡', 
      category: 'Automation',
      status: 'available',
      description: 'Connect 5,000+ apps with custom workflows'
    },
    { 
      name: 'Google Analytics', 
      logo: '📈', 
      category: 'Analytics',
      status: 'connected',
      description: 'Track traffic, conversions, and customer behavior'
    },
    { 
      name: 'HubSpot', 
      logo: '🎯', 
      category: 'CRM',
      status: 'available',
      description: 'Manage leads, deals, and customer relationships'
    },
    { 
      name: 'Slack', 
      logo: '💬', 
      category: 'Communication',
      status: 'available',
      description: 'Get instant notifications for orders and inquiries'
    },
    { 
      name: 'ShipStation', 
      logo: '📦', 
      category: 'Shipping',
      status: 'available',
      description: 'Automate shipping labels and tracking'
    },
  ];

  const networkPartners = [
    {
      name: 'Amazon Business',
      type: 'Marketplace',
      benefit: 'Access to 6M+ B2B buyers',
      status: 'Partnership Available'
    },
    {
      name: 'Alibaba',
      type: 'Global Sourcing',
      benefit: 'International supplier network',
      status: 'Partnership Available'
    },
    {
      name: 'Faire',
      type: 'Wholesale Network',
      benefit: 'Connect with 700K+ retailers',
      status: 'Partnership Available'
    },
    {
      name: 'Walmart Marketplace',
      type: 'Enterprise Buyer',
      benefit: 'Sell to Walmart stores nationwide',
      status: 'Partnership Available'
    },
    {
      name: 'Salesforce',
      type: 'CRM Platform',
      benefit: 'Enterprise sales pipeline management',
      status: 'Integration Available'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🛠️ Vendor Tools Suite
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Everything you need to run your wholesale business
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { id: 'shopping-cart', label: '🛒 Shopping Cart', icon: '🛒' },
            { id: 'payments', label: '💳 Payment Processors', icon: '💳' },
            { id: 'integrations', label: '🔗 Integrations', icon: '🔗' },
            { id: 'network', label: '🌐 Network Partners', icon: '🌐' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Shopping Cart Suite */}
        {activeTab === 'shopping-cart' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">🛒 Professional Shopping Cart Suite</h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete e-commerce solution with wholesale features, bulk pricing, and B2B checkout
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Core Features</h3>
                  <ul className="space-y-3">
                    <FeatureItem text="Customizable product catalog" />
                    <FeatureItem text="Bulk pricing & volume discounts" />
                    <FeatureItem text="MOQ (Minimum Order Quantity) enforcement" />
                    <FeatureItem text="Multi-tier pricing for different buyers" />
                    <FeatureItem text="Real-time inventory management" />
                    <FeatureItem text="Quote request system" />
                    <FeatureItem text="Purchase order generation" />
                    <FeatureItem text="Mobile-responsive checkout" />
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">B2B Specialized</h3>
                  <ul className="space-y-3">
                    <FeatureItem text="Net terms (Net 30, Net 60)" />
                    <FeatureItem text="Credit limit management" />
                    <FeatureItem text="Buyer approval workflow" />
                    <FeatureItem text="Custom catalogs per buyer" />
                    <FeatureItem text="Recurring orders & subscriptions" />
                    <FeatureItem text="CSV bulk order upload" />
                    <FeatureItem text="Tax exemption handling" />
                    <FeatureItem text="Multi-location shipping" />
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3">🎨 Customization Options</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold mb-2">Branding</div>
                    <div className="text-sm text-gray-600">Custom logo, colors, fonts</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold mb-2">Domain</div>
                    <div className="text-sm text-gray-600">Your own custom URL</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold mb-2">Checkout</div>
                    <div className="text-sm text-gray-600">Custom fields & workflows</div>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition">
                🚀 Activate Shopping Cart Suite
              </button>
            </div>
          </div>
        )}

        {/* Payment Processors */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">💳 Integrated Payment Processors</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with major payment providers - no coding required
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {paymentProcessors.map((processor, idx) => (
                <div key={idx} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 transition">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{processor.logo}</div>
                      <div>
                        <div className="font-bold text-xl">{processor.name}</div>
                        <div className="text-sm text-gray-600">{processor.fees}</div>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      processor.status === 'connected' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {processor.status === 'connected' ? '✅ Connected' : 'Connect'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {processor.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3">🛡️ Security & Compliance</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>PCI-DSS Level 1 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>3D Secure Authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Fraud Detection Built-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Automatic Chargeback Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Multi-Currency Support</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integrations */}
        {activeTab === 'integrations' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">🔗 Business Integrations</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect your favorite business tools seamlessly
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, idx) => (
                <div key={idx} className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 transition">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{integration.logo}</div>
                      <div>
                        <div className="font-bold">{integration.name}</div>
                        <div className="text-xs text-purple-600 font-semibold">{integration.category}</div>
                      </div>
                    </div>
                    {integration.status === 'connected' && (
                      <span className="text-green-600 text-xl">✓</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
                  <button className={`w-full py-2 rounded-lg font-semibold transition ${
                    integration.status === 'connected'
                      ? 'bg-gray-100 text-gray-600 cursor-default'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}>
                    {integration.status === 'connected' ? 'Connected' : 'Connect Now'}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-purple-50 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3">⚡ Request New Integration</h4>
              <p className="text-gray-600 mb-4">
                Don't see the tool you need? Request an integration and we'll prioritize it based on demand.
              </p>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="e.g., Salesforce, Monday.com, Notion..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                />
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition whitespace-nowrap">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Network Partners */}
        {activeTab === 'network' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">🌐 Network & Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 mb-8">
              Expand your reach through strategic partnerships and marketplace integrations
            </p>

            <div className="space-y-6 mb-8">
              {networkPartners.map((partner, idx) => (
                <div key={idx} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 transition">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{partner.name}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                          {partner.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{partner.benefit}</p>
                      <div className="flex items-center gap-4">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
                          Learn More
                        </button>
                        <button className="text-blue-600 font-semibold hover:text-blue-700">
                          Apply for Partnership →
                        </button>
                      </div>
                    </div>
                    <div className="text-5xl opacity-20">🤝</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3">📈 Partnership Benefits</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="font-semibold">Expanded Reach</div>
                    <div className="text-sm text-gray-600">Access millions of B2B buyers across partner networks</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <div className="font-semibold">Revenue Growth</div>
                    <div className="text-sm text-gray-600">Increase sales through multi-channel distribution</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <div className="font-semibold">Trust & Credibility</div>
                    <div className="text-sm text-gray-600">Leverage partner brand recognition and reputation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-semibold">Data Insights</div>
                    <div className="text-sm text-gray-600">Access market intelligence and buyer behavior data</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2">🤝 Interested in Partnership?</h4>
              <p className="text-gray-600 mb-4">
                We're actively seeking partnerships with complementary platforms to expand our vendor network and provide more value to our community.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
                📧 Contact Partnership Team
              </button>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/marketplace/vendor" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Vendor Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <span className="text-green-600 font-bold">✓</span>
      <span>{text}</span>
    </li>
  );
}
