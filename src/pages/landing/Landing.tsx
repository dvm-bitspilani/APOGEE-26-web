import { Canvas } from "@react-three/fiber";
import { ScrollControls, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect, useRef, useState } from "react";
import Scene from "./components/Scene/Scene";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useCameraPhase } from "../../utils/store";
import styles from "./Landing.module.scss";
import EnterButton from "./components/EnterButton/EnterButton";
import { useKeyboardAzimuth } from "./hooks/useKeyboardOrbit";
export default function Landing() {
  // const [introDone, setIntroDone] = useState(false);
  const [page, setPage] = useState(0);
  // const introDone = useIntroStore((s) => s.introDone);
  const orbitRef = useRef<OrbitControlsImpl>(null);
  const phase = useCameraPhase((s) => s.phase);
  // const setPhase = useCameraPhase((s) => s.setPhase);
  const pages = ["/", "/", "/events", "/aboutus"];

  useEffect(() => {
    history.replaceState(null, "", pages[page] || "/");
  }, [page]);
  useKeyboardAzimuth({
    controlsRef: orbitRef,
    enabled: phase === "free",
  });
  return (
    <div className={styles.landing}>
      <Canvas
        // camera={{ position: [0, 0, 5] }}
        style={{ width: "100%", height: "100%" }}
      >
        <OrbitControls
          ref={orbitRef}
          enabled={phase === "free"}
          enablePan={false}
          enableZoom={false}
          // minAzimuthAngle={-Math.PI} // lock horizontal rotation
          // maxAzimuthAngle={Math.PI} // lock horizontal rotation
          minPolarAngle={Math.PI / 2} // allow vertical rotation only between 45° and 135°
          maxPolarAngle={Math.PI / 2}
        />
        {import.meta.env.DEV && <Perf position="top-left" />}

        <ScrollControls pages={4} damping={0.2} enabled={phase === "scroll"}>
          <Scene
            orbitRef={orbitRef}
            // introDone={introDone}
            // setIntroDone={setIntroDone}
            setPage={setPage}
          />
        </ScrollControls>
      </Canvas>
      <EnterButton />
    </div>
  );
}
