"use client";

import { motion } from "framer-motion";

interface PulseRingsProps {
  className?: string;
  color?: "gold" | "red" | "mixed";
  position?: "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "small" | "medium" | "large";
}

export function PulseRings({
  className = "",
  color = "gold",
  position = "center",
  size = "medium",
}: PulseRingsProps) {
  const getPosition = () => {
    switch (position) {
      case "center":
        return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";
      case "top-left":
        return "left-0 top-0";
      case "top-right":
        return "right-0 top-0";
      case "bottom-left":
        return "left-0 bottom-0";
      case "bottom-right":
        return "right-0 bottom-0";
      default:
        return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  };

  const getBaseSize = () => {
    switch (size) {
      case "small": return 100;
      case "medium": return 150;
      case "large": return 200;
      default: return 150;
    }
  };

  const getColor = (index: number) => {
    if (color === "gold") return "rgba(212, 168, 83, 0.25)";
    if (color === "red") return "rgba(139, 69, 69, 0.25)";
    return index % 2 === 0 ? "rgba(212, 168, 83, 0.2)" : "rgba(139, 69, 69, 0.2)";
  };

  const baseSize = getBaseSize();

  return (
    <div className={`absolute ${getPosition()} pointer-events-none ${className}`}>
      {[1, 2, 3, 4, 5].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full"
          style={{
            border: `1px solid ${getColor(ring)}`,
            width: ring * baseSize,
            height: ring * baseSize,
            left: -(ring * baseSize) / 2,
            top: -(ring * baseSize) / 2,
            boxShadow: `0 0 15px ${getColor(ring)}, inset 0 0 15px ${getColor(ring)}`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.15, 0.4],
          }}
          transition={{
            duration: 5,
            delay: ring * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Center glow effect */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: baseSize / 2,
          height: baseSize / 2,
          left: -baseSize / 4,
          top: -baseSize / 4,
          background: color === "gold" 
            ? "radial-gradient(circle, rgba(212, 168, 83, 0.4) 0%, transparent 70%)"
            : color === "red"
              ? "radial-gradient(circle, rgba(139, 69, 69, 0.4) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(212, 168, 83, 0.3) 0%, rgba(139, 69, 69, 0.2) 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
