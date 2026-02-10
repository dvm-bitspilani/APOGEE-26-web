// import { useControls } from "leva";
import * as THREE from "three";
import { useEffect } from "react";
import { usePivotStore } from "../../../../utils/store";
// import { useCityLandingStart } from "../../../hooks/useCityLandingStart";
// import { useCityKeyboardControl } from "../../../hooks/useCityKeyboardControl";

export default function PivotFinal() {
  const pivot = usePivotStore((s) => s.pivot)

  const pivotValues = {
    rotX: 0,
    rotY: -180,
    rotZ: 0,
    scale: 15
  };
  useEffect(() => {
    if (!pivot) return

    pivot.rotation.set(
      THREE.MathUtils.degToRad(pivotValues.rotX),
      THREE.MathUtils.degToRad(pivotValues.rotY),
      THREE.MathUtils.degToRad(pivotValues.rotZ)
    )
    pivot.scale.setScalar(pivotValues.scale)
  }, [])
  return null
}
