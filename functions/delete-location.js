const fs = require('fs').promises;
const path = require('path');
const { locationService } = require('./supabase-client');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { locationId, slug, city, state } = JSON.parse(event.body);
        
        if (!locationId || !slug) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required location data' })
            };
        }

        console.log(`Deleting location: ${city}, ${state} (ID: ${locationId}, Slug: ${slug})`);

        // Step 1: Delete from database using the shared service
        try {
            await locationService.hardDeleteLocation(locationId);
            console.log(`Location ${locationId} deleted from database`);
        } catch (dbError) {
            console.error('Database deletion error:', dbError);
            return {
                statusCode: 500,
                body: JSON.stringify({ 
                    error: 'Failed to delete location from database',
                    details: dbError.message 
                })
            };
        }

        // Step 2: Delete the generated HTML file
        try {
            const locationDir = path.join(__dirname, '../location');
            const filePath = path.join(locationDir, `${slug}.html`);
            
            // Check if file exists before trying to delete
            try {
                await fs.access(filePath);
                await fs.unlink(filePath);
                console.log(`Deleted file: ${filePath}`);
            } catch (fileError) {
                // File doesn't exist, which is okay
                console.log(`File ${filePath} doesn't exist, skipping file deletion`);
            }
        } catch (fileError) {
            console.error('File deletion error:', fileError);
            // Don't fail the entire operation if file deletion fails
            // The database deletion is more important
        }

        // Step 3: Generate updated sitemap
        try {
            // Trigger sitemap regeneration
            const sitemapResponse = await fetch(`${process.env.URL || 'http://localhost:8888'}/.netlify/functions/generate-sitemap`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ regenerate: true })
            });
            
            if (sitemapResponse.ok) {
                console.log('Sitemap regenerated successfully');
            }
        } catch (sitemapError) {
            console.error('Sitemap regeneration error:', sitemapError);
            // Don't fail the operation if sitemap regeneration fails
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: `Location ${city}, ${state} deleted successfully`,
                deletedLocation: {
                    id: locationId,
                    slug: slug,
                    city: city,
                    state: state
                }
            })
        };

    } catch (error) {
        console.error('Error deleting location:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Failed to delete location',
                details: error.message 
            })
        };
    }
}; 