import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { SearchFilter } from '../../components/ui/SearchFilter'
import { surgeries } from '../../data/surgeries'

export function SurgeriesPage() {
  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
            Procedures &amp; Surgeries
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl">Surgeries &amp; Procedures</h1>
          <p className="mt-4 max-w-3xl text-lg text-brand-muted">
            Browse common and advanced procedures offered at Vaidya Vikash Hospital. Content is organised for patient education;
            your consultant will confirm what is appropriate for your condition.
          </p>

          <SearchFilter items={surgeries} basePath="/surgeries" linkLabel="View Details" />
        </Container>
      </section>
    </PageScaffold>
  )
}
