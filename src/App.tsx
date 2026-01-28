"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AnimatedGradientBg } from "../components/animated/animated-gradient-bg";
import { HeroSection } from "../components/sections/hero-section";
import { PowerFormulaSection } from "../components/sections/power-formula-section";
import { NationalUnitySection } from "../components/sections/national-unity-section";
import { InternationalSolidaritySection } from "../components/sections/international-solidarity-section";
import { FourFrontsSection } from "../components/sections/four-fronts-section";
import { PrinciplesSection } from "../components/sections/principles-section";
import { CurrentEraSection } from "../components/sections/current-era-section";
import { LessonsSection } from "../components/sections/lessons-section";
import { ConclusionSection } from "../components/sections/conclusion-section";
import { DragonBackground } from "../components/3d/DragonBackground";




const sections = [
  { id: "hero", label: "Mở đầu" },
  { id: "power", label: "Công thức" },
  { id: "unity", label: "Đoàn kết" },
  { id: "world", label: "Quốc tế" },
  { id: "fronts", label: "Mặt trận" },
  { id: "principles", label: "Nguyên tắc" },
  { id: "era", label: "Đổi mới" },
  { id: "lessons", label: "Bài học" },
  { id: "conclusion", label: "Kết luận" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showNav, setShowNav] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);
      setShowNav(scrollY > 100);

      // Determine active section
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].element;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sectionElements[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main ref={containerRef} className="relative bg-background">
      {/* Animated background gradient */}
      <AnimatedGradientBg />
      {/* Navigation dots */}
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

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gold z-50 origin-left"
        style={{
          scaleX: scrollProgress,
        }}
      />

      {/* Sections */}
      <div id="hero">
        <HeroSection />
      </div>

      <div id="power">
        <PowerFormulaSection />
      </div>

      <div id="unity">
        <NationalUnitySection />
      </div>

      <div id="world">
        <InternationalSolidaritySection />
      </div>

      <div id="fronts">
        <FourFrontsSection />
      </div>

      <div id="principles">
        <PrinciplesSection />
      </div>

      <div id="era">
        <CurrentEraSection />
      </div>

      <div id="lessons">
        <LessonsSection />
      </div>

      <div id="conclusion">
        <ConclusionSection />
      </div>
    </main>
  );
}
