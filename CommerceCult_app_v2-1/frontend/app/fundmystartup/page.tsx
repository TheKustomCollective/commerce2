'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FundMyStartupPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">🎉 FundMyStartup Contest</h1>
          <p className="text-2xl mb-8">
            Win funding, mentorship, and resources to launch your dream business!
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="text-5xl font-bold mb-2">$50,000</div>
            <div className="text-xl">Grand Prize Package</div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contest Prizes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PrizeCard
              place="1st Place"
              title="$50,000 Package"
              items={[
                "$25,000 Cash Funding",
                "1 Year Pro Subscription",
                "Custom Website Development",
                "6 Months Business Mentorship",
                "Legal & Accounting Setup",
                "Marketing Campaign ($5,000)"
              ]}
              highlight={true}
            />
            <PrizeCard
              place="2nd Place"
              title="$15,000 Package"
              items={[
                "$10,000 Cash Funding",
                "6 Months Pro Subscription",
                "Professional Website",
                "3 Months Mentorship",
                "Business Plan Review"
              ]}
            />
            <PrizeCard
              place="3rd Place"
              title="$5,000 Package"
              items={[
                "$3,000 Cash Funding",
                "3 Months Pro Subscription",
                "Landing Page Package",
                "1 Month Mentorship"
              ]}
            />
          </div>
          <p className="text-center text-gray-600 mt-8">
            + 10 Runner-ups receive 1 year Starter subscription and business plan review
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How To Enter</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Step number="1" title="Submit Your Idea" description="Fill out the entry form with your innovative business concept" />
            <Step number="2" title="We Review" description="Our panel evaluates all submissions based on innovation, viability, and impact" />
            <Step number="3" title="Public Vote" description="Top 20 entries compete in public voting round" />
            <Step number="4" title="Winners Announced" description="Top 3 winners receive funding and support packages" />
          </div>
        </div>
      </section>

      {/* Entry Form */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-2">Enter the Contest</h2>
            <p className="text-gray-600 mb-8">Fill out the form below to submit your business idea</p>
            
            <ContestForm />
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Judging Criteria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Criteria icon="💡" title="Innovation" description="Uniqueness and creativity of the business idea" />
            <Criteria icon="📊" title="Market Potential" description="Size and growth opportunity of target market" />
            <Criteria icon="💰" title="Viability" description="Feasibility and sustainability of business model" />
            <Criteria icon="🎯" title="Impact" description="Potential to create value and positive change" />
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contest Rules & Timeline</h2>
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-bold mb-4">Timeline</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Submissions Open:</strong> Now through March 31, 2026</li>
              <li><strong>Review Period:</strong> April 1-15, 2026</li>
              <li><strong>Public Voting:</strong> April 16-30, 2026</li>
              <li><strong>Winners Announced:</strong> May 15, 2026</li>
            </ul>

            <h3 className="text-xl font-bold mb-4">Eligibility</h3>
            <ul className="space-y-2 mb-6">
              <li>Must be 18 years or older</li>
              <li>Open to residents of the United States</li>
              <li>One entry per person</li>
              <li>Business must not have received more than $50,000 in prior funding</li>
            </ul>

            <h3 className="text-xl font-bold mb-4">Terms</h3>
            <ul className="space-y-2">
              <li>By entering, you agree to our contest terms and conditions</li>
              <li>Winners will be selected by a panel of judges and public vote (50/50 split)</li>
              <li>Prizes are non-transferable</li>
              <li>No purchase necessary to enter or win</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8">
            Learn more about the contest or contact our team
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

function PrizeCard({ place, title, items, highlight = false }: { place: string; title: string; items: string[]; highlight?: boolean }) {
  return (
    <div className={`bg-white rounded-2xl p-8 ${highlight ? 'ring-4 ring-purple-600 shadow-2xl' : 'border border-gray-200 shadow-lg'}`}>
      {highlight && (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 rounded-lg mb-4 font-bold">
          GRAND PRIZE
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{place}</h3>
      <p className="text-3xl font-bold text-purple-600 mb-6">{title}</p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-purple-600 mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Criteria({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ContestForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    businessIdea: '',
    targetMarket: '',
    problem: '',
    solution: '',
    uniqueValue: '',
    fundingUse: '',
    agreeToTerms: false
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-4">Thank You for Entering!</h3>
        <p className="text-gray-600 mb-6">
          We've received your submission. You'll hear from us soon with next steps.
        </p>
        <Link 
          href="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Return Home
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name *</label>
          <input 
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Email *</label>
          <input 
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Phone</label>
          <input 
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Business Name *</label>
          <input 
            type="text"
            required
            value={formData.businessName}
            onChange={(e) => setFormData({...formData, businessName: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Business Idea (One-line pitch) *</label>
        <input 
          type="text"
          required
          placeholder="e.g., AI-powered meal planning app for busy professionals"
          value={formData.businessIdea}
          onChange={(e) => setFormData({...formData, businessIdea: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">What problem does your business solve? *</label>
        <textarea 
          required
          rows={4}
          value={formData.problem}
          onChange={(e) => setFormData({...formData, problem: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">How does your solution work? *</label>
        <textarea 
          required
          rows={4}
          value={formData.solution}
          onChange={(e) => setFormData({...formData, solution: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Who is your target market? *</label>
        <input 
          type="text"
          required
          placeholder="e.g., Working professionals aged 25-45"
          value={formData.targetMarket}
          onChange={(e) => setFormData({...formData, targetMarket: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">What makes your business unique? *</label>
        <textarea 
          required
          rows={3}
          value={formData.uniqueValue}
          onChange={(e) => setFormData({...formData, uniqueValue: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">How will you use the funding? *</label>
        <textarea 
          required
          rows={4}
          value={formData.fundingUse}
          onChange={(e) => setFormData({...formData, fundingUse: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div className="flex items-start gap-3">
        <input 
          type="checkbox"
          required
          checked={formData.agreeToTerms}
          onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
          className="mt-1"
        />
        <label className="text-sm text-gray-600">
          I agree to the contest terms and conditions and confirm that I meet all eligibility requirements *
        </label>
      </div>

      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition"
      >
        Submit Entry
      </button>
    </form>
  )
}
