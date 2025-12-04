import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import RaphaelAssistant from './components/RaphaelAssistant'
import LiveChat from './components/LiveChat'

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
      <body className="flex flex-col">
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
