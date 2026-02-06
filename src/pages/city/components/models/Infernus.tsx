import { Float, useGLTF } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { forwardRef } from "react";
import * as THREE from "three";
import carModel from "../../../../assets/3d/landing/car4.0.glb";
const Infernus = forwardRef<THREE.Group>((props, ref) => {
  const { scene } = useGLTF(carModel);

  return (
    // <Float floatIntensity={1} rotationIntensity={0.25} speed={5}>
      <e.group
        theatreKey="infernus"
        ref={ref}
        rotation={[0, 0 , 0]}
        position={[0.5, -6, 60]}
        scale={[6,6,6]}
        {...props}
      >
        <primitive object={scene} />
      </e.group>
    // </Float>
  );
});

export default Infernus;
