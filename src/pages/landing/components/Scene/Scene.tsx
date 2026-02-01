import { useRef } from "react";
import Infernus from "../models/Infernus";
import CarController from "../CarController/CarController";
import * as THREE from "three";
import type { SceneProps } from "../../types/scene.types";
// import { useTexture } from "@react-three/drei";
// import { PlaneGeometry } from "three";

export default function Scene({
  orbitRef,
  // introDone,
  // setIntroDone,
  setPage,
}: SceneProps) {
  const infernusRef = useRef<THREE.Group>(null!);
  // const offset = new THREE.Vector3(0, 0.2, 0);
  // useEffect(() => {
  //   if (introDone && orbitRef.current && infernusRef.current) {
  //     orbitRef.current.target.copy(new THREE.Vector3(0, 0, 3));
  //     orbitRef.current.update();
  //   }
  // }, [introDone]);
  // const texture = useTexture("/img/SteelSkiesbg.png");
  // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  // texture.repeat.set(8, 8);
  return (
    <>
      {/* <ambientLight intensity={0.5} /> */}
      {/* <mesh position={[0, -0.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />

        <meshBasicMaterial map={texture} depthWrite={false} />
      </mesh> */}

      <Infernus ref={infernusRef} />

      <CarController
        infernusRef={infernusRef}
        orbitRef={orbitRef}
        // introDone={introDone}
        // setIntroDone={setIntroDone}
        setPage={setPage}
      />
    </>
  );
}
