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
        console.log('Testing location save...');
        
        // Test data
        const testLocation = {
            name: 'Test Vending Services',
            slug: 'test-location',
            city: 'Test City',
            state: 'TS',
            description: 'Test description',
            meta_title: 'Test Meta Title',
            meta_description: 'Test meta description',
            meta_keywords: 'test, keywords',
            about: 'Test about section'
        };

        console.log('Attempting to save test location:', testLocation);
        
        // Try to save the test location
        const savedLocation = await locationService.saveLocation(testLocation);
        
        console.log('Successfully saved location:', savedLocation);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Test location saved successfully',
                location: savedLocation
            })
        };

    } catch (error) {
        console.error('Error in test save location:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to save test location',
                details: error.message,
                stack: error.stack
            })
        };
    }
}; 