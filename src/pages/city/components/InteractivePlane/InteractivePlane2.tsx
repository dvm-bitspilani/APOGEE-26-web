import { Html } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import ContactUs from "../../../contactUs/ContactUs";
import styles from "./InteractivePlane.module.scss";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTheatreCameraStore } from "../../../../utils/store";
const EditableMesh = e.mesh;

const InteractivePlane2 = () => {
  const ref = useRef<any>(null)
  // This holds the local occluded state
  // const [isOccluded, setOccluded] = useState(false)
  const [isInRange, setInRange] = useState(false)
  // const isVisible = isInRange && !isOccluded
  // Test distance
  // const vec = new THREE.Vector3()
  const theatreCamera = useTheatreCameraStore((s) => s.theatreCamera);
const camWorldPos = new THREE.Vector3(); // Create these once outside useFrame to save memory
const meshWorldPos = new THREE.Vector3();
  useFrame(() => {
    if (!ref.current || !theatreCamera) return;

    // const distance = theatreCamera.position.distanceTo(
    //   ref.current.getWorldPosition(vec)
    // );
    ref.current.getWorldPosition(meshWorldPos);

  // 2. Get the Camera's position in the entire world (ignoring the 'camCar' parent)
  theatreCamera.getWorldPosition(camWorldPos);

  // 3. Calculate distance between two points in the same coordinate space
  const distance = camWorldPos.distanceTo(meshWorldPos);
    // const distance = theatreCamera.position.distanceTo(ref.current.position);

    const range = distance <= 113;
console.log(distance)
    if (range !== isInRange) {
      setInRange(range);
    }
  });

  return (
    <EditableMesh theatreKey="interactivePlane2"
      ref={ref}
      position={[80,15,1320]}
      rotation={[Math.PI, -Math.PI/2, Math.PI]}
      scale={[3,3,3]}
    // style={{position:"fixed"}}
    // style={{pointerEvents:"none"}}
    >
      <planeGeometry args={[19, 19]} />
      <meshBasicMaterial color="transparent" side={THREE.DoubleSide}
        depthTest
        depthWrite />

      <Html wrapperClass={styles.myHtmlWrapper}
        as="div"
        distanceFactor={8}
        transform
        center
        style={{
          opacity: isInRange ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: isInRange ? "auto" : "none",
          overflow: "hidden",
          height: "60rem",
          width: "70rem",
        }}
      >
        <div
          onWheel={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          style={{
            width: "70rem",
            height: "60rem",
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

export default InteractivePlane2;