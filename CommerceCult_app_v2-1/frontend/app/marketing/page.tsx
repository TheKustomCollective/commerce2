'use client'

import Link from 'next/link'

export default function ZeroDollarMarketingPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Back to Home Link */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 font-semibold">
          ← Back to Home
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-6">💚</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Zero-Dollar Marketing Strategy
          </h1>
          <p className="text-2xl mb-4 opacity-95">
            Go Viral Without Spending a Dime
          </p>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Our complete blueprint for achieving explosive growth using only free tools, organic content, and strategic partnerships. No ads. No budget. Just hustle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Get Started Free
            </Link>
            <a
              href="#strategy"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition border-2 border-white"
            >
              View Strategy
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Zero-Budget Marketing Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard 
              icon="📈" 
              value="300%" 
              label="Average organic growth" 
              color="green"
            />
            <StatCard 
              icon="💰" 
              value="$0" 
              label="Required ad spend" 
              color="emerald"
            />
            <StatCard 
              icon="⏱️" 
              value="6-12 mo" 
              label="Time to viral traction" 
              color="teal"
            />
            <StatCard 
              icon="🎯" 
              value="10K+" 
              label="Users without paid ads" 
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Strategy Overview */}
      <section id="strategy" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The 6-Phase Strategy</h2>
            <p className="text-xl text-gray-600">
              A proven roadmap to viral growth with zero marketing budget
            </p>
          </div>

          <div className="space-y-8">
            <PhaseCard
              phase="1"
              title="Foundation (Weeks 1-4)"
              icon="🎯"
              color="green"
              items={[
                { title: "Brand Identity & Messaging", desc: "Define your unique value prop and target personas" },
                { title: "SEO Foundation", desc: "Target high-intent keywords like 'business plan template' (49.5K searches/mo)" },
                { title: "Technical SEO", desc: "Submit sitemap, optimize meta tags, ensure mobile-first design" },
                { title: "Content Calendar", desc: "Plan 30+ blog posts targeting buyer keywords" }
              ]}
              time="50 hours"
              cost="$0"
            />

            <PhaseCard
              phase="2"
              title="Content Marketing Dominance"
              icon="📝"
              color="emerald"
              items={[
                { title: "Blog Strategy", desc: "3 long-form posts + 2 quick tips per week" },
                { title: "YouTube Channel", desc: "2 tutorials + 1 interview + 5 shorts per week" },
                { title: "LinkedIn Presence", desc: "5 posts per week, educational carousels, thought leadership" },
                { title: "Twitter/X Threads", desc: "Daily value-packed threads with CTAs" }
              ]}
              time="30 hours/week"
              cost="$0"
            />

            <PhaseCard
              phase="3"
              title="Community Building (Weeks 5-12)"
              icon="👥"
              color="teal"
              items={[
                { title: "Reddit Strategy", desc: "Active in r/Entrepreneur (2.9M), r/startups (1.5M), provide value not pitches" },
                { title: "Facebook Groups", desc: "Join 10-15 groups, answer questions, build relationships" },
                { title: "Discord/Slack", desc: "Join 5-10 communities, be helpful contributor" },
                { title: "Own Community", desc: "Create CommerceCult Discord for users to network and share wins" }
              ]}
              time="10 hours/week"
              cost="$0"
            />

            <PhaseCard
              phase="4"
              title="Partnership & Referral (Weeks 8-16)"
              icon="🤝"
              color="green"
              items={[
                { title: "Affiliate Program", desc: "20% recurring commission, target coaches and influencers" },
                { title: "Integration Partners", desc: "Partner with QuickBooks, HubSpot, Stripe for co-marketing" },
                { title: "Educational Partnerships", desc: "Free plans for students, bulk licenses for universities" },
                { title: "Referral System", desc: "Users get $50 credit for each referral" }
              ]}
              time="15 hours/week"
              cost="$0 upfront"
            />

            <PhaseCard
              phase="5"
              title="PR & Media Strategy"
              icon="📰"
              color="emerald"
              items={[
                { title: "Press Releases", desc: "Free distribution via PRLog, 24-7PressRelease for milestones" },
                { title: "Podcast Appearances", desc: "Target 2 shows per month in entrepreneurship niche" },
                { title: "HARO Responses", desc: "Reply to 5 journalist queries daily for backlinks" },
                { title: "Original Research", desc: "Publish annual 'State of Small Business Funding' report" }
              ]}
              time="8 hours/week"
              cost="$0"
            />

            <PhaseCard
              phase="6"
              title="Viral Growth Hacks"
              icon="🚀"
              color="teal"
              items={[
                { title: "FundMyStartup Contest", desc: "$100K prize, massive PR opportunity, builds email list" },
                { title: "Freemium Model", desc: "Free tier with generous limits converts 3-5% to paid" },
                { title: "User Generated Content", desc: "Feature success stories, encourage sharing wins" },
                { title: "Product Hunt Launch", desc: "Aim for #1 Product of the Day, leverage community" }
              ]}
              time="Variable"
              cost="$0 (except contest prize)"
            />
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Content Pillars</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            What to create to dominate organic search and social
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContentPillar
              icon="📊"
              title="Business Planning"
              percentage="40%"
              examples={[
                "How to Write a Business Plan That Gets Funded",
                "10 Business Plan Mistakes That Kill Startups",
                "Free Business Plan Template + Guide"
              ]}
            />
            <ContentPillar
              icon="💸"
              title="Funding & Finance"
              percentage="25%"
              examples={[
                "How to Get a Small Business Loan",
                "VC vs. Bootstrapping Guide",
                "SBA Loan Application Walkthrough"
              ]}
            />
            <ContentPillar
              icon="🔍"
              title="Market Research"
              percentage="20%"
              examples={[
                "How to Do Market Research for Free",
                "Competitor Analysis Template",
                "TAM, SAM, SOM: Market Sizing"
              ]}
            />
            <ContentPillar
              icon="🌟"
              title="Success Stories"
              percentage="15%"
              examples={[
                "How [Business] Raised $100K",
                "Idea to Launch in 30 Days",
                "Customer Case Studies"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Free Tools You'll Need</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ToolCard
              category="Content Creation"
              tools={[
                { name: "Canva", use: "Graphics & thumbnails", cost: "Free" },
                { name: "OBS Studio", use: "Screen recording", cost: "Free" },
                { name: "Grammarly", use: "Writing polish", cost: "Free tier" },
                { name: "Hemingway", use: "Readability check", cost: "Free" }
              ]}
            />
            <ToolCard
              category="SEO & Analytics"
              tools={[
                { name: "Google Analytics", use: "Traffic tracking", cost: "Free" },
                { name: "Google Search Console", use: "SEO monitoring", cost: "Free" },
                { name: "Ubersuggest", use: "Keyword research", cost: "Free tier" },
                { name: "Answer The Public", use: "Content ideas", cost: "Free" }
              ]}
            />
            <ToolCard
              category="Social & Community"
              tools={[
                { name: "Buffer", use: "Schedule posts", cost: "Free tier" },
                { name: "Discord", use: "Community building", cost: "Free" },
                { name: "Mailchimp", use: "Email marketing", cost: "Free to 500" },
                { name: "Calendly", use: "Meeting booking", cost: "Free" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Expected Timeline</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            When you'll start seeing results
          </p>
          
          <div className="space-y-6">
            <TimelineItem
              month="Month 1-2"
              title="Foundation Building"
              description="Set up all channels, publish first 20+ pieces of content, start SEO groundwork"
              metrics="100-500 visitors/month"
            />
            <TimelineItem
              month="Month 3-4"
              title="Content Traction"
              description="SEO starts ranking, social following grows, first organic conversions"
              metrics="1K-3K visitors/month"
            />
            <TimelineItem
              month="Month 5-6"
              title="Community Growth"
              description="Active in communities, partnerships forming, referrals starting"
              metrics="5K-10K visitors/month"
            />
            <TimelineItem
              month="Month 7-9"
              title="Momentum Building"
              description="Multiple channels driving traffic, affiliate program active, PR mentions"
              metrics="15K-30K visitors/month"
            />
            <TimelineItem
              month="Month 10-12"
              title="Viral Velocity"
              description="Compounding growth, product-market fit, user-generated content flowing"
              metrics="50K+ visitors/month"
            />
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">High-Intent Keywords to Target</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Search terms with massive volume and buyer intent
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <KeywordCard keyword="how to write a business plan" searches="60.5K/mo" difficulty="Medium" />
            <KeywordCard keyword="business plan template" searches="49.5K/mo" difficulty="High" />
            <KeywordCard keyword="startup business plan" searches="22.2K/mo" difficulty="Medium" />
            <KeywordCard keyword="free business plan generator" searches="8.1K/mo" difficulty="Low" />
            <KeywordCard keyword="how to start a business with no money" searches="14.8K/mo" difficulty="High" />
            <KeywordCard keyword="small business funding" searches="12.1K/mo" difficulty="Medium" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement This Strategy?</h2>
          <p className="text-xl mb-8 opacity-95">
            Start with our free tools and follow this exact playbook to grow your business organically
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Start Free Trial
            </Link>
            <Link
              href="/generate"
              className="bg-green-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition border-2 border-white"
            >
              Generate Business Plan
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-80">No credit card required • Access full strategy guide</p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Download the Complete Strategy Guide</h3>
          <p className="text-lg mb-8 text-gray-300">
            Get the full 791-line marketing playbook with detailed tactics, timelines, and templates
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
            📄 Download PDF Guide (Free)
          </button>
        </div>
      </section>
    </div>
  )
}

function StatCard({ icon, value, label, color }: { icon: string; value: string; label: string; color: string }) {
  const colorClasses: Record<string, string> = {
    green: 'border-green-200 bg-green-50',
    emerald: 'border-emerald-200 bg-emerald-50',
    teal: 'border-teal-200 bg-teal-50'
  }
  
  return (
    <div className={`text-center p-8 rounded-xl border-2 ${colorClasses[color]}`}>
      <div className="text-5xl mb-3">{icon}</div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  )
}

function PhaseCard({ phase, title, icon, color, items, time, cost }: {
  phase: string;
  title: string;
  icon: string;
  color: string;
  items: Array<{ title: string; desc: string }>;
  time: string;
  cost: string;
}) {
  const colorClasses: Record<string, string> = {
    green: 'from-green-500 to-green-600',
    emerald: 'from-emerald-500 to-emerald-600',
    teal: 'from-teal-500 to-teal-600'
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <div className={`bg-gradient-to-r ${colorClasses[color]} text-white p-6`}>
        <div className="flex items-center gap-4">
          <div className="text-5xl">{icon}</div>
          <div>
            <div className="text-sm font-semibold opacity-90">Phase {phase}</div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="text-sm opacity-90 mt-1">⏱️ {time} • 💰 {cost}</div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="text-green-600 font-bold mt-1">✓</div>
              <div>
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContentPillar({ icon, title, percentage, examples }: {
  icon: string;
  title: string;
  percentage: string;
  examples: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-green-600 font-bold text-lg mb-4">{percentage}</div>
      <ul className="space-y-2 text-sm text-gray-600">
        {examples.map((example, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-green-600">•</span>
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ToolCard({ category, tools }: {
  category: string;
  tools: Array<{ name: string; use: string; cost: string }>;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-900">{category}</h3>
      <div className="space-y-4">
        {tools.map((tool, index) => (
          <div key={index} className="border-l-4 border-green-500 pl-4">
            <div className="font-semibold text-gray-900">{tool.name}</div>
            <div className="text-sm text-gray-600">{tool.use}</div>
            <div className="text-xs text-green-600 font-semibold mt-1">{tool.cost}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ month, title, description, metrics }: {
  month: string;
  title: string;
  description: string;
  metrics: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <div className="text-sm font-bold text-green-600 mb-1">{month}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="bg-green-50 px-4 py-2 rounded-lg border border-green-200 whitespace-nowrap">
          <div className="text-sm text-gray-600">Expected Traffic</div>
          <div className="text-lg font-bold text-green-600">{metrics}</div>
        </div>
      </div>
    </div>
  )
}

function KeywordCard({ keyword, searches, difficulty }: {
  keyword: string;
  searches: string;
  difficulty: string;
}) {
  const difficultyColors: Record<string, string> = {
    Low: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    High: 'bg-red-100 text-red-700'
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
      <div className="text-lg font-bold text-gray-900 mb-3">"{keyword}"</div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-green-600">{searches}</div>
          <div className="text-xs text-gray-500">monthly searches</div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[difficulty]}`}>
          {difficulty}
        </div>
      </div>
    </div>
  )
}
