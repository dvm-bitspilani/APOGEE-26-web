import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";
import { useTheatreCameraStore } from "../../../../../utils/store";

export default function TheatreCameraLeva() {
    const camera = useTheatreCameraStore((s) => s.theatreCamera);

    const debug = useControls("Camera (debug)", {
        posX: { value: 0, min: -100, max: 100, step: 0.1 },
        posY: { value: 7, min: -100, max: 100, step: 0.1 },
        posZ: { value: 12, min: -100, max: 100, step: 0.1 },

        rotX: { value: -5, min: -180, max: 180, step: 1 },
        rotY: { value: 0, min: -180, max: 180, step: 1 },
        rotZ: { value: 0, min: -180, max: 180, step: 1 },
    });

    useFrame(() => {
        if (!camera) return;
        console.log(camera)
        camera.position.set(debug.posX, debug.posY, debug.posZ);
        camera.rotation.set(
            THREE.MathUtils.degToRad(debug.rotX),
            THREE.MathUtils.degToRad(debug.rotY),
            THREE.MathUtils.degToRad(debug.rotZ)
        );
    });

    return null;
}
