# API Key Setup Guide

## Security Best Practices

### 1. Environment Variables
Never hardcode API keys in your source code. Instead, use environment variables:

**Create a `.env` file in your project root:**
```
# Contentful Configuration
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
CONTENTFUL_ENVIRONMENT=master

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Supabase Configuration
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 2. Update contentful-config.js
Replace the hardcoded values with environment variables:

```javascript
// Contentful Configuration
const CONTENTFUL_CONFIG = {
    spaceId: process.env.CONTENTFUL_SPACE_ID || 'xpopyri6s8gv',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'as1yT7ZCd27_ByA_MBu0lzJDQZVWmxafx2mfM-c9ooY',
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
};
```

### 3. AI SEO Generation
The "Add New Location" form includes AI-powered SEO generation that automatically creates:
- Meta titles (60 characters max)
- Meta descriptions (160 characters max) 
- Meta keywords
- Location descriptions
- About sections

**The AI SEO generator (`ai-seo-generator.js`) now uses environment variables:**
```javascript
OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'fallback_key_here'
```

### 4. Netlify Environment Variables
For production, set these in your Netlify dashboard:
1. Go to your Netlify site dashboard
2. Navigate to Site settings > Environment variables
3. Add each variable:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
   - `OPENAI_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

### 5. Local Development
For local development, create a `.env` file (it's already in your .gitignore):
```
CONTENTFUL_SPACE_ID=xpopyri6s8gv
CONTENTFUL_ACCESS_TOKEN=as1yT7ZCd27_ByA_MBu0lzJDQZVWmxafx2mfM-c9ooY
OPENAI_API_KEY=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
```

### 6. Important Security Notes
- ✅ Your `.gitignore` already includes `.env` files
- ✅ Never commit API keys to version control
- ✅ Use different API keys for development and production
- ✅ Regularly rotate your API keys
- ✅ Monitor API usage for unexpected activity

### 7. For Netlify Functions
If you're using Netlify Functions, they automatically have access to environment variables set in the Netlify dashboard.

### 8. AI SEO Generation Features
The AI SEO generation in your location form includes:
- **Auto-generation**: SEO fields are automatically filled when you enter city/state
- **Manual generation**: "Generate SEO with AI" button for manual triggering
- **Character counters**: Real-time feedback for meta title (60 chars) and description (160 chars)
- **Fallback system**: Template-based generation if AI fails
- **Form validation**: Ensures SEO fields are filled before submission

### 9. ✅ Complete Implementation Status

**Add New Location Form (`add-location-form.html`):**
- ✅ Simplified form with only city and state fields (no business-specific data)
- ✅ AI-powered SEO fields (meta title, description, keywords, location description, about)
- ✅ Real-time character counters for SEO fields
- ✅ Auto-generation of SEO content when city/state changes
- ✅ Manual "Generate SEO with AI" button
- ✅ Form submission handling with loading states
- ✅ Success/error message display
- ✅ Form validation and reset after successful submission

**Backend Integration:**
- ✅ `save-location-data.js` Netlify function for creating location pages
- ✅ AI SEO generation integration in the backend
- ✅ Supabase database integration
- ✅ Environment variable support for all API keys

**Security Implementation:**
- ✅ Environment variables for OpenAI API key (`ai-seo-generator.js`)
- ✅ Environment variables for Supabase credentials (`supabase-config.js`)
- ✅ Environment variables for Contentful credentials (`contentful-config.js`)
- ✅ `.gitignore` properly configured to exclude `.env` files

**Testing:**
- ✅ Created `test-add-location.html` for testing all functionality
- ✅ Tests for AI SEO generation, form submission, and environment variables

### 10. How to Test
1. Visit `/test-add-location.html` to run comprehensive tests
2. Visit `/add-location-form.html` to test the actual form
3. Check your Netlify dashboard for environment variable configuration
4. Monitor function logs in Netlify for any errors

### 11. Form Purpose
The "Add New Location" form is designed specifically for creating location pages based on city and state data. It does not collect business-specific information like company names, emails, or websites. The focus is purely on location data for SEO-optimized location pages.

### 12. Automatic URL Generation
When you create a location page, the system automatically generates a URL slug in the format:
- **Input**: City: "Jacksonville", State: "FL"
- **Generated URL**: `/location/jacksonville-fl`
- **Full URL**: `https://thevendinglocator.com/location/jacksonville-fl`

**Slug Generation Rules:**
- City names are converted to lowercase
- Spaces are replaced with hyphens
- Special characters are removed
- State abbreviations are converted to lowercase
- Format: `city-state`

**Examples:**
- New York, NY → `/location/new-york-ny`
- Los Angeles, CA → `/location/los-angeles-ca`
- Miami Beach, FL → `/location/miami-beach-fl` 