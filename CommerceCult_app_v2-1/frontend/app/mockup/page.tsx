'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface BulkProduct {
  id: string;
  productName: string;
  productDescription: string;
  mockupType: string;
  style: string;
  status: 'pending' | 'processing' | 'completed';
  result?: any;
}

export default function MockupGeneratorPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [mode, setMode] = useState<'single' | 'bulk'>('single');
  const [formData, setFormData] = useState({
    mockupType: '',
    productName: '',
    productDescription: '',
    brandColors: '',
    targetAudience: '',
    style: '',
    deviceType: '',
    backgroundStyle: '',
    includeText: true,
    customText: '',
  });
  const [mockupResult, setMockupResult] = useState<any>(null);
  const [bulkProducts, setBulkProducts] = useState<BulkProduct[]>([]);
  const [bulkFile, setBulkFile] = useState<File | null>(null);
  const [csvPreview, setCsvPreview] = useState<string[][]>([]);

  const mockupTypes = [
    { value: 'product-packaging', label: '📦 Product Packaging', description: 'Bottles, boxes, bags, labels' },
    { value: 'website', label: '🌐 Website Mockup', description: 'Desktop, mobile, tablet views' },
    { value: 'app', label: '📱 Mobile App', description: 'iOS and Android screens' },
    { value: 'book-cover', label: '📚 Book Cover', description: 'Ebook and print covers' },
    { value: 'tshirt', label: '👕 T-Shirt Design', description: 'Apparel mockups' },
    { value: 'billboard', label: '🏙️ Billboard/Signage', description: 'Outdoor advertising' },
    { value: 'business-card', label: '💼 Business Card', description: 'Professional cards' },
    { value: 'social-media', label: '📸 Social Media Post', description: 'Instagram, Facebook, Twitter' },
  ];

  const styleOptions = [
    { value: 'realistic', label: 'Realistic', emoji: '📸' },
    { value: 'minimalist', label: 'Minimalist', emoji: '⚪' },
    { value: 'vintage', label: 'Vintage', emoji: '📜' },
    { value: 'modern', label: 'Modern', emoji: '✨' },
    { value: 'artistic', label: 'Artistic', emoji: '🎨' },
    { value: 'tech', label: 'Tech/Futuristic', emoji: '🚀' },
  ];

  const deviceTypes = [
    { value: 'iphone', label: 'iPhone' },
    { value: 'android', label: 'Android' },
    { value: 'macbook', label: 'MacBook' },
    { value: 'imac', label: 'iMac' },
    { value: 'ipad', label: 'iPad' },
    { value: 'generic', label: 'Generic Device' },
  ];

  const backgroundStyles = [
    { value: 'white', label: 'Clean White' },
    { value: 'gradient', label: 'Gradient' },
    { value: 'lifestyle', label: 'Lifestyle Scene' },
    { value: 'texture', label: 'Textured' },
    { value: 'transparent', label: 'Transparent' },
    { value: 'custom', label: 'Custom Background' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const generateMockup = () => {
    setStep(2);
    
    setTimeout(() => {
      const result = {
        mockupType: formData.mockupType,
        productName: formData.productName,
        mainImage: {
          url: `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(formData.productName + ' Mockup')}`,
          resolution: '4K (3840x2160)',
          format: 'PNG with transparency'
        },
        variations: [
          {
            name: 'Front View',
            url: `https://via.placeholder.com/600x600/8b5cf6/ffffff?text=Front+View`,
            angle: '0°'
          },
          {
            name: 'Angled View',
            url: `https://via.placeholder.com/600x600/a78bfa/ffffff?text=Angled+View`,
            angle: '45°'
          },
          {
            name: 'Side View',
            url: `https://via.placeholder.com/600x600/c4b5fd/ffffff?text=Side+View`,
            angle: '90°'
          },
          {
            name: 'Top View',
            url: `https://via.placeholder.com/600x600/ddd6fe/ffffff?text=Top+View`,
            angle: 'Top'
          }
        ],
        specifications: {
          dimensions: '3840 x 2160 px',
          colorSpace: 'RGB',
          dpi: '300',
          fileSize: '~2.5 MB per mockup',
          formats: ['PNG', 'JPG', 'PSD', 'AI']
        },
        usageRights: {
          commercial: true,
          editingAllowed: true,
          redistributionAllowed: false,
          attribution: 'Not required'
        },
        designDetails: {
          style: formData.style,
          background: formData.backgroundStyle,
          deviceType: formData.deviceType || 'N/A',
          customText: formData.customText || formData.productName
        }
      };
      
      setMockupResult(result);
      setStep(3);
    }, 3000);
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      mockupType: '',
      productName: '',
      productDescription: '',
      brandColors: '',
      targetAudience: '',
      style: '',
      deviceType: '',
      backgroundStyle: '',
      includeText: true,
      customText: '',
    });
    setMockupResult(null);
    setBulkProducts([]);
    setBulkFile(null);
    setCsvPreview([]);
  };

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🎨 AI Product Mockup Generator
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Create stunning product mockups in seconds with AI-powered design
          </p>

          {/* Mode Toggle */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setMode('single')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                mode === 'single'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📄 Single Product
            </button>
            <button
              onClick={() => setMode('bulk')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                mode === 'bulk'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📦 Bulk Upload
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className={`px-4 py-2 rounded-full ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              1. {mode === 'bulk' ? 'Upload' : 'Design Details'}
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-4 py-2 rounded-full ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              2. Generating
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-4 py-2 rounded-full ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              3. Download
            </span>
          </div>
        </div>us: 'pending' as const
        }));

      setBulkProducts(products);
    };
    reader.readAsText(file);
  };

  const processBulkMockups = async () => {
    setStep(2);

    // Process each product sequentially
    for (let i = 0; i < bulkProducts.length; i++) {
      setBulkProducts(prev => 
        prev.map((p, idx) => 
          idx === i ? { ...p, status: 'processing' } : p
        )
      );

      // Simulate mockup generation (in production, this would be an API call)
      await new Promise(resolve => setTimeout(resolve, 1500));

      const result = {
        mockupType: bulkProducts[i].mockupType,
        productName: bulkProducts[i].productName,
        mainImage: {
          url: `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(bulkProducts[i].productName)}`,
          resolution: '4K (3840x2160)',
          format: 'PNG with transparency'
        },
        variations: [
          {
            name: 'Front View',
            url: `https://via.placeholder.com/600x600/8b5cf6/ffffff?text=${encodeURIComponent(bulkProducts[i].productName)}+Front`,
            angle: '0°'
          },
          {
            name: 'Angled View',
            url: `https://via.placeholder.com/600x600/a78bfa/ffffff?text=${encodeURIComponent(bulkProducts[i].productName)}+Angled`,
            angle: '45°'
          }
        ]
      };

      setBulkProducts(prev => 
        prev.map((p, idx) => 
          idx === i ? { ...p, status: 'completed', result } : p
        )
      );
    }

    setStep(3);
  };

  const downloadBulkMockups = () => {
    alert('Downloading all mockups as a ZIP file...\n\nIn production, this would download a ZIP containing all generated mockup images and variations.');
  };

  const downloadCSVTemplate = () => {
    const template = 'Product Name,Description,Mockup Type,Style\n' +
                     'EcoBottle Pro,"Sustainable water bottle",product-packaging,realistic\n' +
                     'TechApp,"Mobile productivity app",app,modern\n' +
                     'Urban Streetwear,"Trendy t-shirt design",tshirt,artistic\n';
    
    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mockup-bulk-upload-template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
        {/* Step 1: Bulk Upload */}
        {step === 1 && mode === 'bulk' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📦 Bulk Product Upload</h2>

            {/* Instructions */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How to Upload Multiple Products</h3>
              <ol className="list-decimal list-inside space-y-2 text-blue-900">
                <li>Download our CSV template below</li>
                <li>Fill in your products (Name, Description, Mockup Type, Style)</li>
                <li>Upload the completed CSV file</li>
                <li>Review the preview and generate all mockups at once</li>
              </ol>
            </div>

            {/* Download Template */}
            <div className="mb-6">
              <button
                onClick={downloadCSVTemplate}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                <span>📥</span>
                Download CSV Template
              </button>
              <p className="text-sm text-gray-600 mt-2">
                Template includes: Product Name, Description, Mockup Type, Style
              </p>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Upload Your CSV File
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-600 transition">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="csv-upload"
                />
                <label htmlFor="csv-upload" className="cursor-pointer">
                  <div className="text-5xl mb-4">📄</div>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    {bulkFile ? bulkFile.name : 'Click to upload CSV file'}
                  </p>
                  <p className="text-sm text-gray-500">
                    or drag and drop your CSV file here
                  </p>
                </label>
              </div>
            </div>

            {/* CSV Preview */}
            {csvPreview.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Preview ({bulkProducts.length} products detected)</h3>
                <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        {csvPreview[0].map((header, idx) => (
                          <th key={idx} className="text-left py-2 px-3 font-semibold">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {csvPreview.slice(1).map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-200">
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className="py-2 px-3">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {csvPreview.length > 6 && (
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Showing first 5 rows. Total: {bulkProducts.length} products
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Generate Button */}
            {bulkProducts.length > 0 && (
              <button
                onClick={processBulkMockups}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition"
              >
                🚀 Generate {bulkProducts.length} Mockups
              </button>
            )}

            {/* Supported Types Info */}
            <div className="mt-6 text-sm text-gray-600">
              <p className="font-semibold mb-2">Supported Mockup Types:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <span>• product-packaging</span>
                <span>• website</span>
                <span>• app</span>
                <span>• book-cover</span>
                <span>• tshirt</span>
                <span>• billboard</span>
                <span>• business-card</span>
                <span>• social-media</span>
              </div>
              <p className="font-semibold mt-3 mb-2">Supported Styles:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <span>• realistic</span>
                <span>• minimalist</span>
                <span>• vintage</span>
                <span>• modern</span>
                <span>• artistic</span>
                <span>• tech</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Form */}
        {step === 1 && mode === 'single' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Design Your Mockup</h2>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🎨 AI Product Mockup Generator
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Create stunning product mockups in seconds with AI-powered design
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className={`px-4 py-2 rounded-full ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              1. Design Details
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-4 py-2 rounded-full ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              2. Generating
            </span>
            <span className="text-gray-400">→</span>
            <span className={`px-4 py-2 rounded-full ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              3. Download
            </span>
          </div>
        </div>

        {/* Step 1: Form */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Design Your Mockup</h2>
            
            <div className="space-y-6">
              {/* Mockup Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Mockup Type *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {mockupTypes.map(type => (
                    <button
                      key={type.value}
                      onClick={() => setFormData(prev => ({ ...prev, mockupType: type.value }))}
                      className={`p-4 border-2 rounded-lg text-left transition ${
                        formData.mockupType === type.value
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">{type.label.split(' ')[0]}</div>
                      <div className="font-semibold text-sm">{type.label.split(' ').slice(1).join(' ')}</div>
                      <div className="text-xs text-gray-500 mt-1">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="e.g., EcoBottle Pro, TechApp, Urban Streetwear"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              {/* Product Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Description
                </label>
                <textarea
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                  placeholder="Describe your product, its features, and what makes it unique..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              {/* Style */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Visual Style *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {styleOptions.map(style => (
                    <button
                      key={style.value}
                      onClick={() => setFormData(prev => ({ ...prev, style: style.value }))}
                      className={`p-3 border-2 rounded-lg transition ${
                        formData.style === style.value
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">{style.emoji}</div>
                      <div className="text-xs font-semibold">{style.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Device Type (for digital mockups) */}
              {(formData.mockupType === 'website' || formData.mockupType === 'app') && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Device Type
                  </label>
                  <select
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select device...</option>
                    {deviceTypes.map(device => (
                      <option key={device.value} value={device.value}>{device.label}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Background Style */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Background Style
                </label>
                <select
                  name="backgroundStyle"
                  value={formData.backgroundStyle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="">Select background...</option>
                  {backgroundStyles.map(bg => (
                    <option key={bg.value} value={bg.value}>{bg.label}</option>
                  ))}
                </select>
              </div>

              {/* Brand Colors */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Brand Colors (optional)
                </label>
                <input
                  type="text"
                  name="brandColors"
                  value={formData.brandColors}
                  onChange={handleInputChange}
                  placeholder="e.g., #6366F1, #8B5CF6 or Navy Blue, Gold"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              {/* Custom Text */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Custom Text/Tagline (optional)
                </label>
                <input
                  type="text"
                  name="customText"
                  value={formData.customText}
                  onChange={handleInputChange}
                  placeholder="e.g., Innovation Meets Design"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={generateMockup}
                disabled={!formData.mockupType || !formData.productName || !formData.style}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🎨 Generate Mockup
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Generating */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-purple-600 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {mode === 'bulk' ? `Creating ${bulkProducts.length} Mockups...` : 'Creating Your Mockup...'}
            </h2>
            <p className="text-gray-600 mb-8">
              {mode === 'bulk' 
                ? 'Processing your products in batch. This may take a few minutes...'
                : 'Our AI is designing professional mockups with multiple angles and variations'
              }
            </p>

            {mode === 'bulk' ? (
              <div className="space-y-3 max-w-2xl mx-auto">
                {bulkProducts.map((product, idx) => (
                  <div key={product.id} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="flex-shrink-0">
                      {product.status === 'completed' && (
                        <span className="text-2xl">✅</span>
                      )}
                      {product.status === 'processing' && (
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                      )}
                      {product.status === 'pending' && (
                        <span className="text-2xl text-gray-400">⏳</span>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm">{product.productName}</div>
                      <div className="text-xs text-gray-500 capitalize">{product.mockupType.replace('-', ' ')}</div>
                    </div>
                    <div className="text-xs font-semibold">
                      {product.status === 'completed' && <span className="text-green-600">Done</span>}
                      {product.status === 'processing' && <span className="text-purple-600">Processing...</span>}
                      {product.status === 'pending' && <span className="text-gray-400">Waiting...</span>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                  Analyzing product specifications...
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-100"></div>
                  Generating 4K resolution mockups...
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-200"></div>
                  Creating multiple viewing angles...
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-300"></div>
                  Applying style and brand colors...
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Bulk Results */}
        {step === 3 && mode === 'bulk' && bulkProducts.length > 0 && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  ✨ All {bulkProducts.length} Mockups Ready!
                </h2>
                <div className="flex gap-3">
                  <button
                    onClick={downloadBulkMockups}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    📦 Download All (ZIP)
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                  >
                    Create New
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bulkProducts.map((product) => (
                  <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
                    <div className="mb-3">
                      <img
                        src={product.result?.mainImage.url}
                        alt={product.productName}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{product.productName}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.productDescription}</p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">
                        {product.mockupType.replace('-', ' ')}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded capitalize">
                        {product.style}
                      </span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition">
                        📥 Download
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-sm rounded hover:bg-gray-50 transition">
                        👁️ View
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">📊 Batch Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600">{bulkProducts.length}</div>
                    <div className="text-sm text-gray-600">Total Mockups</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">{bulkProducts.filter(p => p.status === 'completed').length}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{bulkProducts.length * 2}</div>
                    <div className="text-sm text-gray-600">Variations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600">4K</div>
                    <div className="text-sm text-gray-600">Resolution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Single Results */}
        {step === 3 && mode === 'single' && mockupResult && (
          <div className="space-y-6">
            {/* Main Mockup */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  ✨ Your Mockup is Ready!
                </h2>
                <button
                  onClick={resetForm}
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                >
                  Create New
                </button>
              </div>

              <div className="mb-8">
                <img
                  src={mockupResult.mainImage.url}
                  alt="Main Mockup"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="mt-4 flex flex-wrap gap-3 justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                    📥 Download High-Res (PNG)
                  </button>
                  <button className="px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition">
                    💾 Save as PSD
                  </button>
                  <button className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                    🎨 Edit in Designer
                  </button>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">📋 Mockup Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Dimensions</div>
                    <div className="font-semibold">{mockupResult.specifications.dimensions}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Resolution</div>
                    <div className="font-semibold">{mockupResult.specifications.dpi} DPI</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Color Space</div>
                    <div className="font-semibold">{mockupResult.specifications.colorSpace}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Formats</div>
                    <div className="font-semibold">{mockupResult.specifications.formats.join(', ')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">🔄 Multiple Angles & Variations</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mockupResult.variations.map((variation: any, index: number) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-purple-600 transition">
                    <img src={variation.url} alt={variation.name} className="w-full" />
                    <div className="p-3 bg-gray-50">
                      <div className="font-semibold text-sm">{variation.name}</div>
                      <div className="text-xs text-gray-600">{variation.angle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Rights */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⚖️ Usage Rights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="font-semibold">Commercial Use</div>
                    <div className="text-sm text-gray-600">Use in your business, products, and marketing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="font-semibold">Editing Allowed</div>
                    <div className="text-sm text-gray-600">Modify, customize, and adapt as needed</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="font-semibold">No Attribution Required</div>
                    <div className="text-sm text-gray-600">Use freely without crediting CommerceCult</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <div className="font-semibold">No Redistribution</div>
                    <div className="text-sm text-gray-600">Cannot resell or redistribute mockups as templates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/dashboard" className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
