const { vendorService } = require('./vendor-service');

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
        const vendors = await vendorService.getAllVendors();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                vendors: vendors
            })
        };

    } catch (error) {
        console.error('Error fetching vendors:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to fetch vendors',
                details: error.message 
            })
        };
    }
}; 