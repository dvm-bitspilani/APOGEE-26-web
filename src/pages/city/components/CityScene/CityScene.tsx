import { Environment, ScrollControls, useEnvironment } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useActiveSheetStore, useCityStore, useInfernusStore, usePivotStore, useTheatreCameraStore } from "../../../../utils/store";
import ScrollSync, { project } from "../ScrollSync/ScrollSync";
import SceneDevOrProd from "./SceneDevorProd";
import SceneLights from "./SceneLights";
import Constellation from "../Constellation3";
import CamCar from "../groups/CamCar";
import { useFrame } from "@react-three/fiber";
import { editable as e } from "@theatre/r3f";
// import StarJunction from "../models/StarJunstion3";
// import InteractivePlane from "../InteractivePlane";
import InteractivePlane from "../InteractivePlane/InteractivePlane";
// import MatrixRain from "../MatrixRain";

type Props = {
  insideMode: boolean
  setInsideMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CityScene({ insideMode}: Props){
  const cityRef = useRef<THREE.Group>(null!);
  const setCity = useCityStore((s) => s.setCity);
  const setPivot = usePivotStore((s) => s.setPivot);
  const carPivotRef = useRef<THREE.Group>(null!);
// inside CityScene
const cityEnv = useEnvironment({ preset: "city" })
// const { scene } = useThree();
useEffect(() => {
  if (!cityRef.current) return
  cityRef.current.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.envMap = cityEnv
      mat.envMapIntensity = 0.1
      mat.needsUpdate = true
      child.layers.disable(1);
    }
  })
}, [cityEnv])
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

   const activeSheet = useActiveSheetStore((s) => s.activeSheet);

  const theatreCamera = useTheatreCameraStore((s) => s.theatreCamera);
const infernus = useInfernusStore((s) => s.infernus)
const normalCamPos = useRef(new THREE.Vector3())

// const handleClick = () => {
//   if (!theatreCamera) return
//   if (activeSheet !== "Cyber City") return

  const sheet = project.sheet("Cyber City")

//   if (!insideMode) {
//     // ENTER

//     normalCamPos.current.copy(theatreCamera.position)
//     normalCamQuat.current.copy(theatreCamera.quaternion)

//     savedSequencePos.current = sheet.sequence.position
//     sheet.sequence.pause()

//     setInsideMode(true)
//   } else {
//     // EXIT

//     setReturning(true)
//     setInsideMode(false)
//   }
// }
const counter = useRef(0);
useEffect(() => {
   if (counter.current < 2) {
    console.log("Do something because counter > 2");
     counter.current += 1;
    return
  }

  // Example: increment the counter
  counter.current += 1;

  if (!theatreCamera) return
  if (activeSheet !== "Cyber City") return


  if (insideMode) {
    normalCamPos.current.copy(theatreCamera.position)
    normalCamQuat.current.copy(theatreCamera.quaternion)

    savedSequencePos.current = sheet.sequence.position
    sheet.sequence.pause()
  } else {
    setReturning(true)
    // setInsideMode()
  }

}, [insideMode])
const normalCamQuat = useRef(new THREE.Quaternion())
const [returning, setReturning] = useState(false)
const camCarRef = useRef<THREE.Group>(null!)
const savedSequencePos = useRef(0)
const enteredCamBasePos = useRef<THREE.Vector3 | null>(null)

useEffect(() => {
  if (insideMode && infernus) {
    const basePos = infernus.getWorldPosition(new THREE.Vector3())
    enteredCamBasePos.current = basePos
  }
}, [insideMode])
// 🔹 Pre-allocate once
const tempVec1 = useMemo(() => new THREE.Vector3(), [])
const tempVec2 = useMemo(() => new THREE.Vector3(), [])
const tempQuat1 = useMemo(() => new THREE.Quaternion(), [])
const tempQuat2 = useMemo(() => new THREE.Quaternion(), [])
const tempEuler = useMemo(() => new THREE.Euler(), [])
const offset = useMemo(() => new THREE.Vector3(0, 4, 0), [])

useFrame(() => {
  if (!theatreCamera) return
  if (activeSheet !== "Cyber City") return

  const anchor = camCarRef.current?.getObjectByName("CameraAnchor")
  if (!anchor) return

  if (insideMode && infernus) {

    // reuse vectors instead of creating
    infernus.getWorldPosition(tempVec1)

    // finalCamPos = tempVec1 + offset
    tempVec2.copy(infernus.position).add(offset)

    theatreCamera.position.lerp(tempVec2, 0.08)

    // reuse quaternion
    infernus.getWorldQuaternion(tempQuat1)

    // convert to euler without new object
    tempEuler.setFromQuaternion(tempQuat1, "YXZ")

    tempEuler.y = tempEuler.y + Math.PI
    tempEuler.x = -tempEuler.x
    tempEuler.z = -tempEuler.z

    tempQuat2.setFromEuler(tempEuler)

    theatreCamera.quaternion.copy(tempQuat2)

  } else if (returning) {

    theatreCamera.position.lerp(normalCamPos.current, 0.08)
    theatreCamera.quaternion.slerp(normalCamQuat.current, 0.08)

    const posDone =
      theatreCamera.position.distanceTo(normalCamPos.current) < 0.001

    const rotDone =
      theatreCamera.quaternion.angleTo(normalCamQuat.current) < 0.001

    if (posDone && rotDone) {
      // theatreCamera.position.copy(normalCamPos.current)
      // theatreCamera.quaternion.copy(normalCamQuat.current)
sheet.sequence.position = savedSequencePos.current
sheet.sequence.play({ iterationCount:1 })
setReturning(false)
    }
  }
})
  const color = "#3e93be";
  return (
    <>
      {/* <MatrixRain/> */}
      <SceneDevOrProd />
      <SceneLights />
      <fogExp2 attach="fog" args={[color, 0.001]} />
      {/* <fog attach="fog" args={[color, 50, 2000]} />   */}
      {/* <TheatreCameraLeva  /> //?: Not yet working... */}
      <color attach="background" args={[color]} />
      {/* <e.directionalLight theatreKey="light" intensity={0} color="#250707" /> */}
      <group>
        <group ref={carPivotRef} position={[0, 0, 0]}>
          {/* <ambientLight intensity={0.5} /> */}
          <group ref={cityRef} layers= {2}>
            {/* <axesHelper args={[200]} /> */}
            {/* <CityGrid /> */}
            <Environment preset="city" environmentIntensity={0.1}  />
            <Constellation />
          </group>
        </group>

        <e.group theatreKey="CamCar" ref={camCarRef}>
          {/* <directionalLight
            position={[0, 10, 0]}
           intensity={0.5} /> */}

          {/* The TheatreCameraFinal is a pre-configured camera with the same settings as above, but with added parallax and scroll effects     */}
          {/* <StudioEnvironment/> */}
          <CamCar />
        </e.group>
        {!insideMode && (
  <ScrollControls pages={6} damping={0.8}>
    <ScrollSync />
  </ScrollControls>
)}
<InteractivePlane/>
      </group>
    </>
  );
}
