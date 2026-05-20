import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { locations } from '../../data/locations'

export function ContactPage() {
  const primaryLocation = locations[0]

  return (
    <PageScaffold>
      <section className="overflow-x-clip bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand-green">
              Get In Touch
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Your Health, Our
              <span className="block text-brand-green">Priority.</span>
            </h1>
            <p className="mt-5 text-lg text-brand-muted">
              Have questions about our treatments or want to book a specialized consultation? Reach out to our clinical
              experts today.
            </p>
          </div>

<div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">            
  <div className="space-y-6 lg:col-span-5">
              <div className="rounded-3xl bg-brand-surface p-5 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/60">Contact Channels</p>
                <div className="mt-6 space-y-6 text-brand-navy">
                  <div>
                    <p className="text-sm font-semibold text-brand-muted">Emergency Help Line</p>
                    <p className="font-heading text-xl font-bold">{primaryLocation.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-muted">Email Correspondence</p>
                    <p className="font-heading break-all text-xl font-bold">{primaryLocation.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-muted">Our Primary Campus</p>
                    <p className="break-words text-lg leading-relaxed">
                      {primaryLocation.address}
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs uppercase text-brand-navy/60">OPD Hours</p>
                    <p className="mt-1 text-sm font-semibold text-brand-navy">{primaryLocation.timings}</p>
                  </div>
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs uppercase text-brand-navy/60">Emergency</p>
                    <p className="mt-1 text-sm font-semibold text-brand-green">{primaryLocation.emergency}</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl">
                {/* <img
                  src={primaryLocation.heroImage}
                  alt={`${primaryLocation.name} hospital location`}
                  className="h-[280px] w-full object-cover"
                /> */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/45 to-transparent" />
                <div className="w-full overflow-hidden rounded-3xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190789.843534339!2d78.98592469852862!3d19.30187898868091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a21165bec27459b%3A0x2fd8f6205a4286f0!2sVaidya%20Vikash%20Hospitals!5e0!3m2!1sen!2sin!4v1778840214211!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 sm:p-8 shadow-lg lg:col-span-7">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-navy/70">
                    Full Name
                    <input
                      className="mt-2 w-full rounded-xl bg-brand-icon-bg px-4 py-3.5 text-sm text-brand-navy outline-none placeholder:text-brand-muted sm:text-base"
                      placeholder="Dr. Jane Smith"
                    />
                  </label>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-navy/70">
                    Phone Number
                    <input
                      className="mt-2 w-full rounded-xl bg-brand-icon-bg px-4 py-3.5 text-sm text-brand-navy outline-none placeholder:text-brand-muted sm:text-base"
                      placeholder="+91 00000 00000"
                    />
                  </label>
                </div>
                <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-brand-navy/70">
                  Email Address
                  <input
                    className="mt-2 w-full rounded-xl bg-brand-icon-bg px-4 py-3.5 text-sm text-brand-navy outline-none placeholder:text-brand-muted sm:text-base"
                    placeholder="jane@example.com"
                  />
                </label>
                <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-brand-navy/70">
                  How can we help?
                  <textarea
                    className="mt-2 h-40 w-full rounded-xl bg-brand-icon-bg px-4 py-3.5 text-sm text-brand-navy outline-none placeholder:text-brand-muted sm:text-base"
                    placeholder="Tell us more about your consultation needs..."
                  />
                </label>
                <button className="rounded-2xl bg-brand-navy px-8 py-3.5 font-heading text-base font-bold text-white shadow-lg sm:text-lg">
                  Send Secure Message
                </button>
                <p className="rounded-2xl bg-brand-green/10 p-5 text-sm text-brand-green">
                  Your data is protected under our Clinical Privacy Policy. We use end-to-end encryption for all medical
                  inquiries submitted through this portal.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </PageScaffold>
  )
}