'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GeneratePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessIdea: '',
    industry: '',
    targetAudience: '',
    budget: '',
    timeline: '',
    additionalInfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send data to backend API
    console.log('Business Generation Request:', formData);
    alert('Your AI business generation request has been submitted! We will contact you soon.');
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-8 bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-green-900/20 to-black" />
      
      <div className="z-10 max-w-2xl w-full bg-gray-900/80 backdrop-blur-md rounded-lg p-8 shadow-[0_0_30px_rgba(0,255,0,0.3)] border border-green-500/30">
        <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-2 text-green-400">Generate Your Business</h1>
        <p className="text-gray-300 mb-6">Step {step} of 3</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-green-400 mb-2 font-semibold">
                  What's your business idea?
                </label>
                <textarea
                  name="businessIdea"
                  value={formData.businessIdea}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                  placeholder="Describe your business idea in detail..."
                />
              </div>

              <div>
                <label className="block text-green-400 mb-2 font-semibold">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                >
                  <option value="">Select an industry</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">SaaS</option>
                  <option value="consulting">Consulting</option>
                  <option value="retail">Retail</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-green-400 mb-2 font-semibold">
                  Target Audience
                </label>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                  placeholder="e.g., Small business owners, millennials, etc."
                />
              </div>

              <div>
                <label className="block text-green-400 mb-2 font-semibold">
                  Initial Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                >
                  <option value="">Select a budget range</option>
                  <option value="under5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over50k">Over $50,000</option>
                </select>
              </div>

              <div>
                <label className="block text-green-400 mb-2 font-semibold">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                >
                  <option value="">Select a timeline</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="over12months">Over 12 months</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-green-400 mb-2 font-semibold">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-green-500/30 rounded-lg focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                  placeholder="Any other details you'd like to share about your business vision..."
                />
              </div>

              <div className="bg-gray-800/50 border border-green-500/20 rounded-lg p-4">
                <h3 className="text-green-400 font-semibold mb-2">Review Your Information:</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li><strong>Idea:</strong> {formData.businessIdea.substring(0, 50)}...</li>
                  <li><strong>Industry:</strong> {formData.industry}</li>
                  <li><strong>Target Audience:</strong> {formData.targetAudience}</li>
                  <li><strong>Budget:</strong> {formData.budget}</li>
                  <li><strong>Timeline:</strong> {formData.timeline}</li>
                </ul>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 px-6 py-3 text-green-400 border-2 border-green-400 rounded-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Back
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 shadow-[0_0_20px_rgba(0,255,0,0.4)] hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] transition-all duration-300"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 shadow-[0_0_20px_rgba(0,255,0,0.4)] hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] transition-all duration-300"
              >
                Generate My Business
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
