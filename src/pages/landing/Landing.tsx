import styles from "./Landing.module.scss";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, ScrollControls, Text, useScroll } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/* ---------- Cube ---------- */
type CubeProps = {
  cubeRef: React.RefObject<THREE.Mesh>;
};

function Cube({ cubeRef }: CubeProps) {
  return (
    <mesh ref={cubeRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
      <Text
        position={[-0.5001, 0, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        rotation={[0, -Math.PI / 2, 0]}
      >
        APOGEE
      </Text>
    </mesh>
  );
}

/* ---------- Camera Controller ---------- */
type CameraControllerProps = {
  cubeRef: React.RefObject<THREE.Mesh>;
  setPage: (p: number) => void;
};

function CameraController({ cubeRef, setPage }: CameraControllerProps) {
  const { camera } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    const pageProgress = THREE.MathUtils.clamp(scroll.offset * 4, 0, 1);

    const scaleAmount = 0.5;
    const scale = 1 + pageProgress * scaleAmount;

    if (cubeRef.current) {
      cubeRef.current.rotation.y = pageProgress * Math.PI / 2;
      cubeRef.current.scale.setScalar(scale);
      camera.lookAt(cubeRef.current.position);
    }

    // update current page index
    const pageIndex = Math.floor(scroll.offset * 4);
    setPage(pageIndex);
  });

  return null;
}

function Scene({ setPage }: { setPage: (p: number) => void }) {
  const cubeRef = useRef<THREE.Mesh>(null!);

  return (
    <>
      <ambientLight intensity={0.9} />
      <Cube cubeRef={cubeRef} />
      <CameraController cubeRef={cubeRef} setPage={setPage} />
    </>
  );
}

export default function Landing() {
const pages = [
  { id: 0, url: "/" },
  { id: 1, url: "/" },
  { id: 2, url: "/events" },
  { id: 3, url: "/aboutus" },
];

const [page, setPage] = useState(0);

useEffect(() => {
  const url = pages[page]?.url || "/";
  history.replaceState(null, "", url);
}, [page]);



  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Perf />
        <ScrollControls pages={4} damping={0.2}>
          <Scene setPage={setPage} />
        </ScrollControls>
      </Canvas>
    </>
  );
}
