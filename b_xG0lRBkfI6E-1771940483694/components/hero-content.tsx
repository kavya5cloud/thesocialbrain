"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroContent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-start justify-center">
      {/* Eyebrow badge */}
      <div
        className={`mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        Now with GPT-5 Integration
      </div>

      {/* Headline */}
      <h1
        className={`max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground transition-all duration-700 delay-100 sm:text-5xl lg:text-6xl ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <span className="text-balance">
          AI That Runs Your Social Media.
        </span>
      </h1>

      {/* Subheading */}
      <p
        className={`mt-6 max-w-md text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-200 lg:text-lg ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        Autonomous AI agents that create, schedule, and optimize your content
        across every platform. Grow your audience on autopilot while you focus
        on building.
      </p>

      {/* CTA Buttons */}
      <div
        className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <Button
          size="lg"
          className="group rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground hover:bg-accent/90"
        >
          Get a Demo
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full border-border bg-transparent px-7 text-sm font-medium text-foreground hover:bg-secondary hover:text-foreground"
        >
          <Play className="mr-2 h-3.5 w-3.5 fill-current" />
          Start Free Trial
        </Button>
      </div>

      {/* Trust signal */}
      <div
        className={`mt-12 flex items-center gap-6 transition-all duration-700 delay-[400ms] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex -space-x-2">
          {[
            "bg-accent/40",
            "bg-accent/30",
            "bg-accent/20",
            "bg-muted",
          ].map((bg, i) => (
            <div
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background ${bg} text-xs font-medium text-foreground/70`}
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">2,400+</span>{" "}
          teams already growing
        </div>
      </div>
    </div>
  )
}
