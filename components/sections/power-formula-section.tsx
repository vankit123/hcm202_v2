"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FloatingParticles } from "../animated/floating-particles";
import { OrbitingElements } from "../animated/orbiting-elements";
import { AnimatedBackground } from "../animated/animated-background";
import { FlowingLines } from "../animated/flowing-lines";
import { RisingParticles } from "../animated/rising-particles";

const nationalPower = [
  "Tinh thần yêu nước",
  "Ý chí tự lực tự cường",
  "Tinh thần chiến đấu",
];

const eraPower = [
  "Phong trào giải phóng dân tộc",
  "Phong trào công nhân quốc tế",
  "Tiến bộ khoa học kỹ thuật",
];

export function PowerFormulaSection() {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-background relative overflow-hidden">
      {/* Orbiting Elements - Center decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <OrbitingElements />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={35} color="mixed" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />

      {/* Animated Background - Grid pattern */}
      <AnimatedBackground variant="grid" color="mixed" intensity="low" />

      {/* Flowing Lines */}
      <div className="absolute inset-0 opacity-30">
        <FlowingLines color="mixed" direction="horizontal" count={8} />
      </div>

      {/* Rising Particles */}
      <RisingParticles color="mixed" count={25} speed="medium" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-center text-gold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Công thức Sức mạnh
        </motion.h2>

        <div className="space-y-8">
          {/* Top row - Two power sources */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={() => setHoveredBlock("national")}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              <div className="bg-card border border-gold/30 rounded-lg p-6 md:p-8 text-center transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_rgba(212,168,83,0.3)]">
                <h3 className="font-serif text-xl md:text-2xl text-gold font-semibold">
                  SỨC MẠNH DÂN TỘC
                </h3>
              </div>
              {/* Tooltip */}
              <motion.div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-card border border-gold/50 rounded-lg p-4 min-w-64 z-20"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: hoveredBlock === "national" ? 1 : 0,
                  y: hoveredBlock === "national" ? 0 : -10,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  pointerEvents: hoveredBlock === "national" ? "auto" : "none",
                }}
              >
                <ul className="space-y-2">
                  {nationalPower.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.span
              className="text-4xl text-gold font-light"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              +
            </motion.span>

            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={() => setHoveredBlock("era")}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              <div className="bg-card border border-red/30 rounded-lg p-6 md:p-8 text-center transition-all duration-300 hover:border-red hover:shadow-[0_0_30px_rgba(139,69,69,0.3)]">
                <h3 className="font-serif text-xl md:text-2xl text-accent font-semibold">
                  SỨC MẠNH THỜI ĐẠI
                </h3>
              </div>
              {/* Tooltip */}
              <motion.div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-card border border-red/50 rounded-lg p-4 min-w-64 z-20"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: hoveredBlock === "era" ? 1 : 0,
                  y: hoveredBlock === "era" ? 0 : -10,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  pointerEvents: hoveredBlock === "era" ? "auto" : "none",
                }}
              >
                <ul className="space-y-2">
                  {eraPower.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Arrow down */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <svg
              width="40"
              height="60"
              viewBox="0 0 40 60"
              fill="none"
              className="text-gold"
            >
              <motion.path
                d="M20 0 L20 50 M5 35 L20 50 L35 35"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </svg>
          </motion.div>

          {/* Combined power */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 border-2 border-gold rounded-xl p-8 md:p-10 text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-gold font-bold">
                SỨC MẠNH TỔNG HỢP
              </h3>
            </div>
          </motion.div>

          {/* Arrow down */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <svg
              width="40"
              height="60"
              viewBox="0 0 40 60"
              fill="none"
              className="text-gold"
            >
              <motion.path
                d="M20 0 L20 50 M5 35 L20 50 L35 35"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
            </svg>
          </motion.div>

          {/* Victory */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red/20 blur-2xl rounded-full" />
              <div className="relative bg-gradient-to-r from-red/30 via-accent/40 to-red/30 border-2 border-accent rounded-xl p-8 md:p-12 text-center">
                <h3 className="font-serif text-2xl md:text-4xl text-foreground font-bold">
                  CÁCH MẠNG VIỆT NAM THẮNG LỢI
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
