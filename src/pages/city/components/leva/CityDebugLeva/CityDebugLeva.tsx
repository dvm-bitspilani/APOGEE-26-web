import { useControls } from "leva";
import * as THREE from "three";
import { useCityStore } from "../../../../../utils/store";
import { useEffect } from "react";
// import { useCityLandingStart } from "../../../hooks/useCityLandingStart";
import { useCityKeyboardControl } from "../../../hooks/useCityKeyboardControl";

export default function CityDebug() {
  const city = useCityStore((s) => s.city)
  // useCityLandingStart();
  // useCityKeyboardControl();
  const debug = useControls("City (debug)", {
    posX: { value: -130, min: -500, max: 500, step: 0.1 },
    posY: { value: 22.7, min: -500, max: 500, step: 0.1 },
    posZ: { value: 136, min: -500, max: 500, step: 0.1 },

    rotX: { value: 0, min: -180, max: 180, step: 1 },
    rotY: { value: 0, min: -180, max: 180, step: 1 },
    rotZ: { value: 0, min: -180, max: 180, step: 1 },

    scale: { value: 15, min: 1, max: 50, step: 0.1 },
  });
  useEffect(() => {
    if (!city) return

    city.position.set(debug.posX, debug.posY, debug.posZ)
    city.rotation.set(
      THREE.MathUtils.degToRad(debug.rotX),
      THREE.MathUtils.degToRad(debug.rotY),
      THREE.MathUtils.degToRad(debug.rotZ)
    )
    city.scale.setScalar(debug.scale)
  }, [
    city,
    debug.posX,
    debug.posY,
    debug.posZ,
    debug.rotX,
    debug.rotY,
    debug.rotZ,
    debug.scale,
  ])
  return null
}
