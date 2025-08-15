// Shared tracking store for API routes
// Global store that persists across API calls in development mode

// Use global variables to persist data across API calls
if (typeof global !== 'undefined') {
  // Server-side (Node.js)
  if (!global.vendingLocatorTrackingStore) {
    global.vendingLocatorTrackingStore = {
      trackingData: [],
      liveVisitors: new Map(),
      pageViews: new Map()
    }
  }
  var { trackingData, liveVisitors, pageViews } = global.vendingLocatorTrackingStore
} else {
  // Client-side (browser) - fallback to local variables
  var trackingData = []
  var liveVisitors = new Map()
  var pageViews = new Map()
}

// Export the variables
export { trackingData, liveVisitors, pageViews }

// Callback for when new visitors arrive (for notification sounds)
let onNewVisitorCallback = null
let onPageViewCallback = null
let onScrollCallback = null

// Set callbacks for notification sounds
export function setNotificationCallbacks(callbacks) {
  if (callbacks.onNewVisitor) onNewVisitorCallback = callbacks.onNewVisitor
  if (callbacks.onPageView) onPageViewCallback = callbacks.onPageView
  if (callbacks.onScroll) onScrollCallback = callbacks.onScroll
}

// Debug logging
export function logTrackingState() {
  console.log('🔍 Tracking Store State:', {
    trackingDataCount: trackingData.length,
    liveVisitorsCount: liveVisitors.size,
    pageViewsCount: pageViews.size,
    liveVisitorsKeys: Array.from(liveVisitors.keys()),
    pageViewsKeys: Array.from(pageViews.keys())
  })
}

// Helper function to add tracking data
export function addTrackingData(data) {
  console.log('📊 Adding tracking data:', data)
  trackingData.push(data)
  
  // Keep only last 1000 entries to prevent memory issues
  if (trackingData.length > 1000) {
    trackingData = trackingData.slice(-1000)
  }
  
  logTrackingState()
}

// Helper function to update live visitors
export function updateLiveVisitors(data) {
  if (data.sessionId) {
    console.log('👥 Updating live visitors with data:', data)
    const visitorKey = data.sessionId
    const now = Date.now()
    
    if (data.action === 'page_exit' || data.action === 'heartbeat') {
      // Update existing visitor
      if (liveVisitors.has(visitorKey)) {
        const visitor = liveVisitors.get(visitorKey)
        visitor.lastActivity = new Date().toISOString()
        visitor.timeOnCurrentPage = Math.floor((now - visitor.pageStartTime) / 1000 / 60)
        
        if (data.action === 'page_exit') {
          visitor.isActive = false
        }
        console.log('🔄 Updated existing visitor:', visitor)
      }
    } else if (data.action === 'page_view' || !data.action) {
      // Check if this is a new visitor
      const isNewVisitor = !liveVisitors.has(visitorKey)
      console.log('🆕 Is new visitor?', isNewVisitor)
      
      // New page view or initial visit
      const visitor = {
        id: `visitor-${Date.now()}`,
        sessionId: data.sessionId,
        currentPage: data.page,
        entryTime: new Date().toLocaleTimeString(),
        sessionDuration: 0,
        pagesVisited: [data.page],
        lastActivity: new Date().toISOString(),
        userAgent: data.userAgent || 'Unknown',
        screenResolution: data.screenResolution || 'Unknown',
        timeOnCurrentPage: 0,
        scrollDepth: 0,
        isActive: true,
        pageStartTime: now
      }
      
      liveVisitors.set(visitorKey, visitor)
      console.log('✅ Added new visitor:', visitor)
      
      // Trigger notification sound for new visitors
      if (isNewVisitor && onNewVisitorCallback) {
        console.log('🎵 Triggering new visitor callback')
        onNewVisitorCallback(visitor)
      }
      
      // Trigger page view sound
      if (onPageViewCallback) {
        console.log('🎵 Triggering page view callback')
        onPageViewCallback(data)
      }
    } else if (data.action === 'scroll_depth') {
      // Update scroll depth
      if (liveVisitors.has(visitorKey)) {
        const visitor = liveVisitors.get(visitorKey)
        visitor.scrollDepth = Math.max(visitor.scrollDepth, data.scrollDepth || 0)
        
        // Trigger scroll sound for milestone scrolls
        if (onScrollCallback && [25, 50, 75, 100].includes(data.scrollDepth)) {
          onScrollCallback(data)
        }
      }
    }
    
    logTrackingState()
  }
}

// Helper function to update page views
export function updatePageViews(data) {
  if (data.page) {
    console.log('📄 Updating page views for:', data.page)
    const pageKey = data.page
    if (!pageViews.has(pageKey)) {
      pageViews.set(pageKey, { views: 0, uniqueVisitors: new Set() })
    }
    
    const pageData = pageViews.get(pageKey)
    pageData.views++
    if (data.sessionId) {
      pageData.uniqueVisitors.add(data.sessionId)
    }
    
    logTrackingState()
  }
}

// Helper function to clean up inactive visitors
export function cleanupInactiveVisitors() {
  console.log('🧹 Cleaning up inactive visitors')
  const now = Date.now()
  const thirtyMinutesAgo = now - (30 * 60 * 1000)
  
  for (const [key, visitor] of liveVisitors.entries()) {
    if (visitor.pageStartTime < thirtyMinutesAgo) {
      liveVisitors.delete(key)
      console.log('🗑️ Removed inactive visitor:', key)
    }
  }
  
  logTrackingState()
}
