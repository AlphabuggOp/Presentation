import { SlideChrome } from "@/components/SlideChrome";

export default function Slide04Keyboard() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="04" />

      <div className="absolute inset-0 grid grid-cols-[1.1fr_1fr] gap-[3vw] px-[6vw] py-[12vh]">
        {/* Left: keyboard with Ctrl+F */}
        <div className="flex items-center justify-center"
             style={{ animation: "morph-in 1.2s cubic-bezier(.2,.7,.2,1) both" }}>
          <div className="relative w-full max-w-[42vw] aspect-[16/9] bg-deep border border-primary/40 rounded-[1.5vw] p-[1.2vw] cyan-shadow">
            {[
              ["Q","W","E","R","T","Y","U","I","O","P"],
              ["A","S","D","F","G","H","J","K","L",";"],
              ["Z","X","C","V","B","N","M",",",".","/"],
            ].map((row, ri) => (
              <div key={ri} className="grid gap-[0.5vw] mb-[0.5vw]" style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}>
                {row.map((k) => (
                  <div key={k}
                       className={`aspect-square rounded-[0.4vw] flex items-center justify-center font-mono text-[1.2vw] ${k === "F" ? "bg-primary text-bg font-bold" : "bg-bg/60 text-text/70 border border-primary/15"}`}
                       style={k === "F" ? { animation: "pulse-glow 1.4s ease-in-out infinite", boxShadow: "0 0 30px #b14dff" } : undefined}>
                    {k}
                  </div>
                ))}
              </div>
            ))}
            <div className="grid grid-cols-[1.4fr_3fr_1.4fr_1fr_1fr] gap-[0.5vw]">
              <div className="rounded-[0.4vw] bg-primary text-bg font-mono font-bold text-[1vw] py-[1vw] flex items-center justify-center cyan-shadow"
                   style={{ animation: "pulse-glow 1.4s ease-in-out infinite", boxShadow: "0 0 30px #b14dff" }}>
                CTRL
              </div>
              <div className="rounded-[0.4vw] bg-bg/60 border border-primary/15" />
              <div className="rounded-[0.4vw] bg-bg/60 border border-primary/15" />
              <div className="rounded-[0.4vw] bg-bg/60 border border-primary/15" />
              <div className="rounded-[0.4vw] bg-bg/60 border border-primary/15" />
            </div>
            <div className="absolute -top-[3vh] right-[2vw] font-mono text-[0.9vw] text-primary tracking-[0.3em]">CTRL + F</div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="flex flex-col justify-center" style={{ animation: "vanish-up 1s ease-out 0.5s both" }}>
          <div className="font-mono text-[0.9vw] text-primary tracking-[0.4em] uppercase mb-[2vh]">04 / The Tool</div>
          <h2 className="font-display font-bold text-[4.5vw] leading-[0.95] tracking-tight">
            CRISPR is<br />nature's<br />
            <span className="text-primary text-glow">"Find &amp; Replace"</span><br />tool.
          </h2>
          <div className="mt-[4vh] font-mono text-[1.1vw] text-muted leading-relaxed border-l-2 border-primary pl-[1.5vw]">
            <span className="text-primary">{">"}</span> SEARCH: a single broken letter.<br />
            <span className="text-primary">{">"}</span> REPLACE: with the correct one.<br />
            <span className="text-primary">{">"}</span> SAVE: forever.
          </div>
        </div>
      </div>
    </div>
  );
}
