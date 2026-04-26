import { useEffect, useState } from "react";
import { SlideChrome } from "@/components/SlideChrome";

function DoubleHelix() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      setPhase(((t - start) / 1000) * 1.4);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const RUNGS = 26;
  const TURNS = 2.2;
  const cx = 200;
  const amp = 110;
  const yTop = 30;
  const yBottom = 370;

  const rungs = Array.from({ length: RUNGS }).map((_, i) => {
    const t = i / (RUNGS - 1);
    const y = yTop + t * (yBottom - yTop);
    const angle = t * Math.PI * 2 * TURNS + phase;
    const x1 = cx + Math.sin(angle) * amp;
    const x2 = cx - Math.sin(angle) * amp;
    const depth = Math.cos(angle);
    return { i, y, x1, x2, depth };
  });

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id="strandA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b14dff" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#b14dff" stopOpacity="1" />
          <stop offset="100%" stopColor="#b14dff" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="strandB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="#b14dff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#b14dff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* backbone strand A (cyan) */}
      <path
        d={rungs.map((r, i) => `${i === 0 ? "M" : "L"} ${r.x1.toFixed(2)} ${r.y.toFixed(2)}`).join(" ")}
        fill="none"
        stroke="url(#strandA)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 8px #b14dff)" }}
      />
      {/* backbone strand B (white) */}
      <path
        d={rungs.map((r, i) => `${i === 0 ? "M" : "L"} ${r.x2.toFixed(2)} ${r.y.toFixed(2)}`).join(" ")}
        fill="none"
        stroke="url(#strandB)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 6px #ffffff)" }}
      />

      {/* rungs (base pairs) — opacity & width by depth so back-of-helix recedes */}
      {rungs.map((r) => {
        const front = (r.depth + 1) / 2;
        const opacity = 0.18 + front * 0.6;
        const width = 1.2 + front * 1.6;
        return (
          <line
            key={`rung-${r.i}`}
            x1={r.x1}
            y1={r.y}
            x2={r.x2}
            y2={r.y}
            stroke="#b14dff"
            strokeWidth={width}
            opacity={opacity}
          />
        );
      })}

      {/* nodes — bigger & brighter when in front */}
      {rungs.map((r) => {
        const frontA = (Math.cos(r.i / (RUNGS - 1) * Math.PI * 2 * TURNS + phase) + 1) / 2;
        const frontB = 1 - frontA;
        const radiusA = 2.2 + frontA * 3.2;
        const radiusB = 2.2 + frontB * 3.2;
        return (
          <g key={`nodes-${r.i}`}>
            <circle cx={r.x1} cy={r.y} r={radiusA + 6} fill="url(#nodeGlow)" opacity={frontA * 0.7} />
            <circle cx={r.x1} cy={r.y} r={radiusA} fill="#b14dff" opacity={0.5 + frontA * 0.5} />
            <circle cx={r.x2} cy={r.y} r={radiusB} fill="#ffffff" opacity={0.5 + frontB * 0.5} />
          </g>
        );
      })}
    </svg>
  );
}

export default function Slide01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="01" />

      <div
        className="absolute right-[8vw] top-1/2 -translate-y-1/2 w-[42vw] h-[42vw]"
        style={{ animation: "morph-in 1.2s cubic-bezier(.2,.7,.2,1) both" }}
      >
        <DoubleHelix />
      </div>

      <div className="absolute left-[6vw] top-1/2 -translate-y-1/2 max-w-[55vw] z-20">
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
