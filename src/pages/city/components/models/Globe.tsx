import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Globe(props: any) {
  const { scene } = useGLTF("/models/onlyglobe-v1.glb");
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
  if (ref.current) {
    ref.current.rotation.y += delta * 0.75; 
  }
});

  return <primitive ref={ref} object={scene} {...props} />;
}

useGLTF.preload("/models/onlyglobe-v1.glb");