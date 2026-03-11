import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts"
import AnalyticsCard from "../components/AnalyticsCard"

const followers = [
  { day: "Mon", value: 2100 },
  { day: "Tue", value: 2250 },
  { day: "Wed", value: 2370 },
  { day: "Thu", value: 2490 },
  { day: "Fri", value: 2680 },
  { day: "Sat", value: 2840 },
  { day: "Sun", value: 2995 },
]

const ideas = [
  { name: "AI Agents", score: 88 },
  { name: "Vertical AI", score: 79 },
  { name: "Open Models", score: 71 },
  { name: "AI Policy", score: 63 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Overview</p>
        <h2 className="mt-1 text-2xl font-semibold">Dashboard</h2>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <AnalyticsCard title="Follower Growth" value="+1,240" subtitle="Last 30 days" trend={22.4} />
        <AnalyticsCard title="Engagement Rate" value="8.4%" subtitle="Across all posts" trend={3.1} />
        <AnalyticsCard title="Best Posting Time" value="11:30 AM" subtitle="Weekday average" trend={1.2} />
        <AnalyticsCard title="Trending Ideas" value="16" subtitle="High momentum topics" trend={18.7} />
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-medium text-slate-300">Follower Growth</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={followers}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    background: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "10px",
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="#60a5fa" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-medium text-slate-300">Trending Ideas</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ideas}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    background: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "10px",
                  }}
                />
                <Bar dataKey="score" radius={[8, 8, 0, 0]} fill="url(#ideaGradient)" />
                <defs>
                  <linearGradient id="ideaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  )
}
