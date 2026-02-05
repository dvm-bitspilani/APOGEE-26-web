import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import carModel from "../../../../assets/3d/landing/car4.0.glb";
import { editable as e } from "@theatre/r3f";
const Infernus = forwardRef<THREE.Group>((props, ref) => {
  const { scene } = useGLTF(carModel);

  return (
    <e.group
      theatreKey="infernus"
      ref={ref}
      rotation={[0, Math.PI , 0]}
      position={[0, -1.2, 0]}
      scale={2}
      {...props}
    >
      <primitive object={scene} />
    </e.group>
  );
});

export default Infernus;
