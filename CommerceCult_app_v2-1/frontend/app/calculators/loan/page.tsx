'use client'

import { useState } from 'react'
import Link from 'next/link'

interface AmortizationRow {
  month: number
  payment: number
  principal: number
  interest: number
  balance: number
}

export default function LoanCalculatorPage() {
  const [inputs, setInputs] = useState({
    loanAmount: '',
    interestRate: '',
    loanTerm: '60',
    paymentFrequency: 'monthly'
  })

  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    totalPrincipal: 0
  })

  const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationRow[]>([])
  const [showResults, setShowResults] = useState(false)
  const [showSchedule, setShowSchedule] = useState(false)

  const calculateLoan = () => {
    const principal = parseFloat(inputs.loanAmount) || 0
    const annualRate = parseFloat(inputs.interestRate) || 0
    const months = parseInt(inputs.loanTerm) || 60
    
    // Convert annual rate to monthly rate
    const monthlyRate = (annualRate / 100) / 12
    
    // Calculate monthly payment using amortization formula
    let monthlyPayment = 0
    if (monthlyRate === 0) {
      monthlyPayment = principal / months
    } else {
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                       (Math.pow(1 + monthlyRate, months) - 1)
    }

    const totalPayment = monthlyPayment * months
    const totalInterest = totalPayment - principal

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      totalPrincipal: principal
    })

    // Generate amortization schedule
    const schedule: AmortizationRow[] = []
    let balance = principal

    for (let month = 1; month <= months; month++) {
      const interestPayment = balance * monthlyRate
      const principalPayment = monthlyPayment - interestPayment
      balance -= principalPayment

      schedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance)
      })
    }

    setAmortizationSchedule(schedule)
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
    calculateLoan()
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value)
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/calculators" className="text-blue-600 hover:underline mb-2 inline-block">
            ← Back to Calculators
          </Link>
          <h1 className="text-4xl font-bold mb-3">Loan Calculator</h1>
          <p className="text-gray-600 text-lg">
            Calculate your loan payments and view a complete amortization schedule
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Loan Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Amount ($)
                </label>
                <input
                  type="number"
                  name="loanAmount"
                  value={inputs.loanAmount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="50000"
                  min="0"
                  step="1000"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Total amount you want to borrow
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Interest Rate (%)
                </label>
                <input
                  type="number"
                  name="interestRate"
                  value={inputs.interestRate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="6.5"
                  min="0"
                  max="50"
                  step="0.1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Annual percentage rate (APR) from your lender
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Term
                </label>
                <select
                  name="loanTerm"
                  value={inputs.loanTerm}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="12">1 year (12 months)</option>
                  <option value="24">2 years (24 months)</option>
                  <option value="36">3 years (36 months)</option>
                  <option value="48">4 years (48 months)</option>
                  <option value="60">5 years (60 months)</option>
                  <option value="84">7 years (84 months)</option>
                  <option value="120">10 years (120 months)</option>
                  <option value="180">15 years (180 months)</option>
                  <option value="240">20 years (240 months)</option>
                  <option value="360">30 years (360 months)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Frequency
                </label>
                <select
                  name="paymentFrequency"
                  value={inputs.paymentFrequency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="monthly">Monthly</option>
                  <option value="biweekly">Bi-weekly (Coming Soon)</option>
                  <option value="weekly">Weekly (Coming Soon)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Calculate Payment
              </button>
            </form>

            {/* Loan Type Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold mb-3">Typical Loan Rates</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">SBA 7(a) Loan</span>
                  <span className="font-semibold">6.5% - 10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Business Line of Credit</span>
                  <span className="font-semibold">7% - 25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Equipment Financing</span>
                  <span className="font-semibold">5% - 20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Commercial Real Estate</span>
                  <span className="font-semibold">5% - 8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div>
            {showResults ? (
              <div className="space-y-6">
                {/* Main Payment Result */}
                <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-3">💵</div>
                    <div className="text-lg opacity-90 mb-2">Monthly Payment</div>
                    <div className="text-5xl font-bold mb-4">
                      {formatCurrency(results.monthlyPayment)}
                    </div>
                    <div className="text-sm opacity-90">
                      for {inputs.loanTerm} months
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-6">Loan Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="text-2xl font-bold text-gray-800">
                        {formatCurrency(results.totalPrincipal)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Interest</span>
                      <span className="text-xl font-bold text-red-600">
                        {formatCurrency(results.totalInterest)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b-2 border-gray-300">
                      <span className="text-gray-600">Monthly Payment</span>
                      <span className="text-xl font-bold text-blue-600">
                        {formatCurrency(results.monthlyPayment)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
                      <span className="font-bold text-gray-800">Total Cost</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {formatCurrency(results.totalPayment)}
                      </span>
                    </div>
                  </div>

                  {/* Visual breakdown */}
                  <div className="mt-6">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Cost Breakdown</div>
                    <div className="h-8 flex rounded-lg overflow-hidden">
                      <div 
                        className="bg-blue-500 flex items-center justify-center text-white text-xs font-semibold"
                        style={{ width: `${(results.totalPrincipal / results.totalPayment) * 100}%` }}
                      >
                        Principal
                      </div>
                      <div 
                        className="bg-red-500 flex items-center justify-center text-white text-xs font-semibold"
                        style={{ width: `${(results.totalInterest / results.totalPayment) * 100}%` }}
                      >
                        Interest
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-2">
                      <span>{((results.totalPrincipal / results.totalPayment) * 100).toFixed(1)}% Principal</span>
                      <span>{((results.totalInterest / results.totalPayment) * 100).toFixed(1)}% Interest</span>
                    </div>
                  </div>
                </div>

                {/* Amortization Schedule */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Amortization Schedule</h3>
                    <button
                      onClick={() => setShowSchedule(!showSchedule)}
                      className="text-blue-600 hover:underline font-semibold text-sm"
                    >
                      {showSchedule ? 'Hide' : 'Show'} Full Schedule
                    </button>
                  </div>

                  {showSchedule && (
                    <div className="overflow-x-auto max-h-96 overflow-y-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-100 sticky top-0">
                          <tr>
                            <th className="p-2 text-left font-semibold">Month</th>
                            <th className="p-2 text-right font-semibold">Payment</th>
                            <th className="p-2 text-right font-semibold">Principal</th>
                            <th className="p-2 text-right font-semibold">Interest</th>
                            <th className="p-2 text-right font-semibold">Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {amortizationSchedule.map((row, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                              <td className="p-2">{row.month}</td>
                              <td className="p-2 text-right">{formatCurrency(row.payment)}</td>
                              <td className="p-2 text-right text-blue-600">{formatCurrency(row.principal)}</td>
                              <td className="p-2 text-right text-red-600">{formatCurrency(row.interest)}</td>
                              <td className="p-2 text-right font-semibold">{formatCurrency(row.balance)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {!showSchedule && (
                    <p className="text-gray-600 text-sm">
                      Click "Show Full Schedule" to view monthly payment breakdown
                    </p>
                  )}
                </div>

                {/* Tips */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">💡 Money-Saving Tips</h3>
                  <div className="space-y-3 text-sm">
                    <Tip
                      icon="⚡"
                      text="Making extra payments toward principal can significantly reduce total interest paid."
                    />
                    <Tip
                      icon="📅"
                      text="Shorter loan terms mean higher monthly payments but much lower total interest."
                    />
                    <Tip
                      icon="🔍"
                      text="Shop around! A 1% lower interest rate can save thousands over the life of the loan."
                    />
                    <Tip
                      icon="💰"
                      text="Consider bi-weekly payments instead of monthly to pay off your loan faster."
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">🏦</div>
                  <p className="text-lg">
                    Enter your loan details and click<br />
                    <span className="font-bold">"Calculate Payment"</span><br />
                    to see your results
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Understanding Business Loans</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-bold mb-2">Types of Business Loans</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• SBA Loans (7a, 504, microloans)</li>
                <li>• Term Loans (short & long-term)</li>
                <li>• Business Lines of Credit</li>
                <li>• Equipment Financing</li>
                <li>• Invoice Financing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">What Lenders Look For</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Credit score (personal & business)</li>
                <li>• Time in business</li>
                <li>• Annual revenue</li>
                <li>• Business plan & financials</li>
                <li>• Collateral</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Improving Your Terms</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Build strong credit history</li>
                <li>• Show consistent revenue</li>
                <li>• Prepare detailed business plan</li>
                <li>• Offer collateral</li>
                <li>• Shop multiple lenders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Tip({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
      <span className="text-xl">{icon}</span>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}
