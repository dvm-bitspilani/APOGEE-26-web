import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import carModel from "../../../../assets/3d/landing/car2k.glb";
const Infernus = forwardRef<THREE.Group>((props, ref) => {
  const { scene } = useGLTF(carModel);

  return (
    <group
      ref={ref}
      rotation={[0, Math.PI / 2, 0]}
      position={[0, -0.2, 2]}
      scale={2}
      {...props}
    >
      <primitive object={scene} />
    </group>
  );
});

export default Infernus;
