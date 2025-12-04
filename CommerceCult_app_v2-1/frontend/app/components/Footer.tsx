import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">CommerceCult</h3>
            <p className="text-sm">
              AI-powered business intelligence software to turn your ideas into reality.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features/business-plan-generator" className="hover:text-white transition">Business Plan Generator</Link></li>
              <li><Link href="/features/market-analysis" className="hover:text-white transition">Market Analysis</Link></li>
              <li><Link href="/features/website-generator" className="hover:text-white transition">Website Generator</Link></li>
              <li><Link href="/features/templates" className="hover:text-white transition">Templates Library</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/marketplace" className="hover:text-white transition">B2B Marketplace</Link></li>
              <li><Link href="/calculators/roi" className="hover:text-white transition">ROI Calculator</Link></li>
              <li><Link href="/calculators/loan" className="hover:text-white transition">Loan Repayment Calculator</Link></li>
              <li><Link href="/pages" className="hover:text-white transition">My Pages (Free Hosting)</Link></li>
              <li><Link href="/fundmystartup" className="hover:text-white transition">FundMyStartup Campaign</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/about#contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CommerceCult. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/terms" className="hover:text-white transition text-xs">Terms</Link>
            <span className="text-gray-600">•</span>
            <Link href="/privacy" className="hover:text-white transition text-xs">Privacy</Link>
            <span className="text-gray-600">•</span>
            <span className="text-xs text-gray-500">📊 Data-driven marketing for quality clientele</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
