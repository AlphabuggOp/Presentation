import { useEffect, useState } from "react";
import { SlideChrome } from "@/components/SlideChrome";

function DoubleHelix() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      setPhase(((t - start) / 1000) * 1.6);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const RUNGS = 30;
  const TURNS = 2.4;
  const cx = 200;
  const amp = 95;
  const yTop = 30;
  const yBottom = 540;

  const items = Array.from({ length: RUNGS }).map((_, i) => {
    const t = i / (RUNGS - 1);
    const y = yTop + t * (yBottom - yTop);
    const angle = t * Math.PI * 2 * TURNS + phase;
    const sx = Math.sin(angle);
    const cz = Math.cos(angle);
    const x1 = cx + sx * amp;
    const x2 = cx - sx * amp;
    const depthA = (cz + 1) / 2;
    const depthB = 1 - depthA;
    return { i, y, x1, x2, depthA, depthB, sx };
  });

  return (
    <svg viewBox="0 0 400 580" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="bead" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#d59cff" />
          <stop offset="35%" stopColor="#b14dff" />
          <stop offset="75%" stopColor="#6a1cb0" />
          <stop offset="100%" stopColor="#2a0050" />
        </radialGradient>
        <linearGradient id="rungG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a2dc4" />
          <stop offset="50%" stopColor="#c87dff" />
          <stop offset="100%" stopColor="#5e1aa0" />
        </linearGradient>
        <filter id="purpleGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="halo" />
          <feFlood floodColor="#b14dff" floodOpacity="0.85" />
          <feComposite in2="halo" operator="in" result="innerHalo" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="18" result="halo2" />
          <feFlood floodColor="#b14dff" floodOpacity="0.5" />
          <feComposite in2="halo2" operator="in" result="outerHalo" />
          <feMerge>
            <feMergeNode in="outerHalo" />
            <feMergeNode in="innerHalo" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#purpleGlow)">
        {/* Rungs (base pairs) — drawn first so beads sit on top */}
        {items.map((r) => {
          const span = Math.abs(r.x1 - r.x2);
          if (span < 12) return null;
          const left = Math.min(r.x1, r.x2);
          const midDepth = Math.max(r.depthA, r.depthB);
          const opacity = 0.45 + midDepth * 0.5;
          const h = 5 + midDepth * 3;
          return (
            <rect
              key={`rung-${r.i}`}
              x={left}
              y={r.y - h / 2}
              width={span}
              height={h}
              fill="url(#rungG)"
              opacity={opacity}
              rx={h / 2}
            />
          );
        })}

        {/* Backbone beads — render in two passes so front beads draw over back ones */}
        {[...items]
          .sort((a, b) => a.depthA - b.depthA)
          .map((r) => {
            const radius = 5 + r.depthA * 6;
            return (
              <circle
                key={`a-${r.i}`}
                cx={r.x1}
                cy={r.y}
                r={radius}
                fill="url(#bead)"
                opacity={0.6 + r.depthA * 0.4}
              />
            );
          })}
        {[...items]
          .sort((a, b) => a.depthB - b.depthB)
          .map((r) => {
            const radius = 5 + r.depthB * 6;
            return (
              <circle
                key={`b-${r.i}`}
                cx={r.x2}
                cy={r.y}
                r={radius}
                fill="url(#bead)"
                opacity={0.6 + r.depthB * 0.4}
              />
            );
          })}
      </g>
    </svg>
  );
}

export default function Slide01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text">
      <SlideChrome index="01" />

      <div
        className="absolute top-1/2 w-[40vw] h-[130vh] pointer-events-none"
        style={{
          right: "calc(-12vw + 50px)",
          transform: "translateY(-50%) rotate(22deg)",
          transformOrigin: "50% 50%",
        }}
      >
        <div
          className="w-full h-full"
          style={{ animation: "morph-in 1.4s cubic-bezier(.2,.7,.2,1) both" }}
        >
          <DoubleHelix />
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
