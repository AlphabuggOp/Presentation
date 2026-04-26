import { SlideChrome } from "@/components/SlideChrome";

export default function Slide13Ripples() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="13" />

      {/* Ripples spreading from center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vh] h-[90vh] pointer-events-none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-primary"
            style={{
              animation: `ripple 4.5s cubic-bezier(.2,.7,.3,1) ${i * 0.7}s infinite`,
              boxShadow: "0 0 20px rgba(177,77,255,0.6)",
            }}
          />
        ))}
        {/* Drop point */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5vw] h-[1.5vw] rounded-full bg-primary cyan-shadow"
             style={{ animation: "pulse-glow 1.6s ease-in-out infinite", boxShadow: "0 0 40px #b14dff" }} />
      </div>

      <div className="absolute top-[8vh] left-[6vw] z-20"
           style={{ animation: "vanish-up 0.9s ease-out both" }}>
        <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[1.5vh]">13 / The Butterfly Effect</div>
        <h2 className="font-display font-bold text-[5vw] leading-[0.9] tracking-tight max-w-[60vw]">
          One change today<br />affects <span className="text-primary text-glow">1,000 years</span><br />of humans.
        </h2>
      </div>

      <div className="absolute bottom-[10vh] right-[6vw] max-w-[32vw] z-20 text-right"
           style={{ animation: "slide-in-right 1.2s ease-out 0.8s both" }}>
        <div className="font-mono text-[1vw] text-muted leading-relaxed border-r-2 border-primary pr-[1.5vw]">
          Every edit is heritable.<br />
          The drop falls once.<br />
          The ripples never stop.
        </div>
      </div>
    </div>
  );
}
