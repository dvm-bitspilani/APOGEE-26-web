import { Canvas } from "@react-three/fiber";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import ReactHelmet from "../components/ReactHelmet";
import styles from "./City.module.scss";
import CityScene from "./components/CityScene/CityScene";
// import ScrollReminder from "./components/ScrollReminder/ScrollReminder";
// import { sheet } from "./theatre";
// import { Environment } from "@react-three/drei";
// import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import { useEffect } from "react";
import debugFunctions from "../../utils/debug";
import * as THREE from "three";
import { useActiveSheetStore, useNavStateStore, usePreloaderStateStore, useSceneLoadedStore } from "../../utils/store";
// import NavBar from "../components/NavBar/NavBar";
import RegisterButton from "../components/RegisterButton/RegisterButton";
import Preloader from "../preloader/Preloader";
import Modal from "./components/Modal/Modal";
import { project } from "./components/ScrollSync/ScrollSync";
import { EnterDashboard, ExitDashboard } from "../../utils/navViewSwitching";
// import state from "./state-grace.json"
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
if (import.meta.env.DEV) {
  debugFunctions();
  studio.initialize();
  studio.extend(extension);
}

// Ensure the sheet is ready before rendering, if necessary, or just rely on React to handle it.
// await project.ready; // Top level await might be issue if not handled, but usually fine in Vite + standard setups if supported.
// Actually, usually we don't await at module level for React components unless Suspense is involved.
// Theatre documentation often suggests just using it.

export default function City() {

  const showPreloader = usePreloaderStateStore((s) => s.showPreloader);
  const activeSheet = useActiveSheetStore((s) => s.activeSheet);
  const setNavState = useNavStateStore((s) => s.setNavState);
  // const setShowPreloader = usePreloaderStateStore((s) => s.setShowPreloader);

  useEffect(() => {
    if (activeSheet !== "Cyber City") return;
    console.log("Playing sheet animation");
    project.ready.then(() => {
      project.sheet("Cyber City").sequence.play({ iterationCount: Infinity });
      window.addEventListener("keydown", (e) => {
        if (import.meta.env.DEV) {
          if (e.key === "k") setNavState("opening");
          if (e.key === "l") setNavState("closing");
        }
      })
      // remove Infinity if you want play only once
    });
  }, [activeSheet]);

  return (
    <>
      <ReactHelmet
        title="APOGEE '26 | Under Steel Skies | Home"
        description="Explore the city of APOGEE 2026."
        url="https://www.bits-apogee.org/"
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
          <Preloader />
        </div>
      )}
      {
        <div className={styles.city}>
          {/* <button
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              zIndex: 9999,
              fontSize: 26,
              background: "black",
              color: "white",
              padding: "10px 14px",
              cursor: "pointer"
            }}
          >
            ☰
          </button> */}
          <Canvas
            gl={{ antialias: true }}
            dpr={[1, 1.5]}
            // onCreated={({ gl }) => {
            //   gl.toneMapping = THREE.NoToneMapping
            // }}
            shadows={false}
            camera={{ manual: true }} // {{ position: [0, 2, -2], near: 0.1, far: 1000000, fov: 50 }}
            style={{ width: "100%", height: "100%" }}
            onCreated={({ gl }) => {
              // camera.layers.enable(1); // car
              // camera.layers.enable(2); // city

              gl.toneMapping = THREE.NoToneMapping
            }}
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
            {/* <Environment preset="city" environmentIntensity={0.1}  /> */}
            {/* <SheetProvider sheet={sheet}> */}
            {/* <Environment preset="city" environmentIntensity={0.1} /> */}
            <SheetProvider key={activeSheet} sheet={project.sheet(activeSheet)}>
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
              <EnterDashboard />
              <ExitDashboard />
              <CityScene />
              {/* <BloomLeva /> */}
              {/* <FogPlane /> */}
            </SheetProvider>
          </Canvas>
          {/* <Html> */}
          {/* <ScrollReminder /> */}
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
