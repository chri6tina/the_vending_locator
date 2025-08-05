# Contentful Setup Guide for The Vending Locator Blog

## 🚀 Quick Setup

### 1. Create Contentful Account
- Go to [contentful.com](https://contentful.com)
- Sign up for a free account
- Create a new space called "The Vending Locator"

### 2. Create Content Model

#### Blog Post Content Type
Create a new content type called `blogPost` with these fields:

**Required Fields:**
- `title` (Short text) - The blog post title
- `slug` (Short text) - URL slug (e.g., "how-to-find-vending-locations")
- `excerpt` (Long text) - Brief description for blog listing
- `content` (Rich text) - Full blog post content
- `category` (Short text) - Category like "Finding Locations", "Vending 101", etc.
- `publishDate` (Date) - When the post was published
- `readTime` (Short text) - e.g., "5 min read"

**Optional Fields:**
- `featuredImage` (Media - Image) - Featured image for the post
- `author` (Short text) - Author name
- `tags` (Array of Short text) - Tags for categorization

### 3. URL Structure
All blog posts will use this URL format:
```
https://www.thevendinglocator.com/blog/[slug]
```

**Example URLs:**
- `/blog/how-to-find-vending-locations`
- `/blog/vending-machine-maintenance-tips`
- `/blog/best-snack-vending-products`

### 4. Get API Credentials

1. Go to **Settings** → **API keys**
2. Create a new API key
3. Copy your **Space ID** and **Content Delivery API - access token**
4. Update `contentful-config.js` with your credentials

### 5. Add Sample Blog Posts

#### Example Blog Post 1:
- **Title**: "How to Effectively Find the Best Vending Locations Using The Vending Locator"
- **Slug**: `how-to-effectively-find-the-best-vending-locations-using-the-vending-locator`
- **Category**: "Finding Locations"
- **Excerpt**: "Discover our proven process for identifying high-traffic vending locations that maximize your profits..."
- **Content**: [Your full blog post content here]

#### Example Blog Post 2:
- **Title**: "5 Essential Tips for Vending Machine Maintenance"
- **Slug**: `5-essential-tips-for-vending-machine-maintenance`
- **Category**: "Vending Maintenance"
- **Excerpt**: "Keep your vending machines running smoothly with these essential maintenance tips..."

### 6. Test Your Setup

1. Add a blog post to Contentful
2. Visit `/blog` to see the blog listing
3. Click on a blog post to test individual post pages
4. Verify URLs work: `/blog/your-post-slug`

### 7. Content Guidelines

**Slug Best Practices:**
- Use lowercase letters
- Replace spaces with hyphens
- Keep it descriptive but concise
- Avoid special characters

**Example Slugs:**
- ✅ `how-to-find-vending-locations`
- ✅ `vending-machine-maintenance-tips`
- ❌ `How to Find Vending Locations`
- ❌ `vending_machine_tips`

### 8. Categories Available
- Vending 101
- Finding Locations
- Buying Machines
- Snack & Drinks
- Vending Operations
- Vending Maintenance

### 9. Troubleshooting

**If blog posts don't load:**
1. Check Contentful API credentials in `contentful-config.js`
2. Verify content type is named exactly `blogPost`
3. Ensure all required fields are filled
4. Check browser console for errors

**If URLs return 404:**
1. Verify slug format (lowercase, hyphens)
2. Check that the post is published in Contentful
3. Clear browser cache and try again

## 🎯 Next Steps

1. **Add your first blog post** to Contentful
2. **Test the blog functionality** at `/blog`
3. **Create more content** to build your blog
4. **Optimize for SEO** with proper titles and descriptions

Your blog system is now ready to go! 🚀 