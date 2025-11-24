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
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-blue-600 transition">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link href="/marketplace" className="text-gray-700 hover:text-blue-600 transition">
              B2B Marketplace
            </Link>
            <Link href="/marketing" className="text-gray-700 hover:text-blue-600 transition">
              $0 Marketing
            </Link>
            <Link href="/fundmystartup" className="text-gray-700 hover:text-blue-600 transition">
              FundMyStartup
            </Link>
            <Link href="/calculators" className="text-gray-700 hover:text-blue-600 transition">
              Calculators
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
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
