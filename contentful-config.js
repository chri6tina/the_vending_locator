// Contentful Configuration
const CONTENTFUL_CONFIG = {
    spaceId: 'your-space-id', // Replace with your actual space ID
    accessToken: 'your-access-token', // Replace with your actual access token
    environment: 'master'
};

// Initialize Contentful client
const client = contentful.createClient({
    space: CONTENTFUL_CONFIG.spaceId,
    accessToken: CONTENTFUL_CONFIG.accessToken,
    environment: CONTENTFUL_CONFIG.environment
});

// Export for use in other files
window.contentfulClient = client; 