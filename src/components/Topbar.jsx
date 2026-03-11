import { Bell, Search } from "lucide-react"

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/10 bg-slate-900/50 px-4 backdrop-blur-xl md:px-8">
      <div className="relative w-full max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-500"
        />
        <input
          type="text"
          placeholder="Search insights, posts, ideas..."
          className="w-full rounded-lg border border-white/10 bg-slate-950/60 py-2 pr-3 pl-9 text-sm text-slate-200 placeholder:text-slate-500 focus:border-blue-400/50 focus:outline-none"
        />
      </div>

      <div className="ml-4 flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg border border-white/10 bg-slate-950/60 p-2 text-slate-300 hover:text-slate-100"
        >
          <Bell size={16} />
        </button>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/60 px-2 py-1.5">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
          <span className="text-sm text-slate-200">Kavya</span>
        </div>
      </div>
    </header>
  )
}
