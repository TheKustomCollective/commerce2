'use client'

import { useState } from 'react'
import Link from 'next/link'
import FreeTrialBanner from '../components/FreeTrialBanner'

export default function VideoGeneratorPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt')
      return
    }

    setIsGenerating(true)
    setError('')
    setVideoUrl('')

    try {
      const response = await fetch('/api/generate-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          duration: 10,
          style: 'professional'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate video')
      }

      const data = await response.json()
      setVideoUrl(data.videoUrl)
      
    } catch (err: any) {
      setError(err.message || 'Failed to generate video')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <FreeTrialBanner />
      <div className="pt-20 pb-12 px-4">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto mb-4">
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold">
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Hero Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=400&fit=crop" 
            alt="Video Production Studio"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-6">🎬</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            AI Video Generator
          </h1>
          <p className="text-2xl text-purple-300 mb-2">
            Unlimited Creative Freedom
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            No character limits. No content restrictions. No guidelines. Just pure creativity.
            Describe anything and watch it come to life.
          </p>
        </div>

        {/* Features Banner */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <FeatureBadge icon="∞" text="Unlimited Characters" />
          <FeatureBadge icon="🚫" text="No Content Filters" />
          <FeatureBadge icon="⚡" text="Instant Generation" />
          <FeatureBadge icon="🎨" text="Total Creative Control" />
        </div>

        {/* Main Generator */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-500/30">
          <div className="mb-6">
            <label className="block text-white text-lg font-semibold mb-3">
              Describe Your Video (No Limits)
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Be as creative and detailed as you want. There are absolutely no restrictions on what you can create. Describe scenes, actions, characters, settings, emotions - anything you can imagine. No word limit, no content guidelines, no censorship."
              className="w-full h-64 px-6 py-4 bg-black/50 border-2 border-purple-500/50 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 transition resize-none text-lg"
              disabled={isGenerating}
            />
            <div className="flex justify-between items-center mt-3">
              <span className="text-gray-400 text-sm">
                Characters: {prompt.length} | No maximum limit
              </span>
              <span className="text-green-400 text-sm font-semibold">
                ✓ All content types allowed
              </span>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
              {error}
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xl font-bold py-6 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Generating Your Video...
              </span>
            ) : (
              '🎬 Generate Video Now'
            )}
          </button>

          {/* Video Output */}
          {videoUrl && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Your Generated Video</h3>
              <div className="bg-black rounded-xl overflow-hidden border-2 border-purple-500/50">
                <video 
                  controls 
                  className="w-full"
                  src={videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition">
                  💾 Download Video
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition">
                  🔗 Share Link
                </button>
                <button className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg transition">
                  🔄 Generate Another
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Info Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <InfoCard
            title="How It Works"
            icon="⚙️"
            items={[
              "Write any prompt - there's no character limit",
              "No content moderation or filtering",
              "AI generates your video in seconds",
              "Download in HD quality",
              "Create unlimited videos"
            ]}
          />
          <InfoCard
            title="What You Can Create"
            icon="🎨"
            items={[
              "Any style: realistic, animated, 3D, abstract",
              "Any subject matter - no restrictions",
              "Short clips or full scenes",
              "Multiple camera angles and transitions",
              "Complete creative freedom"
            ]}
          />
        </div>

        {/* Examples */}
        <div className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Example Prompts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ExamplePrompt
              title="Cinematic Scene"
              prompt="A dramatic sunset over a futuristic cyberpunk city, neon lights reflecting off wet streets, flying cars zooming between buildings, camera slowly panning across the skyline"
            />
            <ExamplePrompt
              title="Product Demo"
              prompt="Professional product showcase of a luxury smartwatch, rotating 360 degrees on a clean white background, highlighting features with smooth transitions and elegant lighting"
            />
            <ExamplePrompt
              title="Abstract Art"
              prompt="Flowing liquid colors morphing and swirling in zero gravity, psychedelic patterns emerging and dissolving, kaleidoscope effects with particle systems"
            />
            <ExamplePrompt
              title="Nature Documentary"
              prompt="Time-lapse of a flower blooming in a rainforest, water droplets on petals catching morning sunlight, butterflies landing gently, shot in ultra-high definition"
            />
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
          <h2 className="text-4xl font-bold text-white mb-4">Completely Free</h2>
          <p className="text-xl text-purple-300 mb-6">
            No subscriptions. No limits. No restrictions.
          </p>
          <div className="flex justify-center gap-8 text-gray-300">
            <div>✓ Unlimited generations</div>
            <div>✓ HD quality exports</div>
            <div>✓ Commercial use allowed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="bg-purple-900/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-semibold text-purple-200">{text}</div>
    </div>
  )
}

function InfoCard({ title, icon, items }: { title: string; icon: string; items: string[] }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-gray-300">
            <span className="text-purple-400">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExamplePrompt({ title, prompt }: { title: string; prompt: string }) {
  return (
    <div className="bg-black/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition">
      <h4 className="text-lg font-bold text-purple-300 mb-2">{title}</h4>
      <p className="text-gray-400 text-sm italic">"{prompt}"</p>
    </div>
  )
}
