import { ExternalLink, BrainCircuit } from 'lucide-react'
import { GitHubIcon } from './icons'
import type { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
        <BrainCircuit size={18} />
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech_stack.map(tech => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700/80"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.github_url || project.live_url) && (
        <div className="flex gap-4 pt-1 border-t border-slate-800">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors"
            >
              <GitHubIcon size={13} />
              GitHub
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  )
}
