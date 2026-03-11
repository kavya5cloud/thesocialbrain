"use client"

export function HeroBackground() {
  return (
    <>
      {/* Primary radial glow — top center warm gold */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.88 0.16 85), transparent 70%)",
        }}
      />

      {/* Secondary glow — right side amber */}
      <div
        className="pointer-events-none absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.85 0.14 80), transparent 70%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.40 0 0) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </>
  )
}
