import * as THREE from "three";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import vertexShader from "../../../shaders/Fog/vertex.glsl?raw";
import fragmentShader from "../../../shaders/Fog/fragment.glsl?raw";
export function useCyberpunkFogMaterial() {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({

  transparent: true,
  depthWrite: false, // VERY important
  blending: THREE.AdditiveBlending, 
       uniforms: {
    u_time: { value: 0 },
    u_density: { value: 0.05 },
    u_heightFalloff: { value: 0.5 },
    
  u_glowStrength: { value: 0.005 },
  u_noiseStrength: { value: 0.1 }, 
    u_cyan: { value: new THREE.Color("#00e5ff") },
    u_purple: { value: new THREE.Color("#ff00ff") },
  },

  vertexShader,
  fragmentShader,
    });
  }, []);

  useFrame((state) => {
    material.uniforms.u_time.value = state.clock.elapsedTime;
  });

  return material;
}