import * as THREE from 'three'
import  { useRef, type JSX } from 'react'
import { Center, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import type { GLTF } from 'three-stdlib'
// import { useCyberpunkFogMaterial } from '../../hooks/useCyberPunkFogMaterial'

type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh
    Plane002: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
  }
}

export function Logo(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/dvmlogowide-v1.glb') as unknown as GLTFResult
  // const mat = useCyberpunkFogMaterial()

  // 🔥 separate refs
  const mesh1Ref = useRef<THREE.Mesh>(null!)
  const mesh2Ref = useRef<THREE.Mesh>(null!)

  // 🔄 animate rotation on Y axis
 const groupRef = useRef<THREE.Group>(null!)
 const group1Ref = useRef<THREE.Group>(null!)
const group2Ref = useRef<THREE.Group>(null!)

useFrame((_, delta) => {
  groupRef.current.rotation.y += delta
  // group2Ref.current.rotation.y -= delta
})
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI, 0]}ref={groupRef}>
      <Center>
      <group ref={group1Ref}>
  <mesh
    ref={mesh1Ref}
    geometry={nodes.Plane001.geometry}
    material={materials['Material.002']}
    position={[-0.35, -0.125, -0.56]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={0.064}
  />
</group>

<group ref={group2Ref}>
  <mesh
    ref={mesh2Ref}
    geometry={nodes.Plane002.geometry}
    material={materials['Material.003']}
    position={[0.616, 0.125, -0.56]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={[0.088, 0.087, 0.087]}
  />

</group>
  </Center>
    </group>
  )
}

useGLTF.preload('/models/dvmlogowide-v1.glb')