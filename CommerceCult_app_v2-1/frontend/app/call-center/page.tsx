'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CallCenterPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    callType: '',
    voicePersonality: '',
    language: '',
    availability: '',
    integrations: [] as string[],
    customGreeting: '',
    keyPhrases: '',
    transferRules: '',
    analyticsGoals: [] as string[],
  });
  const [setupResult, setSetupResult] = useState<any>(null);

  const callTypes = [
    { value: 'inbound-sales', label: '📞 Inbound Sales', description: 'Handle incoming sales inquiries' },
    { value: 'customer-support', label: '🎧 Customer Support', description: '24/7 support and troubleshooting' },
    { value: 'appointment-booking', label: '📅 Appointment Booking', description: 'Schedule meetings and appointments' },
    { value: 'lead-qualification', label: '🎯 Lead Qualification', description: 'Pre-screen and qualify prospects' },
    { value: 'order-taking', label: '🛒 Order Taking', description: 'Process orders and payments' },
    { value: 'survey-feedback', label: '📊 Survey & Feedback', description: 'Collect customer feedback' },
  ];

  const voicePersonalities = [
    { value: 'professional', label: 'Professional', emoji: '💼', description: 'Formal, clear, business-focused' },
    { value: 'friendly', label: 'Friendly', emoji: '😊', description: 'Warm, approachable, conversational' },
    { value: 'energetic', label: 'Energetic', emoji: '⚡', description: 'Upbeat, enthusiastic, motivating' },
    { value: 'calm', label: 'Calm', emoji: '🧘', description: 'Soothing, patient, reassuring' },
    { value: 'authoritative', label: 'Authoritative', emoji: '👔', description: 'Confident, expert, trustworthy' },
  ];

  const integrationOptions = [
    { value: 'crm-salesforce', label: 'Salesforce CRM' },
    { value: 'crm-hubspot', label: 'HubSpot' },
    { value: 'calendar-google', label: 'Google Calendar' },
    { value: 'calendar-outlook', label: 'Outlook Calendar' },
    { value: 'payment-stripe', label: 'Stripe Payments' },
    { value: 'sms-twilio', label: 'Twilio SMS' },
    { value: 'email-sendgrid', label: 'SendGrid Email' },
    { value: 'analytics-ga', label: 'Google Analytics' },
  ];

  const analyticsGoalOptions = [
    { value: 'conversion-rate', label: 'Track Conversion Rate' },
    { value: 'call-duration', label: 'Monitor Call Duration' },
    { value: 'customer-satisfaction', label: 'Customer Satisfaction Score' },
    { value: 'first-call-resolution', label: 'First Call Resolution Rate' },
    { value: 'lead-quality', label: 'Lead Quality Scoring' },
    { value: 'revenue-tracking', label: 'Revenue Attribution' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleArrayValue = (field: 'integrations' | 'analyticsGoals', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }));
  };

  const generateSetup = () => {
    setStep(2);

    setTimeout(() => {
      const result = {
        businessName: formData.businessName,
        callType: formData.callType,
        voiceAgent: {
          name: `${formData.businessName} AI Assistant`,
          personality: formData.voicePersonality,
          language: formData.language,
          voiceId: 'ai-voice-premium-001',
          availability: formData.availability
        },
        conversationalScripts: {
          greeting: formData.customGreeting || `Thank you for calling ${formData.businessName}. I'm your AI assistant. How may I help you today?`,
          keyResponses: [
            {
              trigger: 'pricing',
              response: "I'd be happy to discuss our pricing options with you. We have several packages designed to meet different needs..."
            },
            {
              trigger: 'hours',
              response: `We're available ${formData.availability}. I'm here 24/7 to assist you, and can connect you with our team during business hours.`
            },
            {
              trigger: 'support',
              response: "I can help you with that right away. Let me pull up your account information..."
            },
            {
              trigger: 'appointment',
              response: "I can schedule that for you. Let me check our available time slots..."
            }
          ],
          transferProtocol: formData.transferRules || "If customer requests human agent or issue is complex, transfer to available representative",
          closingScript: `Thank you for contacting ${formData.businessName}. Is there anything else I can help you with today?`
        },
        integrations: formData.integrations.map(int => {
          const integration = integrationOptions.find(opt => opt.value === int);
          return {
            name: integration?.label || int,
            status: 'Connected',
            syncEnabled: true
          };
        }),
        analytics: {
          goals: formData.analyticsGoals,
          dashboard: {
            totalCalls: 0,
            averageDuration: '0:00',
            conversionRate: '0%',
            satisfactionScore: 'N/A',
            activeNow: 0
          },
          reporting: ['Real-time call monitoring', 'Daily summary reports', 'Weekly performance analytics', 'Monthly trend analysis']
        },
        phoneNumbers: [
          {
            number: '+1 (555) 123-4567',
            type: 'Local',
            status: 'Active'
          },
          {
            number: '+1 (888) 123-4567',
            type: 'Toll-Free',
            status: 'Pending Setup'
          }
        ],
        features: [
          { name: 'Call Recording', enabled: true, description: 'Automatic recording of all calls' },
          { name: 'Call Transcription', enabled: true, description: 'Real-time speech-to-text' },
          { name: 'Sentiment Analysis', enabled: true, description: 'Detect customer emotions' },
          { name: 'Smart Routing', enabled: true, description: 'Route to best available agent' },
          { name: 'IVR Menu', enabled: false, description: 'Interactive voice response menu' },
          { name: 'Call Whisper', enabled: false, description: 'Provide context before transfer' },
        ]
      };

      setSetupResult(result);
      setStep(3);
    }, 3500);
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      businessName: '',
      industry: '',
      callType: '',
      voicePersonality: '',
      language: '',
      availability: '',
      integrations: [],
      customGreeting: '',
      keyPhrases: '',
      transferRules: '',
      analyticsGoals: [],
    });
    setSetupResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            📞 AI Call Center Setup
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Launch your 24/7 AI-powered call center in minutes
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className={`px-4 py-2 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              1. Configuration
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-4 py-2 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              2. Building
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-4 py-2 rounded-full ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              3. Launch
            </span>
          </div>
        </div>

        {/* Step 1: Configuration Form */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Configure Your AI Call Center</h2>

            <div className="space-y-6">
              {/* Business Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="e.g., TechSolutions Inc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="e.g., SaaS, E-commerce, Healthcare, Real Estate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              {/* Call Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Primary Call Type *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {callTypes.map(type => (
                    <button
                      key={type.value}
                      onClick={() => setFormData(prev => ({ ...prev, callType: type.value }))}
                      className={`p-4 border-2 rounded-lg text-left transition ${
                        formData.callType === type.value
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">{type.label.split(' ')[0]}</div>
                      <div className="font-semibold text-sm">{type.label.split(' ').slice(1).join(' ')}</div>
                      <div className="text-xs text-gray-500 mt-1">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Personality */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Voice Personality *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {voicePersonalities.map(voice => (
                    <button
                      key={voice.value}
                      onClick={() => setFormData(prev => ({ ...prev, voicePersonality: voice.value }))}
                      className={`p-4 border-2 rounded-lg transition ${
                        formData.voicePersonality === voice.value
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">{voice.emoji}</div>
                      <div className="font-semibold text-sm mb-1">{voice.label}</div>
                      <div className="text-xs text-gray-500">{voice.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Language
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select language...</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="portuguese">Portuguese</option>
                  <option value="mandarin">Mandarin Chinese</option>
                  <option value="japanese">Japanese</option>
                </select>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Hours
                </label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="e.g., Mon-Fri 9AM-6PM EST"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              {/* Custom Greeting */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Custom Greeting (optional)
                </label>
                <textarea
                  name="customGreeting"
                  value={formData.customGreeting}
                  onChange={handleInputChange}
                  placeholder="e.g., Hello and welcome to [Business Name]. I'm [Agent Name], your AI assistant..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              {/* Integrations */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Integrations (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {integrationOptions.map(integration => (
                    <button
                      key={integration.value}
                      onClick={() => toggleArrayValue('integrations', integration.value)}
                      className={`p-3 border-2 rounded-lg text-sm transition ${
                        formData.integrations.includes(integration.value)
                          ? 'border-blue-600 bg-blue-50 font-semibold'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {integration.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Analytics Goals */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Analytics & Tracking Goals
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {analyticsGoalOptions.map(goal => (
                    <button
                      key={goal.value}
                      onClick={() => toggleArrayValue('analyticsGoals', goal.value)}
                      className={`p-3 border-2 rounded-lg text-sm text-left transition ${
                        formData.analyticsGoals.includes(goal.value)
                          ? 'border-blue-600 bg-blue-50 font-semibold'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Transfer Rules */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Transfer Rules (optional)
                </label>
                <textarea
                  name="transferRules"
                  value={formData.transferRules}
                  onChange={handleInputChange}
                  placeholder="Specify when AI should transfer to human agent..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              {/* Setup Button */}
              <button
                onClick={generateSetup}
                disabled={!formData.businessName || !formData.callType || !formData.voicePersonality}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🚀 Launch AI Call Center
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Building */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-blue-600 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Building Your AI Call Center...
            </h2>
            <p className="text-gray-600 mb-8">
              Setting up voice agents, scripts, and integrations
            </p>
            <div className="space-y-2 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                Configuring AI voice personality...
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                Generating conversational scripts...
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                Connecting integrations...
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-300"></div>
                Setting up analytics dashboard...
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-500"></div>
                Provisioning phone numbers...
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {step === 3 && setupResult && (
          <div className="space-y-6">
            {/* Success Message */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold mb-2">Your AI Call Center is Live!</h2>
              <p className="text-lg opacity-90">
                Your 24/7 AI assistant is ready to handle calls
              </p>
            </div>

            {/* Voice Agent Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">🎙️ Voice Agent Configuration</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Agent Name</div>
                  <div className="font-semibold text-lg">{setupResult.voiceAgent.name}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Personality</div>
                  <div className="font-semibold text-lg capitalize">{setupResult.voiceAgent.personality}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Language</div>
                  <div className="font-semibold text-lg capitalize">{setupResult.voiceAgent.language}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Availability</div>
                  <div className="font-semibold text-lg">{setupResult.voiceAgent.availability || '24/7'}</div>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">📱 Your Phone Numbers</h3>
              <div className="space-y-4">
                {setupResult.phoneNumbers.map((phone: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-bold text-xl">{phone.number}</div>
                      <div className="text-sm text-gray-600">{phone.type}</div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      phone.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {phone.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversational Scripts */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">💬 Conversational Scripts</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">Greeting</h4>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  "{setupResult.conversationalScripts.greeting}"
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Key Response Scripts</h4>
                <div className="space-y-3">
                  {setupResult.conversationalScripts.keyResponses.map((response: any, index: number) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-sm text-purple-600 mb-1">
                        Trigger: "{response.trigger}"
                      </div>
                      <div className="text-sm text-gray-700">"{response.response}"</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Closing Script</h4>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  "{setupResult.conversationalScripts.closingScript}"
                </div>
              </div>
            </div>

            {/* Integrations */}
            {setupResult.integrations.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">🔗 Connected Integrations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {setupResult.integrations.map((integration: any, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-2xl">✅</span>
                      <div>
                        <div className="font-semibold">{integration.name}</div>
                        <div className="text-xs text-green-600">Syncing enabled</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Dashboard */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">📊 Analytics Dashboard</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">{setupResult.analytics.dashboard.totalCalls}</div>
                  <div className="text-sm text-gray-600 mt-1">Total Calls</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600">{setupResult.analytics.dashboard.averageDuration}</div>
                  <div className="text-sm text-gray-600 mt-1">Avg Duration</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600">{setupResult.analytics.dashboard.conversionRate}</div>
                  <div className="text-sm text-gray-600 mt-1">Conversion</div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-yellow-600">{setupResult.analytics.dashboard.satisfactionScore}</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                </div>
                <div className="p-4 bg-red-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-600">{setupResult.analytics.dashboard.activeNow}</div>
                  <div className="text-sm text-gray-600 mt-1">Active Now</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Reporting Schedule</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {setupResult.analytics.reporting.map((report: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <span className="text-blue-600">📈</span>
                      <span className="text-sm">{report}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">⚙️ Features & Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {setupResult.features.map((feature: any, index: number) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    feature.enabled ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{feature.name}</span>
                      <span className={`text-2xl ${feature.enabled ? '' : 'opacity-30'}`}>
                        {feature.enabled ? '✅' : '⚪'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">{feature.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transition">
                📞 Make Test Call
              </button>
              <button className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
                📊 View Live Dashboard
              </button>
              <button className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-bold text-lg hover:bg-purple-50 transition">
                ⚙️ Edit Configuration
              </button>
              <button 
                onClick={resetForm}
                className="px-8 py-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition"
              >
                Create Another
              </button>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
