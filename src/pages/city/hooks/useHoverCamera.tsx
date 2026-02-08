import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import { useTheatreCameraStore } from "../../../utils/store";

export function useHoverCamera({
  minY = -0.08,
  maxY = 0.08,
  minX = -0.05,
  maxX = 0.05,
  lerp = 1,
} = {}) {
  const camera = useTheatreCameraStore((s) => s.theatreCamera);

  // store BASE rotation (0, -PI, 0)
  const baseRot = useRef(new THREE.Euler(0, -Math.PI, 0));

  useFrame((state) => {
    if (!camera) return;

    // normalize mouse → 0..1
    const tx = (state.mouse.x + 1) / 2;
    const ty = (state.mouse.y + 1) / 2;

    // small parallax offsets
    const offsetY = THREE.MathUtils.lerp(minY, maxY, tx);
    const offsetX = THREE.MathUtils.lerp(minX, maxX, ty);

    const targetX = baseRot.current.x - offsetX;
    const targetY = baseRot.current.y - offsetY;

    camera.rotation.x = THREE.MathUtils.lerp(
      camera.rotation.x,
      targetX,
      lerp
    );

    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      targetY,
      lerp
    );
  });
}
