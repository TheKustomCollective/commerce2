'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import GoogleAd from './components/GoogleAd';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="relative">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10"
      />
      
      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8">
        <div className="max-w-5xl w-full text-center">
          <div className="mb-6 text-7xl animate-bounce">🚀</div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
            CommerceCult
          </h1>
          <p className="text-2xl md:text-4xl text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(0,255,0,0.5)] mb-4">
            Your AI Business Intelligence Software
          </p>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The complete AI-powered platform to generate business plans, create videos, analyze markets, 
            and launch your startup with confidence. Everything you need in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/signup"
              className="inline-block px-12 py-6 text-2xl font-bold text-black bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-300 hover:to-blue-300 rounded-lg shadow-[0_0_30px_rgba(0,255,0,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              Start 60-Day Free Trial
            </Link>
            <Link
              href="/login"
              className="inline-block px-10 py-5 text-xl font-bold text-white bg-gray-800 hover:bg-gray-700 rounded-lg border-2 border-green-400 shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300 transform hover:scale-105"
            >
              🔐 Login
            </Link>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <StatCard icon="📊" value="10K+" label="Plans Generated" />
            <StatCard icon="💰" value="$50M+" label="Funding Raised" />
            <StatCard icon="🌟" value="4.9/5" label="User Rating" />
          </div>
        </div>
      </section>

      {/* AI Video Generator Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-7xl mb-6">🎬</div>
              <h2 className="text-5xl font-bold mb-6 text-white">
                AI Video Generator
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Create stunning marketing videos, product demos, and social media content with unlimited AI-generated videos. 
                No restrictions, no limits - just pure creative freedom.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-green-400 mr-3 text-2xl">✓</span>
                  <span>Unlimited video generations with any prompt</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-green-400 mr-3 text-2xl">✓</span>
                  <span>HD quality exports up to 4K resolution</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-green-400 mr-3 text-2xl">✓</span>
                  <span>Commercial license included - sell what you create</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-green-400 mr-3 text-2xl">✓</span>
                  <span>Multi-style support: realistic, animated, cinematic</span>
                </li>
              </ul>
              <Link
                href="/video-generator"
                className="inline-block px-8 py-4 text-xl font-bold text-black bg-green-400 hover:bg-green-300 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.6)] transition-all duration-300 transform hover:scale-105"
              >
                Generate Video Now →
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-xl p-8 border-2 border-green-500/30 shadow-[0_0_30px_rgba(0,255,0,0.2)]">
                <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🎥</span>
                </div>
                <p className="text-gray-400 text-center">Your AI-generated videos appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plan Generator Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-800 rounded-xl p-8 border-2 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded p-4">
                    <div className="h-4 bg-blue-500 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                  </div>
                  <div className="bg-gray-900 rounded p-4">
                    <div className="h-4 bg-green-500 rounded w-2/3 mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-700 rounded w-4/5"></div>
                  </div>
                  <div className="bg-gray-900 rounded p-4">
                    <div className="h-4 bg-purple-500 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-7xl mb-6">📝</div>
              <h2 className="text-5xl font-bold mb-6 text-white">
                AI Business Plan Generator
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Transform your idea into a professional, investor-ready business plan in minutes. 
                Our AI analyzes your market, competitors, and creates detailed financial projections.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-blue-400 mr-3 text-2xl">✓</span>
                  <span>Complete 5-year financial projections & cash flow</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-blue-400 mr-3 text-2xl">✓</span>
                  <span>Market analysis with competitor research</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-blue-400 mr-3 text-2xl">✓</span>
                  <span>Professional formatting for investors & lenders</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-blue-400 mr-3 text-2xl">✓</span>
                  <span>Export to PDF, Word, or PowerPoint</span>
                </li>
              </ul>
              <Link
                href="/generate"
                className="inline-block px-8 py-4 text-xl font-bold text-black bg-blue-400 hover:bg-blue-300 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:scale-105"
              >
                Generate Business Plan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Break */}
      <section className="relative z-10 py-12 px-8 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-center">
          <GoogleAd 
            slot="1234567890" 
            format="horizontal"
            style={{ display: 'block', width: '728px', height: '90px' }}
          />
        </div>
      </section>

      {/* B2B Marketplace Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-7xl mb-6">💼</div>
              <h2 className="text-5xl font-bold mb-6 text-white">
                B2B Marketplace
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Connect directly with enterprise buyers and sell your products or services wholesale. 
                Our platform facilitates bulk orders, contract negotiations, and long-term partnerships.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-purple-400 mr-3 text-2xl">✓</span>
                  <span>Access to verified enterprise buyers worldwide</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-purple-400 mr-3 text-2xl">✓</span>
                  <span>Secure escrow payment system for large orders</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-purple-400 mr-3 text-2xl">✓</span>
                  <span>Built-in RFQ (Request for Quote) system</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-purple-400 mr-3 text-2xl">✓</span>
                  <span>Vendor dashboard with analytics & reporting</span>
                </li>
              </ul>
              <Link
                href="/marketplace"
                className="inline-block px-8 py-4 text-xl font-bold text-black bg-purple-400 hover:bg-purple-300 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:scale-105"
              >
                Explore Marketplace →
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-xl p-8 border-2 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="bg-gray-900 rounded-lg p-4 text-center">
                      <div className="text-4xl mb-2">📦</div>
                      <div className="h-3 bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 bg-gray-700 rounded w-2/3 mx-auto"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Budget Marketing Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-800 rounded-xl p-8 border-2 border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <div className="text-3xl font-bold text-pink-400 mb-4">$0 SPENT</div>
                  <div className="text-5xl font-bold text-white mb-2">1M+</div>
                  <div className="text-gray-400">Organic Reach</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-7xl mb-6">💚</div>
              <h2 className="text-5xl font-bold mb-6 text-white">
                $0 Marketing Strategy
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Go viral and reach millions without spending a dime. Our proven zero-budget marketing 
                playbook shows you exactly how to leverage organic social media, content marketing, and community building.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-pink-400 mr-3 text-2xl">✓</span>
                  <span>Step-by-step viral content creation guide</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-pink-400 mr-3 text-2xl">✓</span>
                  <span>Growth hacking tactics for every platform</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-pink-400 mr-3 text-2xl">✓</span>
                  <span>Community building & engagement strategies</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-pink-400 mr-3 text-2xl">✓</span>
                  <span>SEO optimization for organic discovery</span>
                </li>
              </ul>
              <Link
                href="/marketing"
                className="inline-block px-8 py-4 text-xl font-bold text-black bg-pink-400 hover:bg-pink-300 rounded-lg shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-300 transform hover:scale-105"
              >
                Get Marketing Strategy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators & Tools Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Essential Business Calculators
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Make informed decisions with our suite of financial calculators and business tools
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">ROI Calculator</h3>
              <p className="text-gray-300 mb-6">
                Calculate returns, break-even points, and forecast profitability for any investment or business venture.
              </p>
              <Link
                href="/calculators/roi"
                className="inline-block px-6 py-3 font-bold text-black bg-yellow-400 hover:bg-yellow-300 rounded-lg transition-all"
              >
                Calculate ROI
              </Link>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tax Calculator</h3>
              <p className="text-gray-300 mb-6">
                Estimate business taxes, quarterly payments, and plan your finances to maximize deductions.
              </p>
              <Link
                href="/calculators/tax"
                className="inline-block px-6 py-3 font-bold text-black bg-orange-400 hover:bg-orange-300 rounded-lg transition-all"
              >
                Calculate Taxes
              </Link>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <div className="text-6xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">Loan Calculator</h3>
              <p className="text-gray-300 mb-6">
                Calculate monthly payments, total interest, and compare loan options to find the best deal.
              </p>
              <Link
                href="/calculators/loan"
                className="inline-block px-6 py-3 font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all"
              >
                Calculate Loan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Contest Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-7xl mb-6">💸</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              $100K Startup Funding Contest
            </h2>
            <p className="text-2xl text-yellow-400 font-semibold mb-4">
              Win Funding for Your Startup
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enter our quarterly startup competition and pitch your business to real investors. 
              Winners receive funding, mentorship, and exposure to VC networks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Contest Prizes</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-yellow-400 mr-3 text-2xl">🥇</span>
                  <div>
                    <div className="font-bold">1st Place: $100,000</div>
                    <div className="text-sm text-gray-400">Plus mentorship & investor intros</div>
                  </div>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-gray-400 mr-3 text-2xl">🥈</span>
                  <div>
                    <div className="font-bold">2nd Place: $50,000</div>
                    <div className="text-sm text-gray-400">Plus accelerator access</div>
                  </div>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-orange-600 mr-3 text-2xl">🥉</span>
                  <div>
                    <div className="font-bold">3rd Place: $25,000</div>
                    <div className="text-sm text-gray-400">Plus legal consultation</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-6">How to Enter</h3>
              <ol className="space-y-4">
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-green-400 mr-3 font-bold">1.</span>
                  <span>Create your business plan using our AI generator</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-green-400 mr-3 font-bold">2.</span>
                  <span>Submit your pitch deck and 2-minute video</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-green-400 mr-3 font-bold">3.</span>
                  <span>Present to our investor panel if selected</span>
                </li>
                <li className="flex items-start text-lg text-gray-300">
                  <span className="text-green-400 mr-3 font-bold">4.</span>
                  <span>Win funding and launch your business!</span>
                </li>
              </ol>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/fundmystartup"
              className="inline-block px-12 py-6 text-2xl font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 rounded-lg shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              Enter Contest Now →
            </Link>
            <p className="text-sm text-gray-400 mt-4">Next deadline: March 31, 2026</p>
          </div>
        </div>
      </section>

      {/* Ad Break */}
      <section className="relative z-10 py-12 px-8 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-center">
          <GoogleAd 
            slot="9876543210" 
            format="rectangle"
            style={{ display: 'inline-block', width: '300px', height: '250px' }}
          />
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6 text-white">
            Even More Features
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16">
            Everything you need to run a successful business
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-bold text-white mb-2">Free Website Hosting</h3>
              <p className="text-sm text-gray-400">Your own subdomain with unlimited pages</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-lg font-bold text-white mb-2">AI Call Center</h3>
              <p className="text-sm text-gray-400">24/7 automated customer support</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="text-4xl mb-3">🎙️</div>
              <h3 className="text-lg font-bold text-white mb-2">Podcast Generator</h3>
              <p className="text-sm text-gray-400">AI-generated podcasts for your brand</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">OMNI AI Assistant</h3>
              <p className="text-sm text-gray-400">Personal business advisor 24/7</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Market Research</h3>
              <p className="text-sm text-gray-400">Deep competitor & industry analysis</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-white mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-gray-400">Track all your business metrics</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-lg font-bold text-white mb-2">Payment Processing</h3>
              <p className="text-sm text-gray-400">Accept payments worldwide</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-bold text-white mb-2">Business Courses</h3>
              <p className="text-sm text-gray-400">Learn from successful founders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6 text-white">
            Trusted by Entrepreneurs Worldwide
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16">
            See what our users are saying
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-green-500/20">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-6 italic">
                "CommerceCult helped me generate a business plan that secured $500K in funding. 
                The AI tools are incredible and saved me months of work."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl mr-4">
                  👨
                </div>
                <div>
                  <div className="font-bold text-white">Michael Chen</div>
                  <div className="text-sm text-gray-400">TechStart Founder</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-blue-500/20">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-6 italic">
                "The B2B marketplace connected me with enterprise clients I never could have reached. 
                We're now doing $2M in annual revenue!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl mr-4">
                  👩
                </div>
                <div>
                  <div className="font-bold text-white">Sarah Martinez</div>
                  <div className="text-sm text-gray-400">EcoProducts CEO</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-purple-500/20">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-6 italic">
                "The zero-budget marketing strategy took us from 0 to 100K followers in 3 months. 
                No ads, just organic growth!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl mr-4">
                  👨
                </div>
                <div>
                  <div className="font-bold text-white">James Wilson</div>
                  <div className="text-sm text-gray-400">FitLife Co-Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16">
            Start free, upgrade when you're ready
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-2">Free Trial</h3>
              <div className="text-4xl font-bold text-white mb-1">$0</div>
              <div className="text-gray-400 mb-6">for 60 days</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>3 business plans</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>10 AI videos</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Basic marketplace access</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>All calculators</span>
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center px-8 py-4 font-bold text-black bg-gray-400 hover:bg-gray-300 rounded-lg transition-all"
              >
                Start Free Trial
              </Link>
            </div>
            
            <div className="bg-gradient-to-b from-green-900 to-gray-800 rounded-xl p-8 border-2 border-green-500 relative transform scale-105">
              <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-1">$29</div>
              <div className="text-gray-300 mb-6">per month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Unlimited business plans</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Unlimited AI videos</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Full marketplace features</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Free website hosting</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center px-8 py-4 font-bold text-black bg-green-400 hover:bg-green-300 rounded-lg transition-all shadow-[0_0_20px_rgba(0,255,0,0.4)]"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-purple-700">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-1">Custom</div>
              <div className="text-gray-400 mb-6">contact us</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>White-label options</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>API access</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center px-8 py-4 font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-32 px-8 bg-gradient-to-r from-green-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready to Build Your Empire?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Join 10,000+ entrepreneurs who are already using CommerceCult to launch, grow, and scale their businesses
          </p>
          <Link
            href="/signup"
            className="inline-block px-16 py-6 text-3xl font-bold text-black bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 hover:from-green-300 hover:via-blue-300 hover:to-purple-300 rounded-lg shadow-[0_0_40px_rgba(0,255,0,0.6)] transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            Start Your 60-Day Free Trial →
          </Link>
          <p className="text-gray-400 mt-6 text-lg">
            No credit card required • Full access to all features • Cancel anytime
          </p>
          <div className="mt-12 flex justify-center gap-8 text-gray-400">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-green-500/20">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-green-400 mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: string; title: string; description: string; link: string }) {
  return (
    <Link 
      href={link}
      className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all hover:transform hover:scale-105 group"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
}
