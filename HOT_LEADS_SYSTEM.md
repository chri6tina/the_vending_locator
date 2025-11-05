# Hot Leads Marketplace System

Complete system for creating, managing, and selling individual vending machine location leads.

## 🎯 Overview

The Hot Leads system allows you to:
- Create individual premium vending location leads
- Auto-generate SEO-friendly URLs for each lead
- Sell leads through Stripe checkout
- Automatically reveal full contact details after purchase
- Track sales and revenue

## 📋 How It Works

### 1. Admin Creates a Lead

**Access:** `/admin/hot-leads`

**Form Fields:**
- **City** (required) - e.g., "Ann Arbor"
- **State** (required) - e.g., "Michigan"
- **Title** (optional) - Auto-generated if empty: "Vending Location in {City}, {State}"
- **Business Type** (required) - e.g., "Office Building", "Manufacturing", "Healthcare"
- **Employee Count** (required) - Select from dropdown (50-100, 100-250, 250-500, 500-1000, 1000+)
- **Zip Code** (required) - e.g., "48104"
- **Description** (required) - Public description of the opportunity
- **Price** (required) - Dollar amount (e.g., 299.00)

**Hidden Contact Info** (only shown to buyer after purchase):
- Contact Name
- Contact Phone
- Contact Email
- Full Address

**What Happens:**
1. Form automatically generates a slug: `hot-vending-lead-in-ann-arbor-michigan`
2. Creates public URL: `/hot-leads/hot-vending-lead-in-ann-arbor-michigan`
3. Lead is marked as "available"
4. Success notification shows the generated URL

### 2. Customer Views the Lead

**Public URL Example:** 
`/hot-leads/hot-vending-lead-in-ann-arbor-michigan`

**What They See:**
- ✅ Lead title
- ✅ City, State, Zip Code
- ✅ Business type
- ✅ Employee count
- ✅ Description
- ✅ Price
- ✅ "Purchase This Lead" button
- ❌ Contact details (hidden)

**Lead Page Features:**
- Beautiful gradient header with price
- Clear lead statistics (business type, employees, location)
- Security badges and purchase guarantee
- Responsive design

### 3. Customer Purchases the Lead

**Purchase Flow:**
1. Customer clicks "Purchase for $XXX" button
2. Redirected to Stripe Checkout (secure payment)
3. Completes payment
4. Redirected back to lead page with `?purchased=true&session_id=xxx`
5. System verifies payment with Stripe
6. Lead status updated to "sold" in database
7. Buyer's email stored
8. **Full contact information is revealed**

**What's Revealed After Purchase:**
- ✅ Contact Name
- ✅ Contact Phone (clickable)
- ✅ Contact Email (clickable mailto link)
- ✅ Full Address
- ✅ Green success banner confirming purchase

### 4. Lead Becomes Unavailable

**After Sale:**
- Lead status changes to "sold"
- Original URL still accessible but shows "Lead Sold" message
- Other customers can't purchase it
- No longer indexed by search engines (`robots: noindex`)

## 🔧 Technical Architecture

### URL Structure

**Format:** `/hot-leads/hot-vending-lead-in-{city}-{state}`

**Examples:**
- `/hot-leads/hot-vending-lead-in-ann-arbor-michigan`
- `/hot-leads/hot-vending-lead-in-austin-texas`
- `/hot-leads/hot-vending-lead-in-miami-florida`

**Slug Generation:**
- Automatic from city + state
- Lowercase, hyphenated
- Special characters removed
- Unique constraint in database

### Database Schema

**Table:** `hot_leads`

**Public Fields** (shown before purchase):
- `id` - UUID primary key
- `title` - Lead title
- `slug` - Unique URL slug
- `city` - City name
- `state` - State name
- `business_type` - Type of business
- `employee_count` - Employee range
- `zip_code` - Zip code
- `description` - Public description
- `price` - Price in dollars
- `status` - available | sold | pending
- `created_at` - Creation timestamp

**Private Fields** (hidden until purchase):
- `contact_name` - Contact person name
- `contact_email` - Contact email
- `contact_phone` - Contact phone number
- `full_address` - Complete street address

**Transaction Fields:**
- `sold_at` - Sale timestamp
- `buyer_email` - Purchaser's email

### API Endpoints

