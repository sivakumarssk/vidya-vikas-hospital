import { Container } from '../../components/ui/Container'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { siteAssets } from '../../constants/site-assets'
import {useState } from "react";
const stats = [
  ['250k+', 'Patients Treated'],
  ['120+', 'Expert Doctors'],
  ['25+', 'Years Experience'],
  ['15+', 'Specialty Depts'],
] as const

export function AboutPage() {

  const [activeSection, setActiveSection] =
  useState('foundation')


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

      <section className="-mt-1 pt-10 pb-10 relative z-10 ">
  <Container>

    <div className="flex flex-wrap gap-4 justify-start">

       <button
        onClick={() =>
          setActiveSection('foundation')
        }
        className={`rounded-full px-6 py-3 transition ${
          activeSection === 'foundation'
            ? 'bg-brand-navy text-white'
            : 'border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
        }`}
      >
        Foundation
      </button>

      <button
        onClick={() =>
          setActiveSection('overview')
        }
        className={`rounded-full px-6 py-3 transition ${
          activeSection === 'overview'
            ? 'bg-brand-navy text-white'
            : 'border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
        }`}
      >
        Overview
      </button>


    </div>

  </Container>
</section>

    {
activeSection === 'foundation' && (
<>
<section className="py-14 sm:py-16">
  <Container>
    <div className="grid gap-5 lg:grid-cols-2 lg:items-center">

      <img
        src={siteAssets.chairmansImage}
        alt="Chairman"
        className="h-[400px] w-full rounded-3xl object-cover object-top shadow-xl"
      />

     <div className="lg:pl-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
          Leadership
        </p>

        <h3 className="mt-3 font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
          Chairman's Message
        </h3>

        <h6 className="mt-5 text-lg font-bold leading-relaxed text-brand-muted sm:text-xl">
          “Nothing is important to us today than helping India become a country where advanced healthcare is available for everyone and not just a privileged few.”
        </h6>
        <p className='mt-4 text-brand-muted'>
          Our Vision“To become the most reliable hospital for the people of Odisha with a focus on patient care, comfort and adding values through ethical practices and providing the cost effective health care”.
        </p>

        <p className='mt-4 text-brand-muted'>
    Our Mission “To create and provide world class health care within the reach of every individual”
        </p>



<h6 className="mt-8 font-heading text-2xl font-bold text-cyan-600">
  G. Bhaskar Rao
</h6>

<p className="mt-2 text-lg font-semibold text-brand-navy">
  Chairman- Vaidya Vikash Group Of Hospitals
</p>
        

      </div>

    </div>
  </Container>
</section>

{/* UNIT HEAD SECTION */}
<section className="py-14 sm:py-16">
  <Container>
    <div className="grid gap-5 lg:grid-cols-2 lg:items-center">

      

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
        Hospital Leadership
        </p>

        <h3 className="mt-3 font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
          Guiding Our Vision
        </h3>

        <p className="mt-5 text-base leading-relaxed text-brand-muted">
          At Vaidya Vikash Hospital, our mission is to deliver accessible,
          affordable, and world-class healthcare with compassion, integrity,
          and excellence. We are committed to placing our patients at the
          heart of everything we do, ensuring that every individual receives
          safe, ethical, and evidence-based medical care.
        </p>

        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          Our vision is to be the most trusted healthcare institution in
          Western Odisha, recognized for clinical excellence, innovation,
          patient safety, and community service. We aspire to transform
          healthcare delivery by combining advanced medical technology with a
          highly skilled and compassionate team of healthcare professionals.
        </p>

        {/* <p className="mt-4 text-base leading-relaxed text-brand-muted">
          We believe that quality healthcare is not merely about treating
          illness—it is about promoting wellness, restoring hope, and
          improving the quality of life for individuals and families.
        </p> */}

        <h6 className="mt-8 font-heading text-2xl font-bold text-cyan-600">
          Dr. Umapathi Naidu
        </h6>

        <p className="mt-2 text-lg font-semibold text-brand-navy">
          MBBS, MHSM, DBA
        </p>

        <p className="mt-1 text-lg font-semibold text-brand-navy">
          Unit Head- Vaidya Vikash Hospital, Sambalpur
        </p>
      </div>

      <img
        src={siteAssets.headofUnit}
        alt="Dr. Umapathi Naidu"
        className="w-full rounded-3xl object-cover shadow-xl"
      />

    </div>
  </Container>
</section>

<section className="py-14 sm:py-16">
  <Container>
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

      <img
        src={siteAssets.dilipkumarpanda}
        alt="Dilip Kumar Panda"
        className="h-[500px] w-full rounded-3xl object-cover object-top shadow-xl"
      />

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
          Hospital Administration
        </p>

        <h3 className="mt-3 font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
          Head of Human Resources
        </h3>

        <p className="mt-5 text-base leading-relaxed text-brand-muted">
          With more than 35 years of rich experience across the paper,
          magnet, power, education, and healthcare industries, Mr. Dilip
          Kumar Panda brings extensive expertise in organizational
          development, workforce management, and strategic leadership.
        </p>

        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          He plays a key role in strengthening human resources practices,
          fostering employee engagement, and supporting the hospital's
          commitment to excellence in patient care through a highly skilled
          and motivated workforce.
        </p>

        <p className="mt-4 text-base leading-relaxed text-brand-muted">
  His areas of expertise include Industrial Relations, Talent
  Acquisition, Corporate Communication, and Corporate Social
  Responsibility. Throughout his distinguished career, he has
  successfully led people-centric initiatives, strengthened
  organizational culture, and contributed to the sustainable growth
  of institutions across multiple sectors.
</p>

        <div className="mt-8">
          <h4 className="font-heading text-2xl font-bold text-cyan-600">
            Dilip Kumar Panda
          </h4>

          <p className="mt-2 text-lg font-semibold text-brand-navy">
            B.Sc (Hons), M.A, LLB, DLI & PGDPM
          </p>

          <p className="mt-1 text-lg font-semibold text-brand-navy">
            Head of Human Resources, Vaidya Vikash Hospital, Sambalpur
          </p>

        
        </div>
      </div>

    </div>
  </Container>
</section>

</>

)}


{ activeSection === 'overview' && (

<>



{/* ABOUT US SECTION */}

<section className="pt-4 pb-14 sm:pb-16">
  <Container>

    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

      {/* TEXT LEFT */}

      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
          About Us
        </p>

        <h2 className="mt-3 font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
          Overview
        </h2>

        <p className="mt-5 text-base leading-relaxed text-brand-muted">
         Vikash Hospital Sambalpur is a trusted multispecialty healthcare provider in Western Odisha, offering all essential healthcare services under one roof, ensuring that no patient needs to go outside in search of quality medical care. We are proud partners in health with leading corporates, PSUs, and healthcare insurance organizations, making healthcare both accessible and affordable. Located in a soothing and serene environment with easy connectivity through all means of transportation, we combine state-of-the-art technology and a team of expert professionals to provide the highest standard of care. Our commitment to patient transparency, modern medical practices, and compassionate service guarantees a comprehensive healthcare experience for every individual.


        </p>

      </div>

      {/* IMAGE RIGHT */}

      <img
        src={siteAssets.overview}
        alt="Overview"
        className="w-full rounded-3xl object-cover shadow-xl"
      />

    </div>

  </Container>
</section>

{/* OUR STORY SECTION */}

<section className="py-14 sm:py-16">
  <Container>

    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

      {/* IMAGE LEFT */}

      <img
        src={siteAssets.aboutStoryImage}
        alt="Doctors team"
        className="w-full rounded-3xl object-cover shadow-xl"
      />

      {/* TEXT RIGHT */}

      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
          Our Story
        </p>

        <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
          From a Vision to a Healthcare Revolution
        </h2>

        <p className="mt-4 text-brand-muted">
          Established in 2019, Vaidya Vikash Hospitals began with a single mission.
        </p>

        <p className="mt-4 text-brand-muted">
          Our journey is defined by relentless innovation and compassion.
        </p>

      </div>

    </div>

  </Container>
</section>

</>

)}



    </PageScaffold>
  )
}
