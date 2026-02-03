import { useControls } from "leva";
import * as THREE from "three";
import { usePivotStore } from "../../../../../utils/store";
import { useEffect } from "react";
import { useCityLandingStart } from "../../../hooks/useCityLandingStart";
// import { useCityKeyboardControl } from "../../../hooks/useCityKeyboardControl";

export default function PivotLeva() {
  const pivot = usePivotStore((s) => s.pivot)
  useCityLandingStart();
  // useCityKeyboardControl();
  const debug = useControls("Pivot (debug)", {
    rotX: { value: 0, min: -180, max: 180, step: 1 },
    rotY: { value: -148, min: -180, max: 180, step: 1 },
    rotZ: { value: 0, min: -180, max: 180, step: 1 },

    scale: { value: 15, min: 1, max: 50, step: 0.1 },
  });
  useEffect(() => {
    if (!pivot) return

    pivot.rotation.set(
      THREE.MathUtils.degToRad(debug.rotX),
      THREE.MathUtils.degToRad(debug.rotY),
      THREE.MathUtils.degToRad(debug.rotZ)
    )
    pivot.scale.setScalar(debug.scale)
  }, [
    pivot,
    debug.rotX,
    debug.rotY,
    debug.rotZ,
    debug.scale,
  ])
  return null
}
