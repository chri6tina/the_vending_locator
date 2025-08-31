import { NextResponse } from 'next/server'
import { trackingData, liveVisitors, pageViews } from '@/lib/tracking-store'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const timeRange = searchParams.get('timeRange') || '24h'
    
    // Calculate time range
    const now = Date.now()
    let startTime
    switch (timeRange) {
      case '1h':
        startTime = now - (60 * 60 * 1000)
        break
      case '24h':
        startTime = now - (24 * 60 * 60 * 1000)
        break
      case '7d':
        startTime = now - (7 * 24 * 60 * 60 * 1000)
        break
      case '30d':
        startTime = now - (30 * 24 * 60 * 60 * 1000)
        break
      default:
        startTime = now - (24 * 60 * 60 * 1000)
    }
    
    // Filter data by time range
    const filteredData = trackingData.filter(item => {
      const itemTime = new Date(item.timestamp).getTime()
      return itemTime >= startTime
    })
    
    // Calculate metrics
    const totalVisitorsToday = new Set(filteredData.map(item => item.sessionId)).size
    const totalPageViews = filteredData.length
    const avgSessionDuration = filteredData.length > 0 ? 5 : 0 // Placeholder
    const bounceRate = 25 // Placeholder
    
    // Get top pages
    const pageCounts = {}
    filteredData.forEach(item => {
      if (item.page) {
        pageCounts[item.page] = (pageCounts[item.page] || 0) + 1
      }
    })
    
    const topPages = Object.entries(pageCounts)
      .map(([page, views]) => ({
        page,
        views,
        uniqueVisitors: 1, // Placeholder
        avgTimeOnPage: 3, // Placeholder
        bounceRate: 25, // Placeholder
        conversionRate: 5 // Placeholder
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10)
    
    // Device and browser breakdown (placeholders for now)
    const deviceBreakdown = { 'Desktop': 60, 'Mobile': 35, 'Tablet': 5 }
    const browserBreakdown = { 'Chrome': 45, 'Safari': 25, 'Firefox': 15, 'Edge': 10, 'Other': 5 }
    const geographicData = { 'United States': 85, 'Canada': 10, 'Other': 5 }
    
    const metrics = {
      totalVisitorsToday,
      totalPageViews,
      avgSessionDuration,
      bounceRate,
      topPages,
      deviceBreakdown,
      browserBreakdown,
      geographicData
    }
    
    console.log('Metrics endpoint called, returning data for timeRange:', timeRange)
    
    return NextResponse.json(metrics)
    
  } catch (error) {
    console.error('Error fetching tracking metrics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tracking metrics' },
      { status: 500 }
    )
  }
}
