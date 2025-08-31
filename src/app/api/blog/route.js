import { getBlogPosts } from '@/lib/contentful';

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Check if Contentful is configured
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      console.log('Contentful not configured, returning fallback data');
      return Response.json([]);
    }
    
    const posts = await getBlogPosts();
    
    if (!posts || posts.length === 0) {
      return Response.json([]);
    }
    
    return Response.json(posts);
  } catch (error) {
    console.error('API Error fetching blog posts:', error);
    return Response.json([]);
  }
}
