"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  variant?: "stars" | "waves" | "grid" | "aurora" | "geometric";
  color?: "gold" | "red" | "mixed";
  intensity?: "low" | "medium" | "high";
}

// Floating Stars/Lights Animation
function StarsBackground({ color, intensity }: { color: string; intensity: string }) {
  const count = intensity === "high" ? 60 : intensity === "medium" ? 40 : 20;
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
      }))
    );
  }, [count]);

  const getColor = () => {
    if (color === "gold") return "#d4a853";
    if (color === "red") return "#8b4545";
    return Math.random() > 0.5 ? "#d4a853" : "#8b4545";
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: getColor(),
            boxShadow: `0 0 ${star.size * 3}px ${getColor()}`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Wave Lines Animation
function WavesBackground({ color }: { color: string }) {
  const getStrokeColor = () => {
    if (color === "gold") return "rgba(212, 168, 83, 0.3)";
    if (color === "red") return "rgba(139, 69, 69, 0.3)";
    return "rgba(212, 168, 83, 0.2)";
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" preserveAspectRatio="none">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M0 ${50 + i * 20} Q 25 ${30 + i * 20}, 50 ${50 + i * 20} T 100 ${50 + i * 20}`}
            fill="none"
            stroke={getStrokeColor()}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              d: [
                `M0 ${50 + i * 20} Q 25 ${30 + i * 20}, 50 ${50 + i * 20} T 100 ${50 + i * 20}`,
                `M0 ${50 + i * 20} Q 25 ${70 + i * 20}, 50 ${50 + i * 20} T 100 ${50 + i * 20}`,
                `M0 ${50 + i * 20} Q 25 ${30 + i * 20}, 50 ${50 + i * 20} T 100 ${50 + i * 20}`,
              ],
            }}
            transition={{
              pathLength: { duration: 2, delay: i * 0.3 },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              d: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
            }}
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
        ))}
      </svg>
    </div>
  );
}

// Grid Animation
function GridBackground({ color, intensity }: { color: string; intensity: string }) {
  const gridSize = intensity === "high" ? 30 : intensity === "medium" ? 50 : 70;
  const [points, setPoints] = useState<Array<{ id: string; x: number; y: number }>>([]);

  useEffect(() => {
    const newPoints: Array<{ id: string; x: number; y: number }> = [];
    for (let x = 0; x <= 100; x += gridSize / 5) {
      for (let y = 0; y <= 100; y += gridSize / 5) {
        if (Math.random() > 0.7) {
          newPoints.push({ id: `${x}-${y}`, x, y });
        }
      }
    }
    setPoints(newPoints);
  }, [gridSize]);

  const getColor = () => {
    if (color === "gold") return "#d4a853";
    if (color === "red") return "#8b4545";
    return "#d4a853";
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid lines */}
      <svg className="w-full h-full absolute">
        <defs>
          <pattern id="grid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={color === "gold" ? "rgba(212, 168, 83, 0.1)" : "rgba(139, 69, 69, 0.1)"}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated intersection points */}
      {points.map((point, i) => (
        <motion.div
          key={point.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            backgroundColor: getColor(),
            boxShadow: `0 0 8px ${getColor()}`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Aurora/Gradient Animation
function AuroraBackground({ color }: { color: string }) {
  const colors =
    color === "gold"
      ? ["rgba(212, 168, 83, 0.15)", "rgba(180, 140, 60, 0.1)", "rgba(212, 168, 83, 0.05)"]
      : color === "red"
        ? ["rgba(139, 69, 69, 0.15)", "rgba(100, 50, 50, 0.1)", "rgba(139, 69, 69, 0.05)"]
        : ["rgba(212, 168, 83, 0.1)", "rgba(139, 69, 69, 0.1)", "rgba(212, 168, 83, 0.05)"];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {colors.map((clr, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at ${50 + i * 10}% ${50 + i * 10}%, ${clr} 0%, transparent 70%)`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
}

// Geometric Shapes Animation
function GeometricBackground({ color, intensity }: { color: string; intensity: string }) {
  const count = intensity === "high" ? 15 : intensity === "medium" ? 10 : 6;
  const [shapes, setShapes] = useState<
    Array<{ id: number; x: number; y: number; size: number; rotation: number; type: string }>
  >([]);

  useEffect(() => {
    setShapes(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 80 + 40,
        rotation: Math.random() * 360,
        type: ["circle", "square", "triangle", "hexagon"][Math.floor(Math.random() * 4)],
      }))
    );
  }, [count]);

  const getColor = () => {
    if (color === "gold") return "rgba(212, 168, 83, 0.08)";
    if (color === "red") return "rgba(139, 69, 69, 0.08)";
    return Math.random() > 0.5 ? "rgba(212, 168, 83, 0.06)" : "rgba(139, 69, 69, 0.06)";
  };

  const getBorderColor = () => {
    if (color === "gold") return "rgba(212, 168, 83, 0.2)";
    if (color === "red") return "rgba(139, 69, 69, 0.2)";
    return "rgba(212, 168, 83, 0.15)";
  };

  const renderShape = (type: string, size: number) => {
    const style = {
      width: size,
      height: size,
      backgroundColor: getColor(),
      border: `1px solid ${getBorderColor()}`,
    };

    switch (type) {
      case "circle":
        return <div style={{ ...style, borderRadius: "50%" }} />;
      case "square":
        return <div style={{ ...style, borderRadius: "4px" }} />;
      case "triangle":
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${getColor()}`,
            }}
          />
        );
      case "hexagon":
        return (
          <div
            style={{
              ...style,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        );
      default:
        return <div style={{ ...style, borderRadius: "50%" }} />;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            transform: `translate(-50%, -50%)`,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            rotate: { duration: 30 + shape.id * 5, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {renderShape(shape.type, shape.size)}
        </motion.div>
      ))}
    </div>
  );
}

export function AnimatedBackground({
  variant = "stars",
  color = "gold",
  intensity = "medium",
}: AnimatedBackgroundProps) {
  switch (variant) {
    case "stars":
      return <StarsBackground color={color} intensity={intensity} />;
    case "waves":
      return <WavesBackground color={color} />;
    case "grid":
      return <GridBackground color={color} intensity={intensity} />;
    case "aurora":
      return <AuroraBackground color={color} />;
    case "geometric":
      return <GeometricBackground color={color} intensity={intensity} />;
    default:
      return <StarsBackground color={color} intensity={intensity} />;
  }
}
