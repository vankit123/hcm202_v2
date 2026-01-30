"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FloatingParticles } from "../animated/floating-particles";
import { AnimatedStars } from "../animated/animated-stars";

import { AnimatedBackground } from "../animated/animated-background";
import { FlowingLines } from "../animated/flowing-lines";
import { PulseRings } from "../animated/pulse-rings";
import { RisingParticles } from "../animated/rising-particles";
import { useInView } from "framer-motion";

interface ConclusionSectionProps {
  isActive: boolean;
}
export function ConclusionSection({ isActive }: ConclusionSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "center center"],
  });
  const textY = useTransform(scrollYProgress, [0.0, 0.15], [20, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.0, 0.12], [1, 1]);
  const triggerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isActive) {
      setThankYouDone(false);
    }
  }, [isActive]);
  const isInView = useInView(triggerRef, {
    once: true,
    margin: "-30% 0px -30% 0px", // ⬅️ chỉ trigger khi vào sâu
  });
  const [thankYouDone, setThankYouDone] = useState(false);
  const thankYouLines = [
    "Nhóm chúng mình xin trân trọng cảm ơn các bạn đã lắng nghe phần trình bày.",
    "Cảm ơn cô đã luôn tận tình giảng dạy,",
    "truyền đạt những giá trị lý luận sâu sắc và định hướng tư duy đúng đắn",
    "trong quá trình học tập môn Tư tưởng Hồ Chí Minh.",
    "",
    "Bài thuyết trình là kết quả của sự tìm hiểu, trao đổi và nỗ lực chung",
    "của cả nhóm. Dù còn nhiều hạn chế, chúng em rất mong nhận được",
    "những ý kiến đóng góp quý báu từ cô để bài làm được hoàn thiện hơn.",
    "",
    "Chúng em xin chân thành cảm ơn!",
  ];
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

      {/* Animated Background - Aurora */}
      <AnimatedBackground variant="aurora" color="mixed" intensity="high" />

      {/* Flowing Lines */}
      <div className="absolute inset-0 opacity-35">
        <FlowingLines color="gold" direction="horizontal" count={10} />
      </div>

      {/* Pulse Rings */}
      <PulseRings
        color="gold"
        position="center"
        size="large"
        className="opacity-25"
      />
      <PulseRings
        color="red"
        position="top-right"
        size="medium"
        className="opacity-20"
      />
      <PulseRings
        color="mixed"
        position="bottom-left"
        size="medium"
        className="opacity-20"
      />

      {/* Rising Particles */}
      <RisingParticles color="gold" count={40} speed="slow" />

      {/* Fixed content container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Conclusion text */}
          {/* Thank you text */}
          <motion.div
            className="relative z-10 text-center px-4"
            style={{ y: textY, opacity: textOpacity }}
          >
            <motion.h2
              className="font-serif text-3xl tracking-widest text-gold-dim uppercase mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Lời cảm ơn
            </motion.h2>

            {/* Animated thank-you text – typewriter */}
            <motion.div
              className="max-w-4xl mx-auto space-y-6"
              initial={{ opacity: 1 }}
              ref={triggerRef}
            >
              {thankYouLines.map((line, lineIndex) => {
                let baseDelay = lineIndex * 1.4;

                return (
                  <p
                    key={lineIndex}
                    className="font-serif text-lg md:text-2xl text-gold leading-relaxed"
                  >
                    {line.split("").map((char, charIndex) => {
                      const isLastLine = lineIndex === thankYouLines.length - 1;
                      const isLastChar = charIndex === line.length - 1;

                      return (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                          transition={{
                            duration: 0.12,
                            delay: baseDelay + charIndex * 0.045,
                            ease: "easeOut",
                          }}
                          onAnimationComplete={() => {
                            if (isLastLine && isLastChar && isActive) {
                              setThankYouDone(true);
                            }
                          }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      );
                    })}
                  </p>
                );
              })}
            </motion.div>
            {thankYouDone && (
              <motion.div
                className="mt-16"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.4,
                    },
                  },
                }}
              >
                <motion.p
                  className="font-serif text-base md:text-lg tracking-widest text-gold-dim uppercase mb-6"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  Nhóm thực hiện
                </motion.p>

                <motion.ul className="space-y-3">
                  {[
                    "Văn Kính Kiệt",
                    "Lê Hữu Nghĩa",
                    "Cao Thế Quân",
                    "Nguyễn Quốc Sơn",
                    "Hoàng Vũ",
                  ].map((name, index) => (
                    <motion.li
                      key={index}
                      className="font-serif text-lg md:text-xl text-gold"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {name}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
