'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AnalyticsDashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('traffic')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [metricsData, setMetricsData] = useState<{
    totalVisitorsToday: number
    totalPageViews: number
    avgSessionDuration: number
    bounceRate: number
    topPages: Array<{ page: string; views: number }>
    deviceBreakdown: Record<string, number>
    browserBreakdown: Record<string, number>
    geographicData: Record<string, number>
  } | null>(null)

  const periods = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ]

  const metrics = [
    { value: 'traffic', label: 'Traffic' },
    { value: 'conversions', label: 'Conversions' },
    { value: 'engagement', label: 'Engagement' }
  ]

  useEffect(() => {
    const controller = new AbortController()
    async function fetchMetrics() {
      try {
        setLoading(true)
        setError(null)
        // Map UI period to API timeRange
        const timeRange = selectedPeriod === '7d' ? '7d' : selectedPeriod === '90d' ? '30d' : '30d'
        const res = await fetch(`/api/tracking/metrics?timeRange=${encodeURIComponent(timeRange)}`, {
          method: 'GET',
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        })
        if (!res.ok) {
          throw new Error(`Failed to load metrics: ${res.status}`)
        }
        const data = await res.json()
        setMetricsData(data)
      } catch (e: any) {
        if (e.name !== 'AbortError') {
          setError(e.message || 'Failed to load metrics')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchMetrics()
    return () => controller.abort()
  }, [selectedPeriod])

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
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" aria-label="Export Report">
              Export Report
            </button>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Visitors</h3>
            <p className="text-3xl font-bold text-bronze">{loading || !metricsData ? '—' : metricsData.totalVisitorsToday.toLocaleString()}</p>
            <p className="text-sm text-stone">Last {selectedPeriod}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Page Views</h3>
            <p className="text-3xl font-bold text-bronze">{loading || !metricsData ? '—' : metricsData.totalPageViews.toLocaleString()}</p>
            <p className="text-sm text-stone">Last {selectedPeriod}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Avg Session Duration</h3>
            <p className="text-3xl font-bold text-bronze">{loading || !metricsData ? '—' : `${metricsData.avgSessionDuration} min`}</p>
            <p className="text-sm text-stone">Approximation</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Bounce Rate</h3>
            <p className="text-3xl font-bold text-bronze">{loading || !metricsData ? '—' : `${metricsData.bounceRate}%`}</p>
            <p className="text-sm text-stone">Approximation</p>
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
              {loading || !metricsData ? (
                <div className="text-stone">Loading…</div>
              ) : (
                Object.entries(metricsData.deviceBreakdown).map(([label, percent]) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-stone">{label}</span>
                    <span className="text-green-600 font-semibold">{percent}%</span>
                  </div>
                ))
              )}
            </div>
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
                </tr>
              </thead>
              <tbody>
                {loading || !metricsData ? (
                  <tr>
                    <td className="py-3 px-4 text-stone" colSpan={2}>Loading…</td>
                  </tr>
                ) : metricsData.topPages.length === 0 ? (
                  <tr>
                    <td className="py-3 px-4 text-stone" colSpan={2}>No data yet</td>
                  </tr>
                ) : (
                  metricsData.topPages.map((p, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-charcoal">{p.page}</td>
                      <td className="py-3 px-4 text-charcoal">{p.views.toLocaleString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Browser Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Browser Breakdown</h2>
          <div className="space-y-2">
            {loading || !metricsData ? (
              <div className="text-stone">Loading…</div>
            ) : (
              Object.entries(metricsData.browserBreakdown).map(([browser, percent]) => (
                <div key={browser} className="flex items-center justify-between">
                  <span className="text-stone">{browser}</span>
                  <span className="text-green-600 font-semibold">{percent}%</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Geographic Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Geography</h2>
          <div className="space-y-2">
            {loading || !metricsData ? (
              <div className="text-stone">Loading…</div>
            ) : (
              Object.entries(metricsData.geographicData).map(([region, percent]) => (
                <div key={region} className="flex items-center justify-between">
                  <span className="text-stone">{region}</span>
                  <span className="text-green-600 font-semibold">{percent}%</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
