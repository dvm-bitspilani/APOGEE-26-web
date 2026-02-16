import { Canvas } from "@react-three/fiber";
// import extension from "@theatre/r3f/dist/extension";
// import studio from "@theatre/studio";
import ReactHelmet from "../components/ReactHelmet";
import styles from "./City.module.scss";
import CityScene from "./components/CityScene/CityScene";
import ScrollReminder from "./components/ScrollReminder/ScrollReminder";
// import { sheet } from "./theatre";
import { Environment } from "@react-three/drei";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import { useEffect, useState } from "react";
// import debugFunctions from "../../utils/debug";
import * as THREE from "three";
import { useSceneLoadedStore } from "../../utils/store";
// import NavBar from "../components/NavBar/NavBar";
import RegisterButton from "../components/RegisterButton/RegisterButton";
import Preloader from "../preloader/Preloader";
import Modal from "./components/Modal/Modal";
import state from "./state7.json";

// Set up loading progress tracking at module level (before useGLTF.preload() calls complete)
THREE.DefaultLoadingManager.onProgress = (_url, loaded, total) => {
  const progress = (loaded / total) * 100;
  // console.log(`[Scene Loading] ${progress.toFixed(1)}% (${loaded}/${total})`);
  useSceneLoadedStore.getState().setProgress(progress);
};

THREE.DefaultLoadingManager.onLoad = () => {
  // console.log("[Scene Loading] All assets loaded!");
  useSceneLoadedStore.getState().setProgress(100);
  useSceneLoadedStore.getState().setLoaded(true);
};

// import { EffectComposer, Noise } from "@react-three/postprocessing";
// import { BlendFunction } from "postprocessing";
export const project = getProject("City Project", { state });
export const sheet = project.sheet("Cyber City");
// if (import.meta.env.DEV) {
//   debugFunctions();
//   studio.initialize();
//   studio.extend(extension);
// }

// Ensure the sheet is ready before rendering, if necessary, or just rely on React to handle it.
// await project.ready; // Top level await might be issue if not handled, but usually fine in Vite + standard setups if supported.
// Actually, usually we don't await at module level for React components unless Suspense is involved.
// Theatre documentation often suggests just using it.

export default function City() {
  const [showPreloader, setShowPreloader] = useState(true);

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
      {showPreloader && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
          }}
        >
          <Preloader onLaunch={() => setShowPreloader(false)} />
        </div>
      )}
      {
        <div className={styles.city}>
          <Canvas
            shadows={false}
            camera={{ manual: true }} // {{ position: [0, 2, -2], near: 0.1, far: 1000000, fov: 50 }}
            style={{ width: "100%", height: "100%" }}
          >
            {/* <mesh rotation={[-Math.PI ,Math.PI/4, 0]} position={[-20, 5, 100]}>
  <planeGeometry args={[100, 10]} />
  <meshBasicMaterial color="red" side={THREE.DoubleSide} />
</mesh> */}

            {/* <EffectComposer>
   <Noise
    premultiply // enables or disables noise premultiplication
    blendFunction={BlendFunction.ADD} // blend mode
  />
  </EffectComposer> */}
            <Environment preset="city" environmentIntensity={0.1} />
            <SheetProvider sheet={sheet}>
              {/* <CameraControllerLeva /> */}
              {/* <e.spotLight
              theatreKey="someSpotlight"
              position={[0, 10, 0]}
              angle={0.3}
              distance={0.5}
              intensity={0} /> */}
              {/* If enabling OrbitControls, disable the CameraControllerLeva here and useHoverCamera, useCityLandingSTrat and useKeyboard control */}
              {/* <spotLight
              position={[0, 5, 0]}
              // angle={0.3}
              color={"#61bbf7"}
              // distance={0.5}
              intensity={0} /> */}
              {/* <OrbitControls/> */}
              <CityScene />
              {/* <BloomLeva /> */}
              {/* <FogPlane /> */}
            </SheetProvider>
          </Canvas>
          {/* <Html> */}
          <ScrollReminder />
          {/* </Html> */}
        </div>
      }
      {/* <NavBar /> */}
      {/* <NavBar /> */}
      <RegisterButton />
      <Modal />
    </>
  );
}
