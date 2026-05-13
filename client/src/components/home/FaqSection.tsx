import { useState } from 'react'
import { Container } from '../ui/Container'
import { specialityFAQs } from '../../data/specialities'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="faq-heading">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
            FAQs
          </p>
          <h2 id="faq-heading" className="mt-4 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-brand-muted">
            Quick answers to common queries about appointments, services, and hospital care.
          </p>

          <div className="mt-8 space-y-3">
            {specialityFAQs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <article key={item.q} className="rounded-2xl border border-brand-border/40 bg-white p-5 shadow-sm">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-heading text-lg font-bold text-brand-navy">{item.q}</h3>
                    <span className="text-xl font-bold text-brand-green" aria-hidden>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen ? <p className="mt-3 text-brand-muted">{item.a}</p> : null}
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
