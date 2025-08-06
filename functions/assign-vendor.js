const { vendorAssignmentService } = require('./vendor-service');

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
        const { vendorId, locationId, serviceAreas, notes } = JSON.parse(event.body);
        
        console.log('Received assignment data:', { vendorId, locationId, serviceAreas, notes });
        
        // Validate required fields
        if (!vendorId || !locationId) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing required fields: vendorId, locationId' })
            };
        }

        // Assign vendor to location
        const assignment = await vendorAssignmentService.assignVendorToLocation(
            vendorId, 
            locationId, 
            serviceAreas || [], 
            notes || ''
        );

        console.log('Vendor assigned successfully:', assignment);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Vendor assigned successfully',
                assignment: assignment
            })
        };

    } catch (error) {
        console.error('Error in assign-vendor:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to assign vendor',
                details: error.message 
            })
        };
    }
}; 