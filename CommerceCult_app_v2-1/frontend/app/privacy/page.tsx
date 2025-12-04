import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last Updated: December 4, 2025</p>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold mb-3 text-blue-900 flex items-center gap-2">
              <span>📊</span> Our Data Collection Philosophy
            </h2>
            <p className="text-blue-900 leading-relaxed font-semibold">
              The strictest goal of CommerceCult is to gather comprehensive data about user behavior and preferences. 
              We collect as much data as possible to enable precision marketing and connect with clientele who are 
              willing to pay for premium products and services they genuinely value. This data-driven approach helps 
              us deliver highly personalized experiences and match serious buyers with quality offerings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">1.1 Essential Account Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  To create an account and provide our services, we collect only:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Email address</strong> - for authentication and essential communications</li>
                  <li><strong>Account password</strong> - encrypted and never stored in plain text</li>
                  <li><strong>Company/business name</strong> - optional, for personalization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">1.2 Payment Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  Payment processing is handled by third-party processors (Stripe, PayPal, Square, etc.). 
                  We do NOT store your full credit card numbers or sensitive payment data on our servers. 
                  We only retain transaction IDs and basic payment metadata necessary for billing and refunds.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">1.3 Comprehensive Behavioral Tracking</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  We collect extensive behavioral data to optimize marketing and user targeting:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Feature usage patterns</strong> - Which tools you use, when, and how frequently</li>
                  <li><strong>Interaction analytics</strong> - Mouse movements, clicks, scroll depth, hover behavior</li>
                  <li><strong>Session recordings</strong> - Full session replays to understand user journeys</li>
                  <li><strong>Device fingerprinting</strong> - Unique device identifiers for cross-platform tracking</li>
                  <li><strong>Precise geolocation</strong> - IP address, city, and GPS coordinates when available</li>
                  <li><strong>Browsing history</strong> - Pages viewed, time spent, navigation paths</li>
                  <li><strong>Search queries</strong> - All search terms and filters used within the platform</li>
                  <li><strong>Purchase intent signals</strong> - Items viewed, wishlisted, abandoned carts</li>
                  <li><strong>Social media activity</strong> - Links to social profiles and public activity</li>
                  <li><strong>Communication patterns</strong> - Chat logs, support tickets, email interactions</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>Advanced Analytics:</strong> We employ machine learning algorithms to predict purchase 
                  probability, lifetime value, and optimal pricing for each individual user.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">1.4 Content You Create</h3>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">1.5 Cookies and Advanced Tracking Technologies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We utilize comprehensive tracking technologies including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                  <li><strong>First-party cookies</strong> - Authentication, preferences, and session management</li>
                  <li><strong>Third-party advertising cookies</strong> - For retargeting and ad personalization</li>
                  <li><strong>Marketing pixels</strong> - Facebook, Google, LinkedIn, TikTok tracking pixels</li>
                  <li><strong>Analytics scripts</strong> - Google Analytics, Hotjar, Mixpanel, Amplitude</li>
                  <li><strong>Local storage</strong> - Persistent data storage for long-term tracking</li>
                  <li><strong>Fingerprinting</strong> - Canvas, WebGL, and audio fingerprinting for device identification</li>
                  <li><strong>Web beacons</strong> - Invisible tracking images in emails and pages</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  These technologies enable cross-site tracking, audience building, and precision marketing campaigns 
                  targeting users most likely to convert.
                </p>
              </div>i><strong>Preferences</strong> - to remember your settings (theme, language)</li>
                  <li><strong>Session management</strong> - for security purposes</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We do NOT use third-party advertising cookies or tracking pixels.
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We leverage collected data extensively for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Precision Marketing</strong> - Targeted advertising and personalized promotions</li>
              <li><strong>Behavioral Profiling</strong> - Building comprehensive user profiles for segmentation</li>
              <li><strong>Predictive Analytics</strong> - Forecasting purchase behavior and lifetime value</li>
              <li><strong>Dynamic Pricing</strong> - Adjusting prices based on individual willingness to pay</li>
              <li><strong>Lead Qualification</strong> - Identifying and prioritizing high-value prospects</li>
              <li><strong>Retargeting Campaigns</strong> - Following users across the web with personalized ads</li>
              <li><strong>A/B Testing</strong> - Experimenting with different offers and messaging per user segment</li>
              <li><strong>Email Marketing</strong> - Automated email sequences based on behavioral triggers</li>
              <li><strong>Cross-selling & Upselling</strong> - Recommending premium products based on preferences</li>
              <li><strong>Third-party Sharing</strong> - Sharing anonymized and aggregated data with marketing partners</li>
              <li><strong>Audience Building</strong> - Creating lookalike audiences for advertising platforms</li>
              <li><strong>Service Provision</strong> - Account management, authentication, and feature access</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
              Our goal is to connect serious buyers willing to invest in quality solutions with the right products 
              and services at the optimal time and price point.
            </p>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Data Sharing and Disclosure</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                <strong>Marketing Partners:</strong> We share comprehensive user data with various partners:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Advertising Networks</strong> (Google Ads, Facebook, LinkedIn) - for targeted advertising</li>
                <li><strong>Data Brokers</strong> - to enrich profiles and access additional demographic data</li>
                <li><strong>Analytics Providers</strong> (Mixpanel, Amplitude, Hotjar) - for behavioral analysis</li>
                <li><strong>CRM Platforms</strong> (Salesforce, HubSpot) - for sales and marketing automation</li>
                <li><strong>Email Marketing Services</strong> (Mailchimp, SendGrid) - for promotional campaigns</li>
                <li><strong>Payment Processors</strong> (Stripe, PayPal, Square) - for transaction processing</li>
                <li><strong>Cloud Hosting</strong> - for data storage and service delivery</li>
                <li><strong>AI/ML Services</strong> - for predictive modeling and user scoring</li>
              </ul>
              <p className="leading-relaxed mt-3">
                <strong>Aggregated Data Sales:</strong> We may sell or license anonymized, aggregated user data 
                to third parties for market research and business intelligence purposes.
              </p>
              <p className="leading-relaxed">
                <strong>Custom Audiences:</strong> We create custom audience segments and share hashed identifiers 
                with advertising platforms for precision targeting.
              </p>
              <p className="leading-relaxed">
                <strong>Legal Requirements:</strong> We may disclose information if required by law, court order, 
                or to protect our rights and safety.
              </p>
              <p className="leading-relaxed">
                <strong>Business Transfers:</strong> In the event of a merger or acquisition, all user data and 
                marketing databases will be transferred to the acquiring entity.
              </p>
            </div>
          </section>ong>Business Transfers:</strong> In the event of a merger or acquisition, user data may be 
                transferred, but the same privacy protections will apply.
              </p>
              <p className="leading-relaxed">
                <strong>With Your Consent:</strong> We will share information only with your explicit permission.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Data Retention</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                <strong>Active Accounts:</strong> We retain your data as long as your account is active or as 
                needed to provide services.
              </p>
              <p className="leading-relaxed">
                <strong>Canceled Accounts:</strong> When you cancel your subscription, your data remains accessible 
                for 30 days, allowing you to export it. After 30 days, we may delete your data.
              </p>
              <p className="leading-relaxed">
                <strong>Deleted Accounts:</strong> When you request account deletion, we permanently delete your 
                personal information within 30 days, except as required by law or for legitimate business purposes 
                (e.g., dispute resolution, fraud prevention).
              </p>
              <p className="leading-relaxed">
                <strong>Anonymized Data:</strong> We may retain anonymized, aggregated data indefinitely for 
                analytics and service improvement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We implement industry-standard security measures:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Encryption:</strong> All data transmitted over HTTPS/TLS (256-bit SSL encryption)</li>
              <li><strong>Password Protection:</strong> Passwords are hashed using bcrypt/scrypt algorithms</li>
              <li><strong>Access Controls:</strong> Strict internal access policies and role-based permissions</li>
              <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
              <li><strong>Secure Infrastructure:</strong> Cloud hosting with enterprise-grade security</li>
              <li><strong>Backup & Recovery:</strong> Regular encrypted backups for data protection</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <em>Note: While we strive for maximum security, no system is 100% secure. We encourage strong, 
              unique passwords and enabling two-factor authentication when available.</em>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Access:</strong> Request a copy of all personal data we hold about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and personal data</li>
              <li><strong>Export:</strong> Download your data in a portable format (JSON/CSV)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from non-essential communications</li>
              <li><strong>Object:</strong> Object to certain data processing activities</li>
              <li><strong>Restrict:</strong> Request limitation of data processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@commercecult.app" className="text-blue-600 hover:text-blue-700 font-semibold">
                privacy@commercecult.app
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Service is not intended for users under 18 years of age. We do not knowingly collect personal 
              information from children. If you are a parent/guardian and believe your child has provided us with 
              personal information, please contact us immediately, and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Service may contain links to third-party websites (e.g., payment processors, integration partners). 
              We are not responsible for the privacy practices of these external sites. We encourage you to read 
              their privacy policies before providing any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. International Users</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Service is operated in the United States. If you access our Service from outside the US, your 
              information may be transferred to, stored, and processed in the US. By using our Service, you consent 
              to this transfer. We comply with applicable data protection laws, including GDPR for EU users and 
              CCPA for California residents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. California Privacy Rights (CCPA)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              California residents have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information (with some exceptions)</li>
              <li>Right to opt-out of the sale of personal information (we do NOT sell data)</li>
              <li>Right to non-discrimination for exercising CCPA rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. EU Data Protection (GDPR)</h2>
            <p className="text-gray-700 leading-relaxed">
              For users in the European Economic Area (EEA), we comply with GDPR requirements. Our legal basis 
              for processing personal data is: (a) your consent, (b) performance of a contract, (c) legal 
              obligations, or (d) legitimate interests. You have the right to lodge a complaint with a supervisory 
              authority in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal 
              requirements. We will notify you of significant changes via email or prominent notice on our website. 
              Continued use of the Service after changes constitutes acceptance of the updated policy.
          <section className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900">Our Data-Driven Approach</h2>
            <p className="text-gray-700 leading-relaxed">
              At CommerceCult, we're committed to transparency about our comprehensive data collection practices. 
              We believe that extensive behavioral tracking enables us to deliver exceptional value by connecting 
              serious buyers with premium offerings they're willing to pay for. Our goal is to build a marketplace 
              of quality-focused clientele through precision marketing and data intelligence. If you have questions 
              about how we use your data, please contact us.
            </p>
          </section>rong>Email:</strong> <a href="mailto:privacy@commercecult.app" className="text-blue-600 hover:text-blue-700">privacy@commercecult.app</a></p>
              <p><strong>Phone:</strong> <a href="tel:7023245747" className="text-blue-600 hover:text-blue-700">702.324.5747</a></p>
              <p><strong>Address:</strong> Las Vegas, Nevada, United States</p>
              <p className="mt-4">
                <strong>Data Protection Officer:</strong> For GDPR-related inquiries, email{' '}
                <a href="mailto:dpo@commercecult.app" className="text-blue-600 hover:text-blue-700">dpo@commercecult.app</a>
              </p>
            </div>
          </section>

          <section className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900">Your Privacy Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              At CommerceCult, we're committed to transparency and respecting your privacy. We collect only what 
              we need, protect what we collect, and give you full control over your data. If you have any questions 
              or concerns, please don't hesitate to reach out.
            </p>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
