import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create and export Supabase client
// If environment variables are missing, the client will fail gracefully on first use
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
