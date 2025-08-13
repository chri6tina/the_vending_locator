import { createClient } from 'contentful';

// Only create client if environment variables are available
let client = null;

if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
  });
}

// Get all pricing packages
export async function getPricingPackages() {
  try {
    if (!client) {
      console.log('Contentful not configured, returning empty array');
      return [];
    }
    
    const response = await client.getEntries({
      content_type: 'pricingPackage',
      order: 'fields.order'
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching pricing packages:', error);
    return [];
  }
}

// Get all location packages
export async function getLocationPackages() {
  try {
    if (!client) {
      console.log('Contentful not configured, returning empty array');
      return [];
    }
    
    const response = await client.getEntries({
      content_type: 'locationPackage',
      order: 'fields.order'
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching location packages:', error);
    return [];
  }
}

// Get all blog posts
export async function getBlogPosts() {
  try {
    if (!client) {
      console.log('Contentful not configured, returning empty array');
      return [];
    }
    
    console.log('Contentful: Attempting to fetch blog posts...');
    console.log('Contentful: Client config:', {
      space: process.env.CONTENTFUL_SPACE_ID ? 'Set' : 'Missing',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ? 'Set' : 'Missing',
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
    });
    
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishDate'
    });
    
    console.log('Contentful: Response received:', {
      total: response.total,
      items: response.items?.length || 0
    });
    
    return response.items;
  } catch (error) {
    console.error('Contentful: Error fetching blog posts:', error);
    return [];
  }
}

// Get single blog post by slug
export async function getBlogPostBySlug(slug) {
  try {
    if (!client) {
      console.log('Contentful not configured, returning null');
      return null;
    }
    
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1
    });
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Get all services
export async function getServices() {
  try {
    if (!client) {
      console.log('Contentful not configured, returning empty array');
      return [];
    }
    
    const response = await client.getEntries({
      content_type: 'service',
      order: 'fields.order'
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Get all industries
export async function getIndustries() {
  try {
    if (!client) {
      console.log('Contentful not configured, returning empty array');
      return [];
    }
    
    const response = await client.getEntries({
      content_type: 'industry',
      order: 'fields.order'
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching industries:', error);
    return [];
  }
}

// Get all testimonials
export async function getTestimonials() {
  try {
    if (!client) {
      console.log('Contentful not configured, returning empty array');
      return [];
    }
    
    const response = await client.getEntries({
      content_type: 'testimonial',
      order: 'fields.order'
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}
