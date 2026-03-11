import { useMemo, useState } from "react"
import ReactFlow, { Background, Controls, MiniMap } from "@xyflow/react"
import "@xyflow/react/dist/style.css"

const initialNodes = [
  { id: "1", data: { label: "AI" }, position: { x: 250, y: 20 } },
  { id: "2", data: { label: "AI Startups" }, position: { x: 80, y: 140 } },
  { id: "3", data: { label: "AI Geopolitics" }, position: { x: 250, y: 140 } },
  { id: "4", data: { label: "AI Regulation" }, position: { x: 430, y: 140 } },
  { id: "5", data: { label: "AI Future" }, position: { x: 250, y: 260 } },
]

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
]

const ideaMap = {
  AI: ["Explain one AI myth your audience still believes.", "Create a beginner roadmap for AI skills."],
  "AI Startups": [
    "Break down a real GTM strategy for an AI startup.",
    "Share 3 pricing mistakes in early AI products.",
  ],
  "AI Geopolitics": [
    "Compare AI policy direction across two regions.",
    "Discuss compute and chip supply as strategic leverage.",
  ],
  "AI Regulation": [
    "Summarize one regulation update and business impact.",
    "Post a founder checklist for AI compliance readiness.",
  ],
  "AI Future": [
    "Predict 3 changes creators will feel in 24 months.",
    "Write a contrarian view on human + AI workflows.",
  ],
}

export default function Brain() {
  const [selected, setSelected] = useState("AI")

  const ideas = useMemo(() => ideaMap[selected] || [], [selected])

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Ideation</p>
        <h2 className="mt-1 text-2xl font-semibold">Content Brain</h2>
      </div>

      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <div className="h-[520px] rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            fitView
            onNodeClick={(_, node) => setSelected(node.data.label)}
          >
            <MiniMap />
            <Controls />
            <Background color="#334155" gap={20} />
          </ReactFlow>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-medium text-slate-300">Ideas for {selected}</h3>
          <div className="mt-4 space-y-3">
            {ideas.map((idea) => (
              <button
                key={idea}
                type="button"
                className="w-full rounded-lg border border-white/10 bg-slate-950/60 p-3 text-left text-sm text-slate-100 hover:border-blue-400/30"
              >
                {idea}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
