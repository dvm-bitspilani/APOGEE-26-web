import {useRef } from "react";
import Infernus from "./models/Infernus";
import CarController from "./CarController";
import * as THREE from "three";
import type { SceneProps } from "../types/scene.types";

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

  return (
    <>
      <ambientLight intensity={0.9} />
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
