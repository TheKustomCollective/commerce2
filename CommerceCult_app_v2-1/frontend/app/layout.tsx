import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

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
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
