import { Container } from '../ui/Container'
import { siteAssets } from '../../constants/site-assets'
import { footerLinks } from '../../data/home'
import { Link } from 'react-router-dom'

const linkColBreak = Math.ceil(footerLinks.length / 2)
const footerLinksColA = footerLinks.slice(0, linkColBreak)
const footerLinksColB = footerLinks.slice(linkColBreak)

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div
        className="pointer-events-none absolute -right-24 top-0 size-80 rounded-full bg-brand-green/12 blur-3xl sm:size-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-white/[0.04] blur-3xl"
        aria-hidden
      />

      <Container className="relative pt-12 pb-[max(3rem,env(safe-area-inset-bottom,0px))] sm:pt-14 lg:pt-16 lg:pb-14">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-4">
            <div className="inline-flex rounded-2xl bg-white p-3 shadow-md ring-1 ring-black/5">
              <img
                src={siteAssets.logo}
                alt="Vaidya Vikash Hospitals"
                className="h-12 w-auto sm:h-14"
                width={160}
                height={115}
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80 sm:text-[0.9375rem]">
              Compassionate care, clinical depth, and a healing environment for every patient—across all our centres.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-5 lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">Quick links</h2>
              <ul className="space-y-1">
                {footerLinksColA.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="block rounded-lg py-2.5 pl-0 pr-1 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:text-white sm:py-2 sm:text-[0.9375rem]"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="block rounded-lg py-2.5 pl-0 pr-1 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:text-white sm:py-2 sm:text-[0.9375rem]"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">Information</h2>
              <ul className="space-y-1">
                {footerLinksColB.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="block rounded-lg py-2.5 pl-0 pr-1 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:text-white sm:py-2 sm:text-[0.9375rem]"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="block rounded-lg py-2.5 pl-0 pr-1 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:text-white sm:py-2 sm:text-[0.9375rem]"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact + social */}
          <div
            id="contact"
            className="flex scroll-mt-24 flex-col items-center border-t border-white/10 pt-8 text-center sm:items-start sm:border-t-0 sm:pt-0 sm:text-left lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8 xl:pl-10"
          >
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">Contact</h2>
            <a
              href="mailto:admin@vaidyavikash.com"
              className="rounded-lg py-1 text-sm font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline"
            >
              admin@vaidyavikash.com
            </a>
            <a
              href="tel:+911800000000"
              className="mt-2 rounded-lg py-1 text-sm font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline"
            >
              1800-XXX-XXX (toll-free)
            </a>
            <div className="mt-6 flex justify-center gap-4 sm:justify-start">
              <a
                href="mailto:admin@vaidyavikash.com"
                className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-brand-green/40 hover:bg-white/10 hover:text-white"
                aria-label="Email"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6l-8 5L4 6V6z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-brand-green/40 hover:bg-white/10 hover:text-white"
                aria-label="Instagram"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 17a5.5 5.5 0 01-5.5-5.5zM17.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center sm:mt-12 sm:flex-row sm:justify-between sm:gap-4 sm:pt-10 sm:text-left">
          <p className="text-xs leading-relaxed text-white/45 sm:max-w-md sm:text-left">
            © {new Date().getFullYear()} Vaidya Vikash Hospitals. All rights reserved.
          </p>
          <p className="text-[11px] text-white/35">A unit of Vaidya Vikash Health Care Pvt. Ltd.</p>
        </div>
      </Container>
    </footer>
  )
}
