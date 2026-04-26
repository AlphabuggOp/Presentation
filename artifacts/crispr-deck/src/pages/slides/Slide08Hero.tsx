import { SlideChrome } from "@/components/SlideChrome";

export default function Slide08Hero() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="08" />

      <div className="absolute inset-0 grid grid-cols-[1fr_1.2fr] px-[6vw] py-[12vh] gap-[3vw]">
        {/* Left: medical hero figure */}
        <div className="relative flex items-end justify-center"
             style={{ animation: "morph-in 1.4s cubic-bezier(.2,.7,.2,1) both" }}>
          <svg viewBox="0 0 300 500" className="h-[68vh]" style={{ filter: "drop-shadow(0 0 20px rgba(0,240,255,0.5))" }}>
            <defs>
              <linearGradient id="figG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#00f0ff" />
              </linearGradient>
            </defs>
            {/* Cane that fades out */}
            <line x1="80" y1="240" x2="60" y2="480" stroke="rgba(120,140,180,0.8)" strokeWidth="6" strokeLinecap="round"
                  style={{ animation: "scale-out 1.6s ease-out 1.2s both", transformOrigin: "60px 480px" }} />
            <circle cx="80" cy="232" r="10" fill="rgba(120,140,180,0.8)"
                    style={{ animation: "scale-out 1.6s ease-out 1.2s both", transformOrigin: "80px 232px" }} />
            {/* Standing figure */}
            <g style={{ animation: "vanish-up 1.2s ease-out 0.5s both" }}>
              <circle cx="150" cy="80" r="40" fill="url(#figG)" />
              <path d="M110 130 L190 130 L200 280 L160 290 L150 280 L140 290 L100 280 Z" fill="url(#figG)" />
              <line x1="150" y1="280" x2="130" y2="470" stroke="url(#figG)" strokeWidth="22" strokeLinecap="round" />
              <line x1="150" y1="280" x2="170" y2="470" stroke="url(#figG)" strokeWidth="22" strokeLinecap="round" />
              <line x1="115" y1="160" x2="80" y2="240" stroke="url(#figG)" strokeWidth="18" strokeLinecap="round" />
              <line x1="185" y1="160" x2="220" y2="260" stroke="url(#figG)" strokeWidth="18" strokeLinecap="round" />
            </g>
          </svg>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[18vw] h-[1px] bg-primary" />
        </div>

        {/* Right: copy */}
        <div className="flex flex-col justify-center">
          <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[2vh]"
               style={{ animation: "vanish-up 0.9s ease-out 0.3s both" }}>
            08 / The Cures
          </div>
          <h2 className="font-display font-bold text-[5vw] leading-[0.9] tracking-tight"
              style={{ animation: "vanish-up 1s ease-out 0.5s both" }}>
            Stand taller.<br />Walk forward.
          </h2>
          <div className="mt-[5vh] grid grid-cols-2 gap-[1.5vw]"
               style={{ animation: "vanish-up 1s ease-out 0.9s both" }}>
            <div className="border-l-2 border-primary pl-[1.2vw]">
              <div className="font-mono text-[0.85vw] text-muted uppercase tracking-[0.3em]">CRISPR vs.</div>
              <div className="font-display font-bold text-[2vw] mt-[1vh]">Sickle Cell</div>
              <div className="font-mono text-[0.95vw] text-primary mt-[1vh]">// FDA approved 2023</div>
            </div>
            <div className="border-l-2 border-primary pl-[1.2vw]">
              <div className="font-mono text-[0.85vw] text-muted uppercase tracking-[0.3em]">CRISPR vs.</div>
              <div className="font-display font-bold text-[2vw] mt-[1vh]">Blindness</div>
              <div className="font-mono text-[0.95vw] text-primary mt-[1vh]">// trials underway</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
