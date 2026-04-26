import { SlideChrome } from "@/components/SlideChrome";

export default function Slide14Cure() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="14" />

      <div className="absolute top-[8vh] left-[6vw] z-20"
           style={{ animation: "vanish-up 0.9s ease-out both" }}>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">14 / Summary</div>
        <h2 className="font-display font-bold text-[3vw] leading-tight tracking-tight text-muted">Remember it like this:</h2>
      </div>

      {/* C.U.R.E. */}
      <div className="absolute left-[6vw] right-[6vw] top-[28vh] flex items-start justify-between gap-[2vw]">
        {[
          { l: "C", w: "Cut", d: "Snip the broken letter from the strand.", anim: "0.4s" },
          { l: "U", w: "Understand", d: "Read the code. Find the misprint.", anim: "0.7s" },
          { l: "R", w: "Rewrite", d: "Slot the correct sequence in.", anim: "1s" },
          { l: "E", w: "Evolve", d: "Carry it forward into the next generation.", anim: "1.3s" },
        ].map((it) => (
          <div key={it.l} className="flex-1 relative"
               style={{ animation: `morph-in 1s cubic-bezier(.2,.7,.2,1) ${it.anim} both` }}>
            <div className="font-display font-bold text-[14vw] leading-none text-primary text-glow">
              {it.l}
              <span className="text-primary/40 text-[6vw] align-top">.</span>
            </div>
            <div className="mt-[1vh] font-display font-semibold text-[2.2vw] tracking-tight">{it.w}</div>
            <div className="mt-[1.5vh] font-mono text-[0.95vw] text-muted leading-relaxed max-w-[14vw]">{it.d}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[8vh] left-[6vw] right-[6vw] z-20 flex items-center justify-between"
           style={{ animation: "vanish-up 1s ease-out 1.6s both" }}>
        <div className="font-mono text-[0.9vw] text-muted uppercase tracking-[0.3em]">[ The whole protocol, in four letters. ]</div>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.3em]">CURE.PROTOCOL.v1</div>
      </div>
    </div>
  );
}
