import scrapedData from './transplants-scraped.json'
import heartTransplant from '../assets/transplants/heartTransplant.png'
import lungTransplant from '../assets/transplants/lungTransplant.png'
import kidneyTransplant from '../assets/transplants/kidneyTranplant.png'
import liverTransplant from '../assets/transplants/liverTransplant.png'
import boneMarrow from '../assets/transplants/bonemarrowTransplant.png'
import pancreas from '../assets/transplants/pancreasTransplant.png'
export type TransplantItem = {
  name: string
  slug: string
  image: string
  shortDescription: string
  overview: string[]
  keyFeatures: string[]
  faqs: { q: string; a: string }[]
}

type ScrapedPage = {
  title: string
  subtitle: string
  slug: string
  overview: string[]
  highlights: string[]
  faqs: { q: string; a: string }[]
  error?: string
}

const PROGRAM_ORDER = [
  'heart-transplant',
  'lung-transplant',
  'kidney-transplant',
  'liver-transplant',
  'hematology-bmt',
  'pancreas-transplantation',
] as const

const PROGRAM_IMAGES: Record<string, string> = {
  'heart-transplant': heartTransplant,

  'lung-transplant': lungTransplant,

  'kidney-transplant': kidneyTransplant,

  'liver-transplant': liverTransplant,

  'hematology-bmt': boneMarrow,

  'pancreas-transplantation': pancreas,
}

const brandRules: Array<[RegExp, string]> = [
  [/\bVaidya Vikash Hospitals\b/gi, 'Vaidya Vikash Hospital'],]

const defaultFAQs = [
  {
    q: 'Where are transplant evaluations done?',
    a: 'Multidisciplinary transplant assessment is coordinated through Vaidya Vikash Hospital at Sambalpur, with supporting work-up and follow-up available across Kakinada, Berhampur, and Jharsuguda as clinically appropriate.',
  },
  {
    q: 'How do I start a referral?',
    a: 'Use Book Appointment with your reports and diagnosis summary. Our transplant coordination team will guide listing, work-up, and counselling steps.',
  },
] as const

const pagesBySlug = new Map(
  ((scrapedData as { pages?: ScrapedPage[] }).pages ?? [])
    .filter((p) => p.slug && !p.error)
    .map((p) => [p.slug, p]),
)

function buildOrdered(): TransplantItem[] {
  const out: TransplantItem[] = []
  for (const slug of PROGRAM_ORDER) {
    const page = pagesBySlug.get(slug)
    if (page) out.push(buildTransplant(page))
  }
  return out
}

export const transplants: TransplantItem[] = buildOrdered()

export function getTransplantBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return transplants.find((t) => t.slug === slug)
}

function buildTransplant(page: ScrapedPage): TransplantItem {
  const name =
  normalizeText(clean(page.title))
  const titleNorm = normalizeText(clean(page.title))
  const overview = sanitizeParagraphs(page.overview, titleNorm, page.slug)
  const keyFeatures = sanitizeFeatures(page.highlights, overview, page.slug)
  const faqs = sanitizeFaqs(page.faqs)
  const shortDescription =
    overview[0] ??
    normalizeText(
      `Comprehensive ${name.toLowerCase()} care at Vaidya Vikash Hospital with transplant multidisciplinary teams and modern perioperative support.`,
    )
   // console.log(page.slug)

  return {
    name,
    slug: page.slug,
    image: PROGRAM_IMAGES[page.slug as keyof typeof PROGRAM_IMAGES],
    shortDescription,
    overview:
      overview.length > 0 ? overview : [normalizeText(`Learn more about ${name} at Vaidya Vikash Hospital.`)],
    keyFeatures: keyFeatures.length > 0 ? keyFeatures : fallbackFeatures(name),
    faqs,
  }
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
  out = out.replace(/\bTelangana and AP\b/gi, 'Odisha and neighbouring states')
  out = out.replace(/\bTelangana\b/gi, 'Odisha')
  out = out.replace(/\bJeevandan\b/gi, 'the regional organ allocation network')
  out = out.replace(/\bin India\b/gi, 'in our network')
  out = out.replace(/\bbest hospital\b/gi, 'leading hospital')
  return out
}

