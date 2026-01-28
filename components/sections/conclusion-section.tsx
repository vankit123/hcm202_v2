"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FloatingParticles } from "../animated/floating-particles";
import { AnimatedStars } from "../animated/animated-stars";
import { VietnamMap } from "../vietnam-map";
import { WorldMap } from "../world-map";

export function ConclusionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const vietnamOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  const worldOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="min-h-[150vh] relative py-20 px-6 bg-background overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image
          src="/images/victory-celebration.jpg"
          alt="Chiến thắng"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated Stars */}
      <AnimatedStars count={80} />

      {/* Floating Particles */}
      <FloatingParticles count={50} color="mixed" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />

      {/* Fixed content container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Vietnam Map (fades out) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: vietnamOpacity }}
          >
            <VietnamMap
              className="h-[60vh] w-auto opacity-60"
              glowColor="#d4a853"
              showRegions={false}
            />
          </motion.div>

          {/* World Map (fades in) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: worldOpacity }}
          >
            <WorldMap
              className="w-full max-w-4xl h-auto opacity-40"
              highlightVietnam={true}
              showConnections={true}
              activeConnections={["asia", "africa", "europe", "americas"]}
            />
          </motion.div>

          {/* Conclusion text */}
          <motion.div
            className="relative z-10 text-center px-4"
            style={{ y: textY, opacity: textOpacity }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-serif text-lg md:text-xl tracking-widest text-gold-dim uppercase mb-8">
                Kết luận
              </h2>

              <blockquote className="relative max-w-4xl mx-auto">
                <span className="absolute -top-6 -left-2 md:-left-6 text-5xl md:text-6xl text-gold/20 font-serif">
                  {'"'}
                </span>
                <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-gold leading-tight text-balance">
                  Tư tưởng Hồ Chí Minh về đoàn kết quốc tế là nền tảng để Việt
                  Nam hội nhập bền vững với thế giới
                </p>
                <span className="absolute -bottom-6 -right-2 md:-right-6 text-5xl md:text-6xl text-gold/20 font-serif">
                  {'"'}
                </span>
              </blockquote>

              <motion.div
                className="mt-16 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="px-6 py-3 bg-card/50 border border-gold/30 rounded-full">
                  <span className="text-sm text-muted-foreground">
                    Đoàn kết
                  </span>
                </div>
                <div className="px-6 py-3 bg-card/50 border border-gold/30 rounded-full">
                  <span className="text-sm text-muted-foreground">Tự lực</span>
                </div>
                <div className="px-6 py-3 bg-card/50 border border-gold/30 rounded-full">
                  <span className="text-sm text-muted-foreground">
                    Hội nhập
                  </span>
                </div>
                <div className="px-6 py-3 bg-card/50 border border-gold/30 rounded-full">
                  <span className="text-sm text-muted-foreground">
                    Phát triển
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-8 text-center">
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Bài thuyết trình Lý luận Chính trị
        </motion.p>
      </div>
    </section>
  );
}
