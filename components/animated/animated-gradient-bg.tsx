"use client";

import { motion } from "framer-motion";

interface AnimatedGradientBgProps {
  className?: string;
}

export function AnimatedGradientBg({ className = "" }: AnimatedGradientBgProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {/* Moving gradient blobs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: ["-20%", "30%", "-20%"],
          y: ["-10%", "20%", "-10%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(180,80,80,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: ["10%", "-20%", "10%"],
          y: ["10%", "-30%", "10%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
