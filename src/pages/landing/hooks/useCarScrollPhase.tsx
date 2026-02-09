import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useCameraPhase } from "../../../utils/store";

export function useCarScrollPhase({ camera, scroll, setPage }: any) {
  const hasStartedScroll = useRef(false);
  const phase = useCameraPhase((s) => s.phase);

  useFrame(() => {
    /* ---------------- SCROLL ---------------- */
    if (phase !== "scroll") return;

    if (!hasStartedScroll.current && scroll.offset > 0.001) {
      hasStartedScroll.current = true;
    }

    if (!hasStartedScroll.current) return;

    const pageProgress = THREE.MathUtils.clamp(scroll.offset * 4, 0, 1);

    camera.rotation.y = pageProgress * Math.PI;
    camera.position.y = pageProgress * 0.2;
    camera.position.z = 5 - pageProgress * 1.9;

    setPage(Math.floor(scroll.offset * 4));
  });
}