**1. Get All Leads**
```
GET /api/hot-leads
Returns: List of all leads
```

**2. Get Single Lead**
```
GET /api/hot-leads/[slug]
Returns: Lead details (contact info hidden if not purchased)
```

**3. Create Lead**
```
POST /api/hot-leads
Body: { city, state, businessType, employeeCount, zipCode, description, price, ... }
Returns: New lead with auto-generated slug
```

**4. Update Lead**
```
PUT /api/hot-leads
Body: { id, ...updates }
Returns: Updated lead
```

**5. Verify Purchase**
```
POST /api/hot-leads/purchase
Body: { leadId, sessionId }
Verifies Stripe payment, marks as sold, returns full details
```

### Payment Flow

**Using Stripe Checkout:**

1. Customer clicks "Purchase" button
2. Frontend calls `/api/create-checkout-session` with:
   ```json
   {
     "items": [{ "name": "Lead Title", "price": 299 }],
     "metadata": {
       "leadId": "uuid",
       "leadSlug": "hot-vending-lead-in-city",
       "productType": "hot-lead"
     },
     "successUrl": "/hot-leads/[slug]?purchased=true&session_id={CHECKOUT_SESSION_ID}",
     "cancelUrl": "/hot-leads/[slug]"
   }
   ```
3. Stripe Checkout page opens
4. Payment processed
5. Redirect to success URL with session_id
6. Frontend calls `/api/hot-leads/purchase` with session_id
7. Backend verifies payment with Stripe
8. Lead marked as sold
9. Full contact details returned and displayed

### Security Features

✅ **Payment Verification**
- Session ID verified with Stripe before unlocking details
- Prevents fraud and unauthorized access

✅ **One-Time Sale**
- Each lead can only be sold once
- Status checked before purchase
- Sold leads show "unavailable" message

✅ **Secure Data Handling**
- Contact info stored in database (not in code)
- Only revealed after verified payment
- Buyer email stored for record-keeping

## 📱 User Experience

### For Customers

**Browsing:**
1. Visit `/hot-leads` to see all available leads
2. Click on interesting lead
3. View public details (city, business type, employees, etc.)
4. See description and price

**Purchasing:**
1. Click "Purchase for $XXX" button
2. Enter payment details in Stripe
3. Complete purchase
4. Automatically redirected back to lead page
5. See green success banner
6. Full contact information revealed
7. Email confirmation sent (if configured)

### For Admins

**Creating Leads:**
1. Go to `/admin/hot-leads`
2. Click "Create New Lead" button
3. Fill in form with city, state, and lead details
4. Optionally add contact info (name, phone, email, address)
5. Click "Create Lead"
6. Success! URL generated automatically
7. Lead appears in list with "View Page" button

**Managing Leads:**
- View all leads with status badges
- See generated URL for each lead
- Edit lead details
- Delete leads
- View public page
- Track revenue

## 🚀 Quick Start Guide

### Step 1: Set Up Database

Run the migration SQL in your Supabase dashboard:
```sql
ALTER TABLE hot_leads 
  ADD COLUMN IF NOT EXISTS slug TEXT,
  ADD COLUMN IF NOT EXISTS city TEXT,
  ADD COLUMN IF NOT EXISTS state TEXT,
  ADD COLUMN IF NOT EXISTS contact_name TEXT,
  ADD COLUMN IF NOT EXISTS contact_email TEXT,
  ADD COLUMN IF NOT EXISTS contact_phone TEXT,
  ADD COLUMN IF NOT EXISTS full_address TEXT,
  ADD COLUMN IF NOT EXISTS buyer_email TEXT;

ALTER TABLE hot_leads ADD CONSTRAINT hot_leads_slug_key UNIQUE (slug);
CREATE INDEX IF NOT EXISTS idx_hot_leads_slug ON hot_leads(slug);
CREATE INDEX IF NOT EXISTS idx_hot_leads_status ON hot_leads(status);
```

### Step 2: Create Your First Lead

1. Navigate to `/admin/hot-leads`
2. Click "Create New Lead"
3. Fill in:
   - City: "Ann Arbor"
   - State: "Michigan"
   - Business Type: "Office Building"
   - Employee Count: "250-500"
   - Zip Code: "48104"
   - Description: "Premium downtown office complex seeking vending services..."
   - Price: 299
   - Contact Name: "John Smith"
   - Contact Phone: "(734) 555-1234"
   - Contact Email: "john@example.com"
   - Full Address: "123 Main Street, Ann Arbor, MI 48104"
