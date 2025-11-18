
require('dotenv').config()
const express = require('express')
const Stripe = require('stripe')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.PORT || 4242
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || '')

// Because Stripe webhooks require the raw body, we mount the webhook route before generic JSON parser.
app.post('/api/stripe/webhook', bodyParser.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature']
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  let event
  try {
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret)
    } else {
      // If no webhook secret configured (dev), parse without verification
      event = JSON.parse(req.body.toString())
    }
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object
      console.log('Checkout session completed:', session.id)
      // TODO: persist transaction to DB
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  res.json({received: true})
})

// JSON parser for other endpoints
app.use(bodyParser.json())

app.get('/api/health', (req, res) => res.json({status: 'ok', time: new Date().toISOString()}))

app.post('/api/checkout', async (req, res) => {
  const { priceId } = req.body || {}
  const successUrl = `${process.env.SUCCESS_URL || 'http://localhost:3000'}/?success=true`
  const cancelUrl = `${process.env.CANCEL_URL || 'http://localhost:3000'}/?canceled=true`

  if (!priceId && !process.env.STRIPE_PRICE_ID) {
    return res.status(400).json({ error: 'priceId required (or set STRIPE_PRICE_ID)' })
  }

  const finalPriceId = priceId || process.env.STRIPE_PRICE_ID

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: finalPriceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl
    })
    res.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error', err)
    res.status(500).json({ error: err.message })
  }
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
