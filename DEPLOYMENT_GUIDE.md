# Deployment Guide - Vendor & Location Workflow

## Overview
This guide covers the deployment of the improved vendor and location management system with database-driven workflows.

## Pre-Deployment Checklist

### 1. Database Setup
Run the following SQL in your Supabase dashboard:

```sql
-- Execute the contents of supabase-setup.sql
-- This creates:
-- - vendors table
-- - vendor_assignments table
-- - Sample vendor data
-- - Proper indexes and RLS policies
```

### 2. Environment Variables
Set up the following environment variables in Netlify:

```bash
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key

# Optional: AI API Keys (if using AI features)
OPENAI_API_KEY=your-openai-key
```

### 3. Function Dependencies
Ensure all required dependencies are installed:

```bash
npm install @supabase/supabase-js
```

## New API Endpoints

### Vendor Management
- `GET /.netlify/functions/get-vendors` - Get all vendors
- `POST /.netlify/functions/save-vendor` - Save new vendor
- `POST /.netlify/functions/assign-vendor` - Assign vendor to location

### Location Management
- `POST /.netlify/functions/create-location-with-vendors` - Create location with vendor assignments
- `GET /.netlify/functions/get-vendor-assignments` - Get vendor assignments for location
- `GET /.netlify/functions/load-vendors-for-location` - Load vendors for location page

## Workflow Improvements

### 1. Database-Driven Vendor Management
- ✅ Vendors stored in Supabase database
- ✅ Vendor assignments tracked in separate table
- ✅ Real-time updates via admin interface
- ✅ Search and filter capabilities

### 2. Combined Location + Vendor Workflow
- ✅ Single API call to create location with vendors
- ✅ Automatic vendor assignment during location creation
- ✅ Rollback functionality on failure
- ✅ Bulk vendor assignment support

### 3. Admin Interface Enhancements
- ✅ Real-time vendor loading from database
- ✅ Improved vendor form with validation
- ✅ Better error handling and user feedback
- ✅ Empty state handling

## Testing Checklist

### Vendor Management
- [ ] Add new vendor via admin interface
- [ ] Verify vendor appears in database
- [ ] Test vendor search functionality
- [ ] Test vendor assignment to location

### Location Management
- [ ] Create location with vendor assignments
- [ ] Verify location page generation
- [ ] Test vendor display on location pages
- [ ] Test bulk vendor assignment

### Error Handling
- [ ] Test with invalid vendor data
- [ ] Test with invalid location data
- [ ] Test network failures
- [ ] Test database connection issues

## Performance Optimizations

### 1. Caching
- Vendor data cached for 1 hour
- Location data cached for 30 minutes
- Assignment data cached for 15 minutes

### 2. Database Indexes
- Indexes on vendor status, city, state
- Indexes on assignment relationships
- Composite indexes for common queries

### 3. Pagination
- Vendor list paginated (50 per page)
- Assignment list paginated (25 per page)
- Search results limited to 50 items

## Monitoring & Maintenance

### 1. Health Checks
- Database connection monitoring
- Function response time tracking
- Error rate monitoring

### 2. Backup Strategy
- Daily database backups
- Function code version control
- Environment variable backups

### 3. Scaling Considerations
- Vendor table: ~10,000 vendors expected
- Assignment table: ~50,000 assignments expected
- Location table: ~1,000 locations expected

## Troubleshooting

### Common Issues

1. **Vendors not loading**
   - Check Supabase connection
   - Verify RLS policies
   - Check function logs

2. **Vendor assignments not working**
   - Verify vendor and location IDs
   - Check assignment table constraints
   - Review function error logs

3. **Location pages not generating**
   - Check file system permissions
   - Verify template file exists
   - Review function error logs

### Debug Commands

```bash
# Test database connection
curl -X GET https://your-site.netlify.app/.netlify/functions/get-vendors

# Test vendor creation
curl -X POST https://your-site.netlify.app/.netlify/functions/save-vendor \
  -H "Content-Type: application/json" \
  -d '{"vendorData":{"name":"Test Vendor","email":"test@example.com"}}'

# Test location creation with vendors
curl -X POST https://your-site.netlify.app/.netlify/functions/create-location-with-vendors \
  -H "Content-Type: application/json" \
  -d '{"locationData":{"city":"Test City","state":"TS"},"vendorIds":[]}'
```

## Security Considerations

### 1. Data Protection
- All vendor data encrypted at rest
- API keys stored in environment variables
- RLS policies prevent unauthorized access

### 2. Input Validation
- All form inputs validated
- SQL injection prevention
- XSS protection implemented

### 3. Rate Limiting
- API calls limited to prevent abuse
- Function timeout limits set
- Database connection pooling

## Future Enhancements

### 1. Advanced Features
- Vendor analytics dashboard
- Automated vendor recommendations
- Bulk import/export functionality
- Vendor performance metrics

### 2. Integration Opportunities
- CRM system integration
- Payment processing
- Email marketing automation
- Customer feedback system

### 3. Mobile Optimization
- Mobile-responsive admin interface
- Progressive web app features
- Offline capability for basic functions

## Support & Documentation

### Resources
- Supabase documentation: https://supabase.com/docs
- Netlify functions: https://docs.netlify.com/functions/overview/
- Admin interface: `/admin` on your domain

### Contact
For deployment issues or questions, refer to the project documentation or contact the development team. 