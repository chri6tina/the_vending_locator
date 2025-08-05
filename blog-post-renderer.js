// Blog Post Renderer for Individual Blog Posts
class BlogPostRenderer {
    constructor() {
        this.slug = this.getSlugFromURL();
        this.init();
    }

    getSlugFromURL() {
        // First try to get from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const slugFromParams = urlParams.get('slug');
        
        if (slugFromParams) {
            console.log('Extracted slug from params:', slugFromParams);
            return slugFromParams;
        }
        
        // Fallback to path-based extraction
        const path = window.location.pathname;
        console.log('Current path:', path);
        const slug = path.split('/blog/')[1];
        console.log('Extracted slug from path:', slug);
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

            // Verify Contentful service is available
            if (!window.contentfulService) {
                console.error('Contentful service not initialized');
                this.showError('Contentful service not available');
                return;
            }

            console.log('Contentful initialized successfully');

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
                console.error('No slug found in URL');
                this.showError('No blog post specified');
                return;
            }

            console.log('Loading blog post with slug:', this.slug);

            // Get the blog post from Contentful
            const post = await window.contentfulService.getBlogPostBySlug(this.slug);
            
            // If no post from Contentful, try sample data
            if (!post) {
                console.log('Blog post not found in Contentful, trying sample data');
                const samplePost = this.getSamplePost(this.slug);
                if (samplePost) {
                    console.log('Sample blog post loaded successfully:', samplePost.title);
                    this.updatePageContent(samplePost);
                    this.updatePageMeta(samplePost);
                    return;
                } else {
                    console.error('Blog post not found in Contentful or sample data');
                    this.showError('Blog post not found');
                    return;
                }
            }

            console.log('Blog post loaded successfully from Contentful:', post.title);
            console.log('Featured image URL:', post.featuredImage);

            // Update the page content
            this.updatePageContent(post);
            
