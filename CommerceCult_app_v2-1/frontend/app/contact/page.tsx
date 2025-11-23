'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            We'll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-600 hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions? We're here to help!
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input 
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
            <div className="space-y-6">
              <ContactMethod
                icon="📧"
                title="Email"
                value="support@commercecult.app"
                link="mailto:support@commercecult.app"
              />
              <ContactMethod
                icon="💬"
                title="Live Chat"
                value="Available Mon-Fri, 9am-6pm EST"
                link="#"
              />
              <ContactMethod
                icon="📱"
                title="Phone"
                value="+1 (555) 123-4567"
                link="tel:+15551234567"
              />
              <ContactMethod
                icon="🏢"
                title="Office"
                value="123 Business St, Suite 100, New York, NY 10001"
                link="#"
              />
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <p className="text-gray-600 mb-4">
                Check out our <a href="#" className="text-blue-600 hover:underline">FAQ page</a> for quick answers to common questions.
              </p>
              <h3 className="text-xl font-bold mb-4">Support Hours</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Monday - Friday: 9am - 6pm EST</li>
                <li>Saturday: 10am - 4pm EST</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactMethod({ icon, title, value, link }: { icon: string; title: string; value: string; link: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <a href={link} className="text-gray-600 hover:text-blue-600">
          {value}
        </a>
      </div>
    </div>
  )
}
