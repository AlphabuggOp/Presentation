import { SlideChrome } from "@/components/SlideChrome";

export default function Slide06GuideRNA() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="06" />

      {/* Map/GPS aligning to DNA strand */}
      <div className="absolute inset-0 grid grid-cols-2 items-center px-[6vw]">
        <div className="relative" style={{ animation: "morph-in 1.3s cubic-bezier(.2,.7,.2,1) both" }}>
          <div className="relative w-[34vw] h-[34vw] mx-auto">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#060a1f" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#mapGlow)" />
              {/* Topographic contour lines */}
              {[40, 70, 100, 130, 160].map((r) => (
                <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="rgba(0,240,255,0.4)" strokeWidth="1" strokeDasharray="3 4" />
              ))}
              {/* Grid */}
              <line x1="40" y1="200" x2="360" y2="200" stroke="rgba(0,240,255,0.25)" />
              <line x1="200" y1="40" x2="200" y2="360" stroke="rgba(0,240,255,0.25)" />
              {/* GPS pin */}
              <g style={{ animation: "float-y 2.4s ease-in-out infinite" }}>
                <path d="M200 130 L185 175 L215 175 Z" fill="#00f0ff" />
                <circle cx="200" cy="130" r="22" fill="#00f0ff" stroke="#ffffff" strokeWidth="3" />
                <circle cx="200" cy="130" r="8" fill="#060a1f" />
              </g>
              {/* Crosshair */}
              <circle cx="200" cy="200" r="36" fill="none" stroke="#00f0ff" strokeWidth="2" />
              <circle cx="200" cy="200" r="6" fill="#00f0ff" style={{ animation: "pulse-glow 1.6s ease-in-out infinite" }} />
            </svg>
            <div className="absolute -top-[2vh] left-1/2 -translate-x-1/2 font-mono text-[0.85vw] text-primary tracking-[0.3em] uppercase">guide.RNA</div>
          </div>
        </div>

        {/* DNA strand on the right */}
        <div className="relative h-[64vh] flex items-center justify-center"
             style={{ animation: "slide-in-right 1.2s ease-out 0.5s both" }}>
          <svg viewBox="0 0 200 600" className="h-full" style={{ filter: "drop-shadow(0 0 12px rgba(0,240,255,0.6))" }}>
            {Array.from({ length: 22 }).map((_, i) => {
              const y = 20 + i * 26;
              const phase = (i / 22) * Math.PI * 4;
              const x1 = 100 + Math.sin(phase) * 60;
              const x2 = 100 - Math.sin(phase) * 60;
              const isTarget = i === 11;
              return (
                <g key={i}>
                  <line x1={x1} y1={y} x2={x2} y2={y} stroke={isTarget ? "#ffffff" : "#00f0ff"} strokeWidth={isTarget ? 3 : 1.5} opacity={isTarget ? 1 : 0.6} />
                  <circle cx={x1} cy={y} r={isTarget ? 7 : 4} fill="#00f0ff" />
                  <circle cx={x2} cy={y} r={isTarget ? 7 : 4} fill="#ffffff" />
                </g>
              );
            })}
            {/* Alignment beam */}
            <line x1="-200" y1="306" x2="100" y2="306" stroke="#00f0ff" strokeWidth="2" strokeDasharray="4 4" opacity="0.7" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-[10vh] left-[6vw] right-[6vw] z-20 flex items-end justify-between gap-[3vw]">
        <h2 className="font-display font-bold text-[4.5vw] leading-[0.95] tracking-tight max-w-[50vw]"
            style={{ animation: "vanish-up 1s ease-out 0.8s both" }}>
          The Guide RNA<br />is the <span className="text-primary text-glow">GPS</span> for the scissors.
        </h2>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase pb-[2vh]">06 / Targeting</div>
      </div>
    </div>
  );
}
