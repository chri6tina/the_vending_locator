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

    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Path to the location directory
        const locationDir = path.join(__dirname, '../location');
        
        // Check if the directory exists
        try {
            await fs.access(locationDir);
        } catch (error) {
            // Directory doesn't exist, return empty array
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    success: true,
                    createdPages: []
                })
            };
        }

        // Read all files in the location directory
        const files = await fs.readdir(locationDir);
        
        // Filter for HTML files (excluding index.html)
        const htmlFiles = files.filter(file => 
            file.endsWith('.html') && file !== 'index.html'
        );

        // Extract location data from filenames
        const createdPages = htmlFiles.map(file => {
            // Remove .html extension to get slug
            const slug = file.replace('.html', '');
            
            // Parse city and state from slug (format: city-state)
            const parts = slug.split('-');
            if (parts.length >= 2) {
                const state = parts[parts.length - 1].toUpperCase();
                const city = parts.slice(0, -1).join('-').replace(/-/g, ' ');
                
                return {
                    slug: slug,
                    city: city.split(' ').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' '),
                    state: state
                };
            }
            
            return {
                slug: slug,
                city: 'Unknown',
                state: 'Unknown'
            };
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                createdPages: createdPages
            })
        };

    } catch (error) {
        console.error('Error getting created location pages:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to get created location pages',
                details: error.message 
            })
        };
    }
}; 