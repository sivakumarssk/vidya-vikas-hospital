import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { SearchFilter } from '../../components/ui/SearchFilter'
import { transplants } from '../../data/transplants'

export function TransplantsPage() {
  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
            Transplant Programmes
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl">Transplant Care</h1>
          <p className="mt-4 max-w-3xl text-lg text-brand-muted">
            Vaidya Vikash Hospital offers coordinated transplant pathways for organ failure and selected haematological
            conditions. The programmes below reflect our clinical scope; eligibility is always decided after full
            multidisciplinary assessment.
          </p>

          <SearchFilter items={transplants} basePath="/transplants" linkLabel="View Programme" />
        </Container>
      </section>
    </PageScaffold>
  )
}
