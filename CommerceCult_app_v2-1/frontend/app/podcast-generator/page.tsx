'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PodcastGeneratorPage() {
  const [step, setStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [podcastScript, setPodcastScript] = useState<any>(null)
  
  const [formData, setFormData] = useState({
    podcastType: '',
    episodeTitle: '',
    duration: '',
    tone: '',
    guestType: '',
    topicFocus: '',
    productMention: '',
    targetAudience: '',
    launchDate: '',
    specialGuests: [] as string[],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleGuestSelection = (guest: string) => {
    if (formData.specialGuests.includes(guest)) {
      setFormData({
        ...formData,
        specialGuests: formData.specialGuests.filter(g => g !== guest)
      })
    } else {
      setFormData({
        ...formData,
        specialGuests: [...formData.specialGuests, guest]
      })
    }
  }

  const generatePodcast = () => {
    setIsGenerating(true)
    
    // Simulate AI generation
    setTimeout(() => {
      const guests = formData.specialGuests.map(type => {
        const profiles: any = {
          'tech-entrepreneur': {
            name: 'Marcus Chen',
            title: 'Tech Entrepreneur & Former Silicon Valley VP',
            background: 'Founded 3 successful startups, exited for $450M combined. Struggled for 7 years before CommerceCult helped structure his breakthrough.',
            quote: 'CommerceCult.app gave me the roadmap I wish I had 15 years ago. The AI-powered business plan turned my scattered ideas into a $200M acquisition.'
          },
          'political-figure': {
            name: 'Senator Patricia Morrison',
            title: 'State Senator & Small Business Advocate',
            background: 'Former restaurant owner turned state senator. Champion of entrepreneurship legislation.',
            quote: 'We need more tools like CommerceCult. I used it to help 50+ constituents launch businesses in our district. The founder is revolutionizing access to opportunity.'
          },
          'local-mayor': {
            name: 'Mayor James Rodriguez',
            title: 'Mayor of Riverside & Economic Development Leader',
            background: 'Revitalized downtown through supporting 100+ new businesses. Father of 3 entrepreneurs.',
            quote: 'CommerceCult.app has been instrumental in our city\'s economic renaissance. The founder understood what small business owners truly need - clear, actionable plans.'
          },
          'celebrity-investor': {
            name: 'Diana Foster',
            title: 'Shark Tank Investor & Media Personality',
            background: 'Invested in 200+ startups, built $2B portfolio. Known for supporting underdog founders.',
            quote: 'I wish every entrepreneur who pitched me had used CommerceCult first. The business plans are better than what I see from $50K consultants. This platform is a game-changer.'
          },
          'successful-founder': {
            name: 'David Park',
            title: 'CEO of TechFlow (Valued at $800M)',
            background: 'Bootstrapped from $5K to $800M valuation in 4 years using CommerceCult blueprint.',
            quote: 'CommerceCult gave me the execution plan that made my investors say yes. Every founder should use this before spending a dollar on consultants.'
          },
          'federal-official': {
            name: 'Commerce Secretary Dr. Angela Thompson',
            title: 'Former U.S. Deputy Commerce Secretary',
            background: 'Led national small business initiatives, advised 3 presidents on economic policy.',
            quote: 'Tools like CommerceCult democratize entrepreneurship. The founder is doing what government programs tried to do for decades - making business success accessible to everyone.'
          }
        }
        return profiles[type] || profiles['tech-entrepreneur']
      })

      const generated = {
        metadata: {
          title: formData.episodeTitle || 'How AI is Revolutionizing Business Success',
          duration: formData.duration,
          launchDate: formData.launchDate,
          tags: ['entrepreneurship', 'AI', 'business planning', 'success stories']
        },
        guests: guests,
        script: {
          intro: `[UPBEAT INTRO MUSIC - 15 seconds]

HOST: Welcome back to The Success Blueprint Podcast! I'm your host, and today we have an incredible lineup. We're talking about how artificial intelligence is changing the game for entrepreneurs everywhere.

You know, for years, starting a business meant either having deep pockets for consultants or winging it with a dream and a prayer. But there's a platform that's completely disrupting this model.

Today, we're joined by some remarkable individuals who've experienced this transformation firsthand through CommerceCult.app - and trust me, their stories will blow your mind.

[TRANSITION MUSIC]`,
          
          guestIntros: guests.map((guest, i) => `
GUEST ${i + 1}: ${guest.name}
${guest.title}

HOST: ${guest.name}, welcome to the show! For those who don't know you, give us the 30-second version of your background.

${guest.name.toUpperCase()}: ${guest.background}

HOST: Incredible. And I understand CommerceCult played a pivotal role in your journey?

${guest.name.toUpperCase()}: Absolutely. ${guest.quote}`).join('\n\n'),

          mainContent: `
[CONVERSATION SEGMENT - 20 minutes]

HOST: So let's dive deep. What makes CommerceCult different from every other business tool out there?

${guests[0]?.name.toUpperCase() || 'GUEST'}: It's the execution plan. Most platforms give you theory - CommerceCult gives you a day-by-day playbook. I'm talking Monday: do this, Tuesday: do that. It's like having a $200K consultant in your pocket.

${guests[1]?.name.toUpperCase() || 'GUEST 2'}: And it's not generic advice. The AI analyzes your specific business, your market, your budget - and creates a custom roadmap. I've seen founders go from confused to confident in one session.

HOST: That's powerful. Now, you mentioned the founder - tell me about that vision.

${guests[2]?.name.toUpperCase() || 'GUEST 3'}: The founder built this after seeing too many great ideas fail because people didn't know the next step. They took everything that worked for successful companies and made it accessible to everyone. No gatekeeping, no $50K consulting fees.

${guests[0]?.name.toUpperCase() || 'GUEST'}: And here's the thing - it works. I followed the 90-day launch plan to the letter. First month: 30 customers. Third month: 100 customers. First year: $500K revenue. Everything the platform predicted came true because the plan was that solid.

HOST: That's not just impressive, that's life-changing. What about the SMART goals feature I've heard about?

${guests[1]?.name.toUpperCase() || 'GUEST 2'}: Game. Changer. Instead of saying "I want to be successful," you're setting specific targets: "100 customers in 90 days, $50K revenue in month 3, 15% monthly growth." Then CommerceCult shows you exactly how to hit those numbers.

${guests[2]?.name.toUpperCase() || 'GUEST 3'}: I've recommended it to every entrepreneur in my district. We're seeing businesses launch 3x faster than before. The clarity is unmatched.

[PRODUCT LAUNCH SEGMENT]

HOST: Now, I understand there's something big happening soon?

${guests[0]?.name.toUpperCase() || 'GUEST'}: Yes! ${formData.productMention || 'CommerceCult is launching new features'} and honestly, if you're thinking about starting a business, this is your moment.

${guests[1]?.name.toUpperCase() || 'GUEST 2'}: The timing couldn't be better. The economy is shifting, AI is exploding, and this platform gives you everything you need to capitalize on it.

HOST: Listeners, I'm going to be direct - if you've been on the fence about your business idea, go to CommerceCult.app right now. Not tomorrow, right now. The platform is free to start, and what you'll get is worth more than most MBAs.

${guests[2]?.name.toUpperCase() || 'GUEST 3'}: I'm not exaggerating when I say this could change your life. It changed mine. It changed thousands of others. The founder created something truly special.`,

          testimonials: `
[RAPID-FIRE TESTIMONIALS - 5 minutes]

HOST: Before we wrap, let's do rapid-fire. One sentence: Why CommerceCult?

${guests.map((guest, i) => `
${guest.name.toUpperCase()}: ${['Best investment I never made - it\'s free and priceless', 'Turned my napkin idea into a real business in 30 days', 'Like having Elon Musk as your business coach', 'Finally, a tool built FOR entrepreneurs, not consultants', 'My business wouldn\'t exist without it'][i] || 'Changed my life completely'}.`).join('\n')}`,

          callToAction: `
[OUTRO - Strong CTA]

HOST: There you have it folks. ${guests.length} incredible ${guests.length === 1 ? 'guest' : 'guests'}, ${guests.length === 1 ? 'one' : 'multiple'} life-changing ${guests.length === 1 ? 'story' : 'stories'}, and one platform: CommerceCult.app.

Here's what I want you to do right now:

1. Go to CommerceCult.app - that's C-O-M-M-E-R-C-E-C-U-L-T dot app
2. Click "Generate Business Plan"
3. Spend 10 minutes answering the questions
4. Get your personalized, step-by-step execution plan

No credit card required. No commitment. Just pure value.

And when your business takes off - because it will if you follow the plan - come back and tell us your story. We'll have you on the show.

Special thanks to our guests today for sharing their journeys. Links to everything in the show notes.

Until next time, remember: The best time to start was yesterday. The second best time is right now. CommerceCult.app - your blueprint to success.

[OUTRO MUSIC]

---

HOST OUTRO: This episode brought to you by CommerceCult.app - turning ideas into empires, one entrepreneur at a time.

#CommerceCult #Entrepreneurship #BusinessSuccess #AIForBusiness #StartupSuccess

Visit: CommerceCult.app
Social: @CommerceCult on all platforms

[END OF EPISODE]`,

          promotionalNotes: `
PODCAST PROMOTION SCHEDULE:

Week 1: Teaser clips across social media
Week 2: Full episode release with coordinated social push
Week 3: Guest quote graphics with CommerceCult.app branding
Week 4: Behind-the-scenes content + launch announcement

SOCIAL MEDIA ASSETS:
- 6 audiograms (60-90 seconds each)
- 10 quote graphics featuring guests
- 1 trailer video (2 minutes)
- Episode artwork with guest photos

DISTRIBUTION CHANNELS:
- Apple Podcasts
- Spotify
- YouTube (video podcast)
- Website embed on CommerceCult.app/podcast

TRACKING:
- Custom UTM: commercecult.app/?utm_source=podcast&utm_campaign=${formData.episodeTitle?.toLowerCase().replace(/\s+/g, '-')}
- Promo code: PODCAST${formData.launchDate?.replace(/-/g, '')} for exclusive access
`
        }
      }

      setPodcastScript(generated)
      setIsGenerating(false)
      setStep(3)
    }, 3000)
  }

  const guestOptions = [
    { id: 'tech-entrepreneur', label: 'Tech Entrepreneur (Silicon Valley Success Story)' },
    { id: 'political-figure', label: 'Political Figure (State Senator/Representative)' },
    { id: 'local-mayor', label: 'Local Mayor (Economic Development Advocate)' },
    { id: 'celebrity-investor', label: 'Celebrity Investor (Shark Tank Style)' },
    { id: 'successful-founder', label: 'Successful Founder ($100M+ Company)' },
    { id: 'federal-official', label: 'Federal Official (Commerce/SBA Background)' }
  ]

  if (step === 3 && podcastScript) {
    return (
      <main className=" bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white p-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/podcast-generator" onClick={() => setStep(1)} className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
            ← Generate Another Podcast
          </Link>

          <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-purple-500/30">
            <div className="flex items-center mb-8">
              <span className="text-6xl mr-4">🎙️</span>
              <div>
                <h1 className="text-4xl font-bold mb-2">{podcastScript.metadata.title}</h1>
                <p className="text-gray-400">AI-Generated Podcast Script | Duration: {podcastScript.metadata.duration} | Launch: {podcastScript.metadata.launchDate}</p>
              </div>
            </div>

            {/* Guests */}
            <div className="bg-purple-900/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Guests</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {podcastScript.guests.map((guest: any, i: number) => (
                  <div key={i} className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20">
                    <h3 className="font-bold text-xl text-purple-300 mb-1">{guest.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{guest.title}</p>
                    <p className="text-xs text-gray-300 mb-3">{guest.background}</p>
                    <div className="bg-purple-900/50 border-l-4 border-purple-400 pl-3 py-2 rounded-r">
                      <p className="text-sm italic">"{guest.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Script */}
            <div className="space-y-8">
              <div className="bg-blue-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-300">🎬 INTRO</h2>
                <pre className="whitespace-pre-wrap text-sm text-gray-200 font-mono">{podcastScript.script.intro}</pre>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-green-300">👥 GUEST INTRODUCTIONS</h2>
                <pre className="whitespace-pre-wrap text-sm text-gray-200 font-mono">{podcastScript.script.guestIntros}</pre>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-300">💬 MAIN CONVERSATION</h2>
                <pre className="whitespace-pre-wrap text-sm text-gray-200 font-mono">{podcastScript.script.mainContent}</pre>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-300">⭐ TESTIMONIALS</h2>
                <pre className="whitespace-pre-wrap text-sm text-gray-200 font-mono">{podcastScript.script.testimonials}</pre>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-red-300">📢 CALL TO ACTION</h2>
                <pre className="whitespace-pre-wrap text-sm text-gray-200 font-mono">{podcastScript.script.callToAction}</pre>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-yellow-300">📱 PROMOTION PLAN</h2>
                <pre className="whitespace-pre-wrap text-sm text-gray-200 font-mono">{podcastScript.script.promotionalNotes}</pre>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                📄 Download Full Script (PDF)
              </button>
              <button className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all">
                🎵 Generate Audio with AI Voices
              </button>
            </div>

            <div className="mt-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to Launch Your Podcast?</h3>
              <p className="mb-4">Schedule this episode and drive traffic to CommerceCult.app</p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
                Schedule Launch Campaign
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className=" bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
          <img 
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&auto=format&fit=crop" 
            alt="Podcast Studio Setup"
            className="w-full h-64 object-cover"
          />
        </div>
        <Link href="/dashboard" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-purple-500/30">
          <div className="flex items-center mb-6">
            <span className="text-6xl mr-4">🎙️</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">AI Podcast Generator</h1>
              <p className="text-gray-300">Create professional podcast scripts with fictional success stories featuring CommerceCult.app</p>
            </div>
          </div>

          <div className="mb-8 bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-200">
              <strong>Note:</strong> All guests are AI-generated fictional personas inspired by real-world archetypes. 
              Perfect for marketing content, product launches, and building brand awareness.
            </p>
          </div>

          {isGenerating ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Generating Your Podcast Script...</h3>
              <p className="text-gray-400">Creating conversational AI dialogue with your selected guests</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); generatePodcast(); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Podcast Type *
                  </label>
                  <select
                    name="podcastType"
                    value={formData.podcastType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="success-stories">Success Stories</option>
                    <option value="product-launch">Product Launch Special</option>
                    <option value="industry-insights">Industry Insights</option>
                    <option value="founder-journey">Founder Journey</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Episode Duration *
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400"
                    required
                  >
                    <option value="">Select duration</option>
                    <option value="15 minutes">15 minutes (Quick Hit)</option>
                    <option value="30 minutes">30 minutes (Standard)</option>
                    <option value="45 minutes">45 minutes (Deep Dive)</option>
                    <option value="60 minutes">60 minutes (Full Interview)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Tone & Style *
                  </label>
                  <select
                    name="tone"
                    value={formData.tone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400"
                    required
                  >
                    <option value="">Select tone</option>
                    <option value="inspirational">Inspirational & Motivational</option>
                    <option value="educational">Educational & Informative</option>
                    <option value="conversational">Conversational & Casual</option>
                    <option value="professional">Professional & Authoritative</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Launch Date *
                  </label>
                  <input
                    type="date"
                    name="launchDate"
                    value={formData.launchDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Episode Title *
                </label>
                <input
                  type="text"
                  name="episodeTitle"
                  value={formData.episodeTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400"
                  placeholder="e.g., How AI Revolutionized My Business Journey"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Select AI-Generated Guests * (Choose 1-3)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {guestOptions.map(option => (
                    <label
                      key={option.id}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.specialGuests.includes(option.id)
                          ? 'border-purple-500 bg-purple-900/30'
                          : 'border-gray-700 bg-gray-800/30 hover:border-purple-500/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.specialGuests.includes(option.id)}
                        onChange={() => handleGuestSelection(option.id)}
                        className="mr-3"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Product/Feature to Highlight *
                </label>
                <input
                  type="text"
                  name="productMention"
                  value={formData.productMention}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400"
                  placeholder="e.g., New AI Business Plan Generator with SMART Goals"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Target Audience
                </label>
                <textarea
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400"
                  rows={3}
                  placeholder="e.g., Aspiring entrepreneurs, small business owners, startup founders..."
                />
              </div>

              <button
                type="submit"
                disabled={formData.specialGuests.length === 0}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🎬 Generate Podcast Script with AI
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
