import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Center, ScrollControls } from "@react-three/drei";
import { Instances, Model } from "../models/Model";
import Infernus from "../models/Infernus";
import CityDebug from "../leva/CityDebugLeva/CityDebugLeva";
import { Perf } from "r3f-perf";
import { useCityStore, usePivotStore } from "../../../../utils/store";
import { useCameraMouseParallax } from "../../hooks/useHoverCamera";
import PivotLeva from "../leva/PivotLeva/PivotLeva";
export default function CityScene({}: any) {
  const infernusRef = useRef<THREE.Group>(null!);
  const cityRef = useRef<THREE.Group>(null!);
  const setCity = useCityStore((s) => s.setCity);
  const setPivot = usePivotStore((s) => s.setPivot);
  const carPivotRef = useRef<THREE.Group>(null!);
    useCameraMouseParallax({
    minY: -0.1,
    maxY: 0.1,
  });
  useEffect(() => {
    if (cityRef.current) {
      setCity(cityRef.current);
    }
  }, [setCity]);
  useEffect(() => {
    if (carPivotRef.current) {
      setPivot(carPivotRef.current);
    }
  }, [setPivot]);
  return (
    <>
      <color attach="background" args={["#110013"]} />
      {import.meta.env.DEV && <Perf position="top-left" />}
      <ambientLight intensity={0.5} />
      <Instances>
        <group>
        <group ref={carPivotRef} position={[0, 0, 0]}>
          {/* <ambientLight intensity={0.5} /> */}
          <group ref={cityRef}>
            <axesHelper args={[200]} />
            <Model />
          </group>
          </group>

          <ScrollControls pages={4} damping={0.2}>
            <PivotLeva />
            <CityDebug />
          </ScrollControls>
          <Infernus ref={infernusRef} />
        </group>
      </Instances>
    </>
  );
}
