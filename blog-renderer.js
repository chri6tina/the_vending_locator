// Blog Renderer for Contentful Integration
class BlogRenderer {
    constructor() {
        this.postsGrid = document.querySelector('.posts-grid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.currentCategory = 'all';
        this.posts = [];
    }

    async renderBlogPosts() {
        try {
            // Initialize Contentful if not already done
            if (!window.contentfulService) {
                this.initializeContentful();
            }

            // Get all blog posts
            const entries = await window.contentfulService.getBlogPosts();
            this.posts = entries.map(entry => window.contentfulService.formatBlogPost(entry));
            
            // Render posts
            this.renderPosts(this.posts);
            
            // Set up category filters
            this.setupFilters();
            
        } catch (error) {
            console.error('Error rendering blog posts:', error);
            this.showError();
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

    renderPosts(posts) {
        if (!this.postsGrid) return;

        this.postsGrid.innerHTML = posts.map(post => this.createPostHTML(post)).join('');
    }

    createPostHTML(post) {
        const imageUrl = post.featuredImage || 'https://via.placeholder.com/400x250?text=Vending+Tips';
        const categoryClass = post.category ? post.category.replace(/\s+/g, '-').toLowerCase() : '';
        
        return `
            <article class="blog-post ${categoryClass}" data-category="${post.category || ''}">
                <div class="post-image">
                    <img src="${imageUrl}" alt="${post.title}" loading="lazy">
                    <div class="post-category">
                        <span>${post.category || 'Vending Tips'}</span>
                    </div>
                </div>
                <div class="post-content">
                    <h2><a href="/blog/${post.slug}">${post.title}</a></h2>
                    <div class="post-meta">
                        <span class="post-date">${this.formatDate(post.publishDate)}</span>
                        <span class="post-read-time">${post.readTime}</span>
                    </div>
                    <p>${post.excerpt}</p>
                    <a href="/blog/${post.slug}" class="read-more">Read More →</a>
                </div>
            </article>
        `;
    }

    setupFilters() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                this.filterPosts(category);
                
                // Update active button
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    filterPosts(category) {
        const posts = document.querySelectorAll('.blog-post');
        
        posts.forEach(post => {
            const postCategory = post.dataset.category;
            
            if (category === 'all' || postCategory === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    showError() {
        if (this.postsGrid) {
            this.postsGrid.innerHTML = `
                <div class="error-posts">
                    <div class="error-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3>Unable to Load Blog Posts</h3>
                    <p>We're experiencing technical difficulties. Please try again later.</p>
                </div>
            `;
        }
    }
}

// Initialize blog renderer
window.blogRenderer = new BlogRenderer(); 