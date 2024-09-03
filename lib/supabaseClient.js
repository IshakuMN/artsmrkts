import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to insert a contact with name, email, phone_number, and message
export async function addContactWithMessage(
  name,
  email,
  phone_number,
  message,
) {
  const { data, error } = await supabase
    .from("Contact")
    .insert([{ name, email, phone_number, message }]);

  if (error) {
    throw error;
  }

  return data;
}

// Function to insert a contact with name, email, phone_number, and language
export async function addContactWithLanguage(
  name,
  email,
  phone_number,
  language,
) {
  const { data, error } = await supabase
    .from("Contact")
    .insert([{ name, email, phone_number, language }]);

  if (error) {
    throw error;
  }

  return data;
}
