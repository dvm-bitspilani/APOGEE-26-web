import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";

export function useNeonMaterial(active: boolean) {
  const mounted = useRef(true);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uActive: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uActive;

        void main() {
          float glow = sin(uTime * 2.0) * 0.5 + 1.0;

          vec3 neon = vec3(0.0, 1.0, 0.8);
          vec3 base = vec3(0.02, 0.02, 0.03);

          vec3 color = mix(base, neon * glow * 1.5, uActive);
          float alpha = 0.85 + glow * 0.15;

          gl_FragColor = vec4(color, alpha);
        }
      `
    });
  }, []);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      material.dispose(); // prevent ghost material
    };
  }, [material]);

  useFrame((_, dt) => {
    if (!mounted.current) return;
    if (!material || !material.uniforms) return;

    material.uniforms.uTime.value += dt;
    material.uniforms.uActive.value = active ? 1 : 0;
  });

  return material;
}
