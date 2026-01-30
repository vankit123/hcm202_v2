"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedBackground } from "../animated/animated-background";
import { FloatingParticles } from "../animated/floating-particles";
import { OrbitingElements } from "../animated/orbiting-elements";
import { PulseRings } from "../animated/pulse-rings";
import { RisingParticles } from "../animated/rising-particles";
import { VietnamMap } from "../vietnam-map";

export function NationalUnitySection() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-background relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/unity-hands.jpg"
            alt="Đoàn kết"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>

        {/* Floating Particles */}
        <FloatingParticles count={30} color="gold" />

        {/* Orbiting Elements - positioned to left */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 opacity-30">
          <OrbitingElements />
        </div>

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

        {/* Animated Background - Geometric shapes */}
        <AnimatedBackground variant="geometric" color="gold" intensity="low" />

        {/* Flowing Lines */}

        {/* Pulse Rings - Bottom right */}
        <PulseRings color="gold" position="bottom-right" size="large" />

        {/* Rising Particles */}
        <RisingParticles color="gold" count={20} speed="slow" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="font-serif text-3xl md:text-4xl text-center text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Xây dựng khối đại đoàn kết toàn dân tộc trên nền tảng liên minh công
            - nông - trí dưới sự lãnh đạo của Đảng
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-16 font-serif italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {'"'}Đại đoàn kết toàn dân tộc là đường lối chiến lược, là nguồn sức
            mạnh to lớn quyết định mọi thắng lợi của cách mạng Việt Nam{'"'}
          </motion.p>

          <div className="grid grid-cols-2 xl:grid-cols-[auto,minmax(0,1fr)] gap-70 items-center ">
            {/* Vietnam Map with overlays */}
            <motion.div
              className="relative w-[850px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <VietnamMap
                className="w-full h-auto"
                glowColor="#d4a853"
                showRegions={true}
              />
              {/* Glowing unity layer */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-gold/5 to-gold/10 rounded-full blur-3xl" />
              </motion.div>
            </motion.div>

            {/* Unity explanation */}
            <div className="flex-1 max-w-xl space-y-6">
              <motion.div
                className="bg-card border border-border rounded-xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="font-serif text-xl text-gold mb-3">
                  Khối đại đoàn kết toàn dân
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Đại đoàn kết toàn dân tộc là sự đoàn kết rộng rãi của mọi giai
                  cấp, tầng lớp, dân tộc, tôn giáo, giới tính, độ tuổi và vùng
                  miền trong xã hội.
                </p>
              </motion.div>

              <motion.div
                className="bg-card border border-border rounded-xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="font-serif text-xl text-gold mb-3">
                  Liên minh Công – Nông – Trí
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nền tảng của khối đại đoàn kết toàn dân tộc là liên minh vững
                  chắc giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí
                  thức dưới sự lãnh đạo của Đảng.
                </p>
              </motion.div>

              <motion.div
                className="bg-card border border-border rounded-xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <h3 className="font-serif text-xl text-gold mb-3">
                  Sự lãnh đạo của Đảng
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Đảng Cộng sản Việt Nam là hạt nhân lãnh đạo khối đại đoàn kết
                  toàn dân tộc, bảo đảm sự thống nhất về mục tiêu, đường lối và
                  hành động.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
