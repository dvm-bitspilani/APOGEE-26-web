import * as THREE from 'three'
import { useRef, type JSX } from 'react'
import { Center, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useHolographicMaterial } from '../../hooks/useHolographicMaterial'
import type { GLTFLogo } from '../../types/Models.types'

export function Logo(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/models/dvmlogowide-v1.glb') as unknown as GLTFLogo
  const mat = useHolographicMaterial([0, 0.8, 0.9], 1, 2.0);
  // const mesh1Ref = useRef<THREE.Mesh>(null!)
  // const mesh2Ref = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  // const group1Ref = useRef<THREE.Group>(null!)
  // const group2Ref = useRef<THREE.Group>(null!)
  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta
  })
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI, 0]} ref={groupRef}>
      <Center>
        <group >
          <mesh
            // ref={mesh1Ref}
            geometry={nodes.Plane001.geometry}
            material={mat}
            position={[-0.35, -0.125, -0.56]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.064, 0.064 * 2, 0.064]}
          />
        </group>

        <group >
          <mesh
            // ref={mesh2Ref}
            geometry={nodes.Plane002.geometry}
            material={mat}
            position={[0.616, 0.125, -0.56]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.088, 0.087 * 2, 0.087]}
          />

        </group>
      </Center>
    </group>
  )
}

useGLTF.preload('/models/dvmlogowide-v1.glb')