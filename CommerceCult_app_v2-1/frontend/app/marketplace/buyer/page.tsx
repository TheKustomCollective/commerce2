'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BuyerDashboardPage() {
  const [savedVendors, setSavedVendors] = useState([
    {
      id: 1,
      name: 'Artisan Goods Co',
      category: 'Office Supplies',
      products: 12,
      rating: 4.8,
      orders: 0
    },
    {
      id: 2,
      name: 'EcoTech Solutions',
      category: 'Packaging',
      products: 8,
      rating: 4.9,
      orders: 2
    }
  ])

  const activeQuotes = [
    {
      id: 1,
      vendor: 'Artisan Goods Co',
      product: 'Handcrafted Wooden Desk Organizers',
      quantity: '10,000 units',
      price: '$95,000',
      status: 'Pending',
      expires: '5 days'
    },
    {
      id: 2,
      vendor: 'Smart Snack Co',
      product: 'Organic Energy Bars',
      quantity: '5,000 units',
      price: '$7,500',
      status: 'Accepted',
      expires: 'N/A'
    }
  ]

  const recentOrders = [
    {
      id: 1,
      vendor: 'EcoTech Solutions',
      product: 'Biodegradable Packaging',
      amount: '$28,500',
      status: 'In Production',
      delivery: 'Feb 15, 2025'
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link href="/marketplace" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 font-semibold">
          ← Back to Marketplace
        </Link>
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-5xl">🐝</span>
              <h1 className="text-4xl font-bold">Bee Spoke Buyer Dashboard</h1>
            </div>
            <p className="text-gray-600">Manage vendors, quotes, and orders</p>
          </div>
          <Link
            href="/marketplace"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Browse Marketplace
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <StatCard icon="🏪" label="Saved Vendors" value="24" color="blue" />
          <StatCard icon="📝" label="Active Quotes" value="8" color="purple" />
          <StatCard icon="📦" label="Orders YTD" value="15" color="green" />
          <StatCard icon="💰" label="Spend YTD" value="$342K" color="orange" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Active Quotes */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Active Quotes</h2>
            <div className="space-y-4">
              {activeQuotes.map(quote => (
                <QuoteCard key={quote.id} quote={quote} />
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
            <div className="space-y-4">
              {recentOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
            {recentOrders.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <div className="text-5xl mb-3">📦</div>
                <p>No orders yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Saved Vendors */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Saved Vendors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {savedVendors.map(vendor => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </div>

        {/* Sourcing Tools */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-bold text-lg mb-2">Advanced Search</h3>
            <p className="text-sm text-gray-700 mb-4">
              Filter by certifications, location, MOQ, and more
            </p>
            <button className="text-blue-600 font-semibold hover:underline">
              Start Search →
            </button>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2">Vendor Comparison</h3>
            <p className="text-sm text-gray-700 mb-4">
              Compare pricing, lead times, and reviews side-by-side
            </p>
            <button className="text-green-600 font-semibold hover:underline">
              Compare Vendors →
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold text-lg mb-2">RFQ Template</h3>
            <p className="text-sm text-gray-700 mb-4">
              Send professional Request for Quote to multiple vendors
            </p>
            <button className="text-purple-600 font-semibold hover:underline">
              Create RFQ →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) {
  const colorClasses: Record<string, string> = {
    blue: 'from-blue-50 to-blue-100',
    green: 'from-green-50 to-green-100',
    purple: 'from-purple-50 to-purple-100',
    orange: 'from-orange-50 to-orange-100'
  }

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-6`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function QuoteCard({ quote }: { quote: any }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold">{quote.product}</h4>
          <p className="text-sm text-gray-600">{quote.vendor}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          quote.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
        }`}>
          {quote.status}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm mb-3">
        <div>
          <div className="text-gray-500">Quantity</div>
          <div className="font-semibold">{quote.quantity}</div>
        </div>
        <div>
          <div className="text-gray-500">Total Price</div>
          <div className="font-semibold">{quote.price}</div>
        </div>
        <div>
          <div className="text-gray-500">Expires</div>
          <div className="font-semibold">{quote.expires}</div>
        </div>
      </div>
      {quote.status === 'Pending' && (
        <div className="flex gap-2">
          <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition text-sm">
            Accept
          </button>
          <button className="flex-1 border-2 border-gray-300 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition text-sm">
            Negotiate
          </button>
        </div>
      )}
    </div>
  )
}

function OrderCard({ order }: { order: any }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold">{order.product}</h4>
          <p className="text-sm text-gray-600">{order.vendor}</p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
          {order.status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
        <div>
          <div className="text-gray-500">Order Value</div>
          <div className="font-semibold text-lg">{order.amount}</div>
        </div>
        <div>
          <div className="text-gray-500">Est. Delivery</div>
          <div className="font-semibold">{order.delivery}</div>
        </div>
      </div>
      <button className="w-full text-blue-600 font-semibold hover:underline text-sm">
        View Order Details →
      </button>
    </div>
  )
}

function VendorCard({ vendor }: { vendor: any }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold text-lg">{vendor.name}</h4>
          <p className="text-sm text-gray-600">{vendor.category}</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">⭐</span>
          <span className="font-semibold">{vendor.rating}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
        <div>
          <div className="text-gray-500">Products</div>
          <div className="font-semibold">{vendor.products}</div>
        </div>
        <div>
          <div className="text-gray-500">Your Orders</div>
          <div className="font-semibold">{vendor.orders}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
          View Products
        </button>
        <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm">
          Contact
        </button>
      </div>
    </div>
  )
}
