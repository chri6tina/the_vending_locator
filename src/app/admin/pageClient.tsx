'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAdminStats } from './hooks/useAdminStats'

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
  badge?: string
}

const navigation: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
      </svg>
    )
  }
]

export default function AdminDashboardPage() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const { stats, recentActivity } = useAdminStats()

  return (
    <div className="min-h-screen bg-warm-white flex">
      {/* Sidebar - Always visible on desktop */}
      <div className={`hidden lg:block flex-shrink-0 ${collapsed ? 'w-20' : 'w-72'}`}>
        <aside className={`h-full bg-white border-r border-stone shadow-xl ${collapsed ? 'w-20' : 'w-72'}`}>
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-stone px-4">
            {!collapsed && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-charcoal">Admin</span>
              </div>
            )}
            
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-lg text-stone hover:text-charcoal hover:bg-warm-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* User Info */}
          {!collapsed && (
            <div className="border-b border-stone p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-charcoal truncate">Administrator</p>
                  <p className="text-xs text-stone">Admin Access</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-3 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-navy text-white shadow-sm'
                        : 'text-stone hover:text-charcoal hover:bg-warm-white'
                    }`}
                  >
                    <div className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-stone group-hover:text-navy'}`}>
                      {item.icon}
                    </div>
                    {!collapsed && (
                      <>
                        <span className="flex-1">{item.name}</span>
                        {item.badge && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-stone p-4">
            <button className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors ${collapsed ? 'justify-center' : ''}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              {!collapsed && <span>Sign Out</span>}
            </button>
          </div>
        </aside>
      </div>
      
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside className={`fixed lg:hidden h-full w-72 bg-white border-r border-stone shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Mobile Header */}
        <div className="flex h-16 items-center justify-between border-b border-stone px-4 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-charcoal">Admin</span>
          </div>
          
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-lg text-stone hover:text-charcoal hover:bg-warm-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 lg:hidden">
          <div className="px-3 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-navy text-white shadow-sm'
                      : 'text-stone hover:text-charcoal hover:bg-warm-white'
                  }`}
                >
                  <div className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-stone group-hover:text-navy'}`}>
                    {item.icon}
                  </div>
                  <span className="flex-1">{item.name}</span>
                  {item.badge && (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-white border-b border-stone shadow-sm">
          <div className="flex h-16 items-center justify-between px-6 lg:px-8">
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-stone hover:text-charcoal hover:bg-warm-white transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Page Title */}
            <div className="flex-1 lg:flex-none">
              <h1 className="text-xl font-semibold text-charcoal lg:hidden">
                Admin Dashboard
              </h1>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="p-2 rounded-lg text-stone hover:text-charcoal hover:bg-warm-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Help */}
              <button className="p-2 rounded-lg text-stone hover:text-charcoal hover:bg-warm-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Admin Dashboard
              </h1>
              <p className="text-stone text-lg">
                Welcome to your vending locator business dashboard
              </p>
            </div>
            
            {/* Dashboard Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Vending Leads</h3>
                <p className="text-3xl font-bold text-bronze">
                  {stats.loading ? '...' : stats.vendingLeadsPages.toLocaleString()}
                </p>
                <p className="text-sm text-stone">City pages</p>
                {stats.loading && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Vending Services</h3>
                <p className="text-3xl font-bold text-bronze">
                  {stats.loading ? '...' : stats.vendingServicesPages.toLocaleString()}
                </p>
                <p className="text-sm text-stone">City pages</p>
                {stats.loading && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Form Submissions</h3>
                <p className="text-3xl font-bold text-bronze">
                  {stats.loading ? '...' : stats.totalFormSubmissions.toLocaleString()}
                </p>
                <p className="text-sm text-stone">Total leads</p>
                {stats.loading && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Live Visitors</h3>
                <p className="text-3xl font-bold text-bronze">
                  {stats.loading ? '...' : stats.liveVisitors}
                </p>
                <p className="text-sm text-stone">Active now</p>
                {stats.liveVisitors > 0 && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                )}
              </div>
            </div>

            {/* Additional Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Coverage</h3>
                <p className="text-3xl font-bold text-bronze">
                  {stats.loading ? '...' : stats.totalStates}
                </p>
                <p className="text-sm text-stone">States + DC</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Total Pages</h3>
                <p className="text-3xl font-bold text-bronze">
                  {stats.loading ? '...' : stats.totalPages.toLocaleString()}
                </p>
                <p className="text-sm text-stone">Location pages</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Conversion Rate</h3>
                <p className="text-3xl font-bold text-bronze">
                  {stats.loading ? '...' : `${stats.conversionRate.toFixed(1)}%`}
                </p>
                <p className="text-sm text-stone">Visitor to lead</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-charcoal">Recent Activity</h2>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Live Updates
                </div>
              </div>
              <div className="space-y-4">
                {stats.loading ? (
                  <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg animate-pulse">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                ) : recentActivity.length > 0 ? (
                  recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.status === 'success' ? 'bg-green-500' : 
                        activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <span className="text-stone">{activity.message}</span>
                        <div className="text-xs text-stone/60 mt-1">
                          {activity.timestamp.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-4 p-3 bg-warm-white rounded-lg">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-stone">No recent activity</span>
                  </div>
                )}
              </div>
            </div>

            {/* Coming Soon - We'll build these together */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-charcoal mb-4">Admin Sections</h2>
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Ready to Build</h3>
                <p className="text-stone">Let's design the admin sections you need together</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
