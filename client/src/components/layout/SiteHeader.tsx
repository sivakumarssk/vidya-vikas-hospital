import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { Container } from '../ui/Container'
import { siteAssets } from '../../constants/site-assets'
import { navItems, navSpecialityDropdownSlugs } from '../../data/home'
import { locations } from '../../data/locations'
import { specialities } from '../../data/specialities'
import { doctors } from "../../data/doctors"

function SearchIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
  )
}

const navDropdownSpecialities = navSpecialityDropdownSlugs
  .map((slug) => specialities.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s))

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [specialitiesOpen, setSpecialitiesOpen] = useState(false)
  const [searchQuery, setSearchQuery] =
  useState("")


  const location = useLocation()
  const closeLocationsTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeSpecialitiesTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    return () => {
      if (closeLocationsTimer.current) clearTimeout(closeLocationsTimer.current)
      if (closeSpecialitiesTimer.current) clearTimeout(closeSpecialitiesTimer.current)
    }
  }, [])

  const openLocationsMenu = () => {
    if (closeLocationsTimer.current) {
      clearTimeout(closeLocationsTimer.current)
      closeLocationsTimer.current = null
    }
    if (closeSpecialitiesTimer.current) {
      clearTimeout(closeSpecialitiesTimer.current)
      closeSpecialitiesTimer.current = null
    }
    setSpecialitiesOpen(false)
    setLocationsOpen(true)
  }

  const scheduleCloseLocationsMenu = () => {
    if (closeLocationsTimer.current) clearTimeout(closeLocationsTimer.current)
    closeLocationsTimer.current = setTimeout(() => {
      setLocationsOpen(false)
      closeLocationsTimer.current = null
    }, 160)
  }

  const openSpecialitiesMenu = () => {
    if (closeSpecialitiesTimer.current) {
      clearTimeout(closeSpecialitiesTimer.current)
      closeSpecialitiesTimer.current = null
    }
    if (closeLocationsTimer.current) {
      clearTimeout(closeLocationsTimer.current)
      closeLocationsTimer.current = null
    }
    setLocationsOpen(false)
    setSpecialitiesOpen(true)
  }

  const scheduleCloseSpecialitiesMenu = () => {
    if (closeSpecialitiesTimer.current) clearTimeout(closeSpecialitiesTimer.current)
    closeSpecialitiesTimer.current = setTimeout(() => {
      setSpecialitiesOpen(false)
      closeSpecialitiesTimer.current = null
    }, 160)
  }

 const filteredDoctors = doctors.filter((doctor) =>
  doctor.name
    .toLowerCase()
    .includes(searchQuery.toLowerCase()) ||

  doctor.speciality
    .toLowerCase()
    .includes(searchQuery.toLowerCase())
)

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-black/[0.06] bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <Container
          as="div"
          className="grid min-h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-3 py-2.5 sm:min-h-[5rem] sm:gap-4"
        >
          <Link
            to="/"
            className="justify-self-start rounded-lg outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green"
          >
            <img
              src={siteAssets.logo}
              alt="Vaidya Vikash Hospitals"
              className="h-11 w-auto sm:h-14"
              width={190}
              height={136}
            />
          </Link>

          <nav className="hidden justify-self-center lg:flex" aria-label="Main">
            <ul className="flex flex-wrap items-center justify-center gap-0.5 sm:gap-1">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  {item.label === 'Specialities' ? (
                    <div onMouseEnter={openSpecialitiesMenu} onMouseLeave={scheduleCloseSpecialitiesMenu}>
                      <button
                        type="button"
                        onClick={() => {
                          if (specialitiesOpen) {
                            scheduleCloseSpecialitiesMenu()
                          } else {
                            openSpecialitiesMenu()
                          }
                        }}
                        className={`relative flex items-center gap-1 rounded-xl px-2.5 py-2 text-[13px] font-semibold tracking-tight transition-colors xl:px-3 xl:text-sm ${
                          location.pathname.startsWith('/specialities')
                            ? 'text-brand-navy'
                            : 'text-brand-slate hover:bg-brand-surface/90 hover:text-brand-navy'
                        }`}
                      >
                        Specialities
                        <span className={`transition ${specialitiesOpen ? 'rotate-180' : ''}`} aria-hidden>
                          ▾
                        </span>
                      </button>

                      {specialitiesOpen ? (
                        <div
                          className="absolute left-0 top-full z-30 mt-2 max-h-[min(70vh,28rem)] min-w-56 overflow-y-auto rounded-xl border border-brand-border/50 bg-white p-2 shadow-xl"
                          onMouseEnter={openSpecialitiesMenu}
                          onMouseLeave={scheduleCloseSpecialitiesMenu}
                        >
                          <Link
                            to="/specialities"
                            onClick={() => setSpecialitiesOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-surface"
                          >
                            All Specialities
                          </Link>
                          <div className="my-1 h-px bg-brand-border/40" />
                          {navDropdownSpecialities.map((entry) => (
                            <Link
                              key={entry.slug}
                              to={`/specialities/${entry.slug}`}
                              onClick={() => setSpecialitiesOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-brand-slate hover:bg-brand-surface hover:text-brand-navy"
                            >
                              {entry.name}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : item.label === 'Locations' ? (
                    <div onMouseEnter={openLocationsMenu} onMouseLeave={scheduleCloseLocationsMenu}>
                      <button
                        type="button"
                        onClick={() => {
                          if (locationsOpen) {
                            scheduleCloseLocationsMenu()
                          } else {
                            openLocationsMenu()
                          }
                        }}
                        className={`relative flex items-center gap-1 rounded-xl px-2.5 py-2 text-[13px] font-semibold tracking-tight transition-colors xl:px-3 xl:text-sm ${
                          location.pathname.startsWith('/locations')
                            ? 'text-brand-navy'
                            : 'text-brand-slate hover:bg-brand-surface/90 hover:text-brand-navy'
                        }`}
                      >
                        Locations
                        <span className={`transition ${locationsOpen ? 'rotate-180' : ''}`} aria-hidden>
                          ▾
                        </span>
                      </button>

                      {locationsOpen ? (
                        <div
                          className="absolute left-0 top-full z-30 mt-2 min-w-56 rounded-xl border border-brand-border/50 bg-white p-2 shadow-xl"
                          onMouseEnter={openLocationsMenu}
                          onMouseLeave={scheduleCloseLocationsMenu}
                        >
                          <Link
                            to="/locations"
                            onClick={() => setLocationsOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-surface"
                          >
                            All Locations
                          </Link>
                          <div className="my-1 h-px bg-brand-border/40" />
                          {locations.map((entry) => (
                            <Link
                              key={entry.slug}
                              to={`/locations/${entry.slug}`}
                              onClick={() => setLocationsOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-brand-slate hover:bg-brand-surface hover:text-brand-navy"
                            >
                              {entry.name}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `relative block rounded-xl px-2.5 py-2 text-[13px] font-semibold tracking-tight transition-colors xl:px-3 xl:text-sm ${
                          isActive ? 'text-brand-navy' : 'text-brand-slate hover:bg-brand-surface/90 hover:text-brand-navy'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <div className="hidden items-center gap-3 lg:flex xl:gap-4">
<label className="relative flex h-11 max-w-[200px] min-w-[160px] cursor-text items-center gap-2 rounded-full border border-gray-300 bg-brand-icon-bg pl-3.5 pr-2.5 transition focus-within:bg-white">                <SearchIcon className="size-4 shrink-0 text-brand-muted" />
              <input
  type="search"
  value={searchQuery}
  onChange={(e) =>
    setSearchQuery(e.target.value)
  }
  placeholder="Search specializations, doctors..."
                  className="min-w-0 flex-1 bg-transparent text-sm text-brand-navy placeholder:text-brand-muted/75 focus:outline-none"
                />
                
     {
  searchQuery &&
  filteredDoctors.length > 0 && (

    <div className="absolute left-0 top-14 z-50 max-h-[420px] w-[360px] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl">

      {
        filteredDoctors.map((doctor) => (

          <Link
            key={doctor.id}
            to={`/doctors/${doctor.id}`}
            onClick={() =>
              setSearchQuery("")
            }
            className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 transition hover:bg-gray-50"
          >

            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-14 w-14 rounded-full object-cover"
            />

            <div className="flex-1">

              <h3 className="text-sm font-semibold text-brand-navy">
                {doctor.name}
              </h3>

              <p className="text-xs text-brand-muted">
                {doctor.speciality}
              </p>

              <p className="mt-1 text-[11px] text-brand-green">
                {doctor.designation}
              </p>

            </div>

          </Link>
        ))
      }

    </div>
  )
}

              </label>
              <Link
                to="/book-appointment"
                className="inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-brand-navy px-4 text-sm font-semibold text-white shadow-md shadow-brand-navy/20 transition hover:bg-brand-navy/92 hover:shadow-lg xl:px-5"
              >
                Book Appointment
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-brand-border/80 bg-white text-brand-navy shadow-sm transition hover:border-brand-green/40 hover:bg-brand-surface/50 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              {open ? (
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </Container>
      </header>

      {open
        ? createPortal(
            <>
              <button
                type="button"
                className="fixed inset-0 z-[210] bg-brand-navy/40 backdrop-blur-sm lg:hidden"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              />
              <div
                id="mobile-drawer"
                className="fixed inset-y-0 right-0 z-[220] flex w-[min(100%,20rem)] flex-col border-l border-black/10 bg-white shadow-2xl lg:hidden"
              >
                <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
                  <span className="font-heading text-lg font-bold text-brand-navy">Menu</span>
                  <button
                    type="button"
                    className="rounded-lg p-2 text-brand-muted hover:bg-brand-surface hover:text-brand-navy"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                  >
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
                  {navItems
                    .filter((item) => item.label !== 'Locations')
                    .map((item) => (
                    <NavLink
                      key={`${item.label}-drawer`}
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                          isActive ? 'bg-brand-surface text-brand-navy' : 'text-brand-slate hover:bg-brand-surface/70'
                        }`
                      }
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                    ))}

                  <div className="mt-3 rounded-xl bg-brand-surface/70 p-3">
                    <Link
                      to="/locations"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-white"
                      onClick={() => setOpen(false)}
                    >
                      Locations
                    </Link>
                    <div className="mt-1 space-y-1">
                      {locations.map((entry) => (
                        <Link
                          key={`${entry.slug}-drawer`}
                          to={`/locations/${entry.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm text-brand-slate hover:bg-white hover:text-brand-navy"
                          onClick={() => setOpen(false)}
                        >
                          {entry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>
                <div className="border-t border-black/5 p-4">
                  <label className="flex items-center gap-2 rounded-full bg-brand-icon-bg px-4 py-3">
                    <SearchIcon className="size-4 shrink-0 text-brand-muted" />
                    <input
                      type="search"
                      placeholder="Search..."
                      className="min-w-0 flex-1 bg-transparent text-sm focus:outline-none"
                    />
                  </label>
                  <Link
                    to="/book-appointment"
                    className="mt-3 flex h-12 w-full items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white"
                    onClick={() => setOpen(false)}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </>,
            document.body,
          )
        : null}
    </>
  )
}
