import { PerspectiveCamera } from "@theatre/r3f";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheatreCameraStore } from "../../../../utils/store";
import ResponsiveCamera from "../ResponiveCamera";
import { editable as e } from "@theatre/r3f";
// import { useHoverCamera } from "../../hooks/useHoverCamera";
// import { useDeviceType } from "../../../../hooks/useDeviceType";

export default function TheatreCameraFinal() {
  const theatreCameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const setTheatreCamera = useTheatreCameraStore((s) => s.setTheatreCamera);
//   useEffect(() => {
//   if (!theatreCameraRef.current) return;
//   theatreCameraRef.current.layers.enable(1); // car
//   theatreCameraRef.current.layers.enable(2); // city
// }, []);
  // const { isLaptop } = useDeviceType();

  // useHoverCamera({
  //   minY: -0.04,
  //   maxY: 0.04,
  //   minX: -0.04,
  //   maxX: 0.04,
  //   lerp: 0.03,
  //   enabled: isLaptop, 
  // });

  useEffect(() => {
    if (theatreCameraRef.current) {
      setTheatreCamera(theatreCameraRef.current);
    }
  }, [setTheatreCamera]);

  return (
    <e.group theatreKey="TheatreCamera">
      <PerspectiveCamera
        makeDefault
        theatreKey="ActualCamera"
        ref={theatreCameraRef}
        near={0.1}
        far={1000}
        // theatreKey="TheatreCamera"
        name="TheatreCamera"
      />
      <ResponsiveCamera />
    </e.group>
  );
}
