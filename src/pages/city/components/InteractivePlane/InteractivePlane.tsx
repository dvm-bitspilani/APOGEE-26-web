import { Html } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import ContactUs from "../../../contactUs/ContactUs";
import styles from "./InteractivePlane.module.scss";
import { useRef } from "react";
const EditableMesh = e.mesh;

const InteractivePlane = () => {
  const meshRef = useRef<any>(null);
  return (
   <EditableMesh  theatreKey="interactivePlane"
   ref={meshRef}
  position={[33.5, 19, 570]}
  rotation={[Math.PI,0, Math.PI]}
  // style={{position:"fixed"}}
  // style={{pointerEvents:"none"}}
>
  <planeGeometry args={[19, 19]} />
      <meshBasicMaterial color="black" side={THREE.DoubleSide} />

  <Html  wrapperClass={styles.myHtmlWrapper}
      as='div' 
    distanceFactor={8}   // adjust if too big/small
     transform 
    style={{
    overflow: "hidden",
    height:"800px",
    width:"800px",
    // position:"fixed",
    overscrollBehavior:"contain",
      // pointerEvents:"none"
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