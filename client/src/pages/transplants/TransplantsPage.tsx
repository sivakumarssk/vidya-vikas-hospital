import { Link } from 'react-router-dom'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { transplants } from '../../data/transplants'

export function TransplantsPage() {
  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
            Transplant programmes
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl">Transplant care</h1>
          <p className="mt-4 max-w-3xl text-lg text-brand-muted">
            Vaidya Vikash Hospital offers coordinated transplant pathways for organ failure and selected haematological
            conditions. The programmes below reflect our clinical scope; eligibility is always decided after full
            multidisciplinary assessment.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {transplants.map((item) => (
              <Link
                key={item.slug}
                to={`/transplants/${item.slug}`}
                className="group rounded-2xl border border-brand-border/40 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/30 hover:shadow-md"
              >
                <h2 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-green">{item.name}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-brand-muted">{item.shortDescription}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-green">
                  View programme
                  <span className="ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </PageScaffold>
  )
}
