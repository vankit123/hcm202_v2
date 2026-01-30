"use client";

import { useEffect, useRef } from "react";

export default function GoldenCursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const opacity = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove);

    const animate = () => {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;

      // ✨ mượt hơn (đừng tăng quá 0.25)
      pos.current.x += dx * 0.18;
      pos.current.y += dy * 0.18;

      const speed = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // opacity easing
      opacity.current += ((speed > 0.5 ? 1 : 0) - opacity.current) * 0.12;

      // DOT
      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(${pos.current.x}px, ${pos.current.y}px, 0)
          translate(-50%, -50%)
        `;
      }

      // TRAIL
      if (trailRef.current) {
        const length = Math.min(speed * 3, 120);

        trailRef.current.style.width = `${length}px`;
        trailRef.current.style.opacity = opacity.current.toString();
        trailRef.current.style.transform = `
          translate3d(${pos.current.x}px, ${pos.current.y}px, 0)
          translate(-100%, -50%)
          rotate(${angle}deg)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* TRAIL */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{
          height: "6px", // 👈 mỏng
          borderRadius: "999px",
          background:
            "linear-gradient(90deg, rgba(255,215,120,0.9), rgba(212,168,83,0.4), transparent)",
          filter: "blur(4px)", // 👈 blur nhẹ
          transformOrigin: "right center",
          mixBlendMode: "screen",
        }}
      />

      {/* DOT */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,220,150,1) 0%, rgba(212,168,83,0.8) 40%, transparent 70%)",
          filter: "blur(3px)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
