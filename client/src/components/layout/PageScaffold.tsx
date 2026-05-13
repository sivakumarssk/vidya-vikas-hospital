import type { ReactNode } from 'react'
import { FloatingActions } from '../home/FloatingActions'
import { SiteFooter } from '../home/SiteFooter'
import { SiteHeader } from './SiteHeader'

type Props = {
  children: ReactNode
}

export function PageScaffold({ children }: Props) {
  return (
    <div className="min-h-screen bg-white text-brand-navy antialiased">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <FloatingActions />
    </div>
  )
}