            // Update page title and meta
            this.updatePageMeta(post);

        } catch (error) {
            console.error('Error loading blog post:', error);
            // Try sample data as fallback
            const samplePost = this.getSamplePost(this.slug);
            if (samplePost) {
                console.log('Using sample data as fallback');
                this.updatePageContent(samplePost);
                this.updatePageMeta(samplePost);
            } else {
                this.showError('Unable to load blog post');
            }
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
            console.log('Updating image with URL:', post.featuredImage);
            if (post.featuredImage && post.featuredImage.trim() !== '') {
                imageElement.src = post.featuredImage;
                imageElement.alt = post.title;
                console.log('Image updated successfully');
            } else {
                console.log('No featured image found, using fallback');
                imageElement.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
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

        // If content is already HTML (from Contentful rich text), return as is
        if (typeof content === 'string' && content.includes('<')) {
            return content;
        }

        // Convert markdown-like content to HTML
        // This is a simple formatter - you might want to use a proper markdown parser
        let formattedContent = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/## (.*?)(?=\n|$)/g, '<h2>$1</h2>')
            .replace(/### (.*?)(?=\n|$)/g, '<h3>$1</h3>')
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

    getSamplePost(slug) {
        const samplePosts = {
            'find-profitable-vending-locations': {
                id: '1',
                title: 'How to Find Profitable Vending Machine Locations',
                slug: 'find-profitable-vending-locations',
                excerpt: 'Learn the best strategies for identifying high-traffic locations that will maximize your vending machine profits.',
                content: `
                    Finding the right location for your vending machine is crucial to your business success. The difference between a profitable location and a poor one can be thousands of dollars in monthly revenue.

                    ## Key Factors to Consider

                    ### 1. Foot Traffic
                    High foot traffic is essential for vending machine success. Look for locations with:
                    - **Office buildings** with 50+ employees
                    - **Shopping centers** with consistent customer flow
                    - **Hospitals and medical facilities** with staff and visitors
                    - **Universities and schools** with students and faculty

                    ### 2. Demographics
                    Understanding your target audience is crucial:
                    - **Age groups** that frequently use vending machines
                    - **Income levels** that can afford your products
                    - **Lifestyle patterns** that create regular customers

                    ### 3. Competition Analysis
                    Research existing vending options in the area:
                    - **Existing machines** and their product offerings
                    - **Pricing strategies** of competitors
                    - **Gaps in the market** you can fill

                    ## Location Research Strategies

                    ### Cold Calling Approach
                    1. **Identify target buildings** in your desired area
                    2. **Research building management** companies
                    3. **Prepare a professional pitch** highlighting benefits
                    4. **Follow up consistently** with decision makers

                    ### Networking
                    - Join **local business groups**
                    - Attend **commercial real estate events**
                    - Connect with **property managers**
                    - Build relationships with **facility managers**

                    ## Red Flags to Avoid

                    - **Low foot traffic** locations
                    - **High crime areas** that may damage machines
                    - **Strict building regulations** that limit access
                    - **Poor parking** or accessibility issues

                    ## Negotiation Tips

                    When approaching potential locations:
                    - **Highlight mutual benefits** for both parties
                    - **Offer revenue sharing** options
                    - **Provide maintenance guarantees**
                    - **Showcase your track record** and reliability

                    Remember, the best locations often require persistence and relationship building. Don't get discouraged by initial rejections - keep networking and refining your approach.
                `,
                category: 'finding-locations',
                featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                author: 'The Vending Locator Team',
                publishDate: '2024-01-15',
                readTime: '5 min read',
                tags: ['location finding', 'vending business', 'profitability', 'market research']
            },
            'vending-machine-business-tips': {
                id: '2',
                title: 'Top 10 Vending Machine Business Tips for Beginners',
                slug: 'vending-machine-business-tips',
                excerpt: 'Essential advice for new vending machine entrepreneurs to get started on the right foot.',
                content: `
                    Starting a vending machine business can be both exciting and overwhelming. Here are the top 10 tips to help you succeed from day one.

                    ## 1. Start Small and Scale Up

                    Don't try to buy 20 machines right away. Start with 2-3 machines in proven locations and learn the business before expanding.

                    ## 2. Choose the Right Products

                    Research what sells best in your target locations:
                    - **Healthy snacks** for office environments
                    - **Energy drinks** for gyms and fitness centers
                    - **Cold beverages** for outdoor locations
                    - **Fresh food** for hospitals and medical facilities

                    ## 3. Location is Everything

                    The success of your vending machine business depends heavily on location selection:
                    - **High foot traffic** areas
                    - **Limited competition** from other machines
                    - **Easy access** for restocking
                    - **Security** to prevent vandalism

                    ## 4. Maintain Regular Service Schedule

                    Consistent maintenance is crucial:
                    - **Weekly restocking** visits
                    - **Monthly cleaning** and inspection
                    - **Quarterly deep cleaning**
                    - **Annual equipment maintenance**

                    ## 5. Track Your Data

                    Use technology to monitor performance:
                    - **Sales data** by product and location
                    - **Inventory levels** and restocking needs
                    - **Customer preferences** and trends
                    - **Profit margins** by product category

                    ## 6. Build Relationships

                    Strong relationships with location managers are key:
                    - **Regular communication** about performance
                    - **Quick response** to any issues
                    - **Flexibility** with product selection
                    - **Revenue sharing** when appropriate

                    ## 7. Optimize Your Pricing

                    Price your products strategically:
                    - **Research competitor pricing**
                    - **Consider location demographics**
                    - **Factor in operating costs**
                    - **Test different price points**

                    ## 8. Invest in Quality Equipment

                    Quality machines pay off in the long run:
                    - **Reliable operation** reduces maintenance costs
                    - **Better customer experience** increases sales
                    - **Longer lifespan** improves ROI
                    - **Advanced features** like cashless payments

                    ## 9. Plan for Growth

                    Have a clear expansion strategy:
                    - **Identify new location opportunities**
                    - **Build relationships** with property managers
                    - **Develop operational systems** that scale
                    - **Secure financing** for expansion

                    ## 10. Stay Compliant

                    Ensure you meet all legal requirements:
                    - **Business licenses** and permits
                    - **Health department** regulations
                    - **Tax obligations** and reporting
                    - **Insurance coverage** for your business

                    Remember, success in the vending machine business comes from consistent execution of these fundamentals. Focus on providing excellent service and building strong relationships with your location partners.
                `,
                category: 'vending-101',
                featuredImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                author: 'The Vending Locator Team',
                publishDate: '2024-01-10',
                readTime: '7 min read',
                tags: ['vending business', 'beginners', 'tips', 'entrepreneurship']
            }
        };

        return samplePosts[slug] || null;
    }
}

// Initialize blog post renderer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new BlogPostRenderer();
}); 