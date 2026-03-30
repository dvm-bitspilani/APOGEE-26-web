import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export function useTrailIntensity(
  ref: React.RefObject<THREE.Object3D>
) {
  const [trailIntensity, setTrailIntensity] = useState(3.5);

  const prevPos = useRef(new THREE.Vector3());
  const currentPos = useRef(new THREE.Vector3());
  const speed = useRef(0);
  const smoothedIntensity = useRef(3.5);

  useFrame((_, delta) => {
    if (!ref.current) return;
    delta = Math.min(delta, 0.05);

    ref.current.getWorldPosition(currentPos.current);

    speed.current = currentPos.current.distanceTo(prevPos.current);
    prevPos.current.copy(currentPos.current);

    const targetIntensity = THREE.MathUtils.clamp(
      speed.current * 0.5,
      3.5,
      15
    );

    // SAME smoothing as your code
    smoothedIntensity.current = THREE.MathUtils.lerp(
      smoothedIntensity.current,
      targetIntensity,
      5 * delta
    );

    if (Math.abs(trailIntensity - smoothedIntensity.current) > 0.05) {
      setTrailIntensity(smoothedIntensity.current);
    }
  });

  return trailIntensity;
}