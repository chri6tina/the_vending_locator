'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SpyDashboardPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d')
  const [selectedMetric, setSelectedMetric] = useState('pageViews')

  const timeframes = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' }
  ]

  const metrics = [
    { value: 'pageViews', label: 'Page Views' },
    { value: 'uniqueVisitors', label: 'Unique Visitors' },
    { value: 'conversions', label: 'Conversions' },
    { value: 'revenue', label: 'Revenue' }
  ]

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">
                Spy Dashboard
              </h1>
              <p className="text-stone text-lg">
                Monitor business activities, track competitors, and gather market intelligence
              </p>
            </div>
            <Link 
              href="/admin"
              className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Timeframe</label>
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {timeframes.map((timeframe) => (
                  <option key={timeframe.value} value={timeframe.value}>
                    {timeframe.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Metric</label>
              <select 
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {metrics.map((metric) => (
                  <option key={metric.value} value={metric.value}>
                    {metric.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Page Views</h3>
            <p className="text-3xl font-bold text-bronze">24.5K</p>
            <p className="text-sm text-green-600">+12.5% vs last period</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Unique Visitors</h3>
            <p className="text-3xl font-bold text-bronze">8.2K</p>
            <p className="text-sm text-green-600">+8.3% vs last period</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-bronze">3.2%</p>
            <p className="text-sm text-red-600">-0.5% vs last period</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-bronze">$12.4K</p>
            <p className="text-sm text-green-600">+15.2% vs last period</p>
          </div>
        </div>

        {/* Market Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Competitor Analysis */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Competitor Analysis</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-medium text-charcoal">VendingLocator.com</span>
                </div>
                <span className="text-sm text-stone">Market Leader</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium text-charcoal">VendingLeads.net</span>
                </div>
                <span className="text-sm text-stone">Growing</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-charcoal">VendingFinder.org</span>
                </div>
                <span className="text-sm text-stone">Stable</span>
              </div>
            </div>
          </div>

          {/* Market Trends */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Market Trends</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-stone">Vending Machine Demand</span>
                <span className="text-green-600 font-semibold">↗️ +18%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Office Vending Growth</span>
                <span className="text-green-600 font-semibold">↗️ +12%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Healthy Snack Demand</span>
                <span className="text-green-600 font-semibold">↗️ +25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Traditional Soda Sales</span>
                <span className="text-red-600 font-semibold">↘️ -8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Recent Spy Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-stone">New competitor detected: VendingPro.com</span>
              <span className="text-xs text-stone ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-stone">Market share increased in Texas region</span>
              <span className="text-xs text-stone ml-auto">1 day ago</span>
            </div>
            <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-stone">Price change detected from competitor</span>
              <span className="text-xs text-stone ml-auto">3 days ago</span>
            </div>
            <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-stone">New industry trend identified</span>
              <span className="text-xs text-stone ml-auto">1 week ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
