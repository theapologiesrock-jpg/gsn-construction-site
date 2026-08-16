import { useEffect, useRef, useState } from "react";
import IsoBlock from "./IsoBlock";

export default function HeroScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 10, ry: -18 });
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion.current || isTouch) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setTilt({ rx: 10 - py * 14, ry: -18 + px * 20 });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-full select-none"
      style={{ perspective: "1600px" }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-[400ms] ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        <div
          className="relative animate-float"
          style={{ transformStyle: "preserve-3d", width: 1, height: 1, ["--tilt" as string]: "0deg" }}
        >
          {/* blueprint ground plane */}
          <div
            className="absolute blueprint-grid rounded-sm"
            style={{
              width: 640,
              height: 640,
              left: -320,
              top: -180,
              background:
                "repeating-linear-gradient(rgba(79,165,255,0.16) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(79,165,255,0.16) 0 1px, transparent 1px 40px), radial-gradient(ellipse at center, rgba(22,136,255,0.10), transparent 70%)",
              transform: "rotateX(90deg) translateZ(-150px)",
              border: "1px solid rgba(79,165,255,0.25)",
            }}
          />

          {/* footprint outline on the ground plane */}
          <svg
            width="360"
            height="240"
            viewBox="0 0 360 240"
            className="absolute"
            style={{
              left: -180,
              top: -120,
              transform: "rotateX(90deg) translateZ(-149px)",
            }}
          >
            <rect
              x="20"
              y="20"
              width="320"
              height="200"
              fill="none"
              stroke="rgba(140,197,255,0.55)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            <line x1="180" y1="20" x2="180" y2="220" stroke="rgba(140,197,255,0.3)" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="20" y1="120" x2="340" y2="120" stroke="rgba(140,197,255,0.3)" strokeWidth="1" strokeDasharray="4 6" />
          </svg>

          {/* isometric building volumes */}
          <IsoBlock
            width={130}
            height={190}
            depth={130}
            x={-210}
            y={-60}
            z={-40}
            top="linear-gradient(135deg,#3f8ee8,#1f6fd1)"
            front="linear-gradient(180deg,#0b2038,#0a1a30)"
            side="linear-gradient(180deg,#092037,#071729)"
          />
          <IsoBlock
            width={150}
            height={280}
            depth={150}
            x={-40}
            y={-150}
            z={30}
            top="linear-gradient(135deg,#5aa4f2,#2a7ee0)"
            front="linear-gradient(180deg,#123252,#0c223b)"
            side="linear-gradient(180deg,#0e2942,#081a2c)"
          />
          <IsoBlock
            width={110}
            height={150}
            depth={110}
            x={140}
            y={-30}
            z={-10}
            top="linear-gradient(135deg,#4691e9,#1c6ed6)"
            front="linear-gradient(180deg,#0d253f,#0a1c31)"
            side="linear-gradient(180deg,#0a1f36,#071829)"
          />

          {/* roofline line-art, floating in front */}
          <svg
            width="420"
            height="200"
            viewBox="0 0 420 200"
            className="absolute animate-pulse-glow"
            style={{
              left: -210,
              top: -40,
              transform: "translateZ(190px)",
              filter: "drop-shadow(0 0 18px rgba(22,136,255,0.55))",
            }}
          >
            <path
              d="M20 150 L200 20 L400 150"
              fill="none"
              stroke="#8ec5ff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 150 Q10 165 45 168 L155 168"
              fill="none"
              stroke="#8ec5ff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M400 150 Q410 165 375 168 L265 168"
              fill="none"
              stroke="#8ec5ff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <rect x="192" y="95" width="16" height="16" fill="none" stroke="#8ec5ff" strokeWidth="2" />
            <line x1="200" y1="95" x2="200" y2="111" stroke="#8ec5ff" strokeWidth="2" />
            <line x1="192" y1="103" x2="208" y2="103" stroke="#8ec5ff" strokeWidth="2" />
          </svg>

          {/* dimension ticks */}
          <div
            className="absolute font-mono text-[11px] tracking-wider text-blue-300/80"
            style={{ left: -230, top: 40, transform: "translateZ(60px)" }}
          >
            24'-0"
          </div>
          <div
            className="absolute font-mono text-[11px] tracking-wider text-blue-300/80"
            style={{ left: 160, top: -10, transform: "translateZ(80px)" }}
          >
            18'-6"
          </div>
        </div>
      </div>
    </div>
  );
}
