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
    console.log('🚀 POST request received to /api/tracking/pageview')
    
    const data = await request.json()
    console.log('📥 Raw request data:', data)
    
    // Add timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = new Date().toISOString()
    }

    // Debug: Log the received data
    console.log('📥 Pageview route received data:', JSON.stringify(data, null, 2))
    console.log('🔍 Data validation - page:', data.page, 'sessionId:', data.sessionId)
    
    // Store the tracking data
    console.log('📊 Calling addTrackingData...')
    addTrackingData(data)
    console.log('✅ addTrackingData completed')

    // Update live visitors
    console.log('👥 Calling updateLiveVisitors...')
    updateLiveVisitors(data)
    console.log('✅ updateLiveVisitors completed')

    // Update page view counts
    console.log('📄 Calling updatePageViews...')
    updatePageViews(data)
    console.log('✅ updatePageViews completed')

    // Clean up inactive visitors (older than 30 minutes)
    console.log('🧹 Calling cleanupInactiveVisitors...')
    cleanupInactiveVisitors()
    console.log('✅ cleanupInactiveVisitors completed')

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
