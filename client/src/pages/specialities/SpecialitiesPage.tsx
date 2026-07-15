import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { SearchFilter } from '../../components/ui/SearchFilter'
import { specialities } from '../../data/specialities'

export function SpecialitiesPage() {
  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
            Specialities
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl">
            Centers of Specialty Care
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-brand-muted">
            Explore all departments at Vaidya Vikash Hospital. Each unit is staffed by experienced specialists and
            supported by advanced diagnostics and emergency backup.
          </p>
          <p className="mt-2 text-sm text-brand-muted">
            Every department page includes overview, diseases and conditions, treatments and surgeries, technology and
            facilities, and dedicated FAQs.
          </p>

          <SearchFilter items={specialities} basePath="/specialities" linkLabel="View Department" />
        </Container>
      </section>
    </PageScaffold>
  )
}
