"use client";

import { motion } from "framer-motion";

interface GlowOrbsProps {
  className?: string;
}

export function GlowOrbs({ className = "" }: GlowOrbsProps) {
  const orbs = [
    { x: "10%", y: "20%", size: 200, color: "gold", delay: 0 },
    { x: "80%", y: "30%", size: 150, color: "red", delay: 1 },
    { x: "30%", y: "70%", size: 180, color: "gold", delay: 2 },
    { x: "70%", y: "80%", size: 120, color: "red", delay: 1.5 },
    { x: "50%", y: "50%", size: 250, color: "gold", delay: 0.5 },
  ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            transform: "translate(-50%, -50%)",
            background:
              orb.color === "gold"
                ? "radial-gradient(circle, rgba(212,168,83,0.15) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(180,80,80,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12 + index * 2.5,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
