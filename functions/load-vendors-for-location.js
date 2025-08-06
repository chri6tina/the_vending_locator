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

    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { locationId, locationSlug } = event.queryStringParameters || {};
        
        if (!locationId && !locationSlug) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing required parameter: locationId or locationSlug' })
            };
        }

        console.log('Fetching vendors for location:', { locationId, locationSlug });

        let assignments;
        
        if (locationId) {
            // Get assignments by location ID
            assignments = await vendorAssignmentService.getAssignmentsByLocation(locationId);
        } else {
            // Get assignments by location slug (would need to implement this)
            // For now, return empty array
            assignments = [];
        }

        console.log('Found vendor assignments:', assignments);

        // Extract vendor data from assignments
        const vendors = assignments.map(assignment => ({
            ...assignment.vendors,
            assignment_id: assignment.id,
            assigned_date: assignment.assigned_date,
            service_areas: assignment.service_areas || []
        }));

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                vendors: vendors,
                assignments: assignments
            })
        };

    } catch (error) {
        console.error('Error fetching vendors for location:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to fetch vendors for location',
                details: error.message 
            })
        };
    }
}; 