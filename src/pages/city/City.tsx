import { Canvas } from "@react-three/fiber";
import CityScene from "./components/CityScene/CityScene";
import CameraControllerLeva from "./components/leva/CameraControllerLeva/CameraControllerLeva";
import BloomLeva from "./components/leva/BloomLeva/BloomLeva";
import ReactHelmet from "../components/ReactHelmet";
import ScrollReminder from "./components/ScrollReminder/ScrollReminder";
// import { Html } from "@react-three/drei";
import styles from "./City.module.scss";
import { OrbitControls } from "@react-three/drei";
// import FogPlane from "./components/FogPlane";

import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from '@theatre/r3f/dist/extension';
import { editable as e, PerspectiveCamera, SheetProvider } from "@theatre/r3f";

import debugFunctions from "../../utils/debug";

if (import.meta.env.DEV) {
  debugFunctions();
  studio.initialize()
  studio.extend(extension)
}
const project = getProject("APOGEE 26")
const sheet = project.sheet("Cyber City")
await project.ready;
sheet.sequence.position = sheet.sequence.position;

export default function City() {
  return (
    <>
      <ReactHelmet
        title="APOGEE 2026 | Home"
        description="Explore the city of APOGEE 2026."
        url="https://www.bits-apogee.org/city"
      />
      <div className={styles.city}>
        <Canvas
          camera={{manual: true}}  // {{ position: [0, 2, -2], near: 0.1, far: 1000000, fov: 50 }}
          style={{ width: "100%", height: "100%" }}

        >
          <SheetProvider sheet={sheet}>
            {/* <CameraControllerLeva /> */}
            <e.spotLight
              theatreKey="someSpotlight"
              position={[0, 10, 0]}
              angle={0.3}
              distance={0.5}
              intensity={10.5} />
            {/* <OrbitControls/> */}
            {/* If enabling OrbitControls, disable the CameraControllerLeva here and useHoverCamera, useCityLandingSTrat and useKeyboard control */}
            <spotLight
              position={[0, 5, 0]}
              // angle={0.3}
              color={"#61bbf7"}
              // distance={0.5}
              intensity={100.5} />
            {/* <OrbitControls/> */}
            <CityScene />
            <BloomLeva />
            {/* <FogPlane /> */}
          </SheetProvider>
        </Canvas>
        {/* <Html> */}
        <ScrollReminder />
        {/* </Html> */}
      </div>
    </>
  );
}
