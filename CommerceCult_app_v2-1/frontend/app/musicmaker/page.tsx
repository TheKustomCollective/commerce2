'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MusicMakerPage() {
  const [formData, setFormData] = useState({
    genre: '',
    mood: '',
    tempo: 'medium',
    duration: '3',
    instruments: [] as string[],
    description: '',
    title: ''
  })

  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedTrack, setGeneratedTrack] = useState<any>(null)

  const genres = [
    'Pop', 'Rock', 'Hip Hop', 'EDM', 'Jazz', 'Classical', 
    'Country', 'R&B', 'Indie', 'Electronic', 'Ambient', 'Lo-Fi'
  ]

  const moods = [
    'Happy', 'Sad', 'Energetic', 'Calm', 'Epic', 'Romantic',
    'Dark', 'Uplifting', 'Mysterious', 'Playful'
  ]

  const instruments = [
    '🎸 Guitar', '🎹 Piano', '🥁 Drums', '🎺 Trumpet', 
    '🎻 Violin', '🎷 Saxophone', '🎤 Vocals', '🎧 Synth',
    '🪕 Bass', '🪘 Percussion'
  ]

  const handleInstrumentToggle = (instrument: string) => {
    if (formData.instruments.includes(instrument)) {
      setFormData({
        ...formData,
        instruments: formData.instruments.filter(i => i !== instrument)
      })
    } else {
      setFormData({
        ...formData,
        instruments: [...formData.instruments, instrument]
      })
    }
  }

  const handleGenerate = async () => {
    if (!formData.genre || !formData.mood) {
      alert('Please select a genre and mood')
      return
    }

    setIsGenerating(true)
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedTrack({
        title: formData.title || `${formData.mood} ${formData.genre} Track`,
        duration: formData.duration,
        genre: formData.genre,
        mood: formData.mood,
        bpm: formData.tempo === 'slow' ? '80' : formData.tempo === 'medium' ? '120' : '140',
        key: 'C Major',
        instruments: formData.instruments.length > 0 ? formData.instruments.join(', ') : 'Auto-selected',
        audioUrl: 'https://example.com/generated-track.mp3', // Placeholder
        waveform: generateWaveform()
      })
      setIsGenerating(false)
    }, 3000)
  }

  const generateWaveform = () => {
    return Array.from({ length: 100 }, () => Math.random() * 100)
  }

  if (isGenerating) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-8xl mb-6 animate-bounce">🎵</div>
          <h2 className="text-3xl font-bold text-white mb-4">Creating Your Music...</h2>
          <p className="text-xl text-purple-200 mb-8">
            AI is composing your unique track based on your preferences
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-purple-500/30">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white">
                <div className="animate-spin text-2xl">🎼</div>
                <span>Analyzing musical patterns...</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="animate-spin text-2xl">🎹</div>
                <span>Generating melody...</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="animate-spin text-2xl">🥁</div>
                <span>Adding rhythm and beats...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (generatedTrack) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
            <h1 className="text-4xl font-bold mb-2">Your Track is Ready! 🎵</h1>
            <p className="text-xl opacity-90">{generatedTrack.title}</p>
          </div>

          {/* Audio Player */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{generatedTrack.title}</h2>
                <p className="text-purple-200">{generatedTrack.genre} • {generatedTrack.mood}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">{generatedTrack.duration}:00</div>
                <div className="text-purple-200 text-sm">{generatedTrack.bpm} BPM</div>
              </div>
            </div>

            {/* Waveform Visualization */}
            <div className="bg-black/30 rounded-lg p-4 mb-6 h-32 flex items-end gap-1">
              {generatedTrack.waveform.map((height: number, i: number) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-t from-purple-500 to-blue-500 flex-1 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition">
                ⏮️
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-full transition text-2xl">
                ▶️
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition">
                ⏭️
              </button>
            </div>

            {/* Track Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-black/30 rounded-lg p-3">
                <div className="text-purple-300 text-sm">Key</div>
                <div className="text-white font-semibold">{generatedTrack.key}</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <div className="text-purple-300 text-sm">BPM</div>
                <div className="text-white font-semibold">{generatedTrack.bpm}</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <div className="text-purple-300 text-sm">Duration</div>
                <div className="text-white font-semibold">{generatedTrack.duration} min</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <div className="text-purple-300 text-sm">Mood</div>
                <div className="text-white font-semibold">{generatedTrack.mood}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold transition">
              💾 Download MP3
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition">
              🎧 Download WAV
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white py-4 px-6 rounded-lg font-semibold transition border border-purple-500/30">
              🔄 Generate Another
            </button>
          </div>

          {/* Share Options */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4">Share Your Track</h3>
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition">
                📘 Facebook
              </button>
              <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-semibold transition">
                🐦 Twitter
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-4 rounded-lg font-semibold transition">
                📷 Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">🎵</div>
          <h1 className="text-5xl font-bold text-white mb-4">AI Music Maker</h1>
          <p className="text-xl text-purple-200">
            Create unique, royalty-free music tracks in seconds with AI
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-8">
          <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="space-y-6">
            {/* Track Title */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Track Title (Optional)
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-black/30 border-2 border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-500"
                placeholder="My Awesome Track"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Genre *
              </label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => setFormData({ ...formData, genre })}
                    className={`py-3 px-4 rounded-lg font-semibold transition ${
                      formData.genre === genre
                        ? 'bg-purple-600 text-white'
                        : 'bg-black/30 text-purple-200 hover:bg-black/50'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Mood */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Mood *
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood}
                    type="button"
                    onClick={() => setFormData({ ...formData, mood })}
                    className={`py-3 px-4 rounded-lg font-semibold transition ${
                      formData.mood === mood
                        ? 'bg-blue-600 text-white'
                        : 'bg-black/30 text-purple-200 hover:bg-black/50'
                    }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </div>

            {/* Tempo */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Tempo
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['slow', 'medium', 'fast'].map((tempo) => (
                  <button
                    key={tempo}
                    type="button"
                    onClick={() => setFormData({ ...formData, tempo })}
                    className={`py-3 px-4 rounded-lg font-semibold capitalize transition ${
                      formData.tempo === tempo
                        ? 'bg-purple-600 text-white'
                        : 'bg-black/30 text-purple-200 hover:bg-black/50'
                    }`}
                  >
                    {tempo}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Duration (minutes)
              </label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-4 py-3 bg-black/30 border-2 border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="1">1 minute</option>
                <option value="2">2 minutes</option>
                <option value="3">3 minutes</option>
                <option value="4">4 minutes</option>
                <option value="5">5 minutes</option>
              </select>
            </div>

            {/* Instruments */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Instruments (Optional)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {instruments.map((instrument) => (
                  <button
                    key={instrument}
                    type="button"
                    onClick={() => handleInstrumentToggle(instrument)}
                    className={`py-3 px-4 rounded-lg font-semibold transition ${
                      formData.instruments.includes(instrument)
                        ? 'bg-purple-600 text-white'
                        : 'bg-black/30 text-purple-200 hover:bg-black/50'
                    }`}
                  >
                    {instrument}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Additional Description (Optional)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 bg-black/30 border-2 border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-500"
                rows={3}
                placeholder="Describe the vibe, story, or feeling you want your music to convey..."
              />
            </div>

            {/* Generate Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              🎵 Generate My Music Track
            </button>
          </form>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Instant Creation</h3>
            <p className="text-purple-200">Generate professional music in seconds, no experience needed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
            <div className="text-4xl mb-3">🎧</div>
            <h3 className="text-xl font-bold text-white mb-2">Royalty-Free</h3>
            <p className="text-purple-200">Use your tracks anywhere - YouTube, podcasts, social media</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-bold text-white mb-2">Fully Customizable</h3>
            <p className="text-purple-200">Control genre, mood, tempo, instruments, and more</p>
          </div>
        </div>
      </div>
    </div>
  )
}
