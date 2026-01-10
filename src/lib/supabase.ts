import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface HotLead {
  id: string
  title: string
  slug: string
  city: string
  state: string
  business_type: string
  employee_count: string
  zip_code: string
  description: string
  price: number
  status: 'available' | 'sold' | 'pending'
  created_at: string
  sold_at?: string
  contact_name?: string
  contact_email?: string
  contact_phone?: string
  full_address?: string
  buyer_email?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  featured_image?: string
  author_name?: string
  author_email?: string
  meta_title?: string
  meta_description?: string
  keywords?: string[]
  category?: string
  status: 'draft' | 'published' | 'archived'
  published_at?: string
  created_at: string
  updated_at: string
}

export interface BlogImage {
  id: string
  url: string
  alt_text?: string
  caption?: string
  post_id?: string
  created_at: string
}

export interface HotLeadsSubscription {
  id: string
  name: string
  email: string
  city: string
  state: string
  subscription_type: string
  monthly_price: number
  status: 'pending' | 'active' | 'cancelled'
  created_at: string
  stripe_customer_id?: string
  stripe_subscription_id?: string
}

export interface Visitor {
  id: string
  email: string
  city: string | null
  state: string | null
  source: string
  consent: boolean
  last_source?: string
  created_at: string
  updated_at: string
}
