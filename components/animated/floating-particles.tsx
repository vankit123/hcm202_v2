"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingParticlesProps {
  count?: number;
  color?: "gold" | "red" | "mixed";
  className?: string;
}

export function FloatingParticles({
  count = 30,
  color = "gold",
  className = "",
}: FloatingParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      color: color === "mixed" ? (Math.random() > 0.5 ? "gold" : "red") : color,
    }));
  }, [count, color]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background:
              particle.color === "gold"
                ? "radial-gradient(circle, rgba(212,168,83,0.8) 0%, rgba(212,168,83,0) 70%)"
                : "radial-gradient(circle, rgba(180,80,80,0.8) 0%, rgba(180,80,80,0) 70%)",
            boxShadow:
              particle.color === "gold"
                ? "0 0 10px rgba(212,168,83,0.5)"
                : "0 0 10px rgba(180,80,80,0.5)",
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration * 1.2,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
