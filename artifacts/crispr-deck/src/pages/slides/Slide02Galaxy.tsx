import { SlideChrome } from "@/components/SlideChrome";

export default function Slide02Galaxy() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="02" />

      {/* Galaxy backdrop with stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 120 }).map((_, i) => {
          const x = (i * 53) % 100;
          const y = (i * 37) % 100;
          const size = 0.1 + ((i * 7) % 5) * 0.08;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}vw`,
                height: `${size}vw`,
                opacity: 0.3 + ((i * 11) % 7) * 0.1,
                animation: `star-twinkle ${2 + (i % 5)}s ease-in-out ${i * 0.05}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* Galaxy spiral that morphs/zooms into a cell */}
      <div
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw]"
        style={{ animation: "morph-zoom 1.6s cubic-bezier(.2,.7,.2,1) both" }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="cellNuc" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#0066aa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#060a1f" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="membrane" cx="50%" cy="50%" r="50%">
              <stop offset="78%" stopColor="#00f0ff" stopOpacity="0" />
              <stop offset="92%" stopColor="#00f0ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="195" fill="url(#membrane)" />
          <circle cx="200" cy="200" r="80" fill="url(#cellNuc)" />
          {Array.from({ length: 6 }).map((_, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="200"
              rx="180"
              ry="55"
              fill="none"
              stroke="rgba(0,240,255,0.25)"
              strokeWidth="1"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}
        </svg>
      </div>

      <div className="absolute bottom-[12vh] left-[6vw] right-[6vw] z-20 flex items-end justify-between gap-[4vw]">
        <div style={{ animation: "vanish-up 1s ease-out 0.6s both" }} className="max-w-[40vw]">
          <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">02 / Origin</div>
          <h2 className="font-display font-bold text-[5vw] leading-[0.95] tracking-tight">
            From a galaxy<br />to a single cell.
          </h2>
        </div>
        <div
          className="border-l-2 border-primary pl-[1.5vw] max-w-[28vw]"
          style={{ animation: "slide-in-right 1.1s ease-out 0.9s both" }}
        >
          <div className="font-mono text-[0.85vw] text-muted uppercase tracking-[0.3em] mb-[1vh]">Mnemonic</div>
          <div className="font-display font-semibold text-[1.7vw] text-text leading-snug">
            <span className="text-primary">DNA</span> = Directions Never Altered
          </div>
          <div className="font-mono text-[1vw] text-primary/80 mt-[1vh]">// until now.</div>
        </div>
      </div>
    </div>
  );
}
