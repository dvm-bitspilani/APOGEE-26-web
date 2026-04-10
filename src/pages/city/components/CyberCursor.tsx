import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as THREE from "three"

type Props = {
  hovered: boolean
}

export default function CyberCursor({ hovered }: Props) {
  const { camera, pointer } = useThree()
  const cursorRef = useRef<THREE.Group>(null!)
  const scaleTarget = useRef(1)

  // Attach cursor to camera (THIS is the key fix)
  useEffect(() => {
    if (!cursorRef.current) return

    camera.add(cursorRef.current)

    // Place slightly in front of camera
    cursorRef.current.position.set(0, 0, -2)

    return () => {
      camera.remove(cursorRef.current)
    }
  }, [camera])

  useFrame((state) => {
    if (!cursorRef.current) return

    // Move in camera LOCAL space
    cursorRef.current.position.x = pointer.x * 1.5
    cursorRef.current.position.y = pointer.y * 1
    cursorRef.current.position.z = -2

    // Smooth scale animation
    scaleTarget.current = hovered ? 1.6 : 1

    const currentScale = cursorRef.current.scale.x
    const newScale = THREE.MathUtils.lerp(
      currentScale,
      scaleTarget.current,
      0.15
    )

    cursorRef.current.scale.set(newScale, newScale, newScale)

    // Neon pulse
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 6) * 0.08

    cursorRef.current.traverse((child: any) => {
      if (child.material?.emissiveIntensity !== undefined) {
        child.material.emissiveIntensity = hovered
          ? 4 * pulse
          : 2 * pulse
      }
    })
  })

  return (
    <group ref={cursorRef}>
      {/* Main Torus Ring */}
      <mesh>
        <torusGeometry args={[0.12, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
          toneMapped={false}
          depthTest={false}
        />
      </mesh>

      {/* Outer Glow Ring */}
      <mesh scale={1.4}>
        <ringGeometry args={[0.15, 0.17, 64]} />
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.3}
          depthTest={false}
        />
      </mesh>
    </group>
  )
}