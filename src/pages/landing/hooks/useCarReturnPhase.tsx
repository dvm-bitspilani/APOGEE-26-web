import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import gsap from "gsap";
import { useCameraPhase } from "../../../utils/store";

export function useCarReturnPhase({ camera, orbitRef }: any) {
  const isReturning = useRef(false);
  const phase = useCameraPhase((s) => s.phase);
  const setPhase = useCameraPhase((s) => s.setPhase);
  useFrame(() => {
    /* ---------------- RETURN ---------------- */
    if (phase !== "return" || isReturning.current) return;

    isReturning.current = true;

    gsap.to(camera.position, {
      x: 0,
      y: 0,
      z: 5,
      duration: 1.2,
      ease: "power3.inOut",
      onUpdate: () => {
        orbitRef.current?.update();
      },
      onComplete: () => {
        isReturning.current = false;
        setPhase("scroll");
      },
    });
  });
}
