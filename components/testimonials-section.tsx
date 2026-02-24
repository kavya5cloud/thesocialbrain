"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "TheSocialBrain completely transformed how we run social media. We went from 2 hours a day to 10 minutes of review. The AI-generated content is genuinely good.",
    author: "Sarah Chen",
    role: "Head of Marketing, Finley",
    rating: 5,
  },
  {
    quote:
      "We grew our LinkedIn following by 340% in three months without hiring a single additional person. The autonomous agents are like having a full social team.",
    author: "Marcus Rivera",
    role: "Founder & CEO, Vaultik",
    rating: 5,
  },
  {
    quote:
      "The scheduling intelligence alone is worth the price. Our engagement rates doubled once TheSocialBrain started optimizing our posting times automatically.",
    author: "Priya Kapoor",
    role: "VP of Growth, Novexa",
    rating: 5,
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number]
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
      className={`flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Stars */}
      <div className="mb-5 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-accent text-accent"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mb-8 flex-1 text-sm leading-relaxed text-foreground">
        {`"${testimonial.quote}"`}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
          {testimonial.author
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.author}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by fast-growing teams
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
            See how companies are scaling their social presence with
            TheSocialBrain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
