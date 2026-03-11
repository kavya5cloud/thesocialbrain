"use client"

import { useEffect, useState } from "react"
import {
  ArrowUpRight,
  BarChart3,
  TrendingUp,
  Zap,
  Eye,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react"

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  delay = 0,
}: {
  target: number
  suffix?: string
  prefix?: string
  delay?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0
      const duration = 1800
      const stepTime = 16
      const steps = duration / stepTime
      const increment = target / steps

      const interval = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(interval)
        } else {
          setCount(Math.floor(start))
        }
      }, stepTime)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [target, delay])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function PulsingDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
    </span>
  )
}

const activityItems = [
  {
    platform: "Instagram",
    action: "Post published",
    time: "2m ago",
    icon: Heart,
    color: "text-amber-600",
  },
  {
    platform: "LinkedIn",
    action: "Article scheduled",
    time: "5m ago",
    icon: Share2,
    color: "text-yellow-600",
  },
  {
    platform: "X / Twitter",
    action: "Thread optimized",
    time: "8m ago",
    icon: MessageCircle,
    color: "text-foreground/50",
  },
]

export function DashboardPreview() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`relative transition-all duration-1000 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Glow effect behind the dashboard */}
      <div className="absolute -inset-4 rounded-3xl bg-accent/8 blur-3xl" />

      {/* Main dashboard card */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-amber-200/20">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              TheSocialBrain Dashboard
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PulsingDot />
            <span className="text-[10px] font-medium tracking-wide text-amber-600 uppercase">
              AI Active
            </span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5">
          {/* Stats row */}
          <div className="mb-5 grid grid-cols-3 gap-3">
            <StatCard
              label="Impressions"
              icon={Eye}
              delay={600}
              target={18240}
              suffix=""
              prefix=""
              change="+11%"
            />
            <StatCard
              label="Engagement"
              icon={TrendingUp}
              delay={800}
              target={1240}
              suffix=""
              prefix=""
              change="+9%"
            />
            <StatCard
              label="Growth Rate"
              icon={Zap}
              delay={1000}
              target={18}
              suffix="%"
              prefix=""
              change="+4.1pp"
            />
          </div>

          {/* Chart area */}
          <div className="mb-5 rounded-xl border border-border bg-secondary/30 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-medium text-foreground">
                  Audience Growth
                </span>
              </div>
              <span className="flex items-center gap-1 text-[10px] font-medium text-amber-600">
                <ArrowUpRight className="h-3 w-3" />
                +12.4%
              </span>
            </div>
            <MiniChart />
          </div>

          {/* Activity feed */}
          <div className="space-y-2">
            <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
              Live AI Activity
            </span>
            {activityItems.map((item, i) => (
              <ActivityRow key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  label,
  icon: Icon,
  delay,
  target,
  suffix,
  prefix,
  change,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  delay: number
  target: number
  suffix: string
  prefix: string
  change: string
}) {
  return (
    <div className="rounded-xl border border-border bg-secondary/30 p-3">
      <div className="mb-2 flex items-center gap-1.5">
        <Icon className="h-3 w-3 text-accent" />
        <span className="text-[10px] font-medium text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="text-lg font-bold text-foreground leading-none">
        <AnimatedCounter
          target={target}
          suffix={suffix}
          prefix={prefix}
          delay={delay}
        />
      </div>
      <span className="mt-1 inline-block text-[10px] font-medium text-amber-600">
        {change}
      </span>
    </div>
  )
}

function MiniChart() {
  const bars = [35, 52, 43, 65, 58, 72, 68, 85, 78, 92, 88, 95]
  const fillHeights = [78, 85, 72, 90, 82, 95, 88, 92, 86, 97, 91, 98]

  return (
    <div className="flex h-16 items-end gap-1">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-accent/30"
          style={{
            height: `${h}%`,
          }}
        >
          <div
            className="h-full w-full rounded-sm bg-accent/60"
            style={{
              height: `${fillHeights[i]}%`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

function ActivityRow({
  item,
  index,
}: {
  item: (typeof activityItems)[number]
  index: number
}) {
  const [visible, setVisible] = useState(false)
  const Icon = item.icon

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200 + index * 200)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      className={`flex items-center justify-between rounded-lg border border-border bg-secondary/20 px-3 py-2.5 transition-all duration-500 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <Icon className={`h-3.5 w-3.5 ${item.color}`} />
        <div>
          <span className="text-xs font-medium text-foreground">
            {item.platform}
          </span>
          <span className="ml-2 text-[10px] text-muted-foreground">
            {item.action}
          </span>
        </div>
      </div>
      <span className="text-[10px] text-muted-foreground">{item.time}</span>
    </div>
  )
}
