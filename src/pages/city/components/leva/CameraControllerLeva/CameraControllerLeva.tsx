import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect } from "react";
import * as THREE from "three";

export default function CameraControllerLeva() {
  const { camera } = useThree();

  const { x, y, z, rotx, roty, rotz, fov, near, far } = useControls("Camera", {
    x: { value: 0, min: -50, max: 500, step: 0.04 },
    y: { value: 0, min: -50, max: 500, step: 0.04 },
    z: { value: 0, min: -50, max: 500, step: 0.04 },

    rotx: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    roty: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
    rotz: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },

    fov: { value: 50, min: 10, max: 120, step: 1 },
    near: { value: 0.1, min: 0.01, max: 50, step: 0.01 },
    far: { value: 1000, min: 50, max: 5000, step: 10 },
  });

  useEffect(() => {
    // Ensure this only runs for PerspectiveCamera
    if ((camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const cam = camera as THREE.PerspectiveCamera;

      cam.position.set(x, y, z);
      cam.rotation.set(rotx, roty, rotz);

      cam.fov = fov;
      cam.near = near;
      cam.far = far;

      cam.updateProjectionMatrix();
    }
  }, [x, y, z, rotx, roty, rotz, fov, near, far, camera]);

  return null;
}
