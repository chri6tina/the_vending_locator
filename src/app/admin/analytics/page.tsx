'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import AdminLayout from '@/components/AdminLayout'

interface AnalyticsData {
  totalRevenue: number
  monthlyGrowth: number
  totalLocations: number
  activeLeads: number
  conversionRate: number
  avgRevenuePerLocation: number
  monthlyRevenue: number[]
  locationGrowth: number[]
  leadSources: { source: string; count: number; percentage: number }[]
  topLocations: { name: string; revenue: number; growth: number }[]
  recentActivity: { action: string; location: string; time: string; amount?: number }[]
}

export default function AnalyticsDashboard() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalRevenue: 125000,
    monthlyGrowth: 12.5,
    totalLocations: 4100,
    activeLeads: 25000,
    conversionRate: 68.5,
    avgRevenuePerLocation: 30.5,
    monthlyRevenue: [45000, 52000, 48000, 61000, 58000, 67000, 72000, 68000, 75000, 82000, 78000, 85000],
    locationGrowth: [3800, 3900, 3950, 4000, 4050, 4100, 4150, 4200, 4250, 4300, 4350, 4400],
    leadSources: [
      { source: 'Direct Website', count: 12500, percentage: 50 },
      { source: 'Referrals', count: 6250, percentage: 25 },
      { source: 'Social Media', count: 3750, percentage: 15 },
      { source: 'Other', count: 2500, percentage: 10 }
    ],
    topLocations: [
      { name: 'Downtown Austin', revenue: 8500, growth: 15.2 },
      { name: 'Miami Beach', revenue: 7800, growth: 12.8 },
      { name: 'San Francisco', revenue: 7200, growth: 18.5 },
      { name: 'New York City', revenue: 6800, growth: 9.3 },
      { name: 'Los Angeles', revenue: 6200, growth: 14.7 }
    ],
    recentActivity: [
      { action: 'New Location Added', location: 'Downtown Chicago', time: '2 hours ago', amount: 0 },
      { action: 'Revenue Generated', location: 'Miami Beach', time: '4 hours ago', amount: 1250 },
      { action: 'Lead Converted', location: 'San Francisco', time: '6 hours ago', amount: 0 },
      { action: 'Revenue Generated', location: 'Austin Downtown', time: '8 hours ago', amount: 890 },
      { action: 'New Location Added', location: 'Phoenix Center', time: '12 hours ago', amount: 0 }
    ]
  })

  useEffect(() => {
    // Simulate loading analytics data
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
              <p className="text-stone">Loading analytics...</p>
            </div>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <AdminLayout>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-charcoal">
                Analytics Dashboard
              </h1>
              <p className="text-stone/60 mt-2">
                Track your business performance and growth metrics
              </p>
            </div>
            
            {/* Time Range Selector */}
            <div className="flex items-center gap-2 bg-white rounded-lg border border-stone/200 p-1">
              {(['7d', '30d', '90d', '1y'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    timeRange === range
                      ? 'bg-navy text-white'
                      : 'text-stone/600 hover:text-charcoal hover:bg-stone/100'
                  }`}
                >
                  {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : range === '90d' ? '90 Days' : '1 Year'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg border border-stone/100 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone/60">Total Revenue</p>
                <p className="text-3xl font-bold text-charcoal mt-2">${analyticsData.totalRevenue.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-green-600 text-sm font-medium">+{analyticsData.monthlyGrowth}%</span>
                  <span className="text-stone/60 text-sm">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg border border-stone/100 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone/60">Total Locations</p>
                <p className="text-3xl font-bold text-charcoal mt-2">{analyticsData.totalLocations.toLocaleString()}+</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-blue-600 text-sm font-medium">+150</span>
                  <span className="text-stone/60 text-sm">this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg border border-stone/100 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone/60">Conversion Rate</p>
                <p className="text-3xl font-bold text-charcoal mt-2">{analyticsData.conversionRate}%</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-green-600 text-sm font-medium">+2.1%</span>
                  <span className="text-stone/60 text-sm">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg border border-stone/100 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone/60">Avg Revenue/Location</p>
                <p className="text-3xl font-bold text-charcoal mt-2">${analyticsData.avgRevenuePerLocation}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-green-600 text-sm font-medium">+$2.50</span>
                  <span className="text-stone/60 text-sm">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Charts and Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-stone/100 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-charcoal">Revenue Trend</h3>
              <div className="flex items-center gap-2 text-sm text-stone/600">
                <div className="w-3 h-3 bg-navy rounded-full"></div>
                <span>Revenue</span>
              </div>
            </div>
            
            {/* Simple Chart Visualization */}
            <div className="h-64 flex items-end justify-between gap-1">
              {analyticsData.monthlyRevenue.map((revenue, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-navy/20 hover:bg-navy/40 transition-colors rounded-t"
                    style={{ height: `${(revenue / 85000) * 200}px` }}
                  ></div>
                  <span className="text-xs text-stone/600 mt-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lead Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg border border-stone/100 p-6"
          >
            <h3 className="text-lg font-semibold text-charcoal mb-6">Lead Sources</h3>
            <div className="space-y-4">
              {analyticsData.leadSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-navy' : 
                      index === 1 ? 'bg-blue-500' : 
                      index === 2 ? 'bg-green-500' : 'bg-stone-400'
                    }`}></div>
                    <span className="text-sm font-medium text-charcoal">{source.source}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-charcoal">{source.count.toLocaleString()}</p>
                    <p className="text-xs text-stone/600">{source.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Top Locations and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Top Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg border border-stone/100 p-6"
          >
            <h3 className="text-lg font-semibold text-charcoal mb-6">Top Performing Locations</h3>
            <div className="space-y-4">
              {analyticsData.topLocations.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-stone/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center text-sm font-semibold text-navy">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">{location.name}</p>
                      <p className="text-sm text-stone/600">${location.revenue.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-green-600 text-sm font-medium">+{location.growth}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg border border-stone/100 p-6"
          >
            <h3 className="text-lg font-semibold text-charcoal mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {analyticsData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone/50 transition-colors">
                  <div className="w-8 h-8 bg-stone/100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-stone/600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3l-9 9-9-9" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-charcoal">{activity.action}</p>
                    <p className="text-sm text-stone/600">{activity.location}</p>
                    <p className="text-xs text-stone/500">{activity.time}</p>
                  </div>
                  {activity.amount && (
                    <span className="text-sm font-semibold text-green-600">${activity.amount}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  )
}
