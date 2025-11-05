# Blog System Setup

## Database Schema

Run this SQL in your Supabase SQL Editor to create the blog posts table:

```sql
-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author_name TEXT DEFAULT 'Admin',
  author_email TEXT,
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT[], -- Array of keywords/tags
  category TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_keywords ON blog_posts USING GIN(keywords);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy to allow public read access to published posts
CREATE POLICY "Allow public read access to published posts" ON blog_posts
FOR SELECT USING (status = 'published');

-- Policy to allow all operations for authenticated users (admin)
CREATE POLICY "Allow all operations for authenticated users" ON blog_posts
FOR ALL USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create blog_images table for image management
CREATE TABLE blog_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  alt_text TEXT,
  caption TEXT,
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for blog_images
ALTER TABLE blog_images ENABLE ROW LEVEL SECURITY;

-- Policy for blog images
CREATE POLICY "Allow all operations on blog_images" ON blog_images
FOR ALL USING (true);
```

## Features

✅ Rich text editor with formatting
✅ Image uploads and management
✅ SEO metadata (title, description, keywords)
✅ Categories and tags
✅ Author information
✅ Draft/Published status
✅ Slug/URL management
✅ Featured images
✅ Excerpt for previews
✅ Timestamps (created, updated, published)

## Admin Dashboard Routes
- `/admin/dashboard` - Main admin dashboard
- `/admin/blog/posts` - List all blog posts
- `/admin/blog/new` - Create new blog post
- `/admin/blog/edit/[id]` - Edit existing post

## Public Blog Routes
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog post page



