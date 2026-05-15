
export type LocationItem = {
  slug: string
  name: string
  address: string
  phone: string
  email: string
  timings: string
  emergency: string
  heroImage: string
  about: string[]
  highlights: string[]
  specialitySlugs: string[]
}

export const locations: LocationItem[] = [
  {
    slug: 'Sambalpur',
    name: 'Sambalpur',
    address: '6-3-1106/1A, Raj Bhavan Road, Sambalpur, Hyderabad',
    phone: '+91 40 4567 4567',
    email: 'Sambalpur@vaidyavikash.com',
    timings: 'Mon-Sat: 8:00 AM - 8:00 PM',
    emergency: '24/7 Emergency & Trauma Support',
    heroImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsfGVufDB8fDB8fHww',
    about: [
      'Sambalpur centre is our tertiary-care flagship with multidisciplinary specialists, advanced diagnostics, and high-acuity emergency pathways.',
      'The campus supports coordinated outpatient, daycare, and inpatient treatment plans with dedicated nursing and rehabilitation teams.',
    ],
    highlights: ['Cath lab and interventional suites', 'Advanced ICU support', 'Dedicated oncology day-care', 'Comprehensive imaging'],
    specialitySlugs: ['cardiology', 'neurology', 'oncology', 'orthopedics'],
  },
  {
    slug: 'kakinada',
    name: 'Kakinada',
    address: 'Main Road, RTC Complex Junction, Kakinada',
    phone: '+91 884 123 4567',
    email: 'kakinada@vaidyavikash.com',
    timings: 'Mon-Sat: 8:30 AM - 7:30 PM',
    emergency: '24/7 Emergency Unit',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1400&q=80',
    about: [
      'Kakinada location focuses on comprehensive family care with strong internal medicine, pediatrics, and surgical services.',
      'Patients receive specialist consultation, diagnostics, and follow-up programs through integrated care teams.',
    ],
    highlights: ['Mother & child clinic', 'General surgery OT', 'Dialysis support', 'Preventive health check programs'],
    specialitySlugs: ['general-medicine', 'pediatrics', 'nephrology', 'general-surgery'],
  },
  {
    slug: 'berhampur',
    name: 'Berhampur',
    address: 'NH-16 Service Road, Berhampur, Odisha',
    phone: '+91 680 123 4567',
    email: 'berhampur@vaidyavikash.com',
    timings: 'Mon-Sat: 8:00 AM - 8:00 PM',
    emergency: '24/7 Emergency & Critical Care',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80',
    about: [
      'Berhampur centre offers specialist-led diagnostics and treatment for chronic diseases, surgical conditions, and emergency episodes.',
      'The location emphasizes patient-first workflows with fast triage and coordinated referrals for advanced procedures.',
    ],
    highlights: ['Critical care backup', 'Orthopedic trauma support', 'Respiratory care unit', 'Digital lab reporting'],
    specialitySlugs: ['pulmonology', 'orthopedics', 'critical-care', 'emergency-services'],
  },
  {
    slug: 'jharsuguda',
    name: 'Jharsuguda',
    address: 'Station Road Extension, Jharsuguda',
    phone: '+91 6645 123 456',
    email: 'jharsuguda@vaidyavikash.com',
    timings: 'Mon-Sat: 9:00 AM - 7:00 PM',
    emergency: '24/7 Stabilization & Transfer Support',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80',
    about: [
      'Jharsuguda location delivers accessible multispeciality care with strong emergency stabilization and specialist consultation support.',
      'We provide streamlined referral pathways to higher-acuity centres when advanced interventions are required.',
    ],
    highlights: ['Emergency triage', 'Cardio-metabolic clinics', 'Women and child services', 'Physiotherapy and rehab'],
    specialitySlugs: ['cardiology', 'endocrinology', 'gynaecology-and-obstetrics', 'physiotherapy'],
  },
]
