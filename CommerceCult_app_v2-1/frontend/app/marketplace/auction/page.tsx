'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Auction {
  id: number;
  title: string;
  description: string;
  category: string;
  currentBid: number;
  reservePrice: number;
  reserveMet: boolean;
  startingBid: number;
  bidCount: number;
  timeRemaining: number;
  seller: string;
  imageUrl: string;
  highestBidder?: string;
}

export default function InstantAuctionPage() {
  const [activeAuctions, setActiveAuctions] = useState<Auction[]>([
    {
      id: 1,
      title: 'Premium E-commerce Starter Pack',
      description: 'Complete Shopify store with inventory, branding, and marketing materials',
      category: 'Business Assets',
      currentBid: 2500,
      reservePrice: 3000,
      reserveMet: false,
      startingBid: 1000,
      bidCount: 12,
      timeRemaining: 3600,
      seller: 'TechVentures LLC',
      imageUrl: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=E-commerce+Pack'
    },
    {
      id: 2,
      title: 'SaaS Product - Revenue $5K/mo',
      description: 'Profitable project management tool with 200 active subscribers',
      category: 'SaaS Business',
      currentBid: 45000,
      reservePrice: 40000,
      reserveMet: true,
      startingBid: 30000,
      bidCount: 8,
      timeRemaining: 7200,
      seller: 'Digital Ventures',
      imageUrl: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=SaaS+Product'
    }
  ]);

  const [selectedAuction, setSelectedAuction] = useState<Auction | null>(null);
  const [bidAmount, setBidAmount] = useState('');
  const [showBidModal, setShowBidModal] = useState(false);
  const [userBids, setUserBids] = useState<{[key: number]: number}>({});

  // Create new auction state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newAuction, setNewAuction] = useState({
    title: '',
    description: '',
    category: '',
    startingBid: '',
    reservePrice: '',
    duration: '24',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAuctions(prev => 
        prev.map(auction => ({
          ...auction,
          timeRemaining: Math.max(0, auction.timeRemaining - 1)
        }))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const handlePlaceBid = () => {
    if (!selectedAuction || !bidAmount) return;

    const bid = parseFloat(bidAmount);
    const minBid = selectedAuction.currentBid + 50; // Minimum increment $50

    if (bid < minBid) {
      alert(`Minimum bid must be $${minBid}`);
      return;
    }

    // Update auction with new bid
    setActiveAuctions(prev =>
      prev.map(auction =>
        auction.id === selectedAuction.id
          ? {
              ...auction,
              currentBid: bid,
              bidCount: auction.bidCount + 1,
              reserveMet: bid >= auction.reservePrice,
              highestBidder: 'You'
            }
          : auction
      )
    );

    // Track user's bid
    setUserBids(prev => ({ ...prev, [selectedAuction.id]: bid }));

    setShowBidModal(false);
    setBidAmount('');
    setSelectedAuction(null);

    // Show success message
    alert('🎉 Bid placed successfully! You\'re currently the highest bidder.');
  };

  const handleCreateAuction = () => {
    const auction: Auction = {
      id: Date.now(),
      title: newAuction.title,
      description: newAuction.description,
      category: newAuction.category,
      currentBid: parseFloat(newAuction.startingBid),
      reservePrice: parseFloat(newAuction.reservePrice),
      reserveMet: false,
      startingBid: parseFloat(newAuction.startingBid),
      bidCount: 0,
      timeRemaining: parseInt(newAuction.duration) * 3600,
      seller: 'You',
      imageUrl: `https://via.placeholder.com/400x300/ec4899/ffffff?text=${encodeURIComponent(newAuction.title)}`,
    };

    setActiveAuctions(prev => [...prev, auction]);
    setShowCreateModal(false);
    setNewAuction({
      title: '',
      description: '',
      category: '',
      startingBid: '',
      reservePrice: '',
      duration: '24',
    });

    alert('✅ Auction created successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 px-4 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ⚡ Instant Auctions with Reserve
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Buy and sell businesses, assets, and services with transparent reserve pricing
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition"
          >
            🚀 Start Your Auction
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {['All', 'Business Assets', 'SaaS Business', 'Digital Products', 'Services'].map(category => (
            <button
              key={category}
              className="px-6 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-pink-600 hover:bg-pink-50 transition font-semibold"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active Auctions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activeAuctions.map(auction => (
            <div key={auction.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src={auction.imageUrl} alt={auction.title} className="w-full h-48 object-cover" />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
                    {auction.category}
                  </span>
                  <span className="text-xs text-gray-600">
                    ⏰ {formatTime(auction.timeRemaining)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{auction.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{auction.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Bid:</span>
                    <span className="text-2xl font-bold text-pink-600">
                      ${auction.currentBid.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Reserve:</span>
                    <span className={`text-sm font-semibold ${auction.reserveMet ? 'text-green-600' : 'text-orange-600'}`}>
                      {auction.reserveMet ? (
                        <>✅ Met (${auction.reservePrice.toLocaleString()})</>
                      ) : (
                        <>🔒 Not Met (${auction.reservePrice.toLocaleString()})</>
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{auction.bidCount} bids</span>
                    <span>By: {auction.seller}</span>
                  </div>
                </div>

                {userBids[auction.id] && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                    <span className="font-semibold text-green-700">
                      Your bid: ${userBids[auction.id].toLocaleString()}
                      {auction.highestBidder === 'You' ? ' 🏆 Winning!' : ' (Outbid)'}
                    </span>
                  </div>
                )}

                <button
                  onClick={() => {
                    setSelectedAuction(auction);
                    setBidAmount((auction.currentBid + 50).toString());
                    setShowBidModal(true);
                  }}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
                >
                  Place Bid 💰
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How Instant Auctions Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Set Your Reserve</h3>
              <p className="text-gray-600">
                Choose a minimum price you'll accept. It's hidden until met, protecting your bottom line.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Bidding</h3>
              <p className="text-gray-600">
                Buyers place bids in real-time. Watch your auction heat up as bids compete.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Transparent Close</h3>
              <p className="text-gray-600">
                When reserve is met, highest bidder wins. Escrow protection for both parties.
              </p>
            </div>
          </div>
        </div>

        {/* Bid Modal */}
        {showBidModal && selectedAuction && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8">
              <h2 className="text-2xl font-bold mb-4">Place Your Bid</h2>
              <p className="text-gray-600 mb-6">{selectedAuction.title}</p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Bid:</span>
                  <span className="font-bold">${selectedAuction.currentBid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Minimum Bid:</span>
                  <span className="font-bold text-pink-600">${(selectedAuction.currentBid + 50).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reserve Status:</span>
                  <span className={selectedAuction.reserveMet ? 'text-green-600 font-semibold' : 'text-orange-600 font-semibold'}>
                    {selectedAuction.reserveMet ? '✅ Met' : '🔒 Not Met'}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Your Bid Amount ($)</label>
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent text-lg font-bold"
                  placeholder={`Minimum: $${selectedAuction.currentBid + 50}`}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowBidModal(false);
                    setSelectedAuction(null);
                    setBidAmount('');
                  }}
                  className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePlaceBid}
                  className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition"
                >
                  Confirm Bid 🚀
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Create Auction Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-8 my-8">
              <h2 className="text-3xl font-bold mb-6">Create New Auction</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Auction Title *</label>
                  <input
                    type="text"
                    value={newAuction.title}
                    onChange={(e) => setNewAuction({...newAuction, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600"
                    placeholder="e.g., Profitable SaaS Business"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Description *</label>
                  <textarea
                    value={newAuction.description}
                    onChange={(e) => setNewAuction({...newAuction, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600"
                    placeholder="Describe what you're auctioning..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Category *</label>
                  <select
                    value={newAuction.category}
                    onChange={(e) => setNewAuction({...newAuction, category: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600"
                  >
                    <option value="">Select category...</option>
                    <option value="Business Assets">Business Assets</option>
                    <option value="SaaS Business">SaaS Business</option>
                    <option value="Digital Products">Digital Products</option>
                    <option value="Services">Services</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Starting Bid ($) *</label>
                    <input
                      type="number"
                      value={newAuction.startingBid}
                      onChange={(e) => setNewAuction({...newAuction, startingBid: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600"
                      placeholder="1000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Reserve Price ($) *</label>
                    <input
                      type="number"
                      value={newAuction.reservePrice}
                      onChange={(e) => setNewAuction({...newAuction, reservePrice: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600"
                      placeholder="5000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Duration (hours) *</label>
                  <select
                    value={newAuction.duration}
                    onChange={(e) => setNewAuction({...newAuction, duration: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600"
                  >
                    <option value="1">1 hour</option>
                    <option value="6">6 hours</option>
                    <option value="12">12 hours</option>
                    <option value="24">24 hours</option>
                    <option value="48">48 hours</option>
                    <option value="72">72 hours</option>
                  </select>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Reserve Price Note:</strong> Your reserve price is hidden from bidders until met. 
                    This protects your minimum acceptable price while encouraging competitive bidding.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateAuction}
                    disabled={!newAuction.title || !newAuction.category || !newAuction.startingBid || !newAuction.reservePrice}
                    className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
                  >
                    Create Auction 🚀
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/marketplace" className="text-pink-600 hover:text-pink-700 font-semibold">
            ← Back to Marketplace
          </Link>
        </div>
      </div>
    </div>
  );
}
