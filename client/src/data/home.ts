import { specialities as allSpecialities } from './specialities'
import cardiology from '../assets/specialities/cardiology.png'
import orthopedics from '../assets/specialities/orthopedics.png'
import oncology from '../assets/specialities/oncology.png'
import gastro from '../assets/specialities/gastro.png'
import gynac from '../assets/specialities/gynac.png'
//import defaultImage from '../assets/specialities/default.png'

export type NavItem = {
  label: string
  to: string
}

/** Slugs for the desktop-only Specialities nav dropdown (see SiteHeader). */
export const navSpecialityDropdownSlugs = [
  'cardiology',
  'orthopedics',
  'neurology',
  'oncology',
  'gastroenterology',
  'gynaecology-and-obstetrics',
  'pediatrics',
  'nephrology',
  'emergency-services',
  'pulmonology',
] as const

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Locations', to: '/locations' },
  { label: 'Specialities', to: '/specialities' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export const heroLocations = ['Sambalpur', 'Kakinada', 'Berhampur', 'Jharsuguda'] as const

export type ExcellenceCard = {
  title: string
  description: string
  //icon: string
  image: string
  slug: string
}

export const excellenceTabs = [
  { id: 'specialities', label: 'Specialities' },
  { id: 'transplants', label: 'Transplants' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'surgeries', label: 'Key Surgeries' },
] as const

const featuredSpecialitySlugs = [
  'cardiology',
  'orthopedics',
  'oncology',
  'gastroenterology',
  'gynaecology-and-obstetrics',
] as const

const specialityImages: Record<(typeof featuredSpecialitySlugs)[number], string> = {
  cardiology,
  orthopedics,
  oncology,
  gastroenterology: gastro,
  'gynaecology-and-obstetrics': gynac,
}

export const excellenceCards: ExcellenceCard[] = featuredSpecialitySlugs
  .map((slug) => {
    const speciality = allSpecialities.find((item) => item.slug === slug)
    if (!speciality) return null

    return {
      title: speciality.name,
      description: speciality.shortDescription,
     image: specialityImages[slug],
      slug: speciality.slug,
    }
  })
  .filter((item): item is ExcellenceCard => Boolean(item))

export const quickActions = [
  { title: 'Book Appointment', href: '/book-appointment' },
  { title: 'Our Technologies', href: '/technologies' },
  { title: 'Surgeries & procedures', href: '/surgeries' },
  { title: 'Our Locations', href: '/locations' },
  { title: 'Our Doctors', href: '/doctors' },
  { title: 'Free Second Opinion', href: '#second-opinion' },
] as const

export const insuranceTpa = ['Medi Assist', 'Raksha TPA', 'Paramount', 'FHPL'] as const
export const insuranceCompanies = ['Star Health', 'ICICI Lombard', 'HDFC Ergo', 'Care'] as const

export const locationCards = [
  { name: 'Sambalpur', image: 'https://images.unsplash.com/photo-1586773860418-d372322d81be?w=600&q=80' },
  { name: 'Kakinada', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80' },
  { name: 'Berhampur', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { name: 'Jharsuguda', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
] as const

export const footerLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Surgeries', href: '/surgeries' },
  { label: 'Our Doctors', href: '/doctors' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Book Appointment', href: '/book-appointment' },
  { label: 'Patient Rights & Responsibilities', href: '#rights' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
] as const
