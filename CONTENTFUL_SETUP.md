# Contentful Setup Guide

This project uses Contentful as a headless CMS for blog posts and content management.

## Setup Instructions

### 1. Create Contentful Account
- Go to [contentful.com](https://contentful.com)
- Sign up for a free account
- Create a new space for your vending locator project

### 2. Create Content Model
Create a content type called `blogPost` with the following fields:

- **Title** (Short text) - `title`
- **Slug** (Short text) - `slug` (for URL)
- **Excerpt** (Long text) - `excerpt`
- **Content** (Rich text) - `content`
- **Category** (Short text) - `category`
- **Featured Image** (Media) - `featuredImage`
- **Author** (Short text) - `author`
- **Publish Date** (Date) - `publishDate`
- **Read Time** (Short text) - `readTime`
- **Tags** (Short text) - `tags` (comma-separated)

### 3. Get API Credentials
1. Go to Settings → API keys
2. Create a new API key
3. Copy the **Space ID** and **Content Delivery API - access token**

### 4. Update Configuration
Edit `contentful-config.js` and replace:
- `your-space-id` with your actual Space ID
- `your-access-token` with your actual access token

### 5. Add Sample Content
Create a few sample blog posts in Contentful to test the integration.

## File Structure
- `contentful-config.js` - API configuration
- `contentful-service.js` - Service layer for API calls
- `blog-renderer.js` - Frontend rendering logic
- `blog.html` - Blog page that uses Contentful

## Features
- Dynamic blog post loading
- Category filtering
- Responsive design
- SEO-friendly URLs
- Image optimization

## Troubleshooting
- Check browser console for API errors
- Verify API credentials are correct
- Ensure content model matches expected fields
- Test with sample content first 