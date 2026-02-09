import { ScrollControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useCityStore, usePivotStore } from "../../../../utils/store";
import ScrollSync from "../ScrollSync/ScrollSync";
import Constellation from "../Constellation";
import PivotFinal from "../config/PivotFinal";
import Infernus from "../models/Infernus";
import { Perf } from "r3f-perf";
import TheatreCameraFinal from "./TheatreCameraFinal";
import SceneLights from "./SceneLights";
import CombinedLeva from "../leva/CombinedLeva";
import FinalProdConfig from "../config/FinalProdConfig";
import SceneDevOrProd from "./SceneDevorProd";

export default function CityScene({}: any) {
  const cityRef = useRef<THREE.Group>(null!);
  const setCity = useCityStore((s) => s.setCity);
  const setPivot = usePivotStore((s) => s.setPivot);
  const carPivotRef = useRef<THREE.Group>(null!);

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
  const color = "#3e93be";
  return (
    <>
      <SceneDevOrProd/>
      <SceneLights />
      <fogExp2 attach="fog" args={[color, 0.004]} />
      {/* <fog attach="fog" args={[color, 50, 2000]} />   */}
      {/* <TheatreCameraLeva  /> //?: Not yet working... */}
      <color attach="background" args={[color]} />
      {/* <e.directionalLight theatreKey="light" intensity={0} color="#250707" /> */}
      <group>
        <group ref={carPivotRef} position={[0, 0, 0]}>
          {/* <ambientLight intensity={0.5} /> */}
          <group ref={cityRef}>
            <axesHelper args={[200]} />
            {/* <CityGrid /> */}
            <Constellation />
          </group>
        </group>

        <group>
          {/* <directionalLight
            position={[0, 10, 0]}
           intensity={0.5} /> */}

          {/* The TheatreCameraFinal is a pre-configured camera with the same settings as above, but with added parallax and scroll effects     */}

          <TheatreCameraFinal />
          <Infernus />
        </group>
        <ScrollControls pages={4} damping={0.2}>
          {/* Use PivotLeva to roate the city around the car's axis */}
          {/* <PivotLeva /> */}
          {/* <PivotFinal /> */}
          {/* Use CItyDebug for position x y and z if by chance u rotate here whole city will be rotated around its axis */}
          {/* <CityDebug /> */}
          <ScrollSync />
        </ScrollControls>
      </group>
    </>
  );
}
