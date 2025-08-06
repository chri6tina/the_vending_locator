const fs = require('fs').promises;
const path = require('path');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { locationData } = JSON.parse(event.body);
        
        if (!locationData || !locationData.city || !locationData.state || !locationData.slug) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required location data' })
            };
        }

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

        // Format coordinates for display
        const coordinates = locationData.latitude && locationData.longitude ? 
            `${locationData.latitude}, ${locationData.longitude}` : 
            'Coordinates not specified';

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
        template = template.replace(/LOCATION_COORDINATES/g, coordinates);
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
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: `Location page created successfully`,
                url: `/location/${locationData.slug}.html`,
                seo: {
                    title: metaTitle,
                    description: metaDescription,
                    keywords: metaKeywords
                },
                location: {
                    name: locationName,
                    slug: locationData.slug,
                    coordinates: coordinates
                }
            })
        };

    } catch (error) {
        console.error('Error generating location page:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate location page' })
        };
    }
}; 