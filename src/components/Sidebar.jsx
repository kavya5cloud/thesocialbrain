import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  WandSparkles,
  BrainCircuit,
  BarChart3,
  CalendarClock,
  Settings,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Post Generator", to: "/generator", icon: WandSparkles },
  { label: "Content Brain", to: "/brain", icon: BrainCircuit },
  { label: "Analytics", to: "/analytics", icon: BarChart3 },
  { label: "Scheduler", to: "/scheduler", icon: CalendarClock },
]

export default function Sidebar() {
  return (
    <aside className="w-full border-r border-white/10 bg-slate-950/70 px-4 py-6 backdrop-blur-xl md:w-72">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600" />
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">SaaS</p>
          <h1 className="text-lg font-semibold text-slate-100">Social Brain</h1>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-slate-100"
                    : "text-slate-300 hover:bg-white/5 hover:text-slate-100"
                }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          )
        })}

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-slate-100"
        >
          <Settings size={18} />
          Settings
        </button>
      </nav>
    </aside>
  )
}
