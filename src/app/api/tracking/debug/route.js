import { NextResponse } from 'next/server'
import { trackingData, liveVisitors, pageViews, logTrackingState } from '@/lib/tracking-store'

export async function GET() {
  try {
    // Log the current state
    logTrackingState()
    
    // Return detailed state information
    return NextResponse.json({
      message: 'Tracking store debug info',
      timestamp: new Date().toISOString(),
      storeState: {
        trackingDataCount: trackingData.length,
        liveVisitorsCount: liveVisitors.size,
        pageViewsCount: pageViews.size,
        liveVisitorsKeys: Array.from(liveVisitors.keys()),
        pageViewsKeys: Array.from(pageViews.keys()),
        sampleTrackingData: trackingData.slice(-3), // Last 3 entries
        liveVisitorsData: Array.from(liveVisitors.values()),
        pageViewsData: Array.from(pageViews.entries())
      }
    })
    
  } catch (error) {
    console.error('Error in debug endpoint:', error)
    return NextResponse.json(
      { error: 'Failed to get debug info' },
      { status: 500 }
    )
  }
}
