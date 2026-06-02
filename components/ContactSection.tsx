import { Mail, Phone, MapPin } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'
import SectionHeader from './SectionHeader'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Let's Talk"
          title="Get In Touch"
          subtitle="Open to full-time roles, freelance projects, and research collaborations"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — info */}
          <div className="space-y-8">
            <p className="text-slate-400 leading-relaxed">
              I'm actively exploring new opportunities in AI/ML engineering. Whether you have a
              specific role in mind, an interesting problem to solve, or just want to connect —
              drop me a message and I'll get back to you promptly.
            </p>

            <div className="space-y-4">
              <ContactItem
                icon={<Mail size={17} />}
                label="ramkishorenamala2002@gmail.com"
                href="mailto:ramkishorenamala2002@gmail.com"
              />
              <ContactItem
                icon={<Phone size={17} />}
                label="+1 (720) 914-5016"
                href="tel:+17209145016"
              />
              <ContactItem icon={<MapPin size={17} />} label="Overland Park, KS" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/ramkishore-namala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white transition-colors text-sm"
              >
                <GitHubIcon size={15} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ramkishore-namala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white transition-colors text-sm"
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href?: string
}) {
  const base = 'flex items-center gap-3 text-slate-400 hover:text-white transition-colors group'
  const content = (
    <>
      <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{icon}</span>
      <span className="text-sm">{label}</span>
    </>
  )

  return href ? (
    <a href={href} className={base}>
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  )
}
