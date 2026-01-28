"use client";

import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";

type Props = {
  scrollProgress?: number; // 0 -> 1 (optional)
  className?: string;
};

function DragonModel({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const group = useRef<THREE.Group>(null);

  // Load model (public/models/dragon.glb)
  // If file missing, component will error; so we keep it inside Suspense + try another fallback below
  const gltf = useGLTF("/models/dragon.glb");

  // You can tweak these based on your model scale/orientation
  const baseScale = 1.2;
  const startY = 0.2;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // figure-8 flight path
    const x = Math.sin(t * 0.55) * 2.2;
    const y = startY + Math.sin(t * 1.1) * 0.6 + scrollProgress * 0.6; // scroll affects height a bit
    const z = Math.cos(t * 0.55) * 1.4;

    if (group.current) {
      group.current.position.set(x, y, z);

      // face direction-ish (simple lookAt)
      const lookX = Math.sin((t + 0.08) * 0.55) * 2.2;
      const lookY = startY + Math.sin((t + 0.08) * 1.1) * 0.6 + scrollProgress * 0.6;
      const lookZ = Math.cos((t + 0.08) * 0.55) * 1.4;
      group.current.lookAt(lookX, lookY, lookZ);

      // subtle body roll
      group.current.rotation.z += Math.sin(t * 0.9) * 0.0008;
    }
  });

  return (
    <group ref={group} scale={baseScale}>
      <primitive object={gltf.scene} />
    </group>
  );
}

function DragonPlaceholder({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#d4af37"), // gold-ish
        metalness: 0.35,
        roughness: 0.35,
      }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.sin(t * 0.55) * 2.2;
    const y = 0.2 + Math.sin(t * 1.1) * 0.6 + scrollProgress * 0.6;
    const z = Math.cos(t * 0.55) * 1.4;

    if (mesh.current) {
      mesh.current.position.set(x, y, z);
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.x = Math.sin(t * 0.4) * 0.2;
    }
  });

  return (
    <mesh ref={mesh} material={material} castShadow={false} receiveShadow={false}>
      <torusKnotGeometry args={[0.9, 0.22, 220, 16]} />
    </mesh>
  );
}

export function DragonBackground({ scrollProgress = 0, className }: Props) {
  return (
    <div
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0, // đặt đúng layer tùy layout của bạn
        pointerEvents: "none",
        opacity: 0.9,
      }}
      aria-hidden
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 1.2, 6], fov: 45, near: 0.1, far: 100 }}
      >
        {/* Lighting mềm đều */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} />
        <directionalLight position={[-4, 3, -2]} intensity={0.6} />

        {/* Environment giúp “xịn” hơn */}
        <Suspense fallback={null}>
          <Environment preset="studio" />
        </Suspense>

        {/* Model rồng (nếu có). Nếu bạn chưa có file /models/dragon.glb thì tạm comment dòng DragonModel và dùng placeholder */}
        <Suspense fallback={<DragonPlaceholder scrollProgress={scrollProgress} />}>
          <DragonModel scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Important for drei
useGLTF.preload("/models/dragon.glb");
