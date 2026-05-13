import { useState } from 'react'
import { Container } from '../ui/Container'
import { excellenceCards, excellenceTabs } from '../../data/home'
import { technologies } from '../../data/technologies'
import { surgeries } from '../../data/surgeries'
import { transplants } from '../../data/transplants'
import { ExcellenceCard } from './ExcellenceCard'
import { Link } from 'react-router-dom'

export function CentersOfExcellenceSection() {
  const [tab, setTab] = useState<(typeof excellenceTabs)[number]['id']>('specialities')

  const moreHref =
    tab === 'technologies' ? '/technologies' : tab === 'surgeries' ? '/surgeries' : tab === 'transplants' ? '/transplants' : '/specialities'
  const moreLabel =
    tab === 'technologies'
      ? 'All Technologies'
      : tab === 'surgeries'
        ? 'All surgeries & procedures'
        : tab === 'transplants'
          ? 'Transplant programmes'
          : 'More Specialities'

  return (
    <section
      id="specialities"
      className="relative overflow-x-clip bg-gradient-to-b from-brand-surface to-[#e8ebf2] py-14 sm:py-16 lg:py-24"
      aria-labelledby="coe-heading"
    >
      <Container className="relative z-10">
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="max-w-xl shrink-0 space-y-3">
              <p className="inline-flex w-fit rounded-full border border-brand-green/25 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-green sm:text-sm">
                Our capabilities
              </p>
              <h2
                id="coe-heading"
                className="font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl"
              >
                Centers of Excellence
              </h2>
              <p className="text-sm text-brand-muted sm:text-base">
                Most common and high-demand specialties for quick access.
              </p>
            </div>
            <div
              role="tablist"
              aria-label="Centers categories"
              className="-mx-1 flex min-w-0 flex-1 gap-1 overflow-x-auto border-b border-brand-border/70 pb-0 sm:mx-0 sm:flex-wrap sm:gap-0 lg:mx-0 lg:flex-wrap lg:justify-end"
            >
              {excellenceTabs.map((t) => {
                const active = tab === t.id
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setTab(t.id)}
                    className={`relative shrink-0 rounded-t-lg px-4 py-3 text-sm font-semibold transition sm:text-base ${
                      active
                        ? 'text-brand-navy'
                        : 'text-brand-muted hover:bg-white/40 hover:text-brand-navy'
                    }`}
                  >
                    {t.label}
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-1 rounded-full transition sm:left-3 sm:right-3 ${
                        active ? 'bg-brand-green' : 'bg-transparent'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <div role="tabpanel" className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {tab === 'technologies'
              ? technologies.slice(0, 6).map((item) => (
                  <Link
                    key={item.slug}
                    to={`/technologies/${item.slug}`}
                    className="group flex h-full min-h-0 flex-col rounded-[1.75rem] border border-black/[0.04] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-green/10 hover:shadow-xl sm:rounded-[2rem] sm:p-8"
                  >
                    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-icon-bg to-brand-surface ring-1 ring-black/[0.03] sm:mb-6 sm:size-16">
                      <svg className="size-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-green sm:text-xl">{item.name}</h3>
                    <p className="mt-2 line-clamp-3 overflow-hidden text-sm leading-relaxed text-brand-muted sm:text-[0.9375rem]">
                      {item.shortDescription}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-green transition group-hover:gap-2">
                      View technology
                      <span className="size-3.5">→</span>
                    </span>
                  </Link>
                ))
              : tab === 'surgeries'
                ? surgeries.slice(0, 6).map((item) => (
                    <Link
                      key={item.slug}
                      to={`/surgeries/${item.slug}`}
                      className="group flex h-full min-h-0 flex-col rounded-[1.75rem] border border-black/[0.04] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-green/10 hover:shadow-xl sm:rounded-[2rem] sm:p-8"
                    >
                      <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-icon-bg to-brand-surface ring-1 ring-black/[0.03] sm:mb-6 sm:size-16">
                        <svg className="size-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                          <path d="M14.5 4.5L19 9l-8 8-4 1 1-4 8-8z" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 20h9" strokeLinecap="round" />
                        </svg>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-green sm:text-xl">{item.name}</h3>
                      <p className="mt-2 line-clamp-3 overflow-hidden text-sm leading-relaxed text-brand-muted sm:text-[0.9375rem]">
                        {item.shortDescription}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-green transition group-hover:gap-2">
                        View procedure
                        <span className="size-3.5">→</span>
                      </span>
                    </Link>
                  ))
                : tab === 'transplants'
                  ? transplants.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/transplants/${item.slug}`}
                        className="group flex h-full min-h-0 flex-col rounded-[1.75rem] border border-black/[0.04] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-green/10 hover:shadow-xl sm:rounded-[2rem] sm:p-8"
                      >
                        <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-icon-bg to-brand-surface ring-1 ring-black/[0.03] sm:mb-6 sm:size-16">
                          <svg className="size-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                            <path d="M12 20s-7-4.5-9-9a5.2 5.2 0 019-5 5.2 5.2 0 019 5c-2 4.5-9 9-9 9z" />
                          </svg>
                        </div>
                        <h3 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-green sm:text-xl">{item.name}</h3>
                        <p className="mt-2 line-clamp-3 overflow-hidden text-sm leading-relaxed text-brand-muted sm:text-[0.9375rem]">
                          {item.shortDescription}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-green transition group-hover:gap-2">
                          View programme
                          <span className="size-3.5">→</span>
                        </span>
                      </Link>
                    ))
                  : excellenceCards.map((card) => <ExcellenceCard key={card.title} card={card} />)}
          </div>

          <div className="flex justify-center pt-2">
            <Link
              to={moreHref}
              className="inline-flex items-center rounded-full border border-brand-green/25 bg-white/90 px-5 py-2.5 text-sm font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
            >
              {moreLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
