"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Connect Your Accounts",
    description:
      "Link your social media profiles in seconds. TheSocialBrain integrates with Instagram, LinkedIn, X, TikTok, YouTube, and more.",
  },
  {
    number: "02",
    title: "Train Your AI Agent",
    description:
      "Share your brand guidelines, tone of voice, and content examples. The AI learns your unique style within minutes.",
  },
  {
    number: "03",
    title: "Review & Approve",
    description:
      "Your AI generates a full content calendar. Review, tweak, or approve posts with a single click before they go live.",
  },
  {
    number: "04",
    title: "Watch Your Audience Grow",
    description:
      "Sit back as TheSocialBrain publishes, optimizes, and engages your audience around the clock. Track results in real time.",
  },
]

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number]
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line & number */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-sm font-bold text-accent">
          {step.number}
        </div>
        {!isLast && (
          <div className="mt-3 h-full w-px bg-border" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-14 ${isLast ? "pb-0" : ""}`}>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {step.title}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
        {isLast && (
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Get started now
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              How it works
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              From zero to autopilot in four simple steps
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              No steep learning curve. No complicated setup. Connect your
              accounts and let TheSocialBrain handle the rest.
            </p>
          </div>

          {/* Right — Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
