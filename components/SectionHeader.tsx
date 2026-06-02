export default function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-center mb-12 space-y-3">
      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="text-slate-400 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  )
}
