import scrapedData from './specialities-scraped.json'
import cardiology from '../assets/specialities/cardiology.png'
import orthopedics from '../assets/specialities/orthopedics.png'
import oncology from '../assets/specialities/oncology.png'
import gastro from '../assets/specialities/gastro.png'
import gynac from '../assets/specialities/gynac.png'
import defaultImage from '../assets/specialities/default.png'
import nephrology from '../assets/specialities/nephrology.png'
import radiology from '../assets/specialities/radiology.png'

const specialityImages: Record<string, string> = {
  cardiology: cardiology,
  orthopedics: orthopedics,
  oncology: oncology,
  gastroenterology: gastro,
  'gynaecology-obstetrics': gynac,
  nephrology:nephrology,
  radiology:radiology

}

export type SpecialityItem = {
  name: string
  slug: string
  image: string
  shortDescription: string
  overview: string[]
  conditions: string[]
  treatments: string[]
  facilities: string[]
  faqs: { q: string; a: string }[]
}

type ScrapedPage = {
  title: string
  slug: string
  overview: string[]
  sectionHighlights: string[]
  faqs: { q: string; a: string }[]
}

const names = [
  'Arthroscopy & Sports Medicine',
  //'Andrology',
  //'Audiology & Speech Therapy',
  'Bariatric Surgery',
  'Cardiology',
 // 'Child Development Center',
  'Critical Care',
  //'CT Surgery',
  'Dental Surgery',
  'Dermatology',
  'Emergency Medicine',
  //'Endocrinology',
  'ENT',
  //'Endodontics',
  //'Fetal Medicine',
  'Gastroenterology',
  'General Medicine',
  'General Surgery',
  'Gynaecology & Obstetrics',
  'Geriatric Medicine',
 // 'Hematology & BMT',
  //'Heart and Lung Transplant',
  //'Hepatology',
  'Infectious Diseases',
  'Interventional Radiology',
  'Interventional Cardiology',
 // 'Liver Transplant',
  //'Lung Transplant',
  //'Medical Gastroenterology',
  //'Medical Oncology',
  'Mother & Child',
  'Movement Disorders',
  //'Multiorgan Transplant',
  'Neonatology',
  'Nephrology',
  'Neuro Science',
  //'Nuclear Medicine',
  'Nutrition and Dietetics',
  //'Oncology',
  //'Ophthalmology',
  'Orthopedics',
  'Pain Medicine',
  'Parkinson’s Center',
  'Pediatrics',
  'Pediatric Cardiology',
  'Pediatric Neurology',
  'Pediatric Orthopedics',
  //'Pediatric Liver Transplant',
  //'Pediatric Endocrinology',
  //'Pediatric Gastroenterology',
  //'Pediatric Haematology',
  //'Pediatric Nephrology',
  //'Pediatric Oncology',
  'Pediatric Pulmonology',
  'Pediatric Surgery',
  'Pediatric Urology',
  //'Pancreas Transplantation',
  'Physiotherapy',
  'Plastic Surgery',
  'Psychiatry',
  'Pulmonology',
  //'Podiatry',
  //'Proctology',
  'Radiology',
  //'Renal Medicine',
  //'Rheumatology',
  //'Robotic Science',
  //'Robotic Thoracic Surgery',
  //'Radiation Oncology',
  'Spine Surgery',
  'Surgical Gastroenterology',
  //'Surgical Oncology',
  'Urology',
  'Vascular Surgery',
  'Vaccination',
] as const

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

const scrapedBySlug = new Map(
  ((scrapedData as { pages?: ScrapedPage[] }).pages ?? [])
    .filter((page) => page && page.slug)
    .map((page) => [slugify(page.slug), page]),
)

const defaultFAQs = [
  {
    q: 'When should I consult this department?',
    a: 'Book a consultation when you have persistent symptoms, recurring episodes, abnormal reports, or when your primary doctor recommends specialist evaluation.',
  },
  {
    q: 'Do you offer both OPD and inpatient care?',
    a: 'Yes. Vaidya Vikash Hospital supports outpatient consultations, daycare procedures, and full inpatient care based on clinical need.',
  },
  {
    q: 'How can I book quickly?',
    a: 'Use the online Book Appointment page, choose your preferred date/time, and our care team will confirm the slot with the right specialist.',
  },
] as const

const brandRules: Array<[RegExp, string]> = [
  [/\bVaidya Vikash Hospitals\b/gi, 'Vaidya Vikash Hospital'],]

