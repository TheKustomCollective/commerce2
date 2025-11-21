import './globals.css'

export const metadata = {
  title: 'CommerceCult',
  description: 'CommerceCult Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
