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
        const { locations } = JSON.parse(event.body);
        
        if (!locations || !Array.isArray(locations)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing or invalid locations data' })
            };
        }

        console.log(`Bulk deleting ${locations.length} locations`);

        let deletedCount = 0;
        let errors = [];

        // Step 1: Delete all from database using the shared service
        try {
            await locationService.hardDeleteAllLocations();
            console.log('All locations deleted from database');
        } catch (dbError) {
            console.error('Database bulk deletion error:', dbError);
            return {
                statusCode: 500,
                body: JSON.stringify({ 
                    error: 'Failed to delete locations from database',
                    details: dbError.message 
                })
            };
        }

        // Step 2: Delete all generated HTML files
        const locationDir = path.join(__dirname, '../location');
        
        try {
            // Get all files in the location directory
            const files = await fs.readdir(locationDir);
            
            for (const file of files) {
                if (file.endsWith('.html') && file !== 'index.html') {
                    try {
                        await fs.unlink(path.join(locationDir, file));
                        console.log(`Deleted file: ${file}`);
                        deletedCount++;
                    } catch (fileError) {
                        console.error(`Error deleting file ${file}:`, fileError);
                        errors.push(`Failed to delete ${file}`);
                    }
                }
            }
        } catch (dirError) {
            console.error('Directory access error:', dirError);
            // Don't fail the operation if directory access fails
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
                message: `Successfully deleted ${deletedCount} location pages`,
                deletedCount: deletedCount,
                errors: errors.length > 0 ? errors : undefined
            })
        };

    } catch (error) {
        console.error('Error bulk deleting locations:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Failed to bulk delete locations',
                details: error.message 
            })
        };
    }
}; 