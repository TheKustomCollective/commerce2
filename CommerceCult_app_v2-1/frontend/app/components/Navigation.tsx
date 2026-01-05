'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-3xl font-bold text-white tracking-tight">
              CommerceCult
            </div>
          </Link>
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-white hover:text-blue-400 transition-colors font-medium hidden sm:block"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-500/50"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
