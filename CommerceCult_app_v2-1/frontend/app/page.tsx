'use client';

import { useEffect, useRef } from 'react';

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
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center px-8">
        <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
          CommerceCult
        </h1>
        <p className="text-3xl text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(0,255,0,0.5)] mb-8">
          Your AI Business Intelligence Software
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/generate"
            className="inline-block px-8 py-4 text-xl font-bold text-black bg-green-400 hover:bg-green-300 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.6)] hover:shadow-[0_0_30px_rgba(0,255,0,0.8)] transition-all duration-300 transform hover:scale-105"
          >
            Generate Any Business Now
          </a>
          <a
            href="/fundmystartup"
            className="inline-block px-8 py-4 text-xl font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] transition-all duration-300 transform hover:scale-105"
          >
            🎓 Fund My Startup
          </a>
        </div>
      </div>
    </main>
  );
}
