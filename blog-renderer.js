// Blog Renderer for Contentful Integration
class BlogRenderer {
    constructor() {
        this.postsGrid = document.querySelector('.blog-grid');
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
            
            // If no posts from Contentful, use sample data
            if (this.posts.length === 0) {
                this.posts = this.getSamplePosts();
            }
            
            // Render posts
            this.renderPosts(this.posts);
            
            // Set up category filters
            this.setupFilters();
            
        } catch (error) {
            console.error('Error rendering blog posts:', error);
            // Use sample data as fallback
            this.posts = this.getSamplePosts();
            this.renderPosts(this.posts);
            this.setupFilters();
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
        if (!this.postsGrid) {
            console.error('Blog grid container not found');
            return;
        }

        if (posts.length === 0) {
            this.showEmptyState();
            return;
        }

        this.postsGrid.innerHTML = posts.map(post => this.createPostHTML(post)).join('');
    }

    createPostHTML(post) {
        const imageUrl = post.featuredImage || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
        const categoryClass = post.category ? post.category.replace(/\s+/g, '-').toLowerCase() : '';
        
        return `
            <article class="blog-post ${categoryClass}" data-category="${post.category || ''}">
                <a href="/blog-post.html?slug=${post.slug}" class="blog-post-link">
                    <div class="blog-post-image">
                        <img src="${imageUrl}" alt="${post.title}" loading="lazy">
                    </div>
                    <div class="blog-post-content">
                        <h3 class="blog-post-title">${post.title}</h3>
                        <span class="read-more-btn">
                            Read More <i class="fas fa-arrow-right"></i>
                        </span>
                    </div>
                </a>
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
                <div class="blog-post-loading">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Unable to Load Blog Posts</h3>
                    <p>We're experiencing technical difficulties. Please try again later.</p>
                </div>
            `;
        }
    }

    showEmptyState() {
        if (this.postsGrid) {
            this.postsGrid.innerHTML = `
                <div class="blog-post-empty">
                    <i class="fas fa-newspaper"></i>
                    <h3>No Blog Posts Found</h3>
                    <p>Check back soon for new vending machine business tips and insights.</p>
                </div>
            `;
        }
    }

    getSamplePosts() {
        return [
            {
                id: '1',
                title: 'How to Find Profitable Vending Machine Locations',
                slug: 'find-profitable-vending-locations',
                excerpt: 'Learn the best strategies for identifying high-traffic locations that will maximize your vending machine profits.',
                category: 'finding-locations',
                featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishDate: '2024-01-15',
                readTime: '5 min read'
            },
            {
                id: '2',
                title: 'Top 10 Vending Machine Business Tips for Beginners',
                slug: 'vending-machine-business-tips',
                excerpt: 'Essential advice for new vending machine entrepreneurs to get started on the right foot.',
                category: 'vending-101',
                featuredImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishDate: '2024-01-10',
                readTime: '7 min read'
            },
            {
                id: '3',
                title: 'Best Snack and Drink Products for Vending Machines',
                slug: 'best-snack-drink-products',
                excerpt: 'Discover which products have the highest profit margins and customer demand in vending machines.',
                category: 'snack-drinks',
                featuredImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishDate: '2024-01-08',
                readTime: '6 min read'
            },
            {
                id: '4',
                title: 'Vending Machine Maintenance: A Complete Guide',
                slug: 'vending-machine-maintenance-guide',
                excerpt: 'Keep your vending machines running smoothly with these essential maintenance tips and schedules.',
                category: 'vending-maintenance',
                featuredImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishDate: '2024-01-05',
                readTime: '8 min read'
            },
            {
                id: '5',
                title: 'How to Buy Your First Vending Machine',
                slug: 'buy-first-vending-machine',
                excerpt: 'Everything you need to know about purchasing your first vending machine, from new to used options.',
                category: 'buying-machines',
                featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishDate: '2024-01-03',
                readTime: '9 min read'
            },
            {
                id: '6',
                title: 'Vending Machine Operations: Daily Management Tips',
                slug: 'vending-machine-operations',
                excerpt: 'Streamline your daily vending machine operations with these proven management strategies.',
                category: 'vending-operations',
                featuredImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishDate: '2024-01-01',
                readTime: '6 min read'
            },
            {
                id: '7',
                title: 'Maximizing Profits: Vending Machine Pricing Strategies',
                slug: 'vending-machine-pricing-strategies',
                excerpt: 'Learn how to price your vending machine products for maximum profitability and customer satisfaction.',
                category: 'vending-101',
                featuredImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishDate: '2023-12-28',
                readTime: '7 min read'
            },
            {
                id: '8',
                title: 'Cold Lead Generation for Vending Machine Businesses',
                slug: 'cold-lead-generation-vending',
                excerpt: 'Discover effective strategies for generating cold leads and expanding your vending machine business.',
                category: 'finding-locations',
                featuredImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishDate: '2023-12-25',
                readTime: '8 min read'
            }
        ];
    }
}

// Initialize blog renderer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof contentful !== 'undefined') {
        window.blogRenderer = new BlogRenderer();
        window.blogRenderer.renderBlogPosts();
    } else {
        console.error('Contentful SDK not loaded');
    }
}); 