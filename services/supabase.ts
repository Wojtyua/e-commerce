import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jjsxonvnqwdwhjqmqihm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqc3hvbnZucXdkd2hqcW1xaWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NjUwODYsImV4cCI6MjAyODI0MTA4Nn0.YGwMKjH7wMXLcJ0M8AzsHhY6i07OTnNDtnoa-Rqb_HM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
