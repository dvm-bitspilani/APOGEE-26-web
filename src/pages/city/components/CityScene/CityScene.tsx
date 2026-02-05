import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ScrollControls } from "@react-three/drei";
import { Instances } from "../models/Model";
import Infernus from "../models/Infernus";
import CityDebug from "../leva/CityDebugLeva/CityDebugLeva";
import { Perf } from "r3f-perf";
import { useCityStore, usePivotStore } from "../../../../utils/store";
// import { useCameraMouseParallax } from "../../hooks/useHoverCamera";
// import {useCarInsideScroll} from "../../hooks/useCarInsideScroll"
import CityGrid from "../CityGrid";
import PivotLeva from "../leva/PivotLeva/PivotLeva";
import { PerspectiveCamera, editable as e } from '@theatre/r3f';
export default function CityScene({ }: any) {
  const infernusRef = useRef<THREE.Group>(null!);
  const cityRef = useRef<THREE.Group>(null!);
  const setCity = useCityStore((s) => s.setCity);
  const setPivot = usePivotStore((s) => s.setPivot);
  const carPivotRef = useRef<THREE.Group>(null!);
  //   useCameraMouseParallax({
  //   minY: -0.1,
  //   maxY: 0.1,
  // });
  // useCarInsideScroll();
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
      {/* {import.meta.env.DEV && <Perf position="top-left" />} */}
      <ambientLight intensity={0.5} />
      <Instances>
        <group>
          <group ref={carPivotRef} position={[0, 0, 0]}>
            {/* <ambientLight intensity={0.5} /> */}
            <group ref={cityRef}>
              <axesHelper args={[200]} />
              <CityGrid />
            </group>
          </group>

          <ScrollControls pages={4} damping={0.2}>
            {/* Use PivotLeva to roate the city around the car's axis */}
            <PivotLeva />
            {/* Use CItyDebug for position x y and z if by chance u rotate here whole city will be rotated around its axis */}
            <CityDebug />
          </ScrollControls>
          <e.group theatreKey="CamCar">
            {/* <directionalLight
            position={[0, 10, 0]}
           intensity={0.5} /> */}
            <PerspectiveCamera
              makeDefault
              near={0.1}
              far={1000000}
              fov={39}
              theatreKey="Camera"
              position={[0, 7, 12]}
              rotation={[-Math.PI*0.15, 0, 0]}
            />
            <Infernus ref={infernusRef} />
          </e.group>
        </group>
      </Instances>
    </>
  );
}
