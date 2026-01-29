"use client";

import { motion } from "framer-motion";
import {
  Star,
  Heart,
  Globe,
  Users,
  Sparkles,
  Flag,
  Sun,
  Zap,
} from "lucide-react";

const icons = [Star, Heart, Globe, Users, Sparkles, Flag, Sun, Zap];

interface FloatingIconsProps {
  className?: string;
}

export function FloatingIcons({ className = "" }: FloatingIconsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {icons.map((Icon, index) => {
        const x = 10 + (index % 4) * 25;
        const y = 10 + Math.floor(index / 4) * 50;

        return (
          <motion.div
            key={index}
            className="absolute text-gold/20"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 7 + index,
              delay: index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={24 + index * 4} />
          </motion.div>
        );
      })}
    </div>
  );
}
