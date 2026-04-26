import { SlideChrome } from "@/components/SlideChrome";

export default function Slide10Designer() {
  const items = [
    { label: "Body", sub: "Faster. Stronger.", anim: "0.4s", icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="20" r="10" fill="#00f0ff" />
        <path d="M40 32 L60 32 L70 60 L60 65 L55 50 L60 90 L52 92 L46 60 L40 92 L34 90 L38 50 L34 65 L24 60 Z" fill="#00f0ff" />
      </svg>
    )},
    { label: "Sense", sub: "Sharper. Clearer.", anim: "0.7s", icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <ellipse cx="50" cy="50" rx="44" ry="22" fill="none" stroke="#00f0ff" strokeWidth="4" />
        <circle cx="50" cy="50" r="14" fill="#00f0ff" />
        <circle cx="54" cy="46" r="4" fill="#060a1f" />
      </svg>
    )},
    { label: "Mind", sub: "Smarter. Calmer.", anim: "1s", icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M30 30 Q20 30 20 45 Q15 50 20 60 Q20 75 35 78 Q40 88 50 85 Q60 88 65 78 Q80 75 80 60 Q85 50 80 45 Q80 30 70 30 Q65 20 50 22 Q35 20 30 30 Z" fill="none" stroke="#00f0ff" strokeWidth="3" />
        <path d="M50 22 L50 85" stroke="#00f0ff" strokeWidth="2" />
      </svg>
    )},
  ];
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="10" />

      <div className="absolute top-[8vh] left-[6vw] right-[6vw] z-20"
           style={{ animation: "vanish-up 0.9s ease-out both" }}>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">10 / The Designer Menu</div>
        <h2 className="font-display font-bold text-[5vw] leading-[0.9] tracking-tight">
          Pick a trait.<br />
          <span className="text-primary text-glow">Order an upgrade.</span>
        </h2>
      </div>

      {/* Three trait icons */}
      <div className="absolute top-[44vh] left-[6vw] right-[6vw] grid grid-cols-3 gap-[3vw]">
        {items.map((it, i) => (
          <div key={it.label}
               className="relative aspect-square border border-primary/30 bg-deep/60 backdrop-blur p-[2vw] flex flex-col items-center justify-center cyan-shadow"
               style={{ animation: `morph-in 1s cubic-bezier(.2,.7,.2,1) ${it.anim} both, float-y ${3 + i * 0.4}s ease-in-out ${1.5 + i * 0.2}s infinite` }}>
            <div className="w-[55%] h-[55%]" style={{ filter: "drop-shadow(0 0 14px #00f0ff)" }}>{it.icon}</div>
            <div className="absolute bottom-[2vh] left-0 right-0 text-center">
              <div className="font-display font-bold text-[2vw]">{it.label}</div>
              <div className="font-mono text-[0.95vw] text-primary mt-[0.5vh]">{it.sub}</div>
            </div>
            <div className="absolute -top-[1px] -left-[1px] w-[1.5vw] h-[1.5vw] border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-[1px] -right-[1px] w-[1.5vw] h-[1.5vw] border-b-2 border-r-2 border-primary" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-[8vh] left-[6vw] right-[6vw] flex items-center justify-between z-20"
           style={{ animation: "vanish-up 1s ease-out 1.3s both" }}>
        <div className="font-mono text-[0.85vw] text-muted uppercase tracking-[0.3em]">Mnemonic</div>
        <div className="font-display font-bold text-[2.4vw]">
          <span className="text-primary">EDIT</span> = Enhance · Design · Improve · Traits
        </div>
      </div>
    </div>
  );
}
