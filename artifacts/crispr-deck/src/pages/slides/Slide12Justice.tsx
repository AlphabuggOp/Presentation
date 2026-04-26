import { SlideChrome } from "@/components/SlideChrome";

export default function Slide12Justice() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="12" />

      <div className="absolute top-[8vh] left-[6vw] right-[6vw] z-20"
           style={{ animation: "vanish-up 0.9s ease-out both" }}>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">12 / Who Decides</div>
        <h2 className="font-display font-bold text-[5vw] leading-[0.9] tracking-tight">
          The lab coat<br />
          <span className="text-primary">vs.</span> the gavel.
        </h2>
      </div>

      {/* Tipping scale */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[42vh] w-[55vw]"
           style={{ animation: "morph-in 1.3s cubic-bezier(.2,.7,.2,1) both" }}>
        <svg viewBox="0 0 800 380" className="w-full" style={{ filter: "drop-shadow(0 0 20px rgba(177,77,255,0.4))" }}>
          {/* Stand */}
          <rect x="395" y="80" width="10" height="280" fill="#b14dff" />
          <rect x="350" y="350" width="100" height="14" fill="#b14dff" />
          <circle cx="400" cy="80" r="14" fill="#b14dff" />

          {/* Tilted beam */}
          <g style={{ transformOrigin: "400px 80px", transform: "rotate(-12deg)", animation: "tilt-left 1.6s cubic-bezier(.4,.1,.3,1) 0.6s both" }}>
            <line x1="120" y1="80" x2="680" y2="80" stroke="#b14dff" strokeWidth="6" />

            {/* Left pan: lab coat */}
            <line x1="160" y1="80" x2="160" y2="160" stroke="#b14dff" strokeWidth="2" />
            <path d="M80 170 Q160 200 240 170 L220 200 Q160 215 100 200 Z" fill="rgba(177,77,255,0.2)" stroke="#b14dff" strokeWidth="3" />
            <g transform="translate(125 130)">
              <path d="M0 0 L70 0 L60 -30 L40 -10 L30 -10 L10 -30 Z" fill="#ffffff" />
              <circle cx="35" cy="-30" r="14" fill="#ffffff" />
            </g>

            {/* Right pan: gavel */}
            <line x1="640" y1="80" x2="640" y2="160" stroke="#b14dff" strokeWidth="2" />
            <path d="M560 170 Q640 200 720 170 L700 200 Q640 215 580 200 Z" fill="rgba(177,77,255,0.2)" stroke="#b14dff" strokeWidth="3" />
            <g transform="translate(595 110) rotate(-15)">
              <rect x="0" y="0" width="80" height="30" rx="4" fill="#ffffff" />
              <rect x="32" y="30" width="14" height="50" fill="#ffffff" />
            </g>
          </g>
        </svg>
      </div>

      <div className="absolute bottom-[8vh] left-[6vw] right-[6vw] grid grid-cols-2 gap-[4vw] z-20">
        <div style={{ animation: "slide-in-left 1.1s ease-out 1s both" }}>
          <div className="font-mono text-[0.85vw] text-muted uppercase tracking-[0.3em]">Scientists</div>
          <div className="font-display font-bold text-[2.2vw] mt-[1vh] text-primary">Can we?</div>
        </div>
        <div className="text-right" style={{ animation: "slide-in-right 1.1s ease-out 1s both" }}>
          <div className="font-mono text-[0.85vw] text-muted uppercase tracking-[0.3em]">Lawmakers</div>
          <div className="font-display font-bold text-[2.2vw] mt-[1vh] text-primary">Should we?</div>
        </div>
      </div>
    </div>
  );
}
