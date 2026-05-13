import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'

const categories = ['All', 'Heart Care', 'Orthopedics', 'Women Health', 'Child Care', 'Preventive Health'] as const

const blogPosts = [
  {
    title: 'How to Recognize Early Warning Signs of Heart Disease',
    excerpt:
      'Understand symptoms that should not be ignored, when to seek urgent care, and how routine screening helps reduce long-term cardiac risk.',
    category: 'Heart Care',
    readTime: '6 min read',
    date: 'Apr 12, 2026',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=80',
  },
  {
    title: 'Joint Pain vs Sports Injury: When to Visit an Orthopedic Specialist',
    excerpt:
      'A practical guide to identifying overuse injuries, ligament damage, and the right timeline for consultation and rehabilitation.',
    category: 'Orthopedics',
    readTime: '5 min read',
    date: 'Apr 09, 2026',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
  },
  {
    title: 'Antenatal Checkup Schedule Every Expecting Mother Should Know',
    excerpt:
      'Trimester-wise antenatal milestones, recommended scans, and nutrition pointers for a safer and more confident pregnancy journey.',
    category: 'Women Health',
    readTime: '7 min read',
    date: 'Apr 06, 2026',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&q=80',
  },
  {
    title: 'Childhood Fever: Home Care Tips and Red Flags',
    excerpt:
      'Know what is normal, what requires observation, and when to immediately consult pediatric emergency services.',
    category: 'Child Care',
    readTime: '4 min read',
    date: 'Apr 01, 2026',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&q=80',
  },
  {
    title: 'Annual Health Checkups: Tests You Should Not Skip After 30',
    excerpt:
      'Build a preventive screening routine with age-based tests to detect chronic disease risk early and maintain better long-term health.',
    category: 'Preventive Health',
    readTime: '6 min read',
    date: 'Mar 29, 2026',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
  },
  {
    title: 'Desk Job and Back Pain: Daily Habits That Protect Your Spine',
    excerpt:
      'Simple ergonomic fixes, mobility drills, and posture practices that can significantly reduce recurrent neck and lower back pain.',
    category: 'Orthopedics',
    readTime: '5 min read',
    date: 'Mar 25, 2026',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80',
  },
]

export function BlogsPage() {
  const [featured, ...restPosts] = blogPosts

  return (
    <PageScaffold>
      <section className="bg-brand-surface pt-12 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12">
        <Container>
          <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
            Blogs
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl">Health Insights & Medical Updates</h1>
          <p className="mt-3 max-w-3xl text-lg text-brand-muted">
            Read expert guidance from Vidya Vikash Hospital specialists across prevention, diagnosis, treatment, and
            recovery.
          </p>

          <article className="mt-7 overflow-hidden rounded-3xl border border-brand-border/35 bg-white shadow-sm lg:grid lg:grid-cols-[1.2fr_1fr]">
            <img src={featured.image} alt={featured.title} className="h-64 w-full object-cover lg:h-full" loading="lazy" />
            <div className="p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-green">{featured.category}</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy">{featured.title}</h2>
              <p className="mt-4 text-brand-muted">{featured.excerpt}</p>
              <p className="mt-5 text-sm font-medium text-brand-muted">
                {featured.date} • {featured.readTime}
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy/90"
              >
                Read Article
              </button>
            </div>
          </article>
        </Container>
      </section>

      <section className="border-t border-brand-border/40 bg-white pt-8 pb-14 sm:pt-10 sm:pb-16">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  index === 0 ? 'bg-brand-navy text-white' : 'bg-brand-surface text-brand-muted hover:bg-brand-border/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {restPosts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-2xl border border-brand-border/35 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img src={post.image} alt={post.title} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-green">{post.category}</p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-brand-navy">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm text-brand-muted">{post.excerpt}</p>
                  <p className="mt-4 text-xs font-medium text-brand-muted">
                    {post.date} • {post.readTime}
                  </p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-brand-green transition hover:underline"
                  >
                    Read more →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageScaffold>
  )
}
