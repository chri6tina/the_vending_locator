import { NextResponse } from 'next/server'
import { addTrackingData, updateLiveVisitors, updatePageViews } from '@/lib/tracking-store'

export async function POST(request) {
  try {
    // Create test tracking data
    const testData = {
      sessionId: 'test_' + Date.now(),
      page: '/test-page',
      title: 'Test Page',
      url: 'http://localhost:3000/test-page',
      referrer: 'http://localhost:3000/',
      timestamp: new Date().toISOString(),
      userAgent: 'Test Browser/1.0',
      screenResolution: '1920x1080',
      viewportSize: '1920x1080',
      language: 'en-US',
      timezone: 'America/New_York'
    }

    // Add the test data
    addTrackingData(testData)
    updateLiveVisitors(testData)
    updatePageViews(testData)

    return NextResponse.json({ 
      success: true, 
      message: 'Test tracking data added',
      data: testData,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error adding test tracking data:', error)
    return NextResponse.json(
      { error: 'Failed to add test tracking data' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Test endpoint - use POST to add test tracking data',
    timestamp: new Date().toISOString()
  })
}
