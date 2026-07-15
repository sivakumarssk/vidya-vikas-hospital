import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { SearchFilter } from '../../components/ui/SearchFilter'
import { technologies } from '../../data/technologies'

export function TechnologiesPage() {
  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
            Technologies
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl">Our Technologies</h1>
          <p className="mt-4 max-w-3xl text-lg text-brand-muted">
            Vaidya Vikash Hospital invests in advanced imaging, interventional, surgical, and critical-care platforms across
            Sambalpur, Kakinada, Berhampur, and Jharsuguda so patients receive precise, timely, and evidence-based care.
          </p>

          <SearchFilter items={technologies} basePath="/technologies" linkLabel="Learn More" />
        </Container>
      </section>
    </PageScaffold>
  )
}
