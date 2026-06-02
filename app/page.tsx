import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SkillsGraph from '@/components/SkillsGraph'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import ProjectsGallery from '@/components/ProjectsGallery'
import ContactSection from '@/components/ContactSection'

function ProjectsLoading() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 h-64 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsGraph />
        <ExperienceTimeline />
        <Suspense fallback={<ProjectsLoading />}>
          <ProjectsGallery />
        </Suspense>
        <ContactSection />
      </main>
      <footer className="border-t border-slate-800/60 py-8 text-center">
        <p className="text-sm text-slate-600">
          {'© '}{new Date().getFullYear()}{' Ramkishore Namala · Built with Next.js & Tailwind CSS'}
        </p>
      </footer>
    </>
  )
}
