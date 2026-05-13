import { Container } from '../../components/ui/Container'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { siteAssets } from '../../constants/site-assets'

const stats = [
  ['250k+', 'Patients Treated'],
  ['120+', 'Expert Doctors'],
  ['25+', 'Years Experience'],
  ['15+', 'Specialty Depts'],
] as const

export function AboutPage() {
  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Our Legacy</p>
              <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
                A Sanctuary of
                <span className="block">Healing and Trust.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
                For over two decades, Vaidya Vikash Hospitals has been at the forefront of medical excellence, blending
                advanced technology with a compassionate touch to redefine healthcare standards.
              </p>
            </div>
            <div className="relative lg:col-span-5">
              <img
                src={siteAssets.aboutHeroImage}
                alt="Modern hospital"
                className="w-full rounded-2xl object-cover shadow-2xl lg:rotate-2"
              />
              <div className="absolute -bottom-6 left-4 rounded-xl bg-white p-5 shadow-xl">
                <p className="text-sm text-brand-navy">
                  "Healing is a matter of time,
                  <br /> but it is sometimes also
                  <br /> a matter of opportunity."
                </p>
                <p className="mt-2 text-xs font-semibold text-brand-green">— The Vaidya Philosophy</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-surface pb-14 sm:pb-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-xl border-b-4 border-brand-green/30 bg-white p-6 text-center shadow-sm">
                <p className="font-heading text-4xl font-extrabold text-brand-navy">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-brand-muted">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <img src={siteAssets.aboutStoryImage} alt="Doctors team" className="w-full rounded-3xl object-cover shadow-xl" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">Our Story</p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
                From a Vision to a Healthcare Revolution
              </h2>
              <p className="mt-4 text-brand-muted">
                Established in 1998, Vaidya Vikash Hospitals began with a single mission: to make world-class healthcare
                accessible to all.
              </p>
              <p className="mt-4 text-brand-muted">
                Our journey is defined by relentless innovation and a steadfast commitment to patient safety. We believe
                true healing happens when technology meets empathy.
              </p>
              <p className="mt-4 text-brand-muted">
                Today, we stand as a beacon of hope with advanced clinical infrastructure and a dedicated team delivering
                personalized care.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageScaffold>
  )
}
