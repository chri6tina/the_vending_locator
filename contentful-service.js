// Contentful Service for Blog Posts
class ContentfulService {
    constructor(client) {
        this.client = client;
    }

    async getBlogPosts(limit = 12) {
        try {
            const response = await this.client.getEntries({
                content_type: 'blogPost',
                order: '-sys.createdAt',
                limit: limit,
                include: 2
            });
            return response.items;
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            return [];
        }
    }

    async getBlogPostBySlug(slug) {
        try {
            const response = await this.client.getEntries({
                content_type: 'blogPost',
                'fields.slug': slug,
                include: 2
            });
            return response.items[0] || null;
        } catch (error) {
            console.error('Error fetching blog post:', error);
            return null;
        }
    }

    async getBlogPostsByCategory(category, limit = 6) {
        try {
            const response = await this.client.getEntries({
                content_type: 'blogPost',
                'fields.category': category,
                order: '-sys.createdAt',
                limit: limit,
                include: 2
            });
            return response.items;
        } catch (error) {
            console.error('Error fetching blog posts by category:', error);
            return [];
        }
    }

    formatBlogPost(entry) {
        const fields = entry.fields;
        
        // Fix image URL by adding https: protocol if needed
        let featuredImage = fields.featuredImage?.fields?.file?.url || '';
        if (featuredImage && featuredImage.startsWith('//')) {
            featuredImage = 'https:' + featuredImage;
        }
        
        return {
            id: entry.sys.id,
            title: fields.title || '',
            slug: fields.slug || '',
            excerpt: fields.excerpt || '',
            content: fields.content || '',
            category: fields.category || '',
            featuredImage: featuredImage,
            author: fields.author || '',
            publishDate: fields.publishDate || entry.sys.createdAt,
            readTime: fields.readTime || '5 min read',
            tags: Array.isArray(fields.tags) ? fields.tags : []
        };
    }
}

// Initialize service
window.contentfulService = new ContentfulService(window.contentfulClient); 