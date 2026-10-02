import { Clone, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import type * as THREE from "three";
import { type GLTFResult } from "../../types/starJunction.types";
const BLOCKS = 4;
const SPACING = 44.1;
const positions: [number, number, number][] = Array(BLOCKS).fill(0).map((_, i) => [0, 0.01 * (i % 2), i * SPACING]);

export default function StarJunction() {
  const { scene } = useGLTF("/models/city33-transformed.glb") as unknown as GLTFResult;
  const group = useRef<THREE.Group>(null);
  useEffect(() => {
    // Buildings are static; the outer Theatre group retains its choreography.
    group.current?.traverse(object => { object.updateMatrix(); object.matrixAutoUpdate = false; });
  }, []);
  return <group ref={group}>{positions.map((position, i) => <Clone key={i} object={scene} dispose={null} scale={[1.5, 1.5, 1.5]} rotation={[0, Math.PI / 2, 0]} position={position} />)}</group>;
}
useGLTF.preload("/models/city33-transformed.glb");
