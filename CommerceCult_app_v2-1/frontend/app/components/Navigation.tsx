import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CommerceCult
            </div>
          </Link>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
            📞 <a href="tel:7023245747" className="hover:text-blue-600 font-semibold">702.324.5747</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/marketplace" className="text-gray-700 hover:text-amber-600 transition font-semibold">
              🐝 Marketplace
            </Link>
            <Link href="/generate" className="text-gray-700 hover:text-blue-600 transition font-semibold">
              💼 Business Tools
            </Link>
            <Link href="/video-generator" className="text-gray-700 hover:text-purple-600 transition font-semibold">
              🎨 Content Creation
            </Link>
            <Link href="/fundmystartup" className="text-gray-700 hover:text-green-600 transition font-semibold">
              💰 Funding
            </Link>
            <Link href="/omni" className="text-gray-700 hover:text-indigo-600 transition font-semibold">
              🤖 OMNI
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition">
              Pricing
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/about#contact" 
              className="text-blue-600 hover:text-blue-700 font-semibold transition"
            >
              Customer Support
            </Link>
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
