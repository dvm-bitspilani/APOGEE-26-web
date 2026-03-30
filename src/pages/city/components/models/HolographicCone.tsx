import * as THREE from 'three'
import {  type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { useHolographicMaterial } from '../../hooks/useHolographicMaterial'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
  }
  materials: {
    RingMat: THREE.MeshStandardMaterial
  }
}

export default function Cone(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/models/cone.glb') as unknown as GLTFResult
  const mat = useHolographicMaterial([0, 0.8, 0.9], 0.5,0.85);
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cylinder"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={mat}
        scale={0.056}
      />
    </group>
  )
}

useGLTF.preload('/models/cone.glb')

