import { HeroSection } from '@/components/sections/HeroSection'
import { TrustMetrics, WhoWeServe, OperationalChallenges, CoreServices } from '@/components/sections/HomeMiddleSections'
import { SecuritySection, StaffingModels, CostCalculator, CaseStudiesPreview } from '@/components/sections/HomeBottomSections'
import { CTABanner } from '@/components/ui'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMetrics />
      <WhoWeServe />
      <OperationalChallenges />
      <CoreServices />
      <SecuritySection />
      <StaffingModels />
      <CostCalculator />
      <CaseStudiesPreview />
      <CTABanner
        title="Ready To Build Your Extended Team?"
        subtitle="Scale faster while maintaining security, compliance, and operational excellence."
      />
    </>
  )
}
