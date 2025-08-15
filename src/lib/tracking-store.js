// Shared tracking store for API routes
// In production, this would be replaced with a proper database

export let trackingData = []
export let liveVisitors = new Map()
export let pageViews = new Map()

// Helper function to add tracking data
export function addTrackingData(data) {
  trackingData.push(data)
  
  // Keep only last 1000 entries to prevent memory issues
  if (trackingData.length > 1000) {
    trackingData = trackingData.slice(-1000)
  }
}

// Helper function to update live visitors
export function updateLiveVisitors(data) {
  if (data.sessionId) {
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
      }
    } else if (data.action === 'page_view' || !data.action) {
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
    } else if (data.action === 'scroll_depth') {
      // Update scroll depth
      if (liveVisitors.has(visitorKey)) {
        const visitor = liveVisitors.get(visitorKey)
        visitor.scrollDepth = Math.max(visitor.scrollDepth, data.scrollDepth || 0)
      }
    }
  }
}

// Helper function to update page views
export function updatePageViews(data) {
  if (data.page) {
    const pageKey = data.page
    if (!pageViews.has(pageKey)) {
      pageViews.set(pageKey, { views: 0, uniqueVisitors: new Set() })
    }
    
    const pageData = pageViews.get(pageKey)
    pageData.views++
    if (data.sessionId) {
      pageData.uniqueVisitors.add(data.sessionId)
    }
  }
}

// Helper function to clean up inactive visitors
export function cleanupInactiveVisitors() {
  const now = Date.now()
  const thirtyMinutesAgo = now - (30 * 60 * 1000)
  
  for (const [key, visitor] of liveVisitors.entries()) {
    if (visitor.pageStartTime < thirtyMinutesAgo) {
      liveVisitors.delete(key)
    }
  }
}
