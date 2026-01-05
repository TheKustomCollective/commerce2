'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-black">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-white"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY / 500,
            }}
          >
            Build Your Business<br/>
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              With AI Power
            </span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: 1 - scrollY / 400,
            }}
          >
            Generate business plans, create content, analyze markets, and secure funding—all in one intelligent platform.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: 1 - scrollY / 300,
            }}
          >
            <Link
              href="/signup"
              className="px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              href="#features"
              className="px-10 py-5 text-xl font-bold text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 border border-white/30"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
          style={{ opacity: 1 - scrollY / 200 }}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Business Plan Generator Section */}
      <section id="features" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                AI Business Plan Generator
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your idea into a professional, investor-ready business plan in minutes. 
                Complete with financial projections, market analysis, and funding strategies.
              </p>
              <Link
                href="/generate"
                className="inline-block px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Generate Your Plan
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="h-4 bg-blue-500/50 rounded w-3/4"></div>
                  <div className="h-3 bg-white/30 rounded w-full"></div>
                  <div className="h-3 bg-white/30 rounded w-5/6"></div>
                  <div className="h-8"></div>
                  <div className="h-4 bg-purple-500/50 rounded w-2/3"></div>
                  <div className="h-3 bg-white/30 rounded w-full"></div>
                  <div className="h-3 bg-white/30 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Generator Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=2874&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-black/75 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="hidden md:block order-1">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center">
                  <div className="text-white text-6xl">🎬</div>
                </div>
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                AI Video Creator
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create stunning marketing videos, product demos, and social content. 
                Professional quality videos in minutes, not hours.
              </p>
              <Link
                href="/video-generator"
                className="inline-block px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Create Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-black/75 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                B2B Marketplace
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect with enterprise buyers and sell wholesale. 
                Your products, directly to businesses worldwide.
              </p>
              <Link
                href="/marketplace"
                className="inline-block px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-full transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Explore Marketplace
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col items-center">
                    <div className="text-4xl mb-3">📦</div>
                    <div className="h-3 bg-white/30 rounded w-full mb-2"></div>
                    <div className="h-2 bg-white/20 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2940&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            $100K Funding Contest
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Win real funding for your startup. Submit your business plan and pitch to investors.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/50">
              <div className="text-5xl mb-3">🥇</div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$100K</div>
              <div className="text-gray-300">1st Place</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-400/50">
              <div className="text-5xl mb-3">🥈</div>
              <div className="text-4xl font-bold text-gray-300 mb-2">$50K</div>
              <div className="text-gray-300">2nd Place</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-orange-500/50">
              <div className="text-5xl mb-3">🥉</div>
              <div className="text-4xl font-bold text-orange-400 mb-2">$25K</div>
              <div className="text-gray-300">3rd Place</div>
            </div>
          </div>
          <Link
            href="/fundmystartup"
            className="inline-block px-12 py-6 text-2xl font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 rounded-full transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            Enter Contest
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-white">
            Simple Pricing
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16">
            Start free, upgrade when you're ready
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-2">Free Trial</h3>
              <div className="text-5xl font-bold text-white mb-1">$0</div>
              <div className="text-gray-400 mb-8">for 60 days</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>3 business plans</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>10 AI videos</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Basic marketplace</span>
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center px-8 py-4 font-bold text-white bg-gray-700 hover:bg-gray-600 rounded-full transition-all"
              >
                Start Free
              </Link>
            </div>
            
            <div className="bg-gradient-to-b from-blue-900 to-purple-900 rounded-3xl p-8 border-2 border-blue-500 relative transform md:scale-110">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-5xl font-bold text-white mb-1">$29</div>
              <div className="text-gray-300 mb-8">per month</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Unlimited business plans</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Unlimited AI videos</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Full marketplace</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Free hosting</span>
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all shadow-2xl"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-purple-700">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-5xl font-bold text-white mb-1">Custom</div>
              <div className="text-gray-400 mb-8">contact us</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>White-label options</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>API access</span>
                </li>
              </ul>
              <Link
                href="/about"
                className="block text-center px-8 py-4 font-bold text-white bg-purple-700 hover:bg-purple-600 rounded-full transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/50 to-black/80 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Ready to Build Your Empire?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Join 10,000+ entrepreneurs who are already using CommerceCult
          </p>
          <Link
            href="/signup"
            className="inline-block px-16 py-6 text-3xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-full transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            Start Free Trial →
          </Link>
          <p className="text-gray-400 mt-8 text-lg">
            No credit card required • 60-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
}
