import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase.types"; 
const supabaseUrl = "https://jjsxonvnqwdwhjqmqihm.supabase.co";
// this is a public key, so it's safe to expose it here
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqc3hvbnZucXdkd2hqcW1xaWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NjUwODYsImV4cCI6MjAyODI0MTA4Nn0.YGwMKjH7wMXLcJ0M8AzsHhY6i07OTnNDtnoa-Rqb_HM";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
