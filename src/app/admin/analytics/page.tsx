'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AnalyticsDashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('revenue')

  const periods = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ]

  const metrics = [
    { value: 'revenue', label: 'Revenue' },
    { value: 'traffic', label: 'Traffic' },
    { value: 'conversions', label: 'Conversions' },
    { value: 'engagement', label: 'Engagement' }
  ]

  const topCities = [
    { city: 'Austin, TX', visitors: 12450, conversions: 892, revenue: 45600 },
    { city: 'Dallas, TX', visitors: 11890, conversions: 756, revenue: 38900 },
    { city: 'Houston, TX', visitors: 11230, conversions: 698, revenue: 34200 },
    { city: 'San Antonio, TX', visitors: 9870, conversions: 543, revenue: 28900 },
    { city: 'Phoenix, AZ', visitors: 8760, conversions: 432, revenue: 22100 }
  ]

  const topPages = [
    { page: '/vending-leads/austin-texas', views: 8920, conversions: 234, ctr: '2.6%' },
    { page: '/vending-leads/dallas-texas', views: 7650, conversions: 189, ctr: '2.5%' },
    { page: '/vending-leads/houston-texas', views: 6980, conversions: 167, ctr: '2.4%' },
    { page: '/pricing', views: 5430, conversions: 145, ctr: '2.7%' },
    { page: '/hot-leads', views: 4320, conversions: 123, ctr: '2.8%' }
  ]

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">
                Analytics Dashboard
              </h1>
              <p className="text-stone text-lg">
                Deep insights into your vending locator business performance
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
              <label className="block text-sm font-medium text-charcoal mb-2">Time Period</label>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Primary Metric</label>
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
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold text-bronze">$189.2K</p>
            <p className="text-sm text-green-600">+24.5% vs last period</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Visitors</h3>
            <p className="text-3xl font-bold text-bronze">54.2K</p>
            <p className="text-sm text-green-600">+18.3% vs last period</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-bronze">3.2%</p>
            <p className="text-sm text-green-600">+0.8% vs last period</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Avg Order Value</h3>
            <p className="text-3xl font-bold text-bronze">$2,847</p>
            <p className="text-sm text-green-600">+12.1% vs last period</p>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Traffic Sources */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Traffic Sources</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-charcoal">Organic Search</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-charcoal">42.3%</div>
                  <div className="text-sm text-stone">23.1K visits</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-charcoal">Direct Traffic</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-charcoal">28.7%</div>
                  <div className="text-sm text-stone">15.6K visits</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium text-charcoal">Social Media</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-charcoal">18.2%</div>
                  <div className="text-sm text-stone">9.9K visits</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="font-medium text-charcoal">Referral</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-charcoal">10.8%</div>
                  <div className="text-sm text-stone">5.9K visits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Device Breakdown</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-stone">Desktop</span>
                <span className="text-green-600 font-semibold">58.4%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Mobile</span>
                <span className="text-green-600 font-semibold">35.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Tablet</span>
                <span className="text-green-600 font-semibold">6.4%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Cities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Top Performing Cities</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-charcoal">City</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Visitors</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Conversions</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Revenue</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Conversion Rate</th>
                </tr>
              </thead>
              <tbody>
                {topCities.map((cityData, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-charcoal">{cityData.city}</td>
                    <td className="py-3 px-4 text-charcoal">{cityData.visitors.toLocaleString()}</td>
                    <td className="py-3 px-4 text-charcoal">{cityData.conversions.toLocaleString()}</td>
                    <td className="py-3 px-4 text-charcoal">${cityData.revenue.toLocaleString()}</td>
                    <td className="py-3 px-4 text-charcoal">
                      {((cityData.conversions / cityData.visitors) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Performing Pages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Top Performing Pages</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Page</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Page Views</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Conversions</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">CTR</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((pageData, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-charcoal">{pageData.page}</td>
                    <td className="py-3 px-4 text-charcoal">{pageData.views.toLocaleString()}</td>
                    <td className="py-3 px-4 text-charcoal">{pageData.conversions.toLocaleString()}</td>
                    <td className="py-3 px-4 text-charcoal">{pageData.ctr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Growth Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Growth Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-warm-white rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">↗️ +24.5%</div>
              <div className="text-sm text-stone">Revenue Growth</div>
            </div>
            <div className="text-center p-4 bg-warm-white rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">↗️ +18.3%</div>
              <div className="text-sm text-stone">Traffic Growth</div>
            </div>
            <div className="text-center p-4 bg-warm-white rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">↗️ +12.1%</div>
              <div className="text-sm text-stone">Order Value Growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
