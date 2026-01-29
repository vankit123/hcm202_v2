"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Globe, Award } from "lucide-react";
import { FloatingParticles } from "../animated/floating-particles";
import { AnimatedWaves } from "../animated/animated-waves";
import { AnimatedBackground } from "../animated/animated-background";
import { FlowingLines } from "../animated/flowing-lines";
import { PulseRings } from "../animated/pulse-rings";
import { RisingParticles } from "../animated/rising-particles";

const beforeItems = [
  "Bị cô lập quốc tế",
  "Vị thế quốc tế hạn chế",
  "Kinh tế khó khăn",
  "Hạn chế trong hội nhập",
];

const afterItems = [
  "Hội nhập quốc tế sâu rộng",
  "Uy tín quốc tế cao",
  "Kinh tế phát triển mạnh",
  "Đối tác chiến lược toàn diện",
];

const timeline = [
  { congress: "VII", year: "1991", event: "Khởi đầu đổi mới đối ngoại" },
  { congress: "IX", year: "2001", event: "Hội nhập kinh tế quốc tế" },
  { congress: "XI", year: "2011", event: "Chủ động hội nhập" },
  { congress: "XIII", year: "2021", event: "Đối ngoại đa phương hóa" },
];

export function CurrentEraSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/modern-vietnam.jpg"
          alt="Việt Nam hiện đại"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={25} color="gold" />

      {/* Animated Waves */}
      <AnimatedWaves />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      {/* Animated Background - Aurora */}
      <AnimatedBackground variant="aurora" color="gold" intensity="medium" />

      {/* Flowing Lines */}
      <div className="absolute inset-0 opacity-25">
        <FlowingLines color="gold" direction="horizontal" count={12} />
      </div>

      {/* Pulse Rings */}
      <PulseRings color="gold" position="bottom-right" size="large" className="opacity-35" />
      <PulseRings color="mixed" position="top-left" size="small" className="opacity-25" />

      {/* Rising Particles */}
      <RisingParticles color="gold" count={30} speed="medium" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-center text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Vận dụng trong Thời kỳ Đổi mới
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Từ Đại hội VII đến Đại hội XIII
        </motion.p>

        {/* Before / After comparison */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Before */}
          <motion.div
            className="bg-card border border-red/30 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-xl text-accent mb-6 text-center">
              Trước Đổi mới
            </h3>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="w-2 h-2 bg-accent/50 rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gold/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative bg-card border-2 border-gold rounded-full p-6">
                <TrendingUp className="w-10 h-10 text-gold" />
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            className="bg-card border border-gold/30 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-xl text-gold mb-6 text-center">
              Sau Đổi mới
            </h3>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent -translate-y-1/2" />

          <div className="flex flex-wrap justify-between gap-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.congress}
                className="relative flex flex-col items-center w-1/2 md:w-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Dot */}
                <motion.div
                  className="relative z-10 w-4 h-4 bg-gold rounded-full mb-4"
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content */}
                <div className="text-center bg-card border border-border rounded-lg p-4">
                  <span className="text-sm text-accent">
                    Đại hội {item.congress}
                  </span>
                  <p className="font-serif text-lg text-gold mt-1">
                    {item.year}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 max-w-[150px]">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement badges */}
        <motion.div
          className="mt-20 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 bg-card border border-gold/30 rounded-full px-4 py-2">
            <Globe className="w-4 h-4 text-gold" />
            <span className="text-sm text-muted-foreground">
              190+ quan hệ ngoại giao
            </span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-gold/30 rounded-full px-4 py-2">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-sm text-muted-foreground">
              17 đối tác chiến lược
            </span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-gold/30 rounded-full px-4 py-2">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-sm text-muted-foreground">
              13 FTA đã ký kết
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
