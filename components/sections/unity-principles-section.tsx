"use client";

import { motion } from "framer-motion";
import { RisingParticles } from "../animated/rising-particles";
import { PulseRings } from "../animated/pulse-rings";
import { FlowingLines } from "../animated/flowing-lines";
import { FloatingParticles } from "../animated/floating-particles";
import { AnimatedBackground } from "../animated/animated-background";
import { AnimatedConnections } from "../animated/animated-connections";

export function UnityPrinciplesSection() {
  return (
    <motion.div
      className="max-w-6xl mx-auto mt-20 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
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
      {/* Title */}
      <h3 className="font-serif text-3xl text-gold text-center mb-16">
        Nguyên tắc đoàn kết
      </h3>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT – IMAGE */}
        <div className="space-y-4">
          <div className="w-full h-[420px] rounded-xl overflow-hidden border border-border">
            <img
              src="/images/hcm-phongtraocongsan.jpg"
              alt="Chủ tịch Hồ Chí Minh với cán bộ, chiến sĩ và nhân dân"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <p className="text-sm text-muted-foreground italic text-center">
            Chủ tịch Hồ Chí Minh – biểu tượng của tinh thần đoàn kết, hòa bình và
            hữu nghị quốc tế.
          </p>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="space-y-10">
          {/* a */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl text-gold/90">
              a. Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích
            </h4>

            <ul className="space-y-2 text-muted-foreground">
              <li>
                ● Đoàn kết phải dựa trên sự thống nhất mục tiêu, lợi ích và tinh
                thần có lý, có tình.
              </li>
              <li>
                ● Kết hợp lợi ích dân tộc với lợi ích của phong trào cách mạng
                thế giới, gắn độc lập dân tộc với chủ nghĩa xã hội.
              </li>
              <li>
                ● Tôn trọng độc lập, chủ quyền, quyền tự quyết; làm bạn với các
                nước dân chủ, yêu chuộng hòa bình.
              </li>
              <li>
                ● Giương cao ngọn cờ hòa bình trong công lý; phân biệt rõ bạn và
                thù.
              </li>
            </ul>
          </div>

          {/* b */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl text-gold/90">
              b. Đoàn kết trên cơ sở độc lập, tự chủ
            </h4>

            <ul className="space-y-2 text-muted-foreground">
              <li>
                ● Muốn tranh thủ sự ủng hộ quốc tế, phải có đường lối độc lập, tự
                chủ và đúng đắn.
              </li>
              <li>
                ● Nội lực là nhân tố quyết định; ngoại lực chỉ phát huy tác dụng
                thông qua nội lực.
              </li>
              <li>
                ● “Tự lực cánh sinh, dựa vào sức mình là chính”; có thực lực thì
                ngoại giao mới hiệu quả.
              </li>
            </ul>

            <p className="text-sm text-muted-foreground italic">
              (Hồ Chí Minh: Toàn tập, Nxb Chính trị Quốc gia, 2011, t.6, tr.522)
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
