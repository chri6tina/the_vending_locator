'use client'

import { useState } from 'react'
import Link from 'next/link'
import AdminNav from '@/components/AdminNav'
import { useAdminStats } from './hooks/useAdminStats'

export default function AdminDashboardPage() {
  const { stats, recentActivity } = useAdminStats()

  return (
    <div className="min-h-screen bg-warm-white">
      <AdminNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">
            Dashboard
          </h1>
          <p className="text-stone">
            Overview of your hot leads business
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-sm text-stone mb-1">Total Leads</p>
            <p className="text-3xl font-bold text-charcoal">{stats.totalLeads}</p>
            <p className="text-xs text-stone mt-1">All time</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-sm text-stone mb-1">Available</p>
            <p className="text-3xl font-bold text-charcoal">{stats.availableLeads}</p>
            <p className="text-xs text-stone mt-1">Ready to sell</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-sm text-stone mb-1">Sold</p>
            <p className="text-3xl font-bold text-charcoal">{stats.soldLeads}</p>
            <p className="text-xs text-stone mt-1">Completed sales</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-sm text-stone mb-1">Revenue</p>
            <p className="text-3xl font-bold text-charcoal">${(stats.revenue || 0).toLocaleString()}</p>
            <p className="text-xs text-stone mt-1">Total earned</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-charcoal mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admin/hot-leads"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-navy transition-colors"
            >
              <h3 className="text-lg font-semibold text-charcoal mb-2">Manage Hot Leads</h3>
              <p className="text-sm text-stone mb-4">Create, edit, and manage premium vending location leads</p>
              <div className="text-sm text-navy font-medium">
                Go to leads →
              </div>
            </Link>

            <div className="bg-white rounded-lg p-6 border border-gray-200 opacity-50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-400">Analytics Dashboard</h3>
                <span className="text-xs text-gray-400">Coming Soon</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">View insights and sales performance</p>
              <div className="text-sm text-gray-400">
                Coming soon
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        {recentActivity && recentActivity.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-charcoal">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activity.type === 'sale' ? 'bg-green-100' :
                      activity.type === 'created' ? 'bg-blue-100' :
                      'bg-gray-100'
                    }`}>
                      <svg className={`w-5 h-5 ${
                        activity.type === 'sale' ? 'text-green-600' :
                        activity.type === 'created' ? 'text-blue-600' :
                        'text-gray-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-charcoal">{activity.title}</p>
                      <p className="text-xs text-stone mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

