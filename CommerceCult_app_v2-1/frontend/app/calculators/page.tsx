'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Business Calculators</h1>
          <p className="text-xl text-gray-600">
            Make informed decisions with our AI-powered financial calculators
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <CalculatorCard
            title="ROI Calculator"
            description="Calculate your return on investment and break-even point"
            icon="📈"
            href="/calculators/roi"
          />
          <CalculatorCard
            title="Loan Repayment Calculator"
            description="Plan your financing with detailed repayment schedules"
            icon="🏦"
            href="/calculators/loan"
          />
        </div>
      </section>
    </div>
  )
}

function CalculatorCard({ title, description, icon, href }: { title: string; description: string; icon: string; href: string }) {
  return (
    <Link href={href} className="block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}
