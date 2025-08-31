import { getServices } from '@/lib/contentful';

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Services content type doesn't exist in Contentful, return empty array
    console.log('Services API called - returning empty array (content type not configured)');
    return Response.json([]);
  } catch (error) {
    console.error('API Error fetching services:', error);
    return Response.json([]);
  }
}
