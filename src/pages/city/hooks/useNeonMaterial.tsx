import * as THREE from "three";
import { useMemo, useRef, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
import vertexShader from "../../../shaders/carNeon/carNeon.vert.glsl?raw";
import fragmentShader from "../../../shaders/carNeon/carNeon.frag.glsl?raw";

export function useNeonMaterial(
   color: THREE.Color | [number, number, number] = [0, 1, 0.8],
   intensity: number = 1.5
) {
  const mounted = useRef(true);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        // uTime: { value: 0 },
        // uActive: { value: 0 },
        uColor: { value: new THREE.Color(...color) },
        uBaseIntensity: { value: intensity }
      },
      vertexShader,
      fragmentShader
    });
  }, []);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
      material.dispose(); // cleanup GPU memory
    };
  }, [material]);

  useEffect(() => {
    if (!material.uniforms) return;

    material.uniforms.uColor.value.set(...color);
    material.uniforms.uBaseIntensity.value = intensity;
  }, [color, intensity, material]);

  // useFrame((_, dt) => {
    // if (!mounted.current || !material.uniforms) return;

    // material.uniforms.uTime.value += dt;
    // material.uniforms.uActive.value = active ? 1 : 0;
  // });

  return material;
}
