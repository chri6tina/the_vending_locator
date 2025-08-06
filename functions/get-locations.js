const { supabase } = require('./supabase-config');

// Server-side location service
const locationService = {
    // Get all locations
    async getAllLocations() {
        try {
            const { data, error } = await supabase
                .from('locations')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error fetching locations:', error);
            throw error;
        }
    },

    // Get location by slug
    async getLocationBySlug(slug) {
        try {
            const { data, error } = await supabase
                .from('locations')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching location by slug:', error);
            return null;
        }
    }
};

exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const locations = await locationService.getAllLocations();
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                locations: locations
            })
        };

    } catch (error) {
        console.error('Error fetching locations:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to fetch locations',
                details: error.message 
            })
        };
    }
}; 