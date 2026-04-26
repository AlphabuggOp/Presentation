import { SlideChrome } from "@/components/SlideChrome";
import dnaImage from "@assets/IMG_1216_1777180879074.jpeg";

export default function Slide01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="01" />

      <div
        className="absolute -right-[10vw] top-1/2 w-[72vw] h-[72vw] pointer-events-none"
        style={{
          transform: "translateY(-50%) rotate(18deg)",
          transformOrigin: "60% 50%",
        }}
      >
        <div
          className="w-full h-full"
          style={{ animation: "morph-in 1.4s cubic-bezier(.2,.7,.2,1) both" }}
        >
          <div
            className="w-full h-full"
            style={{ animation: "float-y 6s ease-in-out infinite" }}
          >
            <img
              src={dnaImage}
              alt="DNA double helix"
              className="w-full h-full object-contain"
              style={{
                mixBlendMode: "lighten",
                filter: "brightness(1.1) contrast(1.4) saturate(1.15)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute left-[6vw] top-1/2 -translate-y-1/2 max-w-[46vw] z-20">
        <div
          className="font-mono text-[0.95vw] text-primary tracking-[0.4em] uppercase mb-[3vh]"
          style={{ animation: "vanish-up 0.9s ease-out both" }}
        >
          [ Genome / Edit / Protocol ]
        </div>
        <h1
          className="font-display font-bold tracking-tighter text-[10vw] leading-[0.85] text-glow"
          style={{ animation: "morph-in 1.4s cubic-bezier(.2,.7,.2,1) 0.15s both" }}
        >
          CRISPR
        </h1>
        <div
          className="mt-[4vh] max-w-[42vw]"
          style={{ animation: "vanish-up 1s ease-out 0.7s both" }}
        >
          <div className="text-[1.6vw] text-text/90 leading-tight font-light">
            <span className="text-primary">"</span>We are the first species to hold the pen to our own life story.<span className="text-primary">"</span>
          </div>
          <div className="mt-[2.5vh] flex items-center gap-[1vw] font-mono text-[0.9vw] text-muted uppercase tracking-[0.3em]">
            <div className="h-[1px] w-[3vw] bg-primary" />
            The Hook
          </div>
        </div>
      </div>
    </div>
  );
}
