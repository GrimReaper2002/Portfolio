'use server'

import { createSupabaseClient } from '@/utils/supabase'
import type { ActionState } from '@/types'

export async function submitContact(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  if (!name || !email || !message) {
    return { success: false, message: 'All fields are required.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  try {
    const supabase = createSupabaseClient()
    const { error } = await supabase
      .from('contact_messages')
      .insert({ name, email, message })

    if (error) {
      console.error('Failed to save contact message:', error.message)
      return { success: false, message: 'Something went wrong. Please try again.' }
    }

    return { success: true, message: "Thanks for reaching out! I'll get back to you soon." }
  } catch (err) {
    console.error('Supabase client error:', err)
    return { success: false, message: 'Service unavailable. Please email me directly.' }
  }
}
