'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function VendorDashboardPage() {
  const [listings, setListings] = useState([
    {
      id: 1,
      name: 'Handcrafted Wooden Desk Organizers',
      status: 'Active',
      views: 1247,
      inquiries: 23,
      quotes: 8,
      revenue: '$12,450'
    },
    {
      id: 2,
      name: 'Custom Leather Goods',
      status: 'Active',
      views: 892,
      inquiries: 15,
      quotes: 5,
      revenue: '$8,200'
    }
  ])

  const inquiries = [
    {
      id: 1,
      buyer: 'Walmart Procurement',
      product: 'Handcrafted Wooden Desk Organizers',
      message: 'Interested in 10,000 unit order. Can you provide samples?',
      date: '2 hours ago',
      status: 'New'
    },
    {
      id: 2,
      buyer: 'Target Corporate',
      product: 'Custom Leather Goods',
      message: 'Looking for exclusive designs for our home goods line',
      date: '1 day ago',
      status: 'Responded'
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
            <h1 className="text-4xl font-bold mb-2">Vendor Dashboard</h1>
            <p className="text-gray-600">Manage your listings and inquiries</p>
          </div>
          <Link
            href="/marketplace"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            + Create New Listing
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          <StatCard icon="👁️" label="Total Views" value="2,139" color="blue" />
          <StatCard icon="💬" label="New Inquiries" value="38" color="green" />
          <StatCard icon="📝" label="Pending Quotes" value="13" color="purple" />
          <StatCard icon="✅" label="Closed Deals" value="7" color="orange" />
          <StatCard icon="💰" label="Total Revenue" value="$20,650" color="green" />
        </div>

        {/* Vendor Tools Suite Banner */}
        <div className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2">🛠️ Access Your Vendor Tools Suite</h3>
              <p className="text-lg opacity-90">
                Shopping cart, payment processors, integrations with Mailchimp, QuickBooks & more
              </p>
            </div>
            <Link
              href="/marketplace/vendor-tools"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition whitespace-nowrap"
            >
              Open Tools →
            </Link>
          </div>
        </div>

        {/* Active Listings */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Your Listings</h2>
          <div className="space-y-4">
            {listings.map(listing => (
              <ListingRow key={listing.id} listing={listing} />
            ))}
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Inquiries</h2>
          <div className="space-y-4">
            {inquiries.map(inquiry => (
              <InquiryCard key={inquiry.id} inquiry={inquiry} />
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4">💡 Tips to Increase Sales</h3>
          <ul className="space-y-2 text-sm">
            <li>✓ High-quality photos increase inquiries by 3x</li>
            <li>✓ Respond to inquiries within 24 hours</li>
            <li>✓ Offer samples to serious buyers</li>
            <li>✓ Keep your pricing competitive</li>
            <li>✓ Get verified to build trust</li>
          </ul>
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

function ListingRow({ listing }: { listing: any }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg">{listing.name}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
            listing.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
          }`}>
            {listing.status}
          </span>
        </div>
        <button className="text-blue-600 hover:underline font-semibold">Edit</button>
      </div>
      <div className="grid grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-gray-500">Views</div>
          <div className="font-bold text-lg">{listing.views}</div>
        </div>
        <div>
          <div className="text-gray-500">Inquiries</div>
          <div className="font-bold text-lg">{listing.inquiries}</div>
        </div>
        <div>
          <div className="text-gray-500">Quotes Sent</div>
          <div className="font-bold text-lg">{listing.quotes}</div>
        </div>
        <div>
          <div className="text-gray-500">Revenue</div>
          <div className="font-bold text-lg text-green-600">{listing.revenue}</div>
        </div>
      </div>
    </div>
  )
}

function InquiryCard({ inquiry }: { inquiry: any }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold">{inquiry.buyer}</h4>
          <p className="text-sm text-gray-600">{inquiry.product}</p>
        </div>
        <div className="text-right">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            inquiry.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
          }`}>
            {inquiry.status}
          </span>
          <div className="text-xs text-gray-500 mt-1">{inquiry.date}</div>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-3">{inquiry.message}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
        Respond
      </button>
    </div>
  )
}
