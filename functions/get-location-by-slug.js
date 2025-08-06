const { locationService } = require('./supabase-client');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Extract slug from path
        const pathSegments = event.path.split('/');
        const slug = pathSegments[pathSegments.length - 1];

        if (!slug) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Location slug is required' })
            };
        }

        // Get location by slug
        const location = await locationService.getLocationBySlug(slug);

        if (!location) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Location not found' })
            };
        }

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=600' // Cache for 10 minutes
            },
            body: JSON.stringify({
                success: true,
                location: location
            })
        };

    } catch (error) {
        console.error('Error fetching location by slug:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Failed to fetch location data',
                details: error.message 
            })
        };
    }
}; 