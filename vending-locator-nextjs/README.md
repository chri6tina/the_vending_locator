# The Vending Locator Blog

A modern blog built with Next.js and Contentful CMS for The Vending Locator.

## 🚀 Features

- **Contentful CMS** - Easy content management
- **Next.js 15** - Fast, SEO-optimized static site generation
- **Responsive Design** - Works on all devices
- **SEO Optimized** - Automatic meta tags, sitemap, structured data
- **Custom Styling** - Beautiful design with Nunito font
- **Category Filtering** - Filter blog posts by category
- **Social Sharing** - Share posts on social media

## 📋 Setup Instructions

### 1. Contentful Setup

1. **Create Contentful Account**
   - Go to [contentful.com](https://contentful.com)
   - Sign up for free account
   - Create a new space called "The Vending Locator"

2. **Create Content Model**
   - Go to Content Models
   - Create a new content type called "Blog Post"
   - Add these fields:
     - `title` (Short text, required)
     - `slug` (Short text, required, unique)
     - `excerpt` (Long text)
     - `content` (Rich text)
     - `category` (Short text)
     - `author` (Short text)
     - `publishDate` (Date and time)
     - `featuredImage` (Media)
     - `metaTitle` (Short text)
     - `metaDescription` (Long text)
     - `tags` (Short text)

3. **Get API Credentials**
   - Go to Settings > API keys
   - Copy your Space ID and Content Delivery API access token

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your blog.

### 5. Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📝 Adding Blog Posts

1. **In Contentful:**
   - Go to Content
   - Click "Add entry"
   - Select "Blog Post"
   - Fill in all fields
   - Publish

2. **Your site will automatically update** when you publish in Contentful!

## 🎨 Customization

- **Colors**: Edit CSS variables in `app/globals.css`
- **Fonts**: Change font imports in `app/globals.css`
- **Layout**: Modify components in `app/` directory
- **Styling**: Update CSS classes in `app/globals.css`

## 📱 Categories

The blog supports these categories:
- All
- Vending 101
- Finding Locations
- Buying Machines
- Snack & Drinks
- Vending Operations
- Vending Maintenance

## 🔧 Technical Stack

- **Framework**: Next.js 15
- **CMS**: Contentful
- **Styling**: Custom CSS + Tailwind CSS
- **Font**: Nunito (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📊 SEO Features

- Automatic meta tags
- Open Graph tags
- Structured data
- Sitemap generation
- Clean URLs
- Image optimization

## 🚀 Performance

- Static site generation
- Image optimization
- Fast loading times
- Mobile responsive
- SEO optimized

## 📞 Support

For questions or issues, contact The Vending Locator team.
