import styles from "./Landing.module.scss"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Html, ScrollControls, Text, useScroll } from "@react-three/drei"
import { Perf } from "r3f-perf"
import { useRef } from "react"
import * as THREE from "three"

/* ---------- Cube ---------- */
type CubeProps = {
  cubeRef: React.RefObject<THREE.Mesh>
}

function Cube({ cubeRef }: CubeProps) {
  return (
    <mesh ref={cubeRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
      <Text
        position={[-0.5001, 0,0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        rotation={[0, -Math.PI / 2, 0]}
      >
        APOGEE
      </Text>
    </mesh>
  )
}


/* ---------- Camera Controller ---------- */
type CameraControllerProps = {
  cubeRef: React.RefObject<THREE.Mesh>
}

function CameraController({ cubeRef }: CameraControllerProps) {
  const { camera } = useThree()
  const scroll = useScroll()

  useFrame(() => {
    // page 0 → 1 only
    const pageProgress = THREE.MathUtils.clamp(
      scroll.offset * 4,
      0,
      1
    )

    const radius = 5
    const angle = pageProgress * Math.PI / 2

    // Orbit camera around cube
    // camera.position.x = Math.sin(angle) * radius
    // camera.position.z = Math.cos(angle) * radius

    // Rotate cube with scroll
    if (cubeRef.current) {
        const scaleAmount = 0.5 // how much bigger it gets

const scale = 1 + pageProgress * scaleAmount

      cubeRef.current.rotation.y = pageProgress * Math.PI /2
      cubeRef.current.scale.setScalar(scale)

      // Always look at cube
      camera.lookAt(cubeRef.current.position)
    }
  })

  return null
}

/* ---------- Scene ---------- */
function Scene() {
  const cubeRef = useRef<THREE.Mesh>(null!)

  return (
    <>
      <ambientLight intensity={0.9} />
      {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}

      <Cube cubeRef={cubeRef}  />
      <CameraController cubeRef={cubeRef} />

      {import.meta.env.DEV && (
        <Perf position="top-left" minimal />
      )}
    </>
  )
}

/* ---------- Landing ---------- */
export default function Landing() {
  return (
    <>
      {/* Optional heading */}
      {/* <h1 className={styles.heading}>APOGEE 2026</h1> */}

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ScrollControls pages={4} damping={0.2}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </>
  )
}
