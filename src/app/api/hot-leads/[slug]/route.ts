import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Access to dev leads from main route
// Note: This import creates a shared reference
import '../route'

// GET - Retrieve a single lead by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      console.log('Using dev mode - fetching from memory')
      
      // Fetch devLeads from parent route
      const response = await fetch(`${request.nextUrl.origin}/api/hot-leads`)
      const data = await response.json()
      const devLeads = data.leads || []
      
      const lead = devLeads.find((l: any) => l.slug === params.slug)
      
      if (!lead) {
        return NextResponse.json({ 
          success: false, 
          error: 'Lead not found' 
        }, { status: 404 })
      }

      // Return different data based on whether it's sold or not
      if (lead.status === 'sold') {
        return NextResponse.json({ 
          success: true, 
          lead: {
            id: lead.id,
            title: lead.title,
            city: lead.city,
            state: lead.state,
            status: lead.status,
            sold_at: lead.sold_at
          }
        })
      }

      // For available leads, show preview info (hide sensitive contact details)
      return NextResponse.json({ 
        success: true, 
        lead: {
          id: lead.id,
          title: lead.title,
          slug: lead.slug,
          city: lead.city,
          state: lead.state,
          business_type: lead.business_type,
          employee_count: lead.employee_count,
          zip_code: lead.zip_code,
          description: lead.description,
          price: lead.price,
          status: lead.status,
          created_at: lead.created_at
        }
      })
    }

    const { data: lead, error } = await supabase
      .from('hot_leads')
      .select('*')
      .eq('slug', params.slug)
      .single()

    if (error || !lead) {
      return NextResponse.json({ 
        success: false, 
        error: 'Lead not found' 
      }, { status: 404 })
    }

    // Return different data based on whether it's sold or not
    if (lead.status === 'sold') {
      // For sold leads, only show minimal info
      return NextResponse.json({ 
        success: true, 
        lead: {
          id: lead.id,
          title: lead.title,
          city: lead.city,
          state: lead.state,
          status: lead.status,
          sold_at: lead.sold_at
        }
      })
    }

    // For available leads, show preview info (hide sensitive contact details)
    return NextResponse.json({ 
      success: true, 
      lead: {
        id: lead.id,
        title: lead.title,
        slug: lead.slug,
        city: lead.city,
        state: lead.state,
        business_type: lead.business_type,
        employee_count: lead.employee_count,
        zip_code: lead.zip_code,
        description: lead.description,
        price: lead.price,
        status: lead.status,
        created_at: lead.created_at
      }
    })
  } catch (error) {
    console.error('Error fetching lead:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch lead' 
    }, { status: 500 })
  }
}

