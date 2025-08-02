# Squarespace Migration Guide

## 🎯 Overview
This guide will help you migrate your Vending Locator website from GitHub Pages to Squarespace.

## 📋 Pre-Migration Checklist

### ✅ Files Ready for Squarespace
- `index.html` - Homepage
- `styles.css` - All styling (green theme applied)
- `script.js` - JavaScript functionality
- `services.html` - Services page
- `pricing.html` - Pricing page
- `blog.html` - Blog page
- `contact.html` - Contact page
- All images and assets

## 🚀 Migration Steps

### Step 1: Sign Up for Squarespace
1. Go to [squarespace.com](https://www.squarespace.com)
2. Click "Get Started"
3. Choose a plan (Personal or Business recommended)
4. Select a template (we'll customize it)

### Step 2: Choose Your Domain
1. **Option A**: Use Squarespace domain
   - Get a free domain with your plan
   - Example: `yourbusiness.squarespace.com`

2. **Option B**: Connect existing domain
   - If you have a custom domain
   - Squarespace will help you transfer it

### Step 3: Set Up Your Site Structure
1. **Pages to Create**:
   - Home
   - Services
   - Pricing
   - Blog
   - Contact

2. **Navigation Setup**:
   - Add all pages to main navigation
   - Organize in logical order

### Step 4: Import Your Content
1. **Homepage Content**:
   - Copy text from `index.html`
   - Upload images to Squarespace
   - Recreate hero section

2. **Services Page**:
   - Copy content from `services.html`
   - Upload service images
   - Recreate layout

3. **Pricing Page**:
   - Copy pricing tables from `pricing.html`
   - Set up pricing blocks
   - Add call-to-action buttons

4. **Blog Setup**:
   - Enable blog functionality
   - Import blog posts
   - Set up categories

5. **Contact Page**:
   - Copy contact information
   - Set up contact form
   - Add map integration

### Step 5: Customize Design
1. **Apply Green Theme**:
   - Color: `#5ada86`
   - Update all buttons and links
   - Apply to navigation

2. **Typography**:
   - Use Montserrat font family
   - Maintain current font sizes
   - Keep professional appearance

3. **Layout**:
   - Recreate responsive design
   - Ensure mobile compatibility
   - Test all pages

### Step 6: SEO and Analytics
1. **SEO Setup**:
   - Add meta titles and descriptions
   - Set up page URLs
   - Add alt text to images

2. **Analytics**:
   - Connect Google Analytics
   - Set up conversion tracking
   - Monitor performance

### Step 7: Contentful Integration (if needed)
1. **API Setup**:
   - Add Contentful API credentials
   - Set up blog post integration
   - Test dynamic content

2. **Environment Variables**:
   - Add to Squarespace settings
   - Test API connections

## 🔧 Technical Considerations

### Custom Code Injection
Squarespace allows custom CSS and JavaScript:
1. Go to Settings → Advanced → Code Injection
2. Add your custom CSS for green theme
3. Add JavaScript for functionality

### Custom CSS Example:
```css
/* Green Theme for Squarespace */
.btn-primary, .sqs-button {
    background-color: #5ada86 !important;
    border-color: #5ada86 !important;
}

.btn-primary:hover, .sqs-button:hover {
    background-color: #4ac775 !important;
}

.nav-link:hover {
    color: #5ada86 !important;
}
```

## 📞 Support Resources

### Squarespace Support
- [Squarespace Help Center](https://support.squarespace.com)
- [Live Chat Support](https://www.squarespace.com/contact)
- [Community Forum](https://answers.squarespace.com)

### Migration Timeline
- **Day 1**: Sign up and basic setup
- **Day 2-3**: Content migration
- **Day 4**: Design customization
- **Day 5**: Testing and launch

## 💰 Cost Considerations

### Squarespace Plans
- **Personal**: $16/month (basic features)
- **Business**: $26/month (advanced features)
- **Commerce**: $30/month (e-commerce features)

### Recommended: Business Plan
- Custom CSS/JS injection
- Advanced analytics
- Professional email
- Domain included

## ✅ Post-Migration Checklist

- [ ] All pages migrated
- [ ] Green theme applied
- [ ] Navigation working
- [ ] Forms functional
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] Analytics connected
- [ ] Contentful integrated (if needed)
- [ ] Domain connected
- [ ] SSL certificate active

## 🚨 Important Notes

1. **Backup Everything**: Keep your GitHub repository as backup
2. **Test Thoroughly**: Check all pages and functionality
3. **Update Links**: Update any external links pointing to your site
4. **Monitor Performance**: Track site speed and user experience
5. **Content Updates**: Plan for ongoing content management

---

**Need Help?** Contact Squarespace support or refer to their extensive documentation for detailed guidance on each step. 