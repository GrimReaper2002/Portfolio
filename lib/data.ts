import { createSupabaseClient } from '@/utils/supabase'
import type { Project } from '@/types'

export async function getProjects(): Promise<Project[]> {
  try {
    const supabase = createSupabaseClient()
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Failed to fetch projects:', error.message)
      return []
    }

    return data ?? []
  } catch (err) {
    console.error('Supabase client error:', err)
    return []
  }
}
