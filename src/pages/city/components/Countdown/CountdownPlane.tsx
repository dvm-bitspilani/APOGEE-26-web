import { Html } from "@react-three/drei";
// import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import styles from "../InteractivePlane/InteractivePlane.module.scss";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useNavStateStore, useTheatreCameraStore } from "../../../../utils/store";
import Countdown from "./Countdown"; // 👈 adjust path if needed

// const EditableMesh = e.mesh;
const InteractivePlane = () => {
  const ref = useRef<any>(null);
  const [isInRange] = useState(false);

const navState = useNavStateStore((s) => s.navState);
  const theatreCamera = useTheatreCameraStore((s) => s.theatreCamera);

  const camWorldPos = new THREE.Vector3();
  const meshWorldPos = new THREE.Vector3();
const htmlRef = useRef<HTMLDivElement>(null);
const isInRangeRef = useRef(false);
const navStateRef = useRef(navState);

useEffect(() => {
  navStateRef.current = navState;
}, [navState]);

useFrame(() => {
  if (!ref.current || !theatreCamera || !htmlRef.current) return;

  ref.current.getWorldPosition(meshWorldPos);
  theatreCamera.getWorldPosition(camWorldPos);

  const distance = camWorldPos.distanceTo(meshWorldPos);
  const range = distance <= 200 && navStateRef.current === "off";

  if (range !== isInRangeRef.current) {
    isInRangeRef.current = range;

    htmlRef.current.style.opacity = range ? "1" : "0";
    htmlRef.current.style.pointerEvents = range ? "auto" : "none";
  }
});

  return (
    <mesh
      // theatreKey="CountdownPlane"
      ref={ref}
      position={[-15, 25, 173]}
      rotation={[2.6, 0, Math.PI]}
      scale={[1.6, 1.5, 1.5]}
    >
      <planeGeometry args={[0, 0]} />
      <meshBasicMaterial
        // transparent
        side={THREE.DoubleSide}
        depthTest
        depthWrite
      />

      <Html
        wrapperClass={styles.myHtmlWrapper}
        ref={htmlRef}
        transform
        center
        distanceFactor={8}
        style={{
          opacity: isInRange ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: isInRange ? "auto" : "none",
          overflow: "hidden",
          width: "1000px",
          // background: "transparent",
          background: "transparent"
        }}
      >
        <div
          onWheel={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          style={{
            width: "1000px",
            height: "400px",
            overflow: "hidden",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // gap: "3rem",
            // padding: "2rem",
            overscrollBehavior: "none",
          }}
        >          {/* ✅ Countdown */}
          <Countdown targetDate="2026-04-10T19:00:00+05:30" />
        </div>
      </Html>
    </mesh>
  );
};

export default InteractivePlane;