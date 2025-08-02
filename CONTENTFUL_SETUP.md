# Contentful Blog System Setup Guide

## 🎯 Overview
This document explains how the dynamic blog system works with Contentful CMS. The system allows blog posts to be served at URLs like `/blog/what-are-the-benefits-of-getting-a-vending-locator-service` with content dynamically loaded from Contentful.

## 📁 Key Files

### 1. `contentful-config.js`
**Purpose**: Stores Contentful API credentials and content type configurations.

**Critical Settings**:
```javascript
const CONTENTFUL_CONFIG = {
    spaceId: 'xpopyri6s8gv', // ✅ CORRECT Space ID
    accessToken: 'YOUR_ACCESS_TOKEN_HERE', // ✅ Content Delivery API token
    environment: 'master'
};

const CONTENT_TYPES = {
    blogPost: 'blogPost', // ✅ Content Type ID
    author: 'author',
    category: 'category'
};
```

**⚠️ IMPORTANT**: 
- Use **Content Delivery API** token, NOT Content Preview API
- Space ID must match your Contentful space exactly
- Content Type ID must be `blogPost` (not `content`, `post`, etc.)

### 2. `contentful-service.js`
**Purpose**: Handles all Contentful API interactions and Rich Text rendering.

**Key Features**:
- ✅ Rich Text to HTML conversion
- ✅ Caching for performance
- ✅ Error handling
- ✅ Blog post formatting

### 3. `blog-renderer.js`
**Purpose**: Renders blog posts in the browser.

**Key Features**:
- ✅ Single post rendering
- ✅ Blog list rendering
- ✅ Loading states
- ✅ Error handling

### 4. `blog-post.html`
**Purpose**: Template for individual blog posts.

**Critical Settings**:
```html
<!-- ✅ ABSOLUTE PATHS - Never use relative paths -->
<script src="/script.js?v=1"></script>
<script src="/contentful-config.js?v=1"></script>
<script src="/contentful-service.js?v=1"></script>
<script src="/blog-renderer.js?v=1"></script>
<link rel="stylesheet" href="/styles.css">
```

### 5. `server.js`
**Purpose**: Node.js server that handles URL routing.

**Key Features**:
- ✅ Serves static files from root
- ✅ Routes `/blog/slug` to `blog-post.html`
- ✅ Handles file extensions correctly

## 🔧 Contentful Setup Requirements

### 1. Content Type Configuration
Your Contentful "Blog Post" content type must have these fields:

| Field Name | Field ID | Type | Required |
|------------|----------|------|----------|
| Title | `title` | Short text | ✅ Yes |
| Slug | `slug` | Short text | ✅ Yes |
| Content | `content` | Rich text | ✅ Yes |
| Excerpt | `excerpt` | Short text | ❌ No |
| Category | `category` | Short text | ❌ No |
| Author | `author` | Short text | ❌ No |
| Publish Date | `publishDate` | Date | ❌ No |
| Featured Image | `featuredImage` | Media | ❌ No |
| Meta Title | `metaTitle` | Short text | ❌ No |
| Meta Description | `metaDescription` | Short text | ❌ No |
| Tags | `tags` | Short text | ❌ No |

### 2. Slug Validation
The slug field must use this regex pattern:
```
^[a-z0-9]+(?:-[a-z0-9]+)*$
```

This ensures URLs like: `/blog/what-are-the-benefits-of-getting-a-vending-locator-service`

### 3. Content Type Settings
- **Display Field**: `title`
- **Published**: ✅ Must be published
- **Environment**: `master`

## 🚀 How to Start the System

### 1. Start the Server
```bash
node server.js
```

### 2. Access Blog Posts
- **Blog List**: `http://localhost:8080/blog.html`
- **Individual Post**: `http://localhost:8080/blog/your-slug-here`

## 🔍 Troubleshooting Guide

### Problem: "Unexpected token '<'" errors
**Cause**: JavaScript files not loading correctly
**Solution**: 
1. Check that script tags use absolute paths (`/script.js` not `script.js`)
2. Verify server.js is running
3. Check browser console for 404 errors

### Problem: "Space not found" error
**Cause**: Incorrect Space ID or Access Token
**Solution**:
1. Go to Contentful → Settings → General → Copy Space ID
2. Go to Contentful → Settings → API keys → Use Content Delivery API token
3. Update `contentful-config.js`

### Problem: "Content type not found" error
**Cause**: Incorrect content type ID
**Solution**:
1. Verify content type is named "Blog Post" in Contentful
2. Verify content type ID is `blogPost`
3. Ensure content type is published

### Problem: `[object Object]` displayed
**Cause**: Rich Text not being converted to HTML
**Solution**:
1. Check `contentful-service.js` has Rich Text rendering methods
2. Verify `renderRichText()` and `renderMarks()` methods exist
3. Check browser console for JavaScript errors

### Problem: Blog post not found
**Cause**: Slug mismatch or post not published
**Solution**:
1. Verify slug in Contentful matches URL exactly
2. Ensure blog post is published in Contentful
3. Check slug validation regex

## 🛠️ Maintenance Checklist

### Before Making Changes:
- [ ] Backup current working files
- [ ] Test on a copy first
- [ ] Document any changes

### After Making Changes:
- [ ] Restart server (`node server.js`)
- [ ] Clear browser cache
- [ ] Test blog post loading
- [ ] Check browser console for errors

### Regular Maintenance:
- [ ] Verify Contentful API tokens are still valid
- [ ] Check that blog posts are published
- [ ] Test URL routing still works
- [ ] Verify Rich Text rendering

## 📝 Common Mistakes to Avoid

### ❌ DON'T:
- Use relative paths in script tags
- Use Content Preview API token
- Change Space ID without verification
- Use different content type names
- Forget to publish content types
- Use wrong field IDs

### ✅ DO:
- Use absolute paths (`/script.js`)
- Use Content Delivery API token
- Verify Space ID from Contentful settings
- Keep content type ID as `blogPost`
- Publish all content types and entries
- Use exact field IDs from Contentful

## 🎯 Success Indicators

When everything is working correctly, you should see:
- ✅ Blog posts load at `/blog/slug` URLs
- ✅ Rich Text content renders as HTML
- ✅ No JavaScript errors in browser console
- ✅ Server logs show successful requests
- ✅ Contentful API calls succeed

## 📞 Emergency Contacts

If the system breaks:
1. Check this documentation first
2. Verify all configuration matches exactly
3. Restart the server
4. Clear browser cache
5. Check Contentful dashboard for changes

---

**Last Updated**: July 29, 2025
**Working Configuration**: ✅ Verified and tested
**Status**: 🟢 OPERATIONAL 