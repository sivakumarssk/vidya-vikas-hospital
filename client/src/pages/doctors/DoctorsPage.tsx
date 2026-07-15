import {
  useEffect,
  useMemo,
  useState
} from 'react'
import { Link } from 'react-router-dom'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { doctors } from '../../data/doctors'

const filterTabs = ['All Specialists', 'Cardiology', 'Neurology', 'Paediatrics', 'Orthopaedics'] as const

export function DoctorsPage() {
  const [activeTab, setActiveTab] = useState<(typeof filterTabs)[number]>('All Specialists')
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] =
  useState(1)

  useEffect(() => {

  setCurrentPage(1)

}, [activeTab, query])

  const filteredDoctors = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return [...doctors]
  .sort((a, b) =>
    a.speciality.localeCompare(
      b.speciality
    )
  )
  .filter((doctor) => {
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

  const doctorsPerPage = 6

const totalPages =
  Math.ceil(
    filteredDoctors.length /
    doctorsPerPage
  )

const startIndex =
  (currentPage - 1) *
  doctorsPerPage

const paginatedDoctors =
  filteredDoctors.slice(
    startIndex,
    startIndex + doctorsPerPage
  )

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
            {paginatedDoctors.map((doctor) => (
              <article
                key={doctor.id}
                className="overflow-hidden rounded-2xl border border-brand-border/25 bg-white shadow-[0_4px_24px_rgba(3,16,44,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(3,16,44,0.09)]"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover object-top" loading="lazy" />
                  <span className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-brand-navy backdrop-blur">
                    {doctor.speciality}
                  </span>
                </div>

                <div className="p-8">
                  <h2 className="font-heading text-[2rem] font-bold leading-8 text-brand-navy">{doctor.name}</h2>
                  <p className="mt-1 text-sm text-brand-muted">{doctor.qualification}</p>

                  <div className="mt-4 space-y-2">

  <p className="text-sm font-semibold text-brand-green">
    {doctor.designation}
  </p>

  <p className="line-clamp-3 text-sm leading-6 text-brand-muted">
    {doctor.specialCareServices}
  </p>

</div>

                <div className="mt-7 flex gap-3">

  <Link
    to={`/doctors/${doctor.id}`}
    className="inline-flex h-12 flex-1 items-center justify-center rounded-xl border border-brand-border/40 text-base font-semibold text-brand-navy transition hover:border-brand-green/40 hover:text-brand-green"
  >
    View Profile
  </Link>

  <Link
    to="/book-appointment"
    className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-brand-navy text-base font-semibold text-white transition hover:bg-brand-green"
  >
    Book Now
  </Link>

</div>
                </div>
              </article>
            ))}
          </div>

    <div className="mt-12 flex justify-center">

  <div className="inline-flex items-center gap-2 rounded-xl bg-[#eef1f6] p-2">

    {
      Array.from(
        { length: totalPages },
        (_, index) => (

          <button
            key={index}
            type="button"
            onClick={() =>
              setCurrentPage(
                index + 1
              )
            }
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
              currentPage ===
              index + 1
                ? "bg-white text-brand-navy shadow-sm"
                : "text-brand-muted hover:bg-white/70"
            }`}
          >
            {index + 1}
          </button>
        )
      )
    }

  </div>

</div>
        </Container>
      </section>
    </PageScaffold>
  )
}
