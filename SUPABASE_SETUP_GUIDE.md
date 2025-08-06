# Supabase Setup Guide

## Overview
This guide helps you set up Supabase for the Vending Locator project, including database configuration, environment variables, and security policies.

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your project URL and API keys

## 2. Environment Variables Setup

### Required Environment Variables

You need to set these environment variables in your Netlify deployment:

```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### How to Get Your Keys

1. **SUPABASE_URL**: Found in your Supabase project settings
2. **SUPABASE_ANON_KEY**: Found in your Supabase project settings under API
3. **SUPABASE_SERVICE_ROLE_KEY**: Found in your Supabase project settings under API (Service Role key)

### Setting Up in Netlify

1. Go to your Netlify dashboard
2. Navigate to Site settings > Environment variables
3. Add each variable with its corresponding value

## 3. Database Setup

### Run the SQL Script

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Run the contents of `supabase-setup.sql`

This will create:
- The `locations` table with all necessary columns
- Indexes for better performance
- Row Level Security (RLS) policies
- Sample data

## 4. RLS Policies Setup

### For Admin Functions (Delete Operations)

The delete functions require the service role key to bypass RLS policies. Make sure you have:

1. Set the `SUPABASE_SERVICE_ROLE_KEY` environment variable
2. Updated the delete functions to use the service role key

### Alternative: Update RLS Policies

If you prefer to use the anon key, run the `fix-rls-policies.sql` script in your Supabase SQL editor to allow anonymous users to delete locations.

## 5. Testing the Setup

### Test Database Connection

1. Deploy your site to Netlify
2. Go to the admin panel
3. Try adding a new location
4. Try deleting a location

### Common Issues

**500 Error on Delete Operations**
- Make sure `SUPABASE_SERVICE_ROLE_KEY` is set correctly
- Or run the RLS policy fix script
- Check that the service role key has the correct permissions

**Authentication Errors**
- Verify your environment variables are set correctly
- Check that the keys match your Supabase project

## 6. Security Considerations

- The service role key bypasses RLS policies and should be kept secure
- Only use the service role key for admin functions
- The anon key is safe to use in client-side code for read operations

## 7. Troubleshooting

### Check Environment Variables
```bash
# In Netlify Functions, you can log environment variables:
console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_SERVICE_ROLE_KEY exists:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
```

### Test Database Connection
Use the `test-supabase-connection.js` function to verify your setup.

### Check RLS Policies
In Supabase SQL Editor, run:
```sql
SELECT * FROM pg_policies WHERE tablename = 'locations';
```

This will show you all policies on the locations table. 