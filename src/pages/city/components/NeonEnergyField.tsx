import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

/**
 * Props:
 * scrollProgress -> value between 0 and 1
 * (You can pass Theatre sequence progress here later)
 */
type Props = {
  scrollProgress?: number
}

export default function NeonEnergyField({ scrollProgress = 0 }: Props) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  useFrame((state) => {
    if (!materialRef.current) return

    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    materialRef.current.uniforms.uScroll.value = scrollProgress
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, -6, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      {/* BIG plane covering city */}
      <planeGeometry args={[1000, 1000, 256, 256]} />

      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uColor: { value: new THREE.Color("#00ffff") }
        }}
        vertexShader={`
          uniform float uTime;
          uniform float uScroll;
          varying vec2 vUv;
          varying vec3 vNormal;

          void main() {
            vUv = uv;
            vNormal = normal;

            vec3 pos = position;

            // Wave distortion
            float wave1 = sin(pos.x * 2.0 + uTime * 2.0) * 0.5;
            float wave2 = cos(pos.y * 2.0 + uTime * 1.5) * 0.5;

            // Scroll increases intensity
            float distortion = (wave1 + wave2) * (0.5 + uScroll * 2.0);

            pos.z += distortion;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform float uScroll;
          uniform vec3 uColor;

          varying vec2 vUv;
          varying vec3 vNormal;

          void main() {

            // Fresnel glow
            float fresnel = 1.0 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0));
            fresnel = pow(fresnel, 2.0);

            // Subtle animated noise pattern
            float scan = sin(vUv.y * 40.0 + uTime * 5.0) * 0.05;

            // Scroll boosts glow
            float intensity = fresnel * (0.5 + uScroll * 2.0);

            vec3 color = uColor * (intensity + scan);

            gl_FragColor = vec4(color, 0.4);
          }
        `}
      />
    </mesh>
  )
}