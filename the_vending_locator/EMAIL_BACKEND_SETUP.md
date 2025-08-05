# Email Backend Setup Guide

## Overview
This guide will help you set up a complete email management system for The Vending Locator website. The system includes:

- ✅ Email subscription handling
- ✅ Welcome confirmation emails
- ✅ Campaign management
- ✅ Unsubscribe functionality
- ✅ Admin dashboard

## Setup Options

### Option 1: Netlify Functions (Recommended)
**Cost**: Free tier available
**Setup Time**: 30 minutes
**Features**: Serverless, scalable, easy deployment

### Option 2: Third-party Email Service
**Cost**: $10-50/month
**Setup Time**: 15 minutes
**Features**: Professional email marketing tools

### Option 3: Custom Backend
**Cost**: $20-100/month
**Setup Time**: 2-4 hours
**Features**: Full control, custom features

---

## Option 1: Netlify Functions Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Email Service
1. **Create a Gmail App Password**:
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an "App Password" for "Mail"
   - Use this password instead of your regular Gmail password

2. **Set Environment Variables**:
   - Create a `.env` file in your project root:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Step 3: Deploy to Netlify
1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy your site**:
   ```bash
   netlify deploy --prod
   ```

4. **Set Environment Variables in Netlify**:
   - Go to your Netlify dashboard
   - Navigate to Site settings > Environment variables
   - Add `EMAIL_USER` and `EMAIL_PASS`

### Step 4: Test the System
1. Visit your website and try subscribing to the newsletter
2. Check that confirmation emails are sent
3. Access the admin dashboard at `/admin.html`

---

## Option 2: Mailchimp Integration (Easier)

### Step 1: Create Mailchimp Account
1. Sign up at [mailchimp.com](https://mailchimp.com)
2. Create a new audience/list
3. Get your API key from Account > Extras > API Keys

### Step 2: Update the Code
Replace the serverless functions with Mailchimp API calls:

```javascript
// In script.js, replace the fetch call with:
const response = await fetch('https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
            ZIPCODE: zipcode
        }
    })
});
```

### Step 3: Benefits of Mailchimp
- ✅ Professional email templates
- ✅ Analytics and tracking
- ✅ Automated campaigns
- ✅ A/B testing
- ✅ GDPR compliance

---

## Option 3: Database Integration

### Recommended Databases:
1. **Airtable** (Easiest)
   - Free tier available
   - No setup required
   - API included

2. **Supabase** (Most powerful)
   - PostgreSQL database
   - Real-time features
   - Free tier available

3. **MongoDB Atlas** (Scalable)
   - Document database
   - Free tier available
   - Good for complex data

### Airtable Setup Example:
1. Create an Airtable account
2. Create a new base with a "Subscribers" table
3. Add columns: Email, Zipcode, Source, SubscribedAt, Status
4. Get your API key from Account settings
5. Update the serverless functions to use Airtable API

---

## Admin Dashboard Features

### Current Features:
- ✅ View all subscribers
- ✅ Send email campaigns
- ✅ Unsubscribe management
- ✅ Statistics dashboard
- ✅ Campaign preview

### Access the Dashboard:
- URL: `yourdomain.com/admin.html`
- Currently uses localStorage (demo mode)
- Connect to your database for production

---

## Email Templates

### Welcome Email Template:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #2563eb;">Welcome to The Vending Locator!</h2>
    <p>Thank you for subscribing to our newsletter!</p>
    
    <h3>What you'll receive:</h3>
    <ul>
        <li>Weekly hot leads and location opportunities</li>
        <li>Vending industry tips and insights</li>
        <li>Exclusive content to grow your business</li>
    </ul>
    
    <p>We're excited to help you find profitable vending locations!</p>
</div>
```

### Campaign Email Template:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #2563eb;">{{CAMPAIGN_TITLE}}</h2>
    <p>{{CAMPAIGN_CONTENT}}</p>
    
    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>This Week's Hot Leads</h3>
        <ul>
            <li>Location 1: High-traffic office building</li>
            <li>Location 2: Shopping center opportunity</li>
            <li>Location 3: Hospital cafeteria</li>
        </ul>
    </div>
    
    <p>Best regards,<br>The Vending Locator Team</p>
</div>
```

---

## Security Considerations

### Email Security:
- ✅ Use app passwords, not regular passwords
- ✅ Enable 2-factor authentication
- ✅ Use HTTPS for all communications
- ✅ Implement rate limiting

### Data Protection:
- ✅ Store emails securely
- ✅ Implement unsubscribe functionality
- ✅ Follow GDPR guidelines
- ✅ Regular data backups

---

## Testing Checklist

### Before Going Live:
- [ ] Test email subscription on all forms
- [ ] Verify confirmation emails are sent
- [ ] Test unsubscribe functionality
- [ ] Check admin dashboard access
- [ ] Test campaign sending
- [ ] Verify email templates render correctly
- [ ] Test on mobile devices
- [ ] Check spam folder settings

### Performance Testing:
- [ ] Test with 100+ subscribers
- [ ] Monitor email delivery rates
- [ ] Check bounce rates
- [ ] Test unsubscribe rates

---

## Support and Maintenance

### Regular Tasks:
- Monitor email delivery rates
- Clean up bounced emails
- Update email templates
- Backup subscriber data
- Review analytics

### Troubleshooting:
- Check Netlify function logs
- Verify environment variables
- Test email service credentials
- Monitor API rate limits

---

## Next Steps

1. **Choose your preferred option** (Netlify Functions recommended)
2. **Follow the setup guide** for your chosen option
3. **Test the system** thoroughly
4. **Deploy to production**
5. **Monitor and optimize**

For questions or support, refer to the documentation or contact your developer.

---

## File Structure
```
the_vending_locator/
├── functions/
│   ├── subscribe.js      # Handle new subscriptions
│   ├── send-campaign.js  # Send email campaigns
│   └── unsubscribe.js    # Handle unsubscriptions
├── admin.html            # Admin dashboard
├── netlify.toml         # Netlify configuration
├── package.json         # Dependencies
└── EMAIL_BACKEND_SETUP.md # This guide
``` 