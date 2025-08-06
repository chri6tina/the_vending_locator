// Client-side Supabase configuration
const SUPABASE_URL = 'https://apkppvpxaayoenoaacpi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwa3BwdnB4YWF5b2Vub2FhY3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MjM2MTYsImV4cCI6MjA2OTk5OTYxNn0.O1x1L0ZOGtqcANZ9iwm_1w1GMRIOsBPFt-HpepbMviA';

// Initialize Supabase client (only if Supabase is loaded)
let supabase = null;

// Load Supabase from CDN if not already loaded
function loadSupabase() {
    return new Promise((resolve, reject) => {
        if (window.supabase) {
            supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            resolve(supabase);
            return;
        }

        // Load Supabase from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        script.onload = () => {
            supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            resolve(supabase);
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Client-side location service
const clientLocationService = {
    // Initialize Supabase client
    async init() {
        if (!supabase) {
            await loadSupabase();
        }
        return supabase;
    },

    // Get all locations (client-side)
    async getAllLocations() {
        try {
            await this.init();
            const { data, error } = await supabase
                .from('locations')
                .select('*')
                .eq('status', 'active')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error fetching locations:', error);
            throw error;
        }
    },

    // Get location by slug (client-side)
    async getLocationBySlug(slug) {
        try {
            await this.init();
            const { data, error } = await supabase
                .from('locations')
                .select('*')
                .eq('slug', slug)
                .eq('status', 'active')
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching location by slug:', error);
            return null;
        }
    },

    // Search locations (client-side)
    async searchLocations(query) {
        try {
            await this.init();
            const { data, error } = await supabase
                .from('locations')
                .select('*')
                .or(`city.ilike.%${query}%,state.ilike.%${query}%,name.ilike.%${query}%`)
                .eq('status', 'active')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error searching locations:', error);
            throw error;
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { clientLocationService };
} else {
    window.clientLocationService = clientLocationService;
} 