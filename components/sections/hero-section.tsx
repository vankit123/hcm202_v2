"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingParticles } from "../animated/floating-particles";
import { AnimatedStars } from "../animated/animated-stars";
import { VietnamMap } from "../vietnam-map";
import { AnimatedBackground } from "../animated/animated-background";
import { PulseRings } from "../animated/pulse-rings";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ho-chi-minh-portrait.jpg"
          alt="Chủ tịch Hồ Chí Minh"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated Stars Background */}
      <AnimatedStars count={60} />

      {/* Floating Particles */}
      <FloatingParticles count={40} color="mixed" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Aurora Background Effect */}
      <AnimatedBackground variant="aurora" color="mixed" intensity="medium" />

      {/* Pulse Rings - Center */}
      <PulseRings color="mixed" position="center" size="large" className="opacity-30" />
      {/* Vietnam Map Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="h-[70vh] w-[350px] md:w-[450px] relative">
          <VietnamMap
            className="w-full h-full"
            glowColor="#d4a853"
            showRegions={true}
            animated={true}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="font-serif text-lg md:text-xl tracking-widest text-gold-dim uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Tư tưởng Hồ Chí Minh
          </motion.h1>

          <motion.blockquote
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <span className="absolute -top-8 -left-4 text-6xl text-gold/30 font-serif">
              {'"'}
            </span>
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold leading-tight text-balance">
              Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế
            </p>
            <span className="absolute -bottom-8 -right-4 text-6xl text-gold/30 font-serif">
              {'"'}
            </span>
          </motion.blockquote>

          <motion.p
            className="mt-12 text-xl md:text-2xl text-muted-foreground font-serif italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            — Hồ Chí Minh —
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-gold rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
