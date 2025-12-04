'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MarketingToolboxPage() {
  const [activeTab, setActiveTab] = useState<'email' | 'social' | 'seo' | 'analytics' | 'content'>('email');
  
  // Email Marketing Tool State
  const [emailForm, setEmailForm] = useState({
    campaignName: '',
    subject: '',
    audience: '',
    tone: '',
    callToAction: ''
  });
  const [emailResult, setEmailResult] = useState<any>(null);
  const [emailGenerating, setEmailGenerating] = useState(false);

  // Social Media Tool State
  const [socialForm, setSocialForm] = useState({
    platform: '',
    contentType: '',
    topic: '',
    hashtags: '',
    cta: ''
  });
  const [socialResult, setSocialResult] = useState<any>(null);
  const [socialGenerating, setSocialGenerating] = useState(false);

  const tools = [
    { id: 'email', label: '📧 Email Marketing', icon: '📧' },
    { id: 'social', label: '📱 Social Media', icon: '📱' },
    { id: 'seo', label: '🔍 SEO Tools', icon: '🔍' },
    { id: 'analytics', label: '📊 Analytics', icon: '📊' },
    { id: 'content', label: '✍️ Content Writer', icon: '✍️' },
  ];

  const generateEmail = () => {
    setEmailGenerating(true);
    setTimeout(() => {
      setEmailResult({
        subject: emailForm.subject || `Exclusive Offer: Transform Your Business Today`,
        preheader: `Don't miss out on this limited-time opportunity`,
        body: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366f1;">Hi there,</h2>
            <p>We noticed you've been exploring ways to grow your business, and we have something special just for you.</p>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; color: white; text-align: center; margin: 30px 0;">
              <h3 style="margin: 0 0 10px 0;">Limited Time Offer</h3>
              <p style="font-size: 18px; margin: 0;">Get 50% off your first 3 months</p>
            </div>

            <p>With our platform, you'll be able to:</p>
            <ul>
              <li>🚀 Launch your business in days, not months</li>
              <li>💰 Access funding opportunities</li>
              <li>📊 Generate professional business plans with AI</li>
              <li>🎯 Implement proven marketing strategies</li>
            </ul>

            <div style="text-align: center; margin: 40px 0;">
              <a href="#" style="background: #6366f1; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                ${emailForm.callToAction || 'Get Started Now'}
              </a>
            </div>

            <p style="color: #666; font-size: 14px; margin-top: 40px;">
              This offer expires in 48 hours. Don't miss out!
            </p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            
            <p style="color: #999; font-size: 12px;">
              You're receiving this because you signed up for CommerceCult.app updates.
              <br><a href="#" style="color: #6366f1;">Unsubscribe</a> | <a href="#" style="color: #6366f1;">Update Preferences</a>
            </p>
          </div>
        `,
        metrics: {
          estimatedOpenRate: '24-32%',
          estimatedClickRate: '3-5%',
          bestSendTime: 'Tuesday or Thursday, 10 AM - 11 AM',
          mobileOptimized: true,
          spamScore: 'Low (2/10)'
        },
        abTestVariants: [
          { subject: emailForm.subject || 'Exclusive Offer: Transform Your Business Today', predictedPerformance: 'Baseline' },
          { subject: '🚀 Limited Time: 50% Off Your Business Launch', predictedPerformance: '+15% opens (emoji attraction)' },
          { subject: '[URGENT] Your Business Success Package Expires in 48hrs', predictedPerformance: '+8% opens (urgency factor)' }
        ]
      });
      setEmailGenerating(false);
    }, 2000);
  };

  const generateSocial = () => {
    setSocialGenerating(true);
    setTimeout(() => {
      const posts = {
        twitter: `🚀 Just launched our business in 48 hours using AI!

No investors. No fancy degree. Just determination + the right tools.

Here's what we used:
→ AI business plan generator
→ $0 marketing strategy
→ Community funding

Your turn. What's stopping you?

#StartupLife #Entrepreneurship ${socialForm.hashtags}`,
        
        linkedin: `I'm excited to share that we've just crossed a major milestone! 🎉

After months of planning and weeks of execution, our platform is now helping hundreds of entrepreneurs launch their businesses with AI-powered tools.

Key lessons learned:
1. Start before you're ready
2. Leverage AI and automation 
3. Community > Competition
4. Execution beats perfection

What's the biggest lesson entrepreneurship has taught you?

${socialForm.hashtags}`,
        
        instagram: `New post: Behind the scenes of building a business in 2025 ✨

Swipe to see:
→ Our AI-powered dashboard
→ Real results from founders
→ The team that makes it happen

Drop a 🚀 if you're building something amazing!

${socialForm.hashtags}

[Image carousel with 3 slides]`,
        
        facebook: `🎯 EXCITING NEWS for our community!

We're launching a new AI-powered tool that helps you create professional business plans in minutes (not months).

Whether you're:
• Starting your first business
• Seeking funding
• Pivoting your current venture

This tool adapts to YOUR specific situation.

Early access starts next week. Comment "INTERESTED" to get on the list!

${socialForm.hashtags}`
      };

      setSocialResult({
        posts: posts,
        contentCalendar: [
          { day: 'Monday', focus: 'Motivational Monday - Share success stories', bestTime: '8 AM, 1 PM, 7 PM' },
          { day: 'Tuesday', focus: 'Tutorial Tuesday - Educational content', bestTime: '9 AM, 3 PM' },
          { day: 'Wednesday', focus: 'Wisdom Wednesday - Tips & insights', bestTime: '10 AM, 2 PM, 8 PM' },
          { day: 'Thursday', focus: 'Throwback/Testimonial Thursday', bestTime: '11 AM, 4 PM' },
          { day: 'Friday', focus: 'Feature Friday - Product highlights', bestTime: '9 AM, 5 PM' }
        ],
        hashtagStrategy: {
          primary: ['#Entrepreneurship', '#StartupLife', '#SmallBusiness'],
          secondary: ['#BusinessGrowth', '#DigitalMarketing', '#AITools'],
          trending: ['#FutureOfWork', '#SideHustle', '#PassiveIncome']
        },
        engagementTips: [
          'Post carousel content (gets 3x more engagement)',
          'Use 5-10 relevant hashtags (mix popular + niche)',
          'Respond to comments within 1 hour',
          'Ask questions to encourage interaction',
          'Share user-generated content weekly'
        ]
      });
      setSocialGenerating(false);
    }, 2000);
  };

  return (
    <div className=" bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🧰 AI Marketing Toolbox
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to market your business with AI
          </p>
        </div>

        {/* Tool Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tool.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tool.icon} {tool.label}
            </button>
          ))}
        </div>

        {/* Email Marketing Tool */}
        {activeTab === 'email' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📧 AI Email Campaign Generator</h2>
            
            {!emailGenerating && !emailResult && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Campaign Name</label>
                  <input
                    type="text"
                    value={emailForm.campaignName}
                    onChange={(e) => setEmailForm({...emailForm, campaignName: e.target.value})}
                    placeholder="e.g., Black Friday Sale, Product Launch"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Subject Line</label>
                  <input
                    type="text"
                    value={emailForm.subject}
                    onChange={(e) => setEmailForm({...emailForm, subject: e.target.value})}
                    placeholder="e.g., Don't Miss This Limited Offer!"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Target Audience</label>
                  <select
                    value={emailForm.audience}
                    onChange={(e) => setEmailForm({...emailForm, audience: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  >
                    <option value="">Select audience...</option>
                    <option value="new-leads">New Leads</option>
                    <option value="active-customers">Active Customers</option>
                    <option value="inactive-customers">Inactive Customers</option>
                    <option value="trial-users">Trial Users</option>
                    <option value="vip-customers">VIP Customers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tone</label>
                  <select
                    value={emailForm.tone}
                    onChange={(e) => setEmailForm({...emailForm, tone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  >
                    <option value="">Select tone...</option>
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="urgent">Urgent</option>
                    <option value="casual">Casual</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Call-to-Action</label>
                  <input
                    type="text"
                    value={emailForm.callToAction}
                    onChange={(e) => setEmailForm({...emailForm, callToAction: e.target.value})}
                    placeholder="e.g., Shop Now, Get Started, Learn More"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <button
                  onClick={generateEmail}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition"
                >
                  Generate Email Campaign
                </button>
              </div>
            )}

            {emailGenerating && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Generating your email campaign...</p>
              </div>
            )}

            {emailResult && !emailGenerating && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Subject Line</h3>
                  <div className="p-4 bg-indigo-50 rounded-lg font-semibold">{emailResult.subject}</div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Preheader Text</h3>
                  <div className="p-4 bg-gray-50 rounded-lg text-gray-700">{emailResult.preheader}</div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Email Body (HTML)</h3>
                  <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
                    <div dangerouslySetInnerHTML={{ __html: emailResult.body }} />
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Performance Metrics (Estimated)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-600">Open Rate</div>
                      <div className="text-2xl font-bold text-green-600">{emailResult.metrics.estimatedOpenRate}</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600">Click Rate</div>
                      <div className="text-2xl font-bold text-blue-600">{emailResult.metrics.estimatedClickRate}</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="text-sm text-gray-600">Best Send Time</div>
                      <div className="font-semibold text-purple-600">{emailResult.metrics.bestSendTime}</div>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <div className="text-sm text-gray-600">Spam Score</div>
                      <div className="font-semibold text-yellow-600">{emailResult.metrics.spamScore}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">A/B Test Variants</h3>
                  <div className="space-y-3">
                    {emailResult.abTestVariants.map((variant: any, index: number) => (
                      <div key={index} className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-400 transition">
                        <div className="font-semibold mb-1">{variant.subject}</div>
                        <div className="text-sm text-gray-600">{variant.predictedPerformance}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                    📧 Send Test Email
                  </button>
                  <button className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
                    💾 Save to Campaigns
                  </button>
                  <button 
                    onClick={() => {setEmailResult(null); setEmailForm({campaignName: '', subject: '', audience: '', tone: '', callToAction: ''})}}
                    className="px-6 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Social Media Tool */}
        {activeTab === 'social' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📱 Social Media Content Generator</h2>
            
            {!socialGenerating && !socialResult && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Platform</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map(platform => (
                      <button
                        key={platform}
                        onClick={() => setSocialForm({...socialForm, platform})}
                        className={`p-4 border-2 rounded-lg font-semibold transition ${
                          socialForm.platform === platform ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Content Type</label>
                  <select
                    value={socialForm.contentType}
                    onChange={(e) => setSocialForm({...socialForm, contentType: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  >
                    <option value="">Select type...</option>
                    <option value="announcement">Product/Service Announcement</option>
                    <option value="educational">Educational/Tips</option>
                    <option value="engagement">Engagement/Question</option>
                    <option value="testimonial">Testimonial/Social Proof</option>
                    <option value="behind-scenes">Behind the Scenes</option>
                    <option value="promotion">Promotion/Offer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Topic/Theme</label>
                  <input
                    type="text"
                    value={socialForm.topic}
                    onChange={(e) => setSocialForm({...socialForm, topic: e.target.value})}
                    placeholder="e.g., Launch announcement, productivity tips, customer success"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Hashtags (optional)</label>
                  <input
                    type="text"
                    value={socialForm.hashtags}
                    onChange={(e) => setSocialForm({...socialForm, hashtags: e.target.value})}
                    placeholder="e.g., #Entrepreneurship #Startup"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <button
                  onClick={generateSocial}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition"
                >
                  Generate Social Content
                </button>
              </div>
            )}

            {socialGenerating && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Creating your social media content...</p>
              </div>
            )}

            {socialResult && !socialGenerating && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-4">Generated Posts</h3>
                  <div className="space-y-4">
                    {Object.entries(socialResult.posts).map(([platform, content]) => (
                      <div key={platform} className="p-4 border-2 border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-bold capitalize">{platform}</span>
                          <button className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded hover:bg-indigo-200">
                            Copy
                          </button>
                        </div>
                        <div className="text-sm whitespace-pre-wrap bg-gray-50 p-4 rounded">{content as string}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Content Calendar Suggestions</h3>
                  <div className="space-y-2">
                    {socialResult.contentCalendar.map((day: any, index: number) => (
                      <div key={index} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                        <div className="font-semibold">{day.day}</div>
                        <div className="text-sm text-gray-700">{day.focus}</div>
                        <div className="text-xs text-gray-500 mt-1">Best posting times: {day.bestTime}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Hashtag Strategy</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="font-semibold text-sm mb-2">Primary (Always use)</div>
                      <div className="flex flex-wrap gap-2">
                        {socialResult.hashtagStrategy.primary.map((tag: string) => (
                          <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-2">Secondary (Rotate)</div>
                      <div className="flex flex-wrap gap-2">
                        {socialResult.hashtagStrategy.secondary.map((tag: string) => (
                          <span key={tag} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-2">Trending Now</div>
                      <div className="flex flex-wrap gap-2">
                        {socialResult.hashtagStrategy.trending.map((tag: string) => (
                          <span key={tag} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Engagement Tips</h3>
                  <ul className="space-y-2">
                    {socialResult.engagementTips.map((tip: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">→</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => {setSocialResult(null); setSocialForm({platform: '', contentType: '', topic: '', hashtags: '', cta: ''})}}
                  className="w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-lg font-semibold transition"
                >
                  Create New Content
                </button>
              </div>
            )}
          </div>
        )}

        {/* SEO Tools */}
        {activeTab === 'seo' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🔍 SEO Optimization Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-400 transition">
                <h3 className="font-bold text-lg mb-3">📝 Meta Tag Generator</h3>
                <p className="text-gray-600 mb-4">Generate SEO-optimized meta titles and descriptions</p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  Launch Tool
                </button>
              </div>

              <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-400 transition">
                <h3 className="font-bold text-lg mb-3">🔑 Keyword Research</h3>
                <p className="text-gray-600 mb-4">Find high-value keywords for your niche</p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  Launch Tool
                </button>
              </div>

              <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-400 transition">
                <h3 className="font-bold text-lg mb-3">📊 Competitor Analysis</h3>
                <p className="text-gray-600 mb-4">Analyze competitor SEO strategies</p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  Launch Tool
                </button>
              </div>

              <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-400 transition">
                <h3 className="font-bold text-lg mb-3">🔗 Backlink Analyzer</h3>
                <p className="text-gray-600 mb-4">Track and analyze your backlink profile</p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  Launch Tool
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Dashboard */}
        {activeTab === 'analytics' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Marketing Analytics Dashboard</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">12,450</div>
                <div className="text-sm text-gray-600 mt-1">Total Visitors</div>
                <div className="text-xs text-green-600 mt-1">↑ 23% vs last month</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600">3.2%</div>
                <div className="text-sm text-gray-600 mt-1">Conversion Rate</div>
                <div className="text-xs text-green-600 mt-1">↑ 0.8% vs last month</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600">$48,290</div>
                <div className="text-sm text-gray-600 mt-1">Revenue</div>
                <div className="text-xs text-green-600 mt-1">↑ 34% vs last month</div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <div className="text-3xl font-bold text-yellow-600">4.2</div>
                <div className="text-sm text-gray-600 mt-1">Avg Session Duration</div>
                <div className="text-xs text-red-600 mt-1">↓ 0.3min vs last month</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-3">Top Performing Channels</h3>
                <div className="space-y-2">
                  {[
                    { channel: 'Organic Search', visitors: 5200, conversion: '4.1%', color: 'blue' },
                    { channel: 'Social Media', visitors: 3800, conversion: '2.8%', color: 'purple' },
                    { channel: 'Email Marketing', visitors: 2100, conversion: '6.2%', color: 'green' },
                    { channel: 'Direct Traffic', visitors: 1350, conversion: '3.5%', color: 'yellow' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold">{item.channel}</div>
                        <div className="text-sm text-gray-600">{item.visitors.toLocaleString()} visitors</div>
                      </div>
                      <div className={`text-${item.color}-600 font-bold`}>{item.conversion}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Writer */}
        {activeTab === 'content' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">✍️ AI Content Writer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { type: 'Blog Post', icon: '📝', description: 'Long-form SEO articles' },
                { type: 'Product Description', icon: '🛍️', description: 'Compelling product copy' },
                { type: 'Ad Copy', icon: '📢', description: 'High-converting ad text' },
                { type: 'Landing Page', icon: '🎯', description: 'Full landing page copy' },
                { type: 'Press Release', icon: '📰', description: 'Professional announcements' },
                { type: 'Video Script', icon: '🎬', description: 'Engaging video content' }
              ].map((tool, index) => (
                <div key={index} className="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-400 transition text-center">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="font-bold mb-2">{tool.type}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                  <button className="w-full bg-indigo-100 text-indigo-600 py-2 rounded-lg hover:bg-indigo-200 font-semibold">
                    Create
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
