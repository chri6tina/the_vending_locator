# Visitor Database Setup

This document explains how to set up the visitor database system that captures email, city, and state from all website visitors.

## Database Table Setup

Run this SQL in your Supabase SQL Editor:

```sql
-- Create visitors table
CREATE TABLE visitors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  city TEXT,
  state TEXT,
  source TEXT DEFAULT 'unknown',
  consent BOOLEAN DEFAULT false,
  last_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for fast lookups
CREATE INDEX idx_visitors_email ON visitors(email);
CREATE INDEX idx_visitors_state ON visitors(state);
CREATE INDEX idx_visitors_city ON visitors(city);
CREATE INDEX idx_visitors_source ON visitors(source);
CREATE INDEX idx_visitors_consent ON visitors(consent);
CREATE INDEX idx_visitors_created_at ON visitors(created_at DESC);

-- Create unique constraint on email (prevents duplicates)
CREATE UNIQUE INDEX idx_visitors_email_unique ON visitors(email);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_visitors_updated_at BEFORE UPDATE ON visitors
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## Features

### 1. Lead Capture Form Component
- Located at: `src/components/LeadCaptureForm.tsx`
- Collects: Email, City, State, Consent
- Can be added to any page
- Automatically stores data via `/api/visitors` endpoint

### 2. API Endpoint
- **POST** `/api/visitors` - Store visitor information
  - Validates email format
  - Updates existing visitors if email exists
  - Falls back to console logging if database not configured

- **GET** `/api/visitors` - Retrieve visitors (for admin)
  - Supports filtering by state, city
  - Pagination support
  - Returns total count

### 3. Admin Dashboard
- Located at: `/admin/visitors`
- View all visitors with filters
- Search by email, city, state
- Filter by state and source
- Export to CSV functionality
- Statistics dashboard

## Usage

### Adding Lead Capture Form to Pages

```tsx
import LeadCaptureForm from '@/components/LeadCaptureForm'

// In your component:
<LeadCaptureForm
  title="Get Notified About New Leads"
  description="Enter your email and location to be notified..."
  source="pricing-page" // Track where signup came from
  showCityState={true}
/>
```

### Sources to Track

- `hot-leads-page` - Hot leads marketplace
- `pricing-page` - Pricing page
- `home-page` - Homepage
- `contact-page` - Contact form
- `vending-leads-[state]` - State-specific pages
- `subscription-modal` - Subscription signup

## Admin Features

### Viewing Visitors
1. Go to `/admin/visitors`
2. Use filters to find visitors by location
3. Export CSV for email campaigns

### Sending Leads to Visitors
1. Filter visitors by state/city matching the lead
2. Export filtered list to CSV
3. Use CSV for email marketing campaigns
4. Send leads to visitors who consented

## Privacy & Compliance

- All forms require explicit consent checkbox
- Visitors can unsubscribe at any time
- Email addresses are stored securely
- GDPR-compliant consent tracking

## Notes

- System works even if Supabase is not configured (falls back to console logging)
- Duplicate emails are automatically updated with new information
- Visitors are tracked by source to understand where signups come from
- Consent status is tracked separately for compliance
