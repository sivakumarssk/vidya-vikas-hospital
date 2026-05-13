import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { doctors } from '../../data/doctors'

const filterTabs = ['All Specialists', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology'] as const

export function DoctorsPage() {
  const [activeTab, setActiveTab] = useState<(typeof filterTabs)[number]>('All Specialists')
  const [query, setQuery] = useState('')

  const filteredDoctors = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return doctors.filter((doctor) => {
      const specialityMatch = activeTab === 'All Specialists' || doctor.speciality === activeTab
      if (!specialityMatch) return false
      if (!normalizedQuery) return true

      return (
        doctor.name.toLowerCase().includes(normalizedQuery) ||
        doctor.speciality.toLowerCase().includes(normalizedQuery) ||
        doctor.qualification.toLowerCase().includes(normalizedQuery)
      )
    })
  }, [activeTab, query])

  return (
    <PageScaffold>
      <section className="bg-brand-surface pt-14 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <Container>
          <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
            Expert Medical Team
          </p>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Meet Our <span className="text-brand-green">Specialists</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-brand-muted sm:text-lg">
            Our world-class physicians combine years of clinical expertise with a compassionate approach to healing,
            ensuring you receive the highest standard of care in a sanctuary of health.
          </p>

        </Container>
      </section>

      <section className="border-t border-brand-border/40 bg-white pt-8 pb-16 sm:pt-10">
        <Container>
          <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-3">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                    activeTab === tab ? 'bg-brand-navy text-white' : 'bg-brand-surface text-brand-muted hover:bg-brand-border/60'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <label className="relative block w-full xl:max-w-[320px]">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted">
                <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
              </span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name or specialty..."
                className="h-12 w-full rounded-xl border border-brand-border/50 bg-white pl-12 pr-4 text-sm text-brand-navy placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              />
            </label>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <article
                key={doctor.id}
                className="overflow-hidden rounded-2xl border border-brand-border/25 bg-white shadow-[0_4px_24px_rgba(3,16,44,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(3,16,44,0.09)]"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-brand-navy backdrop-blur">
                    {doctor.speciality}
                  </span>
                </div>

                <div className="p-8">
                  <h2 className="font-heading text-[2rem] font-bold leading-8 text-brand-navy">{doctor.name}</h2>
                  <p className="mt-1 text-sm text-brand-muted">{doctor.qualification}</p>

                  <div className="mt-4 flex items-center gap-5 text-xs font-semibold text-[#181c1f]">
                    <p className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-brand-green" />
                      {doctor.experience}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="text-[#f59e0b]">★</span>
                      {doctor.rating.toFixed(1)} ({doctor.reviews} Reviews)
                    </p>
                  </div>

                  <Link
                    to="/book-appointment"
                    className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-brand-border/40 text-base font-semibold text-brand-navy transition hover:border-brand-green/40 hover:text-brand-green"
                  >
                    Book Now
                    <span aria-hidden>›</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-xl bg-[#eef1f6] px-2 py-1 text-sm text-brand-muted">
              <button type="button" className="rounded-md bg-white px-3 py-1 font-semibold text-brand-navy shadow-sm">
                1
              </button>
              <button type="button" className="rounded-md px-3 py-1 hover:bg-white/70">
                2
              </button>
              <button type="button" className="rounded-md px-3 py-1 hover:bg-white/70">
                3
              </button>
              <span className="px-1">...</span>
              <button type="button" className="rounded-md px-3 py-1 hover:bg-white/70">
                10
              </button>
            </div>
          </div>
        </Container>
      </section>
    </PageScaffold>
  )
}
