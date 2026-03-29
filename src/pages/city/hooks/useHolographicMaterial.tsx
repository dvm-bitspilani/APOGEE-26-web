import * as THREE from "three";
import { useMemo, useRef, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
import vertexShader from "../../../shaders/holographic/vertex.glsl?raw";
import fragmentShader from "../../../shaders/holographic/fragment.glsl?raw";

export function useHolographicMaterial(
  color: THREE.Color | [number, number, number] = [0, 1, 0.8],
  intensity: number = 1.5,
  stripes: number = 2.0,
) {
  const mounted = useRef(true);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthTest: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      // avoid z-fighting / artifacting by writing depth in a less aggressive way
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
      uniforms: {
        // uTime: { value: 0 },
        // uActive: { value: 0 },
        uColor: { value: new THREE.Color(...color) },
        uBaseIntensity: { value: intensity },
        uStripes: { value: stripes },
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
    material.uniforms.uStripes.value = stripes;
  }, [color, intensity, material]);

  // useFrame((_, dt) => {
  //   if (!mounted.current || !material.uniforms) return;

  //   material.uniforms.uTime.value += dt;
  //   material.uniforms.uActive.value = active ? 1 : 0;
  // });

  return material;
}
