import { Container } from '../ui/Container'
import { quickActions } from '../../data/home'
import { Link } from 'react-router-dom'

function IconCalendar({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 11h18" />
    </svg>
  )
}

function IconStethoscope({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M6 4v6a4 4 0 008 0V4M6 4H4m2 0h2m8 0h2m-2 0v6" />
      <path d="M10 18h4M12 16v4" />
    </svg>
  )
}

function IconMap({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M9 20l-5 2V6l5-2 6 2 5-2v16l-5 2-6-2z" />
      <path d="M9 4v16M15 6v16" />
    </svg>
  )
}

function IconUser({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" />
    </svg>
  )
}

function IconFile({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V7l-5-5z" />
      <path d="M14 2v5h5M10 12h4M10 16h4" />
    </svg>
  )
}

function IconChat({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M8 10h.01M12 10h.01M16 10h.01M6 18l-2 2V6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6z" />
    </svg>
  )
}

const icons = [IconCalendar, IconStethoscope, IconMap, IconUser, IconFile, IconChat] as const

export function QuickActionsSection() {
  return (
    <section
      className="relative z-10 mt-6 pb-10 sm:mt-8 sm:pb-14 lg:mt-10 lg:pb-16"
      aria-label="Quick actions"
    >
      <Container>
        <div className="rounded-xl border border-black/[0.07] bg-white/95 p-2 shadow-[0_12px_40px_-20px_rgba(0,6,102,0.2)] backdrop-blur-md sm:rounded-2xl sm:p-3 md:rounded-3xl md:p-4 lg:p-5">
          {/* Mobile & small tablet: full-width rows (icon + label) */}
          <ul className="flex flex-col gap-1.5 min-[480px]:hidden">
            {quickActions.map((action, i) => {
              const Icon = icons[i] ?? IconCalendar
              return (
                <li key={action.title}>
                  <Link
                    to={action.href}
                    className="group flex min-h-[3.25rem] items-center gap-3 rounded-xl border border-transparent bg-brand-surface/50 px-3 py-2.5 transition active:bg-brand-surface hover:border-brand-green/20 hover:bg-white"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-green shadow-sm ring-1 ring-black/[0.04] transition group-hover:bg-brand-green group-hover:text-white">
                      <Icon className="size-[1.35rem]" />
                    </span>
                    <span className="min-w-0 flex-1 text-left font-heading text-sm font-semibold leading-snug text-brand-navy">
                      {action.title}
                    </span>
                    <span className="shrink-0 text-brand-muted/50 transition group-hover:text-brand-green" aria-hidden>
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* sm+: card grid */}
          <div className="hidden min-[480px]:grid min-[480px]:grid-cols-2 min-[480px]:gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
            {quickActions.map((action, i) => {
              const Icon = icons[i] ?? IconCalendar
              return (
                <Link
                  key={action.title}
                  to={action.href}
                  className="group flex min-h-[7.5rem] flex-col gap-3 rounded-2xl border border-transparent bg-brand-surface/45 p-4 transition hover:-translate-y-0.5 hover:border-brand-green/15 hover:bg-white hover:shadow-md sm:min-h-0 sm:rounded-2xl sm:p-5"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-brand-green shadow-sm ring-1 ring-black/[0.04] transition group-hover:bg-brand-green group-hover:text-white group-hover:shadow-md">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-heading text-sm font-semibold leading-snug text-brand-navy sm:text-[0.9375rem]">
                    {action.title}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
