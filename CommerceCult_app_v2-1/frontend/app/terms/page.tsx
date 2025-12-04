import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">Last Updated: December 4, 2025</p>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using CommerceCult ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
              If you do not agree to these Terms, please do not use our Service. We reserve the right to update these 
              Terms at any time, and continued use of the Service constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CommerceCult provides AI-powered business tools including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Business plan generation and financial planning tools</li>
              <li>AI video and podcast generation services</li>
              <li>Product mockup and design tools</li>
              <li>AI call center and customer service solutions</li>
              <li>Marketing toolbox and campaign management</li>
              <li>B2B marketplace platform for buying and selling</li>
              <li>Funding intelligence and calculator tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
              <li>Not share your account with others or create multiple accounts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Subscription and Payment Terms</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                <strong>Free Tier:</strong> Our Starter plan is free forever with usage limitations as specified on our pricing page.
              </p>
              <p className="leading-relaxed">
                <strong>Paid Plans:</strong> Subscription fees are charged in advance on a monthly or annual basis. 
                You authorize us to charge your payment method for all fees.
              </p>
              <p className="leading-relaxed">
                <strong>Renewals:</strong> Subscriptions automatically renew unless canceled at least 24 hours before 
                the renewal date. You may cancel at any time through your account settings.
              </p>
              <p className="leading-relaxed">
                <strong>Refunds:</strong> We offer a 30-day money-back guarantee on all paid plans. Refund requests 
                must be submitted within 30 days of initial purchase.
              </p>
              <p className="leading-relaxed">
                <strong>Price Changes:</strong> We may modify subscription prices with 30 days' notice. Changes take 
                effect at your next billing cycle.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Marketplace Terms</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                <strong>Commission Structure:</strong> Vendors pay a 5% commission on successful transactions 
                (reducible to 2.5% with add-on). First $1,000 in sales is commission-free for new vendors.
              </p>
              <p className="leading-relaxed">
                <strong>Vendor Responsibilities:</strong> Vendors must accurately describe products/services, 
                honor pricing, fulfill orders promptly, and comply with all applicable laws.
              </p>
              <p className="leading-relaxed">
                <strong>Buyer Protection:</strong> Buyers are protected through our escrow service. Funds are 
                released to vendors only upon successful delivery confirmation.
              </p>
              <p className="leading-relaxed">
                <strong>Disputes:</strong> In case of disputes, CommerceCult will mediate fairly but reserves 
                final judgment. Chargebacks may result in account suspension.
              </p>
              <p className="leading-relaxed">
                <strong>Prohibited Items:</strong> Illegal goods, weapons, counterfeit items, adult content, 
                stolen property, and items violating intellectual property rights are strictly prohibited.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Acceptable Use Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Harass, abuse, or harm others</li>
              <li>Spam or send unsolicited messages</li>
              <li>Scrape or data mine our platform</li>
              <li>Attempt to gain unauthorized access to systems</li>
              <li>Impersonate others or misrepresent affiliations</li>
              <li>Use the Service for illegal activities or fraudulent purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Intellectual Property</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                <strong>Our Content:</strong> All content, features, and functionality (including but not limited to 
                text, graphics, logos, software) are owned by CommerceCult and protected by copyright, trademark, 
                and other intellectual property laws.
              </p>
              <p className="leading-relaxed">
                <strong>User Content:</strong> You retain ownership of content you create using our tools. By using 
                our Service, you grant us a limited license to host, store, and display your content as necessary 
                to provide the Service.
              </p>
              <p className="leading-relaxed">
                <strong>AI-Generated Content:</strong> Content generated by our AI tools is provided to you for 
                commercial use. However, we make no guarantees regarding uniqueness or copyright clearance of 
                AI-generated content.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Disclaimers and Limitations</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                <strong>AS IS Service:</strong> The Service is provided "AS IS" and "AS AVAILABLE" without warranties 
                of any kind, express or implied, including but not limited to merchantability, fitness for a particular 
                purpose, or non-infringement.
              </p>
              <p className="leading-relaxed">
                <strong>No Business Guarantees:</strong> We do not guarantee that using our tools will result in 
                business success, funding, or profitability. All business decisions are your responsibility.
              </p>
              <p className="leading-relaxed">
                <strong>AI Limitations:</strong> AI-generated content may contain errors, biases, or inaccuracies. 
                You are responsible for reviewing and verifying all AI-generated content before use.
              </p>
              <p className="leading-relaxed">
                <strong>Limitation of Liability:</strong> CommerceCult shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including loss of profits, data, or business opportunities, 
                even if advised of such possibility. Our total liability shall not exceed the amount paid by you in the 
                past 12 months.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Data and Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not intentionally collect or store personally identifiable information beyond what is necessary 
              for account creation and payment processing. Please see our{' '}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">
                Privacy Policy
              </Link>{' '}
              for detailed information about data handling practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Abuse of the platform or other users</li>
              <li>Extended period of inactivity</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon termination, your right to use the Service ceases immediately. You may export your data 
              within 30 days of termination, after which it may be permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless CommerceCult, its officers, directors, employees, 
              and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the 
              Service, violation of these Terms, or infringement of any rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Nevada, 
              United States, without regard to its conflict of law provisions. Any disputes shall be resolved in 
              the courts of Las Vegas, Nevada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Changes to Service</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or 
              without notice. We are not liable for any modification, suspension, or discontinuation of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Contact Information</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>For questions about these Terms, please contact us:</p>
              <p><strong>Email:</strong> <a href="mailto:legal@commercecult.app" className="text-blue-600 hover:text-blue-700">legal@commercecult.app</a></p>
              <p><strong>Phone:</strong> <a href="tel:7023245747" className="text-blue-600 hover:text-blue-700">702.324.5747</a></p>
              <p><strong>Address:</strong> Las Vegas, Nevada, United States</p>
            </div>
          </section>

          <section className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900">Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              By using CommerceCult, you acknowledge that you have read, understood, and agree to be bound by 
              these Terms of Service. If you do not agree, you must discontinue use immediately.
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
