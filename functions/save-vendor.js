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

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { vendorData } = JSON.parse(event.body);
        
        console.log('Received vendor data:', vendorData);
        
        // Validate required fields
        if (!vendorData.name) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing required field: name' })
            };
        }

        // Prepare vendor data for database
        const vendorToSave = {
            name: vendorData.name,
            email: vendorData.email || null,
            phone: vendorData.phone || null,
            website: vendorData.website || null,
            address: vendorData.address || null,
            city: vendorData.city || null,
            state: vendorData.state || null,
            description: vendorData.description || null,
            status: vendorData.status || 'active',
            icon: vendorData.icon || 'fas fa-store',
            years_in_business: parseInt(vendorData.years_in_business) || 0,
            service_focus: parseInt(vendorData.service_focus) || 0,
            reviews: parseInt(vendorData.reviews) || 0,
            services: vendorData.services || [],
            service_areas: vendorData.service_areas || [],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        console.log('Saving vendor:', vendorToSave);

        // Save to database
        const savedVendor = await vendorService.saveVendor(vendorToSave);

        console.log('Vendor saved successfully:', savedVendor);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Vendor saved successfully',
                vendor: savedVendor
            })
        };

    } catch (error) {
        console.error('Error in save-vendor:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to save vendor',
                details: error.message 
            })
        };
    }
}; 