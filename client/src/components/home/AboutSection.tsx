import { Container } from '../ui/Container'
import { siteAssets } from '../../constants/site-assets'

function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 14" fill="none" aria-hidden>
      <path
        d="M1 7h14M11 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-16 lg:py-24" aria-labelledby="about-heading">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-surface/90 p-6 sm:p-10 lg:p-12">
          <div className="relative z-10 grid items-center gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="flex max-w-xl flex-col gap-4">
            <p className="inline-flex w-fit rounded-full border border-brand-green/25 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-green sm:text-sm">
              Legacy of Trust
            </p>
            <h2
              id="about-heading"
              className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl"
            >
              Redefining Patient-Centric Clinical Excellence.
            </h2>
            <p className="pt-1 text-base leading-relaxed text-brand-muted sm:text-lg">
              Vaidya Vikash Hospitals has been at the forefront of medical innovation for over two decades. We combine
              world-class medical expertise with a sanctuary-like environment to ensure healing begins the moment you step
              through our doors. Our commitment is to provide affordable, accessible, and high-quality healthcare for all.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-2 sm:gap-8">
              <div className="rounded-2xl border border-black/[0.04] bg-white/80 p-4 shadow-sm">
                <p className="font-heading text-3xl font-extrabold text-brand-green sm:text-4xl">25+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-navy sm:text-sm">
                  Years of Experience
                </p>
              </div>
              <div className="rounded-2xl border border-black/[0.04] bg-white/80 p-4 shadow-sm">
                <p className="font-heading text-3xl font-extrabold text-brand-green sm:text-4xl">100+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-navy sm:text-sm">
                  Awards Won
                </p>
              </div>
            </div>
            <a
              href="#about"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-brand-navy px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-navy/25 transition hover:-translate-y-0.5 hover:bg-brand-navy/95"
            >
              Know More About Us
              <ArrowRight className="size-4" />
            </a>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 size-28 rounded-full bg-brand-green/25 blur-2xl sm:size-36"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-black/5 sm:rounded-[2.5rem]">
              <img
                src={siteAssets.aboutVideoThumb}
                alt="Hospital interior"
                className="aspect-[5/4] w-full object-cover sm:aspect-[568/500]"
                width={568}
                height={500}
              />
            </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
