import "../../utils/localDecoders";
import { canRenderCity } from "./CityBoundary";
import LandingArtwork from "./LandingArtwork";
import SceneBoundary from "./SceneBoundary";
import CityAssets from "./CityAssets";
import useDocumentVisible from "../../hooks/useDocumentVisible";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import ReactHelmet from "../components/ReactHelmet";
import styles from "./City.module.scss";
import CityScene from "./components/CityScene/CityScene";
import ScrollReminder from "./components/ScrollReminder/ScrollReminder";
// import { sheet } from "./theatre";
// import { Environment } from "@react-three/drei";
// import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import { Suspense, useCallback, useEffect, useState } from "react";
import * as THREE from "three";
import { useActiveSheetStore, useCityStore, useCurrentSectionStore, useHamburgerStore, useInfernusStore, useModalStore, useNavStateStore, usePivotStore, usePreloaderStateStore, usePullProgressStore, useSceneLoadedStore, useScrollStore, useTheatreCameraStore } from "../../utils/store";
import NavBar from "../components/NavBar/NavBar";
import RegisterButton from "../components/RegisterButton/RegisterButton";
import Preloader from "../preloader/Preloader";
import Modal from "./components/Modal/Modal";
import Ham from '../ham/Ham';
import { project } from './components/ScrollSync/ScrollSync';
import { EnterDashboard, ExitDashboard } from "../../utils/navViewSwitching";
import ScrollTracker from "./components/ScrollTracker/ScrollTracker";
import HamburgerButton from "./components/HamburgerButton";
import { ScrollWatcher } from "./components/Countdown/ScrollWatcher";
import NavBarScroll from "../components/NavBar/NavBarScroll";

// import state from "./state-grace.json"
function SceneReady() {
  useEffect(() => {
    useSceneLoadedStore.getState().setLoaded(true);
    useSceneLoadedStore.getState().setProgress(100);
  }, []);
  return null;
}

function CanvasLifecycle({ onFailure }: { onFailure: () => void }) {
  const { gl } = useThree();
  useEffect(() => {
    const canvas = gl.domElement;
    const fail = (event: Event) => { event.preventDefault(); onFailure(); };
    canvas.addEventListener("webglcontextlost", fail);
    return () => canvas.removeEventListener("webglcontextlost", fail);
  }, [gl, onFailure]);
  return null;
}

export default function City() {
  const [available, setAvailable] = useState(canRenderCity);
  const visible = useDocumentVisible();
  const showArtwork = useCallback(() => {
    document.body.style.cursor = "auto";
    useHamburgerStore.getState().setManualHidden(false);
    useNavStateStore.getState().setNavState("off");
    setAvailable(false);
  }, []);
  const scroll = useScrollStore((s) => s.scroll);
  const showPreloader = usePreloaderStateStore((s) => s.showPreloader);
  const activeSheet = useActiveSheetStore((s) => s.activeSheet);
  const navState = useNavStateStore((s) => s.navState);
  const setNavState = useNavStateStore((s) => s.setNavState);

  // const setShowPreloader = usePreloaderStateStore((s) => s.setShowPreloader);

  useEffect(() => () => {
    useSceneLoadedStore.getState().setLoaded(false);
    usePreloaderStateStore.getState().setShowPreloader(true);
    useActiveSheetStore.getState().setActiveSheet("Intro Sequence");
    useNavStateStore.getState().setNavState("off");
    useHamburgerStore.getState().setManualHidden(false);
    useHamburgerStore.getState().setIsHidden(false);
    useModalStore.getState().closeModal();
    useCurrentSectionStore.getState().setCurrentSection("home");
    usePullProgressStore.getState().setPullProgress(0);
    useScrollStore.setState({ scroll: null });
    useCityStore.setState({ city: null });
    usePivotStore.setState({ pivot: null });
    useInfernusStore.setState({ infernus: null });
    useTheatreCameraStore.setState({ theatreCamera: null });
    document.body.style.cursor = "auto";
  }, []);

  if (!available) return <LandingArtwork />;
  return (
    <CityAssets>
      <ReactHelmet
        title="APOGEE '26 | Under Steel Skies | Home"
        description="Explore the city of APOGEE 2026."
        url="https://apogee2026.bits-apogee.org/"
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
          <h1 style={{ opacity: 0, height: 0 }}>
            APOGEE 2026 HOME
          </h1>
          <Canvas
            gl={{ antialias: true }}
            dpr={[1, 1.25]}
            frameloop={visible ? "always" : "never"}
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
            <CanvasLifecycle onFailure={showArtwork} />
            <SceneBoundary onFailure={showArtwork}>
            <Suspense fallback={null}>
            <ScrollWatcher ranges={[
              // [0.2, 100],
              [0.41, 0.55],
              [0.77, 1.01]
            ]} />
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
            <Environment files="/environment/city.hdr" environmentIntensity={0.1} />
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
            <SceneReady />
            </Suspense>
            </SceneBoundary>
          </Canvas>
          {/* <Html> */}
          {activeSheet === "Cyber City" && <ScrollReminder />}
          {/* </Html> */}
        </div>
      }{activeSheet === "Cyber City" &&
        <HamburgerButton onClick={() => {
          scroll?.el?.scrollTo({
            top: scroll.offset * (scroll.el.scrollHeight - scroll.el.clientHeight),
            behavior: "instant"
          });
          // gsap.set(scroll.el, { scrollTop: scroll.offset * (scroll.el.scrollHeight - scroll.el.clientHeight) });
          setNavState("opening")
        }
        }
        />}
      {activeSheet === "Cyber City" && <NavBarScroll>
        <NavBar />
      </NavBarScroll>}
      {activeSheet === "Cyber City" && <RegisterButton />}
      {navState === "open" && <Ham />}
      <Modal />
      <ScrollTracker />
    </CityAssets>
  );
}
