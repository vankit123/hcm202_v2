"use client";

import { motion } from "framer-motion";

interface FlowingLinesProps {
  color?: "gold" | "red" | "mixed";
  direction?: "horizontal" | "vertical" | "diagonal";
  count?: number;
}

export function FlowingLines({
  color = "gold",
  direction = "horizontal",
  count = 5,
}: FlowingLinesProps) {
  const getColor = (index: number) => {
    if (color === "gold") return "rgba(212, 168, 83, 0.3)";
    if (color === "red") return "rgba(139, 69, 69, 0.3)";
    return index % 2 === 0 ? "rgba(212, 168, 83, 0.25)" : "rgba(139, 69, 69, 0.25)";
  };

  const getPath = (index: number) => {
    const offset = (index / count) * 100;
    
    switch (direction) {
      case "horizontal":
        return `M-10 ${offset} Q 25 ${offset - 10}, 50 ${offset} T 110 ${offset}`;
      case "vertical":
        return `M${offset} -10 Q ${offset - 10} 25, ${offset} 50 T ${offset} 110`;
      case "diagonal":
        return `M-10 ${offset} Q ${25 + offset/2} ${offset/2}, ${50 + offset/2} ${offset/2} T 110 ${100 - offset}`;
      default:
        return `M-10 ${offset} Q 25 ${offset - 10}, 50 ${offset} T 110 ${offset}`;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {Array.from({ length: count }).map((_, i) => (
          <motion.path
            key={i}
            d={getPath(i)}
            fill="none"
            stroke={getColor(i)}
            strokeWidth="0.3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Glowing dots traveling along paths */}
        {Array.from({ length: count }).map((_, i) => (
          <motion.circle
            key={`dot-${i}`}
            r="0.8"
            fill={color === "gold" ? "#d4a853" : color === "red" ? "#8b4545" : i % 2 === 0 ? "#d4a853" : "#8b4545"}
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
            style={{
              offsetPath: `path("${getPath(i)}")`,
            }}
          />
        ))}
        
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
