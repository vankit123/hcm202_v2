"use client";

import { motion } from "framer-motion";

export function InternationalSolidaritySection() {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-30">
        {/* ===== TITLE ===== */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-gold">
            Tư tưởng Hồ Chí Minh về đại đoàn kết quốc tế
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đoàn kết quốc tế là điều kiện tất yếu để kết hợp sức mạnh dân tộc
            với sức mạnh của thời đại, tạo nên sức mạnh tổng hợp cho cách mạng
            Việt Nam.
          </p>
        </motion.div>

        {/* ===== SECTION 1 ===== */}
        <motion.section
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
              Hồ Chí Minh khẳng định rằng cách mạng Việt Nam không thể tồn tại
              biệt lập, mà là một bộ phận khăng khít của cách mạng thế giới.
              Trong bối cảnh chủ nghĩa đế quốc mang tính toàn cầu, sự nghiệp
              giải phóng dân tộc ở Việt Nam chỉ có thể giành thắng lợi khi gắn
              bó chặt chẽ với phong trào cách mạng tiến bộ trên toàn thế giới.
            </p>
            <p className="text-muted-foreground italic">
              “Cách mạng Việt Nam là một bộ phận của cách mạng thế giới.”
            </p>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="relative h-64 rounded-xl overflow-hidden border border-border bg-gradient-to-br from-red/20 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Hình minh họa: Việt Nam trong phong trào cách mạng thế giới
            </div>
          </div>
        </motion.section>

        {/* ===== SECTION 2 ===== */}
        <motion.section
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* IMAGE */}
          <div className="relative h-64 rounded-xl overflow-hidden border border-border bg-gradient-to-br from-gold/20 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Hình minh họa: Phong trào giải phóng dân tộc & công nhân quốc tế
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-gold">
              2. Nội dung của sức mạnh dân tộc và sức mạnh thời đại
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Theo Hồ Chí Minh, sức mạnh dân tộc là những giá trị nội sinh bền
              vững như lòng yêu nước, ý thức tự lực tự cường và ý chí đấu tranh
              kiên cường. Bên cạnh đó, sức mạnh thời đại bao gồm phong trào giải
              phóng dân tộc, phong trào công nhân quốc tế, sự ủng hộ của các lực
              lượng tiến bộ và thành tựu khoa học – kỹ thuật.
            </p>
            <p className="text-muted-foreground">
              Việc kết hợp hài hòa hai nguồn sức mạnh này tạo nên
              <span className="text-gold font-semibold">
                {" "}
                sức mạnh tổng hợp{" "}
              </span>
              cho cách mạng Việt Nam.
            </p>
          </div>
        </motion.section>

        {/* ===== SECTION 3 ===== */}
        <motion.section
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
              Hồ Chí Minh cho rằng đoàn kết quốc tế không chỉ nhằm phục vụ thắng
              lợi của cách mạng Việt Nam, mà còn góp phần vào sự nghiệp chung
              của toàn nhân loại tiến bộ. Nhân dân Việt Nam không chỉ đấu tranh
              cho độc lập, tự do của dân tộc mình mà còn vì hòa bình, dân chủ và
              chủ nghĩa xã hội trên phạm vi toàn thế giới.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-64 rounded-xl overflow-hidden border border-border bg-gradient-to-br from-red/20 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Hình minh họa: Hòa bình – độc lập – tiến bộ của nhân loại
            </div>
          </div>
        </motion.section>

        {/* ===== SECTION 4 ===== */}
        <motion.section
          className="bg-card border border-border rounded-xl p-8 space-y-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-serif text-2xl text-gold text-center">
            Nguyên tắc tăng cường đoàn kết quốc tế
          </h3>
          <ul className="grid md:grid-cols-3 gap-4 text-muted-foreground text-center">
            <li>❌ Chủ nghĩa cơ hội</li>
            <li>❌ Chủ nghĩa sô-vanh dân tộc</li>
            <li>❌ Chủ nghĩa kỳ thị dân tộc</li>
          </ul>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Đoàn kết quốc tế phải được xây dựng trên cơ sở độc lập, tự chủ, bình
            đẳng và tôn trọng lẫn nhau, hướng tới mục tiêu hòa bình và tiến bộ
            xã hội.
          </p>
        </motion.section>

        {/* ===== CONCLUSION ===== */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-red/30 via-gold/30 to-red/30 border border-gold rounded-xl px-10 py-7">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              ĐỘC LẬP DÂN TỘC GẮN LIỀN
              <br />
              VỚI CHỦ NGHĨA XÃ HỘI
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
