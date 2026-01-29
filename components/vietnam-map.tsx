"use client";

import { motion, easeInOut } from "framer-motion";

interface VietnamMapProps {
  className?: string;
  glowColor?: string;
  showRegions?: boolean;
  animated?: boolean;

  /** tăng sáng map (1 = bình thường) */
  brightness?: number;
  contrast?: number;
  saturate?: number;

  /** chọn dùng map glow hay không */
  useGlowMap?: boolean;
}

type MarkerId = "hanoi" | "danang" | "hcm" | "hoangsa" | "truongsa";

type Marker = {
  id: MarkerId;
  label: string;
  x: number; // 0..100
  y: number; // 0..100
  kind: "city" | "island";
};

const MARKERS: Marker[] = [
  { id: "hanoi", label: "Hà Nội", x: 51.12, y: 23.29, kind: "city" },
  { id: "danang", label: "Đà Nẵng", x: 57.62, y: 50.49, kind: "city" },
  { id: "hcm", label: "TP.HCM", x: 48.34, y: 79.3, kind: "city" },
  { id: "hoangsa", label: "Hoàng Sa", x: 68.54, y: 38.62, kind: "island" },
  { id: "truongsa", label: "Trường Sa", x: 76.3, y: 68.01, kind: "island" },
];

function getMarker(id: MarkerId) {
  const m = MARKERS.find((x) => x.id === id);
  if (!m) throw new Error(`Marker not found: ${id}`);
  return m;
}

/** Vẽ đường cong nhẹ bằng quadratic bezier */
function curvePath(
  a: { x: number; y: number },
  b: { x: number; y: number },
  bend = 8 // số càng lớn cong càng nhiều
) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;

  // vector pháp tuyến để đẩy control point
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.max(0.0001, Math.hypot(dx, dy));
  const nx = -dy / len;
  const ny = dx / len;

  const cx = mx + nx * bend;
  const cy = my + ny * bend;

  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

export function VietnamMap({
  className = "",
  glowColor = "#d4a853",
  showRegions = true,
  animated = true,
  brightness = 1.12,
  contrast = 1.08,
  saturate = 1.1,
  useGlowMap = true,
}: VietnamMapProps) {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: easeInOut },
    },
  };

  const pulse = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.55, 1, 0.55],
      transition: { duration: 2.6, repeat: Infinity, ease: easeInOut },
    },
  };

  const mapSrc = useGlowMap
    ? "/images/vietnam-map-2048-glow.png"
    : "/images/vietnam-map-2048-transparent.png";

  const hanoi = getMarker("hanoi");
  const danang = getMarker("danang");
  const hcm = getMarker("hcm");
  const hoangsa = getMarker("hoangsa");
  const truongsa = getMarker("truongsa");

  return (
    <div className={`relative w-full aspect-square ${className}`}>
      {/* Map image */}
      <motion.img
        src={mapSrc}
        alt="Bản đồ Việt Nam"
        className="absolute inset-0 w-full h-full object-contain"
        draggable={false}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
        variants={imageVariants}
        style={{
          filter: `brightness(${brightness}) contrast(${contrast}) saturate(${saturate}) drop-shadow(0 0 18px ${glowColor}55)`,
        }}
      />

      {/* Overlay */}
      {showRegions && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="vnGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="0.9" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <style>
              {`
                .label {
                  paint-order: stroke;
                  stroke: rgba(0,0,0,0.65);
                  stroke-width: 0.45px;
                }
              `}
            </style>
          </defs>

          {/* Trục Bắc - Trung - Nam (đường timeline trên bản đồ) */}
          <motion.path
            d={`M ${hanoi.x} ${hanoi.y} L ${danang.x} ${danang.y} L ${hcm.x} ${hcm.y}`}
            fill="none"
            stroke={glowColor}
            strokeWidth="0.35"
            strokeDasharray="2.2 1.3"
            opacity="0.55"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            filter="url(#vnGlow)"
          />

          {/* Kết nối ra đảo */}
          <motion.path
            d={curvePath(danang, hoangsa, 6)}
            fill="none"
            stroke={glowColor}
            strokeWidth="0.35"
            strokeDasharray="2.2 1.3"
            opacity="0.65"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.65 }}
            transition={{ duration: 1.4, delay: 0.35 }}
            filter="url(#vnGlow)"
          />

          <motion.path
            d={curvePath(hcm, truongsa, -7)}
            fill="none"
            stroke={glowColor}
            strokeWidth="0.35"
            strokeDasharray="2.2 1.3"
            opacity="0.65"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.65 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            filter="url(#vnGlow)"
          />

          {/* Markers */}
          {MARKERS.map((m, idx) => (
            <motion.g
              key={m.id}
              initial={animated ? "hidden" : "visible"}
              animate="visible"
              variants={pulse}
              style={{ transformOrigin: `${m.x}px ${m.y}px` }}
            >
              <circle
                cx={m.x}
                cy={m.y}
                r={m.kind === "city" ? 0.95 : 1.15}
                fill={glowColor}
                filter="url(#vnGlow)"
                opacity="0.95"
              />

              {/* vòng pulse */}
              <motion.circle
                cx={m.x}
                cy={m.y}
                r={m.kind === "city" ? 1.8 : 2.2}
                fill="none"
                stroke={glowColor}
                strokeWidth="0.25"
                animate={{ r: [1.8, 3.5], opacity: [0.7, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.12 * idx,
                }}
              />

              <text
                x={m.x + (m.kind === "city" ? 1.6 : 1.8)}
                y={m.y - 1.2}
                className="label"
                fill="#F3E7C2"
                fontSize={m.kind === "city" ? "2.2" : "2.0"}
                fontWeight={m.kind === "city" ? 700 : 650}
              >
                {m.label}
              </text>
            </motion.g>
          ))}
        </svg>
      )}
    </div>
  );
}
