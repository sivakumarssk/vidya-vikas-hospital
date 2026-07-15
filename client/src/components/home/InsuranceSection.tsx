import { Container } from '../ui/Container'

import starLogo from '../../assets/insurance logo/star.png'
import mediAssistLogo from '../../assets/insurance logo/medi-assist.jpg'
import mdindiaLogo from '../../assets/insurance logo/mdindia.png'
import nivaBupaLogo from '../../assets/insurance logo/niva bupa.webp'
import careHealthLogo from '../../assets/insurance logo/care-health-insurance.webp'
import healthIndiaLogo from '../../assets/insurance logo/health india.png'
import hdfcErgoLogo from '../../assets/insurance logo/HDFC_ERGO.png'
import iffcoTokioLogo from '../../assets/insurance logo/IFFCO TOKIO.png'
import galaxyHealthLogo from '../../assets/insurance logo/GALAXY HEALTH.jpg'

const insuranceLogos = [
  { src: starLogo, alt: 'Star Health & Allied Insurance' },
  { src: mediAssistLogo, alt: 'Medi Assist Health Insurance & TPA' },
  { src: mdindiaLogo, alt: 'MDIndia Health Insurance TPA' },
  { src: nivaBupaLogo, alt: 'Niva Bupa' },
  { src: careHealthLogo, alt: 'Care Health Insurance' },
  { src: healthIndiaLogo, alt: 'Health India TPA Insurance' },
  { src: hdfcErgoLogo, alt: 'HDFC Ergo General Insurance' },
  { src: iffcoTokioLogo, alt: 'IFFCO Tokio' },
  { src: galaxyHealthLogo, alt: 'Galaxy Health Insurance' },
]

export function InsuranceSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-24" aria-labelledby="insurance-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex w-fit rounded-full border border-brand-green/25 bg-brand-green/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-green sm:text-sm">
            Peace of Mind
          </p>
          <h2 id="insurance-heading" className="mt-4 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Insurance Coverage
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            We understand the importance of financial security during medical emergencies. Our dedicated insurance helpdesk
            assists you with all paperwork and coordination for cashless claims.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="mb-6 text-center font-heading text-sm font-bold uppercase tracking-wide text-brand-navy">
            Our TPA partners
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {insuranceLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex flex-col items-center gap-2 rounded-xl border border-black/[0.06] bg-white p-4 shadow-sm transition hover:border-brand-green/20 hover:shadow-md"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-full object-contain"
                />
                <p className="text-center text-[10px] font-semibold leading-tight text-brand-navy">
                  {logo.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
