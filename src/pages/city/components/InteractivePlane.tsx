import { Html } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
// import ContactUs from "../../contactUs/ContactUs";
const EditableMesh = e.mesh;

const InteractivePlane = () => {
  return (
    <EditableMesh
      theatreKey="InteractivePlane"
      position={[0, 1.7, 51]}
      rotation={[0, 0,Math.PI]}
    >
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial   side={THREE.DoubleSide}  />

      <Html
        transform
              occlude
        distanceFactor={1}
        scale={40}
      >
        {/* Your React component here */}
        {/* <ContactUs/> */}
        <h1> Hello</h1>
      </Html>
    </EditableMesh>
  );
};

export default InteractivePlane;