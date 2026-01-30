"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedBackground } from "../animated/animated-background";
import { AnimatedConnections } from "../animated/animated-connections";
import { FloatingParticles } from "../animated/floating-particles";
import { FlowingLines } from "../animated/flowing-lines";
import { PulseRings } from "../animated/pulse-rings";
import { RisingParticles } from "../animated/rising-particles";
import { WorldMapImage } from "../world-map-image";

const stages = [
  {
    id: 1,
    title: "Muốn là bạn",
    year: "Đại hội VII (1991)",
    image: "/images/daihoiVII.jpg", // ← sau này thay ảnh
    description:
      "Đường lối đối ngoại rộng mở được hình thành, Việt Nam bày tỏ mong muốn thiết lập quan hệ hữu nghị với tất cả các quốc gia trên thế giới, trên cơ sở tôn trọng độc lập, chủ quyền, bình đẳng và cùng có lợi.",
  },
  {
    id: 2,
    title: "Sẵn sàng là bạn",
    year: "Đại hội VIII (1996)",
    image: "/images/daihoi-VIII.jpg",
    description:
      "Việt Nam chủ động mở rộng hợp tác quốc tế, tham gia các cơ chế đa phương, đa lĩnh vực; coi đoàn kết quốc tế là động lực quan trọng nhằm phát huy sức mạnh toàn dân trong thời kỳ công nghiệp hóa, hiện đại hóa đất nước.",
  },
  {
    id: 3,
    title: "Bạn và đối tác tin cậy",
    year: "Đại hội IX → XIII",
    image: "/images/daihoi-XIII.jpg",
    description:
      "Việt Nam hội nhập quốc tế ngày càng sâu rộng, trở thành bạn, đối tác tin cậy và là thành viên có trách nhiệm của cộng đồng quốc tế; uy tín, vị thế và vai trò quốc tế không ngừng được nâng cao.",
  },
];

export function InternationalSolidaritySection() {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <section
      ref={containerRef}
      className="min-h-[150vh] relative py-20 px-6 bg-background overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/global-solidarity.jpg"
          alt="Đoàn kết quốc tế"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      {/* Effects */}
      <AnimatedConnections className="opacity-40" />
      <FloatingParticles count={35} color="mixed" />
      <AnimatedBackground variant="waves" color="mixed" intensity="medium" />

      <div className="absolute inset-0 opacity-30">
        <FlowingLines color="gold" direction="horizontal" count={10} />
      </div>

      <PulseRings
        color="mixed"
        position="top-right"
        size="large"
        className="opacity-40"
      />
      <PulseRings
        color="gold"
        position="bottom-left"
        size="medium"
        className="opacity-30"
      />

      <RisingParticles color="mixed" count={30} speed="slow" />

      {/* World Map */}
      <div className="relative pointer-events-none">
        <motion.div
          className="mx-auto w-full max-w-[1500px] h-[520px] opacity-25"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <WorldMapImage className="w-full mx-auto opacity-90" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-[25%]">
        {/* Title */}
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-center text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Việt Nam và Thế giới
        </motion.h2>

        {/* Intro text – đúng mục 5.3 */}
        <motion.p
          className="text-center text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto mb-16 font-serif italic leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Vận dụng tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết
          quốc tế, Đảng và Nhà nước ta kiên định đặt lợi ích quốc gia – dân tộc
          lên hàng đầu, đồng thời chủ động hội nhập, hợp tác bình đẳng và cùng
          có lợi với cộng đồng quốc tế. Sự kết hợp hài hòa giữa sức mạnh dân tộc
          và sức mạnh thời đại đã tạo nên nền tảng vững chắc cho vị thế và uy
          tín quốc tế của Việt Nam trong giai đoạn hiện nay.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Vertical center line */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <div
              className="h-full w-px bg-gold/40"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 w-px bg-gold/20 blur-sm"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            />
          </div>

          <div className="space-y-24 relative z-10">
            {stages.map((stage, index) => {
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={stage.id}
                  className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  {/* LEFT SIDE */}
                  <div
                    className={`flex ${isRight ? "justify-end" : "justify-start"}`}
                  >
                    {!isRight && (
                      <div className="max-w-md bg-card border border-gold/30 rounded-xl p-6 md:p-8 hover:border-gold/60 transition-colors mr-6">
                        {/* TEXT */}
                        <span className="text-sm text-accent font-medium">
                          {stage.year}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-gold mt-2 mb-4">
                          {stage.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {stage.description}
                        </p>
                        {/* IMAGE SLOT */}
                        <div className="mt-5 rounded-lg overflow-hidden border border-gold/20">
                          <div className="relative w-full h-[170px] bg-muted/40 flex items-center justify-center">
                            {stage.image ? (
                              <img
                                src={stage.image}
                                alt={stage.title}
                                className="object-cover"
                              />
                            ) : (
                              <span className="text-sm text-muted-foreground italic">
                                Hình minh họa
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div className="relative flex justify-center">
                    <motion.div
                      className="w-4 h-4 bg-gold rounded-full z-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute w-8 h-8 bg-gold/40 rounded-full blur-md"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    />
                  </div>

                  {/* RIGHT SIDE */}
                  <div
                    className={`flex ${isRight ? "justify-start" : "justify-end"}`}
                  >
                    {isRight && (
                      <div className="max-w-md bg-card border border-gold/30 rounded-xl p-6 md:p-8 hover:border-gold/60 transition-colors ml-6">
                        {/* TEXT */}
                        <span className="text-sm text-accent font-medium">
                          {stage.year}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-gold mt-2 mb-4">
                          {stage.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {stage.description}
                        </p>
                        {/* IMAGE SLOT */}
                        <div className="mt-5 rounded-lg overflow-hidden border border-gold/20">
                          <div className="relative w-full h-[170px] bg-muted/40 flex items-center justify-center">
                            {stage.image ? (
                              <img
                                src={stage.image}
                                alt={stage.title}
                                className="object-cover"
                              />
                            ) : (
                              <span className="text-sm text-muted-foreground italic">
                                Hình minh họa
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.p
          className="text-center text-muted-foreground mt-24 max-w-4xl mx-auto font-serif italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Đại hội đại biểu toàn quốc lần thứ XIII khẳng định: đất nước ta chưa
          bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay
          – một minh chứng sinh động cho giá trị bền vững của tư tưởng Hồ Chí
          Minh về đại đoàn kết dân tộc và đoàn kết quốc tế.
        </motion.p>
      </div>
    </section>
  );
}
