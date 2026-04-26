import { useEffect, useRef, useState, type ReactNode } from "react";

interface ChromeProps {
  index: string;
  total?: string;
  children?: ReactNode;
}

let lastSeenIndex: string | null = null;

export function SlideChrome({ index, total = "15", children }: ChromeProps) {
  const previousRef = useRef<string | null>(
    lastSeenIndex && lastSeenIndex !== index ? lastSeenIndex : null,
  );
  const [showCrush, setShowCrush] = useState<boolean>(previousRef.current !== null);

  useEffect(() => {
    lastSeenIndex = index;
    if (!showCrush) return;
    const t = setTimeout(() => setShowCrush(false), 650);
    return () => clearTimeout(t);
  }, [index, showCrush]);

  return (
    <>
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute top-[3vh] left-[3vw] flex items-center gap-[1vw] z-30">
        <div
          className="w-[0.7vw] h-[0.7vw] rounded-full bg-primary"
          style={{ animation: "pulse-glow 2.4s ease-in-out infinite" }}
        />
        <div className="font-mono text-[0.95vw] tracking-[0.3em] text-primary uppercase">
          CRISPR.LAB
        </div>
        <div className="font-mono text-[0.95vw] text-muted">// rev.2026</div>
      </div>
      <div className="absolute top-[3vh] right-[3vw] flex items-center gap-[1.2vw] z-30">
        <div className="font-mono text-[0.95vw] text-muted uppercase tracking-[0.25em]">
          slide
        </div>
        <div
          className="relative font-mono text-[1.1vw] text-primary inline-block"
          style={{ minWidth: "2.4ch", height: "1.4em", lineHeight: "1.4em" }}
        >
          {showCrush && previousRef.current && (
            <span
              className="absolute inset-0 text-primary/70"
              style={{
                animation: "number-crush 0.55s cubic-bezier(.55,.05,.7,.2) both",
                transformOrigin: "50% 100%",
                textShadow: "0 0 12px #00f0ff",
              }}
            >
              {previousRef.current}
            </span>
          )}
          <span
            key={index}
            className="absolute inset-0"
            style={{
              animation: "number-bounce 0.85s cubic-bezier(.34,1.56,.64,1) both",
              animationDelay: showCrush && previousRef.current ? "0.25s" : "0s",
              transformOrigin: "50% 100%",
              textShadow: "0 0 14px #00f0ff",
            }}
          >
            {index}
          </span>
        </div>
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
