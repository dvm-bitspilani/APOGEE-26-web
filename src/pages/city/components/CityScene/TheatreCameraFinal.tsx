import { PerspectiveCamera } from "@theatre/r3f";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheatreCameraStore } from "../../../../utils/store";
import { useHoverCamera } from "../../hooks/useHoverCamera";
import { useDeviceType } from "../../../../hooks/useDeviceType";

export default function TheatreCameraFinal() {
  const theatreCameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const setTheatreCamera = useTheatreCameraStore((s) => s.setTheatreCamera);
  const { isLaptop } = useDeviceType();

  useHoverCamera({
    minY: -0.08,
    maxY: 0.08,
    minX: -0.05,
    maxX: 0.05,
    lerp: 0.08,
    enabled: isLaptop, 
  });

  useEffect(() => {
    if (theatreCameraRef.current) {
      setTheatreCamera(theatreCameraRef.current);
    }
  }, [setTheatreCamera]);

  return (
    <PerspectiveCamera
      makeDefault
      ref={theatreCameraRef}
      near={0.1}
      far={2000}
      fov={39}
      theatreKey="TheatreCamera"
      position={[0, 7, 12]}
      rotation={[0, -Math.PI, 0]}
    />
  );
}
