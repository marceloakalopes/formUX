import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Create a Supabase client with the service role key.
 * @returns SupabaseClient
 */
export function createAdminClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

  return createClient(supabaseUrl, supabaseServiceRoleKey);
}
