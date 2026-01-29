"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RisingParticlesProps {
  color?: "gold" | "red" | "mixed";
  count?: number;
  speed?: "slow" | "medium" | "fast";
}

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function RisingParticles({
  color = "gold",
  count = 30,
  speed = "medium",
}: RisingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 12;
      case "medium":
        return 8;
      case "fast":
        return 5;
      default:
        return 8;
    }
  };

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: getSpeed() + Math.random() * 4,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.3,
      }))
    );
  }, [count, speed]);

  const getColor = (index: number) => {
    if (color === "gold") return "#d4a853";
    if (color === "red") return "#8b4545";
    return index % 2 === 0 ? "#d4a853" : "#8b4545";
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: "-20px",
            width: particle.size,
            height: particle.size,
            backgroundColor: getColor(particle.id),
            boxShadow: `0 0 ${particle.size * 2}px ${getColor(particle.id)}`,
          }}
          animate={{
            y: [0, -window?.innerHeight || -800],
            opacity: [0, particle.opacity, particle.opacity, 0],
            x: [0, Math.sin(particle.id) * 30, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
