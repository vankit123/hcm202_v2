"use client";

import { motion } from "framer-motion";

interface OrbitingElementsProps {
  className?: string;
}

export function OrbitingElements({ className = "" }: OrbitingElementsProps) {
  const orbits = [
    { radius: 120, duration: 20, items: 6, size: 8 },
    { radius: 180, duration: 30, items: 8, size: 6 },
    { radius: 240, duration: 40, items: 12, size: 4 },
  ];

  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      {orbits.map((orbit, orbitIndex) => (
        <motion.div
          key={orbitIndex}
          className="absolute rounded-full border border-gold/10"
          style={{
            width: orbit.radius * 2,
            height: orbit.radius * 2,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: orbit.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: orbit.items }).map((_, itemIndex) => {
            const angle = (itemIndex / orbit.items) * 360;
            return (
              <motion.div
                key={itemIndex}
                className="absolute rounded-full bg-gold"
                style={{
                  width: orbit.size,
                  height: orbit.size,
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${angle}deg) translateX(${orbit.radius}px) translateY(-50%)`,
                  boxShadow: "0 0 10px rgba(212,168,83,0.5)",
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: itemIndex * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>
      ))}
      
      {/* Center glow */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-gold/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 60px rgba(212,168,83,0.4)",
        }}
      />
    </div>
  );
}
