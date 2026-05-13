export function FloatingActions() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 right-4 z-[70] flex flex-col items-end sm:bottom-8 sm:right-6">
      <button
        type="button"
        onClick={scrollTop}
        className="flex size-12 items-center justify-center rounded-full bg-white text-brand-navy shadow-lg shadow-brand-navy/15 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-label="Back to top"
      >
        <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}
