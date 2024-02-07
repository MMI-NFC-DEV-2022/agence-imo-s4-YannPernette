import { createClient } from '@supabase/supabase-js'
import type { Database } from './supabase-types'
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)


// Pour tester dans la console, dé-commenter la ligne qui suit :
globalThis.supabase = supabase

export const user = ref(supabase.auth.getUser())
supabase.auth.onAuthStateChange(()=>{
 user.value = supabase.auth.getUser()
})