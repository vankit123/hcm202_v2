"use client";

import { motion } from "framer-motion";

type Point = { id: string; label: string; x: number; y: number };

const points: Point[] = [
  { id: "americas", label: "Châu Mỹ", x: 22, y: 42 },
  { id: "europe", label: "Châu Âu", x: 55, y: 30 },
  { id: "africa", label: "Châu Phi", x: 52, y: 55 },
  { id: "asia", label: "Châu Á", x: 73, y: 40 },
  { id: "australia", label: "Châu Úc", x: 82, y: 74 },
];

const vietnam = { x: 73.5, y: 45 };

// 🎨 MÀU CHỮ theo từng khu vực
const labelColor: Record<string, string> = {
  vietnam: "#ffffff",     // trắng cho VIỆT NAM
  asia: "#ffffff",        // teal
  europe: "#ffffff",      // blue
  africa: "#ffffff",      // orange
  americas: "#ffffff",    // purple
  australia: "#ffffff",   // green
};

// (tuỳ chọn) màu line / dot vẫn vàng cho “brand”
const GOLD = "#d4a853";

interface Props {
  className?: string;
  showConnections?: boolean;
  activeConnections?: string[];
}

export function WorldMapImage({
  className = "",
  showConnections = true,
  activeConnections = ["americas", "europe", "africa", "asia", "australia"],
}: Props) {
  return (
    <div className={`relative w-full aspect-square ${className}`}>
      <img
        src="/images/world-map.jpg"
        alt="World map"
        className="absolute inset-0 w-full h-full object-contain
             brightness-[1.25] contrast-[1.05] saturate-[1.15]"
        draggable={false}
      />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lines from Vietnam */}
        {showConnections &&
          points
            .filter((p) => activeConnections.includes(p.id))
            .map((p, idx) => (
              <motion.line
                key={p.id}
                x1={vietnam.x}
                y1={vietnam.y}
                x2={p.x}
                y2={p.y}
                stroke={GOLD}
                strokeWidth="0.35"
                strokeDasharray="2 1.2"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.2, delay: idx * 0.15 }}
              />
            ))}

        {/* Vietnam marker */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <circle cx={vietnam.x} cy={vietnam.y} r="1.0" fill={GOLD} filter="url(#glow)" />
          <motion.circle
            cx={vietnam.x}
            cy={vietnam.y}
            r="1.8"
            fill="none"
            stroke={GOLD}
            strokeWidth="0.25"
            animate={{ r: [1.8, 3.6], opacity: [0.7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
          <text
            x={vietnam.x}
            y={vietnam.y - 2.5}
            fill={labelColor.vietnam}
            fontSize="2.2"
            textAnchor="middle"
            fontWeight="800"
          >
            VIỆT NAM
          </text>
        </motion.g>

        {/* Continent markers */}
        {points
          .filter((p) => activeConnections.includes(p.id))
          .map((p) => {
            const c = labelColor[p.id] || "#ffffff";
            return (
              <g key={p.id}>
                {/* dot vẫn vàng hoặc bạn đổi theo c cũng được */}
                <circle cx={p.x} cy={p.y} r="0.85" fill={GOLD} opacity="0.95" filter="url(#glow)" />
                <text
                  x={p.x}
                  y={p.y - 2.2}
                  fill={c}
                  fontSize="2.0"
                  textAnchor="middle"
                  fontWeight="700"
                >
                  {p.label}
                </text>
              </g>
            );
          })}
      </svg>
    </div>
  );
}
