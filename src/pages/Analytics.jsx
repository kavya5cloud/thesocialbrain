import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts"

const growthData = [
  { week: "W1", followers: 1800, engagement: 6.2 },
  { week: "W2", followers: 2050, engagement: 6.7 },
  { week: "W3", followers: 2290, engagement: 7.1 },
  { week: "W4", followers: 2570, engagement: 7.8 },
  { week: "W5", followers: 2810, engagement: 8.0 },
  { week: "W6", followers: 3120, engagement: 8.4 },
]

const postData = [
  { post: "AI founder story", score: 92 },
  { post: "Regulation update", score: 81 },
  { post: "Hiring AI team", score: 74 },
  { post: "Trend breakdown", score: 88 },
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Performance</p>
        <h2 className="mt-1 text-2xl font-semibold">Analytics</h2>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-medium text-slate-300">Follower Growth</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="week" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "10px" }}
                />
                <Line dataKey="followers" stroke="#60a5fa" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-medium text-slate-300">Engagement Chart</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="week" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "10px" }}
                />
                <Area type="monotone" dataKey="engagement" stroke="#a855f7" fill="#a855f733" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <h3 className="text-sm font-medium text-slate-300">Top Performing Posts</h3>
        <div className="mt-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={postData} layout="vertical" margin={{ left: 20, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis dataKey="post" type="category" stroke="#94a3b8" width={120} />
              <Tooltip
                contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "10px" }}
              />
              <Bar dataKey="score" radius={[0, 8, 8, 0]} fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