function isNoise(text: string) {
  const v = text.toLowerCase()
  return (
    v.includes('by clicking on send') ||
    v.includes('whatsapp') ||
    v.includes('otp') ||
    v.includes('please leave this field') ||
    v.includes('same as whatsapp') ||
    v.includes('enter your whatsapp') ||
    v.includes('enquire now') ||
    v.includes('need expert advice on your care') ||
    v.includes('connect with our specialists') ||
    v.includes('diseases & treatments') ||
    v.includes('book doctor appointment') ||
    v.includes('free second opinion') ||
    v.includes('get a free second opinion') ||
    v.includes('health blogs for') ||
    v.includes('patient testimonials for') ||
    v.includes('read more') ||
    v.includes('doctor talk') ||
    v.includes('health talk')
  )
}

function isMostlyNonLatin(text: string) {
  const letters = text.replace(/[^a-zA-Z]/g, '').length
  const total = text.replace(/\s/g, '').length
  return total > 30 && letters / total < 0.22
}

function isOffTopicForSlug(slug: string, line: string) {
  const v = line.toLowerCase()
  if (slug === 'lung-transplant') {
    return (
      v.includes('tavr') ||
      v.includes('pacemaker') ||
      v.includes('angioplasty') ||
      v.includes('myocardial infarction') ||
      v.includes('coronary angiography') ||
      v.includes('mitral valve')
    )
  }
  return false
}

function sanitizeParagraphs(items: string[], titleNorm: string, slug: string) {
  const out: string[] = []
  for (const raw of items ?? []) {
    const line = normalizeText(raw)
    if (line.length < 50 || isNoise(line) || isMostlyNonLatin(line) || isOffTopicForSlug(slug, line)) continue
    if (line === titleNorm) continue
    if (titleNorm.length < 220 && (titleNorm.includes(line) || line.includes(titleNorm))) continue
    if (!out.includes(line)) out.push(line)
    if (out.length >= 6) break
  }
  return out
}

function sanitizeFeatures(highlights: string[], overview: string[], slug: string) {
  const skip = new Set(overview)
  const out: string[] = []
  for (const raw of highlights ?? []) {
    const line = normalizeText(raw)
    if (line.length < 18 || line.length > 200 || isNoise(line) || isMostlyNonLatin(line) || isOffTopicForSlug(slug, line)) continue
    if (skip.has(line)) continue
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
        item.a.length > 45 &&
        !isNoise(item.q) &&
        !isNoise(item.a) &&
        !isGenericFooterFaq(item),
    )

  const deduped: { q: string; a: string }[] = []
  const seenA = new Set<string>()
  for (const item of parsed) {
    const key = item.a.slice(0, 120)
    if (seenA.has(key)) continue
    seenA.add(key)
    deduped.push(item)
    if (deduped.length >= 8) break
  }

  return deduped.length > 0 ? deduped : [...defaultFAQs]
}

function isGenericFooterFaq(item: { q: string; a: string }) {
  const q = item.q.toLowerCase()
  const a = item.a.toLowerCase()
  return (
    (q.includes('need expert advice') && a.includes('connect with our specialists')) ||
    a.length < 50 ||
    (q.includes('oldest age') && !a.includes('70') && !a.includes('75') && !a.includes('age'))
  )
}

function fallbackFeatures(name: string) {
  return [
    `Multidisciplinary transplant team for ${name}.`,
    'Pre-transplant work-up, organ listing support, and dedicated perioperative care at Vaidya Vikash Hospital.',
    'Long-term immunosuppression planning and infection-prevention protocols.',
  ].map(normalizeText)
}
