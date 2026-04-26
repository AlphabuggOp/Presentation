import { SlideChrome } from "@/components/SlideChrome";

function DnaStrand({ color, glow }: { color: string; glow?: boolean }) {
  return (
    <svg viewBox="0 0 200 700" className="h-full" style={glow ? { filter: "drop-shadow(0 0 16px #ffd166)" } : { filter: "drop-shadow(0 0 6px rgba(120,130,160,0.4))" }}>
      {Array.from({ length: 26 }).map((_, i) => {
        const y = 20 + i * 26;
        const phase = (i / 26) * Math.PI * 4;
        const x1 = 100 + Math.sin(phase) * 60;
        const x2 = 100 - Math.sin(phase) * 60;
        return (
          <g key={i}>
            <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth="1.5" opacity="0.7" />
            <circle cx={x1} cy={y} r="4" fill={color} />
            <circle cx={x2} cy={y} r="4" fill={color} />
          </g>
        );
      })}
    </svg>
  );
}

export default function Slide11MoneyGap() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="11" />

      <div className="absolute top-[8vh] left-[6vw] right-[6vw] z-20"
           style={{ animation: "vanish-up 0.9s ease-out both" }}>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">11 / The Money Gap</div>
        <h2 className="font-display font-bold text-[5vw] leading-[0.9] tracking-tight">
          Will only the rich be<br />
          <span className="text-primary text-glow">"Super-Human"?</span>
        </h2>
      </div>

      {/* Two strands with crack between */}
      <div className="absolute inset-x-[6vw] bottom-[8vh] top-[40vh] grid grid-cols-2 items-center">
        <div className="flex justify-center h-full"
             style={{ animation: "slide-in-left 1.2s cubic-bezier(.2,.7,.2,1) 0.4s both" }}>
          <div className="relative h-[42vh] flex items-center">
            <DnaStrand color="#ffd166" glow />
            <div className="absolute -bottom-[5vh] left-1/2 -translate-x-1/2 font-mono text-[1vw] text-[#ffd166] uppercase tracking-[0.35em] whitespace-nowrap">$ Premium</div>
          </div>
        </div>
        <div className="flex justify-center h-full"
             style={{ animation: "slide-in-right 1.2s cubic-bezier(.2,.7,.2,1) 0.4s both" }}>
          <div className="relative h-[42vh] flex items-center">
            <DnaStrand color="#7d6a9e" />
            <div className="absolute -bottom-[5vh] left-1/2 -translate-x-1/2 font-mono text-[1vw] text-muted uppercase tracking-[0.35em] whitespace-nowrap">Standard</div>
          </div>
        </div>
      </div>

      {/* The Crack */}
      <div className="absolute inset-y-[20vh] left-1/2 -translate-x-1/2 w-[10vw] z-10 pointer-events-none">
        <svg viewBox="0 0 200 800" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M100 0 L120 80 L80 180 L130 280 L70 380 L120 480 L80 580 L110 680 L90 800"
            stroke="#b14dff"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1500"
            style={{ animation: "crack-grow 2s ease-out 1.2s both", filter: "drop-shadow(0 0 14px #b14dff)" }}
          />
        </svg>
      </div>
    </div>
  );
}
