"use client";

import { motion } from "framer-motion";

export function UnityIntegrationConclusionSection() {
	return (
		<section className="py-24 px-6 bg-background relative">
			<div className="max-w-7xl mx-auto relative z-10">
				{/* Conclusion */}
				<motion.div
					className="mt-20 bg-card border border-gold/30 rounded-xl p-10"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h3 className="font-serif text-3xl tracking-widest text-gold uppercase mb-8 text-center">
						Kết luận
					</h3>

					<p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
						Tư tưởng Hồ Chí Minh về đoàn kết và hợp tác quốc tế đã phát huy hiệu
						quả to lớn trong sự nghiệp đấu tranh giành độc lập dân tộc và bảo vệ
						Tổ quốc Việt Nam, đồng thời góp phần tích cực vào cuộc đấu tranh vì
						hòa bình và tiến bộ của nhân loại. Trong bối cảnh hội nhập quốc tế
						sâu rộng hiện nay, những quan điểm đó vẫn giữ nguyên giá trị thời
						sự, tiếp tục được quán triệt và thấm sâu vào đường lối đối ngoại của
						Đảng và Nhà nước, tạo nền tảng vững chắc để Việt Nam hội nhập quốc
						tế một cách chủ động, toàn diện và hiệu quả.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

