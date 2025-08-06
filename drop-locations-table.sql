-- Drop Locations Table Only
-- Run this in your Supabase SQL Editor to start fresh with just the locations table

-- Drop the locations table and all related objects
DROP TABLE IF EXISTS locations CASCADE;

-- Drop any views related to locations
DROP VIEW IF EXISTS active_locations CASCADE;

-- Drop any functions related to locations
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

-- Drop any triggers related to locations
DROP TRIGGER IF EXISTS update_locations_updated_at ON locations CASCADE;

-- Drop any indexes related to locations
DROP INDEX IF EXISTS idx_locations_slug CASCADE;
DROP INDEX IF EXISTS idx_locations_status CASCADE;
DROP INDEX IF EXISTS idx_locations_city_state CASCADE;
DROP INDEX IF EXISTS idx_locations_created_at CASCADE;
DROP INDEX IF EXISTS idx_locations_search CASCADE;

-- Drop any policies related to locations
DROP POLICY IF EXISTS "Allow public read access to active locations" ON locations CASCADE;
DROP POLICY IF EXISTS "Allow authenticated users to manage locations" ON locations CASCADE;

-- Verify the table is dropped
SELECT 'Locations table dropped successfully' as status;

-- Check if any tables remain
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_type = 'BASE TABLE'; 