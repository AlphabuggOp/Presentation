import { SlideChrome } from "@/components/SlideChrome";

export default function Slide05Cas9() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="05" />

      {/* Floating scissors */}
      <div
        className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[34vw] h-[34vw]"
        style={{ animation: "morph-in 1.4s cubic-bezier(.2,.7,.2,1) both" }}
      >
        <div className="w-full h-full" style={{ animation: "float-y 4s ease-in-out 1.4s infinite" }}>
          <svg viewBox="0 0 400 400" className="w-full h-full" style={{ filter: "drop-shadow(0 0 30px #b14dff)" }}>
            <defs>
              <linearGradient id="bladeG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#b14dff" />
              </linearGradient>
            </defs>
            {/* Pivot */}
            <circle cx="200" cy="200" r="14" fill="#07030f" stroke="#b14dff" strokeWidth="3" />
            {/* Upper blade */}
            <g style={{ transformOrigin: "200px 200px", animation: "tilt-left 2s cubic-bezier(.4,.1,.3,1) 1.6s both" }}>
              <path d="M200 200 L370 70 L390 90 L210 220 Z" fill="url(#bladeG)" stroke="#b14dff" strokeWidth="2" />
              <circle cx="120" cy="280" r="48" fill="none" stroke="#b14dff" strokeWidth="6" />
              <line x1="200" y1="200" x2="155" y2="240" stroke="#b14dff" strokeWidth="6" />
            </g>
            {/* Lower blade */}
            <g style={{ transformOrigin: "200px 200px", animation: "tilt-left 2s cubic-bezier(.4,.1,.3,1) 1.6s both", animationDirection: "reverse" }}>
              <path d="M200 200 L370 330 L390 310 L210 180 Z" fill="url(#bladeG)" stroke="#b14dff" strokeWidth="2" />
              <circle cx="120" cy="120" r="48" fill="none" stroke="#b14dff" strokeWidth="6" />
              <line x1="200" y1="200" x2="155" y2="160" stroke="#b14dff" strokeWidth="6" />
            </g>
          </svg>
        </div>
      </div>

      <div className="absolute top-[6vh] left-[6vw] z-20" style={{ animation: "vanish-up 0.9s ease-out both" }}>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">05 / The Scissors</div>
        <h2 className="font-display font-bold text-[5vw] leading-[0.9] tracking-tight">Cas9.</h2>
      </div>

      <div
        className="absolute bottom-[12vh] right-[6vw] max-w-[34vw] border border-primary/40 bg-bg/70 backdrop-blur p-[2.5vw] cyan-shadow z-20"
        style={{ animation: "slide-in-right 1.1s ease-out 0.8s both" }}
      >
        <div className="font-mono text-[0.85vw] text-muted uppercase tracking-[0.3em] mb-[1vh]">Mnemonic</div>
        <div className="font-display font-bold text-[2.2vw] leading-tight">
          <span className="text-primary">Cas9</span> = Cuts At<br />
          Specific <span className="text-primary">9</span> spots.
        </div>
      </div>
    </div>
  );
}
