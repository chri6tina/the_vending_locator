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

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { locationData } = JSON.parse(event.body);
        
        // Validate required fields
        if (!locationData.city || !locationData.state) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing required fields: city, state' })
            };
        }

        // Create location data with all required fields
        const locationToSave = {
            name: `Vending Services ${locationData.city}`,
            slug: `${locationData.city.toLowerCase()}-${locationData.state.toLowerCase()}`,
            city: locationData.city,
            state: locationData.state,
            description: locationData.description || `Professional vending services in ${locationData.city}, ${locationData.state}`,
            meta_title: locationData.meta_title || `Vending Services in ${locationData.city}, ${locationData.state} - Professional Vending Solutions`,
            meta_description: locationData.meta_description || `Professional vending services in ${locationData.city}, ${locationData.state}. Snack vending, beverage vending, and coffee service.`,
            meta_keywords: locationData.meta_keywords || `vending machines, snack vending, beverage vending, coffee service, ${locationData.city.toLowerCase()}, ${locationData.state.toLowerCase()}`,
            about: locationData.about || `We are a trusted vending services provider serving ${locationData.city}, ${locationData.state} and surrounding areas.`
        };

        // Save location to Supabase
        const savedLocation = await locationService.saveLocation(locationToSave);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Location saved successfully',
                location: savedLocation,
                url: `/location/${savedLocation.slug}`
            })
        };

    } catch (error) {
        console.error('Error saving location:', error);
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