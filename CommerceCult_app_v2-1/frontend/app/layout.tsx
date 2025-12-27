import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import RaphaelAssistant from './components/RaphaelAssistant'
import LiveChat from './components/LiveChat'
import Script from 'next/script'

export const metadata = {
  title: 'CommerceCult - AI-Powered Business Intelligence',
  description: 'Turn your business ideas into reality with AI-powered business plans, market analysis, and funding intelligence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <RaphaelAssistant />
        <LiveChat />
      </body>
    </html>
  )
}
