// Contentful Service
// Handles all Contentful API interactions

class ContentfulService {
    constructor() {
        this.client = null;
        this.cache = new Map();
        this.cacheExpiry = 5 * 60 * 1000; // 5 minutes
        this.init();
    }

    init() {
        // Check if Contentful SDK is available
        if (typeof contentful !== 'undefined') {
            this.client = contentful.createClient({
                space: CONTENTFUL_CONFIG.spaceId,
                accessToken: CONTENTFUL_CONFIG.accessToken,
                environment: CONTENTFUL_CONFIG.environment
            });
        } else {
            console.error('Contentful SDK not loaded. Make sure to include the Contentful CDN script.');
        }
    }

    // Get all blog posts with optional filtering
    async getBlogPosts(options = {}) {
        const cacheKey = `blogPosts_${JSON.stringify(options)}`;
        
        // Check cache first
        if (this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            if (Date.now() - cached.timestamp < this.cacheExpiry) {
                return cached.data;
            }
        }

        try {
            if (!this.client) {
                throw new Error('Contentful client not initialized');
            }

            console.log('Contentful query:', {
                content_type: CONTENT_TYPES.blogPost,
                order: '-sys.createdAt',
                include: 2,
                ...options
            });
            
            const query = {
                content_type: CONTENT_TYPES.blogPost,
                order: '-sys.createdAt',
                include: 2, // Include linked entries
                ...options
            };

            const response = await this.client.getEntries(query);
            
            // Cache the result
            this.cache.set(cacheKey, {
                data: response,
                timestamp: Date.now()
            });

            return response;
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            throw error;
        }
    }

    // Get a single blog post by slug
    async getBlogPostBySlug(slug) {
        const cacheKey = `blogPost_${slug}`;
        
        // Check cache first
        if (this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            if (Date.now() - cached.timestamp < this.cacheExpiry) {
                return cached.data;
            }
        }

        try {
            if (!this.client) {
                throw new Error('Contentful client not initialized');
            }

            const response = await this.client.getEntries({
                content_type: CONTENT_TYPES.blogPost,
                'fields.slug': slug,
                include: 2
            });

            if (response.items.length === 0) {
                throw new Error(`Blog post with slug "${slug}" not found`);
            }

            const post = response.items[0];
            
            // Cache the result
            this.cache.set(cacheKey, {
                data: post,
                timestamp: Date.now()
            });

            return post;
        } catch (error) {
            console.error(`Error fetching blog post with slug "${slug}":`, error);
            throw error;
        }
    }

    // Get blog posts by category
    async getBlogPostsByCategory(category) {
        return this.getBlogPosts({
            'fields.category.sys.id': category
        });
    }

    // Get all categories
    async getCategories() {
        const cacheKey = 'categories';
        
        if (this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            if (Date.now() - cached.timestamp < this.cacheExpiry) {
                return cached.data;
            }
        }

        try {
            if (!this.client) {
                throw new Error('Contentful client not initialized');
            }

            const response = await this.client.getEntries({
                content_type: CONTENT_TYPES.category,
                order: 'fields.name'
            });

            this.cache.set(cacheKey, {
                data: response,
                timestamp: Date.now()
            });

            return response;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    }

    // Clear cache
    clearCache() {
        this.cache.clear();
    }

    // Format blog post data for display
    formatBlogPost(entry) {
        const fields = entry.fields;
        
        // Convert Rich Text content to HTML
        let contentHtml = '';
        if (fields.content) {
            try {
                // Simple Rich Text to HTML conversion
                contentHtml = this.renderRichText(fields.content);
            } catch (error) {
                console.error('Error rendering Rich Text:', error);
                contentHtml = '<p>Content could not be loaded.</p>';
            }
        }
        
        return {
            id: entry.sys.id,
            title: fields.title || '',
            slug: fields.slug || '',
            excerpt: fields.excerpt || '',
            content: contentHtml,
            featuredImage: fields.featuredImage?.fields?.file?.url || '',
            category: fields.category?.fields?.name || '',
            categorySlug: fields.category?.fields?.slug || '',
            author: fields.author?.fields?.name || 'The Vending Locator Team',
            publishDate: entry.sys.createdAt,
            tags: fields.tags || [],
            readTime: fields.readTime || '5 min read'
        };
    }

    // Render Rich Text content to HTML
    renderRichText(content) {
        if (!content || !content.content) {
            return '';
        }

        let html = '';
        
        content.content.forEach(node => {
            switch (node.nodeType) {
                case 'paragraph':
                    html += `<p>${this.renderMarks(node.content)}</p>`;
                    break;
                case 'heading-1':
                    html += `<h1>${this.renderMarks(node.content)}</h1>`;
                    break;
                case 'heading-2':
                    html += `<h2>${this.renderMarks(node.content)}</h2>`;
                    break;
                case 'heading-3':
                    html += `<h3>${this.renderMarks(node.content)}</h3>`;
                    break;
                case 'heading-4':
                    html += `<h4>${this.renderMarks(node.content)}</h4>`;
                    break;
                case 'heading-5':
                    html += `<h5>${this.renderMarks(node.content)}</h5>`;
                    break;
                case 'heading-6':
                    html += `<h6>${this.renderMarks(node.content)}</h6>`;
                    break;
                case 'unordered-list':
                    html += '<ul>';
                    node.content.forEach(item => {
                        html += `<li>${this.renderMarks(item.content)}</li>`;
                    });
                    html += '</ul>';
                    break;
                case 'ordered-list':
                    html += '<ol>';
                    node.content.forEach(item => {
                        html += `<li>${this.renderMarks(item.content)}</li>`;
                    });
                    html += '</ol>';
                    break;
                case 'blockquote':
                    html += `<blockquote>${this.renderMarks(node.content)}</blockquote>`;
                    break;
                case 'hr':
                    html += '<hr>';
                    break;
                case 'hyperlink':
                    html += `<a href="${node.data.uri}" target="_blank" rel="noopener">${this.renderMarks(node.content)}</a>`;
                    break;
                default:
                    if (node.content) {
                        html += this.renderMarks(node.content);
                    }
                    break;
            }
        });
        
        return html;
    }

    // Render text marks (bold, italic, etc.)
    renderMarks(content) {
        if (!content) return '';
        
        let text = '';
        content.forEach(item => {
            let itemText = item.value || '';
            
            if (item.marks) {
                item.marks.forEach(mark => {
                    switch (mark.type) {
                        case 'bold':
                            itemText = `<strong>${itemText}</strong>`;
                            break;
                        case 'italic':
                            itemText = `<em>${itemText}</em>`;
                            break;
                        case 'underline':
                            itemText = `<u>${itemText}</u>`;
                            break;
                        case 'code':
                            itemText = `<code>${itemText}</code>`;
                            break;
                        case 'superscript':
                            itemText = `<sup>${itemText}</sup>`;
                            break;
                        case 'subscript':
                            itemText = `<sub>${itemText}</sub>`;
                            break;
                        case 'strikethrough':
                            itemText = `<del>${itemText}</del>`;
                            break;
                    }
                });
            }
            
            text += itemText;
        });
        
        return text;
    }

    // Format category data
    formatCategory(entry) {
        const fields = entry.fields;
        return {
            id: entry.sys.id,
            name: fields.name || '',
            slug: fields.slug || '',
            description: fields.description || ''
        };
    }
}

// Create global instance
window.contentfulService = new ContentfulService(); 