// Blog Renderer
// Handles rendering blog posts from Contentful data

class BlogRenderer {
    constructor() {
        this.postsContainer = document.querySelector('.posts-grid');
        this.singlePostContainer = document.querySelector('#blog-post-container');
        this.loadingTemplate = this.createLoadingTemplate();
        this.errorTemplate = this.createErrorTemplate();
    }

    // Create loading template
    createLoadingTemplate() {
        return `
            <div class="loading-posts">
                <div class="loading-spinner"></div>
                <p>Loading blog posts...</p>
            </div>
        `;
    }

    // Create error template
    createErrorTemplate(message = 'Failed to load blog posts') {
        return `
            <div class="error-posts">
                <div class="error-icon">⚠️</div>
                <h3>Oops! Something went wrong</h3>
                <p>${message}</p>
                <button onclick="location.reload()" class="btn-primary">Try Again</button>
            </div>
        `;
    }

    // Show loading state
    showLoading() {
        const container = this.postsContainer || this.singlePostContainer;
        if (container) {
            container.innerHTML = this.loadingTemplate;
        }
    }

    // Show error state
    showError(message) {
        const container = this.postsContainer || this.singlePostContainer;
        if (container) {
            container.innerHTML = this.createErrorTemplate(message);
        }
    }

    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Create slug from title
    createSlugFromTitle(title) {
        if (!title) return '';
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single
            .trim();
    }

    // Create blog post HTML
    createBlogPostHTML(post) {
        const imageUrl = post.featuredImage || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
        const categorySlug = post.categorySlug || 'vending-101';
        
        // Create a safe slug from the title if slug is missing
        const safeSlug = post.slug || this.createSlugFromTitle(post.title);
        const postUrl = safeSlug ? `/blog/${safeSlug}` : '#';
        
        return `
            <article class="blog-post" data-category="${categorySlug}">
                <div class="post-image">
                    <img src="${imageUrl}" alt="${post.title}" loading="lazy">
                    <div class="post-category">${post.category}</div>
                </div>
                <div class="post-content">
                    <h2><a href="${postUrl}">${post.title}</a></h2>
                    <div class="post-meta">
                        <span class="post-author">By ${post.author}</span>
                        <span class="post-date">${this.formatDate(post.publishDate)}</span>
                        <span class="post-read-time">${post.readTime}</span>
                    </div>
                    <p>${post.excerpt}</p>
                    <div class="post-tags">
                        ${Array.isArray(post.tags) ? post.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                    </div>
                    <a href="${postUrl}" class="read-more">Read More</a>
                </div>
            </article>
        `;
    }

    // Render blog posts
    async renderBlogPosts(options = {}) {
        try {
            this.showLoading();

            const response = await contentfulService.getBlogPosts(options);
            const posts = response.items.map(entry => contentfulService.formatBlogPost(entry));

            if (posts.length === 0) {
                this.showError('No blog posts found.');
                return;
            }

            if (this.postsContainer) {
                this.postsContainer.innerHTML = posts.map(post => this.createBlogPostHTML(post)).join('');
            }

            // Reinitialize any interactive elements
            this.initializePostInteractions();

        } catch (error) {
            console.error('Error rendering blog posts:', error);
            this.showError('Failed to load blog posts. Please try again later.');
        }
    }

    // Render single blog post
    async renderSinglePost(slug) {
        try {
            console.log('Rendering single blog post for slug:', slug);
            this.showLoading();

            const post = await contentfulService.getBlogPostBySlug(slug);
            console.log('Contentful response:', post);
            
            const formattedPost = contentfulService.formatBlogPost(post);
            console.log('Formatted post:', formattedPost);

            const container = this.singlePostContainer || this.postsContainer;
            if (container) {
                container.innerHTML = this.createSinglePostHTML(formattedPost);
                console.log('Blog post HTML rendered successfully');
            }

            // Reinitialize any interactive elements
            this.initializePostInteractions();

        } catch (error) {
            console.error('Error rendering single blog post:', error);
            this.showError(`Blog post "${slug}" not found or failed to load. Error: ${error.message}`);
        }
    }

    // Create single blog post HTML
    createSinglePostHTML(post) {
        const imageUrl = post.featuredImage || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
        
        // Process content to add image positioning classes
        let processedContent = this.processContentForImages(post.content);
        
        return `
            <article class="single-blog-post">
                <div class="post-header">
                    <div class="post-category">${post.category}</div>
                    <h1>${post.title}</h1>
                    <div class="post-meta">
                        <span class="post-author">By ${post.author}</span>
                        <span class="post-date">${this.formatDate(post.publishDate)}</span>
                        <span class="post-read-time">${post.readTime}</span>
                    </div>
                    <div class="post-tags">
                        ${Array.isArray(post.tags) ? post.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                    </div>
                </div>
                
                <div class="post-featured-image">
                    <img src="${imageUrl}" alt="${post.title}">
                </div>
                
                <div class="post-content">
                    ${processedContent}
                </div>
                
                <div class="post-footer">
                    <a href="/blog.html" class="back-to-blog">← Back to Blog</a>
                </div>
            </article>
        `;
    }

    // Process content to add image positioning classes
    processContentForImages(content) {
        if (!content) return '';
        
        // Convert content to handle images with positioning
        let processedContent = content;
        
        // Find all img tags and add positioning classes
        processedContent = processedContent.replace(
            /<img([^>]+)>/g,
            (match, attributes) => {
                // Check if image has positioning attributes
                const hasLeft = attributes.includes('class="image-left"') || attributes.includes('class=\'image-left\'');
                const hasRight = attributes.includes('class="image-right"') || attributes.includes('class=\'image-right\'');
                const hasCenter = attributes.includes('class="image-center"') || attributes.includes('class=\'image-center\'');
                
                if (!hasLeft && !hasRight && !hasCenter) {
                    // Default to center positioning for featured images
                    return `<img${attributes} class="image-center">`;
                }
                
                return match;
            }
        );
        
        // Add caption support for images
        processedContent = processedContent.replace(
            /<img([^>]+)alt="([^"]+)">/g,
            (match, attributes, alt) => {
                return `<img${attributes}alt="${alt}"><div class="image-caption">${alt}</div>`;
            }
        );
        
        return processedContent;
    }

    // Initialize post interactions (like lazy loading, etc.)
    initializePostInteractions() {
        // Add lazy loading to images
        const images = document.querySelectorAll('.blog-post img');
        images.forEach(img => {
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.src = entry.target.dataset.src || entry.target.src;
                            observer.unobserve(entry.target);
                        }
                    });
                });
                observer.observe(img);
            }
        });

        // Add click handlers for category filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const category = button.dataset.category;
                this.filterPostsByCategory(category);
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    // Filter posts by category
    async filterPostsByCategory(category) {
        if (category === 'all') {
            await this.renderBlogPosts();
        } else {
            await this.renderBlogPosts({
                'fields.category.fields.slug': category
            });
        }
    }
}

// Create global instance
window.blogRenderer = new BlogRenderer(); 