const { createClient } = require('@supabase/supabase-js');

// Serverless environment configuration
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://apkppvpxaayoenoaacpi.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwa3BwdnB4YWF5b2Vub2FhY3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MjM2MTYsImV4cCI6MjA2OTk5OTYxNn0.O1x1L0ZOGtqcANZ9iwm_1w1GMRIOsBPFt-HpepbMviA';

// Create Supabase client for serverless functions
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = { supabase, SUPABASE_URL, SUPABASE_ANON_KEY }; 