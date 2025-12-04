'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MarketplacePage() {
  const [userType, setUserType] = useState<'vendor' | 'buyer' | null>(null)
  const [showListingModal, setShowListingModal] = useState(false)

  const featuredProducts = [
    {
      id: 1,
      vendor: 'Artisan Goods Co',
      product: 'Handcrafted Wooden Office Accessories',
      category: 'Office Supplies',
      moq: '500 units',
      priceRange: '$8-12 per unit',
      image: '🪵',
      description: 'Premium handcrafted wooden desk organizers and accessories'
    },
    {
      id: 2,
      vendor: 'EcoTech Solutions',
      product: 'Biodegradable Packaging Materials',
      category: 'Packaging',
      moq: '10,000 units',
      priceRange: '$0.15-0.30 per unit',
      image: '📦',
      description: 'Sustainable packaging solution made from plant-based materials'
    },
    {
      id: 3,
      vendor: 'Creative Marketing Labs',
      product: 'Social Media Campaign Framework',
      category: 'Marketing Services',
      moq: '1 campaign',
      priceRange: '$5,000-25,000',
      image: '📱',
      description: 'Proven viral marketing strategy that generated 10M+ impressions'
    },
    {
      id: 4,
      vendor: 'Smart Snack Co',
      product: 'Organic Energy Bars',
      category: 'Food & Beverage',
      moq: '5,000 units',
      priceRange: '$1.20-1.80 per unit',
      image: '🍫',
      description: 'All-natural energy bars with unique flavor profiles'
    }
  ]

  const categories = [
    { name: 'Products', icon: '📦', count: 234 },
    { name: 'Services', icon: '🛠️', count: 156 },
    { name: 'Technology', icon: '💻', count: 89 },
    { name: 'Marketing Ideas', icon: '💡', count: 127 },
    { name: 'Manufacturing', icon: '🏭', count: 45 },
    { name: 'Food & Beverage', icon: '🍽️', count: 67 }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-3xl p-12 text-white mb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-7xl">🐝</div>
              <div>
                <h1 className="text-5xl font-bold mb-2">Bee Spoke Marketplace</h1>
                <p className="text-lg opacity-90">Handpicked B2B Solutions for Your Business</p>
              </div>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Connect microbusinesses with enterprise buyers. Sell products, services, and innovative ideas at scale.
            </p>
            <div className="flex gap-4">
              <Link
                href="/marketplace/vendor"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block text-center"
              >
                I'm a Vendor
              </Link>
              <Link
                href="/marketplace/buyer"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition border-2 border-white inline-block text-center"
              >
                I'm a Buyer
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <StatCard icon="🏢" label="Enterprise Buyers" value="247" />
          <StatCard icon="🏪" label="Microbusinesses" value="1,834" />
          <StatCard icon="📦" label="Active Listings" value="3,421" />
          <StatCard icon="💰" label="Deals Closed" value="$12.4M" />
        </div>

        {/* Quick Action - Instant Auction */}
        <div className="mb-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2">⚡ Try Instant Auctions</h3>
              <p className="text-lg opacity-90">Buy and sell with transparent reserve pricing. Live bidding, instant results.</p>
            </div>
            <Link
              href="/marketplace/auction"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition whitespace-nowrap"
            >
              View Auctions →
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <button
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <div className="font-semibold">{cat.name}</div>
                <div className="text-sm text-gray-500">{cat.count} listings</div>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Listings */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Featured Opportunities</h2>
            <button
              onClick={() => setShowListingModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              + List Your Product
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">For Vendors</h3>
              <div className="space-y-6">
                <Step
                  number="1"
                  title="Create Your Profile"
                  description="Set up your business profile with certifications, capabilities, and past work"
                />
                <Step
                  number="2"
                  title="List Products/Services"
                  description="Upload products, set wholesale pricing, MOQs, and lead times"
                />
                <Step
                  number="3"
                  title="Get Discovered"
                  description="Enterprise buyers browse and send inquiries directly to you"
                />
                <Step
                  number="4"
                  title="Close Deals"
                  description="Negotiate terms, sign contracts, and scale your business"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-600">For Buyers</h3>
              <div className="space-y-6">
                <Step
                  number="1"
                  title="Browse Verified Vendors"
                  description="Search thousands of pre-vetted microbusinesses and products"
                />
                <Step
                  number="2"
                  title="Request Samples & Quotes"
                  description="Connect directly with vendors, request samples, negotiate pricing"
                />
                <Step
                  number="3"
                  title="Evaluate & Compare"
                  description="Review vendor ratings, certifications, and past buyer reviews"
                />
                <Step
                  number="4"
                  title="Source & Scale"
                  description="Place orders, manage contracts, and build long-term partnerships"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Vendor Benefits</h3>
            <ul className="space-y-3">
              <BenefitItem text="Access to Fortune 500 buyers" />
              <BenefitItem text="No upfront listing fees" />
              <BenefitItem text="Secure payment processing" />
              <BenefitItem text="Contract templates included" />
              <BenefitItem text="Marketing support for listings" />
              <BenefitItem text="Seller protection policies" />
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Buyer Benefits</h3>
            <ul className="space-y-3">
              <BenefitItem text="Discover unique, innovative products" />
              <BenefitItem text="Direct relationships with makers" />
              <BenefitItem text="Better margins than distributors" />
              <BenefitItem text="Flexible MOQs and terms" />
              <BenefitItem text="Support small business initiatives" />
              <BenefitItem text="Verified vendor credentials" />
            </ul>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-3xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SuccessStory
              company="Tech Startup → Amazon"
              deal="$450K first order"
              story="Small software company licensed AI algorithm to Amazon Web Services"
            />
            <SuccessStory
              company="Artisan Foods → Whole Foods"
              deal="1,200 stores"
              story="Local hot sauce brand now in every Whole Foods nationwide"
            />
            <SuccessStory
              company="Design Studio → Nike"
              deal="$2M contract"
              story="3-person design team won Nike's innovation challenge"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 1,834 vendors already connecting with enterprise buyers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketplace/vendor-signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Become a Vendor
            </Link>
            <Link
              href="/marketplace/buyer-signup"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition border-2 border-white"
            >
              Register as Buyer
            </Link>
          </div>
        </div>
      </div>

      {/* Create Listing Modal */}
      {showListingModal && (
        <ListingModal onClose={() => setShowListingModal(false)} />
      )}
    </div>
  )
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition">
      <div className="flex gap-6">
        <div className="text-6xl">{product.image}</div>
        <div className="flex-1">
          <div className="text-sm text-blue-600 font-semibold mb-1">{product.category}</div>
          <h3 className="text-xl font-bold mb-2">{product.product}</h3>
          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-xs text-gray-500">By {product.vendor}</div>
              <div className="text-sm font-semibold text-gray-800">{product.priceRange}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">MOQ</div>
              <div className="text-sm font-semibold text-gray-800">{product.moq}</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
              Request Quote
            </button>
            <button className="px-4 py-2 border-2 border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition text-sm">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-green-600 text-xl">✓</span>
      <span>{text}</span>
    </li>
  )
}

