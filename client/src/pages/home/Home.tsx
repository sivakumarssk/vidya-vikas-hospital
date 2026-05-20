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
import { FaWhatsapp } from "react-icons/fa"


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

<a
  href="https://wa.me/919938097999?text=Hello%20Vaidya%20Vikash%20Hospital,%20I%20want%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-30 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
>
  <FaWhatsapp className="text-3xl" />
</a>

    </PageScaffold>
  )
}
