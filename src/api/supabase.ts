import { createClient } from '@supabase/supabase-js'

const RESTFUL_URL = 'https://elgpkefgaydpcddvadeg.supabase.co'
const PUBLIC_ANONYMOUS_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZ3BrZWZnYXlkcGNkZHZhZGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIxMTM5MjQsImV4cCI6MTk3NzY4OTkyNH0.KZCi_Yp6Zm7HrRWcuqjajuvGZk_jH4spAPAlJuhNxgY'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  RESTFUL_URL,
  PUBLIC_ANONYMOUS_KEY
)