export const specialities: SpecialityItem[] = names.map((name) => ({
  ...buildSpeciality(name),
}))

export const specialityFAQs = [
  {
    q: 'Why choose Vaidya Vikash Hospital?',
    a: 'Vaidya Vikash Hospital combines advanced technology, specialist expertise, and compassionate, patient-centric care across major medical disciplines.',
  },
  {
    q: 'When should I visit a hospital?',
    a: 'Seek immediate care for breathing difficulty, chest pain, fainting, sudden weakness, severe trauma, or any rapidly worsening symptoms.',
  },
  {
    q: 'What is a multi-speciality hospital?',
    a: 'A multi-speciality hospital offers integrated diagnosis and treatment across multiple specialties with coordinated teams and modern facilities.',
  },
] as const

function buildSpeciality(name: string): SpecialityItem {
  const slug = slugify(name)
  const scraped = scrapedBySlug.get(slug)

  if (scraped) {
    const overview = sanitizeOverview(scraped.overview, name)
    const highlights = sanitizeHighlights(scraped.sectionHighlights)
    const shortDescription = buildShortDescription(name, overview[0])

    return {
      name,
      slug,
      //image: specialityImages[page.slug] || defaultImage,
      image: specialityImages[slug] || defaultImage,
      shortDescription,
      overview,
      conditions: highlights.slice(0, 4).length > 0 ? highlights.slice(0, 4) : fallbackConditions(name),
      treatments: highlights.slice(2, 6).length > 0 ? highlights.slice(2, 6) : fallbackTreatments(),
      facilities: highlights.slice(4, 8).length > 0 ? highlights.slice(4, 8) : fallbackFacilities(),
      faqs: sanitizeFaqs(scraped.faqs),
    }
  }

  if (slug === 'arthroscopy-and-sports-medicine') {
    return {
      name,
      slug,
       image: specialityImages[slug] || defaultImage,
      shortDescription:
        'Dedicated sports medicine and arthroscopy care for athletes and active individuals, with minimally invasive treatment and focused rehabilitation.',
      overview: [
        'Vaidya Vikash Institute of Sports Medicine & Arthroscopy delivers specialized care for sports injuries, joint instability, and overuse conditions caused by high-intensity activity.',
        'Our program integrates orthopedic surgeons, sports medicine specialists, physiotherapists, and athletic rehabilitation experts so every patient receives a personalized return-to-activity plan.',
        'We focus on rapid pain control, tissue healing, functional recovery, and safe return to training using evidence-based protocols and modern arthroscopic techniques.',
      ],
      conditions: [
        'ACL, PCL, and meniscal tears',
        'Shoulder dislocation and rotator cuff injuries',
        'Ankle ligament injuries and sports sprains',
        'Cartilage damage and early degenerative joint changes',
        'Tennis elbow, overuse tendon injuries, and muscle strain syndromes',
      ],
      treatments: [
        'Diagnostic and therapeutic arthroscopy',
        'ACL/ligament reconstruction and meniscal repair',
        'Rotator cuff and shoulder stabilization procedures',
        'Regenerative medicine adjuncts where clinically appropriate',
        'Structured physiotherapy and sports-performance rehabilitation',
      ],
      facilities: [
        'Advanced imaging and prehabilitation planning',
        'High-definition arthroscopy suites and minimally invasive instrumentation',
        'Multidisciplinary rehab protocols for amateur and professional athletes',
        'Post-procedure functional scoring and progressive return-to-sport pathways',
      ],
      faqs: [
        {
          q: 'Who needs arthroscopy?',
          a: 'Arthroscopy is useful for diagnosing and treating joint injuries such as ligament tears, meniscal injuries, cartilage damage, recurrent dislocations, and some inflammatory joint issues.',
        },
        {
          q: 'Is arthroscopy painful?',
          a: 'The procedure is performed under anesthesia, so pain during surgery is controlled. Post-procedure discomfort is typically manageable with medication and physiotherapy guidance.',
        },
        {
          q: 'How long is recovery after arthroscopy?',
          a: 'Recovery varies by joint and procedure. Some patients recover in weeks, while ligament reconstructions can require several months of staged rehabilitation.',
        },
      ],
    }
  }

  const lower = name.toLowerCase()
  return {
    name,
    slug,
     image: specialityImages[slug] || defaultImage,
    shortDescription: `Comprehensive ${lower} services at Vaidya Vikash Hospital with evidence-based care, advanced diagnostics, and multidisciplinary specialists.`,
    overview: [
      `The ${name} department at Vaidya Vikash Hospital provides specialist-led diagnosis, treatment, and follow-up for acute and chronic clinical needs.`,
      'Our teams combine protocol-driven medicine with individualized care plans, ensuring treatment decisions are aligned with patient age, risk profile, and recovery goals.',
      'From first consultation to long-term monitoring, the care pathway is coordinated across diagnostics, procedural units, and rehabilitation support when required.',
    ],
    conditions: [
      `${name} related acute and chronic disorders`,
      'Complex cases needing multidisciplinary coordination',
      'Second-opinion referrals and long-standing unresolved symptoms',
      'Pre-procedure and post-procedure clinical optimization',
    ],
    treatments: [
      'Comprehensive clinical assessment and risk stratification',
      'Medication management and protocol-based therapy',
      'Minimally invasive and advanced procedure options (where indicated)',
      'Recovery planning, preventive follow-up, and lifestyle guidance',
    ],
    facilities: [
      'Specialist OPD with coordinated diagnostics',
      'Daycare and inpatient treatment support',
      'Critical care backup and 24/7 emergency pathways',
      'Digital records, reporting, and continuity of care',
    ],
    faqs: [...defaultFAQs],
  }
}

