import { Navbar } from "@/components/navbar"
import { HeroContent } from "@/components/hero-content"
import { DashboardPreview } from "@/components/dashboard-preview"
import { HeroBackground } from "@/components/hero-background"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero section */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <main className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <HeroContent />
            <DashboardPreview />
          </div>
        </main>

        {/* Trusted by bar */}
        <div className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <p className="mb-8 text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {["Stripe", "Notion", "Linear", "Vercel", "Ramp"].map(
                (name) => (
                  <span
                    key={name}
                    className="text-sm font-semibold tracking-wide text-muted-foreground/50"
                  >
                    {name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Final CTA */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
