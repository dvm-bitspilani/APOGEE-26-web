import { Html } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import styles from "../InteractivePlane/InteractivePlane.module.scss";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTheatreCameraStore } from "../../../../utils/store";
import Countdown from "./Countdown"; // 👈 adjust path if needed

const EditableMesh = e.mesh;

const InteractivePlane = () => {
  const ref = useRef<any>(null);
  const [isInRange, setInRange] = useState(false);
  const theatreCamera = useTheatreCameraStore((s) => s.theatreCamera);

  const camWorldPos = new THREE.Vector3();
  const meshWorldPos = new THREE.Vector3();

  useFrame(() => {
    if (!ref.current || !theatreCamera) return;

    ref.current.getWorldPosition(meshWorldPos);
    theatreCamera.getWorldPosition(camWorldPos);

    const distance = camWorldPos.distanceTo(meshWorldPos);
    const range = distance <= 72.8;

    if (range !== isInRange) {
      setInRange(range);
    }
  });

  return (
    <EditableMesh
      theatreKey="CountdownPlane"
      ref={ref}
      position={[-15,21,173]}
      rotation={[2.95, -0.02, Math.PI]}
      scale={[1.6, 1.5, 1.5]}
    >
      <planeGeometry args={[19, 19]} />
      <meshBasicMaterial
        color="transparent"
        side={THREE.DoubleSide}
        depthTest
        depthWrite
      />

      <Html
        wrapperClass={styles.myHtmlWrapper}
        transform
        center
        distanceFactor={8}
        style={{
          opacity: isInRange ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: isInRange ? "auto" : "none",
          overflow: "hidden",
          height:"30px",
          background: "transparent",
          width: "60px",
        }}
      >
        <div
          onWheel={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          style={{
            width: "70rem",
            height: "60rem",
            overflow: "hidden",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            padding: "2rem",
            overscrollBehavior: "none",
          }}
        >          {/* ✅ Countdown */}
          <Countdown targetDate="2026-03-27T00:00:00" />
        </div>
      </Html>
    </EditableMesh>
  );
};

export default InteractivePlane;