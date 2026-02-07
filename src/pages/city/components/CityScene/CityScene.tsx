import { ScrollControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useCityStore, usePivotStore } from "../../../../utils/store";
import CityDebug from "../leva/CityDebugLeva/CityDebugLeva";
import { Instances } from "../models/Model";
// import { useCameraMouseParallax } from "../../hooks/useHoverCamera";
// import {useCarInsideScroll} from "../../hooks/useCarInsideScroll"
import { PerspectiveCamera } from '@theatre/r3f';
import { useInfernusStore, useTheatreCameraStore } from "../../../../utils/store";
// import CityGrid from "../CityGrid";
// import CameraLeva from "../leva/CameraLeva/CameraLeva";
import InfernusLeva from "../leva/InfernusLeva/InfernusLeva";
// import PivotLeva from "../leva/PivotLeva/PivotLeva";
import ScrollSync from "../ScrollSync/ScrollSync";
import Constellation from "../Constellation";
// import TheatreCameraLeva from "../leva/CameraLeva/TheatreCameraLeva";
import PivotFinal from "../config/PivotFinal";
import { useCityKeyboardControl } from "../../hooks/useCityKeyboardControl";
import Infernus from "../models/Infernus";
import { Perf } from "r3f-perf";

export default function CityScene({ }: any) {
  const infernusRef = useRef<THREE.Group>(null!);
  const cityRef = useRef<THREE.Group>(null!);
  const theatreCameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const setCity = useCityStore((s) => s.setCity);
  const setPivot = usePivotStore((s) => s.setPivot);
  const setInfernus = useInfernusStore((s) => s.setInfernus); // Add this
  const carPivotRef = useRef<THREE.Group>(null!);
  const setTheatreCamera = useTheatreCameraStore((s) => s.setTheatreCamera);

  useCityKeyboardControl();
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
  useEffect(() => {
    if (infernusRef.current) {
      setInfernus(infernusRef.current);
    }
  }, [setInfernus]);
  useEffect(() => {
    if (theatreCameraRef.current) {
      setTheatreCamera(theatreCameraRef.current);
    }
  }, [setTheatreCamera]);
  const color ="#ced5fe"
  return (
    <>
      <InfernusLeva />
      <fogExp2 attach="fog" args={[color, 0.001]} />
      {/* <CameraLeva /> */}
      {/* <TheatreCameraLeva  /> //?: Not yet working... */}
      <color attach="background" args={[color]} />
      {/* {import.meta.env.DEV && <Perf position="top-left" />} */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <Instances> */}
        <Perf position="top-left" />
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
            <PerspectiveCamera
              makeDefault
              ref={theatreCameraRef}
              near={0.1}
              far={1000000}
              fov={39}
              theatreKey="TheatreCamera"
              position={[0, 7, 12]}
              rotation={[0, -Math.PI, 0]}
            />
            <Infernus ref={infernusRef} />
          </group>
          <ScrollControls pages={4} damping={0.2}>
            {/* Use PivotLeva to roate the city around the car's axis */}
            {/* <PivotLeva /> */}
            <PivotFinal />
            {/* Use CItyDebug for position x y and z if by chance u rotate here whole city will be rotated around its axis */}
            <CityDebug />
            <ScrollSync />
          </ScrollControls>
        </group>
      {/* </Instances> */}
    </>
  );
}
