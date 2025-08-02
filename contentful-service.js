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
        return {
            id: entry.sys.id,
            title: fields.title || '',
            slug: fields.slug || '',
            excerpt: fields.excerpt || '',
            content: fields.content || '',
            category: fields.category || '',
            featuredImage: fields.featuredImage?.fields?.file?.url || '',
            author: fields.author || '',
            publishDate: fields.publishDate || entry.sys.createdAt,
            readTime: fields.readTime || '5 min read',
            tags: fields.tags || []
        };
    }
}

// Initialize service
window.contentfulService = new ContentfulService(window.contentfulClient); 