const { createClient } = require('@supabase/supabase-js');

// Use environment variables for Supabase config
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://apkppvpxaayoenoaacpi.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwa3BwdnB4YWF5b2Vub2FhY3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MjM2MTYsImV4cCI6MjA2OTk5OTYxNn0.O1x1L0ZOGtqcANZ9iwm_1w1GMRIOsBPFt-HpepbMviA';

// Create Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { locationData } = JSON.parse(event.body);
        
        console.log('Received location data:', locationData);
        
        // Validate required fields
        if (!locationData.city || !locationData.state) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing required fields: city, state' })
            };
        }

        // Generate a clean slug without timestamp
        const slug = `${locationData.city.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${locationData.state.toLowerCase()}`;

        // Create location data
        const locationToSave = {
            name: `Vending Services ${locationData.city}`,
            slug: slug,
            city: locationData.city,
            state: locationData.state,
            description: locationData.description || `Professional vending services in ${locationData.city}, ${locationData.state}`,
            meta_title: locationData.meta_title || `Vending Services in ${locationData.city}, ${locationData.state} - Professional Vending Solutions`,
            meta_description: locationData.meta_description || `Professional vending services in ${locationData.city}, ${locationData.state}. Snack vending, beverage vending, and coffee service.`,
            meta_keywords: locationData.meta_keywords || `vending machines, snack vending, beverage vending, coffee service, ${locationData.city.toLowerCase()}, ${locationData.state.toLowerCase()}`,
            about: locationData.about || `We are a trusted vending services provider serving ${locationData.city}, ${locationData.state} and surrounding areas.`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            status: 'active'
        };

        console.log('Saving location:', locationToSave);

        // Save to Supabase
        const { data, error } = await supabase
            .from('locations')
            .insert([locationToSave])
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ 
                    error: 'Failed to save location',
                    details: error.message 
                })
            };
        }

        console.log('Location saved successfully:', data);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Location saved successfully',
                location: data,
                url: `/location/${data.slug}`
            })
        };

    } catch (error) {
        console.error('Error in simple-save-location:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to save location',
                details: error.message 
            })
        };
    }
}; 