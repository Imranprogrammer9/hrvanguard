import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface ContactSubmission {
  full_name: string
  email: string
  service: string
  target_role?: string
  message: string
}

export async function submitContactForm(data: ContactSubmission) {
  const { error } = await supabase.from('contact_submissions').insert([data])
  if (error) throw error
}
