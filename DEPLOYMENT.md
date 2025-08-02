# Deployment Guide

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Prerequisites

1. **GitHub Repository**: Push your code to a GitHub repository
2. **GitHub Pages**: Enable GitHub Pages in your repository settings
3. **Environment Variables**: Set up Contentful credentials (if using Contentful)

### Setting Up Environment Variables

If you're using Contentful, you'll need to set up environment variables in your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following repository secrets:
   - `CONTENTFUL_SPACE_ID`: Your Contentful Space ID
   - `CONTENTFUL_ACCESS_TOKEN`: Your Contentful Access Token
   - `CONTENTFUL_ENVIRONMENT`: Your Contentful Environment (usually 'master')

### Deployment Process

1. **Push to main branch**: The GitHub Action will automatically trigger
2. **Check Actions**: Monitor the deployment in the Actions tab
3. **Access your site**: Your site will be available at `https://[username].github.io/[repository-name]`

### Local Development

For local development with Contentful:

1. Create a `.env` file in the root directory:
   ```
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   CONTENTFUL_ENVIRONMENT=master
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### Troubleshooting

- **Build fails**: Check that the build script in `package.json` is correct
- **Contentful not working**: Verify environment variables are set correctly
- **404 errors**: Ensure `.nojekyll` file is present in the root directory

### Security Notes

- Never commit API keys or sensitive credentials to the repository
- Use environment variables for all sensitive configuration
- The `.gitignore` file is configured to exclude `.env` files 