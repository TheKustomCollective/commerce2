'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function LivingLegacy() {
  const flagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the flag waving
    const flag = flagRef.current;
    if (!flag) return;

    let angle = 0;
    const animate = () => {
      angle += 0.05;
      flag.style.transform = `rotateY(${Math.sin(angle) * 10}deg) rotateX(${Math.cos(angle) * 5}deg)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-red-900 to-blue-900">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Back link */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 z-50 text-white/80 hover:text-white text-sm font-semibold backdrop-blur-sm bg-black/30 px-4 py-2 rounded-lg transition-all"
      >
        ← Back to Home
      </Link>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Eagle Logo */}
        <div className="mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
          <svg viewBox="0 0 200 200" className="w-48 h-48 drop-shadow-2xl">
            {/* Eagle silhouette */}
            <defs>
              <linearGradient id="eagleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Eagle body */}
            <ellipse cx="100" cy="100" rx="40" ry="50" fill="url(#eagleGrad)" />
            
            {/* Wings spread */}
            <path
              d="M 60 90 Q 20 80 10 100 Q 20 110 60 105 Z"
              fill="url(#eagleGrad)"
              className="animate-pulse"
            />
            <path
              d="M 140 90 Q 180 80 190 100 Q 180 110 140 105 Z"
              fill="url(#eagleGrad)"
              className="animate-pulse"
            />
            
            {/* Head */}
            <circle cx="100" cy="70" r="20" fill="url(#eagleGrad)" />
            
            {/* Beak */}
            <path d="M 105 70 L 120 65 L 115 70 L 120 75 Z" fill="#FF6B00" />
            
            {/* Eye */}
            <circle cx="95" cy="68" r="3" fill="#000" />
            
            {/* Tail feathers */}
            <path
              d="M 85 140 Q 80 160 75 170 Q 85 165 90 145 Z"
              fill="url(#eagleGrad)"
            />
            <path
              d="M 100 145 Q 100 170 100 180 Q 105 170 105 145 Z"
              fill="url(#eagleGrad)"
            />
            <path
              d="M 115 140 Q 120 160 125 170 Q 115 165 110 145 Z"
              fill="url(#eagleGrad)"
            />
          </svg>
        </div>

        {/* American Flag */}
        <div 
          ref={flagRef}
          className="mb-12 perspective-1000"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <svg viewBox="0 0 300 200" className="w-64 h-44 drop-shadow-2xl">
            {/* Red stripes */}
            {[0, 30, 60, 90, 120, 150, 180].map((y, i) => (
              <rect key={`red-${i}`} x="0" y={y} width="300" height="15" fill="#B22234" />
            ))}
            {/* White stripes */}
            {[15, 45, 75, 105, 135, 165].map((y, i) => (
              <rect key={`white-${i}`} x="0" y={y} width="300" height="15" fill="#FFFFFF" />
            ))}
            {/* Blue canton */}
            <rect x="0" y="0" width="120" height="105" fill="#3C3B6E" />
            {/* Stars - simplified pattern */}
            {[...Array(50)].map((_, i) => {
              const row = Math.floor(i / 6);
              const col = i % 6;
              const offsetX = row % 2 === 0 ? 0 : 10;
              return (
                <circle
                  key={`star-${i}`}
                  cx={15 + col * 20 + offsetX}
                  cy={10 + row * 12}
                  r="2"
                  fill="#FFFFFF"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.02}s` }}
                />
              );
            })}
          </svg>
        </div>

        {/* Title with glow effect */}
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 animate-pulse">
          <span className="bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
            Living Legacy
          </span>
        </h1>

        {/* Coming Soon text */}
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            COMING SOON
          </h2>
          <div className="absolute inset-0 blur-xl bg-gradient-to-r from-red-500 via-white to-blue-500 opacity-30 animate-pulse" />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl mb-12 drop-shadow-lg">
          Honoring American Heroes • Preserving Their Stories • Celebrating Freedom
        </p>

        {/* Notification signup */}
        <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 max-w-md w-full shadow-2xl">
          <h3 className="text-white text-xl font-bold mb-4 text-center">
            Be the First to Know
          </h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60 mb-4"
          />
          <button className="w-full bg-gradient-to-r from-red-600 via-white to-blue-600 text-blue-900 font-bold py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Notify Me at Launch
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex gap-8 items-center text-white/60">
          <div className="text-center">
            <div className="text-3xl mb-2">🦅</div>
            <div className="text-sm">Freedom</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🇺🇸</div>
            <div className="text-sm">Honor</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-sm">Legacy</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center text-white/60 text-sm">
        <p>© 2025 Living Legacy • A CommerceCult Initiative</p>
      </footer>
    </main>
  );
}
