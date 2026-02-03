import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
export function useCameraMouseParallax({
  minY = -1.65,
  maxY = -1.55,
  lerp = 0.08,
} = {}) {
  const { camera } = useThree();

  useFrame((state) => {
    // mouse.x is already -1 → 1
    const tx = (state.mouse.x + 1) / 2; // 0 → 1
    const ty = (state.mouse.y + 1) / 2; // 0 → 1

    const targetY = THREE.MathUtils.lerp(maxY, minY, tx );
    const targetX = THREE.MathUtils.lerp(0.05, -0.05, -ty );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
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
