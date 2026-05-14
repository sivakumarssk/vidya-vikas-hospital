import scrapedData from './technologies-scraped.json'
import robot from '../assets/robot.png'
import mri from '../assets/mri.png'
import brain from '../assets/brain.png'
import heart from '../assets/heart.png'
import xray from '../assets/xray.png'
import baby from '../assets/baby.png'
import cancer from '../assets/cancer.png'
export type TechnologyItem = {
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
    q: 'Where is this technology available?',
    a: 'Advanced modalities are available across Vidya Vikash Hospital campuses, with flagship diagnostics and interventional suites at Sambalpur and coordinated support in Kakinada, Berhampur, and Jharsuguda.',
  },
  {
    q: 'How do I know if this procedure is right for me?',
    a: 'Your treating consultant will recommend imaging or therapy based on clinical need, prior reports, and multidisciplinary review. Use Book Appointment for a structured evaluation.',
  },
] as const

const pages = ((scrapedData as { pages?: ScrapedPage[] }).pages ?? []).filter((p) => p.slug && !p.error)

const technologyImages: Record<string, string> = {
  '3-0-tesla-mri': mri,

  'advanced-nicus-picus': baby,

  'biplane-cath-lab': heart,

  'car-t-cell-therapy-in-india': cancer,

  'cone-beam-computed-tomography-scan': xray,

  cryoablation: xray,

  'digital-subtraction-angiography': xray,

  'dual-source-computed-tomography': xray,

  'extracorporeal-membrane-oxygenation': heart,

  'fetal-mri': baby,

  'fetal-neurosonography': brain,

  fluoroscopy: xray,

  'high-dose-rate-hdr-brachytherapy': heart,

  'intraoperative-neuromonitoring': brain,

  'intravascular-ultrasound-ivus-or-ultrasonography': xray,

  mammography: xray,

  'mr-linac': mri,

  'optical-coherence-tomography-test': xray,

  'robotic-da-vinci-xi': robot,

  'rosa-one-brain': brain,

  'ultra-low-contrast-angiography': heart,

  videostroboscopy: xray,

  'yag-pi-peripheral-iridotomy-laser': cancer,
}

//const defaultTechnologyImage = '/assets/technologies/default.png'

function buildTechnology(page: ScrapedPage): TechnologyItem {
  //console.log(page.slug)
  const name = normalizeText(shortenTitle(page.title))
  const overview = sanitizeParagraphs(page.overview)
  const keyFeatures = sanitizeFeatures(page.highlights, overview)
  const faqs = sanitizeFaqs(page.faqs)
  const shortDescription =
    overview[0] ??
    `Advanced clinical capability at Vidya Vikash Hospital — ${name} with specialist-led protocols and modern infrastructure.`
//console.log(page.slug, technologyImages[page.slug])
  return {
  name,
  slug: page.slug,
  image: technologyImages[page.slug] || robot,
  shortDescription: normalizeText(shortDescription),
  overview:
    overview.length > 0
      ? overview
      : [normalizeText(`Learn more about ${name} at Vidya Vikash Hospital.`)],
  keyFeatures:
    keyFeatures.length > 0 ? keyFeatures : fallbackFeatures(name),
  faqs,
}
}
export const technologies: TechnologyItem[] = pages
  .map((page) => buildTechnology(page))
  .sort((a, b) => a.name.localeCompare(b.name))

export function getTechnologyBySlug(slug: string | undefined) {
  if (!slug) return undefined

  return technologies.find((t) => t.slug === slug)
}

function shortenTitle(title: string) {
  const t = clean(title)
  const cut = t.split(/\s+at\s+/i)[0]
  return cut.length > 8 ? cut : t
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
  out = out.replace(/\bFirst and Only Hospital\b/gi, 'Leading hospital')
  out = out.replace(/\bfirst of its kind in India\b/gi, 'among the most advanced in Eastern India')
  out = out.replace(/\bIndia's First\b/gi, 'Regional leader in')
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
    v.includes('enter your whatsapp')
  )
}

function sanitizeParagraphs(items: string[]) {
  const out: string[] = []
  for (const raw of items ?? []) {
    const line = normalizeText(raw)
    if (line.length < 50 || isNoise(line)) continue
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
    if (line.length < 25 || line.length > 220 || isNoise(line)) continue
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
        item.a.length > 40 &&
        !isNoise(item.q) &&
        !isNoise(item.a) &&
        !item.q.toLowerCase().includes('need more information on your treatment'),
    )
    .slice(0, 8)

  return parsed.length > 0 ? parsed : [...defaultFAQs]
}

function fallbackFeatures(name: string) {
  return [
    `Specialist workflows and safety checks for ${name}.`,
    'Integrated diagnostics and treatment planning at Vidya Vikash Hospital.',
    'Multidisciplinary review where clinically appropriate.',
  ].map(normalizeText)
}




