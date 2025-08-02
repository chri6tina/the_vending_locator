# 🚨 CRITICAL SETTINGS - NEVER CHANGE THESE

## Contentful Configuration (`contentful-config.js`)
```javascript
const CONTENTFUL_CONFIG = {
    spaceId: 'xpopyri6s8gv', // ✅ WORKING SPACE ID
    accessToken: 'YOUR_ACCESS_TOKEN_HERE', // ✅ CONTENT DELIVERY API
    environment: 'master'
};

const CONTENT_TYPES = {
    blogPost: 'blogPost', // ✅ MUST BE 'blogPost'
    author: 'author',
    category: 'category'
};
```

## Script Tags (`blog-post.html`)
```html
<!-- ✅ ABSOLUTE PATHS ONLY -->
<script src="/script.js?v=1"></script>
<script src="/contentful-config.js?v=1"></script>
<script src="/contentful-service.js?v=1"></script>
<script src="/blog-renderer.js?v=1"></script>
<link rel="stylesheet" href="/styles.css">
```

## Contentful Requirements
- **Content Type Name**: "Blog Post"
- **Content Type ID**: `blogPost`
- **API Token**: Content Delivery API (NOT Preview API)
- **Environment**: `master`
- **Published**: ✅ Must be published

## Server Command
```bash
node server.js
```

## Test URL
```
http://localhost:8080/blog/what-are-the-benefits-of-getting-a-vending-locator-service
```

---

**⚠️ WARNING**: Changing any of these settings will break the system!
**✅ STATUS**: WORKING - DO NOT MODIFY 