import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";
import { useTheatreCameraStore } from "../../../../../utils/store";
import { useHoverCamera } from "../../../hooks/useHoverCamera";

export default function TheatreCameraLeva() {
  const camera = useTheatreCameraStore((s) => s.theatreCamera);
  useHoverCamera({
    minY: -0.08,
    maxY: 0.08,
    minX: -0.05,
    maxX: 0.05,
    lerp: 1,
  });

  const debug = useControls("Camera (debug)", {
    posX: { value: 0, min: -100, max: 100, step: 0.1 },
    posY: { value: 7, min: -100, max: 100, step: 0.1 },
    posZ: { value: 12, min: -100, max: 100, step: 0.1 },

    rotX: { value: -5, min: -180, max: 180, step: 1 },
    rotY: { value: 0, min: -180, max: 180, step: 1 },
    rotZ: { value: 0, min: -180, max: 180, step: 1 },
  });

  useFrame(() => {
    if (!camera) return;
    console.log(camera);
    camera.position.set(debug.posX, debug.posY, debug.posZ);
    camera.rotation.set(
      THREE.MathUtils.degToRad(debug.rotX),
      THREE.MathUtils.degToRad(debug.rotY),
      THREE.MathUtils.degToRad(debug.rotZ),
    );
  });

  return null;
}
