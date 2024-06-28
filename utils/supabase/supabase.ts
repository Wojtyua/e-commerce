import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase.types';

const client = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const supabase = () => client;

export default supabase;