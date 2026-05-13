import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  delayMs?: number
  className?: string
}

export function ScrollReveal({ children, delayMs = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        // Re-trigger on every viewport enter/leave for a subtle "alive" feel.
        setVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)')
    const sync = () => setIsMobile(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${isMobile ? 0 : delayMs}ms` }}
      className={`motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${
        visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.985] opacity-0'
      } transform-gpu transition-all duration-500 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}
