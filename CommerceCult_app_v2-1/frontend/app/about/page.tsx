import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About CommerceCult</h1>
          <p className="text-xl text-gray-600">
            Empowering entrepreneurs with AI-powered business intelligence
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe every great business idea deserves a chance to succeed. CommerceCult democratizes access 
            to professional business planning, market intelligence, and growth tools that were once only available 
            to large corporations. Our AI-powered platform turns your vision into actionable plans, helping you 
            secure funding, launch faster, and grow smarter.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                CommerceCult was born from a simple frustration: starting a business is too hard.
              </p>
              <p>
                Our founders spent years watching talented entrepreneurs struggle with business plans, 
                market research, and funding applications—not because they lacked great ideas, but because 
                they lacked the expensive tools and expertise required to bring those ideas to life.
              </p>
              <p>
                In 2024, we asked ourselves: What if AI could level the playing field? What if anyone with 
                a great idea could access the same intelligence, planning tools, and marketing capabilities 
                that Fortune 500 companies use?
              </p>
              <p className="font-semibold text-gray-900">
                CommerceCult is that solution. We've helped over 10,000 entrepreneurs turn ideas into 
                funded, thriving businesses.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop" 
              alt="Team collaboration and business growth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon="🎯"
              title="Accessibility First"
              description="World-class business tools shouldn't be reserved for the wealthy. We make enterprise-level intelligence affordable for everyone."
            />
            <ValueCard
              icon="🤖"
              title="AI-Powered Innovation"
              description="We harness cutting-edge AI to do in minutes what used to take consultants weeks—at a fraction of the cost."
            />
            <ValueCard
              icon="💪"
              title="Entrepreneur Success"
              description="Your success is our success. We measure our impact by the businesses we help launch and grow."
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard number="10,000+" label="Businesses Launched" />
            <StatCard number="$50M+" label="Funding Secured" />
            <StatCard number="500+" label="Templates Created" />
            <StatCard number="95%" label="Customer Satisfaction" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Sarah Chen"
              role="CEO & Co-Founder"
              bio="Former VP at McKinsey, serial entrepreneur with 3 exits"
            />
            <TeamMember
              name="Marcus Johnson"
              role="CTO & Co-Founder"
              bio="Ex-Google AI lead, built ML systems serving 1B+ users"
            />
            <TeamMember
              name="Elena Rodriguez"
              role="Head of Product"
              bio="20+ years in SaaS, previously led product at Salesforce"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the CommerceCult Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start building your business with the tools used by successful entrepreneurs worldwide
          </p>
          <Link 
            href="/signup"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input 
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input 
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject *</label>
                  <input 
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell us more..."
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
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:7023245747" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                      702.324.5747
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:support@commercecult.app" className="text-blue-600 hover:text-blue-700">
                      support@commercecult.app
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏢</div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-600">Las Vegas, Nevada</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h4 className="font-semibold mb-1">Support Hours</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>Monday - Friday: 9am - 6pm PST</li>
                      <li>Saturday: 10am - 4pm PST</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold mb-2">{number}</div>
      <div className="text-xl opacity-90">{label}</div>
    </div>
  )
}

function TeamMember({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
        👤
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-blue-600 font-semibold mb-2">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  )
}