function SuccessStory({ company, deal, story }: { company: string; deal: string; story: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">🏆</div>
      <h4 className="font-bold text-lg mb-2">{company}</h4>
      <div className="text-2xl font-bold text-green-600 mb-3">{deal}</div>
      <p className="text-sm text-gray-600">{story}</p>
    </div>
  )
}

function ListingModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    description: '',
    moq: '',
    priceRange: '',
    leadTime: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Listing created! Our team will review and publish within 24 hours.')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Create New Listing</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl">×</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Product/Service Name</label>
            <input
              type="text"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="e.g., Handcrafted Wooden Desk Organizers"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select category</option>
              <option value="products">Physical Products</option>
              <option value="services">Services</option>
              <option value="technology">Technology/Software</option>
              <option value="marketing">Marketing Ideas</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="food">Food & Beverage</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              rows={4}
              placeholder="Describe your product, unique features, materials, certifications..."
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum Order Quantity (MOQ)</label>
              <input
                type="text"
                value={formData.moq}
                onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g., 500 units"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
              <input
                type="text"
                value={formData.priceRange}
                onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g., $8-12 per unit"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Lead Time</label>
            <input
              type="text"
              value={formData.leadTime}
              onChange={(e) => setFormData({ ...formData, leadTime: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="e.g., 4-6 weeks"
              required
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> All listings are reviewed by our team before publishing. 
              We'll contact you within 24 hours to verify your business credentials.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
