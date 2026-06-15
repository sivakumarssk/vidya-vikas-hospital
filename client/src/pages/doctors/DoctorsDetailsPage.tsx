import { Link, useParams }
from "react-router-dom"

import { useEffect } from "react"

import { doctors }
from "../../data/doctors"

import { PageScaffold }
from "../../components/layout/PageScaffold"

import { Container }
from "../../components/ui/Container"

export function DoctorDetailsPage() {

  const { id } = useParams()

  const doctor =
    doctors.find(
      (doctor) =>
        doctor.id === id
    )

  if (!doctor) {

    return (

      <PageScaffold>

        <Container>

          <div className="py-20 text-center">

            <h1 className="text-4xl font-bold text-brand-navy">
              Doctor Not Found
            </h1>

          </div>

        </Container>

      </PageScaffold>
    )
  }

  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (

    <PageScaffold>

      <section className="bg-brand-surface py-16">

        <Container>

          <div className="grid items-start gap-10 lg:grid-cols-[380px_1fr]">

            {/* Doctor Image */}

            <div className="self-start overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(3,16,44,0.08)]">

              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-[380px] w-full object-cover object-top"
              />

            </div>

            {/* Doctor Info */}

            <div>

              <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
                {doctor.speciality}
              </p>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-brand-navy lg:text-5xl">
                {doctor.name}
              </h1>

              <p className="mt-4 text-lg font-medium text-brand-muted">
                {doctor.qualification}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 ">

                <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">

                  <p className="text-xs font-semibold uppercase text-brand-muted">
                    Designation
                  </p>

                  <p className="mt-1 font-bold text-brand-navy">
                    {doctor.designation}
                  </p>

                </div>

                <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">

                  <p className="text-xs font-semibold uppercase text-brand-muted">
                    Department
                  </p>

                  <p className="mt-1 font-bold text-brand-navy">
                    {doctor.speciality}
                  </p>

                </div>

              </div>
               </div>
               </div>

              {/* About Doctor */}

{doctor.aboutDoctor && (
  <div className="mt-12 w-full rounded-3xl bg-white p-8 shadow-[0_6px_24px_rgba(3,16,44,0.06)]">
    <h2 className="text-2xl font-bold text-brand-navy">
      About Doctor
    </h2>

    <p className="mt-5 leading-8 text-brand-muted">
      {doctor.aboutDoctor}
    </p>
  </div>
)}

              {/* Services */}

              <div className="mt-10 rounded-3xl bg-white p-8 shadow-[0_6px_24px_rgba(3,16,44,0.06)]">

                <h2 className="text-2xl font-bold text-brand-navy">
                  Special Care Services
                </h2>

                <p className="mt-5 leading-8 text-brand-muted">
                  {
                    doctor.specialCareServices ||
                    "Specialized medical services available."
                  }
                </p>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4 justify-center">

                <Link
                  to="/book-appointment"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-navy px-8 text-base font-semibold text-white transition hover:bg-brand-green"
                >
                  Book Appointment
                </Link>

                <Link
                  to="/doctors"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-brand-border/50 px-8 text-base font-semibold text-brand-navy transition hover:border-brand-green hover:text-brand-green"
                >
                  Back To Doctors
                </Link>

             

          

          </div>

        </Container>

      </section>

    </PageScaffold>
  )
}