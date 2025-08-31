import { getTestimonials } from '@/lib/contentful';

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Testimonials content type doesn't exist in Contentful, return empty array
    console.log('Testimonials API called - returning empty array (content type not configured)');
    return Response.json([]);
  } catch (error) {
    console.error('API Error fetching testimonials:', error);
    return Response.json([]);
  }
}
