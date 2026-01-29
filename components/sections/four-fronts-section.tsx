"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Users, Globe, Handshake, Shield } from "lucide-react";
import { FloatingParticles } from "../animated/floating-particles";
import { PulseRings } from "../animated/pulse-rings";
import { AnimatedBackground } from "../animated/animated-background";
import { FlowingLines } from "../animated/flowing-lines";
import { RisingParticles } from "../animated/rising-particles";

const fronts = [
  {
    id: "national",
    icon: Users,
    title: "Mặt trận Đại đoàn kết Dân tộc",
    description:
      "Tập hợp, đoàn kết rộng rãi các giai cấp, tầng lớp, dân tộc, tôn giáo trong nước thành một khối thống nhất.",
    color: "gold",
  },
  {
    id: "indochina",
    icon: Handshake,
    title: "Liên minh Việt – Lào – Campuchia",
    description:
      "Mối quan hệ đặc biệt, gắn bó keo sơn giữa ba nước Đông Dương trong đấu tranh và xây dựng.",
    color: "red",
  },
  {
    id: "afroasian",
    icon: Globe,
    title: "Đoàn kết nhân dân Á – Phi",
    description:
      "Liên kết với các phong trào giải phóng dân tộc ở châu Á và châu Phi chống chủ nghĩa thực dân.",
    color: "gold",
  },
  {
    id: "world",
    icon: Shield,
    title: "Đoàn kết Nhân dân Thế giới chống Đế quốc",
    description:
      "Mặt trận rộng lớn của các lực lượng tiến bộ trên toàn cầu vì hòa bình, độc lập và tiến bộ xã hội.",
    color: "red",
  },
];

export function FourFrontsSection() {
  const [activeFront, setActiveFront] = useState<string | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-background relative overflow-hidden">
      {/* Pulse Rings at center */}
      <PulseRings color="gold" />

      {/* Floating Particles */}
      <FloatingParticles count={30} color="mixed" />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      {/* Animated Background - Stars */}
      <AnimatedBackground variant="stars" color="gold" intensity="medium" />

      {/* Flowing Lines */}
      <div className="absolute inset-0 opacity-25">
        <FlowingLines color="mixed" direction="diagonal" count={8} />
      </div>

      {/* Rising Particles */}
      <RisingParticles color="gold" count={35} speed="medium" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-center text-gold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Bốn Mặt trận Đoàn kết Quốc tế
        </motion.h2>

        {/* Radial layout */}
        <div className="relative">
          {/* Center - Vietnam */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gold/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative bg-card border-2 border-gold rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-xl md:text-2xl text-gold font-bold block">
                    VIỆT NAM
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Trung tâm
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Four fronts in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-32 md:py-40">
            {fronts.map((front, index) => (
              <motion.div
                key={front.id}
                className={`relative ${
                  index % 2 === 0 ? "md:justify-self-end" : "md:justify-self-start"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Connection line */}
                <motion.div
                  className="absolute hidden md:block"
                  style={{
                    width: "80px",
                    height: "2px",
                    background: `linear-gradient(to ${index % 2 === 0 ? "right" : "left"}, transparent, ${front.color === "gold" ? "#d4a853" : "#8b4545"})`,
                    top: "50%",
                    [index % 2 === 0 ? "right" : "left"]: "-80px",
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                />

                <motion.div
                  className={`bg-card border rounded-xl p-6 cursor-pointer transition-all duration-300 max-w-sm ${
                    front.color === "gold"
                      ? "border-gold/30 hover:border-gold hover:shadow-[0_0_30px_rgba(212,168,83,0.2)]"
                      : "border-red/30 hover:border-red hover:shadow-[0_0_30px_rgba(139,69,69,0.2)]"
                  } ${activeFront === front.id ? (front.color === "gold" ? "border-gold shadow-[0_0_30px_rgba(212,168,83,0.3)]" : "border-red shadow-[0_0_30px_rgba(139,69,69,0.3)]") : ""}`}
                  onClick={() =>
                    setActiveFront(activeFront === front.id ? null : front.id)
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        front.color === "gold" ? "bg-gold/20" : "bg-red/20"
                      }`}
                    >
                      <front.icon
                        className={`w-6 h-6 ${
                          front.color === "gold" ? "text-gold" : "text-accent"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-serif text-lg md:text-xl font-semibold ${
                          front.color === "gold" ? "text-gold" : "text-accent"
                        }`}
                      >
                        {front.title}
                      </h3>
                      <motion.p
                        className="text-muted-foreground text-sm leading-relaxed mt-2"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: activeFront === front.id ? "auto" : 0,
                          opacity: activeFront === front.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {front.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
