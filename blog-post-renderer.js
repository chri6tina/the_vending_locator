// Blog Post Renderer for Individual Blog Posts
class BlogPostRenderer {
    constructor() {
        this.slug = this.getSlugFromURL();
        this.init();
    }

    getSlugFromURL() {
        const path = window.location.pathname;
        const slug = path.split('/blog/')[1];
        return slug || null;
    }

    async init() {
        try {
            // Wait for Contentful SDK to load
            if (typeof contentful === 'undefined') {
                console.error('Contentful SDK not loaded');
                this.showError('Contentful SDK not available');
                return;
            }

            // Initialize Contentful client if not already done
            if (!window.contentfulClient) {
                this.initializeContentful();
            }

            // Load the blog post
            await this.loadBlogPost();

        } catch (error) {
            console.error('Error initializing blog post renderer:', error);
            this.showError('Unable to initialize blog post');
        }
    }

    initializeContentful() {
        try {
            const client = contentful.createClient({
                space: 'xpopyri6s8gv',
                accessToken: 'as1yT7ZCd27_ByA_MBu0lzJDQZVWmxafx2mfM-c9ooY',
                environment: 'master'
            });
            window.contentfulClient = client;
            window.contentfulService = new ContentfulService(client);
        } catch (error) {
            console.error('Error initializing Contentful:', error);
        }
    }

    async loadBlogPost() {
        try {
            if (!this.slug) {
                this.showError('No blog post specified');
                return;
            }

            // Get the blog post from Contentful
            const post = await window.contentfulService.getBlogPostBySlug(this.slug);
            
            if (!post) {
                this.showError('Blog post not found');
                return;
            }

            // Update the page content
            this.updatePageContent(post);
            
            // Update page title and meta
            this.updatePageMeta(post);

        } catch (error) {
            console.error('Error loading blog post:', error);
            this.showError('Unable to load blog post');
        }
    }

    updatePageContent(post) {
        // Update title
        const titleElement = document.getElementById('post-title');
        if (titleElement) titleElement.textContent = post.title;

        // Update category
        const categoryElement = document.getElementById('post-category');
        if (categoryElement) categoryElement.textContent = post.category || 'Vending Tips';

        // Update date
        const dateElement = document.getElementById('post-date');
        if (dateElement) dateElement.textContent = this.formatDate(post.publishDate);

        // Update author
        const authorElement = document.getElementById('post-author');
        if (authorElement) authorElement.textContent = post.author || 'The Vending Locator Team';

        // Update read time
        const readTimeElement = document.getElementById('post-read-time');
        if (readTimeElement) readTimeElement.textContent = post.readTime || '5 min read';

        // Update featured image
        const imageElement = document.querySelector('#post-image img');
        if (imageElement) {
            if (post.featuredImage) {
                imageElement.src = post.featuredImage;
                imageElement.alt = post.title;
            } else {
                imageElement.src = 'https://via.placeholder.com/800x400?text=Vending+Tips';
                imageElement.alt = 'Vending Tips';
            }
        }

        // Update content
        const contentElement = document.getElementById('post-content');
        if (contentElement) {
            contentElement.innerHTML = this.formatContent(post.content);
        }

        // Update tags
        const tagsElement = document.getElementById('post-tags');
        if (tagsElement && post.tags && post.tags.length > 0) {
            tagsElement.innerHTML = post.tags.map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('');
        }
    }

    updatePageMeta(post) {
        // Update page title
        document.title = `${post.title} - The Vending Locator Blog`;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = post.excerpt || 'Read expert vending industry tips and strategies from The Vending Locator blog.';
        }

        // Update Open Graph tags
        this.updateOpenGraph(post);
    }

    updateOpenGraph(post) {
        // Update OG title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.content = post.title;

        // Update OG description
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.content = post.excerpt || 'Read expert vending industry tips and strategies from The Vending Locator blog.';

        // Update OG image
        if (post.featuredImage) {
            let ogImage = document.querySelector('meta[property="og:image"]');
            if (!ogImage) {
                ogImage = document.createElement('meta');
                ogImage.setAttribute('property', 'og:image');
                document.head.appendChild(ogImage);
            }
            ogImage.content = post.featuredImage;
        }

        // Update OG URL
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (!ogUrl) {
            ogUrl = document.createElement('meta');
            ogUrl.setAttribute('property', 'og:url');
            document.head.appendChild(ogUrl);
        }
        ogUrl.content = window.location.href;
    }

    formatContent(content) {
        if (!content) {
            return '<p>Content not available.</p>';
        }

        // Convert markdown-like content to HTML
        // This is a simple formatter - you might want to use a proper markdown parser
        let formattedContent = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>');

        return `<p>${formattedContent}</p>`;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    showError(message) {
        const container = document.querySelector('.single-blog-post .container');
        if (container) {
            container.innerHTML = `
                <div class="error-posts">
                    <div class="error-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3>${message}</h3>
                    <p>Please check the URL or return to the <a href="/blog">blog homepage</a>.</p>
                </div>
            `;
        }
    }
}

// Initialize blog post renderer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new BlogPostRenderer();
}); 