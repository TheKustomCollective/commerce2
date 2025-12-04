'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, sender: 'user' | 'agent', text: string, timestamp: Date}>>([]);
  const [inputText, setInputText] = useState('');
  const [agentStatus, setAgentStatus] = useState<'online' | 'away' | 'busy'>('online');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate agent initial message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage('agent', "Hi! 👋 I'm here to help. How can I assist you today?");
      }, 500);
    }
  }, [isOpen]);

  const addMessage = (sender: 'user' | 'agent', text: string) => {
    const newMessage = {
      id: Date.now(),
      sender,
      text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    addMessage('user', inputText);
    setInputText('');

    // Simulate agent typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      // Auto-response based on keywords
      const lowerText = inputText.toLowerCase();
      let response = '';

      if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('pricing')) {
        response = "Our pricing is flexible! We offer plans starting at $0 for bootstrappers up to enterprise solutions. Check out our /pricing page or I can connect you with our sales team for a custom quote. What's your budget range?";
      } else if (lowerText.includes('help') || lowerText.includes('support')) {
        response = "I'm here to help! You can also reach us at:\n📞 702.324.5747\n📧 support@commercecult.app\n\nWhat specific issue can I assist with?";
      } else if (lowerText.includes('demo') || lowerText.includes('trial')) {
        response = "Absolutely! You can start a free trial right now at /signup. Would you like me to guide you through the setup process?";
      } else if (lowerText.includes('funding') || lowerText.includes('investor')) {
        response = "Great question! Our AI Business Plan Generator (/generate) creates investor-ready plans in minutes. We've helped entrepreneurs secure over $50M in funding. Want to see how it works?";
      } else {
        response = "Thanks for reaching out! Let me connect you with a specialist who can better assist you. In the meantime, you can explore our tools at /dashboard or call us at 702.324.5747.";
      }

      addMessage('agent', response);
    }, 1500 + Math.random() * 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center text-3xl"
        title="Live Chat Support"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-blue-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
                💬
              </div>
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                agentStatus === 'online' ? 'bg-green-500' :
                agentStatus === 'away' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></div>
            </div>
            <div>
              <div className="font-bold">Live Support</div>
              <div className="text-xs opacity-90 capitalize">{agentStatus}</div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>
        <div className="text-xs opacity-90">
          Average response time: ~1 min
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`p-3 rounded-2xl whitespace-pre-wrap ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
              <div className={`text-xs text-gray-500 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="p-3 bg-white border-t border-gray-200">
        <div className="text-xs text-gray-600 mb-2">Quick actions:</div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setInputText("I need help with pricing");
              setTimeout(() => handleSendMessage(), 100);
            }}
            className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
          >
            💰 Pricing
          </button>
          <button
            onClick={() => {
              setInputText("Can I get a demo?");
              setTimeout(() => handleSendMessage(), 100);
            }}
            className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
          >
            🎥 Demo
          </button>
          <button
            onClick={() => {
              setInputText("Tell me about funding options");
              setTimeout(() => handleSendMessage(), 100);
            }}
            className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
          >
            📊 Funding
          </button>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">
          Or call us: <a href="tel:7023245747" className="text-blue-600 hover:underline font-semibold">702.324.5747</a>
        </div>
      </div>
    </div>
  );
}
