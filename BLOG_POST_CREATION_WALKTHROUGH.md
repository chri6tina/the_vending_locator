# Creating a Blog Post - Complete Walkthrough

## Sample Blog Post: "How Does The Vending Locator Work?"

This guide walks through creating a complete blog post from scratch.

---

## Step 1: Prepare Your Content

### Basic Information
```javascript
{
  title: 'How Does The Vending Locator Work?',
  slug: 'how-does-the-vending-locator-work',  // Auto-generated from title
  category: 'How It Works',
  status: 'published'  // or 'draft'
}
```

### Content Sections
1. **Excerpt** (short summary for previews)
2. **Featured Image** (hero image URL)
3. **Full Content** (HTML formatted article)
4. **SEO Metadata** (title, description, keywords)
5. **Author Info** (name, email)

---

## Step 2: Database Storage

### The Data Structure

```javascript
const blogPost = {
  // REQUIRED FIELDS
  title: 'How Does The Vending Locator Work?',
  slug: 'how-does-the-vending-locator-work',
  content: '<h2>Welcome...</h2><p>Content here...</p>',
  status: 'published',  // 'draft' | 'published' | 'archived'
  
  // OPTIONAL BUT RECOMMENDED
  excerpt: 'Discover how The Vending Locator connects...',
  featured_image: 'https://images.unsplash.com/photo-123...',
  author_name: 'The Vending Locator Team',
  author_email: 'support@thevendinglocator.com',
  
  // SEO FIELDS
  meta_title: 'How Does The Vending Locator Work? | Complete Guide',
  meta_description: 'Learn how The Vending Locator helps...',
  keywords: ['vending locator', 'vending machine leads', 'hot leads'],
  
  // CATEGORIZATION
  category: 'How It Works',
  
  // TIMESTAMPS (auto-generated)
  published_at: '2024-01-15T12:00:00Z',
  created_at: '2024-01-15T11:30:00Z',
  updated_at: '2024-01-15T11:30:00Z'
}
```

---

## Step 3: Three Ways to Create a Blog Post

### Method 1: Admin Dashboard (Recommended) ✅

1. **Login**
   - Go to: http://localhost:3000/admin/login
   - Email: support@thevendinglocator.com
   - Password: 123

2. **Navigate to Blog**
   - Click "Blog" in top nav OR
   - Click "Manage Blog" card on dashboard

3. **Create New Post**
   - Click "Create New Post" button
   - Fill in all fields:
     - **Title:** How Does The Vending Locator Work?
     - **Slug:** (auto-filled, but you can customize)
     - **Excerpt:** Short summary...
     - **Content:** Full article (supports HTML)
     - **Featured Image:** Upload or paste URL
     - **Author Name:** The Vending Locator Team
     - **Author Email:** support@thevendinglocator.com
     - **Meta Title:** SEO-optimized title
     - **Meta Description:** ~160 characters
     - **Keywords:** Add tags one by one
     - **Category:** How It Works

4. **Save**
   - Click "Save as Draft" (to review later)
   - OR "Publish Post" (goes live immediately)

5. **View Result**
   - Published posts appear at: `/blog/[slug]`
   - Example: http://localhost:3000/blog/how-does-the-vending-locator-work

---

### Method 2: Using the Script 🔧

1. **Run the sample script**
   ```bash
   node create_sample_blog_post.js
   ```

2. **What it does:**
   - Connects to Supabase
   - Creates complete blog post with all fields
   - Inserts into `blog_posts` table
   - Returns the post ID and URLs

3. **Output:**
   ```
   ✅ Blog post created successfully!
   
   📍 URLs:
   Admin view: http://localhost:3000/admin/blog/posts
   Public view: http://localhost:3000/blog/how-does-the-vending-locator-work
   ```

---

### Method 3: Direct SQL Insert 💾

