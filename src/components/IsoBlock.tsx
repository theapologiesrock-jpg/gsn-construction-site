interface IsoBlockProps {
  width: number;
  height: number;
  depth: number;
  x: number;
  y: number;
  z: number;
  top: string;
  front: string;
  side: string;
  rotateY?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function IsoBlock({
  width,
  height,
  depth,
  x,
  y,
  z,
  top,
  front,
  side,
  rotateY = 0,
  style,
  className = "",
}: IsoBlockProps) {
  const base: React.CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    transformStyle: "preserve-3d",
  };

  return (
    <div
      className={className}
      style={{
        ...base,
        width,
        height,
        transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg)`,
        ...style,
      }}
    >
      {/* front face */}
      <div
        style={{
          position: "absolute",
          width,
          height,
          background: front,
          transform: `translateZ(${depth / 2}px)`,
          border: "1px solid rgba(255,255,255,0.16)",
        }}
      />
      {/* right face */}
      <div
        style={{
          position: "absolute",
          width: depth,
          height,
          left: width / 2 - depth / 2,
          background: side,
          transform: `rotateY(90deg) translateZ(${width / 2}px)`,
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      />
      {/* top face */}
      <div
        style={{
          position: "absolute",
          width,
          height: depth,
          top: height / 2 - depth / 2,
          background: top,
          transform: `rotateX(90deg) translateZ(${height / 2}px)`,
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      />
    </div>
  );
}
