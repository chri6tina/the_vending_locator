-- Fix RLS policies to allow anonymous users to insert and delete data
-- Run this in your Supabase SQL editor

-- Drop the existing policies
DROP POLICY IF EXISTS "Allow authenticated users to manage locations" ON locations;
DROP POLICY IF EXISTS "Allow authenticated users to update locations" ON locations;
DROP POLICY IF EXISTS "Allow authenticated users to delete locations" ON locations;
DROP POLICY IF EXISTS "Allow anonymous users to insert locations" ON locations;

-- Create a new policy that allows anonymous users to insert
CREATE POLICY "Allow anonymous users to insert locations" ON locations
    FOR INSERT WITH CHECK (true);

-- Create a policy that allows anonymous users to delete (for admin functions)
CREATE POLICY "Allow anonymous users to delete locations" ON locations
    FOR DELETE USING (true);

-- Create a policy that allows authenticated users to update
CREATE POLICY "Allow authenticated users to update locations" ON locations
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Keep the existing read policy
-- CREATE POLICY "Allow public read access to active locations" ON locations
--     FOR SELECT USING (status = 'active'); 