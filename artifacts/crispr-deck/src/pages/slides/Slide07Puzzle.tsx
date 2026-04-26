import { SlideChrome } from "@/components/SlideChrome";

export default function Slide07Puzzle() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="07" />

      <div className="absolute top-[10vh] left-[6vw] right-[6vw] z-20"
           style={{ animation: "vanish-up 0.9s ease-out both" }}>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">07 / The Edit Protocol</div>
        <h2 className="font-display font-bold text-[5vw] leading-[0.9] tracking-tight">
          Locate. <span className="text-primary">Snip.</span> Fix.
        </h2>
      </div>

      {/* Three steps */}
      <div className="absolute bottom-[10vh] left-[6vw] right-[6vw] grid grid-cols-3 gap-[2vw]">
        {[
          { n: "01", t: "Locate", d: "Guide RNA finds the broken letter inside 3.2 billion.", anim: "0.5s" },
          { n: "02", t: "Snip", d: "Cas9 cuts the DNA strand at the exact spot.", anim: "0.9s" },
          { n: "03", t: "Fix", d: "The new sequence slots in like the right puzzle piece.", anim: "1.3s" },
        ].map((step, i) => (
          <div
            key={step.n}
            className="relative bg-deep/70 border border-primary/30 p-[2vw] backdrop-blur cyan-shadow"
            style={{ animation: `morph-in 0.9s cubic-bezier(.2,.7,.2,1) ${step.anim} both` }}
          >
            <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] mb-[2vh]">STEP {step.n}</div>
            <div className="font-display font-bold text-[3.5vw] leading-none mb-[2.5vh] text-glow">{step.t}</div>
            {/* Puzzle piece illustration */}
            <div className="relative h-[14vh] mb-[2vh] flex items-center justify-center">
              <svg viewBox="0 0 200 100" className="h-full">
                <defs>
                  <linearGradient id={`pz${i}`} x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#b14dff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#b14dff" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M10 10 L80 10 Q80 30 100 30 Q120 30 120 10 L190 10 L190 90 L120 90 Q120 70 100 70 Q80 70 80 90 L10 90 Z"
                  fill={i === 1 ? "transparent" : `url(#pz${i})`}
                  stroke="#b14dff"
                  strokeWidth="2"
                  strokeDasharray={i === 1 ? "4 4" : "0"}
                />
                {i === 1 && (
                  <line x1="100" y1="0" x2="100" y2="100" stroke="#ffffff" strokeWidth="2" />
                )}
              </svg>
            </div>
            <div className="font-mono text-[1vw] text-muted leading-relaxed">{step.d}</div>
            <div className="absolute -top-[1px] -left-[1px] w-[2vw] h-[2vw] border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-[1px] -right-[1px] w-[2vw] h-[2vw] border-b-2 border-r-2 border-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
