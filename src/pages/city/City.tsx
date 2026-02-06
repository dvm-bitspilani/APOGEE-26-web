import { Canvas } from "@react-three/fiber";
import ReactHelmet from "../components/ReactHelmet";
import CityScene from "./components/CityScene/CityScene";
import BloomLeva from "./components/leva/BloomLeva/BloomLeva";
import ScrollReminder from "./components/ScrollReminder/ScrollReminder";
// import { Html } from "@react-three/drei";
import styles from "./City.module.scss";
// import FogPlane from "./components/FogPlane";

import { editable as e, SheetProvider } from "@theatre/r3f";
import extension from '@theatre/r3f/dist/extension';
import studio from "@theatre/studio";
// import { sheet } from "./theatre";
import state from "./state.json"
import debugFunctions from "../../utils/debug";
import { OrbitControls } from "@react-three/drei";
import { getProject } from "@theatre/core";
import { useEffect } from "react";
import { Environment } from "@react-three/drei";

export const project = getProject("City Project", { state });
export const sheet = project.sheet("Cyber City");
if (import.meta.env.DEV) {
  debugFunctions();
  studio.initialize()
  studio.extend(extension)
}

// Ensure the sheet is ready before rendering, if necessary, or just rely on React to handle it.
// await project.ready; // Top level await might be issue if not handled, but usually fine in Vite + standard setups if supported.
// Actually, usually we don't await at module level for React components unless Suspense is involved. 
// Theatre documentation often suggests just using it.

export default function City() {
  useEffect(() => {
    project.ready.then(() => {
      sheet.sequence.play({ iterationCount: Infinity }); 
      // remove Infinity if you want play only once
    });
  }, []);
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
          <Environment preset="city" />
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
