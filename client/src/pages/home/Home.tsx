import { AboutSection } from '../../components/home/AboutSection'
import { CentersOfExcellenceSection } from '../../components/home/CentersOfExcellenceSection'
import { HeroSection } from '../../components/home/HeroSection'
import { InsuranceSection } from '../../components/home/InsuranceSection'
import { LocationsSection } from '../../components/home/LocationsSection'
import { QuickActionsSection } from '../../components/home/QuickActionsSection'
import { WhatsNewSection } from '../../components/home/WhatsNewSection'
import { FaqSection } from '../../components/home/FaqSection'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { ScrollReveal } from '../../components/ui/ScrollReveal'

export function Home() {
  return (
    <PageScaffold>
      <main>
        <HeroSection />
        <ScrollReveal delayMs={40}>
          <QuickActionsSection />
        </ScrollReveal>
        <ScrollReveal delayMs={70}>
          <CentersOfExcellenceSection />
        </ScrollReveal>
        <ScrollReveal delayMs={90}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delayMs={110}>
          <InsuranceSection />
        </ScrollReveal>
        <ScrollReveal delayMs={130}>
          <WhatsNewSection />
        </ScrollReveal>
        <ScrollReveal delayMs={150}>
          <LocationsSection />
        </ScrollReveal>
        <ScrollReveal delayMs={170}>
          <FaqSection />
        </ScrollReveal>
      </main>
    </PageScaffold>
  )
}
