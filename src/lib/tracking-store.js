// Shared tracking store for API routes
// Uses file-based persistence to survive server restarts
import { promises as fs } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'tracking-data.json')
const VISITORS_FILE = path.join(process.cwd(), 'data', 'live-visitors.json')
const PAGES_FILE = path.join(process.cwd(), 'data', 'page-views.json')

// In-memory storage (will be loaded from files)
export let trackingData = []
export let liveVisitors = new Map()
export let pageViews = new Map()

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

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(DATA_FILE)
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Load data from files
async function loadData() {
  try {
    await ensureDataDir()
    
    // Load tracking data
    try {
      const trackingContent = await fs.readFile(DATA_FILE, 'utf8')
      trackingData = JSON.parse(trackingContent)
    } catch {
      trackingData = []
    }
    
    // Load live visitors
    try {
      const visitorsContent = await fs.readFile(VISITORS_FILE, 'utf8')
      const visitorsArray = JSON.parse(visitorsContent)
      liveVisitors = new Map(visitorsArray.map(v => [v.sessionId, v]))
    } catch {
      liveVisitors = new Map()
    }
    
    // Load page views
    try {
      const pagesContent = await fs.readFile(PAGES_FILE, 'utf8')
      const pagesArray = JSON.parse(pagesContent)
      pageViews = new Map(pagesArray.map(([key, value]) => [key, {
        ...value,
        uniqueVisitors: new Set(value.uniqueVisitors)
      }]))
    } catch {
      pageViews = new Map()
    }
    
    console.log('Tracking data loaded:', {
      trackingRecords: trackingData.length,
      activeVisitors: liveVisitors.size,
      pageViews: pageViews.size
    })
  } catch (error) {
    console.error('Failed to load tracking data:', error)
  }
}

// Save data to files
async function saveData() {
  try {
    await ensureDataDir()
    
    // Save tracking data
    await fs.writeFile(DATA_FILE, JSON.stringify(trackingData, null, 2))
    
    // Save live visitors
    const visitorsArray = Array.from(liveVisitors.values())
    await fs.writeFile(VISITORS_FILE, JSON.stringify(visitorsArray, null, 2))
    
    // Save page views (convert Set to Array for JSON)
    const pagesArray = Array.from(pageViews.entries()).map(([key, value]) => [
      key,
      {
        ...value,
        uniqueVisitors: Array.from(value.uniqueVisitors)
      }
    ])
    await fs.writeFile(PAGES_FILE, JSON.stringify(pagesArray, null, 2))
    
  } catch (error) {
    console.error('Failed to save tracking data:', error)
  }
}

// Initialize data loading
loadData()

// Helper function to add tracking data
export async function addTrackingData(data) {
  trackingData.push(data)
  
  // Keep only last 1000 entries to prevent memory issues
  if (trackingData.length > 1000) {
    trackingData = trackingData.slice(-1000)
  }
  
  // Save to file
  await saveData()
}

// Helper function to update live visitors
export async function updateLiveVisitors(data) {
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
      // Check if this is a new visitor
      const isNewVisitor = !liveVisitors.has(visitorKey)
      
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
      
      // Trigger notification sound for new visitors
      if (isNewVisitor && onNewVisitorCallback) {
        onNewVisitorCallback(visitor)
      }
      
      // Trigger page view sound
      if (onPageViewCallback) {
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
    
    // Save to file
    await saveData()
  }
}

// Helper function to update page views
export async function updatePageViews(data) {
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
    
    // Save to file
    await saveData()
  }
}

// Helper function to clean up inactive visitors
export async function cleanupInactiveVisitors() {
  const now = Date.now()
  const thirtyMinutesAgo = now - (30 * 60 * 1000)
  
  for (const [key, visitor] of liveVisitors.entries()) {
    if (visitor.pageStartTime < thirtyMinutesAgo) {
      liveVisitors.delete(key)
    }
  }
  
  // Save to file
  await saveData()
}
