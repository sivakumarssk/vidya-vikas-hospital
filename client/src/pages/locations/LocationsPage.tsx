import { Link } from 'react-router-dom'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { locations } from '../../data/locations'

export function LocationsPage() {
  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
            Locations
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl">Our Hospital Locations</h1>
          <p className="mt-4 max-w-3xl text-lg text-brand-muted">
            Find the nearest Vaidya Vikash Hospital centre. Each location has specialist doctors, diagnostics, and
            coordinated care pathways for consultations and emergencies.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((location) => (
              <article key={location.slug} className="overflow-hidden rounded-2xl border border-brand-border/35 bg-white shadow-sm">
                <img src={location.heroImage} alt={location.name} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h2 className="font-heading text-2xl font-bold text-brand-navy">{location.name}</h2>
                  <p className="mt-2 text-sm text-brand-muted">{location.address}</p>
                  <p className="mt-2 text-sm font-medium text-brand-navy">{location.timings}</p>
                  <Link
                    to={`/locations/${location.slug}`}
                    className="mt-4 inline-flex items-center rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-navy/90"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageScaffold>
  )
}
