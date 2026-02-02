import { useRef } from "react";
import * as THREE from "three";
import { ScrollControls } from "@react-three/drei";
import { Instances } from "../models/Model";
import Infernus from "../models/Infernus";
import CityDebug from "../leva/CityDebugLeva/CityDebugLeva";
import { Perf } from "r3f-perf";
export default function CityScene({}: any) {
  const infernusRef = useRef<THREE.Group>(null!);

  return (
    <>
      <color attach="background" args={["#110013"]} />
      {import.meta.env.DEV && <Perf position="top-left" />}
      <ambientLight intensity={0.5} />
      <Instances>
        <group>
          {/* <ambientLight intensity={0.5} /> */}
          <CityDebug />
          <ScrollControls pages={4} damping={0.2}>
            <Infernus ref={infernusRef} />
          </ScrollControls>
        </group>
      </Instances>
    </>
  );
}
