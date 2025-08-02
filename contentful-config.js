// Contentful Configuration
// Uses environment variables for security
const CONTENTFUL_CONFIG = {
    spaceId: process.env.CONTENTFUL_SPACE_ID || 'xpopyri6s8gv',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'as1yT7ZCd27_ByA_MBu0lzJDQZVWmxafx2mfM-c9ooY',
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
};

// Content types for your blog
const CONTENT_TYPES = {
    blogPost: 'blogPost',
    author: 'author',
    category: 'category'
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONTENTFUL_CONFIG, CONTENT_TYPES };
} else {
    window.CONTENTFUL_CONFIG = CONTENTFUL_CONFIG;
    window.CONTENT_TYPES = CONTENT_TYPES;
} 