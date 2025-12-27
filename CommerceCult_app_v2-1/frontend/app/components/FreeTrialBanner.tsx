import Link from 'next/link'

export default function FreeTrialBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎉</span>
          <div>
            <p className="font-bold text-lg">Try ALL Tools Free for 60 Days!</p>
            <p className="text-sm text-blue-100">No credit card required • Full access • Cancel anytime</p>
          </div>
        </div>
        <Link 
          href="/signup" 
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition whitespace-nowrap"
        >
          Start Free Trial →
        </Link>
      </div>
    </div>
  )
}
