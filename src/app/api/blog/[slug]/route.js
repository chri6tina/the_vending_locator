import { getBlogPostBySlug } from '@/lib/contentful';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    if (!slug) {
      return Response.json({ error: 'Slug is required' }, { status: 400 });
    }
    
    // Check if Contentful is configured
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      console.log('Contentful not configured, returning fallback data');
      return Response.json(null);
    }
    
    const post = await getBlogPostBySlug(slug);
    
    if (!post) {
      return Response.json(null);
    }
    
    return Response.json(post);
  } catch (error) {
    console.error('API Error fetching blog post:', error);
    return Response.json(null);
  }
}
