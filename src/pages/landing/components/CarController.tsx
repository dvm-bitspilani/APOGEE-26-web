import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import type { CarControllerProps } from "../types/scene.types";
import { useIntroStore } from "../../../utils/store";

export default function CarController({
  infernusRef,
  orbitRef,
  setPage,
}: CarControllerProps) {
  const scroll = useScroll();
  const introProgress = useRef(0);
  const setIntroDone = useIntroStore((s) => s.setIntroDone);

  useFrame((_, delta) => {
    if (!infernusRef.current) return;

    /* ---------------- INTRO ---------------- */
    if (introProgress.current < 1) {
      introProgress.current += delta * 0.6;
      const t = THREE.MathUtils.clamp(introProgress.current, 0, 1);

      infernusRef.current.scale.setScalar(0.005);

      // phase 1 – slide in
      if (t <= 0.4) {
        const p = t / 0.4;
        infernusRef.current.position.x = -THREE.MathUtils.lerp(5, 1.5, p);
        
      }

      // phase 2 – turn
      else if (t <= 0.7) {
        const p = (t - 0.4) / 0.3;
        infernusRef.current.position.x = -THREE.MathUtils.lerp(1.5, 0, p);
        infernusRef.current.rotation.y = THREE.MathUtils.lerp(
          Math.PI / 2,
          Math.PI / 8,
          p,
        );
        infernusRef.current.position.z = THREE.MathUtils.lerp(2, 2.2, p);
         infernusRef.current.rotation.z= THREE.MathUtils.lerp(0,Math.PI/8,p);
      }

      // phase 3 – move forward
      else {
        const p = (t - 0.7) / 0.3;
        infernusRef.current.rotation.y = THREE.MathUtils.lerp(
          Math.PI / 8,
          0,
          p,
        );
        infernusRef.current.position.z = THREE.MathUtils.lerp(2.2, 3, p);
        infernusRef.current.rotation.z= THREE.MathUtils.lerp(Math.PI/8,0,p);
      }

      if (t === 1 && orbitRef.current ) {
        // infernusRef.current.position.set(0, 0, 3);
        // infernusRef.current.rotation.set(0, 0, 0);
        // infernusRef.current.scale.setScalar(0.005);
        orbitRef.current.target.copy(new THREE.Vector3(0, 0, 3));
        // orbitRef.current?.target.copy(infernusRef.current.position);
        console.log("setting target", infernusRef.current.position);
        // orbitRef.current?.update();
        setIntroDone(true);
      }

      return;
    }

    /* ---------------- SCROLL ---------------- */
    const pageProgress = THREE.MathUtils.clamp(scroll.offset * 4, 0, 1);

    infernusRef.current.rotation.y = (pageProgress * Math.PI) / 2;
    infernusRef.current.scale.setScalar(0.005 + pageProgress * 0.005);

    setPage(Math.floor(scroll.offset * 4));
  });

  return null;
}
