import type { ReactNode } from "react";

interface ChromeProps {
  index: string;
  total?: string;
  children?: ReactNode;
}

export function SlideChrome({ index, total = "15", children }: ChromeProps) {
  return (
    <>
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute top-[3vh] left-[3vw] flex items-center gap-[1vw] z-30">
        <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-primary" style={{ animation: "pulse-glow 2.4s ease-in-out infinite" }} />
        <div className="font-mono text-[0.95vw] tracking-[0.3em] text-primary uppercase">CRISPR.LAB</div>
        <div className="font-mono text-[0.95vw] text-muted">// rev.2026</div>
      </div>
      <div className="absolute top-[3vh] right-[3vw] flex items-center gap-[1.2vw] z-30">
        <div className="font-mono text-[0.95vw] text-muted uppercase tracking-[0.25em]">slide</div>
        <div className="font-mono text-[1.1vw] text-primary">{index}</div>
        <div className="font-mono text-[0.95vw] text-muted">/ {total}</div>
      </div>
      <div className="absolute bottom-[3vh] left-[3vw] right-[3vw] flex items-center justify-between z-30 font-mono text-[0.85vw] text-muted uppercase tracking-[0.3em]">
        <span>The code is written.</span>
        <span>Who gets the eraser?</span>
      </div>
      {children}
    </>
  );
}
