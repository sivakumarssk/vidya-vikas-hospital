import { Container } from '../ui/Container'
import { Link } from 'react-router-dom'

const packages = [
  {
    id: '01',
    name: 'Diabetic Health Check Up',
    regular: '₹2,898',
    discounted: '₹1,449',
    color: 'from-emerald-500 to-teal-600',
    tests: [
      'CBC', 'FBS', 'PPBS', 'HbA1C', 'Blood Urea',
      'Serum Creatinine', 'Lipid Profile',
      'Complete Urine Examination', 'ECG',
      'Physician Consultation & Registration',
    ],
  },
  {
    id: '02',
    name: 'Women Health Check Up',
    regular: '₹4,598',
    discounted: '₹2,299',
    color: 'from-pink-500 to-rose-600',
    tests: [
      'CBC', 'PPBS', 'Serum Creatinine', 'PAP Smear',
      'USG of Abdomen', 'Fasting Blood Sugar', 'Blood Urea',
      'Thyroid Profile', 'LFT',
      'Gyno Consultation & Registration',
    ],
  },
  {
    id: '03',
    name: 'Comprehensive Packages',
    regular: '₹5,223',
    discounted: '₹3,299',
    color: 'from-violet-500 to-purple-600',
    tests: [
      'Blood Grouping & RH Typing', 'CBC', 'Consultation Charges',
      'ECG', 'Echo (Echocardiography)', 'FBS (Fasting Blood Sugar)',
      'FLP (Lipid Profile)', 'LFT (Liver Function Test)', 'RFT Profile',
      'TSH (Thyroid Stimulating Hormone)', 'X-ray of Chest',
    ],
  },
  {
    id: '04',
    name: 'Prostate Health Check Up',
    regular: '₹3,349',
    discounted: '₹1,674',
    color: 'from-blue-500 to-indigo-600',
    tests: [
      'USG KUB', 'Uroflowmetry', 'Complete Urine Test',
      'Serum PSA', 'Creatinine',
      'Doctor Consultation & Registration',
    ],
  },
  {
    id: '05',
    name: 'Cardiac Package',
    regular: '₹4,415',
    discounted: '₹2,499',
    color: 'from-red-500 to-rose-600',
    tests: [
      'CBC (Complete Blood Count)', 'Consultation Charges',
      'ECG (Electrocardiogram)', 'Echo (Echocardiography)',
      'FLP (Lipid Profile)', 'Random Blood Sugar',
      'RFT Profile', 'X-ray of Chest',
    ],
  },
  {
    id: '06',
    name: 'Master Health Check Up',
    regular: '₹12,251',
    discounted: '₹6,125',
    color: 'from-amber-500 to-orange-600',
    tests: [
      'CBC', 'ESR', 'FBS', 'PPBS', 'HbA1C', 'LFT', 'TMT', 'ECG',
      'X-ray Chest', 'USG Abdomen', '2D Echo Test',
      'Vitamin D3', 'Vitamin B12', 'Thyroid Profile',
      'PAP Smear/PSA', 'Blood Urea', 'Serum Creatinine',
      'Blood Grouping', 'Serum Calcium',
      'Complete Urine Examination',
      'Doctor Consultation and Registration',
    ],
  },
]

export function HealthCheckupSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-brand-surface" aria-labelledby="checkup-heading">
      <Container>
        <div className="text-center">
          <p className="inline-flex w-fit rounded-full border border-brand-green/25 bg-brand-green/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-green sm:text-sm">
            Helping You Live Longer, Healthier & Better
          </p>
          <h2 id="checkup-heading" className="mt-4 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Health Check-up Packages
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Comprehensive health screenings at discounted prices — early detection for a healthier life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-2xl border border-black/[0.06] bg-white shadow-sm overflow-hidden transition hover:shadow-lg"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${pkg.color} p-5`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                      {pkg.id}
                    </span>
                    <h3 className="font-heading text-base font-bold uppercase text-white leading-tight">
                      {pkg.name}
                    </h3>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="rounded-lg bg-white/15 px-3 py-1.5 text-center">
                    <p className="text-[10px] font-medium text-white/80 uppercase tracking-wide">Regular</p>
                    <p className="text-sm font-bold text-white line-through">{pkg.regular}/-</p>
                  </div>
                  <div className="rounded-lg bg-red-600 px-3 py-1.5 text-center shadow">
                    <p className="text-[10px] font-medium text-white/90 uppercase tracking-wide">Discounted</p>
                    <p className="text-base font-extrabold text-white">{pkg.discounted}/-</p>
                  </div>
                </div>
              </div>

              {/* Tests list */}
              <div className="flex flex-1 flex-col p-5">
                <ul className="flex-1 space-y-1.5">
                  {pkg.tests.map((test) => (
                    <li key={test} className="flex items-start gap-2 text-sm text-brand-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                      {test}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-appointment"
                  className="mt-5 block rounded-xl bg-brand-navy py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-navy/90"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-brand-muted">
          📍 Panchgachhia, Near Central School - 1, Bareipali, Sambalpur - 768006 &nbsp;|&nbsp;
          <a href="tel:+919938097999" className="font-semibold text-brand-navy hover:underline">99380 97999</a>
        </p>
      </Container>
    </section>
  )
}
