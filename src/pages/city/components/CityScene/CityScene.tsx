import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ScrollControls } from "@react-three/drei";
import { Instances, Model } from "../models/Model";
import Infernus from "../models/Infernus";
import CityDebug from "../leva/CityDebugLeva/CityDebugLeva";
import { Perf } from "r3f-perf";
import { useCityStore } from "../../../../utils/store";
export default function CityScene({}: any) {
  const infernusRef = useRef<THREE.Group>(null!);
  const cityRef = useRef<THREE.Group>(null!);
  const setCity = useCityStore((s) => s.setCity);

  useEffect(() => {
    if (cityRef.current) {
      setCity(cityRef.current);
    }
  }, [setCity]);
  return (
    <>
      <color attach="background" args={["#110013"]} />
      {import.meta.env.DEV && <Perf position="top-left" />}
      <ambientLight intensity={0.5} />
      <Instances>
        <group>
          {/* <ambientLight intensity={0.5} /> */}
          <group ref={cityRef}>
            <Model />
          </group>
          <ScrollControls pages={4} damping={0.2}>
            <CityDebug />
          </ScrollControls>
          <Infernus ref={infernusRef} />
        </group>
      </Instances>
    </>
  );
}
