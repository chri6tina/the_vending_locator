'use client'

import { useState } from 'react'
import Link from 'next/link'
import AdminNav from '@/components/AdminNav'
import { useAdminStats } from './hooks/useAdminStats'

export default function AdminDashboardPage() {
  const { stats, recentActivity } = useAdminStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-white via-cream/20 to-warm-white">
      <AdminNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-navy to-blue-600 rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-white mb-2">
                Welcome Back! 👋
              </h1>
              <p className="text-blue-100 text-lg">
                Here's what's happening with your hot leads business today
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-navy/20 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-navy to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-semibold text-stone mb-2 uppercase tracking-wide">Total Leads</p>
            <p className="text-4xl font-bold text-navy mb-1">{stats.totalLeads}</p>
            <p className="text-xs text-stone flex items-center gap-1">
              <span className="w-2 h-2 bg-navy rounded-full"></span>
              All time
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-green-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-semibold text-stone mb-2 uppercase tracking-wide">Available</p>
            <p className="text-4xl font-bold text-green-600 mb-1">{stats.availableLeads}</p>
            <p className="text-xs text-stone flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Ready to sell
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-semibold text-stone mb-2 uppercase tracking-wide">Sold</p>
            <p className="text-4xl font-bold text-blue-600 mb-1">{stats.soldLeads}</p>
            <p className="text-xs text-stone flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Completed sales
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-yellow-200 hover:border-yellow-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-semibold text-orange-800 mb-2 uppercase tracking-wide">Revenue</p>
            <p className="text-4xl font-bold text-orange-600 mb-1">${stats.revenue.toLocaleString()}</p>
            <p className="text-xs text-orange-700 flex items-center gap-1">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Total earned
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/admin/hot-leads"
              className="bg-gradient-to-br from-navy to-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Manage Hot Leads</h3>
                <p className="text-blue-100 text-sm mb-4">Create, edit, and manage premium vending location leads</p>
                <div className="flex items-center text-white font-semibold text-sm">
                  Go to leads
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link
              href="/admin/hot-leads"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 group border-2 border-green-200 hover:border-green-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Create New Lead</h3>
              <p className="text-stone text-sm mb-4">Add a new premium lead to your marketplace</p>
              <div className="flex items-center text-green-600 font-semibold text-sm">
                Create lead
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 opacity-60 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                  Coming Soon
                </span>
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-400 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-400 text-sm">View insights and sales performance</p>
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

