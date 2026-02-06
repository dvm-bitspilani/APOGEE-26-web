import { useControls } from "leva";
import { useEffect } from "react";
import * as THREE from "three";
import { useInfernusStore } from "../../../../../utils/store";

export default function InfernusLeva() {
  const infernus = useInfernusStore((s) => s.infernus);

  const debug = useControls("Infernus (debug)", {
    posX: { value: 0.5, min: -50, max: 50, step: 0.1 },
    posY: { value: -6, min: -50, max: 50, step: 0.1 },
    posZ: { value: 60, min: -50, max: 50, step: 0.1 },

    rotX: { value: 0, min: -180, max: 180, step: 1 },
    rotY: { value: 0, min: -180, max: 180, step: 1 },
    rotZ: { value: 0, min: -180, max: 180, step: 1 },

    scale: { value: 6, min: 0.1, max: 10, step: 0.1 },
  });

  useEffect(() => {
    if (!infernus) return;

    infernus.position.set(debug.posX, debug.posY, debug.posZ);
    infernus.rotation.set(
      THREE.MathUtils.degToRad(debug.rotX),
      THREE.MathUtils.degToRad(debug.rotY),
      THREE.MathUtils.degToRad(debug.rotZ)
    );
    infernus.scale.setScalar(debug.scale);
  }, [
    infernus,
    debug.posX,
    debug.posY,
    debug.posZ,
    debug.rotX,
    debug.rotY,
    debug.rotZ,
    debug.scale,
  ]);

  return null;
}
