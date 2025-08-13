import { getTestimonials } from '@/lib/contentful';

export async function GET() {
  try {
    // Check if Contentful is configured
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      console.log('Contentful not configured, returning fallback data');
      return Response.json([]);
    }
    
    const testimonials = await getTestimonials();
    
    if (!testimonials || testimonials.length === 0) {
      return Response.json([]);
    }
    
    return Response.json(testimonials);
  } catch (error) {
    console.error('API Error fetching testimonials:', error);
    return Response.json([]);
  }
}
