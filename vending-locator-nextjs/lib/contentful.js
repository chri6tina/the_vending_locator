import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
  });
  
  return response.items.map(item => ({
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    category: item.fields.category,
    author: item.fields.author,
    publishDate: item.fields.publishDate,
    featuredImage: item.fields.featuredImage?.fields?.file?.url,
    metaTitle: item.fields.metaTitle,
    metaDescription: item.fields.metaDescription,
    tags: item.fields.tags,
  }));
}

export async function getBlogPost(slug) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });
  
  if (response.items.length === 0) {
    return null;
  }
  
  const item = response.items[0];
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    category: item.fields.category,
    author: item.fields.author,
    publishDate: item.fields.publishDate,
    featuredImage: item.fields.featuredImage?.fields?.file?.url,
    metaTitle: item.fields.metaTitle,
    metaDescription: item.fields.metaDescription,
    tags: item.fields.tags,
  };
} 