import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-accent/5 px-8 py-16 text-center sm:px-16 lg:py-24">
          {/* Subtle glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.88 0.16 85), transparent 70%)",
            }}
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Ready to put your social media on autopilot?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              Join 120+ early teams using TheSocialBrain to grow their audience,
              save time, and create better content with AI.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="group rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90"
              >
                Get a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-border bg-background px-8 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Start Free Trial
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required. 14-day free trial on all plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
