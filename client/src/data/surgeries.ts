import scrapedData from './surgeries-scraped.json'

import acl from '../assets/surgeries/ACL.png'
import gastro from '../assets/surgeries/gastro.png'
import heart from '../assets/surgeries/heart.png'
import knee from '../assets/surgeries/knee.png'
import tendon from '../assets/surgeries/tendon.png'

export type SurgeryItem = {
  name: string
  slug: string
  image: string
  shortDescription: string
  overview: string[]
  keyFeatures: string[]
  faqs: { q: string; a: string }[]
}

type ScrapedPage = {
  sourceUrl: string
  title: string
  subtitle: string
  slug: string
  overview: string[]
  highlights: string[]
  faqs: { q: string; a: string }[]
  error?: string
}

const brandRules: Array<[RegExp, string]> = [
  [/\bYashoda Hospitals\b/gi, 'Vidya Vikash Hospital'],
  [/\bYashoda Hospital\b/gi, 'Vidya Vikash Hospital'],
  [/\bYashoda\b/gi, 'Vidya Vikash Hospital'],
]

const defaultFAQs = [
  {
    q: 'Where can I have this procedure done?',
    a: 'Elective and emergency surgical services are available across Vidya Vikash Hospital campuses, with complex procedures coordinated through our flagship centre at Sambalpur and supporting units in Kakinada, Berhampur, and Jharsuguda.',
  },
  {
    q: 'How do I prepare for surgery?',
    a: 'Your surgical team will share fasting instructions, medication changes, and pre-assessment tests. Use Book Appointment to complete registration and receive a personalised checklist.',
  },
] as const

const pages = ((scrapedData as { pages?: ScrapedPage[] }).pages ?? []).filter((p) => p.slug && !p.error)
const SURGERY_IMAGES: Record<string, string> = {
  'achilles-tendon-repair': tendon,

  adhesiolysis: gastro,

  'acl-surgery': acl,

  'crt-p': heart,

  'endoscopic-retrograde-cholangiopancreatography-ercp': gastro,

  'open-reduction-and-internal-fixation-orif': knee,
}
export const surgeries: SurgeryItem[] = pages.map((page) => buildSurgery(page)).sort((a, b) => a.name.localeCompare(b.name))

export function getSurgeryBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return surgeries.find((s) => s.slug === slug)
}

function buildSurgery(page: ScrapedPage): SurgeryItem {
 // console.log(page.slug)
  const name = normalizeText(prettifyTitle(page.title))
  const titleNorm = normalizeText(clean(page.title))
  const overview = sanitizeParagraphs(page.overview, titleNorm)
  const keyFeatures = sanitizeFeatures(page.highlights, overview)
  const faqs = sanitizeFaqs(page.faqs)
  const shortDescription =
    overview[0] ??
    normalizeText(
      `Expert surgical care for ${name.replace(/^Advanced\s+/i, '').replace(/\s+in\s+Sambalpur\s*$/i, '')} at Vidya Vikash Hospital with modern theatres and multidisciplinary support.`,
    )

  return {
    name,
    slug: page.slug,
    image: SURGERY_IMAGES[page.slug] || knee,
    shortDescription,
    overview:
      overview.length > 0 ? overview : [normalizeText(`Learn more about ${name} and recovery expectations at Vidya Vikash Hospital.`)],
    keyFeatures: keyFeatures.length > 0 ? keyFeatures : fallbackFeatures(name),
    faqs,
  }
}

function prettifyTitle(title: string) {
  let t = clean(title)
  t = t.replace(/\s+in\s+Hyderabad\s*$/i, '')
  t = t.replace(/^Advanced\s+/i, '')
  t = t.replace(/\s+Surgery\s*$/i, '')
  t = t.trim()
  return t.length > 6 ? t : clean(title)
}

function clean(s: string) {
  return s.replace(/\s+/g, ' ').trim()
}

