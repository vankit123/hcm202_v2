"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { AnimatedConnections } from "../animated/animated-connections";
import { FloatingParticles } from "../animated/floating-particles";
import { WorldMap } from "../world-map";
import { AnimatedBackground } from "../animated/animated-background";
import { FlowingLines } from "../animated/flowing-lines";
import { PulseRings } from "../animated/pulse-rings";
import { RisingParticles } from "../animated/rising-particles";
import { WorldMapImage } from "../world-map-image";
const stages = [
  {
    id: 1,
    title: "Muốn là bạn",
    description: "Chủ động mở rộng quan hệ hữu nghị với tất cả các nước",
    year: "1945-1975",
  },
  {
    id: 2,
    title: "Sẵn sàng là bạn",
    description: "Xây dựng nền tảng hợp tác đa phương, đa lĩnh vực",
    year: "1975-1986",
  },
  {
    id: 3,
    title: "Bạn và đối tác tin cậy",
    description:
      "Hội nhập sâu rộng, là thành viên có trách nhiệm của cộng đồng quốc tế",
    year: "1986-nay",
  },
];

export function InternationalSolidaritySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const mapScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="min-h-[150vh] relative py-20 px-6 bg-background overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/global-solidarity.jpg"
          alt="Đoàn kết quốc tế"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      {/* Animated Connections */}
      <AnimatedConnections className="opacity-40" />

      {/* Floating Particles */}
      <FloatingParticles count={35} color="mixed" />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />

      {/* Animated Background - Waves */}
      <AnimatedBackground variant="waves" color="mixed" intensity="medium" />

      {/* Flowing Lines */}
      <div className="absolute inset-0 opacity-30">
        <FlowingLines color="gold" direction="horizontal" count={10} />
      </div>

      {/* Pulse Rings */}
      <PulseRings
        color="mixed"
        position="top-right"
        size="large"
        className="opacity-40"
      />
      <PulseRings
        color="gold"
        position="bottom-left"
        size="medium"
        className="opacity-30"
      />

      {/* Rising Particles */}
      <RisingParticles color="mixed" count={30} speed="slow" />

      {/* World Map Image Background - Centered */}
      <div className="relative pointer-events-none">
        <motion.div
          className="mx-auto w-full max-w-[1500px] h-[520px]  opacity-25"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <WorldMapImage className="w-full mx-auto opacity-90" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-[25%]">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-center text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Việt Nam và Thế giới
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-16 font-serif italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Đoàn kết Quốc tế - Nền tảng của sức mạnh thời đại
        </motion.p>

        {/* Stages Timeline */}
        <div className="relative z-20">
          {/* Timeline line (always visible, with fade + glow) */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0">
            {/* main line */}
            <div
              className="h-full w-px bg-gold/45"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            />
            {/* soft glow */}
            <div
              className="absolute inset-0 w-px bg-gold/25 blur-sm"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            />
          </div>

          <div className="space-y-10 md:space-y-24 relative z-10">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 1 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <div
                    className={`bg-card border border-gold/30 rounded-xl p-6 md:p-8 hover:border-gold/60 transition-colors ${
                      index % 2 === 1 ? "md:ml-12" : "md:mr-12"
                    }`}
                  >
                    <span className="text-sm text-accent font-medium">
                      {stage.year}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-gold mt-2 mb-4">
                      {stage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-20">
                  <motion.div
                    className="w-4 h-4 bg-gold rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gold rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Empty space for layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
