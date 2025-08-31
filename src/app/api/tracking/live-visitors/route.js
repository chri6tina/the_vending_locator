import { NextResponse } from 'next/server'
import { liveVisitors } from '@/lib/tracking-store'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Debug: Log the entire liveVisitors Map
    console.log('🔍 Live visitors endpoint called')
    console.log('🔍 liveVisitors Map size:', liveVisitors.size)
    console.log('🔍 liveVisitors Map keys:', Array.from(liveVisitors.keys()))
    console.log('🔍 liveVisitors Map values:', Array.from(liveVisitors.values()))
    
    // Convert Map to array for JSON response
    const visitorsArray = Array.from(liveVisitors.values())
    
    console.log('🔍 Returning visitors array:', visitorsArray.length, 'visitors')
    
    return NextResponse.json(visitorsArray)
    
  } catch (error) {
    console.error('Error fetching live visitors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch live visitors' },
      { status: 500 }
    )
  }
}
