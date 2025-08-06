const { vendorAssignmentService } = require('./vendor-service');

exports.handler = async function(event, context) {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        // Get vendor_id from query parameters
        const { vendor_id } = event.queryStringParameters || {};
        
        if (!vendor_id) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    success: false,
                    error: 'vendor_id parameter is required'
                })
            };
        }

        // Get assignments for this vendor
        const assignments = await vendorAssignmentService.getAssignmentsByVendor(vendor_id);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                assignments: assignments
            })
        };

    } catch (error) {
        console.error('Error in get-vendor-assignments:', error);
        
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'Failed to get vendor assignments',
                details: error.message
            })
        };
    }
}; 