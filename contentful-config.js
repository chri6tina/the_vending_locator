// Contentful Configuration
const CONTENTFUL_CONFIG = {
    spaceId: process.env.CONTENTFUL_SPACE_ID || 'xpopyri6s8gv', // Your Contentful Space ID
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'as1yT7ZCd27_ByA_MBu0lzJDQZVWmxafx2mfM-c9ooY', // Your Contentful Access Token
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
};

// Initialize Contentful client
const client = contentful.createClient({
    space: CONTENTFUL_CONFIG.spaceId,
    accessToken: CONTENTFUL_CONFIG.accessToken,
    environment: CONTENTFUL_CONFIG.environment
});

// Export for use in other files
window.contentfulClient = client; 