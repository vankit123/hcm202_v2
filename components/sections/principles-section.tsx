"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Shield, Globe, Users, Sparkles } from "lucide-react";
import { FloatingParticles } from "../animated/floating-particles";
import { GlowOrbs } from "../animated/glow-orbs";
const principle1Items = [
  { icon: Heart, text: "Tôn trọng độc lập và chủ quyền" },
  { icon: Shield, text: "Hòa bình trong công lý" },
  { icon: Globe, text: "Hữu nghị với mọi quốc gia dân chủ" },
];

export function PrinciplesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/diplomacy.jpg"
          alt="Ngoại giao"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
      </div>

      {/* Glow Orbs */}
      <GlowOrbs />

      {/* Floating Particles */}
      <FloatingParticles count={25} color="gold" />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-center text-gold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Nguyên tắc Đoàn kết Quốc tế
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Principle 1 */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card border border-gold/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gold/20 rounded-xl">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-gold">
                  Nguyên tắc 1
                </h3>
              </div>
              <p className="text-lg text-foreground mb-6 font-medium">
                Đoàn kết có lý, có tình
              </p>
              <div className="space-y-4">
                {principle1Items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <item.icon className="w-5 h-5 text-gold" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Principle 2 */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card border border-red/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red/20 rounded-xl">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-accent">
                  Nguyên tắc 2
                </h3>
              </div>
              <p className="text-lg text-foreground mb-6 font-medium">
                Độc lập, tự chủ, tự lực, tự cường
              </p>

              {/* Concentric circles visualization */}
              <div className="relative flex items-center justify-center py-8">
                {/* Outer ring - International support */}
                <motion.div
                  className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-dashed border-accent/40"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-card px-2">
                    Hỗ trợ quốc tế
                  </span>
                </motion.div>

                {/* Middle ring */}
                <motion.div
                  className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border border-accent/60"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />

                {/* Core circle - Internal strength */}
                <motion.div
                  className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-accent/30 to-red/30 border-2 border-accent flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent/20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs md:text-sm text-accent font-medium text-center">
                    Nội lực
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <blockquote className="relative inline-block">
            <span className="absolute -top-4 -left-4 text-4xl text-gold/30 font-serif">
              {'"'}
            </span>
            <p className="font-serif text-2xl md:text-3xl text-gold italic px-8">
              Chiêng có to, tiếng mới lớn
            </p>
            <span className="absolute -bottom-4 -right-4 text-4xl text-gold/30 font-serif">
              {'"'}
            </span>
          </blockquote>
          <p className="mt-6 text-muted-foreground">
            — Hồ Chí Minh về vai trò của sức mạnh nội tại
          </p>
        </motion.div>
      </div>
    </section>
  );
}
