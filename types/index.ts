export interface Project {
  id: string
  title: string
  description: string
  tech_stack: string[]
  github_url: string | null
  live_url: string | null
  created_at: string
}

export interface ContactMessage {
  name: string
  email: string
  message: string
}

export type ActionState = {
  success: boolean
  message: string
} | null
