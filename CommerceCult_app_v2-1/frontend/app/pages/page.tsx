'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MyPagesPage() {
  const [pages, setPages] = useState([
    {
      id: 1,
      name: 'My Business Landing Page',
      subdomain: 'johndoe',
      fullUrl: 'johndoe.commercecult.app',
      status: 'Published',
      views: 1247,
      lastEdited: '2 hours ago'
    }
  ])

  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newPage, setNewPage] = useState({
    name: '',
    subdomain: '',
    template: 'blank'
  })

  const handleCreatePage = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app: API call to create subdomain and page
    const page = {
      id: pages.length + 1,
      name: newPage.name,
      subdomain: newPage.subdomain,
      fullUrl: `${newPage.subdomain}.commercecult.app`,
      status: 'Draft',
      views: 0,
      lastEdited: 'Just now'
    }
    setPages([...pages, page])
    setShowCreateModal(false)
    setNewPage({ name: '', subdomain: '', template: 'blank' })
    alert(`Page created! Visit: ${page.fullUrl}`)
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Pages</h1>
            <p className="text-gray-600 text-lg">
              Host unlimited pages free at yourname.commercecult.app
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            + Create New Page
          </button>
        </div>

        {/* Feature Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-start gap-4">
            <div className="text-5xl">🌐</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Free Custom Subdomain Hosting</h2>
              <p className="text-lg opacity-90 mb-4">
                Every CommerceCult member gets unlimited free pages with custom subdomains. 
                Perfect for landing pages, portfolios, product launches, or event pages.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-white/20 px-4 py-2 rounded-lg">✓ Unlimited pages</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg">✓ Custom subdomain</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg">✓ SSL included</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg">✓ Analytics included</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pages List */}
        {pages.length > 0 ? (
          <div className="grid gap-6">
            {pages.map(page => (
              <PageCard key={page.id} page={page} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-2xl font-bold mb-2">No pages yet</h3>
            <p className="text-gray-600 mb-6">
              Create your first free page and get your custom subdomain
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Create Your First Page
            </button>
          </div>
        )}

        {/* Templates Preview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Page Templates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TemplateCard
              name="Blank Canvas"
              description="Start from scratch with a blank page"
              icon="📝"
            />
            <TemplateCard
              name="Business Landing"
              description="Professional landing page for your business"
              icon="🏢"
            />
            <TemplateCard
              name="Product Launch"
              description="Launch page with countdown and email capture"
              icon="🚀"
            />
            <TemplateCard
              name="Portfolio"
              description="Showcase your work and projects"
              icon="🎨"
            />
            <TemplateCard
              name="Event Page"
              description="Promote events with RSVP functionality"
              icon="🎉"
            />
            <TemplateCard
              name="Coming Soon"
              description="Build hype with a coming soon page"
              icon="⏰"
            />
          </div>
        </div>
      </div>

      {/* Create Page Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Create New Page</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreatePage} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Page Name
                </label>
                <input
                  type="text"
                  value={newPage.name}
                  onChange={(e) => setNewPage({ ...newPage, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="My Awesome Business"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Choose Your Subdomain
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newPage.subdomain}
                    onChange={(e) => setNewPage({ ...newPage, subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="yourname"
                    pattern="[a-z0-9-]+"
                    required
                  />
                  <span className="text-gray-600 font-semibold">.commercecult.app</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Only lowercase letters, numbers, and hyphens. Must be unique.
                </p>
                {newPage.subdomain && (
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">
                      Your page will be: <span className="text-blue-600">{newPage.subdomain}.commercecult.app</span>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Choose Template
                </label>
                <select
                  value={newPage.template}
                  onChange={(e) => setNewPage({ ...newPage, template: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="blank">Blank Canvas</option>
                  <option value="business">Business Landing</option>
                  <option value="product">Product Launch</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="event">Event Page</option>
                  <option value="coming-soon">Coming Soon</option>
                </select>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <p className="font-semibold text-green-800">100% Free Forever</p>
                    <p className="text-sm text-green-700">
                      Custom subdomain, SSL certificate, unlimited bandwidth, and analytics included at no cost.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Create Page
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

function PageCard({ page }: { page: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{page.name}</h3>
          <a
            href={`https://${page.fullUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            {page.fullUrl} ↗
          </a>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          page.status === 'Published' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {page.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <span className="text-gray-500">Views</span>
          <div className="text-2xl font-bold">{page.views.toLocaleString()}</div>
        </div>
        <div>
          <span className="text-gray-500">Last Edited</span>
          <div className="text-lg font-semibold">{page.lastEdited}</div>
        </div>
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <Link
          href={`/pages/${page.id}/edit`}
          className="flex-1 text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Edit Page
        </Link>
        <button className="px-4 py-2 border-2 border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition">
          Analytics
        </button>
        <button className="px-4 py-2 border-2 border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition">
          Settings
        </button>
      </div>
    </div>
  )
}

function TemplateCard({ name, description, icon }: { name: string; description: string; icon: string }) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition cursor-pointer">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
