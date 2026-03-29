import { Environment, ScrollControls } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { useCityStore, usePivotStore } from "../../../../utils/store";
import ScrollSync from "../ScrollSync/ScrollSync";
// import SceneDevOrProd from "./SceneDevorProd";
import SceneLights from "./SceneLights";
import Constellation from "../Constellation3";
import CamCar from "../groups/CamCar";
import { editable as e } from "@theatre/r3f"
// import InteractivePlane from "../InteractivePlane/InteractivePlane";
// import InteractivePlane2 from "../InteractivePlane/InteractivePlane2";
import CountdownPlane from "../Countdown/CountdownPlane";
import Globe from "../models/Globe";
// import CountdownPlane from "../Countdown/CountdownPlane";
// import MatrixRain from "../MatrixRain";
import FinalProdConfig from "../config/FinalProdConfig";
 import { Perf } from "r3f-perf";
// import { useCyberpunkFogMaterial } from "../../hooks/useCyberPunkFogMaterial";
import { Logo } from "../models/Logo";

export default function CityScene({ }: any) {
  const cityRef = useRef<THREE.Group>(null!);
  const setCity = useCityStore((s) => s.setCity);
  const setPivot = usePivotStore((s) => s.setPivot);
  const carPivotRef = useRef<THREE.Group>(null!);
  // inside CityScene
  // const cityEnv = useEnvironment({ preset: "city" })
  // const { scene } = useThree();
  // useEffect(() => {
  //   if (!cityRef.current) return
  //   cityRef.current.traverse((child) => {
  //     if ((child as THREE.Mesh).isMesh) {
  //       const mesh = child as THREE.Mesh
  //       const mat = mesh.material as THREE.MeshStandardMaterial
  //       mat.envMap = cityEnv
  //       mat.envMapIntensity = 0.1
  //       mat.needsUpdate = true
  //       child.layers.disable(1);
  //     }
  //   })
  // }, [cityEnv])
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
  // const mat = useCyberpunkFogMaterial();
  return (
    <>
      {/* <SceneDevOrProd /> */}
       {import.meta.env.DEV && <Perf position="bottom-left" />}
      <FinalProdConfig/>
      <SceneLights />
      <fogExp2 attach="fog" args={[color, 0.001]} />
      {/* <fog attach="fog" args={[color, 50, 2000]} />   */}
      {/* <TheatreCameraLeva  /> //?: Not yet working... */}
      <color attach="background" args={[color]} />
      {/* <e.directionalLight theatreKey="light" intensity={0} color="#250707" /> */}
      <group>
        <group ref={carPivotRef} position={[0, 0, 0]}>
          {/* <ambientLight intensity={0.5} /> */}
          <group ref={cityRef}>
            {/* <axesHelper args={[200]} /> */}
            {/* <CityGrid /> */}
            <Environment files="/environment/city.hdr" environmentIntensity={0.1} />
            <Constellation />

            <e.group position={[-1.75, -1.8, -3]} scale={1.5} rotation={[0, 0, 0.22]}
              theatreKey="Globe"
              // onClick={(e: any) => {
              //   e.stopPropagation();
              //   window.open("https://bits-apogee.org", "_blank");
              // }}
              // onPointerOver={() => (document.body.style.cursor = "pointer")}
              // onPointerOut={() => (document.body.style.cursor = "default")}
            >
              <Globe />
            </e.group>

            <Suspense fallback={null}>
              <e.group position={[1.785, -1.45, 12.35]} scale={[0.25,0.25,0.625]} 
                theatreKey="Logo"
                onClick={(e: any) => {
                  e.stopPropagation();
                  window.open("https://bits-dvm.org", "_blank");
                }}
                onPointerOver={() => (document.body.style.cursor = "pointer")}
                onPointerOut={() => (document.body.style.cursor = "default")}
              >
                <Logo />
              </e.group>
            </Suspense>
          </group>
        </group>

        <e.group theatreKey="CamCar">
          {/* <directionalLight
            position={[0, 10, 0]}
           intensity={0.5} /> */}

          {/* The TheatreCameraFinal is a pre-configured camera with the same settings as above, but with added parallax and scroll effects     */}

          <CamCar />
        </e.group>
        <ScrollControls pages={6} damping={0.8}>
          {/* Use PivotLeva to roate the city around the car's axis */}
          {/* <PivotLeva /> */}
          {/* <PivotFinal /> */}
          {/* Use CItyDebug for position x y and z if by chance u rotate here whole city will be rotated around its axis */}
          {/* <CityDebug /> */}
          <ScrollSync />
        </ScrollControls>
        {/* <InteractivePlane /> */}
        {/* <InteractivePlane2/> */}
        <CountdownPlane />
      </group>
    </>
  );
}
