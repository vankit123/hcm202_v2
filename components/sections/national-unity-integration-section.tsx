"use client";

import { motion } from "framer-motion";
import { FloatingParticles } from "../animated/floating-particles";
import { AnimatedStars } from "../animated/animated-stars";
import { AnimatedBackground } from "../animated/animated-background";
import { FlowingLines } from "../animated/flowing-lines";
import { PulseRings } from "../animated/pulse-rings";
import { RisingParticles } from "../animated/rising-particles";
import { useState } from "react";
export function NationalUnityIntegrationSection() {
    const [openLessons, setOpenLessons] = useState(true);
  return (
    <section className="py-24 px-6 bg-background relative">
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
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full 
                  bg-gold/10 blur-[140px]"
        />
        {/* Title */}
        <motion.h2
          className="relative font-serif text-3xl md:text-4xl text-center text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow behind title */}
          <span className="absolute inset-0 -z-10 blur-2xl bg-gold/40 rounded-full" />
          Đại đoàn kết toàn dân tộc gắn với đoàn kết quốc tế
        </motion.h2>

        {/* Quote */}
        <motion.p
          className="relative text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-20 font-serif italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="absolute inset-0 -z-10 bg-gold/10 blur-3xl rounded-full" />
          {'"'}Cách mạng Việt Nam là một bộ phận không thể tách rời của cách
          mạng thế giới{'"'}
        </motion.p>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <motion.div
            className="bg-card border border-border rounded-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-xl text-gold mb-4">
              Kết hợp sức mạnh dân tộc với sức mạnh thời đại
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Trong giai đoạn cách mạng hiện nay, đại đoàn kết toàn dân tộc phải
              luôn gắn liền với đoàn kết quốc tế. Hồ Chí Minh nhất quán coi cách
              mạng Việt Nam là một bộ phận không thể tách rời của cách mạng thế
              giới, từ đó chủ động đoàn kết, ủng hộ các phong trào cách mạng,
              các xu hướng và trào lưu tiến bộ của thời đại vì mục tiêu hòa
              bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="bg-card border border-border rounded-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Clickable title */}
            <button
              onClick={() => setOpenLessons(!openLessons)}
              className="w-full text-left group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl text-gold mb-2">
                  Những bài học trong chiến lược đoàn kết quốc tế
                </h3>

                <motion.span
                  animate={{ rotate: openLessons ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gold"
                >
                  ▼
                </motion.span>
              </div>

         
            </button>

            {/* Animated list */}
            <motion.ul
              className="mt-6 space-y-4 text-muted-foreground leading-relaxed list-disc list-inside"
              initial="closed"
              animate={openLessons ? "open" : "closed"}
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {[
                "Xác định rõ mục tiêu đoàn kết quốc tế nhằm thực hiện thắng lợi nhiệm vụ cách mạng trong giai đoạn hiện nay: dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
                "Chủ động mở cửa, hội nhập quốc tế, là bạn và đối tác tin cậy của tất cả các quốc gia, phấn đấu vì hòa bình, độc lập và phát triển, đồng thời tích cực tham gia giải quyết các vấn đề toàn cầu.",
                "Giữ vững tinh thần độc lập, tự chủ, tự lực, tự cường; kết hợp chặt chẽ sức mạnh dân tộc với sức mạnh thời đại, sức mạnh trong nước với sức mạnh quốc tế để công nghiệp hóa, hiện đại hóa đất nước.",
                "Xây dựng Đảng trong sạch, vững mạnh làm hạt nhân của khối đại đoàn kết toàn dân tộc và đoàn kết quốc tế; không ngừng đổi mới, chỉnh đốn Đảng, nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      height: "auto",
                    },
                    closed: {
                      opacity: 0,
                      y: -10,
                      height: 0,
                    },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
