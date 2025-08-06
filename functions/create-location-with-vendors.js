const { locationService } = require('./supabase-client');
const { vendorAssignmentService } = require('./vendor-service');
const fs = require('fs').promises;
const path = require('path');

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
        const { locationData, vendorIds = [] } = JSON.parse(event.body);
        
        console.log('Creating location with vendors:', { locationData, vendorIds });
        
        // Validate required fields
        if (!locationData.city || !locationData.state) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing required fields: city, state' })
            };
        }

        // Step 1: Save location to database
        const savedLocation = await locationService.saveLocation(locationData);
        console.log('Location saved:', savedLocation);

        // Step 2: Generate location page
        const pageResult = await generateLocationPage(savedLocation);
        console.log('Location page generated:', pageResult);

        // Step 3: Assign vendors (if provided)
        let assignments = [];
        if (vendorIds.length > 0) {
            assignments = await vendorAssignmentService.bulkAssignVendors(
                savedLocation.id, 
                vendorIds
            );
            console.log('Vendors assigned:', assignments);
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Location created with vendors successfully',
                location: savedLocation,
                page: pageResult,
                assignments: assignments,
                url: `/location/${savedLocation.slug}`
            })
        };

    } catch (error) {
        console.error('Error creating location with vendors:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to create location with vendors',
                details: error.message 
            })
        };
    }
};

// Helper function to generate location page
async function generateLocationPage(locationData) {
    try {
        // Read the template
        const templatePath = path.join(__dirname, '../location-template.html');
        let template = await fs.readFile(templatePath, 'utf8');

        // Generate SEO-optimized meta content
        const locationName = `${locationData.city}, ${locationData.state}`;
        const metaTitle = locationData.meta_title || `Vending Services in ${locationName} | The Vending Locator`;
        const metaDescription = locationData.meta_description || 
            `Find reliable vending machine services in ${locationName}. We provide snack vending, beverage vending, coffee service, and healthy food options throughout ${locationData.city}. Contact us for professional vending solutions.`;
        const metaKeywords = locationData.meta_keywords || 
            `vending machines ${locationData.city}, vending services ${locationData.state}, snack vending ${locationData.city}, beverage vending ${locationData.state}, coffee service ${locationData.city}, vending machine company ${locationData.state}, office vending ${locationData.city}, healthy vending ${locationData.state}`;

        // Generate location-specific content
        const locationAbout = locationData.description || 
            `We provide comprehensive vending services throughout ${locationData.city}, ${locationData.state}. Our team is dedicated to keeping your locations stocked with quality products including snacks, beverages, coffee, and healthy options. Whether you need vending machines for your office, retail space, or healthcare facility, we have the solutions you need.`;

        // Replace all placeholders with actual data
        template = template.replace(/META_TITLE/g, metaTitle);
        template = template.replace(/META_DESCRIPTION/g, metaDescription);
        template = template.replace(/META_KEYWORDS/g, metaKeywords);
        template = template.replace(/LOCATION_SLUG/g, locationData.slug);
        template = template.replace(/LOCATION_NAME/g, locationName);
        template = template.replace(/LOCATION_CITY/g, locationData.city);
        template = template.replace(/LOCATION_STATE/g, locationData.state);
        template = template.replace(/LOCATION_DESCRIPTION/g, locationData.description || `Professional vending services in ${locationName}`);
        template = template.replace(/LOCATION_ADDRESS/g, `${locationData.city}, ${locationData.state}`);
        template = template.replace(/LOCATION_ABOUT/g, locationAbout);
        template = template.replace(/LOCATION_EMAIL/g, 'info@thevendinglocator.com');
        template = template.replace(/LOCATION_WEBSITE/g, 'www.thevendinglocator.com');
        template = template.replace(/LOCATION_COORDINATES/g, locationData.latitude && locationData.longitude ? `${locationData.latitude}, ${locationData.longitude}` : 'Coordinates not specified');
        template = template.replace(/LOCATION_LAT/g, locationData.latitude || '0');
        template = template.replace(/LOCATION_LNG/g, locationData.longitude || '0');

        // Create the location directory if it doesn't exist
        const locationDir = path.join(__dirname, '../location');
        try {
            await fs.access(locationDir);
        } catch {
            await fs.mkdir(locationDir, { recursive: true });
        }

        // Write the generated page
        const outputPath = path.join(locationDir, `${locationData.slug}.html`);
        await fs.writeFile(outputPath, template);

        return {
            success: true,
            path: outputPath,
            url: `/location/${locationData.slug}.html`
        };

    } catch (error) {
        console.error('Error generating location page:', error);
        throw error;
    }
} 