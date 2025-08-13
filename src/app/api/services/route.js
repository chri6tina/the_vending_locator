import { getServices } from '@/lib/contentful';

export async function GET() {
  try {
    // Check if Contentful is configured
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      console.log('Contentful not configured, returning fallback data');
      return Response.json([]);
    }
    
    const services = await getServices();
    
    if (!services || services.length === 0) {
      return Response.json([]);
    }
    
    return Response.json(services);
  } catch (error) {
    console.error('API Error fetching services:', error);
    return Response.json([]);
  }
}
