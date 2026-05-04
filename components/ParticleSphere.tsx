"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Sphere geometry ─────────────────────────────────── */
function Sphere({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const ref = useRef<THREE.Points>(null);
  const COUNT = 12000;

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const sz = new Float32Array(COUNT);
    const phi = Math.PI * (Math.sqrt(5) - 1); // golden angle

    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;

      pos[i * 3]     = Math.cos(theta) * r * 2.2;
      pos[i * 3 + 1] = y * 2.2;
      pos[i * 3 + 2] = Math.sin(theta) * r * 2.2;

      // vary point sizes slightly
      sz[i] = 0.008 + Math.random() * 0.012;
    }
    return { positions: pos, sizes: sz };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;

    // base rotation
    ref.current.rotation.y = t * 0.06;
    ref.current.rotation.x = Math.sin(t * 0.04) * 0.12;

    // mouse parallax — subtle tilt
    const [mx, my] = mouse.current;
    ref.current.rotation.y += mx * 0.3;
    ref.current.rotation.x += my * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={COUNT}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#00d4ff"
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Orbit ring (tilted) ─────────────────────────────── */
function OrbitRing({ tilt, speed }: { tilt: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });

  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[2.2, 0.002, 4, 120]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.12} />
    </mesh>
  );
}

/* ─── Canvas wrapper ──────────────────────────────────── */
export default function ParticleSphere() {
  const mouse = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth - 0.5) * 0.02,
        (e.clientY / window.innerHeight - 0.5) * 0.02,
      ];
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 52 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Sphere mouse={mouse} />
      <OrbitRing tilt={Math.PI / 4} speed={0.04} />
      <OrbitRing tilt={-Math.PI / 6} speed={-0.03} />
    </Canvas>
  );
}
