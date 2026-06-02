import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Open to new opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-white">Ramkishore</span>{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
            Namala
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-slate-400 font-medium tracking-wide">
          AI / ML Engineer &nbsp;·&nbsp; LLM Systems &nbsp;·&nbsp; RAG Pipelines &nbsp;·&nbsp; MLOps
        </p>

        {/* 3-sentence summary */}
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          With 4 years of real-world AI industry experience, I design and ship production-grade
          machine learning systems — from NLP-to-SQL pipelines and end-to-end RAG architectures
          to fine-tuned Transformer models — that give enterprises direct, intelligent access to
          their data.{' '}
          Grounded in Python and Java and fluent across the full MLOps stack, I've driven a 30%
          improvement in document processing accuracy and built LLM-powered agents deployed at
          scale on AWS and Azure.{' '}
          I'm ready to contribute immediately to teams building the next generation of
          customer-facing AI products.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors duration-200"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
          >
            View Projects
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 pt-2">
          <a
            href="https://github.com/ramkishore-namala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={22} />
          </a>
          <a
            href="https://linkedin.com/in/ramkishore-namala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={22} />
          </a>
          <a
            href="mailto:ramkishorenamala2002@gmail.com"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  )
}
