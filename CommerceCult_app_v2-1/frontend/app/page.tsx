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
    <main className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8">
        <div className="max-w-5xl w-full text-center">
          <div className="mb-6 text-7xl animate-bounce">🚀</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
            CommerceCult
          </h1>
          <p className="text-2xl md:text-3xl text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(0,255,0,0.5)] mb-4">
            Your AI Business Intelligence Software
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate comprehensive business plans, analyze markets, and launch your startup with AI-powered tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/login"
              className="inline-block px-10 py-5 text-2xl font-bold text-black bg-blue-400 hover:bg-blue-300 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300 transform hover:scale-105"
            >
              🔐 Login
            </Link>
            <Link
              href="/generate"
              className="inline-block px-8 py-4 text-xl font-bold text-black bg-green-400 hover:bg-green-300 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.6)] hover:shadow-[0_0_30px_rgba(0,255,0,0.8)] transition-all duration-300 transform hover:scale-105"
            >
              Generate Business Plan
            </Link>
            <Link
              href="/fundmystartup"
              className="inline-block px-8 py-4 text-xl font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] transition-all duration-300 transform hover:scale-105"
            >
              🎓 Fund My Startup
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

      {/* Features Section */}
      <section className="relative z-10 py-20 px-8 bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Top Banner Ad */}
          <div className="mb-8 flex justify-center">
            <GoogleAd 
              slot="1234567890" 
              format="horizontal"
              style={{ display: 'block', width: '728px', height: '90px' }}
            />
          </div>

          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Everything You Need to Launch
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16">
            Powerful AI tools to turn your ideas into reality
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎬"
              title="AI Video Generator"
              description="Unlimited prompts, zero restrictions - create any video you can imagine"
              link="/video-generator"
            />
            <FeatureCard
              icon="📝"
              title="AI Business Plans"
              description="Generate investor-ready business plans with financial projections in minutes"
              link="/generate"
            />
            <FeatureCard
              icon="🔍"
              title="Market Analysis"
              description="Deep dive into your market with AI-powered competitor and trend analysis"
              link="/features"
            />
            <FeatureCard
              icon="💼"
              title="B2B Marketplace"
              description="Connect with enterprise buyers and sell your products wholesale"
              link="/marketplace"
            />
            <FeatureCard
              icon="💚"
              title="$0 Marketing Plan"
              description="Go viral without spending a dime using our proven zero-budget strategy"
              link="/marketing"
            />
            <FeatureCard
              icon="📊"
              title="ROI Calculator"
              description="Calculate returns, break-even points, and forecast profitability"
              link="/calculators/roi"
            />
            <FeatureCard
              icon="🌐"
              title="Free Hosting"
              description="Get your own subdomain and host unlimited pages for free"
              link="/pages"
            />
            <FeatureCard
              icon="💸"
              title="Funding Contest"
              description="Enter our $100K startup funding competition and pitch to investors"
              link="/fundmystartup"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          {/* Square Ad */}
          <div className="mb-8 flex justify-center">
            <GoogleAd 
              slot="9876543210" 
              format="rectangle"
              style={{ display: 'inline-block', width: '300px', height: '250px' }}
            />
          </div>

          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Build Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of entrepreneurs who trust CommerceCult
          </p>
          <Link
            href="/signup"
            className="inline-block px-12 py-5 text-2xl font-bold text-black bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-300 hover:to-blue-300 rounded-lg shadow-[0_0_30px_rgba(0,255,0,0.6)] transition-all duration-300 transform hover:scale-105"
          >
            Start Free Trial
          </Link>
          <p className="text-sm text-gray-400 mt-4">No credit card required • 14-day free trial</p>
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
