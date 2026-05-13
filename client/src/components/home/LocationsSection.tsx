import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { locations } from '../../data/locations'

export function LocationsSection() {
  return (
    <section id="locations" className="bg-brand-surface/50 py-14 sm:py-16 lg:py-24" aria-labelledby="locations-heading">
      <Container>
        <h2
          id="locations-heading"
          className="mx-auto max-w-3xl text-center font-heading text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl"
        >
          Visit our Specialized Centers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-muted sm:text-base">
          Same clinical standards and digital records across every campus—pick the location closest to you.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"
            >
              <img
                src={loc.heroImage}
                alt={loc.name}
                className="aspect-[286/256] w-full object-cover transition duration-500 group-hover:scale-105"
                width={286}
                height={256}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-90 transition group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-1.5 text-sm font-bold text-brand-navy shadow-md backdrop-blur-sm">
                {loc.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
