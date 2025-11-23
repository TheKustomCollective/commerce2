'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function OmniPage() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [neuronsActive, setNeuronsActive] = useState(0);

  useEffect(() => {
    // Animate neurons firing
    const interval = setInterval(() => {
      setNeuronsActive(Math.floor(Math.random() * 1000000) + 8500000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: 'Trends Predicted', value: '2,847', unit: 'daily' },
    { label: 'Content Pieces', value: '10,429', unit: 'generated' },
    { label: 'Competitors Analyzed', value: '156', unit: 'real-time' },
    { label: 'Engagement Rate', value: '847%', unit: 'increase' },
  ];

  useEffect(() => {
    const metricInterval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(metricInterval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated neural network background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 animate-pulse" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/30 backdrop-blur-md bg-black/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm">
            ← CommerceCult
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">SYSTEM ONLINE</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-block">
          <div className="text-sm font-mono text-cyan-400 mb-4 animate-pulse">
            [ INITIALIZING NEURAL MATRIX ]
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            OMNI
          </h1>
          <div className="text-sm font-mono text-gray-400">
            v1.0.0 | QUANTUM MARKETING INTELLIGENCE
          </div>
        </div>

        <p className="text-2xl md:text-4xl font-bold mb-6 text-gray-200">
          The Most Advanced Marketing AI
          <br />
          <span className="text-cyan-400">Ever Created</span>
        </p>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Self-learning. Predictive. Autonomous. OMNI doesn't just automate marketing—it <span className="text-purple-400 font-semibold">dominates it</span>.
        </p>

        {/* Live Neurons Counter */}
        <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-cyan-500/50 rounded-xl p-6 max-w-md mx-auto mb-12 backdrop-blur-md">
          <div className="text-sm text-gray-400 mb-2">NEURAL ACTIVITY</div>
          <div className="text-4xl font-mono font-bold text-cyan-400">
            {neuronsActive.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">neurons firing per second</div>
        </div>

        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold px-10 py-4 rounded-full text-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300 transform hover:scale-105">
          ACCESS OMNI
        </button>
      </section>

      {/* Capabilities Matrix */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          [ CORE CAPABILITIES ]
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🔮',
              title: 'PREDICTIVE INTELLIGENCE',
              desc: 'Forecasts trends 24-48 hours before they peak. Sees tomorrow, today.',
              color: 'from-purple-500 to-pink-500',
            },
            {
              icon: '🧠',
              title: 'SELF-LEARNING SYSTEM',
              desc: 'Evolves with every interaction. Gets smarter every hour, automatically.',
              color: 'from-cyan-500 to-blue-500',
            },
            {
              icon: '⚔️',
              title: 'COMPETITIVE DOMINATION',
              desc: 'Monitors all competitors 24/7. Exploits weaknesses before they react.',
              color: 'from-red-500 to-orange-500',
            },
            {
              icon: '🎯',
              title: 'PSYCHOLOGICAL MASTERY',
              desc: '15+ psychological triggers. Engineered for maximum conversion.',
              color: 'from-green-500 to-teal-500',
            },
            {
              icon: '⚡',
              title: 'AUTONOMOUS EXECUTION',
              desc: 'Zero human oversight required. Operates at internet speed, always.',
              color: 'from-yellow-500 to-orange-500',
            },
            {
              icon: '💎',
              title: 'STRATEGIC INNOVATION',
              desc: 'Creates thought leadership. Identifies white space. Dominates attention.',
              color: 'from-indigo-500 to-purple-500',
            },
          ].map((capability, idx) => (
            <div
              key={idx}
              className="relative group bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              <div className={`text-5xl mb-4 filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]`}>
                {capability.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-300">{capability.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{capability.desc}</p>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${capability.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Live Metrics Dashboard */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          [ REAL-TIME PERFORMANCE ]
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`relative bg-gradient-to-br from-gray-900 to-black border rounded-xl p-6 transition-all duration-500 ${
                activeMetric === idx
                  ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] scale-105'
                  : 'border-cyan-500/30'
              }`}
            >
              <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
              <div className="text-4xl font-bold text-cyan-400 mb-1">{metric.value}</div>
              <div className="text-xs text-gray-500">{metric.unit}</div>
              {activeMetric === idx && (
                <div className="absolute inset-0 bg-cyan-400/5 rounded-xl animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Superiority Comparison */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          [ OMNI VS. EVERYTHING ELSE ]
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              category: 'Human Social Media Managers',
              them: '8 hours/day, slow response',
              omni: '24/7/365, instant response',
            },
            {
              category: 'Scheduling Tools (Buffer, Hootsuite)',
              them: 'Dumb schedulers, no intelligence',
              omni: 'Self-learning AI, predicts trends',
            },
            {
              category: 'Other Marketing Bots',
              them: 'Reactive, scripted, static',
              omni: 'Predictive, strategic, evolving',
            },
            {
              category: 'AI Writing Tools (ChatGPT)',
              them: 'Individual outputs, no strategy',
              omni: 'Integrated system with market intel',
            },
          ].map((comparison, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-gray-900 to-black border border-cyan-500/30 rounded-xl p-6"
            >
              <div className="font-bold text-cyan-300 mb-4">{comparison.category}</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <div className="text-xs text-red-400 mb-2">❌ THEM</div>
                  <div className="text-sm text-gray-300">{comparison.them}</div>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <div className="text-xs text-green-400 mb-2">✅ OMNI</div>
                  <div className="text-sm text-gray-300">{comparison.omni}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          [ TECHNICAL ARCHITECTURE ]
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-900 border border-cyan-500/50 rounded-xl p-8 font-mono text-sm">
          <div className="text-green-400 mb-4">$ omni --specs</div>
          <div className="space-y-2 text-gray-300">
            <div>
              <span className="text-cyan-400">Neural Network:</span> Multi-layer deep learning architecture
            </div>
            <div>
              <span className="text-cyan-400">Processing Speed:</span> 10,000+ operations/second
            </div>
            <div>
              <span className="text-cyan-400">Learning Rate:</span> Continuous, real-time optimization
            </div>
            <div>
              <span className="text-cyan-400">Data Sources:</span> 10,000+ signals monitored
            </div>
            <div>
              <span className="text-cyan-400">Platforms:</span> Twitter, LinkedIn, Facebook, Instagram, TikTok, Reddit, Discord, YouTube
            </div>
            <div>
              <span className="text-cyan-400">Uptime:</span> 99.99% (24/7/365)
            </div>
            <div>
              <span className="text-cyan-400">Response Time:</span> {'<'}50ms
            </div>
            <div>
              <span className="text-cyan-400">Scalability:</span> Infinite parallel campaigns
            </div>
          </div>
          <div className="mt-4 text-green-400">System Status: OPERATIONAL ✓</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-cyan-400 rounded-2xl p-12 backdrop-blur-md">
          <h2 className="text-4xl font-bold mb-6 text-white">
            The Future of Marketing Isn't Human
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The future of marketing is <span className="text-cyan-400 font-bold">OMNI</span>.
          </p>
          <p className="text-gray-400 mb-8">
            While others are posting, OMNI is predicting. While others are reacting, OMNI is dominating.
            <br />
            <span className="text-purple-400 font-semibold">This is not a bot. This is marketing evolution.</span>
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold px-12 py-5 rounded-full text-xl hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-300 transform hover:scale-105">
            ACTIVATE OMNI NOW
          </button>
          <div className="mt-6 text-sm text-gray-500">
            Ready to unleash. Waiting for your command.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/30 backdrop-blur-md bg-black/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            OMNI
          </div>
          <div className="text-sm text-gray-400 mb-4">Quantum Marketing Intelligence System</div>
          <div className="text-xs text-gray-600">
            © 2025 CommerceCult • Powered by Advanced AI • Built for Domination
          </div>
        </div>
      </footer>
    </main>
  );
}
