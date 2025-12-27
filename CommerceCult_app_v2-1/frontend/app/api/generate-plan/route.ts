import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    const { businessName, industry, businessType, location, targetMarket, fundingNeeded, description } = formData

    // Build the prompt for AI
    const prompt = `Create a comprehensive business plan for the following business:

Business Name: ${businessName}
Industry: ${industry}
Business Type: ${businessType}
Location: ${location}
Target Market: ${targetMarket}
Funding Needed: ${fundingNeeded || 'Not specified'}
Description: ${description}

Generate a detailed business plan in JSON format with the following sections:
1. Executive Summary (mission, vision, objectives array)
2. Company Description (overview, legal structure, key success factors array)
3. Market Analysis (industry overview, target market details, competition array with 3 competitors, competitive advantages array)
4. Products and Services (detailed descriptions array)
5. Marketing Strategy (pricing strategy, promotion channels array, sales strategy, customer acquisition)
6. Operations Plan (location details, facilities, equipment needs array, suppliers array, production process)
7. Management Team (key personnel array with title/experience/responsibilities)
8. Financial Projections (year1, year2, year3 with revenue/expenses/profit, breakEven, fundingUse object)
9. Risk Analysis (risks array with risk/impact/mitigation)
10. Milestones (milestones array with milestone/target/status)

Return only valid JSON without markdown formatting.`

    // Call OpenAI API
    const openaiApiKey = process.env.OPENAI_API_KEY
    
    if (!openaiApiKey) {
      // Fallback to template if no API key
      return NextResponse.json(generateTemplatePlan(formData))
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an expert business plan consultant. Generate detailed, professional business plans in JSON format.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4000
      })
    })

    if (!response.ok) {
      throw new Error('AI generation failed')
    }

    const data = await response.json()
    const businessPlan = JSON.parse(data.choices[0].message.content)

    return NextResponse.json(businessPlan)

  } catch (error) {
    console.error('Business plan generation error:', error)
    // Return template plan as fallback
    return NextResponse.json(generateTemplatePlan(await request.json()))
  }
}

function generateTemplatePlan(formData: any) {
  return {
    executiveSummary: {
      mission: `${formData.businessName} aims to revolutionize the ${formData.industry} industry by providing innovative solutions to ${formData.targetMarket}. Our unique value proposition combines quality, affordability, and exceptional customer service.`,
      vision: `To become the leading ${formData.businessType} in ${formData.location} within 5 years, serving over 10,000 customers and generating $5M+ in annual revenue.`,
      objectives: [
        `Achieve ${formData.revenueGoalYear1 || '$500K'} in revenue within the first year`,
        `Acquire ${formData.customerGoalYear1 || '1,000'} customers in first 12 months`,
        'Establish strong brand presence in target market',
        'Build strategic partnerships with 5+ key vendors',
        'Maintain 90%+ customer satisfaction rating'
      ]
    },
    companyDescription: {
      overview: `${formData.businessName} is a ${formData.businessType} focused on serving ${formData.targetMarket} in the ${formData.industry} sector. Located in ${formData.location}, we provide ${formData.description || 'innovative solutions to market needs'}.`,
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
        'Innovative technology platform',
        'Strong brand positioning',
        'Strategic partnerships'
      ]
    },
    productsServices: {
      description: `${formData.businessName} offers a comprehensive suite of products and services designed to meet the needs of ${formData.targetMarket}.`,
      items: [
        {
          name: 'Core Product/Service',
          description: 'Our flagship offering that delivers exceptional value',
          pricing: 'Competitive market pricing',
          features: ['High quality', 'Easy to use', 'Reliable', 'Scalable']
        },
        {
          name: 'Premium Package',
          description: 'Enhanced features for power users',
          pricing: 'Premium tier pricing',
          features: ['All core features', 'Priority support', 'Advanced analytics', 'Custom integrations']
        }
      ]
    },
    marketingStrategy: {
      pricing: 'Value-based pricing strategy with competitive market positioning',
      promotion: [
        'Digital marketing (SEO, SEM, social media)',
        'Content marketing and thought leadership',
        'Email marketing campaigns',
        'Strategic partnerships and referrals',
        'Trade shows and industry events'
      ],
      sales: 'Multi-channel approach including direct sales, online platform, and partner channels',
      customerAcquisition: 'Focus on inbound marketing, referrals, and strategic partnerships with CAC target of $150'
    },
    operationsPlan: {
      location: `Primary operations in ${formData.location} with potential for expansion`,
      facilities: 'Modern office/retail space with room for growth',
      equipment: [
        'Computer systems and software',
        'Office furniture and fixtures',
        'Industry-specific equipment',
        'Communication systems'
      ],
      suppliers: [
        'Primary vendor for core materials',
        'Secondary vendor for backup supply',
        'Specialized vendors for unique components'
      ],
      production: 'Efficient processes with quality control at each stage'
    },
    managementTeam: [
      {
        title: 'Founder & CEO',
        experience: '10+ years industry experience',
        responsibilities: 'Overall strategy, fundraising, key partnerships'
      },
      {
        title: 'COO',
        experience: '8+ years operations management',
        responsibilities: 'Daily operations, team management, process optimization'
      },
      {
        title: 'CMO',
        experience: '7+ years marketing leadership',
        responsibilities: 'Marketing strategy, brand development, customer acquisition'
      }
    ],
    financialProjections: {
      year1: {
        revenue: formData.revenueGoalYear1 || '$500,000',
        expenses: '$350,000',
        profit: '$150,000'
      },
      year2: {
        revenue: '$1,200,000',
        expenses: '$750,000',
        profit: '$450,000'
      },
      year3: {
        revenue: formData.revenueGoalYear3 || '$2,500,000',
        expenses: '$1,500,000',
        profit: '$1,000,000'
      },
      breakEven: 'Month 8 of Year 1',
      fundingUse: {
        operations: '40%',
        marketing: '30%',
        product: '20%',
        reserves: '10%'
      }
    },
    riskAnalysis: [
      {
        risk: 'Market competition',
        impact: 'Medium',
        mitigation: 'Differentiation strategy and continuous innovation'
      },
      {
        risk: 'Economic downturn',
        impact: 'High',
        mitigation: 'Diversified revenue streams and conservative financial management'
      },
      {
        risk: 'Key personnel loss',
        impact: 'Medium',
        mitigation: 'Cross-training, competitive compensation, succession planning'
      }
    ],
    milestones: [
      {
        milestone: 'Business launch',
        target: 'Month 1',
        status: 'Planned'
      },
      {
        milestone: 'First 100 customers',
        target: 'Month 3',
        status: 'Planned'
      },
      {
        milestone: 'Break even',
        target: 'Month 8',
        status: 'Planned'
      },
      {
        milestone: '$500K revenue',
        target: 'Month 12',
        status: 'Planned'
      },
      {
        milestone: 'Series A funding',
        target: 'Month 18',
        status: 'Planned'
      }
    ]
  }
}
