"use client";

import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Zap,
  Shield,
  Eye,
  Heart,
} from "lucide-react";
import { FloatingParticles } from "../animated/floating-particles";
import { FloatingIcons } from "../animated/floating-icons";
import { AnimatedBackground } from "../animated/animated-background";
import { FlowingLines } from "../animated/flowing-lines";
import { PulseRings } from "../animated/pulse-rings";
import { RisingParticles } from "../animated/rising-particles";

const lessons = [
  {
    icon: Heart,
    title: "Dân giàu",
    subtitle: "Nước mạnh",
    description: "Phát triển kinh tế gắn với công bằng xã hội",
  },
  {
    icon: Globe,
    title: "Hội nhập",
    subtitle: "Quốc tế",
    description: "Chủ động, tích cực trong hội nhập toàn cầu",
  },
  {
    icon: Zap,
    title: "Tự lực",
    subtitle: "Hiện đại hóa",
    description: "Phát huy nội lực, tiếp thu tinh hoa nhân loại",
  },
  {
    icon: Shield,
    title: "Đảng",
    subtitle: "Vững mạnh",
    description: "Xây dựng Đảng trong sạch, vững mạnh",
  },
  {
    icon: Eye,
    title: "Cảnh giác",
    subtitle: "Thù địch",
    description: "Đấu tranh chống các quan điểm sai trái",
  },
  {
    icon: Users,
    title: "Đại đoàn kết",
    subtitle: "Dân tộc",
    description: "Tăng cường khối đại đoàn kết toàn dân",
  },
];

export function LessonsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-background relative overflow-hidden">
      {/* Floating Icons */}
      <FloatingIcons />

      {/* Floating Particles */}
      <FloatingParticles count={30} color="gold" />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />

      {/* Animated Background - Geometric */}
      <AnimatedBackground variant="geometric" color="mixed" intensity="low" />

      {/* Flowing Lines */}
      <div className="absolute inset-0 opacity-30">
        <FlowingLines color="mixed" direction="diagonal" count={8} />
      </div>

      {/* Pulse Rings */}
      <PulseRings color="red" position="center" size="large" className="opacity-20" />

      {/* Rising Particles */}
      <RisingParticles color="mixed" count={25} speed="slow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-center text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Bài học & Giải pháp Hôm nay
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Vận dụng tư tưởng Hồ Chí Minh trong bối cảnh mới
        </motion.p>

        {/* Icon grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-card border border-border rounded-2xl p-6 h-full transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,168,83,0.15)]"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-red/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <lesson.icon className="w-7 h-7 text-gold" />
                </motion.div>

                {/* Title */}
                <h3 className="font-serif text-xl text-gold mb-1">
                  {lesson.title}
                </h3>
                <p className="text-sm text-accent mb-3">{lesson.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lesson.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
