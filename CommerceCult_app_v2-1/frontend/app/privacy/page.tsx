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
          
          <section className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold mb-3 text-green-900 flex items-center gap-2">
              <span>🔒</span> Our Privacy Commitment
            </h2>
            <p className="text-green-900 leading-relaxed font-semibold">
              CommerceCult does NOT intentionally collect or store personally identifiable information beyond 
              what is absolutely necessary for account creation, authentication, and payment processing. 
              We believe in minimal data collection and maximum privacy protection.
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
                <h3 className="text-lg font-semibold mb-2 text-gray-800">1.3 Usage Data (Non-Identifying)</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  We collect anonymized, aggregated usage data to improve our service:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Feature usage statistics (which tools you use)</li>
                  <li>Performance metrics (load times, error rates)</li>
                  <li>Device type and browser (for compatibility)</li>
                  <li>General geographic region (country/state level only)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>We do NOT track:</strong> Your browsing history outside our platform, mouse movements, 
                  keystrokes, or other invasive behavioral data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">1.4 Content You Create</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you use our AI tools (business plans, videos, podcasts, mockups), we store the content 
                  you create to provide the service. This content belongs to you and can be deleted at any time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">1.5 Cookies and Local Storage</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use minimal cookies for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                  <li><strong>Authentication</strong> - to keep you logged in</li>
                  <li><strong>Preferences</strong> - to remember your settings (theme, language)</li>
                  <li><strong>Session management</strong> - for security purposes</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We do NOT use third-party advertising cookies or tracking pixels.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We use collected information ONLY for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Providing the Service</strong> - Account creation, authentication, feature access</li>
              <li><strong>Processing Payments</strong> - Billing, invoicing, and refunds</li>
              <li><strong>Customer Support</strong> - Responding to your inquiries and issues</li>
              <li><strong>Service Improvements</strong> - Fixing bugs and enhancing features (using anonymized data)</li>
              <li><strong>Security</strong> - Preventing fraud, abuse, and unauthorized access</li>
              <li><strong>Legal Compliance</strong> - Meeting regulatory requirements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
              We do NOT sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Data Sharing and Disclosure</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                <strong>Service Providers:</strong> We share minimal data with trusted third-party providers:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Payment Processors</strong> (Stripe, PayPal, Square) - for payment processing</li>
                <li><strong>Email Service</strong> (for transactional emails only, no marketing)</li>
                <li><strong>Cloud Hosting</strong> (for secure data storage and service delivery)</li>
              </ul>
              <p className="leading-relaxed mt-3">
                <strong>Legal Requirements:</strong> We may disclose information if required by law, court order, 
                or to protect our rights and safety.
              </p>
              <p className="leading-relaxed">
                <strong>Business Transfers:</strong> In the event of a merger or acquisition, user data may be 
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
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Contact Us</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>For privacy-related questions or concerns, contact us:</p>
              <p><strong>Email:</strong> <a href="mailto:privacy@commercecult.app" className="text-blue-600 hover:text-blue-700">privacy@commercecult.app</a></p>
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
