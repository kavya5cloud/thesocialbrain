"use client"

import {
  Bot,
  Calendar,
  BarChart3,
  Sparkles,
  Globe,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description:
      "AI agents that understand your brand voice and autonomously create content tailored to each platform.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Automatically find the optimal posting times based on audience behavior and engagement patterns.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description:
      "Real-time performance dashboards with AI-powered insights that drive actionable growth strategies.",
  },
  {
    icon: Sparkles,
    title: "Content Generation",
    description:
      "From captions to carousels, generate high-performing content at scale with a single prompt.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Sync",
    description:
      "Manage Instagram, LinkedIn, X, TikTok, and more from one unified command center.",
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description:
      "AI continuously A/B tests and refines your content to maximize reach and engagement.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need to dominate social
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            A complete AI-powered suite that handles every aspect of your social media presence, from creation to optimization.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
