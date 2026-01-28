"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { VietnamMap } from "../vietnam-map";
import { Factory, Wheat, BookOpen } from "lucide-react";
import { FloatingParticles } from "../animated/floating-particles";
import { OrbitingElements } from "../animated/orbiting-elements";
const allianceItems = [
  {
    icon: Factory,
    label: "Công nhân",
    region: "Bắc",
    position: "top-[15%] left-1/2 -translate-x-1/2",
  },
  {
    icon: Wheat,
    label: "Nông dân",
    region: "Trung",
    position: "top-[45%] left-1/2 -translate-x-1/2",
  },
  {
    icon: BookOpen,
    label: "Trí thức",
    region: "Nam",
    position: "top-[75%] left-1/2 -translate-x-1/2",
  },
];

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

            {/* Alliance icons overlay */}
            {allianceItems.map((item, index) => (
              <motion.div
                key={item.label}
                className={`absolute ${item.position} flex flex-col items-center`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                <div className="bg-card/90 backdrop-blur border border-gold/50 rounded-full p-3 shadow-[0_0_20px_rgba(212,168,83,0.3)]">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="mt-2 text-sm text-gold font-medium">
                  {item.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({item.region})
                </span>
              </motion.div>
            ))}

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
