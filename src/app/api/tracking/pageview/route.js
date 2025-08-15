import { NextResponse } from 'next/server'
import { 
  addTrackingData, 
  updateLiveVisitors, 
  updatePageViews, 
  cleanupInactiveVisitors,
  trackingData,
  liveVisitors
} from '@/lib/tracking-store'

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Add timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = new Date().toISOString()
    }

    // Store the tracking data
    addTrackingData(data)

    // Update live visitors
    updateLiveVisitors(data)

    // Update page view counts
    updatePageViews(data)

    // Clean up inactive visitors (older than 30 minutes)
    cleanupInactiveVisitors()

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
