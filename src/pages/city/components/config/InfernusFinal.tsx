import { useEffect } from "react";
import * as THREE from "three";
import { useInfernusStore } from "../../../../utils/store";

export default function InfernusProd() {
  const infernus = useInfernusStore((s) => s.infernus);

  useEffect(() => {
    if (!infernus) return;

    // 🔒 Paste final Leva values here
    infernus.position.set(0.5, -3, 60);
    infernus.rotation.set(
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(0)
    );
    infernus.scale.setScalar(6);
  }, [infernus]);

  return null;
}
