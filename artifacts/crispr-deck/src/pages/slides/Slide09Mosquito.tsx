import { SlideChrome } from "@/components/SlideChrome";

export default function Slide09Mosquito() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="09" />

      {/* Mosquito morphing into a NO symbol */}
      <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw]"
           style={{ animation: "morph-in 1.2s cubic-bezier(.2,.7,.2,1) both" }}>
        {/* Mosquito */}
        <div className="absolute inset-0 flex items-center justify-center"
             style={{ animation: "scale-out 1.4s ease-in 1.6s forwards" }}>
          <svg viewBox="0 0 400 400" className="w-[70%] h-[70%]" style={{ filter: "drop-shadow(0 0 20px #b14dff)" }}>
            {/* Body */}
            <ellipse cx="200" cy="220" rx="22" ry="55" fill="#b14dff" />
            <circle cx="200" cy="160" r="26" fill="#ffffff" />
            {/* Proboscis */}
            <line x1="200" y1="160" x2="200" y2="100" stroke="#b14dff" strokeWidth="3" />
            {/* Wings */}
            <ellipse cx="155" cy="190" rx="50" ry="20" fill="rgba(177,77,255,0.5)" transform="rotate(-25 155 190)" />
            <ellipse cx="245" cy="190" rx="50" ry="20" fill="rgba(177,77,255,0.5)" transform="rotate(25 245 190)" />
            {/* Legs */}
            {[-1, 0, 1].map((i) => (
              <g key={i}>
                <line x1="190" y1={200 + i * 20} x2={130 - i * 10} y2={260 + i * 20} stroke="#ffffff" strokeWidth="2" />
                <line x1="210" y1={200 + i * 20} x2={270 + i * 10} y2={260 + i * 20} stroke="#ffffff" strokeWidth="2" />
              </g>
            ))}
            {/* Antennae */}
            <line x1="190" y1="140" x2="170" y2="110" stroke="#ffffff" strokeWidth="2" />
            <line x1="210" y1="140" x2="230" y2="110" stroke="#ffffff" strokeWidth="2" />
          </svg>
        </div>

        {/* NO symbol that morphs in */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0"
             style={{ animation: "scale-in 1s cubic-bezier(.2,.7,.2,1) 1.7s forwards" }}>
          <div className="relative w-[60%] aspect-square">
            <div className="absolute inset-0 rounded-full border-[1.2vw] border-primary cyan-shadow" style={{ boxShadow: "0 0 60px #b14dff" }} />
            <div className="absolute top-1/2 left-[6%] right-[6%] h-[1.2vw] bg-primary -translate-y-1/2 rotate-45 origin-center" style={{ boxShadow: "0 0 30px #b14dff" }} />
          </div>
        </div>
      </div>

      <div className="absolute top-[6vh] left-[6vw] z-20"
           style={{ animation: "vanish-up 0.9s ease-out both" }}>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">09 / Editing Nature</div>
        <h2 className="font-display font-bold text-[5vw] leading-[0.9] tracking-tight max-w-[55vw]">
          Can we <span className="text-primary text-glow">delete</span><br />Malaria?
        </h2>
      </div>

      <div className="absolute bottom-[10vh] right-[6vw] max-w-[32vw] z-20 text-right"
           style={{ animation: "slide-in-right 1.1s ease-out 0.7s both" }}>
        <div className="font-mono text-[1.05vw] text-muted leading-relaxed">
          <span className="text-primary">{">"}</span> 600,000 deaths a year.<br />
          <span className="text-primary">{">"}</span> One mosquito species rewritten.<br />
          <span className="text-primary">{">"}</span> A whole disease, gone.
        </div>
      </div>
    </div>
  );
}
