import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect } from "react";

export default function CameraControllerLeva() {
  const { camera } = useThree();

  const { x, y, z, rotx, roty, rotz } = useControls("Camera", {
    x: { value: 0, min: -50, max: 500, step: 0.04 },
    y: { value: 0, min: -50, max: 500, step:0.04},
    z: { value: 0, min: -50, max: 500, step: 0.04 },
    rotx: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    roty: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    rotz: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
  });

  useEffect(() => {
    camera.position.set(x, y, z);
    camera.rotation.set(rotx, roty, rotz);
    camera.updateProjectionMatrix();
  }, [x, y, z, rotx, roty, rotz, camera]);

  return null;
}
