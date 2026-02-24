import { Html } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import ContactUs from "../../contactUs/ContactUs";
const EditableMesh = e.mesh;

const InteractivePlane = () => {
  return (
   <EditableMesh  theatreKey="interactivePlane"
  position={[-5, 16, 56]}
  rotation={[0, Math.PI / 4, 0]}
>
  <planeGeometry args={[20, 40]} />
      <meshBasicMaterial color="black" side={THREE.DoubleSide} />

  <Html
    transform
    distanceFactor={10}   // adjust if too big/small
        position={[0, 0, 0.01]}
    style={{
    overflow: "hidden",
    height:"600px",
    width:"1200px",
    overscrollBehavior:"none"
  }}
   onWheel={(e) => e.stopPropagation()}
        >
    <div
      style={{
        width: "1200px",
        height: "600px",
        overflow: "hidden",
        background: "white",
        pointerEvents:"none",

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