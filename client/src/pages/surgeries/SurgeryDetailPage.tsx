import { Link, Navigate, useParams } from 'react-router-dom'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { getSurgeryBySlug } from '../../data/surgeries'

export function SurgeryDetailPage() {
  const { slug } = useParams()
  const surgery = getSurgeryBySlug(slug)

  if (!surgery) return <Navigate to="/surgeries" replace />

  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <Link to="/surgeries" className="text-sm font-semibold text-brand-green hover:underline">
            ← Back to all surgeries
          </Link>

          <div className="mt-5 rounded-3xl bg-white p-8 shadow-lg sm:p-10">
            <p className="inline-flex rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand-green">
              Surgery / procedure
            </p>
            <h1 className="mt-4 font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl">{surgery.name}</h1>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-brand-muted">{surgery.shortDescription}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-brand-surface p-5">
                <p className="text-xs uppercase tracking-[0.08em] text-brand-muted">Locations</p>
                <p className="mt-1 font-heading text-xl font-bold text-brand-navy">Sambalpur &amp; network</p>
              </div>
              <div className="rounded-2xl bg-brand-surface p-5">
                <p className="text-xs uppercase tracking-[0.08em] text-brand-muted">Pathway</p>
                <p className="mt-1 font-heading text-xl font-bold text-brand-navy">Assess → plan → operate</p>
              </div>
              <div className="rounded-2xl bg-brand-surface p-5">
                <p className="text-xs uppercase tracking-[0.08em] text-brand-muted">Next step</p>
                <Link to="/book-appointment" className="mt-1 inline-block font-heading text-xl font-bold text-brand-green">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">Overview</h2>
          <div className="mt-6 max-w-5xl space-y-4 text-base leading-8 text-brand-muted sm:text-lg">
            {surgery.overview.map((line, i) => (
              <p key={`${surgery.slug}-o-${i}`}>{line}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-16">
        <Container>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">Highlights</h2>
          <ul className="mt-6 max-w-4xl space-y-2 text-brand-muted sm:text-lg">
            {surgery.keyFeatures.map((item, i) => (
              <li key={`${surgery.slug}-f-${i}`}>• {item}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">FAQs</h2>
          <div className="mt-6 space-y-4">
            {surgery.faqs.map((faq, i) => (
              <article key={`${surgery.slug}-faq-${i}`} className="rounded-2xl border border-brand-border/40 p-5">
                <h3 className="font-heading text-lg font-bold text-brand-navy">{faq.q}</h3>
                <p className="mt-2 text-brand-muted">{faq.a}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageScaffold>
  )
}
