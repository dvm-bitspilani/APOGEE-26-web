// StudioEnvironment.tsx
import { Environment, Lightformer } from "@react-three/drei"

export default function StudioEnvironment() {
  return (
    <Environment resolution={1024} >
      {/* Key Light */}
      <Lightformer
        intensity={10}
        position={[5, 5, 5]}
        scale={[10, 10, 1]}
        color="#ff0000"
      />

      {/* Fill Light */}
      <Lightformer
        intensity={4}
        position={[-5, 2, 5]}
        scale={[10, 5, 1]}
        color="#00a2ff"
      />

      {/* Rim Light */}
      <Lightformer
        intensity={8}
        position={[0, 5, -5]}
        scale={[12, 12, 1]}
        color="#0004ff"
      />

      {/* Top Soft Light */}
      <Lightformer
        intensity={5}
        position={[0, 10, 0]}
        scale={[20, 20, 1]}
        color="#ffd87a"
      />
    </Environment>
  )
}