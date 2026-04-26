import { SlideChrome } from "@/components/SlideChrome";

export default function Slide01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="01" />

      {/* Spinning DNA strand SVG */}
      <div
        className="absolute right-[8vw] top-1/2 -translate-y-1/2 w-[42vw] h-[42vw]"
        style={{ animation: "morph-in 1.2s cubic-bezier(.2,.7,.2,1) both" }}
      >
        <div
          className="absolute inset-0"
          style={{ animation: "spin-slow 22s linear infinite" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="dnaA" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            {Array.from({ length: 22 }).map((_, i) => {
              const t = i / 22;
              const y = 20 + t * 360;
              const phase = t * Math.PI * 4;
              const x1 = 200 + Math.sin(phase) * 110;
              const x2 = 200 - Math.sin(phase) * 110;
              return (
                <g key={i} opacity={0.65 + 0.35 * Math.sin(phase)}>
                  <line x1={x1} y1={y} x2={x2} y2={y} stroke="url(#dnaA)" strokeWidth="2" opacity="0.6" />
                  <circle cx={x1} cy={y} r="4" fill="#00f0ff" />
                  <circle cx={x2} cy={y} r="4" fill="#ffffff" />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="absolute left-[6vw] top-1/2 -translate-y-1/2 max-w-[55vw] z-20">
        <div
          className="font-mono text-[0.95vw] text-primary tracking-[0.4em] uppercase mb-[3vh]"
          style={{ animation: "vanish-up 0.9s ease-out both" }}
        >
          [ Genome / Edit / Protocol ]
        </div>
        <h1
          className="font-display font-bold tracking-tighter text-[10vw] leading-[0.85] text-glow"
          style={{ animation: "morph-in 1.4s cubic-bezier(.2,.7,.2,1) 0.15s both" }}
        >
          CRISPR
        </h1>
        <div
          className="mt-[4vh] max-w-[42vw]"
          style={{ animation: "vanish-up 1s ease-out 0.7s both" }}
        >
          <div className="text-[1.6vw] text-text/90 leading-tight font-light">
            <span className="text-primary">"</span>We are the first species to hold the pen to our own life story.<span className="text-primary">"</span>
          </div>
          <div className="mt-[2.5vh] flex items-center gap-[1vw] font-mono text-[0.9vw] text-muted uppercase tracking-[0.3em]">
            <div className="h-[1px] w-[3vw] bg-primary" />
            The Hook
          </div>
        </div>
      </div>
    </div>
  );
}
