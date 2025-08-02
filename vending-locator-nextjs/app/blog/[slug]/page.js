import { getBlogPost, getBlogPosts } from '@/lib/contentful';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return <div>Post not found</div>;
  }
  
  return (
    <article className="blog-post-full">
      <div className="container">
        <div className="post-header">
          <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-date">{post.publishDate}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-author">
            <span>By {post.author}</span>
          </div>
        </div>
        
        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="post-footer">
          <div className="post-tags">
            {post.tags && post.tags.split(',').map((tag, index) => (
              <span key={index} className="tag">{tag.trim()}</span>
            ))}
          </div>
          <div className="post-share">
            <h4>Share this post:</h4>
            <div className="share-buttons">
              <a href="#" className="share-btn facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="share-btn twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="share-btn linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 