4. Click "Create Lead"

**Result:**
- URL created: `/hot-leads/hot-vending-lead-in-ann-arbor-michigan`
- Lead is live and purchasable!

### Step 3: Test the Purchase Flow

1. Visit the generated URL
2. Click "Purchase for $299"
3. Complete Stripe checkout
4. Get redirected back
5. See full contact information revealed

## 📊 Admin Dashboard Features

### Lead Statistics

- **Total Leads** - All-time count
- **Available** - Currently for sale
- **Sold** - Completed sales
- **Revenue** - Total earnings

### Lead Management

Each lead displays:
- Title with status badge (Available/Sold/Pending)
- City, State location
- Business type
- Employee count
- Zip code
- Price
- **Generated URL** (in gray box)
- Description preview

### Actions

- **View** (eye icon) - Opens public page in new tab
- **Edit** (pencil icon) - Modify lead details
- **Delete** (trash icon) - Remove lead

## 🎨 Design Features

### Lead Page Design

- **Gradient header** - Navy to navy-light with white text
- **Price prominence** - Large display in header
- **Icon-based stats** - Clear visual representation
- **Coral accents** - Purchase button and icons
- **Success animation** - Motion effects for purchase confirmation
- **Responsive** - Mobile-friendly layout

### Color Scheme

- **Navy** (`#1e3a8a`) - Headers, primary elements
- **Coral** (`#ff6b6b`) - Call-to-action, accents
- **Charcoal** (`#2d3748`) - Primary text
- **Stone** (`#718096`) - Secondary text
- **Cream** (`#faf8f5`) - Light backgrounds
- **Warm White** (`#fdfcfa`) - Page background

## ⚠️ Important Notes

### Security

1. **Always verify Stripe session** before revealing contact details
2. **Check lead status** before allowing purchase
3. **Store buyer email** for record-keeping
4. **Use HTTPS** in production

### SEO

- Each lead has unique URL
- Proper meta tags and Open Graph
- Available leads are indexed
- Sold leads are noindexed (robots: noindex)

### Best Practices

1. **Write compelling descriptions** - Help customers understand the value
2. **Price appropriately** - Based on location quality and employee count
3. **Include all contact details** - Name, phone, email, address when possible
4. **Monitor sold leads** - Track which locations sell well
5. **Clean URLs** - System handles this automatically

## 📝 Example Lead Creation

### Input:
```
City: Austin
State: Texas
Business Type: Tech Startup Campus
Employee Count: 500-1000
Zip Code: 78701
Description: High-growth tech campus in downtown Austin with 750+ employees. 
             Perfect foot traffic, young demographic, premium vending opportunity.
Price: 399
Contact Name: Sarah Johnson
Contact Phone: (512) 555-0123
Contact Email: facilities@techcompany.com
Full Address: 500 Congress Avenue, Austin, TX 78701
```

### Generated:
```
Slug: hot-vending-lead-in-austin-texas
URL: /hot-leads/hot-vending-lead-in-austin-texas
Title: Vending Location in Austin, Texas (auto-generated)
Status: Available
```

### Public View:
- Shows all info except contact details
- "Purchase for $399" button visible

### After Purchase:
- Green success banner
- Contact card with all details revealed
- Email sent to buyer
- Lead marked as "sold"

## 🔗 URLs Reference

- **Admin Dashboard:** `/admin/hot-leads`
- **All Leads List:** `/hot-leads`
- **Individual Lead:** `/hot-leads/{slug}`
- **Create API:** `POST /api/hot-leads`
- **Get Lead API:** `GET /api/hot-leads/{slug}`
- **Purchase API:** `POST /api/hot-leads/purchase`

## ✅ Complete Workflow

1. **Admin** creates lead in `/admin/hot-leads`
2. **System** generates slug and creates page
3. **Customer** finds lead at `/hot-leads/{slug}`
4. **Customer** purchases via Stripe
5. **System** verifies payment
6. **System** marks lead as sold
7. **System** reveals full contact info
8. **Customer** receives all details
9. **Admin** sees sale in dashboard

---

**Status:** ✅ Fully Implemented
**Last Updated:** November 4, 2025

