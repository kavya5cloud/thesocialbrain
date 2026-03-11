import { useMemo, useState } from "react"

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const seedPosts = [
  { id: "p1", title: "AI Hiring Thread", day: "Mon" },
  { id: "p2", title: "Geopolitics Breakdown", day: "Wed" },
  { id: "p3", title: "Regulation Quick Tips", day: null },
  { id: "p4", title: "Founder Story", day: "Fri" },
]

export default function Scheduler() {
  const [posts, setPosts] = useState(seedPosts)
  const [draggingId, setDraggingId] = useState(null)

  const upcoming = useMemo(
    () => posts.filter((post) => post.day).sort((a, b) => week.indexOf(a.day) - week.indexOf(b.day)),
    [posts]
  )

  const assignPost = (id, day) => {
    setPosts((prev) => prev.map((post) => (post.id === id ? { ...post, day } : post)))
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Planning</p>
        <h2 className="mt-1 text-2xl font-semibold">Scheduler</h2>
      </div>

      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h3 className="mb-4 text-sm font-medium text-slate-300">Calendar</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {week.map((day) => (
              <div
                key={day}
                className="min-h-40 rounded-xl border border-white/10 bg-slate-950/50 p-3"
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => draggingId && assignPost(draggingId, day)}
              >
                <p className="mb-2 text-xs font-medium tracking-wide text-slate-400 uppercase">{day}</p>
                <div className="space-y-2">
                  {posts
                    .filter((post) => post.day === day)
                    .map((post) => (
                      <div
                        key={post.id}
                        draggable
                        onDragStart={() => setDraggingId(post.id)}
                        className="cursor-grab rounded-md border border-blue-400/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-2 py-1.5 text-xs text-slate-100"
                      >
                        {post.title}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <h4 className="mt-6 mb-3 text-sm font-medium text-slate-300">Unscheduled Posts</h4>
          <div className="flex flex-wrap gap-2">
            {posts
              .filter((post) => !post.day)
              .map((post) => (
                <div
                  key={post.id}
                  draggable
                  onDragStart={() => setDraggingId(post.id)}
                  className="cursor-grab rounded-md border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-200"
                >
                  {post.title}
                </div>
              ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-medium text-slate-300">Upcoming Posts</h3>
          <ul className="mt-4 space-y-3">
            {upcoming.map((post) => (
              <li key={post.id} className="rounded-lg border border-white/10 bg-slate-950/60 p-3">
                <p className="text-sm text-slate-100">{post.title}</p>
                <p className="mt-1 text-xs text-slate-400">Scheduled: {post.day}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
