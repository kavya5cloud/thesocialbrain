export default function AnalyticsCard({ title, value, subtitle, trend }) {
  const positive = Number(trend) >= 0

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_40px_-30px_rgba(59,130,246,0.55)] backdrop-blur-xl">
      <div className="absolute -top-14 -right-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/25 to-purple-500/25 blur-2xl" />
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{title}</p>
      <p className="mt-3 text-2xl font-semibold text-slate-100">{value}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-slate-400">{subtitle}</p>
        {trend !== undefined && (
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              positive
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-rose-500/15 text-rose-300"
            }`}
          >
            {positive ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>
    </div>
  )
}
