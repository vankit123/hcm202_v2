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
    id: "dan-toc",
    icon: Users,
    title: "Mặt trận Đại đoàn kết Dân tộc",
    description:
      "Khơi dậy sức mạnh nội sinh, quyền tự quyết của dân tộc, tạo nền tảng vững chắc cho sự nghiệp cách mạng.",
    image: "/images/20_12-mattrangiaiphong.jpg",
    caption:
      "20/12/1960 – Thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam",
    color: "gold",
  },
  {
    id: "viet-lao",
    icon: Handshake,
    title: "Liên minh Việt – Lào – Campuchia",
    description:
      "Phối hợp, giúp đỡ lẫn nhau, cùng chiến đấu và giành thắng lợi trước kẻ thù chung.",
    image: "/images/viet-mien-lao.jpg",
    caption:
      "3/1951 – Đại hội Liên minh Việt – Miên – Lào tại Chiến khu Việt Bắc",
    color: "red",
  },
  {
    id: "a-phi",
    icon: Globe,
    title: "Đoàn kết Nhân dân Á – Phi",
    description:
      "Mở rộng và củng cố mối quan hệ đoàn kết giữa Việt Nam với các dân tộc Á – Phi.",
    image: "/images/hcm-thamkimtuthap.jpg",
    caption: "1946 – Chủ tịch Hồ Chí Minh thăm Kim tự tháp Ai Cập",
    color: "gold",
  },
  {
    id: "the-gioi",
    icon: Shield,
    title: "Đoàn kết Nhân dân Thế giới chống Đế quốc",
    description:
      "Tranh thủ sự đồng tình, ủng hộ của các lực lượng tiến bộ trên toàn cầu.",
    image: "/images/8_2-nhandanlienxo.jpg",
    caption: "8/2/1965 – Nhân dân Liên Xô mít-tinh ủng hộ Việt Nam",
    color: "red",
  },
];

export function FourFrontsUnitySection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="min-h-screen  justify-center py-20 px-6 bg-background relative overflow-hidden">
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
      <h2 className="font-serif text-3xl text-center text-gold mb-10">
        Các Mặt trận Đoàn kết Quốc tế
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* CENTER */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-40 h-40 rounded-full border-2 border-gold bg-black flex flex-col items-center justify-center">
            <span className="font-serif text-2xl text-gold">VIỆT NAM</span>
            <span className="text-xs text-muted-foreground">Trung tâm</span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20 py-40">
          {fronts.map((f, i) => {
            const isLeft = i % 2 === 0;
            const expandToLeft = isLeft;
            const isTopRow = i < 2;
            const isActive = active === f.id;

            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative ${
                  isLeft ? "md:justify-self-end" : "md:justify-self-start"
                }`}
              >
                {/* WRAPPER */}
                <div className="relative flex items-center">
                  {/* CARD A – TITLE */}
                  <motion.div
                    onClick={() => setActive(isActive ? null : f.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`cursor-pointer w-[360px] rounded-xl border p-6 bg-black/80 backdrop-blur z-10
            ${
              f.color === "gold"
                ? "border-gold/30 hover:border-gold"
                : "border-red/30 hover:border-red"
            }
          `}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          f.color === "gold" ? "bg-gold/20" : "bg-red/20"
                        }`}
                      >
                        <f.icon
                          className={`w-6 h-6 ${
                            f.color === "gold" ? "text-gold" : "text-accent"
                          }`}
                        />
                      </div>

                      <h3
                        className={`font-serif text-lg ${
                          f.color === "gold" ? "text-gold" : "text-accent"
                        }`}
                      >
                        {f.title}
                      </h3>
                    </div>
                  </motion.div>

                  {/* LINE */}
                  <motion.div
                    className={`absolute top-1/2 ${
                      expandToLeft ? "right-full" : "left-full"
                    }`}
                    style={{
                      width: "5rem",
                      height: "2px",
                      background: f.color === "gold" ? "#d4a853" : "#8b4545",
                      transformOrigin: expandToLeft
                        ? "right center"
                        : "left center",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      rotate: expandToLeft
                        ? isTopRow
                          ? 25 // card trên → xéo lên
                          : -25 // card dưới → xéo xuống
                        : isTopRow
                          ? -25
                          : 25,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />

                  {/* CARD B – CONTENT */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : expandToLeft ? 30 : -30,
                      y: isActive ? 0 : isTopRow ? 30 : -30,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
                    className={`absolute ${
                      expandToLeft
                        ? "right-[calc(100%+6rem)]"
                        : "left-[calc(100%+6rem)]"
                    } w-[420px]`}
                    style={{
                      top: `${isTopRow ? "-260%" : "90%"}`,
                      transform: `translateY(${isTopRow ? "-70%" : "-30%"})`,
                    }}
                  >
                    <div
                      className={`rounded-xl border bg-black/85 backdrop-blur p-6
              ${f.color === "gold" ? "border-gold/30" : "border-red/30"}
            `}
                    >
                      <p className="text-sm text-muted-foreground">
                        {f.description}
                      </p>

                      <div className="mt-4 rounded-lg overflow-hidden border border-border">
                        <img
                          src={f.image}
                          alt={f.title}
                          className="w-full h-40 object-cover"
                        />
                      </div>

                      <p className="text-xs italic text-center text-muted-foreground mt-2">
                        {f.caption}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
