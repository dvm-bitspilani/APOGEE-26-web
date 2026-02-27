import { Html } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import ContactUs from "../../../contactUs/ContactUs";
import styles from "./InteractivePlane.module.scss";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTheatreCameraStore } from "../../../../utils/store";
const EditableMesh = e.mesh;

const InteractivePlane = () => {
  const ref = useRef<any>(null)
  // This holds the local occluded state
  const [isOccluded, setOccluded] = useState(false)
  const [isInRange, setInRange] = useState(false)
  const isVisible = isInRange && !isOccluded
  // Test distance
  const vec = new THREE.Vector3()
 const theatreCamera = useTheatreCameraStore((s) => s.theatreCamera);

  useFrame(() => {
    if (!ref.current || !theatreCamera) return;

    const distance = theatreCamera.position.distanceTo(
      ref.current.getWorldPosition(vec)
    );

    const range = distance <= 450;

    if (range !== isInRange) {
      setInRange(range);
    }
  });

  return (
   <EditableMesh  theatreKey="interactivePlane"
   ref={ref}
  position={[33.5, 19, 570]}
  rotation={[Math.PI,0, Math.PI]}
  // style={{position:"fixed"}}
  // style={{pointerEvents:"none"}}
>
  <planeGeometry args={[19, 19]} />
      <meshBasicMaterial color="black" side={THREE.DoubleSide} 
  depthTest
  depthWrite />

  <Html   wrapperClass={styles.myHtmlWrapper}
        as="div"
        distanceFactor={8}
        transform
        style={{
          opacity: isInRange ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: isInRange ? "auto" : "none",
          overflow: "hidden",
          height: "800px",
          width: "800px",
        }}
        >
    <div
    onWheel={(e) => e.stopPropagation()}
    onPointerDown={(e) => e.stopPropagation()}
      style={{
        width: "1200px",
        height: "600px",
        overflow: "hidden",
        background: "white",

      overscrollBehavior: "none"
      }}
    >
      <ContactUs />
      "Hello 
      h1
        </div>
      </Html>
    </EditableMesh>
  );
};

export default InteractivePlane;