// Supabase configuration - use fallback values for browser environment
const SUPABASE_URL = 'https://apkppvpxaayoenoaacpi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwa3BwdnB4YWF5b2Vub2FhY3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MjM2MTYsImV4cCI6MjA2OTk5OTYxNn0.O1x1L0ZOGtqcANZ9iwm_1w1GMRIOsBPFt-HpepbMviA';

// Database table structure for locations
const LOCATIONS_TABLE = 'locations';

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        LOCATIONS_TABLE
    };
} else {
    window.SUPABASE_CONFIG = {
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        LOCATIONS_TABLE
    };
} 