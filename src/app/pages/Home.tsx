"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Bot, Shield, Zap, Users, Settings, BarChart3, MessageSquare, Star, Menu, X, ChevronRight, Check } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [botSettings, setBotSettings] = useState({
    prefix: '!',
    welcomeMessage: 'Selamat datang di server, Sensei! 💙',
    moderation: true,
    autoRole: false,
    musicEnabled: true,
    language: 'id'
  });

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Chat Interaktif',
      description: 'Plana siap mengobrol dan membantu Sensei kapan saja!'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Moderasi Otomatis',
      description: 'Sistem keamanan canggih untuk menjaga server tetap aman'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performa Tinggi',
      description: 'Respon cepat dan efisien untuk pengalaman terbaik'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Server',
      description: 'Dapat digunakan di berbagai server sekaligus'
    }
  ];

  const stats = [
    { label: 'Server Aktif', value: '1,234+' },
    { label: 'Pengguna', value: '50K+' },
    { label: 'Perintah', value: '100+' },
    { label: 'Uptime', value: '99.9%' }
  ];

  const handleSettingChange = (key: any, value: any) => {
    setBotSettings(prev => ({ ...prev, [key]: value }));
  };

  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Plana Bot
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#stats" className="text-gray-700 hover:text-blue-600 transition">Stats</a>
              <button 
                onClick={() => document.location.href = "/dashboard"}
                // onClick={() => setActiveTab('dashboard')}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg transition transform hover:scale-105"
              >
                Dashboard
              </button>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100">
            <div className="px-4 py-3 space-y-3">
              <a href="#features" className="block text-gray-700">Features</a>
              <a href="#stats" className="block text-gray-700">Stats</a>
              <button 
                onClick={() => {
                  setActiveTab('dashboard');
                  setMobileMenuOpen(false);
                }}
                className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full"
              >
                Dashboard
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-semibold">
                🌟 Blue Archive Official Bot
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hai Sensei!
                </span>
                <br />
                <span className="text-gray-800">Plana di sini~ 💙</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Bot Discord multifungsi dengan karakter Plana dari Blue Archive. 
                Siap membantu mengelola server dan menghibur Sensei!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2">
                  Add to Discord
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold hover:shadow-lg transition border-2 border-gray-200"
                >
                  View Dashboard
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <Image src={'/plana.webp'} alt="Plana" width={300} height={300} />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600">Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Online
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600">Latency</span>
                    <span className="text-sm font-semibold text-blue-600">42ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-600">
              Semua yang Sensei butuhkan dalam satu bot
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Siap bergabung dengan Plana?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Tambahkan Plana ke server Discord Sensei sekarang!
            </p>
            <button className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
              Add to Discord Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">Plana Dashboard</h1>
                <p className="text-xs text-gray-500">Control Panel</p>
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('landing')}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Servers</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">1,234</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">50,432</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Commands Run</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">245K</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Uptime</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">99.9%</p>
              </div>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-pink-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6 text-gray-700" />
              <h2 className="text-xl font-bold text-gray-800">Bot Settings</h2>
            </div>
            <p className="text-sm text-gray-600 mt-1">Kelola pengaturan bot tanpa edit source code</p>
          </div>

          <div className="p-6 space-y-6">
            {/* Prefix Setting */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Command Prefix
                </label>
                <p className="text-xs text-gray-500">Prefix untuk memanggil command bot</p>
              </div>
              <input 
                type="text"
                value={botSettings.prefix}
                onChange={(e) => handleSettingChange('prefix', e.target.value)}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Welcome Message */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Welcome Message
              </label>
              <p className="text-xs text-gray-500 mb-3">Pesan sambutan untuk member baru</p>
              <textarea 
                value={botSettings.welcomeMessage}
                onChange={(e) => handleSettingChange('welcomeMessage', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Toggle Settings */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Auto Moderation</p>
                  <p className="text-xs text-gray-500">Moderasi otomatis untuk spam dan toxic</p>
                </div>
                <button
                  onClick={() => handleSettingChange('moderation', !botSettings.moderation)}
                  className={`relative w-12 h-6 rounded-full transition ${
                    botSettings.moderation ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                    botSettings.moderation ? 'translate-x-6' : ''
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Auto Role</p>
                  <p className="text-xs text-gray-500">Berikan role otomatis saat member join</p>
                </div>
                <button
                  onClick={() => handleSettingChange('autoRole', !botSettings.autoRole)}
                  className={`relative w-12 h-6 rounded-full transition ${
                    botSettings.autoRole ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                    botSettings.autoRole ? 'translate-x-6' : ''
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Music Module</p>
                  <p className="text-xs text-gray-500">Aktifkan fitur musik</p>
                </div>
                <button
                  onClick={() => handleSettingChange('musicEnabled', !botSettings.musicEnabled)}
                  className={`relative w-12 h-6 rounded-full transition ${
                    botSettings.musicEnabled ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                    botSettings.musicEnabled ? 'translate-x-6' : ''
                  }`} />
                </button>
              </div>
            </div>

            {/* Language Setting */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Language
              </label>
              <p className="text-xs text-gray-500 mb-3">Bahasa yang digunakan bot</p>
              <select 
                value={botSettings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="id">Bahasa Indonesia</option>
                <option value="en">English</option>
                <option value="jp">日本語</option>
              </select>
            </div>

            {/* Save Button */}
            <div className="flex gap-3 pt-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
                <Check className="w-5 h-5" />
                Save Changes
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return activeTab === 'landing' ? renderLanding() : renderDashboard();
}