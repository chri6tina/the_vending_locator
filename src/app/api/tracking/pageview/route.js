import { NextResponse } from 'next/server'

// In-memory storage for demo purposes
// In production, you'd use a database like PostgreSQL or MongoDB
let trackingData = []
let liveVisitors = new Map()
let pageViews = new Map()

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Add timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = new Date().toISOString()
    }

    // Store the tracking data
    trackingData.push(data)
    
    // Keep only last 1000 entries to prevent memory issues
    if (trackingData.length > 1000) {
      trackingData = trackingData.slice(-1000)
    }

    // Update live visitors
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

    // Update page view counts
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

    // Clean up inactive visitors (older than 30 minutes)
    const now = Date.now()
    const thirtyMinutesAgo = now - (30 * 60 * 1000)
    for (const [key, visitor] of liveVisitors.entries()) {
      if (visitor.pageStartTime < thirtyMinutesAgo) {
        liveVisitors.delete(key)
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Tracking data received',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error processing tracking data:', error)
    return NextResponse.json(
      { error: 'Failed to process tracking data' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Tracking endpoint is active',
    timestamp: new Date().toISOString(),
    totalRecords: trackingData.length,
    activeVisitors: liveVisitors.size
  })
}