```sql
INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  featured_image,
  author_name,
  author_email,
  meta_title,
  meta_description,
  keywords,
  category,
  status,
  published_at
) VALUES (
  'How Does The Vending Locator Work?',
  'how-does-the-vending-locator-work',
  'Discover how The Vending Locator connects vending machine operators...',
  '<h2>Welcome to The Vending Locator</h2><p>Starting or expanding...</p>',
  'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200',
  'The Vending Locator Team',
  'support@thevendinglocator.com',
  'How Does The Vending Locator Work? | Complete Guide',
  'Learn how The Vending Locator helps vending machine operators find premium locations...',
  ARRAY['vending locator', 'vending machine leads', 'vending business'],
  'How It Works',
  'published',
  NOW()
);
```

---

## Step 4: Verify the Blog Post

### Check in Admin
1. Go to `/admin/blog/posts`
2. You should see the new post listed
3. Click "Edit" to review/modify
4. Click "View" to see public page

### Check Public View
1. Go to `/blog`
2. Post should appear in the grid
3. Click to view full post
4. Check that all fields display correctly:
   - ✅ Title
   - ✅ Featured image
   - ✅ Category badge
   - ✅ Author & date
   - ✅ Content formatting
   - ✅ Tags
   - ✅ Share button

### Check SEO
1. View page source (Ctrl+U)
2. Look for meta tags:
   ```html
   <title>How Does The Vending Locator Work? | Complete Guide</title>
   <meta name="description" content="Learn how..." />
   <meta name="keywords" content="vending locator, ..." />
   ```

---

## Step 5: Content Best Practices

### Title
- ✅ Clear and descriptive
- ✅ 50-60 characters ideal
- ✅ Include main keyword
- ❌ Don't use ALL CAPS
- ❌ Avoid clickbait

### Slug
- ✅ URL-friendly (lowercase, hyphens)
- ✅ Matches title closely
- ✅ Remove stop words (the, a, is)
- ❌ No special characters
- ❌ No spaces or underscores

### Excerpt
- ✅ 120-160 characters
- ✅ Compelling summary
- ✅ Encourages clicks
- ❌ Don't just copy first paragraph

### Content
- ✅ Use headers (H2, H3)
- ✅ Short paragraphs (2-3 sentences)
- ✅ Bullet points for lists
- ✅ Internal links to your pages
- ✅ Bold important points
- ✅ Include call-to-action
- ❌ Avoid walls of text

### Keywords
- ✅ 5-10 relevant keywords
- ✅ Mix of broad and specific
- ✅ Include variations
- ❌ No keyword stuffing

### Featured Image
- ✅ High quality (1200x600 minimum)
- ✅ Relevant to content
- ✅ Optimized file size
- ❌ No stock watermarks

---

## Complete Sample Content

The `create_sample_blog_post.js` script includes a full 1,000+ word article with:

✅ **Structured Content**
- Introduction
- What We Do section
- How It Works (5 steps)
- Why Choose Us
- Success Stories
- Getting Started
- Call to Action

✅ **Formatting**
- Headers (H2, H3)
- Bullet lists
- Numbered lists
- Bold text
- Internal links
- Professional tone

✅ **SEO Optimized**
- Keyword-rich title
- Descriptive meta tags
- 7 relevant keywords
- Proper heading hierarchy

✅ **Complete Metadata**
- Author information
- Category
- Featured image
- Publication date

---

## Troubleshooting

### "Table does not exist"
Run the SQL schema from `BLOG_SYSTEM_SETUP.md` first

### "Duplicate slug"
Change the slug to make it unique

### "Image not loading"
- Use valid image URL
- Check HTTPS
- Verify image is publicly accessible

### "Content not formatting"
- Use HTML tags in content
- Check for unclosed tags
- Use the prose classes in the blog post page

---

## Next Steps

1. ✅ Create your first blog post
2. ✅ Publish it
3. ✅ Share on social media
4. ✅ Monitor analytics
5. ✅ Create more content regularly!

**Your blog is live at:** http://localhost:3000/blog

Happy blogging! 📝✨

