import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    const { businessName, industry, businessType, location, targetMarket, fundingNeeded, description } = formData

    // Build a detailed research-oriented prompt for AI
    const prompt = `You are an expert business consultant with deep knowledge of market research, financial analysis, and business strategy. 

Conduct thorough research and analysis to create a highly specific, data-driven business plan for:

Business Name: ${businessName}
Industry: ${industry}
Business Type: ${businessType}
Location: ${location}
Target Market: ${targetMarket}
Funding Needed: ${fundingNeeded || 'Not specified'}
Description: ${description}

CRITICAL INSTRUCTIONS:
1. Research the ACTUAL ${industry} industry - use real market data, trends, and growth projections specific to ${location}
2. Identify REAL competitors that exist in ${location} or the ${industry} space - use actual company names if possible
3. Provide SPECIFIC financial projections based on typical ${businessType} metrics in the ${industry} industry
4. Tailor ALL content specifically to ${businessName}'s unique value proposition: ${description}
5. Consider the geographic and demographic specifics of ${location}
6. Base recommendations on current ${new Date().getFullYear()} market conditions

Generate a detailed, UNIQUE business plan in JSON format with the following sections:

1. executiveSummary: {
   mission: string (specific to this business, not generic)
   vision: string (measurable, time-bound, realistic for ${industry})
   objectives: string[] (5 specific, actionable objectives with metrics)
}

2. companyDescription: {
   overview: string (detailed, unique story)
   legalStructure: string (recommend best for this business type)
   ownership: string
   keySuccess: string[] (5 specific success factors for THIS business)
}

3. marketAnalysis: {
   industryOverview: string (current market size, growth rate, trends for ${industry} in ${location})
   targetMarket: {
     segment: string
     size: string (specific numbers for ${location})
     demographics: string (detailed for ${targetMarket})
     psychographics: string (behaviors, values, preferences)
     behavior: string (buying patterns, decision factors)
   }
   competition: [{name, strength, weakness, marketShare}] (3-5 REAL competitors if possible, or realistic fictional ones)
   competitiveAdvantage: string[] (5 specific advantages based on ${description})
}

4. productsServices: {
   description: string
   items: [{name, description, pricing, features: string[]}] (2-4 specific offerings)
}

5. marketingStrategy: {
   pricing: string (specific strategy with rationale)
   promotion: string[] (5-7 specific channels with tactics)
   sales: string (detailed sales process)
   customerAcquisition: string (CAC estimates, conversion rates)
}

6. operationsPlan: {
   location: string (specific location strategy)
   facilities: string (detailed requirements)
   equipment: string[] (specific equipment/technology needed)
   suppliers: string[] (types of suppliers needed)
   production: string (detailed process description)
}

7. managementTeam: [{title, experience, responsibilities}] (3-5 key roles with specific qualifications)

8. financialProjections: {
   year1: {revenue, expenses, profit}
   year2: {revenue, expenses, profit}
   year3: {revenue, expenses, profit}
   breakEven: string
   fundingUse: {operations, marketing, product, reserves} (percentages as strings)
   assumptions: string (key assumptions behind projections)
}

9. riskAnalysis: [{risk, impact: "Low"|"Medium"|"High", mitigation}] (5-7 specific risks for THIS business)

10. milestones: [{milestone, target, status: "Planned"}] (7-10 specific, measurable milestones)

Return ONLY valid JSON without markdown code blocks or formatting. Make this plan highly specific and unique to ${businessName}.`

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
            content: 'You are an expert business consultant with MBA credentials and 20+ years of experience across multiple industries. You have deep knowledge of market research, competitive analysis, financial modeling, and strategic planning. You always provide specific, actionable, data-driven recommendations based on actual market conditions and industry benchmarks. Every business plan you create is unique and tailored to the specific business context provided.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.9, // Higher temperature for more variation
        max_tokens: 4096, // Increased for more detailed responses
        presence_penalty: 0.6, // Encourage new topics
        frequency_penalty: 0.3 // Reduce repetition
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
  // Generate unique variations based on timestamp and random factors
  const timestamp = Date.now()
  const variation = timestamp % 3 // 0, 1, or 2 for variety
  
  const industryMetrics: Record<string, any> = {
    Technology: { cagr: '12.5%', marketSize: '$4.2B', margin: '35%' },
    Retail: { cagr: '6.8%', marketSize: '$3.1B', margin: '22%' },
    Healthcare: { cagr: '9.2%', marketSize: '$5.8B', margin: '28%' },
    Food: { cagr: '7.4%', marketSize: '$2.9B', margin: '18%' },
    Finance: { cagr: '8.9%', marketSize: '$6.3B', margin: '32%' },
    Education: { cagr: '10.1%', marketSize: '$3.7B', margin: '25%' },
    default: { cagr: '8.5%', marketSize: '$2.3B', margin: '24%' }
  }
  
  const metrics = industryMetrics[formData.industry] || industryMetrics.default
  const currentYear = new Date().getFullYear()
  
  return {
    executiveSummary: {
      mission: `${formData.businessName} is dedicated to transforming the ${formData.industry} landscape by delivering ${variation === 0 ? 'exceptional value' : variation === 1 ? 'innovative solutions' : 'unmatched quality'} to ${formData.targetMarket} throughout ${formData.location}. ${formData.description || 'We combine cutting-edge technology with customer-centric service to create lasting impact.'}`,
      vision: `By ${currentYear + 5}, ${formData.businessName} aims to ${variation === 0 ? 'become the premier' : variation === 1 ? 'establish itself as the leading' : 'emerge as the top-rated'} ${formData.businessType} serving ${formData.targetMarket} in ${formData.location}, achieving ${variation === 0 ? '$10M+' : variation === 1 ? '$8M+' : '$12M+'} in annual revenue and serving ${variation === 0 ? '15,000+' : variation === 1 ? '20,000+' : '25,000+'} satisfied customers.`,
      objectives: [
        `Generate ${formData.revenueGoalYear1 || '$500K'} in first-year revenue with ${metrics.margin} profit margins`,
        `Acquire and retain ${formData.customerGoalYear1 || '1,000'} active customers within 12 months`,
        `Establish strategic partnerships with ${variation + 3} key industry players by Q${variation + 2}`,
        `Achieve ${90 + variation * 2}% customer satisfaction rating through exceptional service delivery`,
        `Launch ${variation + 2} innovative product/service offerings by end of year ${variation + 1}`
      ]
    },
    companyDescription: {
      overview: `Founded in ${currentYear}, ${formData.businessName} operates as a ${formData.businessType} specializing in ${formData.industry} solutions for ${formData.targetMarket}. Based in ${formData.location}, we ${formData.description || 'leverage industry expertise and innovative approaches to solve real market challenges'}. Our unique positioning combines ${variation === 0 ? 'affordability with premium quality' : variation === 1 ? 'technological innovation with personalized service' : 'deep market expertise with agile execution'}, setting us apart in a competitive marketplace.`,
      legalStructure: formData.businessType?.includes('Corporation') ? 'C Corporation' : 'Limited Liability Company (LLC)',
      ownership: `${variation === 0 ? 'Founder-owned (100%)' : variation === 1 ? 'Co-founders (50/50 split)' : 'Founder-majority (80%) with angel investors (20%)'}`,
      keySuccess: [
        `${variation === 0 ? 'Deep industry expertise' : variation === 1 ? 'Proven leadership track record' : 'Strong founding team with complementary skills'} spanning ${10 + variation * 5}+ years`,
        `${variation === 0 ? 'Proprietary technology platform' : variation === 1 ? 'Unique service delivery methodology' : 'Innovative product differentiation'} providing competitive moat`,
        `Strong market demand with ${metrics.cagr} projected industry growth in ${formData.location}`,
        `Scalable business model with ${variation === 0 ? 'low capital intensity' : variation === 1 ? 'high margin potential' : 'rapid expansion capability'}`,
        `Strategic ${formData.location} location providing ${variation === 0 ? 'access to target demographic' : variation === 1 ? 'operational cost advantages' : 'proximity to key partners and talent'}`
      ]
    },
    marketAnalysis: {
      industryOverview: `The ${formData.industry} industry is experiencing ${variation === 0 ? 'robust' : variation === 1 ? 'steady' : 'accelerated'} growth with a projected CAGR of ${metrics.cagr} over the next 5 years. Current market size in ${formData.location} is estimated at ${metrics.marketSize} annually as of ${currentYear}, driven by ${variation === 0 ? 'technological innovation and changing consumer preferences' : variation === 1 ? 'demographic shifts and increased demand' : 'economic expansion and market consolidation'}. Key trends include ${variation === 0 ? 'digital transformation, sustainability focus, and personalization' : variation === 1 ? 'automation adoption, customer experience emphasis, and data analytics' : 'mobile-first strategies, AI integration, and omnichannel approaches'}.`,
      targetMarket: {
        segment: formData.targetMarket,
        size: `${250000 + variation * 50000} potential customers in ${formData.location} market`,
        demographics: `Primary: Ages ${25 + variation * 5}-${54 + variation * 5}, household income $${50 + variation * 10}K-$${150 + variation * 25}K, ${variation === 0 ? 'college-educated professionals' : variation === 1 ? 'urban and suburban residents' : 'digitally-native consumers'}, ${40 + variation * 5}% male / ${60 - variation * 5}% female`,
        psychographics: `${variation === 0 ? 'Value-conscious and quality-seeking' : variation === 1 ? 'Early adopters and tech-savvy' : 'Convenience-focused and brand-loyal'}, prioritize ${variation === 0 ? 'reliability and customer service' : variation === 1 ? 'innovation and efficiency' : 'experience and social proof'}, ${variation === 0 ? 'environmentally aware' : variation === 1 ? 'socially engaged' : 'community-oriented'}`,
        behavior: `Research extensively online (${85 + variation}% use digital channels), prefer ${variation === 0 ? 'transparent pricing and detailed product information' : variation === 1 ? 'seamless user experiences and fast service' : 'personalized recommendations and loyalty rewards'}, willing to pay ${10 + variation * 5}-${20 + variation * 5}% premium for superior quality/service`
      },
      competition: [
        {
          name: `${variation === 0 ? 'Market Leader Corp' : variation === 1 ? 'Established Enterprises Inc' : 'Industry Veteran LLC'}`,
          strength: `${variation === 0 ? 'Strong brand recognition and extensive distribution network' : variation === 1 ? 'Large customer base and economies of scale' : 'Long market presence and deep industry relationships'}`,
          weakness: `${variation === 0 ? 'Premium pricing (15-25% above market) and slow innovation cycles' : variation === 1 ? 'Declining customer satisfaction and outdated technology' : 'Limited digital presence and rigid business model'}`,
          marketShare: `${25 + variation * 2}%`
        },
        {
          name: `${variation === 0 ? 'Budget Solutions Co' : variation === 1 ? 'Discount Providers Group' : 'Value Alternatives Inc'}`,
          strength: `${variation === 0 ? 'Aggressive pricing strategy and wide market reach' : variation === 1 ? 'Low-cost structure and high volume sales' : 'Strong distribution partnerships'}`,
          weakness: `${variation === 0 ? 'Inconsistent quality and minimal customer support' : variation === 1 ? 'Generic offerings with limited differentiation' : 'High customer churn (40%+ annually)'}`,
          marketShare: `${18 - variation}%`
        },
        {
          name: `${variation === 0 ? 'Niche Specialists Ltd' : variation === 1 ? 'Boutique Services Pro' : 'Focused Solutions Group'}`,
          strength: `${variation === 0 ? 'Deep expertise in specialized segment' : variation === 1 ? 'Strong customer relationships and loyalty' : 'Premium positioning and high margins'}`,
          weakness: `${variation === 0 ? 'Limited scalability and narrow product range' : variation === 1 ? 'Small marketing budget restricts growth' : 'Geographic limitations and capacity constraints'}`,
          marketShare: `${12 + variation}%`
        },
        {
          name: `${variation === 0 ? 'Digital Disruptors Inc' : variation === 1 ? 'Tech Innovators LLC' : 'NextGen Services Corp'}`,
          strength: `${variation === 0 ? 'Modern technology platform and strong online presence' : variation === 1 ? 'Innovative features and fast market entry' : 'Mobile-first approach and viral marketing'}`,
          weakness: `${variation === 0 ? 'Limited operational experience and cash burn rate' : variation === 1 ? 'Unproven business model and profitability challenges' : 'Customer service gaps and growing pains'}`,
          marketShare: `${8 + variation * 2}%`
        }
      ],
      competitiveAdvantage: [
        `${variation === 0 ? 'Superior product quality at competitive price point' : variation === 1 ? 'Proprietary technology delivering 2-3x efficiency gains' : 'Unique hybrid model combining digital and personal touch'} - ${20 + variation * 5}% better value proposition`,
        `${variation === 0 ? 'Industry-leading customer service with <2 hour response time' : variation === 1 ? '24/7 support availability with 95% satisfaction rating' : 'Dedicated account management for all customer tiers'}`,
        `${variation === 0 ? 'Advanced analytics platform providing actionable insights' : variation === 1 ? 'AI-powered personalization engine' : 'Integrated ecosystem of complementary tools'}`,
        `Strategic ${formData.location} presence enabling ${variation === 0 ? 'same-day service delivery' : variation === 1 ? 'local market expertise' : 'lower operational costs'}`,
        `${variation === 0 ? 'Agile development process with monthly feature releases' : variation === 1 ? 'Strong partnership network providing ecosystem benefits' : 'Sustainable business practices appealing to conscious consumers'}`
      ]
    },
    productsServices: {
      description: `${formData.businessName} offers a ${variation === 0 ? 'comprehensive suite' : variation === 1 ? 'carefully curated selection' : 'innovative portfolio'} of products and services designed to ${variation === 0 ? 'address the complete needs' : variation === 1 ? 'solve key pain points' : 'exceed expectations'} of ${formData.targetMarket}. Our offerings are built on ${formData.description || 'deep market understanding and customer feedback'}.`,
      items: [
        {
          name: `${variation === 0 ? 'Foundation' : variation === 1 ? 'Starter' : 'Essential'} Package`,
          description: `Our ${variation === 0 ? 'entry-level offering delivering core value' : variation === 1 ? 'comprehensive introductory solution' : 'complete foundational service'} perfect for ${variation === 0 ? 'individuals and small teams' : variation === 1 ? 'growing businesses' : 'first-time users'}`,
          pricing: `$${49 + variation * 20}/month or $${499 + variation * 150}/year (${15 + variation * 5}% discount)`,
          features: [
            `${variation === 0 ? 'All essential features' : variation === 1 ? 'Core functionality suite' : 'Complete base platform'}`,
            `${variation === 0 ? 'Email support (24hr response)' : variation === 1 ? 'Priority email support (12hr)' : 'Chat support (4hr response)'}`,
            `${variation === 0 ? 'Basic analytics dashboard' : variation === 1 ? 'Standard reporting tools' : 'Essential insights package'}`,
            `Up to ${variation === 0 ? '5' : variation === 1 ? '10' : '15'} ${variation === 0 ? 'users/projects' : variation === 1 ? 'active accounts' : 'concurrent users'}`
          ]
        },
        {
          name: `${variation === 0 ? 'Professional' : variation === 1 ? 'Business' : 'Premium'} Package`,
          description: `Enhanced features for ${variation === 0 ? 'power users and growing teams' : variation === 1 ? 'established businesses' : 'demanding professionals'} requiring ${variation === 0 ? 'advanced capabilities' : variation === 1 ? 'enterprise-grade tools' : 'maximum performance'}`,
          pricing: `$${149 + variation * 50}/month or $${1499 + variation * 400}/year (${17 + variation * 3}% discount)`,
          features: [
            `Everything in ${variation === 0 ? 'Foundation' : variation === 1 ? 'Starter' : 'Essential'}`,
            `${variation === 0 ? 'Priority support with 4hr response' : variation === 1 ? 'Phone support with 2hr response' : 'Dedicated support manager'}`,
            `${variation === 0 ? 'Advanced analytics & custom reporting' : variation === 1 ? 'Premium insights with predictive analytics' : 'Enterprise dashboard with AI recommendations'}`,
            `Up to ${variation === 0 ? '25' : variation === 1 ? '50' : '100'} ${variation === 0 ? 'users/projects' : variation === 1 ? 'active accounts' : 'concurrent users'}`,
            `${variation === 0 ? 'API access & integrations' : variation === 1 ? 'White-label options' : 'Custom branding & workflows'}`,
            `${variation === 0 ? 'Monthly strategic reviews' : variation === 1 ? 'Quarterly business reviews' : 'Dedicated success manager'}`
          ]
        },
        {
          name: `${variation === 0 ? 'Enterprise' : variation === 1 ? 'Ultimate' : 'Elite'} Package`,
          description: `Our most ${variation === 0 ? 'comprehensive solution' : variation === 1 ? 'powerful offering' : 'complete platform'} for ${variation === 0 ? 'large organizations' : variation === 1 ? 'enterprise clients' : 'market leaders'} with ${variation === 0 ? 'complex requirements' : variation === 1 ? 'demanding needs' : 'maximum scale needs'}`,
          pricing: 'Custom pricing (typically $999+ /month)',
          features: [
            `Everything in ${variation === 0 ? 'Professional' : variation === 1 ? 'Business' : 'Premium'}`,
            `${variation === 0 ? 'Unlimited users/projects' : variation === 1 ? 'Unlimited scale & capacity' : 'No platform limits'}`,
            `${variation === 0 ? '24/7 premium support with <1hr SLA' : variation === 1 ? 'Dedicated support team available 24/7' : 'Concierge-level support with instant response'}`,
            `${variation === 0 ? 'Custom integrations & development' : variation === 1 ? 'Bespoke feature development' : 'Full platform customization'}`,
            `${variation === 0 ? 'Advanced security & compliance' : variation === 1 ? 'Enterprise SSO & security suite' : 'Dedicated infrastructure & compliance'}`,
            `${variation === 0 ? 'Strategic partnership benefits' : variation === 1 ? 'Co-marketing opportunities' : 'Executive advisory access'}`
          ]
        }
      ]
    },
    marketingStrategy: {
      pricing: `${variation === 0 ? 'Value-based pricing strategy' : variation === 1 ? 'Competitive pricing with premium positioning' : 'Penetration pricing transitioning to value-based'} targeting ${metrics.margin} gross margins. Price points set ${variation === 0 ? '10-15% below premium competitors' : variation === 1 ? 'at market parity' : '5-10% above budget alternatives'} while emphasizing superior ${variation === 0 ? 'quality/value ratio' : variation === 1 ? 'features and support' : 'outcomes and ROI'}. ${variation === 0 ? 'Annual contracts offer 15-20% discount' : variation === 1 ? 'Volume discounts available for enterprise clients' : 'Flexible payment plans to reduce barriers'}.`,
      promotion: [
        `${variation === 0 ? 'Content marketing & SEO' : variation === 1 ? 'Inbound marketing with thought leadership' : 'Educational content & industry insights'}: ${variation === 0 ? '2-3 blog posts weekly' : variation === 1 ? 'Weekly webinars and whitepapers' : 'Daily social content and monthly reports'}, targeting ${variation === 0 ? '5K' : variation === 1 ? '10K' : '15K'} organic visitors monthly`,
        `${variation === 0 ? 'Paid digital advertising (Google Ads, LinkedIn)' : variation === 1 ? 'Multi-channel PPC campaigns' : 'Programmatic advertising & retargeting'}: $${5000 + variation * 2000}/month budget, targeting ${variation === 0 ? '$150' : variation === 1 ? '$180' : '$200'} CAC`,
        `${variation === 0 ? 'Email marketing & automation' : variation === 1 ? 'Nurture campaigns with personalization' : 'Behavioral email sequences'}: Building list of ${variation === 0 ? '10K' : variation === 1 ? '15K' : '20K'} subscribers, ${20 + variation * 2}% open rates, ${3 + variation}% conversion`,
        `${variation === 0 ? 'Strategic partnerships & referrals' : variation === 1 ? 'Channel partner program' : 'Affiliate marketing network'}: Target ${variation === 0 ? '10-15' : variation === 1 ? '15-20' : '20-25'} partners contributing ${20 + variation * 5}% of leads`,
        `${variation === 0 ? 'Social media marketing' : variation === 1 ? 'Community building & engagement' : 'Influencer partnerships'}: Active on ${variation === 0 ? 'LinkedIn, Twitter, Facebook' : variation === 1 ? 'LinkedIn, Instagram, YouTube' : 'TikTok, Instagram, LinkedIn'}, ${variation === 0 ? '2K' : variation === 1 ? '5K' : '10K'} followers by month 6`,
        `${variation === 0 ? 'Industry events & trade shows' : variation === 1 ? 'Conference speaking & sponsorships' : 'Virtual events & webinars'}: ${variation === 0 ? '4-6' : variation === 1 ? '6-8' : '8-10'} events annually, generating ${variation === 0 ? '200+' : variation === 1 ? '300+' : '400+'} qualified leads`,
        `${variation === 0 ? 'Customer testimonials & case studies' : variation === 1 ? 'Video testimonials & success stories' : 'ROI calculators & interactive demos'}: Publish ${variation === 0 ? '1-2' : variation === 1 ? '2-3' : '3-4'} monthly, conversion lift ${15 + variation * 5}%`
      ],
      sales: `${variation === 0 ? 'Hybrid inside sales and self-service model' : variation === 1 ? 'Consultative B2B sales process' : 'PLG (Product-Led Growth) with sales assist'}: Prospects enter through ${variation === 0 ? 'free trial (14 days)' : variation === 1 ? 'demo request or consultation' : 'freemium tier or product trial'}, ${variation === 0 ? 'automated nurture sequences' : variation === 1 ? 'assigned sales rep conducts discovery' : 'product engagement triggers sales outreach'} guide to conversion. Average sales cycle ${variation === 0 ? '14-21' : variation === 1 ? '30-45' : '7-14'} days, ${variation === 0 ? '25%' : variation === 1 ? '30%' : '35%'} trial-to-paid conversion rate. ${variation === 0 ? 'Inside sales team handles contracts >$5K/year' : variation === 1 ? 'Field sales for enterprise deals >$25K' : 'Growth team optimizes self-serve funnel'}.`,
      customerAcquisition: `Multi-channel acquisition strategy targeting ${variation === 0 ? '$150' : variation === 1 ? '$180' : '$120'} blended CAC (${variation === 0 ? '3:1' : variation === 1 ? '4:1' : '5:1'} LTV:CAC ratio). Channels: ${variation === 0 ? 'Organic (40%), Paid (30%), Referrals (20%), Partners (10%)' : variation === 1 ? 'Paid (35%), Organic (25%), Partners (25%), Events (15%)' : variation === 1 ? 'Product-led (50%), Paid (25%), Organic (15%), Referrals (10%)' : 'Paid (30%), Product-led (30%), Organic (25%), Partners (15%)'}. Target ${variation === 0 ? '20%' : variation === 1 ? '25%' : '30%'} month-over-month growth in new customers. ${variation === 0 ? 'Focus on scalable digital channels' : variation === 1 ? 'Emphasis on high-value enterprise acquisition' : 'Viral loops and network effects drive organic growth'}.`
    },
    operationsPlan: {
      location: `${variation === 0 ? 'Primary operations based in' : variation === 1 ? 'Headquarters located in' : 'Central hub in'} ${formData.location} with ${variation === 0 ? 'planned expansion to 2-3 additional markets by year 2' : variation === 1 ? 'remote team members across multiple regions' : 'hybrid work model leveraging both physical and virtual presence'}. ${variation === 0 ? 'Strategic location provides access to talent pool and target customers' : variation === 1 ? 'Location chosen for cost efficiency and market proximity' : 'Hub-and-spoke model enables rapid market penetration'}.`,
      facilities: `${variation === 0 ? '2,500' : variation === 1 ? '3,500' : '1,500'} sq ft ${variation === 0 ? 'office/retail space' : variation === 1 ? 'office and operations center' : 'flexible coworking space'} accommodating ${variation === 0 ? '10-15' : variation === 1 ? '15-20' : '5-10'} team members with room for ${variation === 0 ? '100%' : variation === 1 ? '150%' : '200%'} growth. ${variation === 0 ? 'Customer-facing showroom' : variation === 1 ? 'Dedicated meeting rooms' : 'Open collaboration areas'}, ${variation === 0 ? 'storage/inventory area' : variation === 1 ? 'operations workspace' : 'hot desks'}, ${variation === 0 ? 'and private offices' : variation === 1 ? 'and conference facilities' : 'and phone booths'}. ${variation === 0 ? 'Lease terms: 3-year with expansion option' : variation === 1 ? 'Owned property for long-term stability' : 'Month-to-month for maximum flexibility'}.`,
      equipment: [
        `${variation === 0 ? 'Workstations & laptops' : variation === 1 ? 'High-performance computers' : 'Cloud-based infrastructure'}: $${15000 + variation * 5000} initial investment`,
        `${variation === 0 ? 'Industry-specific software licenses' : variation === 1 ? 'Enterprise software suite' : 'SaaS subscriptions'}: $${2000 + variation * 1000}/month`,
        `${variation === 0 ? 'CRM & project management tools' : variation === 1 ? 'ERP system integration' : 'Collaboration platform'}: $${500 + variation * 250}/month`,
        `${variation === 0 ? 'Specialized equipment/machinery' : variation === 1 ? 'Production equipment' : 'Development tools'}: $${25000 + variation * 10000}`,
        `${variation === 0 ? 'Office furniture & fixtures' : variation === 1 ? 'Warehouse equipment' : 'IT infrastructure'}: $${10000 + variation * 5000}`,
        `${variation === 0 ? 'Communication systems (phones, conferencing)' : variation === 1 ? 'Security & access control systems' : 'Networking equipment'}: $${3000 + variation * 1000}`
      ],
      suppliers: [
        `${variation === 0 ? 'Primary materials supplier' : variation === 1 ? 'Tier 1 vendor partnership' : 'Strategic supply partner'}: ${variation === 0 ? 'Local provider with 5-day lead time' : variation === 1 ? 'National distributor with volume discounts' : 'Direct manufacturer relationship'}`,
        `${variation === 0 ? 'Backup supplier' : variation === 1 ? 'Secondary vendor' : 'Alternative source'}: ${variation === 0 ? 'Ensures supply chain resilience' : variation === 1 ? 'Competitive pricing leverage' : 'Risk mitigation strategy'}`,
        `${variation === 0 ? 'Technology/software vendors' : variation === 1 ? 'Service providers' : 'Specialized suppliers'}: ${variation === 0 ? 'Cloud infrastructure & tools' : variation === 1 ? 'Professional services partners' : 'Niche component providers'}`,
        `${variation === 0 ? 'Logistics partners' : variation === 1 ? 'Distribution network' : 'Fulfillment services'}: ${variation === 0 ? 'Regional carrier agreements' : variation === 1 ? '3PL partnership' : 'On-demand delivery integration'}`
      ],
      production: `${variation === 0 ? 'Lean operational methodology' : variation === 1 ? 'Six Sigma quality management' : 'Agile delivery framework'} ensuring ${variation === 0 ? 'efficiency and quality control' : variation === 1 ? 'consistency and continuous improvement' : 'speed and adaptability'}. ${variation === 0 ? 'Standard process includes: intake → planning → execution → quality check → delivery → followup' : variation === 1 ? 'Workflow: order receipt → scheduling → production → inspection → packaging → shipment' : 'Cycle: requirement → development → testing → deployment → monitoring → iteration'}. ${variation === 0 ? 'Target 95% on-time delivery' : variation === 1 ? 'Aim for 99% quality standards' : 'Goal of 48-hour turnaround'}, ${variation === 0 ? '<2% defect rate' : variation === 1 ? '<1% error rate' : '<5% revision requests'}. ${variation === 0 ? 'Scalable to 3x current capacity' : variation === 1 ? 'Automation reduces unit costs by 25%' : 'Cloud infrastructure enables unlimited scale'}.`
    },
    managementTeam: [
      {
        title: `${variation === 0 ? 'Founder & CEO' : variation === 1 ? 'Chief Executive Officer' : 'President & Founder'}`,
        experience: `${12 + variation * 3}+ years in ${formData.industry}, ${variation === 0 ? 'previously VP at Fortune 500 company' : variation === 1 ? 'founded 2 previous startups (1 exit)' : 'former C-level executive at industry leader'}`,
        responsibilities: `${variation === 0 ? 'Overall strategy, vision, and execution' : variation === 1 ? 'Strategic direction, investor relations, major partnerships' : 'Company leadership, culture, and growth strategy'}; ${variation === 0 ? 'fundraising and board management' : variation === 1 ? 'key customer relationships' : 'external stakeholder engagement'}; ${variation === 0 ? 'talent acquisition and team building' : variation === 1 ? 'M&A opportunities' : 'brand and market positioning'}`
      },
      {
        title: `${variation === 0 ? 'Chief Operating Officer (COO)' : variation === 1 ? 'VP of Operations' : 'Chief Operations Officer'}`,
        experience: `${10 + variation * 2}+ years operations management, ${variation === 0 ? 'MBA from top-tier program' : variation === 1 ? 'scaled operations at high-growth startup' : 'process optimization expert'}`,
        responsibilities: `${variation === 0 ? 'Day-to-day operations and team management' : variation === 1 ? 'Operational efficiency and process improvement' : 'Cross-functional coordination and execution'}; ${variation === 0 ? 'vendor relationships and supply chain' : variation === 1 ? 'technology infrastructure and tools' : 'resource allocation and planning'}; ${variation === 0 ? 'customer success and support' : variation === 1 ? 'quality assurance programs' : 'performance metrics and KPIs'}`
      },
      {
        title: `${variation === 0 ? 'Chief Marketing Officer (CMO)' : variation === 1 ? 'VP of Marketing & Sales' : 'Chief Growth Officer'}`,
        experience: `${9 + variation * 2}+ years marketing leadership, ${variation === 0 ? 'proven track record growing brands 0 to $10M' : variation === 1 ? 'expert in digital marketing and growth hacking' : 'built and led teams of 20+ marketers'}`,
        responsibilities: `${variation === 0 ? 'Marketing strategy and brand development' : variation === 1 ? 'Demand generation and customer acquisition' : 'Growth strategy and market expansion'}; ${variation === 0 ? 'customer acquisition and retention programs' : variation === 1 ? 'content strategy and thought leadership' : 'data-driven marketing optimization'}; ${variation === 0 ? 'PR and communications' : variation === 1 ? 'partnership marketing' : 'product marketing and positioning'}`
      },
      {
        title: `${variation === 0 ? 'Chief Technology Officer (CTO)' : variation === 1 ? 'VP of Engineering' : 'Chief Product Officer'}`,
        experience: `${11 + variation * 2}+ years ${variation === 0 ? 'software development and architecture' : variation === 1 ? 'product development and innovation' : 'technology leadership'}${formData.industry === 'Technology' ? ' in SaaS/tech startups' : ' in digital transformation'}`,
        responsibilities: `${variation === 0 ? 'Technology strategy and platform architecture' : variation === 1 ? 'Product roadmap and development' : 'Product vision and user experience'}; ${variation === 0 ? 'engineering team leadership' : variation === 1 ? 'technical team building' : 'innovation and R&D'}; ${variation === 0 ? 'security and infrastructure' : variation === 1 ? 'agile development processes' : 'data strategy and analytics'}`
      },
      {
        title: `${variation === 0 ? 'Chief Financial Officer (CFO)' : variation === 1 ? 'VP of Finance' : 'Financial Controller'}`,
        experience: `${8 + variation * 2}+ years ${variation === 0 ? 'financial management, CPA' : variation === 1 ? 'FP&A and strategic finance' : 'accounting and financial operations'}`,
        responsibilities: `${variation === 0 ? 'Financial planning and analysis' : variation === 1 ? 'Budgeting and financial strategy' : 'Financial reporting and compliance'}; ${variation === 0 ? 'fundraising and investor relations' : variation === 1 ? 'cash flow management' : 'cost optimization'}; ${variation === 0 ? 'accounting and compliance' : variation === 1 ? 'financial modeling and projections' : 'audit and risk management'}`
      }
    ],
    financialProjections: {
      year1: {
        revenue: formData.revenueGoalYear1 || `$${500000 + variation * 100000}`,
        expenses: `$${350000 + variation * 75000}`,
        profit: `$${150000 + variation * 25000}`
      },
      year2: {
        revenue: `$${1200000 + variation * 300000}`,
        expenses: `$${750000 + variation * 150000}`,
        profit: `$${450000 + variation * 150000}`
      },
      year3: {
        revenue: formData.revenueGoalYear3 || `$${2500000 + variation * 500000}`,
        expenses: `$${1500000 + variation * 250000}`,
        profit: `$${1000000 + variation * 250000}`
      },
      breakEven: `Month ${8 + variation} of Year 1`,
      fundingUse: {
        operations: `${40 - variation * 2}%`,
        marketing: `${30 + variation * 3}%`,
        product: `${20 - variation}%`,
        reserves: `${10}%`
      },
      assumptions: `Projections based on: ${variation === 0 ? '150' : variation === 1 ? '200' : '250'} customers by month 12 with $${variation === 0 ? '3,300' : variation === 1 ? '2,500' : '2,000'} average annual contract value; ${10 + variation * 5}% monthly customer growth; ${85 - variation * 3}% retention rate; ${metrics.margin} gross margins; ${variation === 0 ? 'conservative market penetration' : variation === 1 ? 'moderate growth assumptions' : 'aggressive but achievable targets'} based on ${formData.industry} industry benchmarks in ${formData.location}`
    },
    riskAnalysis: [
      {
        risk: `${variation === 0 ? 'Intense market competition from established players' : variation === 1 ? 'Competitive pressure and pricing wars' : 'Market saturation in target segment'}`,
        impact: `${variation === 0 ? 'High' : variation === 1 ? 'Medium' : 'Medium'}`,
        mitigation: `${variation === 0 ? 'Clear differentiation strategy, focus on superior customer experience, continuous innovation, build brand loyalty early' : variation === 1 ? 'Value-based positioning, emphasize unique benefits, strategic partnerships to enhance offering' : 'Geographic expansion into underserved markets, product diversification, niche targeting'}`
      },
      {
        risk: `${variation === 0 ? 'Economic downturn or recession' : variation === 1 ? 'Macroeconomic headwinds affecting customer spending' : 'Changes in consumer discretionary spending'}`,
        impact: 'High',
        mitigation: `${variation === 0 ? 'Diversified customer base across industries, flexible pricing options, maintain strong cash reserves (6+ months runway), focus on ROI-driven value proposition' : variation === 1 ? 'Subscription model provides predictable revenue, counter-cyclical positioning, cost structure flexibility' : 'Essential positioning vs. nice-to-have, tiered pricing for different budgets, proven ROI metrics'}`
      },
      {
        risk: `${variation === 0 ? 'Key personnel turnover or loss' : variation === 1 ? 'Difficulty attracting/retaining talent' : 'Founder/key team member dependence'}`,
        impact: 'Medium',
        mitigation: `${variation === 0 ? 'Competitive compensation with equity incentives, strong company culture, cross-training programs, documented processes, succession planning' : variation === 1 ? 'Employer branding, remote work flexibility, professional development budget, retention bonuses' : 'Knowledge documentation, delegation framework, leadership development, advisory board'}`
      },
      {
        risk: `${variation === 0 ? 'Technology/platform failures or security breaches' : variation === 1 ? 'Cybersecurity threats and data privacy issues' : 'System reliability and uptime concerns'}`,
        impact: `${variation === 0 ? 'High' : variation === 1 ? 'High' : 'Medium'}`,
        mitigation: `${variation === 0 ? 'Enterprise-grade cloud infrastructure, 99.9% uptime SLA, comprehensive backup and disaster recovery, regular security audits, cyber insurance' : variation === 1 ? 'SOC 2 Type II compliance, encryption at rest and in transit, regular penetration testing, incident response plan, GDPR/CCPA adherence' : 'Redundant systems, automated monitoring and alerts, 24/7 support, clear SLAs'}`
      },
      {
        risk: `${variation === 0 ? 'Supply chain disruptions' : variation === 1 ? 'Vendor dependency and supplier issues' : 'Third-party service provider risks'}`,
        impact: `${variation === 0 ? 'Medium' : variation === 1 ? 'Medium' : 'Low'}`,
        mitigation: `${variation === 0 ? 'Multiple suppliers for critical components, inventory buffer stock, geographic diversification, strong vendor relationships with contracts' : variation === 1 ? 'Dual-source strategy, quarterly vendor reviews, alternative supplier prequalification, strategic partnerships' : 'SLAs with penalties, regular vendor assessments, backup providers identified'}`
      },
      {
        risk: `${variation === 0 ? 'Regulatory changes or compliance requirements' : variation === 1 ? 'Industry regulation shifts' : 'Legal and compliance exposures'}`,
        impact: `${variation === 0 ? 'Medium' : variation === 1 ? 'Low' : 'Medium'}`,
        mitigation: `${variation === 0 ? 'Legal counsel on retainer, compliance monitoring system, industry association membership, proactive regulatory engagement, adaptable business model' : variation === 1 ? 'Regulatory affairs expertise on team, lobby/advocacy participation, built-in compliance architecture' : 'Regular legal audits, insurance coverage, terms of service reviews'}`
      },
      {
        risk: `${variation === 0 ? 'Slower than projected customer acquisition' : variation === 1 ? 'Market adoption challenges' : 'Extended sales cycles'}`,
        impact: 'High',
        mitigation: `${variation === 0 ? 'Diversified marketing channels, aggressive early customer incentives, pivot strategy prepared, runway for 18+ months, adjust pricing/positioning if needed' : variation === 1 ? 'Product-led growth model reduces friction, freemium tier for faster adoption, case studies and social proof' : 'Earlier break-even planning, lean operations, channel partnerships accelerate reach'}`
      }
    ],
    milestones: [
      {
        milestone: `${variation === 0 ? 'Business formation and initial setup complete' : variation === 1 ? 'Company incorporated, initial funding secured' : 'Legal entity established, founding team assembled'}`,
        target: `${variation === 0 ? 'Month 1' : variation === 1 ? 'Week 2' : 'Day 1'}`,
        status: 'Planned'
      },
      {
        milestone: `${variation === 0 ? 'Product/service launch' : variation === 1 ? 'Beta launch with first customers' : 'MVP release to market'}`,
        target: `${variation === 0 ? 'Month 2' : variation === 1 ? 'Month 1' : 'Month 2'}`,
        status: 'Planned'
      },
      {
        milestone: `${variation === 0 ? 'First 50 customers acquired' : variation === 1 ? '100 users onboarded' : 'First 25 paying customers'}`,
        target: `${variation === 0 ? 'Month 3' : variation === 1 ? 'Month 2' : 'Month 3'}`,
        status: 'Planned'
      },
      {
        milestone: `${variation === 0 ? '$100K in cumulative revenue' : variation === 1 ? 'First $50K revenue milestone' : '250 customers acquired'}`,
        target: `${variation === 0 ? 'Month 5' : variation === 1 ? 'Month 4' : 'Month 5'}`,
        status: 'Planned'
      },
      {
        milestone: `${variation === 0 ? 'Key partnerships established (3+)' : variation === 1 ? 'Strategic partnership program launched' : 'First major enterprise customer'}`,
        target: `${variation === 0 ? 'Month 6' : variation === 1 ? 'Month 5' : 'Month 6'}`,
        status: 'Planned'
      },
      {
        milestone: `${variation === 0 ? 'Achieve monthly profitability (break-even)' : variation === 1 ? 'Cash flow positive month' : 'Break-even operations'}`,
        target: `Month ${8 + variation}`,
        status: 'Planned'
      },
      {
        milestone: `${variation === 0 ? 'Team expansion to 10+ employees' : variation === 1 ? 'Hire key leadership roles' : 'Build out core team (8-12 people)'}`,
        target: `${variation === 0 ? 'Month 9' : variation === 1 ? 'Month 8' : 'Month 10'}`,
        status: 'Planned'
      },
      {
        milestone: `${variation === 0 ? 'First year revenue goal achieved' : variation === 1 ? '$500K annual revenue run rate' : '1,000+ active customers'}`,
        target: 'Month 12',
        status: 'Planned'
      },
      {
        milestone: `${variation === 0 ? 'Launch version 2.0 with advanced features' : variation === 1 ? 'Product line expansion' : 'Geographic market expansion'}`,
        target: `${variation === 0 ? 'Month 15' : variation === 1 ? 'Month 14' : 'Month 16'}`,
        status: 'Planned'
      },
      {
        milestone: `${variation === 0 ? 'Series A fundraising round ($2-5M)' : variation === 1 ? 'Growth capital raise' : 'Profitability achieved'}`,
        target: `${variation === 0 ? 'Month 18' : variation === 1 ? 'Month 20' : 'Month 18'}`,
        status: 'Planned'
      }
    ]
  }
}
