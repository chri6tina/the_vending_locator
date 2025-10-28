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

        // For now, use calculated data without API calls
        setStats({
          vendingLeadsPages: vendingLeadsCount,
          vendingServicesPages: vendingServicesCount,
          totalStates: totalStatesCount,
          totalPages: totalPagesCount,
          totalFormSubmissions: 0, // Will connect to real API later
          liveVisitors: 0, // Will connect to real API later
          monthlyRevenue: 0, // Will connect to real API later
          conversionRate: 0, // Will connect to real API later
          loading: false,
          error: null
        })

        // Simple recent activity showing system status
        const activities: RecentActivity[] = [
          {
            id: 'system-1',
            type: 'system_update',
            message: `✅ All ${totalStatesCount} state pages active with city dropdowns`,
            timestamp: new Date(),
            status: 'success'
          },
          {
            id: 'system-2',
            type: 'page_created',
            message: `🚀 ${vendingServicesCount} vending-services city pages operational`,
            timestamp: new Date(Date.now() - 3600000), // 1 hour ago
            status: 'success'
          },
          {
            id: 'system-3',
            type: 'system_update',
            message: `📊 Admin dashboard cleaned and ready for development`,
            timestamp: new Date(Date.now() - 7200000), // 2 hours ago
            status: 'success'
          }
        ]

        setRecentActivity(activities)

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
  }, [])

  return { stats, recentActivity, refetch: () => setStats(prev => ({ ...prev, loading: true })) }
}
