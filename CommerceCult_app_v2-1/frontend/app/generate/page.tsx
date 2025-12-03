'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function GenerateBusinessPlanPage() {
  const [step, setStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [businessPlan, setBusinessPlan] = useState<any>(null)
  
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    businessType: '',
    location: '',
    targetMarket: '',
    fundingNeeded: '',
    timeframe: '',
    description: '',
    revenueGoalYear1: '',
    revenueGoalYear3: '',
    customerGoalMonth3: '',
    customerGoalYear1: '',
    keyMetrics: '',
    specificMilestones: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    
    // Simulate AI generation (in production, this would call your AI API)
    setTimeout(() => {
      const generatedPlan = {
        executiveSummary: {
          mission: `${formData.businessName} aims to revolutionize the ${formData.industry} industry by providing innovative solutions to ${formData.targetMarket}. Our unique value proposition combines quality, affordability, and exceptional customer service.`,
          vision: `To become the leading ${formData.businessType} in ${formData.location} within 5 years, serving over 10,000 customers and generating $5M+ in annual revenue.`,
          objectives: [
            'Achieve $500K in revenue within the first year',
            'Acquire 1,000 customers in first 12 months',
            'Establish strong brand presence in target market',
            'Build strategic partnerships with 5+ key vendors',
            'Maintain 90%+ customer satisfaction rating'
          ]
        },
        companyDescription: {
          overview: `${formData.businessName} is a ${formData.businessType} focused on serving ${formData.targetMarket} in the ${formData.industry} sector. Located in ${formData.location}, we provide ${formData.description}`,
          legalStructure: 'Limited Liability Company (LLC)',
          ownership: 'Founder-owned (100%)',
          keySuccess: [
            'Experienced leadership team',
            'Innovative product/service offering',
            'Strong market demand',
            'Scalable business model',
            'Strategic location advantage'
          ]
        },
        marketAnalysis: {
          industryOverview: `The ${formData.industry} industry is experiencing significant growth, with a projected CAGR of 8.5% over the next 5 years. Market size is estimated at $2.3B annually in ${formData.location}.`,
          targetMarket: {
            segment: formData.targetMarket,
            size: '250,000 potential customers',
            demographics: 'Ages 25-54, household income $50K-150K',
            psychographics: 'Value-conscious, quality-seeking, digitally savvy',
            behavior: 'Research online, prefer convenience, willing to pay premium for quality'
          },
          competition: [
            {
              name: 'Competitor A',
              strength: 'Established brand, large customer base',
              weakness: 'Higher prices, slow to innovate',
              marketShare: '25%'
            },
            {
              name: 'Competitor B',
              strength: 'Low prices, wide distribution',
              weakness: 'Poor quality, limited customer service',
              marketShare: '18%'
            },
            {
              name: 'Competitor C',
              strength: 'Niche focus, loyal customers',
              weakness: 'Limited product range, small scale',
              marketShare: '12%'
            }
          ],
          competitiveAdvantage: [
            'Superior product quality at competitive prices',
            'Exceptional customer service and support',
            'Innovative technology integration',
            'Faster delivery and fulfillment',
            'Personalized customer experience'
          ]
        },
        products: {
          description: formData.description,
          features: [
            'High-quality materials and craftsmanship',
            'User-friendly design and functionality',
            'Competitive pricing strategy',
            'Warranty and guarantee included',
            'Customization options available'
          ],
          pricing: {
            strategy: 'Value-based pricing with competitive positioning',
            tiers: [
              { name: 'Basic', price: '$49', margin: '45%' },
              { name: 'Standard', price: '$99', margin: '52%' },
              { name: 'Premium', price: '$199', margin: '58%' }
            ]
          }
        },
        marketing: {
          strategy: 'Multi-channel digital marketing with local partnerships',
          channels: [
            {
              channel: 'Social Media Marketing',
              budget: '$2,000/month',
              expected: '500 leads/month'
            },
            {
              channel: 'Search Engine Marketing',
              budget: '$3,000/month',
              expected: '800 leads/month'
            },
            {
              channel: 'Content Marketing',
              budget: '$1,500/month',
              expected: '300 leads/month'
            },
            {
              channel: 'Email Marketing',
              budget: '$500/month',
              expected: '200 leads/month'
            }
          ],
          customerAcquisition: '$45 per customer',
          lifetimeValue: '$450 per customer',
          retentionRate: '65%'
        },
        operations: {
          location: formData.location,
          facilities: 'Commercial space: 2,500 sq ft office + warehouse',
          equipment: 'Computers, software, inventory management system, delivery vehicles',
          suppliers: [
            'Primary supplier: Regional distributor (40% of inventory)',
            'Secondary supplier: Direct manufacturer (30% of inventory)',
            'Backup suppliers: 2-3 alternative sources (30% of inventory)'
          ],
          team: [
            { role: 'Founder/CEO', count: 1, salary: '$80,000' },
            { role: 'Operations Manager', count: 1, salary: '$55,000' },
            { role: 'Sales Representatives', count: 2, salary: '$40,000 + commission' },
            { role: 'Customer Service', count: 2, salary: '$35,000' },
            { role: 'Marketing Specialist', count: 1, salary: '$50,000' }
          ]
        },
        financials: {
          startupCosts: {
            total: parseInt(formData.fundingNeeded) || 150000,
            breakdown: [
              { item: 'Inventory', amount: 40000 },
              { item: 'Equipment & Technology', amount: 25000 },
              { item: 'Facility Setup', amount: 30000 },
              { item: 'Marketing & Branding', amount: 20000 },
              { item: 'Legal & Licensing', amount: 10000 },
              { item: 'Working Capital', amount: 25000 }
            ]
          },
          projections: {
            year1: {
              revenue: 500000,
              cogs: 225000,
              grossProfit: 275000,
              expenses: 320000,
              netProfit: -45000,
              margin: '55%'
            },
            year2: {
              revenue: 1200000,
              cogs: 540000,
              grossProfit: 660000,
              expenses: 480000,
              netProfit: 180000,
              margin: '55%'
            },
            year3: {
              revenue: 2400000,
              cogs: 1080000,
              grossProfit: 1320000,
              expenses: 720000,
              netProfit: 600000,
              margin: '55%'
            },
            year4: {
              revenue: 4000000,
              cogs: 1800000,
              grossProfit: 2200000,
              expenses: 1000000,
              netProfit: 1200000,
              margin: '55%'
            },
            year5: {
              revenue: 6000000,
              cogs: 2700000,
              grossProfit: 3300000,
              expenses: 1400000,
              netProfit: 1900000,
              margin: '55%'
            }
          },
          cashFlow: {
            breakEvenMonth: 18,
            peakCashNeed: '$185,000 (Month 6)',
            projectedROI: '450% over 5 years'
          },
          fundingRequest: {
            amount: parseInt(formData.fundingNeeded) || 150000,
            use: [
              'Inventory and product development: 40%',
              'Marketing and customer acquisition: 25%',
              'Operations and facilities: 20%',
              'Technology and systems: 10%',
              'Working capital reserve: 5%'
            ],
            terms: 'Seeking equity investment for 15-20% ownership stake',
            exit: 'Potential acquisition by industry leader in 5-7 years at 3-5x revenue multiple'
          }
        },
        milestones: [
          { quarter: 'Q1', milestone: 'Business launch, first 100 customers, $50K revenue' },
          { quarter: 'Q2', milestone: 'Reach 300 customers, $125K revenue, hire 2 staff' },
          { quarter: 'Q3', milestone: 'Expand product line, 600 customers, $175K revenue' },
          { quarter: 'Q4', milestone: 'Year-end: 1,000 customers, $500K revenue milestone' },
          { quarter: 'Year 2', milestone: 'Scale operations, $1.2M revenue, profitability achieved' },
          { quarter: 'Year 3', milestone: 'Market leader in region, $2.4M revenue, 25% profit margin' }
        ],
        risks: [
          {
            risk: 'Market competition intensifies',
            mitigation: 'Differentiate through superior service, build strong brand loyalty, continuous innovation'
          },
          {
            risk: 'Economic downturn affects consumer spending',
            mitigation: 'Diversify product offerings, maintain lean operations, build cash reserves'
          },
          {
            risk: 'Supply chain disruptions',
            mitigation: 'Multiple supplier relationships, maintain safety stock, local sourcing options'
          },
          {
            risk: 'Key personnel departure',
            mitigation: 'Competitive compensation, equity incentives, document all processes'
          }
        ]
      }
      
      setBusinessPlan(generatedPlan)
      setIsGenerating(false)
      setStep(3)
    }, 3000)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  if (step === 3 && businessPlan) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h1 className="text-4xl font-bold mb-2">Your Business Plan is Ready! 🎉</h1>
            <p className="text-xl opacity-90">AI-generated comprehensive business plan for {formData.businessName}</p>
            <div className="flex gap-4 mt-6">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Download PDF
              </button>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition border-2 border-white">
                Export to Word
              </button>
              <Link
                href="/dashboard"
                className="bg-transparent text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition border-2 border-white"
              >
                Save to Dashboard
              </Link>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="#executive" className="text-blue-600 hover:underline">1. Executive Summary</a>
              <a href="#company" className="text-blue-600 hover:underline">2. Company Description</a>
              <a href="#market" className="text-blue-600 hover:underline">3. Market Analysis</a>
              <a href="#products" className="text-blue-600 hover:underline">4. Products & Services</a>
              <a href="#marketing" className="text-blue-600 hover:underline">5. Marketing Strategy</a>
              <a href="#operations" className="text-blue-600 hover:underline">6. Operations Plan</a>
              <a href="#financials" className="text-blue-600 hover:underline">7. Financial Projections</a>
              <a href="#milestones" className="text-blue-600 hover:underline">8. Milestones & Metrics</a>
              <a href="#risks" className="text-blue-600 hover:underline">9. Risk Analysis</a>
            </div>
          </div>

          {/* Executive Summary */}
          <div id="executive" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">1. Executive Summary</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Mission Statement</h3>
              <p className="text-gray-700 leading-relaxed">{businessPlan.executiveSummary.mission}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Vision</h3>
              <p className="text-gray-700 leading-relaxed">{businessPlan.executiveSummary.vision}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Key Objectives</h3>
              <ul className="space-y-2">
                {businessPlan.executiveSummary.objectives.map((obj: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-700">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Description */}
          <div id="company" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">2. Company Description</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{businessPlan.companyDescription.overview}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-2">Legal Structure</h4>
                <p className="text-gray-700">{businessPlan.companyDescription.legalStructure}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Ownership</h4>
                <p className="text-gray-700">{businessPlan.companyDescription.ownership}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3">Keys to Success</h3>
            <ul className="space-y-2">
              {businessPlan.companyDescription.keySuccess.map((key: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">→</span>
                  <span className="text-gray-700">{key}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Market Analysis */}
          <div id="market" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">3. Market Analysis</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Industry Overview</h3>
              <p className="text-gray-700 leading-relaxed">{businessPlan.marketAnalysis.industryOverview}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Target Market</h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-bold text-gray-800">Market Segment:</span>
                    <p className="text-gray-700">{businessPlan.marketAnalysis.targetMarket.segment}</p>
                  </div>
                  <div>
                    <span className="font-bold text-gray-800">Market Size:</span>
                    <p className="text-gray-700">{businessPlan.marketAnalysis.targetMarket.size}</p>
                  </div>
                  <div>
                    <span className="font-bold text-gray-800">Demographics:</span>
                    <p className="text-gray-700">{businessPlan.marketAnalysis.targetMarket.demographics}</p>
                  </div>
                  <div>
                    <span className="font-bold text-gray-800">Psychographics:</span>
                    <p className="text-gray-700">{businessPlan.marketAnalysis.targetMarket.psychographics}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Competitive Analysis</h3>
              <div className="space-y-4">
                {businessPlan.marketAnalysis.competition.map((comp: any, i: number) => (
                  <div key={i} className="border-2 border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold mb-2">{comp.name} ({comp.marketShare} market share)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-600 font-semibold">Strengths: </span>
                        <span className="text-gray-700">{comp.strength}</span>
                      </div>
                      <div>
                        <span className="text-red-600 font-semibold">Weaknesses: </span>
                        <span className="text-gray-700">{comp.weakness}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Our Competitive Advantages</h3>
              <ul className="space-y-2">
                {businessPlan.marketAnalysis.competitiveAdvantage.map((adv: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-600 text-xl">★</span>
                    <span className="text-gray-700">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products & Services */}
          <div id="products" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">4. Products & Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{businessPlan.products.description}</p>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {businessPlan.products.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Pricing Strategy</h3>
              <p className="text-gray-700 mb-4">{businessPlan.products.pricing.strategy}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {businessPlan.products.pricing.tiers.map((tier: any, i: number) => (
                  <div key={i} className="border-2 border-gray-200 rounded-lg p-4 text-center">
                    <h4 className="font-bold text-lg mb-2">{tier.name}</h4>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{tier.price}</div>
                    <div className="text-sm text-gray-600">{tier.margin} margin</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Marketing Strategy */}
          <div id="marketing" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">5. Marketing Strategy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{businessPlan.marketing.strategy}</p>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Marketing Channels</h3>
              <div className="space-y-3">
                {businessPlan.marketing.channels.map((ch: any, i: number) => (
                  <div key={i} className="border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold">{ch.channel}</h4>
                        <p className="text-sm text-gray-600">Expected: {ch.expected}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">{ch.budget}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 bg-purple-50 rounded-lg p-6">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Customer Acquisition Cost</div>
                <div className="text-2xl font-bold text-purple-600">{businessPlan.marketing.customerAcquisition}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Lifetime Value</div>
                <div className="text-2xl font-bold text-green-600">{businessPlan.marketing.lifetimeValue}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Retention Rate</div>
                <div className="text-2xl font-bold text-blue-600">{businessPlan.marketing.retentionRate}</div>
              </div>
            </div>
          </div>

          {/* Operations */}
          <div id="operations" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">6. Operations Plan</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p className="text-gray-700">{businessPlan.operations.location}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Facilities</h4>
                <p className="text-gray-700">{businessPlan.operations.facilities}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Equipment & Technology</h3>
              <p className="text-gray-700">{businessPlan.operations.equipment}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Suppliers</h3>
              <ul className="space-y-2">
                {businessPlan.operations.suppliers.map((sup: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-600 text-xl">→</span>
                    <span className="text-gray-700">{sup}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Team Structure</h3>
              <div className="space-y-3">
                {businessPlan.operations.team.map((member: any, i: number) => (
                  <div key={i} className="border-2 border-gray-200 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">{member.role}</h4>
                      <p className="text-sm text-gray-600">{member.count} position{member.count > 1 ? 's' : ''}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">{member.salary}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Financial Projections */}
          <div id="financials" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">7. Financial Projections</h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Startup Costs</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600">Total Startup Investment</div>
                  <div className="text-4xl font-bold text-blue-600">
                    {formatCurrency(businessPlan.financials.startupCosts.total)}
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {businessPlan.financials.startupCosts.breakdown.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="font-bold">{formatCurrency(item.amount)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">5-Year Revenue Projections</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 text-left">Year</th>
                      <th className="p-3 text-right">Revenue</th>
                      <th className="p-3 text-right">COGS</th>
                      <th className="p-3 text-right">Gross Profit</th>
                      <th className="p-3 text-right">Expenses</th>
                      <th className="p-3 text-right">Net Profit</th>
                      <th className="p-3 text-right">Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(businessPlan.financials.projections).map(([year, data]: [string, any]) => (
                      <tr key={year} className="border-b border-gray-200">
                        <td className="p-3 font-semibold">{year.replace('year', 'Year ')}</td>
                        <td className="p-3 text-right">{formatCurrency(data.revenue)}</td>
                        <td className="p-3 text-right">{formatCurrency(data.cogs)}</td>
                        <td className="p-3 text-right">{formatCurrency(data.grossProfit)}</td>
                        <td className="p-3 text-right">{formatCurrency(data.expenses)}</td>
                        <td className={`p-3 text-right font-bold ${data.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatCurrency(data.netProfit)}
                        </td>
                        <td className="p-3 text-right">{data.margin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Cash Flow Analysis</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Break-Even Point</div>
                  <div className="text-2xl font-bold text-orange-600">
                    Month {businessPlan.financials.cashFlow.breakEvenMonth}
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Peak Cash Need</div>
                  <div className="text-2xl font-bold text-red-600">
                    {businessPlan.financials.cashFlow.peakCashNeed}
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Projected ROI</div>
                  <div className="text-2xl font-bold text-green-600">
                    {businessPlan.financials.cashFlow.projectedROI}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Funding Request</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600">Seeking Investment</div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {formatCurrency(businessPlan.financials.fundingRequest.amount)}
                  </div>
                  <p className="text-sm text-gray-700">{businessPlan.financials.fundingRequest.terms}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Use of Funds</h4>
                  <ul className="space-y-1">
                    {businessPlan.financials.fundingRequest.use.map((use: string, i: number) => (
                      <li key={i} className="text-sm text-gray-700">• {use}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Exit Strategy</h4>
                  <p className="text-sm text-gray-700">{businessPlan.financials.fundingRequest.exit}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div id="milestones" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">8. Milestones & Metrics</h2>
            <div className="space-y-4">
              {businessPlan.milestones.map((milestone: any, i: number) => (
                <div key={i} className="border-l-4 border-blue-600 pl-6 py-2">
                  <h4 className="font-bold text-blue-600 mb-1">{milestone.quarter}</h4>
                  <p className="text-gray-700">{milestone.milestone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Analysis */}
          <div id="risks" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">9. Risk Analysis & Mitigation</h2>
            <div className="space-y-4">
              {businessPlan.risks.map((risk: any, i: number) => (
                <div key={i} className="border-2 border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-600 mb-2">Risk: {risk.risk}</h4>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-green-600">Mitigation: </span>
                    {risk.mitigation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
            <p className="text-lg mb-6 opacity-90">Your business plan is ready. What would you like to do next?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Save to Dashboard
              </Link>
              <Link
                href="/fundmystartup"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Enter FundMyStartup Contest
              </Link>
              <button 
                onClick={() => {
                  setStep(1)
                  setBusinessPlan(null)
                }}
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition border-2 border-white"
              >
                Create Another Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isGenerating) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-8xl mb-6 animate-bounce">🤖</div>
          <h2 className="text-3xl font-bold mb-4">Generating Your Business Plan...</h2>
          <p className="text-xl text-gray-600 mb-8">
            AI is analyzing market data, creating financial projections, and building your comprehensive business plan
          </p>
          <div className="bg-white rounded-lg p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="animate-spin text-2xl">⚙️</div>
                <span className="text-gray-700">Analyzing market trends...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="animate-spin text-2xl">💰</div>
                <span className="text-gray-700">Building financial projections...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="animate-spin text-2xl">📊</div>
                <span className="text-gray-700">Creating competitive analysis...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Generate Your Business Plan</h1>
          <p className="text-xl text-gray-600">
            Answer a few questions and our AI will create a comprehensive, investor-ready business plan
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g., Artisan Coffee Co"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry *
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select industry</option>
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="Retail">Retail</option>
                <option value="Technology">Technology</option>
                <option value="Services">Services</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Business Type *
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select type</option>
                <option value="Online Store">Online Store</option>
                <option value="Physical Storefront">Physical Storefront</option>
                <option value="Service Provider">Service Provider</option>
                <option value="SaaS/Software">SaaS/Software</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Hybrid (Online + Physical)">Hybrid (Online + Physical)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g., Portland, Oregon or Online (USA)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Target Market *
              </label>
              <input
                type="text"
                name="targetMarket"
                value={formData.targetMarket}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g., Health-conscious millennials, Small business owners"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Funding Needed *
              </label>
              <select
                name="fundingNeeded"
                value={formData.fundingNeeded}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select amount</option>
                <option value="25000">$25,000</option>
                <option value="50000">$50,000</option>
                <option value="100000">$100,000</option>
                <option value="150000">$150,000</option>
                <option value="250000">$250,000</option>
                <option value="500000">$500,000</option>
                <option value="1000000">$1,000,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Describe Your Business Idea *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                rows={4}
                placeholder="What product or service will you offer? What problem does it solve? What makes it unique?"
                required
              />
            </div>

            {/* SMART Goals Section */}
            <div className="col-span-2 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📊 SMART Goals (Recommended)</h3>
              <p className="text-sm text-gray-600 mb-4">
                Set Specific, Measurable, Achievable, Relevant, and Time-bound goals to create actionable business milestones
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Revenue Goal - Year 1 <span className="text-xs text-gray-500">(Measurable & Time-bound)</span>
                  </label>
                  <input
                    type="text"
                    name="revenueGoalYear1"
                    value={formData.revenueGoalYear1}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="e.g., $500,000 in first year"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Revenue Goal - Year 3 <span className="text-xs text-gray-500">(Long-term target)</span>
                  </label>
                  <input
                    type="text"
                    name="revenueGoalYear3"
                    value={formData.revenueGoalYear3}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="e.g., $2.5 million by year 3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Customer Goal - First 3 Months <span className="text-xs text-gray-500">(Specific & Achievable)</span>
                  </label>
                  <input
                    type="text"
                    name="customerGoalMonth3"
                    value={formData.customerGoalMonth3}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="e.g., 100 paying customers in 90 days"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Customer Goal - First Year <span className="text-xs text-gray-500">(Annual target)</span>
                  </label>
                  <input
                    type="text"
                    name="customerGoalYear1"
                    value={formData.customerGoalYear1}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="e.g., 1,000 customers by end of year 1"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Key Success Metrics <span className="text-xs text-gray-500">(Measurable & Relevant)</span>
                  </label>
                  <textarea
                    name="keyMetrics"
                    value={formData.keyMetrics}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    rows={2}
                    placeholder="e.g., 15% monthly growth rate, 70% customer retention, 35% profit margin, break-even in 12 months"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Specific Milestones <span className="text-xs text-gray-500">(Action-oriented checkpoints)</span>
                  </label>
                  <textarea
                    name="specificMilestones"
                    value={formData.specificMilestones}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    rows={3}
                    placeholder="e.g., Month 1: Launch website and social media. Month 3: First 100 customers. Month 6: Hire first employee. Month 12: Open second location."
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition shadow-lg"
            >
              Generate My Business Plan →
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>✨ Your business plan will include: Executive Summary, Market Analysis, Financial Projections, Marketing Strategy, and more!</p>
        </div>
      </div>
    </div>
  )
}
