'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { setNotificationCallbacks } from '@/lib/tracking-store'
import notificationSounds from '@/lib/notification-sounds'

interface LiveVisitor {
  id: string
  sessionId: string
  currentPage: string
  entryTime: string
  sessionDuration: number
  pagesVisited: string[]
  lastActivity: string
  userAgent: string
  screenResolution: string
  timeOnCurrentPage: number
  scrollDepth: number
  isActive: boolean
}

interface PageStats {
  page: string
  views: number
  uniqueVisitors: number
  avgTimeOnPage: number
  bounceRate: number
  conversionRate: number
}

interface TrackingMetrics {
  totalVisitorsToday: number
  totalPageViews: number
  avgSessionDuration: number
  bounceRate: number
  topPages: PageStats[]
  deviceBreakdown: { [key: string]: number }
  browserBreakdown: { [key: string]: number }
  geographicData: { [key: string]: number }
}

interface Form {
  id: string
  page: string
  formType: string
  submittedAt: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  paymentStatus: 'unpaid' | 'paid' | 'refunded' | 'failed'
  paymentAmount: number
  stripePaymentId: string | null
  taskCompleted: boolean
  taskCompletedAt: string | null
  notes: string
  customerContact: {
    name: string
    email: string
    phone: string
    company: string
  }
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [liveVisitors, setLiveVisitors] = useState<LiveVisitor[]>([])
  const [trackingMetrics, setTrackingMetrics] = useState<TrackingMetrics>({
    totalVisitorsToday: 0,
    totalPageViews: 0,
    avgSessionDuration: 0,
    bounceRate: 0,
    topPages: [],
    deviceBreakdown: {},
    browserBreakdown: {},
    geographicData: {}
  })
  const [isTracking, setIsTracking] = useState(true)
  const [refreshInterval, setRefreshInterval] = useState(30000) // 30 seconds
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h')
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [soundsEnabled, setSoundsEnabled] = useState(true)
  const [soundVolume, setSoundVolume] = useState(0.3)
  const [forms, setForms] = useState<Form[]>([])
  const [selectedForm, setSelectedForm] = useState<Form | null>(null)
  const [formFilters, setFormFilters] = useState({
    status: '',
    page: '',
    paymentStatus: ''
  })
  const [formStats, setFormStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    paid: 0,
    unpaid: 0
  })
  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Set up notification callbacks for sounds
  useEffect(() => {
    // Initialize notification sounds
    notificationSounds.init()
    
    // Set up callbacks for different tracking events
    setNotificationCallbacks({
      onNewVisitor: (visitor: LiveVisitor) => {
        console.log('🎵 New visitor detected:', visitor)
        if (soundsEnabled) {
          notificationSounds.playNewVisitorSound()
        }
      },
      onPageView: (data: any) => {
        if (soundsEnabled && data.action !== 'page_view') {
          notificationSounds.playPageViewSound()
        }
      },
      onScroll: (data: any) => {
        if (soundsEnabled) {
          notificationSounds.playScrollSound()
        }
      }
    })
  }, [soundsEnabled])

  // Fetch real tracking data
  useEffect(() => {
    if (activeTab === 'spy' && isTracking) {
      // Initial fetch
      fetchLiveData()
      
      const interval = setInterval(() => {
        fetchLiveData()
      }, refreshInterval)

      return () => {
        clearInterval(interval)
        if (updateTimeoutRef.current) {
          clearTimeout(updateTimeoutRef.current)
        }
      }
    }
  }, [activeTab, isTracking, refreshInterval])

  // Fetch forms data
  useEffect(() => {
    if (activeTab === 'forms') {
      fetchForms()
    }
  }, [activeTab, formFilters])

  const fetchLiveData = async () => {
    try {
      // Only show loading on first fetch, not on refreshes
      if (liveVisitors.length === 0) {
        setIsLoading(true)
      } else {
        setIsUpdating(true)
      }
      
      // Fetch live visitors
      const visitorsResponse = await fetch('/api/tracking/live-visitors')
      if (visitorsResponse.ok) {
        const visitors = await visitorsResponse.json()
        setLiveVisitors(visitors)
      }

      // Fetch tracking metrics
      const metricsResponse = await fetch(`/api/tracking/metrics?timeRange=${selectedTimeRange}`)
      if (metricsResponse.ok) {
        const metrics = await metricsResponse.json()
        setTrackingMetrics(metrics)
      }

      setLastUpdated(new Date())
    } catch (error) {
      console.error('Failed to fetch tracking data:', error)
    } finally {
      setIsLoading(false)
      // Delay clearing the updating state to prevent flickering
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current)
      }
      updateTimeoutRef.current = setTimeout(() => {
        setIsUpdating(false)
      }, 500)
    }
  }

  const fetchForms = async () => {
    try {
      const queryParams = new URLSearchParams()
      
      if (formFilters.status) queryParams.append('status', formFilters.status)
      if (formFilters.page) queryParams.append('page', formFilters.page)
      if (formFilters.paymentStatus) queryParams.append('paymentStatus', formFilters.paymentStatus)
      
      const response = await fetch(`/api/forms?${queryParams}`)
      const data = await response.json()
      
      if (data.success) {
        setForms(data.forms)
        calculateFormStats(data.forms)
      }
    } catch (error) {
      console.error('Error fetching forms:', error)
    }
  }

  const calculateFormStats = (formsData: Form[]) => {
    setFormStats({
      total: formsData.length,
      pending: formsData.filter(f => f.status === 'pending').length,
      completed: formsData.filter(f => f.status === 'completed').length,
      paid: formsData.filter(f => f.paymentStatus === 'paid').length,
      unpaid: formsData.filter(f => f.paymentStatus === 'unpaid').length
    })
  }

  const startTracking = () => {
    setIsTracking(true)
    fetchLiveData()
  }

  const stopTracking = () => {
    setIsTracking(false)
  }

  const toggleSounds = () => {
    const newState = !soundsEnabled
    setSoundsEnabled(newState)
    notificationSounds.setEnabled(newState)
  }

  const updateSoundVolume = (volume: number) => {
    setSoundVolume(volume)
    notificationSounds.setVolume(volume)
  }

  const getDeviceIcon = (userAgent: string) => {
    if (userAgent.includes('Mobile')) return '📱'
    if (userAgent.includes('Tablet')) return '📱'
    return '💻'
  }

  const getBrowserIcon = (userAgent: string) => {
    if (userAgent.includes('Chrome')) return '🌐'
    if (userAgent.includes('Safari')) return '🌐'
    if (userAgent.includes('Firefox')) return '🦊'
    if (userAgent.includes('Edge')) return '🌐'
    return '🌐'
  }

  const formatTime = (minutes: number) => {
    if (minutes < 1) return '< 1m'
    if (minutes < 60) return `${minutes}m`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  return (
    <div className="min-h-screen bg-warm-white flex">
      {/* Left Sidebar */}
      <div className="w-72 bg-white border-r border-stone shadow-sm">
        <div className="p-8 border-b border-stone/20">
          <h2 className="text-2xl font-playfair font-bold text-charcoal">Admin Panel</h2>
          <p className="text-sm text-stone mt-1">Vending Locator</p>
        </div>
        
        <nav className="mt-8 px-4 space-y-2">
          {/* Dashboard Tab */}
          <div 
            className={`px-4 py-4 rounded-lg shadow-sm cursor-pointer transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-navy text-white' 
                : 'bg-white text-stone hover:bg-stone/5 hover:text-charcoal'
            }`}
            onClick={() => setActiveTab('dashboard')}
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <span className="font-medium">Dashboard</span>
            </div>
          </div>

          {/* Spy Tab */}
          <div 
            className={`px-4 py-4 rounded-lg shadow-sm cursor-pointer transition-all ${
              activeTab === 'spy' 
                ? 'bg-navy text-white' 
                : 'bg-white text-stone hover:bg-stone/5 hover:text-charcoal'
            }`}
            onClick={() => setActiveTab('spy')}
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Spy</span>
            </div>
          </div>

          {/* Forms Tab */}
          <div 
            className={`px-4 py-4 rounded-lg shadow-sm cursor-pointer transition-all ${
              activeTab === 'forms' 
                ? 'bg-navy text-white' 
                : 'bg-white text-stone hover:bg-stone/5 hover:text-charcoal'
            }`}
            onClick={() => setActiveTab('forms')}
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Forms</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl">
          {activeTab === 'dashboard' && (
            <>
              <div className="mb-8">
                <h1 className="text-4xl font-playfair font-bold text-charcoal mb-3">
                  Analytics Dashboard
                </h1>
                <p className="text-lg text-stone max-w-2xl">
                  Track your vending business performance and key metrics in real-time.
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-stone/20 p-8 shadow-sm">
                <p className="text-stone text-center py-12">
                  Analytics content will be displayed here...
                </p>
              </div>
            </>
          )}

          {activeTab === 'spy' && (
            <>
              {/* Header with Controls */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-4xl font-playfair font-bold text-charcoal mb-3">
                      Advanced Website Spy
                    </h1>
                    <p className="text-lg text-stone max-w-3xl">
                      Real-time user activity monitoring, advanced analytics, and comprehensive tracking insights across your entire website.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Online Status */}
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${isTracking ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                      <span className="text-sm font-medium text-stone">
                        {isTracking ? 'LIVE' : 'OFFLINE'}
                      </span>
                    </div>
                    
                    {/* Time Range Selector */}
                    <select 
                      value={selectedTimeRange}
                      onChange={(e) => setSelectedTimeRange(e.target.value)}
                      className="px-3 py-2 border border-stone rounded-lg text-sm bg-white"
                    >
                      <option value="1h">Last Hour</option>
                      <option value="24h">Last 24 Hours</option>
                      <option value="7d">Last 7 Days</option>
                      <option value="30d">Last 30 Days</option>
                    </select>
                    
                                         {/* Sound Controls */}
                     <div className="flex items-center gap-3">
                       <button
                         onClick={toggleSounds}
                         className={`p-2 rounded-lg transition-colors ${
                           soundsEnabled 
                             ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                         }`}
                         title={soundsEnabled ? 'Disable sounds' : 'Enable sounds'}
                       >
                         {soundsEnabled ? (
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.5 15H2a1 1 0 01-1-1V6a1 1 0 011-1h2.5l4.883-3.794a1 1 0 011.617.794zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                           </svg>
                         ) : (
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.5 15H2a1 1 0 01-1-1V6a1 1 0 011-1h2.5l4.883-3.794a1 1 0 011.617.794zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                           </svg>
                         )}
                       </button>
                       
                       <div className="flex items-center gap-2">
                         <span className="text-xs text-stone">Volume:</span>
                         <input
                           type="range"
                           min="0"
                           max="1"
                           step="0.1"
                           value={soundVolume}
                           onChange={(e) => updateSoundVolume(parseFloat(e.target.value))}
                           className="w-16 h-2 bg-stone/20 rounded-lg appearance-none cursor-pointer"
                         />
                       </div>
                     </div>
                     
                     {/* Tracking Controls */}
                     <button
                       onClick={isTracking ? stopTracking : startTracking}
                       className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                         isTracking 
                           ? 'bg-red-500 hover:bg-red-600 text-white' 
                           : 'bg-green-500 hover:bg-green-600 text-white'
                       }`}
                     >
                       {isTracking ? 'Stop Tracking' : 'Start Tracking'}
                     </button>
                  </div>
                </div>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="mb-8">
                  <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
                      <span className="ml-3 text-stone">Loading real-time data...</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-stone mb-1">Live Visitors</p>
                      <p className="text-3xl font-bold text-navy">{liveVisitors.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-stone">Active sessions in real-time</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-stone mb-1">Total Visitors Today</p>
                      <p className="text-3xl font-bold text-navy">{trackingMetrics.totalVisitorsToday.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-stone">Unique visitors in last 24h</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-stone mb-1">Page Views</p>
                      <p className="text-3xl font-bold text-navy">{trackingMetrics.totalPageViews.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-stone">Total page views today</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-stone mb-1">Avg Session</p>
                      <p className="text-3xl font-bold text-navy">{trackingMetrics.avgSessionDuration}m</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-stone">Average session duration</p>
                  </div>
                </div>
              </div>

              {/* Live Visitors & Page Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Live Visitors */}
                <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                                     <div className="flex items-center justify-between mb-4">
                     <h3 className="text-xl font-semibold text-charcoal">Live Visitors</h3>
                     <div className="flex items-center gap-2">
                       <span className="text-sm text-stone">Real-time activity</span>
                       {isUpdating && (
                         <div className="flex items-center gap-1 text-xs text-yellow-600">
                           <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                           <span>Updating...</span>
                         </div>
                       )}
                       {soundsEnabled && (
                         <div className="flex items-center gap-1 text-xs text-green-600">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                           <span>🔊 Sounds ON</span>
                         </div>
                       )}
                     </div>
                   </div>
                  {isLoading ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-stone/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
                      </div>
                      <p className="text-stone">Loading visitors...</p>
                    </div>
                  ) : liveVisitors.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-stone/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-stone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <p className="text-stone">No active visitors</p>
                      <p className="text-sm text-stone/70">Visitors will appear here when they visit your site</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {liveVisitors.map((visitor) => (
                        <div key={visitor.id} className="p-4 bg-stone/5 rounded-lg border border-stone/10">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                              <span className="text-sm font-medium text-charcoal">{visitor.currentPage}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {getDeviceIcon(visitor.userAgent)}
                              {getBrowserIcon(visitor.userAgent)}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-xs text-stone">
                            <div>
                              <p>Session: {formatTime(visitor.sessionDuration)}</p>
                              <p>On Page: {visitor.timeOnCurrentPage}m</p>
                            </div>
                            <div>
                              <p>Scroll: {visitor.scrollDepth}%</p>
                              <p>Entry: {visitor.entryTime}</p>
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-stone">
                            <p>Session ID: {visitor.sessionId.substring(0, 20)}...</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Top Pages Performance */}
                <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Top Pages Performance</h3>
                  {trackingMetrics.topPages.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-stone/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-stone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <p className="text-stone">No page data yet</p>
                      <p className="text-sm text-stone/70">Page performance will appear here as visitors browse your site</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {trackingMetrics.topPages.map((page, index) => (
                        <div key={page.page} className="p-4 bg-stone/5 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold">
                                {index + 1}
                              </span>
                              <span className="font-medium text-charcoal">{page.page}</span>
                            </div>
                            <span className="text-sm font-semibold text-navy">{page.views} views</span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-xs text-stone">
                            <div>
                              <p className="font-medium">Avg Time</p>
                              <p>{page.avgTimeOnPage}m</p>
                            </div>
                            <div>
                              <p className="font-medium">Bounce Rate</p>
                              <p>{page.bounceRate}%</p>
                            </div>
                            <div>
                              <p className="font-medium">Conversion</p>
                              <p>{page.conversionRate}%</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Advanced Analytics Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Device Breakdown */}
                <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Device Breakdown</h3>
                  {Object.keys(trackingMetrics.deviceBreakdown).length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-stone/70 text-sm">No device data yet</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {Object.entries(trackingMetrics.deviceBreakdown).map(([device, percentage]) => (
                        <div key={device} className="flex items-center justify-between">
                          <span className="text-stone capitalize">{device}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-stone/20 rounded-full h-2">
                              <div 
                                className="bg-navy h-2 rounded-full" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-charcoal w-8">{percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Browser Breakdown */}
                <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Browser Usage</h3>
                  {Object.keys(trackingMetrics.browserBreakdown).length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-stone/70 text-sm">No browser data yet</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {Object.entries(trackingMetrics.browserBreakdown).map(([browser, percentage]) => (
                        <div key={browser} className="flex items-center justify-between">
                          <span className="text-stone">{browser}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-stone/20 rounded-full h-2">
                              <div 
                                className="bg-navy h-2 rounded-full" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-charcoal w-8">{percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Geographic Data */}
                <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Top Locations</h3>
                  {Object.keys(trackingMetrics.geographicData).length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-stone/70 text-sm">No location data yet</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {Object.entries(trackingMetrics.geographicData).map(([location, percentage]) => (
                        <div key={location} className="flex items-center justify-between">
                          <span className="text-stone">{location}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-stone/20 rounded-full h-2">
                              <div 
                                className="bg-navy h-2 rounded-full" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-charcoal w-8">{percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Real-time Activity Feed */}
              <div className="bg-white rounded-xl border border-stone/20 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-charcoal">Real-time Activity Feed</h3>
                                     <div className="flex items-center gap-2">
                     <button
                       onClick={fetchLiveData}
                       disabled={isUpdating}
                       className="px-3 py-1 text-xs bg-navy text-white rounded hover:bg-navy/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                     >
                       {isUpdating ? 'Updating...' : 'Refresh Now'}
                     </button>
                     
                     {/* Test Sound Button */}
                     <button
                       onClick={() => notificationSounds.playNewVisitorSound()}
                       className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                       title="Test notification sound"
                     >
                       🔊 Test Sound
                     </button>
                     
                     <span className="text-sm text-stone">Auto-refresh:</span>
                     <select 
                       value={refreshInterval / 1000}
                       onChange={(e) => setRefreshInterval(parseInt(e.target.value) * 1000)}
                       className="px-2 py-1 border border-stone rounded text-xs bg-white"
                     >
                       <option value={15}>15s</option>
                       <option value={30}>30s</option>
                       <option value={60}>1m</option>
                       <option value={120}>2m</option>
                     </select>
                   </div>
                </div>
                <div className="bg-stone/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-stone">
                    <div className={`w-2 h-2 rounded-full ${
                      isTracking 
                        ? isUpdating 
                          ? 'bg-yellow-500 animate-pulse' 
                          : 'bg-green-500'
                        : 'bg-gray-400'
                    }`}></div>
                    <span>
                      {isTracking ? 'Live tracking active' : 'Tracking paused'} • {liveVisitors.length} visitors online • Last updated: {lastUpdated.toLocaleTimeString()}
                      {isUpdating && <span className="text-yellow-600 ml-2">(updating...)</span>}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'forms' && (
            <>
              {/* Forms Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-playfair font-bold text-charcoal mb-3">
                  Forms Management
                </h1>
                <p className="text-lg text-stone max-w-3xl">
                  Track form submissions, payments, and task completion status across your website.
                </p>
              </div>

              {/* Forms Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
                >
                  <div className="text-2xl font-bold text-navy">{formStats.total}</div>
                  <div className="text-sm text-stone-600">Total Forms</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
                >
                  <div className="text-2xl font-bold text-yellow-600">{formStats.pending}</div>
                  <div className="text-sm text-stone-600">Pending</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
                >
                  <div className="text-2xl font-bold text-green-600">{formStats.completed}</div>
                  <div className="text-sm text-stone-600">Completed</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
                >
                  <div className="text-2xl font-bold text-green-600">{formStats.paid}</div>
                  <div className="text-sm text-stone-600">Paid</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-stone-200"
                >
                  <div className="text-2xl font-bold text-red-600">{formStats.unpaid}</div>
                  <div className="text-sm text-stone-600">Unpaid</div>
                </motion.div>
              </div>

              {/* Forms Filters */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Status</label>
                    <select
                      value={formFilters.status}
                      onChange={(e) => setFormFilters(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    >
                      <option value="">All Statuses</option>
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Page</label>
                    <select
                      value={formFilters.page}
                      onChange={(e) => setFormFilters(prev => ({ ...prev, page: e.target.value }))}
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    >
                      <option value="">All Pages</option>
                      <option value="/">Homepage</option>
                      <option value="/contact">Contact</option>
                      <option value="/pricing">Pricing</option>
                      <option value="/services">Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Payment Status</label>
                    <select
                      value={formFilters.paymentStatus}
                      onChange={(e) => setFormFilters(prev => ({ ...prev, paymentStatus: e.target.value }))}
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    >
                      <option value="">All Payment Statuses</option>
                      <option value="paid">Paid</option>
                      <option value="unpaid">Unpaid</option>
                      <option value="refunded">Refunded</option>
                      <option value="failed">Failed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Forms Table */}
              <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
                {forms.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-stone-600">No forms found matching your filters.</p>
                    <button
                      onClick={() => fetch('/api/forms/test', { method: 'POST' })}
                      className="mt-4 px-4 py-2 bg-navy text-white rounded-md hover:bg-navy-dark transition-colors"
                    >
                      Add Sample Forms
                    </button>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-stone-200">
                      <thead className="bg-stone-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Customer
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Page
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Payment
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Task
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Submitted
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-stone-200">
                        {forms.map((form) => (
                          <tr key={form.id} className="hover:bg-stone-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-stone-900">
                                  {form.customerContact.name || 'N/A'}
                                </div>
                                <div className="text-sm text-stone-500">
                                  {form.customerContact.email || 'N/A'}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-stone-900">{form.page}</div>
                              <div className="text-sm text-stone-500">{form.formType}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                form.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                form.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                                form.status === 'completed' ? 'bg-green-100 text-green-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {form.status.replace('_', ' ')}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-2">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  form.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                                  form.paymentStatus === 'unpaid' ? 'bg-red-100 text-red-800' :
                                  form.paymentStatus === 'refunded' ? 'bg-orange-100 text-orange-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {form.paymentStatus}
                                </span>
                                {form.paymentAmount > 0 && (
                                  <span className="text-sm text-stone-600">
                                    ${form.paymentAmount}
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                form.taskCompleted 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {form.taskCompleted ? 'Completed' : 'Pending'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">
                              {new Date(form.submittedAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button
                                onClick={() => setSelectedForm(form)}
                                className="text-navy hover:text-navy-dark mr-3"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