function sanitizeList(items: string[], max: number) {
  return [...new Set((items ?? []).map((item) => normalizeText(item)).filter((item) => item.length > 25))].slice(0, max)
}

function sanitizeFaqs(items: { q: string; a: string }[]) {
  const parsed = (items ?? [])
    .map((item) => ({ q: normalizeText(item.q), a: normalizeText(item.a) }))
    .filter((item) => item.q.length > 6 && item.a.length > 30 && !isScrapedNoise(item.q) && !isScrapedNoise(item.a))
    .slice(0, 8)

  return parsed.length > 0 ? parsed : [...defaultFAQs]
}

function sanitizeOverview(items: string[], speciality: string) {
  const cleaned = sanitizeList(items, 6).filter((line) => !isScrapedNoise(line))
  const picked = cleaned.slice(0, 3)
  if (picked.length > 0) return picked

  return [
    `The ${speciality} department at Vaidya Vikash Hospital delivers evidence-based, specialist-led care for acute and long-term conditions.`,
    'Our multidisciplinary team combines diagnostics, treatment planning, and follow-up care to improve outcomes and patient comfort.',
    'From first consultation to recovery, we focus on safe treatment pathways, transparent communication, and long-term health support.',
  ]
}

function sanitizeHighlights(items: string[]) {
  return sanitizeList(items, 12).filter((line) => !isScrapedNoise(line) && !line.endsWith('?'))
}

function normalizeText(value: string) {
  let out = value.trim().replace(/\s+/g, ' ')
  for (const [pattern, replacement] of brandRules) out = out.replace(pattern, replacement)
  out = out.replace(/best hospital in hyderabad/gi, 'leading multispeciality hospital')
  out = out.replace(/top hospitals in india/gi, 'trusted tertiary-care center')
  out = out.replace(/hyderabad/gi, 'our city')
  return out
}

function isScrapedNoise(text: string) {
  const value = text.toLowerCase()
  return (
    value.includes('book an appointment in 2 minutes') ||
    value.includes('enquire now') ||
    value.includes('get a free second opinion') )
}

function buildShortDescription(name: string, firstParagraph?: string) {
  if (firstParagraph && firstParagraph.length > 80) return firstParagraph
  return `Comprehensive ${name.toLowerCase()} care at Vaidya Vikash Hospital with specialist teams, modern diagnostics, and patient-centered treatment pathways.`
}

function fallbackConditions(name: string) {
  return [
    `${name} related acute and chronic disorders`,
    'Complex cases requiring multidisciplinary review',
    'Persistent symptoms or recurrent episodes',
    'Second-opinion and referral management',
  ]
}

function fallbackTreatments() {
  return [
    'Protocol-based evaluation and risk stratification',
    'Medication and procedure planning as clinically indicated',
    'Minimally invasive or advanced interventions when needed',
    'Recovery and long-term follow-up care planning',
  ]
}

function fallbackFacilities() {
  return [
    'Specialist OPD with coordinated diagnostics',
    'Daycare and inpatient treatment pathways',
    'Emergency and critical-care backup support',
    'Digital reporting and continuity-of-care follow-up',
  ]
}
