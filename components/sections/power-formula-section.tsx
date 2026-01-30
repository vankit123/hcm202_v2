"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FloatingParticles } from "../animated/floating-particles";
import { OrbitingElements } from "../animated/orbiting-elements";
import { AnimatedBackground } from "../animated/animated-background";
import { FlowingLines } from "../animated/flowing-lines";
import { RisingParticles } from "../animated/rising-particles";
import { PulseRings } from "../animated/pulse-rings";

const nationalPower = [
  "Tinh thần yêu nước",
  "Ý chí tự lực tự cường",
  "Tinh thần chiến đấu",
];

const eraPower = [
  "Phong trào giải phóng dân tộc",
  "Phong trào công nhân quốc tế",
  "Tiến bộ khoa học kỹ thuật",
];

export function PowerFormulaSection() {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  return (
    <>
      <section className="min-h-screen max-w-[70%] mx-auto justify-center py-20 bg-background relative overflow-hidden">
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
        {/* ===== Section Title ===== */}
        <motion.div
          className="text-center max-w-3xl mx-auto z-30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-gold mb-4">
            Tư tưởng Hồ Chí Minh về đại đoàn kết quốc tế
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Hồ Chí Minh khẳng định đoàn kết quốc tế là điều kiện tất yếu để kết
            hợp sức mạnh dân tộc với sức mạnh của thời đại, tạo nên sức mạnh
            tổng hợp cho cách mạng Việt Nam.
          </p>
        </motion.div>

        {/* ===== Block 1 ===== */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-gold">
              1. Kết hợp sức mạnh dân tộc với sức mạnh thời đại
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hồ Chí Minh nhận thức sâu sắc rằng cách mạng Việt Nam không thể
              tồn tại biệt lập, mà là một bộ phận khăng khít của cách mạng thế
              giới. Trong điều kiện chủ nghĩa đế quốc mang tính toàn cầu, sự
              nghiệp giải phóng dân tộc ở Việt Nam chỉ có thể giành thắng lợi
              hoàn toàn khi gắn bó chặt chẽ với phong trào cách mạng tiến bộ
              trên thế giới.
            </p>
            <p className="italic text-muted-foreground">
              “Cách mạng Việt Nam là một bộ phận của cách mạng thế giới.”
            </p>
          </div>

          {/* IMAGE SLOT */}
          <div className="space-y-3">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className=" w-full rounded-xl overflow-hidden border border-border">
                <img
                  src="/images/dinhcaocuacaotraocachmang.jpg"
                  alt="Nhân dân Ba Lan nồng nhiệt đón chào Chủ tịch Hồ Chí Minh năm 1957"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-muted-foreground italic text-center">
                Xô Viết - Nghệ Tĩnh: Đỉnh cao của cao trào cách mạng 1930 – 1931
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ===== Block 2 ===== */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-3">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className=" w-full h-70 rounded-xl overflow-hidden border border-border">
                <img
                  src="/images/phongtraocachmang.jpg"
                  alt="Nhân dân Ba Lan nồng nhiệt đón chào Chủ tịch Hồ Chí Minh năm 1957"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-muted-foreground italic text-center">
                Phong trào cộng sản và công nhân quốc tế đoàn kết, đấu tranh, thắng lợi
              </p>
            </motion.div>
          </div>
       

          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-gold">
              2. Nội dung của sức mạnh dân tộc và sức mạnh thời đại
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sức mạnh dân tộc là những giá trị nội sinh bền vững như lòng yêu
              nước, ý thức tự lực tự cường và ý chí đấu tranh kiên cường. Sức
              mạnh thời đại bao gồm phong trào giải phóng dân tộc, phong trào
              công nhân quốc tế, sự ủng hộ của các lực lượng tiến bộ và thành
              tựu khoa học – kỹ thuật.
            </p>
            <p className="text-muted-foreground">
              Việc kết hợp hai nguồn sức mạnh này tạo nên
              <span className="text-gold font-semibold">
                {" "}
                sức mạnh tổng hợp{" "}
              </span>
              cho cách mạng Việt Nam.
            </p>
          </div>
        </motion.div>

        {/* ===== Block 3 ===== */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-gold">
              3. Đoàn kết quốc tế vì mục tiêu chung của nhân loại
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Theo Hồ Chí Minh, đoàn kết quốc tế không chỉ vì thắng lợi của cách
              mạng Việt Nam mà còn vì sự nghiệp chung của toàn nhân loại tiến
              bộ. Nhân dân Việt Nam không chỉ chiến đấu cho độc lập, tự do của
              dân tộc mình mà còn góp phần vào cuộc đấu tranh vì hòa bình, dân
              chủ và chủ nghĩa xã hội trên phạm vi toàn thế giới.
            </p>
          </div>

          {/* IMAGE SLOT */}
            <div className="space-y-3">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className=" w-full h-70 rounded-xl overflow-hidden border border-border">
                <img
                  src="/images/hoabinh.jpg"
                  alt="Nhân dân Ba Lan nồng nhiệt đón chào Chủ tịch Hồ Chí Minh năm 1957"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-muted-foreground italic text-center">
               Hình minh họa: Hòa bình – độc lập – tiến bộ của nhân loại
              </p>
            </motion.div>
            </div>
        </motion.div>

        {/* ===== Conclusion ===== */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-red/30 via-gold/30 to-red/30 border border-gold rounded-xl px-10 py-6 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              ĐỘC LẬP DÂN TỘC GẮN LIỀN
              <br />
              VỚI CHỦ NGHĨA XÃ HỘI
            </h3>
          </div>
        </motion.div>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-background relative overflow-hidden">
        {/* Orbiting Elements - Center decoration */}
        <div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
            <OrbitingElements />
          </div>

          {/* Floating Particles */}
          <FloatingParticles count={35} color="mixed" />

          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />

          {/* Animated Background - Grid pattern */}
          <AnimatedBackground variant="grid" color="mixed" intensity="low" />

          {/* Flowing Lines */}
          <div className="absolute inset-0 opacity-30">
            <FlowingLines color="mixed" direction="horizontal" count={8} />
          </div>

          {/* Rising Particles */}
          <RisingParticles color="mixed" count={25} speed="medium" />

          <div className="max-w-5xl mx-auto relative z-10">
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
              Từ tư tưởng đại đoàn kết quốc tế, Hồ Chí Minh khái quát thành công
              thức kết hợp sức mạnh dân tộc với sức mạnh thời đại.
            </p>
            <motion.h2
              className="font-serif text-3xl md:text-4xl text-center text-gold mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Công thức sức mạnh cách mạng theo tư tưởng Hồ Chí Minh
            </motion.h2>

            <div className="space-y-8">
              {/* Top row - Two power sources */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <motion.div
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  onMouseEnter={() => setHoveredBlock("national")}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <div className="bg-card border border-gold/30 rounded-lg p-6 md:p-8 text-center transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_rgba(212,168,83,0.3)]">
                    <h3 className="font-serif text-xl md:text-2xl text-gold font-semibold">
                      SỨC MẠNH DÂN TỘC
                    </h3>
                  </div>
                  {/* Tooltip */}
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-card border border-gold/50 rounded-lg p-4 min-w-64 z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: hoveredBlock === "national" ? 1 : 0,
                      y: hoveredBlock === "national" ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      pointerEvents:
                        hoveredBlock === "national" ? "auto" : "none",
                    }}
                  >
                    <ul className="space-y-2">
                      {nationalPower.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-gold rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                <motion.span
                  className="text-4xl text-gold font-light"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  +
                </motion.span>

                <motion.div
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  onMouseEnter={() => setHoveredBlock("era")}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <div className="bg-card border border-red/30 rounded-lg p-6 md:p-8 text-center transition-all duration-300 hover:border-red hover:shadow-[0_0_30px_rgba(139,69,69,0.3)]">
                    <h3 className="font-serif text-xl md:text-2xl text-accent font-semibold">
                      SỨC MẠNH THỜI ĐẠI
                    </h3>
                  </div>
                  {/* Tooltip */}
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-card border border-red/50 rounded-lg p-4 min-w-64 z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: hoveredBlock === "era" ? 1 : 0,
                      y: hoveredBlock === "era" ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      pointerEvents: hoveredBlock === "era" ? "auto" : "none",
                    }}
                  >
                    <ul className="space-y-2">
                      {eraPower.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>

              {/* Arrow down */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <svg
                  width="40"
                  height="60"
                  viewBox="0 0 40 60"
                  fill="none"
                  className="text-gold"
                >
                  <motion.path
                    d="M20 0 L20 50 M5 35 L20 50 L35 35"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </svg>
              </motion.div>

              {/* Combined power */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 border-2 border-gold rounded-xl p-8 md:p-10 text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-gold font-bold">
                    SỨC MẠNH TỔNG HỢP
                  </h3>
                </div>
              </motion.div>

              {/* Arrow down */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <svg
                  width="40"
                  height="60"
                  viewBox="0 0 40 60"
                  fill="none"
                  className="text-gold"
                >
                  <motion.path
                    d="M20 0 L20 50 M5 35 L20 50 L35 35"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  />
                </svg>
              </motion.div>

              {/* Victory */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-red/20 blur-2xl rounded-full" />
                  <div className="relative bg-gradient-to-r from-red/30 via-accent/40 to-red/30 border-2 border-accent rounded-xl p-8 md:p-12 text-center">
                    <h3 className="font-serif text-2xl md:text-4xl text-foreground font-bold">
                      CÁCH MẠNG VIỆT NAM THẮNG LỢI
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* ================= SECTION 5.2.2 ================= */}
        <div className="mt-32 space-y-24 max-w-[70%] mx-auto z-20">
          {/* Rising Particles */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-4">
              Lực lượng đoàn kết quốc tế và hình thức tổ chức
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Trong tư tưởng Hồ Chí Minh, đoàn kết quốc tế là một nguyên tắc
              chiến lược lâu dài, mang tính khách quan của cách mạng Việt Nam,
              chứ không phải là một sách lược hay thủ đoạn chính trị nhất thời.
            </p>
          </motion.div>
          {/* ===== A. Lực lượng đoàn kết quốc tế ===== */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* LEFT: TEXT */}
            <div className="space-y-6">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="font-serif text-2xl text-gold">
                  a. Lực lượng đoàn kết quốc tế
                </h3>

                <ul className="space-y-3 text-muted-foreground">
                  <li>● Phong trào Cộng sản và Công nhân thế giới</li>
                  <li>● Phong trào đấu tranh giải phóng dân tộc</li>
                  <li>● Các lực lượng tiến bộ trên toàn thế giới</li>
                </ul>

                {/* ===== B. Hình thức tổ chức đoàn kết quốc tế ===== */}

                <h3 className="font-serif text-2xl text-gold">
                  b. Hình thức tổ chức
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Hồ Chí Minh khẳng định đoàn kết quốc tế không phải là vấn đề
                  sách lược hay một thủ đoạn chính trị nhất thời, mà là một vấn
                  đề có tính nguyên tắc, là đòi hỏi khách quan của cách mạng
                  Việt Nam.
                </p>

                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    ● Quan tâm đặc biệt đến đoàn kết giữa các dân tộc trên bán
                    đảo Đông Dương
                  </li>
                  <li>
                    ● Củng cố quan hệ đoàn kết hữu nghị, hợp tác nhiều mặt với
                    Trung Quốc – nước láng giềng có quan hệ lịch sử, văn hóa lâu
                    dài với Việt Nam
                  </li>
                  <li>
                    ● Thực hiện đoàn kết với các dân tộc châu Á và châu Phi
                    trong cuộc đấu tranh giành độc lập
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="space-y-3">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className=" w-full rounded-xl overflow-hidden border border-border">
                  <img
                    src="/images/balan-nongnhietchaodon.jpg"
                    alt="Nhân dân Ba Lan nồng nhiệt đón chào Chủ tịch Hồ Chí Minh năm 1957"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm text-muted-foreground italic text-center">
                  Nhân dân Ba Lan nồng nhiệt đón chào Chủ tịch Hồ Chí Minh và
                  Đoàn đại biểu Chính phủ Việt Nam Dân chủ Cộng hòa (7/1957)
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= END SECTION 5.2.2 ================= */}
    </>
  );
}