function normalizeText(value: string) {
  let out = clean(value)
  for (const [pattern, replacement] of brandRules) {
    out = out.replace(pattern, replacement)
  }
  out = out.replace(/\bHyderabad\b/gi, 'Sambalpur')
  out = out.replace(/\bSecunderabad\b/gi, 'Berhampur')
  out = out.replace(/\bSomajiguda\b/gi, 'Kakinada')
  out = out.replace(/\bMalakpet\b/gi, 'Jharsuguda')
  out = out.replace(/\bHitech City\b/gi, 'Sambalpur')
  out = out.replace(/\bHitec City\b/gi, 'Sambalpur')
  out = out.replace(/\bin India\b/gi, 'in our network')
  out = out.replace(/\bbest hospital\b/gi, 'leading hospital')
  out = out.replace(/\btop hospitals in india\b/gi, 'trusted tertiary-care network')
  return out
}

function isNoise(text: string) {
  const v = text.toLowerCase()
  return (
    v.includes('by clicking on send') ||
    v.includes('whatsapp') ||
    v.includes('otp') ||
    v.includes('please leave this field') ||
    v.includes('advised to go for a surgery') ||
    v.includes('get a free expert opinion') ||
    v.includes('get it now') ||
    v.includes('book your appointment today') ||
    v.includes('book doctor appointment') ||
    v.includes('diseases & treatments') ||
    v.includes('same as whatsapp') ||
    v.includes('enquire now') ||
    v.includes('need more information on your treatment') ||
    v.includes('submit a medical inquiry') ||
    v.includes('yes same as') ||
    v.includes('enter your whatsapp') ||
    v.includes('exploring advanced diagnostics') ||
    v.includes('seeking clarity on your surgery') ||
    v.includes('consult our experts now') ||
    v.includes('schedule your appointment today') ||
    v.includes('all major insurance are accepted') ||
    v.includes('india  other countries')
  )
}

function isGenericFaqAnswer(a: string) {
  const v = a.toLowerCase()
  return (
    v.length < 55 ||
    v === 'take the first step towards better health' ||
    (v.includes('take the first step towards better health') && v.length < 90) ||
    v === 'consult our experts now!' ||
    v === 'get a free second opinion now!'
  )
}

function sanitizeParagraphs(items: string[], titleNorm: string) {
  const out: string[] = []
  for (const raw of items ?? []) {
    const line = normalizeText(raw)
    if (line.length < 50 || isNoise(line)) continue
    if (line === titleNorm) continue
    if (titleNorm.length < 200 && (titleNorm.includes(line) || line.includes(titleNorm))) continue
    if (!out.includes(line)) out.push(line)
    if (out.length >= 6) break
  }
  return out
}

function sanitizeFeatures(highlights: string[], overview: string[]) {
  const skip = new Set(overview)
  const out: string[] = []
  for (const raw of highlights ?? []) {
    const line = normalizeText(raw)
    if (line.length < 20 || line.length > 220 || isNoise(line)) continue
    if (skip.has(line)) continue
    if (/^pre-surgical|^post-surgery|^acdf procedure|^during the procedure/i.test(line)) continue
    if (!out.includes(line)) out.push(line)
    if (out.length >= 10) break
  }
  return out
}

function sanitizeFaqs(items: { q: string; a: string }[]) {
  const parsed = (items ?? [])
    .map((item) => ({
      q: normalizeText(item.q),
      a: normalizeText(item.a),
    }))
    .filter(
      (item) =>
        item.q.length > 8 &&
        item.a.length > 20 &&
        !isNoise(item.q) &&
        !isNoise(item.a) &&
        !isGenericFaqAnswer(item.a) &&
        !item.q.toLowerCase().includes('need more information on your treatment') &&
        !item.q.toLowerCase().includes('exploring advanced diagnostics') &&
        !item.q.toLowerCase().includes('seeking clarity on your surgery'),
    )
    .slice(0, 8)

  return parsed.length > 0 ? parsed : [...defaultFAQs]
}

function fallbackFeatures(name: string) {
  return [
    `Protocol-led evaluation and consent at Vidya Vikash Hospital for ${name}.`,
    'Modern operation theatres, anaesthesia safety standards, and infection control.',
    'Structured follow-up and rehabilitation planning when required.',
  ].map(normalizeText)
}
