import { SlideChrome } from "@/components/SlideChrome";

export default function Slide03Library() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="03" />

      {/* Library: shelves of glowing book spines that fly off */}
      <div className="absolute inset-0 flex flex-col justify-center gap-[2vh] px-[6vw]">
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="relative h-[14vh] border-b border-primary/20">
            <div className="absolute inset-x-0 bottom-0 flex gap-[0.4vw] items-end h-full">
              {Array.from({ length: 28 }).map((_, i) => {
                const h = 60 + ((i * 7 + row * 13) % 40);
                const fly = (i + row) % 6 === 0;
                const delay = 0.2 + ((i * 0.07) % 1.2);
                return (
                  <div
                    key={i}
                    className="relative"
                    style={{
                      width: "1.3vw",
                      height: `${h}%`,
                      background:
                        fly
                          ? "linear-gradient(180deg, #00f0ff, #0a1030)"
                          : "linear-gradient(180deg, #0a1030, #060a1f)",
                      borderTop: fly ? "2px solid #00f0ff" : "1px solid rgba(0,240,255,0.3)",
                      borderLeft: "1px solid rgba(0,240,255,0.15)",
                      borderRight: "1px solid rgba(0,240,255,0.15)",
                      animation: fly
                        ? `slide-in-right 1.4s cubic-bezier(.4,.1,.3,1) ${delay}s both, float-y ${3 + (i % 3)}s ease-in-out ${delay + 1.2}s infinite`
                        : `vanish-up 0.8s ease-out ${delay}s both`,
                      transform: fly ? `translateY(-${20 + (i % 4) * 5}vh) rotate(${(i % 5) - 2}deg)` : undefined,
                      boxShadow: fly ? "0 0 20px rgba(0,240,255,0.6)" : undefined,
                    }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="bg-bg/80 backdrop-blur-sm border border-primary/40 px-[4vw] py-[5vh] max-w-[55vw] cyan-shadow"
             style={{ animation: "morph-in 1.2s cubic-bezier(.2,.7,.2,1) 0.4s both" }}>
          <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[2vh]">03 / Premise</div>
          <h2 className="font-display font-bold text-[4.5vw] leading-[0.95] tracking-tight text-glow">
            DNA is the<br />
            <span className="text-primary">Instruction Manual</span><br />
            of you.
          </h2>
          <div className="mt-[3vh] font-mono text-[1.1vw] text-muted">
            3.2 billion letters. One library. One reader: <span className="text-primary">you</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
