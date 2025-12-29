# Supabase Setup Guide

This guide will help you set up Supabase for the waitlist feature.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in your project details:
   - **Name**: true-table (or any name you prefer)
   - **Database Password**: Choose a strong password
   - **Region**: Select the closest region to your users
5. Click "Create new project" and wait for it to initialize

## Step 2: Create the Waitlist Table

1. In your Supabase project dashboard, click on "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy and paste the contents of `supabase-setup.sql` into the editor
4. Click "Run" to execute the SQL

This will create:
- A `waitlist` table with columns: `id`, `name`, `email`, `phone`, `created_at`
- Indexes for better performance
- Row Level Security policies to allow anonymous users to insert data

## Step 3: Get Your API Credentials

1. In your Supabase project dashboard, click on "Settings" (gear icon) in the left sidebar
2. Click on "API" under Project Settings
3. You'll see two important values:
   - **Project URL**: Something like `https://xxxxxxxxxxxxx.supabase.co`
   - **anon public key**: A long string starting with `eyJ...`

## Step 4: Update Your Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Save the file
4. **Restart your development server** for the changes to take effect:
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` again

## Step 5: Test the Integration

1. Navigate to http://localhost:5173/waitlist
2. Fill out the form with test data
3. Click "Join Waitlist"
4. You should see a success message
5. Go back to your Supabase dashboard → "Table Editor" → "waitlist" table
6. You should see your test entry in the table!

## Viewing Waitlist Submissions

To view all waitlist submissions:
1. Go to your Supabase dashboard
2. Click "Table Editor" in the left sidebar
3. Select the "waitlist" table
4. You'll see all submissions with their details and timestamps

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure you've created the `.env` file
- Verify the variable names start with `VITE_`
- Restart your development server after updating `.env`

### "Failed to submit" error
- Check your browser console for detailed error messages
- Verify your Supabase credentials are correct
- Make sure the `waitlist` table exists in your database
- Check that Row Level Security policies are set up correctly

### Data not appearing in Supabase
- Refresh the Table Editor page
- Check the browser console for any error messages
- Verify the RLS policies allow anonymous inserts

## Security Notes

- The `.env` file is already added to `.gitignore` to prevent committing credentials
- The anon key is safe to use in client-side code (it's public)
- Row Level Security ensures users can only insert data, not read or modify existing entries
- For production, consider adding rate limiting and email validation
