import { Container } from '../ui/Container'
import { Link } from 'react-router-dom'

const featuredImg =
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80'
const sideImg1 = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80'
const sideImg2 = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80'
const sideImg3 = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80'

const sideStories = [
  {
    image: sideImg1,
    title: 'New Robotic Surgery Suite Inaugurated at Sambalpur Branch',
    date: 'March 12, 2024',
  },
  {
    image: sideImg2,
    title: "Vaidya Vikash Receives 'Best Multi-Speciality' Award 2024",
    date: 'February 28, 2024',
  },
  {
    image: sideImg3,
    title: 'Launch of 24/7 Digital Health Records for Global Access',
    date: 'January 15, 2024',
  },
] as const

export function WhatsNewSection() {
  return (
    <section
      id="blogs"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white to-brand-surface py-14 sm:py-16 lg:py-20"
      aria-labelledby="news-heading"
    >
      <Container className="relative">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green sm:text-sm">Latest updates</p>
            <h2 id="news-heading" className="mt-2 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl lg:text-5xl">
              What&apos;s New
            </h2>
          </div>
          <Link
            to="/blogs"
            className="hidden items-center gap-2 rounded-full border border-brand-green/25 bg-white px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green hover:text-white sm:inline-flex"
          >
            View all blogs
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <article className="relative overflow-hidden rounded-3xl border border-brand-border/35 bg-white shadow-sm lg:col-span-7">
            <img src={featuredImg} alt="" className="aspect-[16/10] w-full object-cover lg:aspect-auto lg:min-h-[300px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-block rounded-full bg-brand-green px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                Conference
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                International Conference on Sustainability in Healthcare 2024
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                Leading specialists gather at Vaidya Vikash to discuss the future of eco-friendly clinical practices and
                green hospitals.
              </p>
            </div>
          </article>

          <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-5">
            {sideStories.map((story, index) => (
              <Link
                key={story.title}
                to="/blogs"
                className="group flex gap-4 rounded-2xl border border-brand-border/35 bg-white p-3 transition hover:-translate-y-0.5 hover:border-brand-green/30 hover:shadow-sm sm:gap-5 sm:p-4"
              >
                <img
                  src={story.image}
                  alt=""
                  className="size-24 shrink-0 rounded-xl object-cover ring-1 ring-black/[0.04] sm:size-28"
                  width={128}
                  height={96}
                />
                <div className="min-w-0 flex flex-col justify-center">
                  <h4 className="font-heading text-sm font-bold leading-snug text-brand-navy group-hover:text-brand-green sm:text-base">
                    {story.title}
                  </h4>
                  <p className="mt-2 text-xs text-brand-muted sm:text-sm">{story.date}</p>
                  <p className="mt-1 text-xs font-semibold text-brand-green">Article {index + 1}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-start sm:hidden">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-white px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
          >
            View all blogs
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
