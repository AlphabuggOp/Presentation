import { SlideChrome } from "@/components/SlideChrome";

export default function Slide05Cas9() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="05" />

      {/* Floating scissors */}
      <div
        className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[44vw] h-[44vw]"
        style={{ animation: "morph-in 1.4s cubic-bezier(.2,.7,.2,1) both" }}
      >
        <div className="w-full h-full" style={{ animation: "float-y 4s ease-in-out 1.4s infinite" }}>
          <svg viewBox="0 0 400 400" className="w-full h-full" style={{ filter: "drop-shadow(0 0 30px #b14dff)" }}>
            <defs>
              <linearGradient id="bladeG" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7a2dc4" />
                <stop offset="50%" stopColor="#e9c8ff" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="handleG" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3a0a5a" />
                <stop offset="100%" stopColor="#b14dff" />
              </linearGradient>
            </defs>

            {/* Upper scissor half: blade goes up-right, handle ring at lower-left */}
            <g style={{ transformOrigin: "200px 200px", animation: "scissor-upper 2.2s cubic-bezier(.4,.1,.3,1) 1.4s both" }}>
              {/* Handle arm from pivot down-left */}
              <line x1="200" y1="200" x2="118" y2="282" stroke="url(#handleG)" strokeWidth="16" strokeLinecap="round" />
              {/* Handle ring */}
              <circle cx="92" cy="308" r="34" fill="none" stroke="#b14dff" strokeWidth="14" />
              {/* Blade — tapered triangle from pivot to upper-right tip */}
              <path d="M196 194 L380 65 L205 207 Z" fill="url(#bladeG)" stroke="#b14dff" strokeWidth="1.5" />
            </g>

            {/* Lower scissor half: blade goes down-right, handle ring at upper-left */}
            <g style={{ transformOrigin: "200px 200px", animation: "scissor-lower 2.2s cubic-bezier(.4,.1,.3,1) 1.4s both" }}>
              <line x1="200" y1="200" x2="118" y2="118" stroke="url(#handleG)" strokeWidth="16" strokeLinecap="round" />
              <circle cx="92" cy="92" r="34" fill="none" stroke="#b14dff" strokeWidth="14" />
              <path d="M195 207 L380 335 L205 194 Z" fill="url(#bladeG)" stroke="#b14dff" strokeWidth="1.5" />
            </g>

            {/* Pivot screw — drawn last so it sits on top */}
            <circle cx="200" cy="200" r="11" fill="#1a0a2e" stroke="#b14dff" strokeWidth="3" />
            <circle cx="200" cy="200" r="3" fill="#b14dff" />
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
