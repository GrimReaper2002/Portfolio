import { getProjects } from '@/lib/data'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'
import { Database } from 'lucide-react'

export default async function ProjectsGallery() {
  const projects = await getProjects()

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Work"
          title="Featured Projects"
          subtitle="AI/ML systems built for production — from hackathon winners to enterprise-scale pipelines"
        />

        {projects.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-slate-500">
            <Database size={32} className="opacity-40" />
            <p className="text-sm">No projects yet — add rows to the Supabase projects table.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
