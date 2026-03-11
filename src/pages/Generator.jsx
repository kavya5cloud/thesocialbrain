import { useState } from "react"
import { Copy, WandSparkles } from "lucide-react"

const templates = {
  professional: "Today we're sharing practical lessons from {topic} that leaders can apply this quarter.",
  viral: "This {topic} shift is happening faster than most people realize. Here's what changes next.",
  storytelling:
    "Two years ago, we underestimated {topic}. That mistake taught us a playbook worth sharing.",
}

export default function Generator() {
  const [platform, setPlatform] = useState("X")
  const [topic, setTopic] = useState("")
  const [tone, setTone] = useState("professional")
  const [result, setResult] = useState(null)

  const generatePost = () => {
    const safeTopic = topic.trim() || "AI content strategy"
    const hook = `Hot take for ${platform}: ${safeTopic} is the unfair advantage in 2026.`
    const body = templates[tone].replace("{topic}", safeTopic)
    const hashtags = `#AI #SocialBrain #${safeTopic.replace(/\s+/g, "")}`

    setResult({ hook, body, hashtags })
  }

  const copyText = async (text) => {
    await navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">AI Tools</p>
        <h2 className="mt-1 text-2xl font-semibold">Post Generator</h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="space-y-4">
            <label className="block space-y-2">
              <span className="text-sm text-slate-300">Platform</span>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 p-2.5 text-sm"
              >
                <option value="X">X</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
            </label>

            <label className="block space-y-2">
              <span className="text-sm text-slate-300">Topic</span>
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. AI geopolitics"
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 p-2.5 text-sm"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm text-slate-300">Tone</span>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 p-2.5 text-sm"
              >
                <option value="professional">professional</option>
                <option value="viral">viral</option>
                <option value="storytelling">storytelling</option>
              </select>
            </label>

            <button
              type="button"
              onClick={generatePost}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2.5 text-sm font-medium"
            >
              <WandSparkles size={16} />
              Generate Post
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: "Hook", value: result?.hook || "Generate to preview your hook." },
            {
              label: "Generated Post",
              value: result?.body || "Your generated long-form post will appear here.",
            },
            { label: "Hashtags", value: result?.hashtags || "#AI #SocialBrain" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-300">{item.label}</h3>
                <button
                  type="button"
                  onClick={() => copyText(item.value)}
                  className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-slate-950/60 px-2 py-1 text-xs text-slate-300"
                >
                  <Copy size={14} />
                  Copy
                </button>
              </div>
              <p className="text-sm leading-6 text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
