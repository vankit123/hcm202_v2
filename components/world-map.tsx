"use client";

import { motion } from "framer-motion";

interface WorldMapProps {
  className?: string;
  highlightVietnam?: boolean;
  showConnections?: boolean;
  activeConnections?: string[];
}

const connections = [
  { id: "asia", label: "Châu Á", x: 720, y: 180, endX: 640, endY: 220 },
  { id: "africa", label: "Châu Phi", x: 480, y: 300, endX: 560, endY: 260 },
  { id: "europe", label: "Châu Âu", x: 480, y: 120, endX: 540, endY: 180 },
  { id: "americas", label: "Châu Mỹ", x: 200, y: 200, endX: 400, endY: 220 },
];

export function WorldMap({
  className = "",
  highlightVietnam = true,
  showConnections = false,
  activeConnections = [],
}: WorldMapProps) {
  const vietnamPosition = { x: 640, y: 220 };

  return (
    <motion.svg
      viewBox="0 0 900 450"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <filter id="worldGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Simplified world continents */}
      {/* North America */}
      <motion.path
        d="M50,80 C100,60 180,70 220,100 C260,130 270,180 240,220 C210,260 150,280 100,260 C50,240 30,180 40,140 C45,110 50,90 50,80 Z"
        fill="currentColor"
        className="text-muted"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />

      {/* South America */}
      <motion.path
        d="M150,280 C180,270 210,290 220,330 C230,370 220,410 190,430 C160,450 120,440 100,400 C80,360 90,310 120,290 C135,282 145,280 150,280 Z"
        fill="currentColor"
        className="text-muted"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Europe */}
      <motion.path
        d="M420,60 C460,50 500,60 530,90 C560,120 570,160 550,190 C530,220 490,230 450,220 C410,210 380,180 390,140 C400,100 410,70 420,60 Z"
        fill="currentColor"
        className="text-muted"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Africa */}
      <motion.path
        d="M450,200 C490,190 530,210 550,260 C570,310 560,370 530,400 C500,430 450,440 410,410 C370,380 360,320 380,270 C400,220 430,205 450,200 Z"
        fill="currentColor"
        className="text-muted"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* Asia */}
      <motion.path
        d="M560,80 C620,60 700,70 760,110 C820,150 860,210 850,270 C840,330 790,370 720,380 C650,390 580,360 540,310 C500,260 500,200 530,150 C545,115 555,90 560,80 Z"
        fill="currentColor"
        className="text-muted"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* Australia */}
      <motion.path
        d="M720,350 C760,340 800,360 820,400 C840,440 820,480 780,490 C740,500 700,480 690,440 C680,400 695,360 720,350 Z"
        fill="currentColor"
        className="text-muted"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Connection lines */}
      {showConnections &&
        connections.map((conn, index) => {
          const isActive =
            activeConnections.length === 0 ||
            activeConnections.includes(conn.id);
          return (
            <g key={conn.id}>
              <motion.line
                x1={vietnamPosition.x}
                y1={vietnamPosition.y}
                x2={conn.x}
                y2={conn.y}
                stroke={isActive ? "#d4a853" : "#333"}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray="8,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: isActive ? 1 : 0.3,
                  opacity: isActive ? 1 : 0.3,
                }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
                filter={isActive ? "url(#worldGlow)" : undefined}
              />
              {isActive && (
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 1 }}
                >
                  <circle cx={conn.x} cy={conn.y} r="6" fill="#d4a853" />
                  <text
                    x={conn.x}
                    y={conn.y - 15}
                    fill="#d4a853"
                    fontSize="12"
                    textAnchor="middle"
                    className="font-sans"
                  >
                    {conn.label}
                  </text>
                </motion.g>
              )}
            </g>
          );
        })}

      {/* Vietnam highlight */}
      {highlightVietnam && (
        <motion.g>
          <motion.circle
            cx={vietnamPosition.x}
            cy={vietnamPosition.y}
            r="12"
            fill="#d4a853"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            filter="url(#worldGlow)"
          />
          <motion.circle
            cx={vietnamPosition.x}
            cy={vietnamPosition.y}
            r="25"
            fill="none"
            stroke="#d4a853"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 2],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <text
            x={vietnamPosition.x}
            y={vietnamPosition.y - 35}
            fill="#d4a853"
            fontSize="14"
            textAnchor="middle"
            fontWeight="bold"
            className="font-sans"
          >
            VIỆT NAM
          </text>
        </motion.g>
      )}
    </motion.svg>
  );
}
