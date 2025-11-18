
import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: process.env.NEXT_PUBLIC_PRICE_ID || '' })
      })
      const data = await res.json()
      if (data.url) {
        window.location = data.url
      } else {
        alert('Failed to create session: ' + (data.error || 'unknown'))
      }
    } catch (e) {
      alert('Error: ' + e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{padding:40, fontFamily:'Arial, sans-serif'}}>
      <h1>CommerceCult — Demo</h1>
      <p>AI-driven business platform demo landing page.</p>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? 'Redirecting…' : 'Buy / Checkout'}
      </button>
    </main>
  )
}
