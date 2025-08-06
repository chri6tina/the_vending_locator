const { locationService } = require('./supabase-client');

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

    try {
        console.log('Testing Supabase connection...');
        
        // Test basic connection by trying to get locations
        const locations = await locationService.getAllLocations();
        
        console.log('Connection successful, found', locations.length, 'locations');
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Supabase connection successful',
                locationCount: locations.length
            })
        };

    } catch (error) {
        console.error('Supabase connection test failed:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Supabase connection failed',
                details: error.message 
            })
        };
    }
}; 