"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import GoldenCursor from "../components/GoldenCursor";
import { ConclusionSection } from "../components/sections/conclusion-section";
import { FourFrontsUnitySection } from "../components/sections/four-fronts-unity-section";
import { HeroSection } from "../components/sections/hero-section";
import { InternationalSolidaritySection } from "../components/sections/international-solidarity-section";
import { NationalUnityIntegrationSection } from "../components/sections/national-unity-integration-section";
import { NationalUnitySection } from "../components/sections/national-unity-section";
import { PowerFormulaSection } from "../components/sections/power-formula-section";
import { UnityIntegrationConclusionSection } from "../components/sections/unity-integration-conclusion-section";
import { UnityPrinciplesSection } from "../components/sections/unity-principles-section";
const sections = [
  { id: "hero", label: "Mở đầu" },
  { id: "power", label: "Đại đoàn kết & Công thức " },
  { id: "four-fronts-unity", label: "Các mặt trận" },
  { id: "unity-principles", label: "Nguyên tắc đoàn kết" },
  { id: "world", label: "Quốc tế" },
  { id: "unity", label: "Xây dựng khối đại đoàn kết" },
  { id: "unity-integration", label: "Đoàn kết toàn dân & Bài học" },
  { id: "conclusion", label: "Kết luận" },
  { id: "thankyou", label: "Lời tri ân" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showNav, setShowNav] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* =========================
     Scroll: progress + showNav
     ========================= */
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     Active section observer
     ========================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px", // section vào giữa màn hình
        threshold: 0.1,
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main ref={containerRef} className="relative bg-background ">
      {/* Background */}
      {/* <AnimatedGradientBg /> */}
    <GoldenCursor />
      <AnimatePresence>
        {showNav && (
          <motion.nav
            className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section) => (
              <button
                type="button"
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center justify-end"
                aria-label={`Navigate to ${section.label}`}
              >
                <span
                  className={`absolute right-6 px-2 py-1 text-xs rounded bg-card border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                    activeSection === section.id
                      ? "text-gold"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.label}
                </span>

                <motion.div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gold scale-125"
                      : "bg-muted-foreground/50 hover:bg-muted-foreground"
                  }`}
                  whileHover={{ scale: 1.3 }}
                />
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Sections */}
      <div id="hero">
        <HeroSection />
      </div>

      <div id="power">
        <PowerFormulaSection />
      </div>
      <div id="four-fronts-unity">
        <FourFrontsUnitySection />
      </div>
      <div id="unity-principles">
        <UnityPrinciplesSection />
      </div>

      <div id="world">
        <InternationalSolidaritySection />
      </div>

      <div id="unity">
        <NationalUnitySection />
      </div>

      <div id="unity-integration">
        <NationalUnityIntegrationSection />
      </div>

      <div id="conclusion">
        <UnityIntegrationConclusionSection />
      </div>

      {/* Spacer ngăn trigger sớm */}
      <div className="h-[60vh]" />

      <div id="thankyou">
        <ConclusionSection isActive={activeSection === "thankyou"} />
      </div>
    </main>
  );
}
