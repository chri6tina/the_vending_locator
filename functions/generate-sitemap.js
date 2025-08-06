const fs = require('fs').promises;
const path = require('path');

exports.handler = async (event, context) => {
    try {
        // Base sitemap content
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://thevendinglocator.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://thevendinglocator.com/services.html</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://thevendinglocator.com/pricing.html</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://thevendinglocator.com/hot-leads.html</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://thevendinglocator.com/blog.html</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://thevendinglocator.com/contact.html</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://thevendinglocator.com/directory</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>`;

        // Add location pages to sitemap
        const locationsDir = path.join(__dirname, '../locations');
        try {
            const locationFiles = await fs.readdir(locationsDir);
            const htmlFiles = locationFiles.filter(file => file.endsWith('.html'));
            
            for (const file of htmlFiles) {
                const slug = file.replace('.html', '');
                sitemap += `
    <url>
        <loc>https://thevendinglocator.com/locations/${slug}.html</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`;
            }
        } catch (error) {
            console.log('No locations directory found or no location files');
        }

        sitemap += `
</urlset>`;

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600'
            },
            body: sitemap
        };

    } catch (error) {
        console.error('Error generating sitemap:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate sitemap' })
        };
    }
}; 