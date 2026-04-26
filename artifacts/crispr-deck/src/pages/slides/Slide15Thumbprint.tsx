import { SlideChrome } from "@/components/SlideChrome";

export default function Slide15Thumbprint() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="15" />

      {/* Star field background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 200 }).map((_, i) => {
          const x = (i * 53) % 100;
          const y = (i * 41) % 100;
          const size = 0.08 + ((i * 7) % 5) * 0.06;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}vw`,
                height: `${size}vw`,
                opacity: 0.2 + ((i * 11) % 7) * 0.08,
                animation: `star-twinkle ${2 + (i % 5)}s ease-in-out ${i * 0.03}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* Thumbprint made of stars/dots, with slow zoom */}
      <div
        className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[55vh] h-[55vh]"
        style={{ animation: "morph-zoom 2.4s cubic-bezier(.2,.7,.2,1) both" }}
      >
        <svg viewBox="0 0 400 480" className="w-full h-full" style={{ filter: "drop-shadow(0 0 30px #b14dff)" }}>
          <defs>
            <radialGradient id="starG" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#b14dff" />
            </radialGradient>
          </defs>
          {/* Concentric thumbprint loops as dotted ovals */}
          {Array.from({ length: 14 }).map((_, ringIdx) => {
            const rx = 60 + ringIdx * 12;
            const ry = 80 + ringIdx * 14;
            const dots = 30 + ringIdx * 4;
            return (
              <g key={ringIdx}>
                {Array.from({ length: dots }).map((_, di) => {
                  // Make a partial loop (top portion open) to look like a thumbprint
                  const a = (di / dots) * Math.PI * 2 - Math.PI / 2;
                  // Skip a wedge at the top to imitate ridges break
                  const skip = a > -1.2 && a < -0.4 && ringIdx % 2 === 0;
                  if (skip) return null;
                  const cx = 200 + Math.cos(a) * rx;
                  const cy = 240 + Math.sin(a) * ry * 0.95;
                  const r = 1.2 + ((di + ringIdx) % 3) * 0.6;
                  return (
                    <circle
                      key={di}
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill="url(#starG)"
                      opacity={0.5 + ((di + ringIdx) % 5) * 0.1}
                      style={{ animation: `star-twinkle ${2 + ((di + ringIdx) % 5)}s ease-in-out ${(di * 0.02 + ringIdx * 0.05) % 3}s infinite` }}
                    />
                  );
                })}
              </g>
            );
          })}
          {/* A few cross-curves to look like ridges */}
          <path d="M150 180 Q200 160 250 180" stroke="#b14dff" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M140 280 Q200 300 260 280" stroke="#b14dff" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>
      </div>

      <div className="absolute top-[8vh] left-[6vw] z-20"
           style={{ animation: "vanish-up 0.9s ease-out both" }}>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">15 / Final Image</div>
        <div className="font-mono text-[0.95vw] text-muted uppercase tracking-[0.3em]">[ The Mic Drop ]</div>
      </div>

      <div className="absolute bottom-[10vh] left-[6vw] right-[6vw] z-20 text-center"
           style={{ animation: "vanish-up 1.4s ease-out 1.6s both" }}>
        <div className="font-display font-bold text-[4.5vw] leading-[0.95] tracking-tight text-glow">
          The code is written.<br />
          <span className="text-primary">Who gets the eraser?</span>
        </div>
        <div className="mt-[3vh] font-mono text-[0.95vw] text-muted uppercase tracking-[0.4em]">END / TRANSMISSION</div>
      </div>
    </div>
  );
}
