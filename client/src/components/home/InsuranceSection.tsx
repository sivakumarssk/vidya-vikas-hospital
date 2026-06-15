import { Container } from '../ui/Container'
import { insuranceTpa } from '../../data/home'

const deskImage =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80'

export function InsuranceSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-24" aria-labelledby="insurance-heading">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_-20px_rgba(0,6,102,0.25)] ring-1 ring-black/5 sm:rounded-[2.5rem]">
              <img src={deskImage} alt="" className="aspect-[576/600] w-full object-cover" width={576} height={600} />
            </div>
            <div className="absolute bottom-4 right-4 max-w-[280px] rounded-2xl border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:bottom-8 sm:right-8 sm:p-6">
              <p className="font-heading text-lg font-bold text-brand-navy">Cashless treatment</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                Dedicated desk support for pre-authorization and claims with partner TPAs and insurers.
              </p>
            </div>
          </div>

          <div className="order-1 space-y-6 lg:order-2 lg:space-y-8">
            <p className="inline-flex w-fit rounded-full border border-brand-green/25 bg-brand-green/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-green sm:text-sm">
              Peace of Mind
            </p>
            <h2 id="insurance-heading" className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Insurance Coverage
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
              We understand the importance of financial security during medical emergencies. Our dedicated insurance helpdesk
              assists you with all paperwork and coordination for cashless claims.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy">
                  Our TPA partners
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {insuranceTpa.map((name) => (
                    <span
                      key={name}
                      className="rounded-xl border border-black/[0.05] bg-brand-surface/80 px-4 py-2.5 text-sm font-semibold text-brand-navy shadow-sm transition hover:border-brand-green/20 hover:bg-white"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
