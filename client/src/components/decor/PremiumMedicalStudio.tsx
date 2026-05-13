/**
 * Lightweight 2D + CSS-3D studio accents — decorative only, pointer-events none.
 * Keeps a clinical, premium feel (no clipart, low contrast).
 */

function GlossyOrb3D({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative isolate [perspective:420px] ${className}`}
      aria-hidden
    >
      <div
        className="size-full rounded-full bg-gradient-to-br from-white via-[#e8f4ea] to-[#006e1c]/35 shadow-[inset_0_-12px_24px_rgba(0,0,0,0.06),inset_4px_8px_12px_rgba(255,255,255,0.85),0_16px_32px_-8px_rgba(0,6,102,0.18)] [transform:rotateX(18deg)_rotateY(-28deg)]"
      />
      <div className="pointer-events-none absolute left-[18%] top-[14%] h-[28%] w-[38%] rounded-full bg-white/70 blur-[2px]" />
    </div>
  )
}

function NavyOrb3D({ className = '' }: { className?: string }) {
  return (
    <div className={`relative isolate [perspective:400px] ${className}`} aria-hidden>
      <div
        className="size-full rounded-full bg-gradient-to-br from-[#1a237e] via-brand-navy to-[#000433] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.35),inset_6px_10px_16px_rgba(255,255,255,0.12),0_14px_28px_-6px_rgba(0,6,102,0.35)] [transform:rotateX(22deg)_rotateY(20deg)]"
      />
      <div className="pointer-events-none absolute right-[20%] top-[18%] h-[22%] w-[32%] rounded-full bg-white/25 blur-[1px]" />
    </div>
  )
}

function SvgCross2D({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M32 8v48M8 32h48"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        className="text-brand-navy/[0.08]"
      />
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="0.75" className="text-brand-green/[0.06]" />
    </svg>
  )
}

function SvgHeartbeat2D({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 48" fill="none" aria-hidden>
      <path
        d="M0 24h40l8-16 12 32 16-40 12 36 8-28 12 20h92"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-navy/[0.09]"
      />
    </svg>
  )
}

function SvgMolecule2D({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 56" fill="none" aria-hidden>
      <path
        d="M12 40L40 16l28 24M40 16v24"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green/[0.12]"
      />
      <circle cx="12" cy="40" r="5" className="fill-brand-navy/[0.06]" />
      <circle cx="40" cy="16" r="5" className="fill-brand-green/[0.1]" />
      <circle cx="68" cy="40" r="5" className="fill-brand-navy/[0.06]" />
      <circle cx="40" cy="40" r="4" className="fill-brand-green/[0.08]" />
    </svg>
  )
}

function CapsuleDepth({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative h-7 w-16 rounded-full bg-gradient-to-b from-white to-brand-icon-bg shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_8px_16px_-4px_rgba(0,6,102,0.12)] ring-1 ring-black/[0.04] [transform:skewX(-6deg)] ${className}`}
      aria-hidden
    >
      <div className="absolute inset-y-1 left-2 right-2 rounded-full bg-gradient-to-r from-brand-green/15 via-transparent to-brand-navy/10" />
    </div>
  )
}

/** Full-bleed hero layer — sits under content, z-0 */
export function HeroStudioLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <SvgHeartbeat2D className="absolute -left-[5%] top-[42%] hidden w-[min(52vw,22rem)] sm:block lg:left-[2%] lg:top-[38%]" />
      <SvgCross2D className="absolute left-[3%] top-[18%] hidden size-24 opacity-90 sm:block sm:size-28 lg:left-[6%] lg:top-[22%]" />

      <div className="absolute right-[4%] top-[8%] sm:right-[6%] lg:right-[8%] lg:top-[10%]">
        <div className="animate-decor-float h-14 w-14 sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]">
          <GlossyOrb3D className="h-full w-full" />
        </div>
      </div>

      <div className="absolute bottom-[14%] left-[8%] sm:bottom-[18%] lg:bottom-[22%] lg:left-[12%]">
        <div className="animate-decor-float-slow h-11 w-11 opacity-90 sm:h-12 sm:w-12">
          <NavyOrb3D className="h-full w-full" />
        </div>
      </div>

      <div className="absolute bottom-[22%] right-[6%] animate-decor-sway sm:bottom-[26%] lg:right-[10%]">
        <CapsuleDepth />
      </div>

      <SvgMolecule2D className="absolute bottom-[6%] right-[2%] w-14 opacity-60 sm:bottom-[8%] sm:right-[3%] sm:w-24 sm:opacity-80 lg:bottom-[12%] lg:right-[5%]" />
    </div>
  )
}

/** Inside about card — corners only */
export function AboutStudioAccents() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]" aria-hidden>
      <div className="absolute -right-2 top-8 opacity-80">
        <div className="animate-decor-float-slow h-12 w-12 sm:h-14 sm:w-14">
          <GlossyOrb3D className="h-full w-full opacity-90" />
        </div>
      </div>
      <SvgCross2D className="absolute bottom-10 left-4 size-20 opacity-70 sm:bottom-14 sm:left-8" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-60 sm:right-14">
        <CapsuleDepth className="scale-90" />
      </div>
    </div>
  )
}

/** Centers section — top band */
export function CentersStudioRibbon() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 overflow-hidden" aria-hidden>
      <SvgHeartbeat2D className="absolute -right-4 top-6 w-56 opacity-50 sm:w-72" />
      <div className="absolute left-[6%] top-4">
        <div className="animate-decor-float h-10 w-10 sm:h-11 sm:w-11">
          <NavyOrb3D className="h-full w-full opacity-80" />
        </div>
      </div>
    </div>
  )
}
