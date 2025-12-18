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
    
    // Check if request has a body
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('⚠️ Request missing JSON content-type, returning empty data')
      return NextResponse.json({ 
        success: true, 
        message: 'No data to process',
        timestamp: new Date().toISOString()
      })
    }

    // Safely parse JSON with error handling
    let data
    try {
      const text = await request.text()
      if (!text || text.trim() === '') {
        console.warn('⚠️ Empty request body, returning success')
        return NextResponse.json({ 
          success: true, 
          message: 'Empty request body',
          timestamp: new Date().toISOString()
        })
      }
      data = JSON.parse(text)
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError.message)
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }
    
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
