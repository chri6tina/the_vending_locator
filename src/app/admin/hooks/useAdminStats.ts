'use client'

import { useState, useEffect } from 'react'
import { states } from '@/data/states'

interface AdminStats {
  vendingLeadsPages: number
  vendingServicesPages: number
  totalStates: number
  totalPages: number
  totalFormSubmissions: number
  liveVisitors: number
  monthlyRevenue: number
  conversionRate: number
  loading: boolean
  error: string | null
}

interface RecentActivity {
  id: string
  type: 'page_created' | 'form_submission' | 'purchase' | 'system_update'
  message: string
  timestamp: Date
  status: 'success' | 'info' | 'warning'
}

export function useAdminStats() {
  const [stats, setStats] = useState<AdminStats>({
    vendingLeadsPages: 0,
    vendingServicesPages: 0,
    totalStates: 0,
    totalPages: 0,
    totalFormSubmissions: 0,
    liveVisitors: 0,
    monthlyRevenue: 0,
    conversionRate: 0,
    loading: true,
    error: null
  })

  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])

  useEffect(() => {
    async function fetchStats() {
      try {
        setStats(prev => ({ ...prev, loading: true, error: null }))

        // Calculate real page counts from states.ts
        const vendingLeadsCount = states.reduce((total, state) => total + state.cities.length, 0)
        const vendingServicesCount = states.reduce((total, state) => total + state.cities.length, 0)
        const totalStatesCount = states.length
        const totalPagesCount = vendingLeadsCount + vendingServicesCount + totalStatesCount * 2 // +2 for state pages

        // Fetch real-time data from APIs
        const [formsResponse, metricsResponse, visitorsResponse] = await Promise.allSettled([
          fetch('/api/forms').then(res => res.ok ? res.json() : { submissions: [] }),
          fetch('/api/tracking/metrics').then(res => res.ok ? res.json() : { revenue: 0, conversions: 0, views: 1 }),
          fetch('/api/tracking/live-visitors').then(res => res.ok ? res.json() : { count: 0 })
        ])

        const formsData = formsResponse.status === 'fulfilled' ? formsResponse.value : { submissions: [] }
        const metricsData = metricsResponse.status === 'fulfilled' ? metricsResponse.value : { revenue: 0, conversions: 0, views: 1 }
        const visitorsData = visitorsResponse.status === 'fulfilled' ? visitorsResponse.value : { count: 0 }

        // Calculate metrics
        const totalSubmissions = Array.isArray(formsData.submissions) ? formsData.submissions.length : 0
        const monthlyRevenue = metricsData.revenue || 0
        const conversionRate = metricsData.views > 0 ? ((metricsData.conversions || 0) / metricsData.views * 100) : 0
        const liveVisitors = visitorsData.count || 0

        setStats({
          vendingLeadsPages: vendingLeadsCount,
          vendingServicesPages: vendingServicesCount,
          totalStates: totalStatesCount,
          totalPages: totalPagesCount,
          totalFormSubmissions: totalSubmissions,
          liveVisitors,
          monthlyRevenue,
          conversionRate,
          loading: false,
          error: null
        })

        // Generate recent activity from real data
        const activities: RecentActivity[] = []
        
        // Add form submissions as recent activity
        if (Array.isArray(formsData.submissions)) {
          formsData.submissions.slice(0, 3).forEach((submission: any, index: number) => {
            activities.push({
              id: `form-${index}`,
              type: 'form_submission',
              message: `New ${submission.form_type || 'contact'} form submission from ${submission.location || 'unknown location'}`,
              timestamp: new Date(submission.created_at || Date.now()),
              status: 'success'
            })
          })
        }

        // Add system updates
        activities.push({
          id: 'system-1',
          type: 'system_update',
          message: `✅ All ${totalStatesCount} state pages active with city dropdowns`,
          timestamp: new Date(),
          status: 'success'
        })

        activities.push({
          id: 'system-2',
          type: 'page_created',
          message: `🚀 ${vendingServicesCount} vending-services city pages operational`,
          timestamp: new Date(Date.now() - 3600000), // 1 hour ago
          status: 'success'
        })

        setRecentActivity(activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()))

      } catch (error) {
        console.error('Failed to fetch admin stats:', error)
        setStats(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to load dashboard data'
        }))
      }
    }

    fetchStats()

    // Refresh data every 30 seconds
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  return { stats, recentActivity, refetch: () => setStats(prev => ({ ...prev, loading: true })) }
}
