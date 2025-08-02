import { getBlogPosts } from '@/lib/contentful';

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Vending Business Blog</h1>
          <p>Expert tips, strategies, and insights to help you grow your vending machine business.</p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="category-filters">
        <div className="container">
          <div className="filter-buttons">
            <button className="filter-btn active" data-category="all">All</button>
            <button className="filter-btn" data-category="vending-101">Vending 101</button>
            <button className="filter-btn" data-category="finding-locations">Finding Locations</button>
            <button className="filter-btn" data-category="buying-machines">Buying Machines</button>
            <button className="filter-btn" data-category="snack-drinks">Snack & Drinks</button>
            <button className="filter-btn" data-category="vending-operations">Vending Operations</button>
            <button className="filter-btn" data-category="vending-maintenance">Vending Maintenance</button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.slug} className="blog-post" data-category={post.category}>
                <div className="post-image">
                  <img src={post.featuredImage} alt={post.title} />
                  <div className="post-category">{post.category}</div>
                </div>
                <div className="post-content">
                  <h2>
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  <div className="post-meta">
                    <span className="post-author">By {post.author}</span>
                    <span className="post-date">{post.publishDate}</span>
                  </div>
                  <p>{post.excerpt}</p>
                  <a href={`/blog/${post.slug}`} className="read-more">
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated with Vending Tips</h2>
            <p>Subscribe to our newsletter and receive weekly tips, industry insights, and exclusive content to help grow your vending business.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
            <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 