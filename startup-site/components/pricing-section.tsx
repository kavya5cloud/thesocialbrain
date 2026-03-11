"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For creators and solopreneurs getting started with AI-driven social media.",
    features: [
      "3 social accounts",
      "500 AI-generated posts/mo",
      "Basic analytics dashboard",
      "Smart scheduling",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    description: "For growing brands that need advanced automation and multi-platform presence.",
    features: [
      "10 social accounts",
      "Unlimited AI posts",
      "Advanced analytics & insights",
      "Autonomous AI agents",
      "Custom brand voice training",
      "Workflow automation",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need full control, compliance, and dedicated support.",
    features: [
      "Unlimited social accounts",
      "Unlimited AI posts",
      "Full analytics suite",
      "Custom AI model training",
      "Team collaboration tools",
      "API access & webhooks",
      "Dedicated success manager",
      "SSO & compliance",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[number]
  index: number
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-700 ${
        plan.highlighted
          ? "border-accent bg-card shadow-xl shadow-accent/10 ring-1 ring-accent/20"
          : "border-border bg-card"
      } ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
        {plan.period && (
          <span className="text-base text-muted-foreground">{plan.period}</span>
        )}
      </div>

      <ul className="mb-10 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full rounded-full text-sm font-medium ${
          plan.highlighted
            ? "bg-accent text-accent-foreground hover:bg-accent/90"
            : "bg-secondary text-foreground hover:bg-secondary/80"
        }`}
      >
        {plan.cta}
      </Button>
    </div>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Start free. Scale when you are ready. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
