import { Link, Navigate, useParams } from 'react-router-dom'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { locations } from '../../data/locations'
import { specialities } from '../../data/specialities'

export function LocationDetailPage() {
  const { slug } = useParams()
  const location = locations.find((item) => item.slug === slug)

  if (!location) return <Navigate to="/locations" replace />

  const relatedSpecialities = location.specialitySlugs
    .map((specialitySlug) => specialities.find((speciality) => speciality.slug === specialitySlug))
    .filter((item): item is (typeof specialities)[number] => Boolean(item))
    .slice(0, 4)

  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <Link to="/locations" className="text-sm font-semibold text-brand-green hover:underline">
            ← Back to all locations
          </Link>
          <div className="mt-5 overflow-hidden rounded-3xl border border-brand-border/30 bg-white shadow-sm">
            <img src={location.heroImage} alt={location.name} className="h-64 w-full object-cover sm:h-80" loading="lazy" />
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <h1 className="font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl">{location.name}</h1>
                <div className="mt-5 space-y-3 text-brand-muted">
                  {location.about.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand-border/35 bg-brand-surface p-6">
                <h2 className="font-heading text-2xl font-bold text-brand-navy">Location Details</h2>
                <p className="mt-4 text-sm text-brand-muted">{location.address}</p>
                <p className="mt-3 text-sm text-brand-muted">
                  <span className="font-semibold text-brand-navy">Phone:</span> {location.phone}
                </p>
                <p className="mt-2 text-sm text-brand-muted">
                  <span className="font-semibold text-brand-navy">Email:</span> {location.email}
                </p>
                <p className="mt-2 text-sm text-brand-muted">
                  <span className="font-semibold text-brand-navy">OPD:</span> {location.timings}
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-green">{location.emergency}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">Core Facilities</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {location.highlights.map((point) => (
              <article key={point} className="rounded-2xl border border-brand-border/35 bg-white p-5 text-sm text-brand-muted">
                {point}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">Specialities at {location.name}</h2>
              <p className="mt-2 text-brand-muted">Explore a few major departments available at this location.</p>
            </div>
            <Link to="/specialities" className="text-sm font-semibold text-brand-green hover:underline">
              More →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedSpecialities.map((speciality) => (
              <Link
                key={speciality.slug}
                to={`/specialities/${speciality.slug}`}
                className="rounded-2xl border border-brand-border/35 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-green/35 hover:shadow-sm"
              >
                <h3 className="font-heading text-xl font-bold text-brand-navy">{speciality.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-brand-muted">{speciality.shortDescription}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </PageScaffold>
  )
}
