# Blog System - Quick Start 🚀

## 3-Step Setup

### Step 1: Create Database Tables (2 minutes)

1. Open your Supabase Dashboard: https://supabase.com
2. Go to SQL Editor
3. Copy and paste this SQL code:

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
  keywords TEXT[],
  category TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_keywords ON blog_posts USING GIN(keywords);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to published posts" ON blog_posts
FOR SELECT USING (status = 'published');

CREATE POLICY "Allow all operations for authenticated users" ON blog_posts
FOR ALL USING (true);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE blog_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  alt_text TEXT,
  caption TEXT,
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE blog_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all operations on blog_images" ON blog_images
FOR ALL USING (true);
```

4. Click **Run**
5. ✅ Done!

---

### Step 2: Start Your Development Server

```bash
npm run dev
```

---

### Step 3: Access Admin Dashboard

1. Open browser to: **http://localhost:3000/admin/login**
2. Enter credentials:
   - **Email:** support@thevendinglocator.com
   - **Password:** 123
3. Start creating blog posts!

---

## Quick Links

- **Admin Login:** http://localhost:3000/admin/login
- **Admin Dashboard:** http://localhost:3000/admin
- **Blog Posts:** http://localhost:3000/admin/blog/posts
- **Create Post:** http://localhost:3000/admin/blog/new
- **View Blog:** http://localhost:3000/blog

---

## Creating Your First Post

1. Log in to admin dashboard
2. Click "Create New Post"
3. Fill in:
   - **Title:** "Welcome to Our Blog"
   - **Content:** Write your post (HTML/Markdown supported)
   - Add a featured image URL (optional)
   - Add keywords: "welcome", "news", "announcement"
   - Set category: "Company News"
4. Click **"Publish Post"**
5. View at: http://localhost:3000/blog

---

## ⚠️ Before Going Live

### Change Admin Credentials

Edit `src/app/api/auth/login/route.ts` lines 8-9:

```typescript
const ADMIN_EMAIL = 'your-secure-email@example.com'
const ADMIN_PASSWORD = 'your-secure-password'
```

---

## Need Help?

See `BLOG_SYSTEM_GUIDE.md` for detailed documentation.

---

That's it! You're ready to blog! 🎉

