# Supabase Setup for Hot Leads

## 1. Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up for free account
3. Create a new project

## 2. Get Your Credentials
1. Go to Project Settings > API
2. Copy your Project URL
3. Copy your anon/public key

## 3. Create Environment Variables
Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 4. Create Database Table
Run this SQL in your Supabase SQL Editor:

```sql
-- Create hot_leads table
CREATE TABLE hot_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  business_type TEXT NOT NULL,
  employee_count TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'sold', 'pending')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  sold_at TIMESTAMP WITH TIME ZONE,
  contact_name TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  full_address TEXT,
  buyer_email TEXT
);

-- Create index on slug for fast lookups
CREATE INDEX idx_hot_leads_slug ON hot_leads(slug);

-- Create index on status for filtering
CREATE INDEX idx_hot_leads_status ON hot_leads(status);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE hot_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (adjust as needed)
CREATE POLICY "Allow all operations on hot_leads" ON hot_leads
FOR ALL USING (true);
```

## Migration for Existing Databases

If you already have a hot_leads table, run this migration:

```sql
-- Add new columns to existing table
ALTER TABLE hot_leads 
  ADD COLUMN IF NOT EXISTS slug TEXT,
  ADD COLUMN IF NOT EXISTS city TEXT,
  ADD COLUMN IF NOT EXISTS state TEXT,
  ADD COLUMN IF NOT EXISTS contact_name TEXT,
  ADD COLUMN IF NOT EXISTS contact_email TEXT,
  ADD COLUMN IF NOT EXISTS contact_phone TEXT,
  ADD COLUMN IF NOT EXISTS full_address TEXT,
  ADD COLUMN IF NOT EXISTS buyer_email TEXT;

-- Add unique constraint to slug
ALTER TABLE hot_leads ADD CONSTRAINT hot_leads_slug_key UNIQUE (slug);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_hot_leads_slug ON hot_leads(slug);
CREATE INDEX IF NOT EXISTS idx_hot_leads_status ON hot_leads(status);
```

## 5. Test Connection
After setup, your hot leads will persist in the database!
