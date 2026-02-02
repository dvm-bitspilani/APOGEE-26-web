import { useControls } from "leva";
import * as THREE from "three";
import { Model } from "../../models/Model";

export default function CityDebug() {
  const debug = useControls("City (debug)", {
    posX: { value: -10, min: -50, max: 50, step: 0.1 },
    posY: { value: -5, min: -50, max: 50, step: 0.1 },
    posZ: { value: -5, min: -50, max: 50, step: 0.1 },

    rotX: { value: 0, min: -180, max: 180, step: 1 },
    rotY: { value: 0, min: -180, max: 180, step: 1 },
    rotZ: { value: 0, min: -180, max: 180, step: 1 },

    scale: { value: 15, min: 1, max: 50, step: 0.1 },
  });

  return (
    <group
      position={[debug.posX, debug.posY, debug.posZ]}
      rotation={[
        THREE.MathUtils.degToRad(debug.rotX),
        THREE.MathUtils.degToRad(debug.rotY),
        THREE.MathUtils.degToRad(debug.rotZ),
      ]}
      scale={debug.scale}
    >
      <Model />
    </group>
  );
}
