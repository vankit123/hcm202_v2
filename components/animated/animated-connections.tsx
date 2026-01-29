"use client";

import { motion } from "framer-motion";

interface AnimatedConnectionsProps {
  className?: string;
}

export function AnimatedConnections({
  className = "",
}: AnimatedConnectionsProps) {
  const lines = [
    { x1: "10%", y1: "20%", x2: "30%", y2: "40%" },
    { x1: "30%", y1: "40%", x2: "50%", y2: "30%" },
    { x1: "50%", y1: "30%", x2: "70%", y2: "50%" },
    { x1: "70%", y1: "50%", x2: "90%", y2: "35%" },
    { x1: "20%", y1: "60%", x2: "40%", y2: "70%" },
    { x1: "40%", y1: "70%", x2: "60%", y2: "60%" },
    { x1: "60%", y1: "60%", x2: "80%", y2: "75%" },
    { x1: "15%", y1: "85%", x2: "35%", y2: "80%" },
    { x1: "50%", y1: "30%", x2: "30%", y2: "40%" },
    { x1: "70%", y1: "50%", x2: "60%", y2: "60%" },
  ];

  const nodes = [
    { x: "10%", y: "20%" },
    { x: "30%", y: "40%" },
    { x: "50%", y: "30%" },
    { x: "70%", y: "50%" },
    { x: "90%", y: "35%" },
    { x: "20%", y: "60%" },
    { x: "40%", y: "70%" },
    { x: "60%", y: "60%" },
    { x: "80%", y: "75%" },
    { x: "15%", y: "85%" },
    { x: "35%", y: "80%" },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full">
        {lines.map((line, index) => (
          <motion.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(212,168,83,0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3.5,
              delay: index * 0.15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute w-3 h-3 rounded-full bg-gold/40"
          style={{
            left: node.x,
            top: node.y,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 15px rgba(212,168,83,0.5)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            delay: index * 0.12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
