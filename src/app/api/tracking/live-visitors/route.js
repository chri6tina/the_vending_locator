import { NextResponse } from 'next/server'
import { liveVisitors } from '@/lib/tracking-store'

export async function GET() {
  try {
    // Convert Map to array for JSON response
    const visitorsArray = Array.from(liveVisitors.values())
    
    console.log('Live visitors endpoint called, returning:', visitorsArray.length, 'visitors')
    
    return NextResponse.json(visitorsArray)
    
  } catch (error) {
    console.error('Error fetching live visitors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch live visitors' },
      { status: 500 }
    )
  }
}
