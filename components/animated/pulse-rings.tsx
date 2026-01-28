"use client";

import { motion } from "framer-motion";

interface PulseRingsProps {
  className?: string;
  color?: "gold" | "red";
}

export function PulseRings({ className = "", color = "gold" }: PulseRingsProps) {
  const ringColor = color === "gold" ? "rgba(212,168,83,0.3)" : "rgba(180,80,80,0.3)";
  
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      {[1, 2, 3, 4].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border"
          style={{
            borderColor: ringColor,
            width: ring * 150,
            height: ring * 150,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 4,
            delay: ring * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
