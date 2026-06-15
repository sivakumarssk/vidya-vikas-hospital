import { useState } from 'react'
import { Container } from '../ui/Container'
import { siteAssets } from '../../constants/site-assets'
import { heroLocations } from '../../data/home'
import heroPhoto from '../../assets/hero.png'
import heroPhoto1 from '../../assets/hero1.png'
import heroPhoto2 from '../../assets/hero2.png'
import heroPhoto3 from '../../assets/hero3.png'

const heroImageByLocation: Record<string, string> = {
  Sambalpur: heroPhoto,
  Kakinada: heroPhoto1,
  Berhampur: heroPhoto2,
  Jharsuguda: heroPhoto3,
}

export function HeroSection() {
  const [activeLocation, setActiveLocation] = useState<string>(heroLocations[0])
  const currentHeroImage = heroImageByLocation[activeLocation] ?? heroPhoto

  return (
    <section
      className="relative overflow-x-clip bg-gradient-to-b from-white via-[#fafbfd] to-brand-surface pb-6 pt-6 sm:pb-12 sm:pt-10 lg:pb-16 lg:pt-14"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 z-[1] size-[18rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,110,28,0.07)_0%,transparent_68%)] sm:-right-24 sm:-top-24 sm:size-[28rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-12 z-[1] size-[14rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,6,102,0.05)_0%,transparent_72%)] sm:-bottom-32 sm:-left-24 sm:size-[24rem]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
          {/* Copy first on mobile */}
          <div className="order-1 flex w-full min-w-0 flex-col gap-3.5 sm:gap-5 lg:max-w-xl">
            <p className="mx-auto inline-flex w-fit items-center rounded-full border border-brand-green/20 bg-brand-green/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-green sm:mx-0 sm:text-xs lg:text-sm">
              Excellence in Care
            </p>
            <h1
              id="hero-heading"
              className="text-center font-heading text-[1.5rem] font-extrabold leading-[1.12] tracking-tight text-brand-navy min-[380px]:text-[1.78rem] sm:text-left sm:text-4xl sm:leading-tight lg:text-5xl xl:text-[3.25rem] xl:leading-[1.08]"
            >
              <span>Let&apos;s Find </span>
              <span className="text-brand-green">a Doctor</span>
              <span className="text-brand-navy">.</span>
            </h1>
            <p className="text-center text-[13px] font-semibold text-brand-green sm:text-left sm:text-base">
              We are here to help you stay healthy.
            </p>
            <p className="mx-auto hidden max-w-md text-center text-[0.9rem] leading-relaxed text-brand-muted sm:mx-0 sm:block sm:text-left sm:text-base">
              Choose a city to see nearby centres, specialists, and appointment slots tailored for you.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:justify-start sm:gap-2.5">
              {heroLocations.map((loc) => {
                const active = activeLocation === loc
                return (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setActiveLocation(loc)}
                    className={`w-full min-h-11 rounded-xl border px-2.5 py-2 text-[12px] font-semibold transition active:scale-[0.98] sm:min-h-0 sm:px-5 sm:py-2.5 sm:text-sm md:text-base ${
                      active
                        ? 'border-brand-green bg-brand-green text-white shadow-md shadow-brand-green/25'
                        : 'border-brand-border/60 bg-white text-brand-navy shadow-sm hover:border-brand-green/35 hover:shadow-md'
                    }`}
                  >
                    {loc}
                  </button>
                )
              })}
            </div>
            <div className="flex flex-col items-center gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4 sm:pt-2">
              <div className="flex -space-x-3">
                <img
                  src={siteAssets.heroAvatar1}
                  alt=""
                  className="size-10 rounded-full border-2 border-white object-cover ring-1 ring-black/5 sm:size-12"
                />
                <img
                  src={siteAssets.heroAvatar2}
                  alt=""
                  className="size-10 rounded-full border-2 border-white object-cover ring-1 ring-black/5 sm:size-12"
                />
                <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-brand-navy to-[#1a237e] text-[11px] font-semibold text-white shadow-md sm:size-12 sm:text-sm">
                  +500
                </div>
              </div>
              <p className="max-w-[18rem] text-center text-[12px] leading-snug text-brand-muted sm:text-left sm:text-sm md:text-[0.9375rem]">
                Trusted by over <strong className="font-semibold text-brand-navy">2 million</strong> patients across{' '}
                <strong className="font-semibold text-brand-navy">25 years</strong>.
              </p>
            </div>
          </div>

          {/* Image second on mobile — shorter crop */}
          <div className="relative order-2 mx-auto mt-1 w-full max-w-md lg:mx-0 lg:mt-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute right-0 top-0 size-32 rounded-full bg-brand-green/20 blur-2xl sm:size-48 lg:-right-6 lg:-top-6 lg:size-52"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-4 left-0 size-28 rounded-full bg-brand-navy/12 blur-2xl sm:size-40 lg:-bottom-8 lg:-left-8"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_18px_40px_-24px_rgba(0,6,102,0.45)] ring-1 ring-black/[0.06] sm:rounded-[1.9rem]">
              <img
                src={currentHeroImage}
                alt={`${activeLocation} hospital campus`}
                className="h-[220px] w-full object-cover object-[center_30%] min-[380px]:h-[250px] sm:h-[300px] sm:object-center md:h-[350px] lg:h-[420px] xl:h-[480px]"
                width={720}
                height={900}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/40 via-brand-navy/8 to-transparent px-4 pb-4 pt-12 sm:px-6 sm:pb-5 sm:pt-16">
                <p className="text-center font-heading text-xs font-semibold text-white/95 sm:text-left sm:text-sm md:text-base">
                  {activeLocation} — multispecialty care
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
