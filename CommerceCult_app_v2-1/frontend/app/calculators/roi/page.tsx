'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState({
    initialInvestment: '',
    monthlyRevenue: '',
    monthlyCosts: '',
    timePeriod: '12'
  })

  const [results, setResults] = useState({
    roi: 0,
    roiPercentage: 0,
    totalRevenue: 0,
    totalCosts: 0,
    netProfit: 0,
    breakEvenMonths: 0,
    monthlyProfit: 0,
    annualProfit: 0
  })

  const [showResults, setShowResults] = useState(false)

  const calculateROI = () => {
    const investment = parseFloat(inputs.initialInvestment) || 0
    const revenue = parseFloat(inputs.monthlyRevenue) || 0
    const costs = parseFloat(inputs.monthlyCosts) || 0
    const months = parseInt(inputs.timePeriod) || 12

    const monthlyProfit = revenue - costs
    const totalRevenue = revenue * months
    const totalCosts = investment + (costs * months)
    const netProfit = totalRevenue - totalCosts
    const roi = investment > 0 ? ((netProfit / investment) * 100) : 0
    const breakEven = monthlyProfit > 0 ? Math.ceil(investment / monthlyProfit) : 0
    const annualProfit = monthlyProfit * 12

    setResults({
      roi: netProfit,
      roiPercentage: roi,
      totalRevenue,
      totalCosts,
      netProfit,
      breakEvenMonths: breakEven,
      monthlyProfit,
      annualProfit
    })

    setShowResults(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculateROI()
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const getROIAssessment = (percentage: number) => {
    if (percentage >= 100) return { text: 'Excellent', color: 'text-green-600', emoji: '🚀' }
    if (percentage >= 50) return { text: 'Very Good', color: 'text-blue-600', emoji: '💪' }
    if (percentage >= 20) return { text: 'Good', color: 'text-purple-600', emoji: '👍' }
    if (percentage >= 0) return { text: 'Positive', color: 'text-yellow-600', emoji: '😊' }
    return { text: 'Needs Improvement', color: 'text-red-600', emoji: '⚠️' }
  }

  const assessment = getROIAssessment(results.roiPercentage)

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/calculators" className="text-blue-600 hover:underline mb-2 inline-block">
            ← Back to Calculators
          </Link>
          <h1 className="text-4xl font-bold mb-3">ROI Calculator</h1>
          <p className="text-gray-600 text-lg">
            Calculate your Return on Investment and understand your business profitability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Enter Your Numbers</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Initial Investment ($)
                </label>
                <input
                  type="number"
                  name="initialInvestment"
                  value={inputs.initialInvestment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="50000"
                  min="0"
                  step="1000"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Total startup costs and initial capital
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  name="monthlyRevenue"
                  value={inputs.monthlyRevenue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="15000"
                  min="0"
                  step="100"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Expected or actual monthly income
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Operating Costs ($)
                </label>
                <input
                  type="number"
                  name="monthlyCosts"
                  value={inputs.monthlyCosts}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="8000"
                  min="0"
                  step="100"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Rent, payroll, supplies, utilities, marketing, etc.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Time Period (Months)
                </label>
                <select
                  name="timePeriod"
                  value={inputs.timePeriod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="6">6 months</option>
                  <option value="12">12 months (1 year)</option>
                  <option value="24">24 months (2 years)</option>
                  <option value="36">36 months (3 years)</option>
                  <option value="60">60 months (5 years)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Calculate ROI
              </button>
            </form>
          </div>

          {/* Results Panel */}
          <div>
            {showResults ? (
              <div className="space-y-6">
                {/* Main ROI Result */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-3">{assessment.emoji}</div>
                    <div className="text-lg opacity-90 mb-2">Return on Investment</div>
                    <div className="text-6xl font-bold mb-2">
                      {results.roiPercentage.toFixed(1)}%
                    </div>
                    <div className="text-2xl font-semibold mb-2">
                      {formatCurrency(results.roi)} Net Gain
                    </div>
                    <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                      {assessment.text} ROI
                    </div>
                  </div>
                </div>

                {/* Detailed Metrics */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-6">Detailed Analysis</h3>
                  
                  <div className="space-y-4">
                    <MetricRow
                      label="Monthly Profit"
                      value={formatCurrency(results.monthlyProfit)}
                      color={results.monthlyProfit >= 0 ? 'green' : 'red'}
                    />
                    <MetricRow
                      label="Annual Profit"
                      value={formatCurrency(results.annualProfit)}
                      color={results.annualProfit >= 0 ? 'green' : 'red'}
                    />
                    <MetricRow
                      label="Total Revenue"
                      value={formatCurrency(results.totalRevenue)}
                      color="blue"
                    />
                    <MetricRow
                      label="Total Costs"
                      value={formatCurrency(results.totalCosts)}
                      color="gray"
                    />
                    <div className="border-t-2 border-gray-200 pt-4">
                      <MetricRow
                        label="Net Profit"
                        value={formatCurrency(results.netProfit)}
                        color={results.netProfit >= 0 ? 'green' : 'red'}
                        large
                      />
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 mt-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">⏱️</span>
                        <div>
                          <div className="font-semibold text-gray-800">Break-Even Point</div>
                          <div className="text-2xl font-bold text-blue-600">
                            {results.breakEvenMonths > 0 
                              ? `${results.breakEvenMonths} months`
                              : 'Already profitable'
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">💡 AI Recommendations</h3>
                  <div className="space-y-3 text-sm">
                    {results.roiPercentage >= 50 && (
                      <Recommendation
                        icon="🚀"
                        text="Strong ROI! Consider scaling your operations to maximize returns."
                      />
                    )}
                    {results.breakEvenMonths > 24 && (
                      <Recommendation
                        icon="⚠️"
                        text="Long break-even period. Look for ways to reduce costs or increase revenue."
                      />
                    )}
                    {results.monthlyProfit < 0 && (
                      <Recommendation
                        icon="📉"
                        text="Negative monthly profit. Review your pricing strategy and cost structure."
                      />
                    )}
                    {results.roiPercentage >= 20 && results.roiPercentage < 50 && (
                      <Recommendation
                        icon="📈"
                        text="Solid ROI. Focus on consistent growth and customer acquisition."
                      />
                    )}
                    <Recommendation
                      icon="💰"
                      text={`Industry benchmark: Most successful businesses aim for 15-25% ROI in year 1, 30-50% by year 3.`}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-lg">
                    Enter your numbers and click<br />
                    <span className="font-bold">"Calculate ROI"</span><br />
                    to see your results
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Understanding ROI</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-bold mb-2">What is ROI?</h3>
              <p className="text-gray-700">
                Return on Investment (ROI) measures the profitability of your business relative to your initial investment. 
                It's calculated as: (Net Profit ÷ Initial Investment) × 100%
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Why It Matters</h3>
              <p className="text-gray-700">
                ROI helps you evaluate whether your business is worth the investment. Investors and lenders 
                use ROI to assess risk and potential returns before providing funding.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Industry Standards</h3>
              <p className="text-gray-700">
                A good ROI varies by industry, but most businesses aim for 15-25% in the first year, 
                30-50% by year 3, and 100%+ over 5 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricRow({ label, value, color, large }: { label: string; value: string; color: string; large?: boolean }) {
  const colorClasses: Record<string, string> = {
    green: 'text-green-600',
    red: 'text-red-600',
    blue: 'text-blue-600',
    gray: 'text-gray-600'
  }

  return (
    <div className="flex justify-between items-center">
      <span className={large ? 'font-bold text-gray-800' : 'text-gray-600'}>{label}</span>
      <span className={`font-bold ${large ? 'text-2xl' : 'text-xl'} ${colorClasses[color]}`}>
        {value}
      </span>
    </div>
  )
}

function Recommendation({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
      <span className="text-xl">{icon}</span>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}
