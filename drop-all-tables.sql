-- Drop All Tables Script for Supabase
-- Run this in your Supabase SQL Editor to start fresh

-- Drop all tables (this will remove ALL data)
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS auth.users CASCADE;
DROP TABLE IF EXISTS auth.identities CASCADE;
DROP TABLE IF EXISTS auth.sessions CASCADE;
DROP TABLE IF EXISTS auth.refresh_tokens CASCADE;
DROP TABLE IF EXISTS auth.audit_log_entries CASCADE;
DROP TABLE IF EXISTS auth.flow_state CASCADE;
DROP TABLE IF EXISTS auth.saml_providers CASCADE;
DROP TABLE IF EXISTS auth.saml_relay_states CASCADE;
DROP TABLE IF EXISTS auth.sso_providers CASCADE;
DROP TABLE IF EXISTS auth.sso_domains CASCADE;
DROP TABLE IF EXISTS auth.mfa_factors CASCADE;
DROP TABLE IF EXISTS auth.mfa_challenges CASCADE;
DROP TABLE IF EXISTS auth.mfa_amr_claims CASCADE;
DROP TABLE IF EXISTS auth.mfa_sessions CASCADE;
DROP TABLE IF EXISTS auth.mfa_verification_tokens CASCADE;

-- Drop any views
DROP VIEW IF EXISTS active_locations CASCADE;

-- Drop any functions
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

-- Drop any triggers
DROP TRIGGER IF EXISTS update_locations_updated_at ON locations CASCADE;

-- Drop any indexes
DROP INDEX IF EXISTS idx_locations_slug CASCADE;
DROP INDEX IF EXISTS idx_locations_status CASCADE;
DROP INDEX IF EXISTS idx_locations_city_state CASCADE;
DROP INDEX IF EXISTS idx_locations_created_at CASCADE;
DROP INDEX IF EXISTS idx_locations_search CASCADE;

-- Drop any policies
DROP POLICY IF EXISTS "Allow public read access to active locations" ON locations CASCADE;
DROP POLICY IF EXISTS "Allow authenticated users to manage locations" ON locations CASCADE;

-- Reset sequences
-- (This will be handled automatically when we recreate tables)

-- Verify tables are dropped
SELECT 'Tables dropped successfully' as status;

-- Optional: List any remaining tables (should be empty)
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_type = 'BASE TABLE'; 