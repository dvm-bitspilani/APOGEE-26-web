import { useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import type { CarControllerProps } from "../../types/scene.types";
import { useCarIntroPhase } from "../../hooks/useCarIntroPhase";
import { useCarReturnPhase } from "../../hooks/useCarReturnPhase";
import { useCarScrollPhase } from "../../hooks/useCarScrollPhase";

export default function CarController({
  infernusRef,
  orbitRef,
  setPage,
}: CarControllerProps) {
  const scroll = useScroll();
  const { camera } = useThree();

  /* ---------------- INTRO ---------------- */
  useCarIntroPhase({
    infernusRef,
    orbitRef,
  });

  // /* ---------------- RETURN ---------------- */
  useCarReturnPhase({
    camera,
    orbitRef,
  });

  /* ---------------- SCROLL ---------------- */
  useCarScrollPhase({
    camera,
    scroll,
    setPage,
  });
  return null;
}
