"use client";

import { motion, easeInOut } from "framer-motion";

interface VietnamMapProps {
  className?: string;
  glowColor?: string;
  showRegions?: boolean;
  animated?: boolean;
}

export function VietnamMap({
  className = "",
  glowColor = "#d4a853",
  showRegions = false,
  animated = true,
}: VietnamMapProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: easeInOut },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.5, 1, 0.5],
      transition: { duration: 3, repeat: Infinity, ease: easeInOut },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 200 500"
      className={className}
      initial="hidden"
      animate="visible"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={glowColor} stopOpacity="1" />
          <stop offset="50%" stopColor={glowColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor={glowColor} stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Main Vietnam outline */}
      <motion.path
        d="M100,10 
           C120,15 140,25 145,40
           C150,55 148,70 152,85
           C156,100 165,110 170,125
           C175,140 178,155 175,170
           C172,185 165,195 160,210
           C155,225 150,240 145,255
           C140,270 135,285 130,300
           C125,315 120,330 118,345
           C116,360 115,375 112,390
           C109,405 105,420 100,435
           C95,450 88,465 80,475
           C72,485 60,490 50,485
           C40,480 35,470 32,455
           C29,440 30,425 32,410
           C34,395 38,380 42,365
           C46,350 50,335 55,320
           C60,305 65,290 68,275
           C71,260 72,245 70,230
           C68,215 64,200 62,185
           C60,170 60,155 62,140
           C64,125 68,110 72,95
           C76,80 82,65 88,50
           C94,35 98,20 100,10 Z"
        fill="url(#mapGradient)"
        filter="url(#glow)"
        variants={animated ? pathVariants : undefined}
        style={{ filter: `drop-shadow(0 0 20px ${glowColor})` }}
      />

      {/* Northern region indicator */}
      {showRegions && (
        <>
          <motion.circle
            cx="95"
            cy="60"
            r="8"
            fill={glowColor}
            variants={glowVariants}
            style={{ filter: `drop-shadow(0 0 10px ${glowColor})` }}
          />
          <motion.circle
            cx="100"
            cy="200"
            r="8"
            fill={glowColor}
            variants={glowVariants}
            style={{ filter: `drop-shadow(0 0 10px ${glowColor})` }}
          />
          <motion.circle
            cx="85"
            cy="380"
            r="8"
            fill={glowColor}
            variants={glowVariants}
            style={{ filter: `drop-shadow(0 0 10px ${glowColor})` }}
          />

          {/* Connecting line - Party leadership axis */}
          <motion.line
            x1="95"
            y1="68"
            x2="85"
            y2="372"
            stroke={glowColor}
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
            style={{ filter: `drop-shadow(0 0 5px ${glowColor})` }}
          />
        </>
      )}
    </motion.svg>
  );
}
