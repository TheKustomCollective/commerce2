'use client';

import React, { useState, useEffect } from 'react';

export default function RaphaelAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [step, setStep] = useState<'greeting' | 'gathering' | 'analyzing' | 'complete'>('greeting');
  const [userInfo, setUserInfo] = useState({
    name: '',
    businessStage: '',
    primaryGoal: '',
    budget: '',
    timeline: '',
    voiceTone: 'professional' as 'professional' | 'casual' | 'enthusiastic' | 'urgent',
  });
  const [messages, setMessages] = useState<Array<{sender: 'raphael' | 'user', text: string}>>([]);
  const [currentInput, setCurrentInput] = useState('');

  // Auto-open on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('raphael-greeted');
    if (!hasVisited) {
      setTimeout(() => {
        setIsOpen(true);
        setHasGreeted(true);
        addMessage('raphael', "👋 Hi! I'm Raphael, your AI business assistant. I'm here to help personalize your CommerceCult experience. May I ask you a few quick questions?");
      }, 2000);
      localStorage.setItem('raphael-greeted', 'true');
    }
  }, []);

  const addMessage = (sender: 'raphael' | 'user', text: string) => {
    setMessages(prev => [...prev, { sender, text }]);
  };

  const handleQuickStart = () => {
    setStep('gathering');
    addMessage('raphael', "Perfect! Let's start with the basics. What's your name?");
  };

  const handleSkip = () => {
    setIsOpen(false);
    addMessage('raphael', "No problem! I'll be here in the corner if you need me. Just click my icon anytime! 😊");
  };

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    addMessage('user', currentInput);

    // Intelligent response based on step
    if (step === 'gathering') {
      if (!userInfo.name) {
        setUserInfo(prev => ({ ...prev, name: currentInput }));
        setTimeout(() => {
          addMessage('raphael', `Great to meet you, ${currentInput}! 🎉 Now, where are you in your business journey?\n\n1️⃣ Just an idea\n2️⃣ Planning phase\n3️⃣ Ready to launch\n4️⃣ Already running`);
        }, 500);
      } else if (!userInfo.businessStage) {
        const stage = currentInput.toLowerCase().includes('idea') ? 'Idea Stage' :
                     currentInput.toLowerCase().includes('planning') ? 'Planning' :
                     currentInput.toLowerCase().includes('launch') ? 'Ready to Launch' : 'Operating';
        setUserInfo(prev => ({ ...prev, businessStage: stage }));
        setTimeout(() => {
          addMessage('raphael', `${stage} - excellent! What's your primary goal right now?\n\n💰 Get funding\n📊 Create business plan\n🎯 Marketing strategy\n📈 Scale my business`);
        }, 500);
      } else if (!userInfo.primaryGoal) {
        setUserInfo(prev => ({ ...prev, primaryGoal: currentInput }));
        setTimeout(() => {
          addMessage('raphael', `Perfect! What's your budget range?\n\n💵 $0-$5K (Bootstrap)\n💰 $5K-$25K (Small budget)\n💎 $25K-$100K (Medium)\n🚀 $100K+ (Well-funded)`);
        }, 500);
      } else if (!userInfo.budget) {
        setUserInfo(prev => ({ ...prev, budget: currentInput }));
        setTimeout(() => {
          addMessage('raphael', `Got it! When do you want to launch or hit your next milestone?\n\n⚡ ASAP (within 30 days)\n📅 1-3 months\n🗓️ 3-6 months\n🎯 6+ months (strategic planning)`);
        }, 500);
      } else if (!userInfo.timeline) {
        setUserInfo(prev => ({ ...prev, timeline: currentInput }));
        setStep('analyzing');
        setTimeout(() => {
          addMessage('raphael', `Analyzing your responses and voice tone... 🧠✨`);
        }, 500);
        setTimeout(() => {
          analyzeAndComplete();
        }, 2500);
      }
    }

    setCurrentInput('');
  };

  const analyzeAndComplete = () => {
    // Analyze tone from user's writing style
    const allUserMessages = messages.filter(m => m.sender === 'user').map(m => m.text).join(' ');
    const hasExclamation = allUserMessages.includes('!');
    const hasEmoji = /[\u{1F300}-\u{1F9FF}]/u.test(allUserMessages);
    const shortResponses = messages.filter(m => m.sender === 'user').every(m => m.text.length < 30);
    
    let detectedTone: typeof userInfo.voiceTone = 'professional';
    if (hasExclamation && hasEmoji) detectedTone = 'enthusiastic';
    else if (shortResponses) detectedTone = 'urgent';
    else if (hasEmoji) detectedTone = 'casual';

    setUserInfo(prev => ({ ...prev, voiceTone: detectedTone }));
    setStep('complete');

    const toneDescriptions = {
      professional: 'clear, structured guidance with detailed documentation',
      casual: 'friendly, conversational support with easy-to-follow steps',
      enthusiastic: 'energetic motivation and exciting opportunities',
      urgent: 'quick-start templates and fast-track solutions'
    };

    setTimeout(() => {
      addMessage('raphael', `🎯 Perfect! I've analyzed your needs:\n\n👤 Name: ${userInfo.name}\n🚀 Stage: ${userInfo.businessStage}\n🎯 Goal: ${userInfo.primaryGoal}\n💰 Budget: ${userInfo.budget}\n📅 Timeline: ${userInfo.timeline}\n🎨 Communication Style: ${detectedTone}\n\nI'll personalize your experience with ${toneDescriptions[detectedTone]}.\n\nHere's what I recommend you start with:`);
    }, 500);

    setTimeout(() => {
      const recommendations = getRecommendations();
      addMessage('raphael', recommendations);
    }, 1500);
  };

  const getRecommendations = () => {
    const goal = userInfo.primaryGoal.toLowerCase();
    let recs = '✨ Your Personalized Roadmap:\n\n';

    if (goal.includes('funding') || goal.includes('fund')) {
      recs += '1️⃣ Start with our AI Business Plan Generator (/generate)\n';
      recs += '2️⃣ Check out Funding Opportunities (/fundmystartup)\n';
      recs += '3️⃣ Use our ROI Calculator to impress investors (/calculators/roi)\n';
    } else if (goal.includes('plan') || goal.includes('business')) {
      recs += '1️⃣ Generate your business plan with AI (/generate)\n';
      recs += '2️⃣ Create product mockups (/mockup)\n';
      recs += '3️⃣ Design your marketing strategy (/marketing)\n';
    } else if (goal.includes('marketing') || goal.includes('market')) {
      recs += '1️⃣ Explore our $0 Marketing Strategy (/marketing)\n';
      recs += '2️⃣ Use the Marketing Toolbox (/toolbox)\n';
      recs += '3️⃣ Create AI-powered videos (/video-generator)\n';
    } else {
      recs += '1️⃣ Start with AI Business Plan (/generate)\n';
      recs += '2️⃣ Set up your AI Call Center (/call-center)\n';
      recs += '3️⃣ Access the full toolbox (/toolbox)\n';
    }

    recs += '\n💬 I\'ll be right here if you need anything else!';
    return recs;
  };

  if (!isOpen && hasGreeted) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center text-3xl animate-bounce"
        title="Chat with Raphael"
      >
        🤖
      </button>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-purple-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
            🤖
          </div>
          <div>
            <div className="font-bold text-lg">Raphael</div>
            <div className="text-xs opacity-90">AI Business Assistant</div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-purple-50 to-blue-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-wrap ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        
        {step === 'greeting' && messages.length === 1 && (
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleQuickStart}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Yes, let's go! 🚀
            </button>
            <button
              onClick={handleSkip}
              className="px-6 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
            >
              Maybe later
            </button>
          </div>
        )}

        {step === 'analyzing' && (
          <div className="flex justify-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      {step === 'gathering' && (
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your answer..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!currentInput.trim()}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {step === 'complete' && (
        <div className="p-4 border-t border-gray-200 bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Let's Get Started! 🚀
          </button>
        </div>
      )}
    </div>
  );
}
