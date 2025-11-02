import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface HotLead {
  id: string
  title: string
  business_type: string
  employee_count: string
  zip_code: string
  description: string
  price: number
  status: 'available' | 'sold' | 'pending'
  created_at: string
  sold_at?: string
}
