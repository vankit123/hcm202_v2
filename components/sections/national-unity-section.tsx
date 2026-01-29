"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { VietnamMap } from "../vietnam-map";
import { Factory, Wheat, BookOpen } from "lucide-react";
import { FloatingParticles } from "../animated/floating-particles";
import { OrbitingElements } from "../animated/orbiting-elements";
import { AnimatedBackground } from "../animated/animated-background";
import { FlowingLines } from "../animated/flowing-lines";
import { PulseRings } from "../animated/pulse-rings";
import { RisingParticles } from "../animated/rising-particles";


export function NationalUnitySection() {
  return (
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
      <div className="absolute inset-0 opacity-40">
        <FlowingLines color="gold" direction="diagonal" count={6} />
      </div>

      {/* Pulse Rings - Bottom right */}
      <PulseRings color="gold" position="bottom-right" size="large" />

      {/* Rising Particles */}
      <RisingParticles color="gold" count={20} speed="slow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-center text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Đại đoàn kết Dân tộc
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-16 font-serif italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {'"'}Đại đoàn kết toàn dân tộc là đường lối chiến lược{'"'}
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Vietnam Map with overlays */}
          <motion.div
            className="relative w-full max-w-xs lg:max-w-sm"
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
                Đoàn kết toàn dân tộc không phân biệt dân tộc, tôn giáo, giai
                cấp, giới tính, độ tuổi, vùng miền. Tất cả đều là con dân nước
                Việt.
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
                Nền tảng của khối đại đoàn kết là liên minh vững chắc giữa giai
                cấp công nhân, nông dân và đội ngũ trí thức dưới sự lãnh đạo của
                Đảng.
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
                Đảng Cộng sản Việt Nam là hạt nhân lãnh đạo, là trục xương sống
                xuyên suốt từ Bắc vào Nam, từ miền núi đến biển đảo.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
