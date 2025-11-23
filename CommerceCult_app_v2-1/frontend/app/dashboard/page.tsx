'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const [userName] = useState('John Doe')
  const [recentProjects] = useState([
    {
      id: 1,
      name: 'Coffee Shop Business Plan',
      type: 'Business Plan',
      lastEdited: '2 hours ago',
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Tech Startup Market Analysis',
      type: 'Market Research',
      lastEdited: '1 day ago',
      status: 'Complete'
    },
    {
      id: 3,
      name: 'E-commerce Website',
      type: 'Website Builder',
      lastEdited: '3 days ago',
      status: 'Draft'
    }
  ])

  const [stats] = useState({
    plansCreated: 5,
    fundingGoal: '$250,000',
    marketReports: 8,
    websitesBuilt: 2
  })

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {userName}! 👋</h1>
          <p className="text-gray-600 text-lg">
            Here's what's happening with your business today
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon="📝"
            label="Business Plans"
            value={stats.plansCreated}
            color="blue"
          />
          <StatCard
            icon="💰"
            label="Funding Goal"
            value={stats.fundingGoal}
            color="green"
          />
          <StatCard
            icon="📊"
            label="Market Reports"
            value={stats.marketReports}
            color="purple"
          />
          <StatCard
            icon="🌐"
            label="Websites Built"
            value={stats.websitesBuilt}
            color="orange"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ActionCard
              icon="📋"
              title="Generate Business Plan"
              description="Create a professional business plan in minutes"
              buttonText="Start Planning"
              buttonLink="/features"
              color="blue"
            />
            <ActionCard
              icon="🔍"
              title="Analyze Your Market"
              description="Get AI-powered insights about your industry"
              buttonText="Start Analysis"
              buttonLink="/features"
              color="purple"
            />
            <ActionCard
              icon="🌐"
              title="Build Your Website"
              description="Launch a professional website instantly"
              buttonText="Start Building"
              buttonLink="/features"
              color="green"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Recent Projects</h2>
              <Link href="/projects" className="text-blue-600 hover:underline font-semibold">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {recentProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No projects yet</p>
                <Link
                  href="/features"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Create Your First Project
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Your Plan</h3>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">Professional</div>
                <div className="text-sm text-gray-600">$79/month</div>
              </div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Business Plans</span>
                  <span className="font-semibold">5 / Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Reports</span>
                  <span className="font-semibold">8 / Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Websites</span>
                  <span className="font-semibold">2 / 10</span>
                </div>
              </div>
              <Link
                href="/pricing"
                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Upgrade Plan
              </Link>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Tools & Calculators</h3>
              <div className="space-y-3">
                <ToolLink icon="📊" name="ROI Calculator" href="/calculators/roi" />
                <ToolLink icon="💵" name="Loan Calculator" href="/calculators/loan" />
                <ToolLink icon="📈" name="Market Size Tool" href="/features" />
                <ToolLink icon="🎯" name="Business Name Generator" href="/features" />
              </div>
            </div>

            {/* FundMyStartup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">Win $50,000!</h3>
              <p className="text-sm mb-4 opacity-90">
                Enter the FundMyStartup contest and turn your business plan into reality
              </p>
              <Link
                href="/fundmystartup"
                className="block w-full text-center bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Enter Contest
              </Link>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Need Help Getting Started?</h2>
          <p className="text-gray-700 mb-6">
            Check out our tutorials and guides to make the most of CommerceCult
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Watch Tutorials
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value, color }: { icon: string; label: string; value: string | number; color: string }) {
  const colorClasses: Record<string, string> = {
    blue: 'from-blue-50 to-blue-100',
    green: 'from-green-50 to-green-100',
    purple: 'from-purple-50 to-purple-100',
    orange: 'from-orange-50 to-orange-100'
  }

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-6`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  )
}

function ActionCard({ icon, title, description, buttonText, buttonLink, color }: {
  icon: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  color: string
}) {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700'
  }

  return (
    <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-gray-300 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link
        href={buttonLink}
        className={`block w-full text-center text-white py-2 px-4 rounded-lg font-semibold transition ${colorClasses[color]}`}
      >
        {buttonText}
      </Link>
    </div>
  )
}

function ProjectCard({ project }: { project: { id: number; name: string; type: string; lastEdited: string; status: string } }) {
  const statusColors: Record<string, string> = {
    'In Progress': 'bg-blue-100 text-blue-700',
    'Complete': 'bg-green-100 text-green-700',
    'Draft': 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300 transition">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold text-lg mb-1">{project.name}</h4>
          <p className="text-sm text-gray-600">{project.type}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
        <span className="text-sm text-gray-500">Last edited {project.lastEdited}</span>
        <Link href={`/projects/${project.id}`} className="text-blue-600 hover:underline text-sm font-semibold">
          Open →
        </Link>
      </div>
    </div>
  )
}

function ToolLink({ icon, name, href }: { icon: string; name: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold text-gray-800">{name}</span>
    </Link>
  )
}
