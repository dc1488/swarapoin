'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  BarChart3,
  ShoppingBag,
  Smartphone,
  Database,
  Code,
  Trophy,
  RefreshCw,
  Store,
  CreditCard,
  Globe,
  Layers,
  ChevronRight
} from 'lucide-react'
import { useState } from 'react'

export default function SwaraPoin() {
  const [userBalance, setUserBalance] = useState(1250)
  const [selectedReward, setSelectedReward] = useState<string | null>(null)
  const [showRewardDetails, setShowRewardDetails] = useState(false)
  const handleRequestDemo = () => {
    window.open('mailto:support@swarapoin.com?subject=Request%20Demo&body=Hi%20SwaraPoin%20team%2C%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20demo%20of%20your%20loyalty%20platform.%0D%0A%0D%0APlease%20contact%20me%20to%20schedule%20a%20session.', '_blank')
  }

  const handleScrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactSales = () => {
    window.open('mailto:support@swarapoin.com?subject=Inquiry&body=Hi%20SwaraPoin%20team%2C%0D%0A%0D%0AI%27m%20interested%20in%20learning%20more%20about%20SwaraPoin.', '_blank')
  }

  const handleRedeemPoints = () => {
    if (userBalance > 0) {
      setSelectedReward('redeem')
      setShowRewardDetails(true)
    }
  }

  const handleEarnPoints = () => {
    setUserBalance(prev => prev + 50)
    setSelectedReward('earn')
    setShowRewardDetails(true)
  }

  const handleRewardItemClick = (reward: string, points: number) => {
    setSelectedReward(reward)
    if (points <= userBalance) {
      setUserBalance(prev => prev - points)
      alert(`Successfully redeemed ${reward} for ${points} points!\n\nNew balance: ${userBalance - points} points`)
    } else {
      alert(`Not enough points!\n\nRequired: ${points} points\nYour balance: ${userBalance} points`)
    }
  }

  const handleGetStarted = () => {
    window.open('mailto:support@swarapoin.com?subject=Get%20Started%20with%20SwaraPoin&body=Hi%20SwaraPoin%20team%2C%0D%0A%0D%0AI%27m%20ready%20to%20get%20started%20with%20SwaraPoin!', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Toast Notification */}
      {showRewardDetails && (
        <div className="fixed top-20 right-4 z-50 bg-white border-2 border-amber-500 rounded-lg shadow-xl p-4 max-w-sm animate-in slide-in-from-right">
          <div className="flex items-start gap-3">
            <Trophy className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">
                {selectedReward === 'earn' ? 'Points Earned!' : 'Redemption Options'}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {selectedReward === 'earn'
                  ? `+50 points added to your balance!
\nNew balance: ${userBalance} points`
                  : `Your current balance: ${userBalance} points
\nSelect a reward to redeem.`}
              </p>
              <Button
                size="sm"
                className="mt-2 bg-amber-500 hover:bg-amber-600"
                onClick={() => setShowRewardDetails(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-amber-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img
                src="/swarapoin-logo.png"
                alt="SwaraPoin Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
                Benefits
              </a>
              <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">
                Use Cases
              </a>
              <Button
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                onClick={handleRequestDemo}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                One Unified Loyalty Platform for Every Transaction
              </h1>
              <p className="text-xl text-gray-600">
                Collect, manage, and redeem loyalty points across devices, channels, and systems—seamlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-6 text-lg"
                  onClick={handleRequestDemo}
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg"
                  onClick={handleScrollToHowItWorks}
                >
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Smartphone className="h-8 w-8 text-amber-600" />
                        <span className="font-semibold text-gray-900">Mobile</span>
                      </div>
                      <div className="text-sm text-gray-600">Points wallet</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Store className="h-8 w-8 text-orange-600" />
                        <span className="font-semibold text-gray-900">POS</span>
                      </div>
                      <div className="text-sm text-gray-600">Integration</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart3 className="h-8 w-8 text-amber-700" />
                        <span className="font-semibold text-gray-900">Analytics</span>
                      </div>
                      <div className="text-sm text-gray-600">Real-time insights</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Database className="h-8 w-8 text-orange-700" />
                        <span className="font-semibold text-gray-900">Ledger</span>
                      </div>
                      <div className="text-sm text-gray-600">Unified balance</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About SwaraPoin
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            SwaraPoin is a centralized loyalty engine that unifies reward programs from multiple channels
            into one seamless ecosystem. It enables businesses to reward every transaction, increase engagement,
            and gain actionable insights.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build a powerful loyalty program
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Unified Points Engine
                </h3>
                <p className="text-gray-600">
                  Single point balance across all channels—online, offline, and mobile.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Multi-Channel Integration
                </h3>
                <p className="text-gray-600">
                  Works with POS systems, IoT devices, and digital platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Flexible Rules & Tiering
                </h3>
                <p className="text-gray-600">
                  Custom loyalty logic and reward structures for any business model.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Reward Marketplace
                </h3>
                <p className="text-gray-600">
                  Exchange points for digital rewards and partner balances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Open API Architecture
                </h3>
                <p className="text-gray-600">
                  Easy integration with partner systems through robust APIs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Analytics & Dashboard
                </h3>
                <p className="text-gray-600">
                  Real-time insights into transactions and user behavior.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              A simple, 5-step process to loyalty excellence
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Transaction",
                description: "Customer makes a purchase through any channel",
                icon: ShoppingBag
              },
              {
                step: "2",
                title: "Data Transfer",
                description: "Transaction data is sent to SwaraPoin",
                icon: RefreshCw
              },
              {
                step: "3",
                title: "Calculate",
                description: "Points are calculated based on your rules",
                icon: Zap
              },
              {
                step: "4",
                title: "Store",
                description: "Points are stored in unified ledger",
                icon: Database
              },
              {
                step: "5",
                title: "Redeem",
                description: "Users redeem points for rewards",
                icon: Trophy
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto">
                      <item.icon className="h-6 w-6 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                {index < 4 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 h-6 w-6 text-amber-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why SwaraPoin?
            </h2>
            <p className="text-xl text-gray-600">
              Drive growth with powerful loyalty benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Increase User Loyalty and Retention
                  </h3>
                  <p className="text-gray-600">
                    Keep customers coming back with rewarding loyalty programs that create lasting relationships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Encourage Repeat Transactions
                  </h3>
                  <p className="text-gray-600">
                    Motivate customers to make more purchases through compelling point rewards and tier benefits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Enable Cross-Partner Promotions
                  </h3>
                  <p className="text-gray-600">
                    Create collaborative campaigns with partners to expand reach and increase customer value.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Centralize Loyalty Data
                  </h3>
                  <p className="text-gray-600">
                    Get a complete view of customer behavior across all touchpoints with unified data management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Scalable for Enterprise
                  </h3>
                  <p className="text-gray-600">
                    Built to handle millions of transactions—grow your loyalty program without limits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Fast & Easy Integration
                  </h3>
                  <p className="text-gray-600">
                    Get started quickly with simple APIs and comprehensive integration support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Interface Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Platform Interface Preview
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools for admins and seamless experience for users
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Admin Dashboard */}
            <Card className="border-2 border-amber-100 shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Admin Dashboard
                  </h3>
                  <p className="text-sm text-gray-600">
                    Real-time analytics and program management
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Points Issued</span>
                    <span className="font-bold text-amber-700">2.4M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Users</span>
                    <span className="font-bold text-amber-700">156K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Redemption Rate</span>
                    <span className="font-bold text-amber-700">42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Partner Revenue</span>
                    <span className="font-bold text-amber-700">$1.8M</span>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg flex items-end p-2 gap-1">
                    {[40, 65, 50, 80, 55, 70, 90].map((h, i) => (
                      <div key={i} className="flex-1 bg-amber-600 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reward Catalog */}
            <Card className="border-2 border-amber-100 shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Reward Catalog
                  </h3>
                  <p className="text-sm text-gray-600">
                    Manage rewards and partner offerings
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 space-y-3">
                  <div
                    className="flex items-center gap-3 bg-white p-2 rounded cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleRewardItemClick('Voucher $10', 500)}
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center">
                      <ShoppingBag className="h-5 w-5 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">Voucher $10</div>
                      <div className="text-xs text-gray-600">500 pts</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <div
                    className="flex items-center gap-3 bg-white p-2 rounded cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleRewardItemClick('Mobile Credit', 300)}
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-orange-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">Mobile Credit</div>
                      <div className="text-xs text-gray-600">300 pts</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <div
                    className="flex items-center gap-3 bg-white p-2 rounded cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleRewardItemClick('Exclusive Gift', 1000)}
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">Exclusive Gift</div>
                      <div className="text-xs text-gray-600">1000 pts</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <div
                    className="flex items-center gap-3 bg-white p-2 rounded cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleRewardItemClick('Cashback', 200)}
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
                      <RefreshCw className="h-5 w-5 text-orange-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">Cashback</div>
                      <div className="text-xs text-gray-600">200 pts</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Experience */}
            <Card className="border-2 border-amber-100 shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mobile Experience
                  </h3>
                  <p className="text-sm text-gray-600">
                    User-friendly app for point management
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 space-y-3">
                  <div className="bg-white rounded-lg p-4 text-center border-b-4 border-amber-500">
                    <div className="text-sm text-gray-600 mb-1">Your Balance</div>
                    <div className="text-3xl font-bold text-amber-700">{userBalance.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      className="bg-amber-500 hover:bg-amber-600 text-xs py-2"
                      onClick={handleRedeemPoints}
                    >
                      Redeem
                    </Button>
                    <Button
                      className="bg-orange-500 hover:bg-orange-600 text-xs py-2"
                      onClick={handleEarnPoints}
                    >
                      Earn
                    </Button>
                  </div>
                  <div className="text-xs text-gray-600 text-center">
                    Recent Activity
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Purchase at Store</span>
                      <span className="text-green-600 font-semibold">+50 pts</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Redeem Voucher</span>
                      <span className="text-red-600 font-semibold">-500 pts</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Solutions for every business type
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Retail & Merchant Networks
                </h3>
                <p className="text-sm text-gray-600">
                  Unified loyalty across multiple store locations and franchises
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Digital Payment Ecosystems
                </h3>
                <p className="text-sm text-gray-600">
                  Reward-based incentives for digital wallet users
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Platform-based Businesses
                </h3>
                <p className="text-sm text-gray-600">
                  Loyalty programs for marketplace and platform users
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Multi-channel Sales
                </h3>
                <p className="text-sm text-gray-600">
                  Seamless points across online, offline, and mobile
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Build Loyalty Without Complexity
          </h2>
          <p className="text-xl text-amber-50">
            Start transforming customer engagement today
          </p>
          <Button
            size="lg"
            className="bg-white text-amber-700 hover:bg-amber-50 px-10 py-6 text-lg font-bold"
            onClick={handleGetStarted}
          >
            Get Started with SwaraPoin
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/swarapoin-logo.png"
                  alt="SwaraPoin Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <p className="text-sm text-gray-400">
                A unified loyalty platform that connects merchants, partners, and users through seamless point management.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
              <Button
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                onClick={handleContactSales}
              >
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 SwaraPoin. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
