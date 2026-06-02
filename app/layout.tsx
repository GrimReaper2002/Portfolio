import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ramkishore Namala — AI/ML Engineer',
  description:
    'Portfolio of Ramkishore Namala — AI/ML Engineer with 4 years of experience building production-grade LLM systems, RAG pipelines, and scalable ML infrastructure.',
  keywords: [
    'AI Engineer',
    'ML Engineer',
    'LLM',
    'RAG',
    'LangChain',
    'Python',
    'PyTorch',
    'Machine Learning',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#050508] text-slate-100 antialiased">{children}</body>
    </html>
  )
}
