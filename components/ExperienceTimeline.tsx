import { GraduationCap } from 'lucide-react'
import SectionHeader from './SectionHeader'

const EXPERIENCE = [
  {
    title: 'Machine Learning Engineer – Applied AI',
    company: 'OpenText',
    location: 'Hyderabad, India',
    period: 'Jul 2022 – Jun 2024',
    bullets: [
      'Enabled non-technical clients to query production data through natural language by integrating Microsoft Fabric with Azure AI Foundry — translating NLP prompts into schema-aware SQL queries.',
      'Built an end-to-end RAG system powering an automation workflow agent, integrating LangChain, LangGraph, and LlamaIndex with vector databases for context-grounded responses across enterprise document repositories.',
      'Improved document processing accuracy by 30% using Python, Scikit-learn, PyTorch, and Transformer-based models for classification and entity extraction.',
      'Exposed ML models through production REST APIs integrated into enterprise xECM platforms, enabling scalable backend inference for global clients.',
      'Implemented end-to-end MLOps workflows: CI/CD automation, model monitoring, and version control with Docker and Kubernetes on AWS and Azure.',
    ],
  },
  {
    title: 'R&D Engineer Intern',
    company: 'OpenText',
    location: 'Hyderabad, India',
    period: 'Jan 2022 – Jun 2022',
    bullets: [
      'Prototyped and tested innovative AI/ML features in the enterprise content management domain, evaluating emerging technologies to inform product roadmap decisions.',
      'Automated testing workflows for proof-of-concept modules, improving prototype reliability and shortening validation cycles.',
      'Collaborated with senior engineers to refine prototypes into scalable, maintainable designs ready for production integration.',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'NIELIT (National Institute of Electronics & Information Technology)',
    location: 'India',
    period: 'May 2021 – Nov 2021',
    bullets: [
      'Built ML models for classification, clustering, and predictive analytics using TensorFlow, PyTorch, and Scikit-learn on real-world datasets.',
      'Performed data preprocessing, feature engineering, and exploratory data analysis; implemented deep learning architectures end-to-end.',
    ],
  },
]

const EDUCATION = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Central Missouri',
    location: 'USA',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Koneru Lakshmaiah University',
    location: 'Hyderabad, India',
  },
]

const CERTIFICATIONS = [
  'Cisco PCAP: Programming Essentials in Python',
  'Aviatrix Certified Engineer – Multi-Cloud Networking Associate',
  'Automation Anywhere – Advanced RPA Professional',
  'Fundamentals of Data Analytics – NASSCOM',
]

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-950/60">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Career" title="Experience & Education" />

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-slate-700 to-transparent" />

          <div className="space-y-14">
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="relative pl-14">
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full border-2 border-cyan-400 bg-[#050508] -translate-x-1/2 ring-4 ring-[#050508]" />

                <div className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm mt-0.5">
                        {item.company}
                        <span className="text-slate-500 font-normal"> · {item.location}</span>
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-800 px-2.5 py-1 rounded-md whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-slate-400 leading-relaxed">
                        <span className="text-cyan-500/70 mt-1.5 shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="flex items-center gap-2 text-base font-semibold text-slate-300 mb-6">
            <GraduationCap size={18} className="text-violet-400" />
            Education
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {EDUCATION.map((ed, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 space-y-1 hover:border-violet-500/30 transition-colors"
              >
                <p className="font-semibold text-white text-sm">{ed.degree}</p>
                <p className="text-violet-400 text-sm">{ed.school}</p>
                <p className="text-slate-500 text-xs">{ed.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-base font-semibold text-slate-300 mb-4">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((cert, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 border border-slate-700 text-slate-400"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
