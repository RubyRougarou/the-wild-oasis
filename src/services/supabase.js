import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://reooetdkicqhvxriudwv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlb29ldGRraWNxaHZ4cml1ZHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NTc4NDYsImV4cCI6MjA0MDIzMzg0Nn0.SvOJLXMfeS3-cfSk2bvzE7RRMlFolwfgPIOvFvu2C30";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
