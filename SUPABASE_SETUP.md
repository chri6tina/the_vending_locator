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
  business_type TEXT NOT NULL,
  employee_count TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'sold', 'pending')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  sold_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE hot_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (adjust as needed)
CREATE POLICY "Allow all operations on hot_leads" ON hot_leads
FOR ALL USING (true);
```

## 5. Test Connection
After setup, your hot leads will persist in the database!
