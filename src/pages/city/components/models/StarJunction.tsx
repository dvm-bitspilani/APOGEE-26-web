import * as THREE from 'three'
import { type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { type GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_11: THREE.Mesh
    Object_14: THREE.Mesh
    Object_20: THREE.Mesh
    Object_17: THREE.Mesh
    Object_18: THREE.Mesh
    Object_23: THREE.Mesh
    Object_26: THREE.Mesh
    Object_29: THREE.Mesh
    Object_32: THREE.Mesh
    Object_35: THREE.Mesh
    Object_38: THREE.Mesh
    Object_41: THREE.Mesh
    Object_44: THREE.Mesh
    Object_47: THREE.Mesh
    Object_50: THREE.Mesh
    Object_68: THREE.Mesh
    Object_71: THREE.Mesh
    Object_86: THREE.Mesh
    Object_89001: THREE.Mesh
    Object_98001: THREE.Mesh
    Object_101: THREE.Mesh
    Object_104: THREE.Mesh
    Object_107: THREE.Mesh
    Object_113: THREE.Mesh
    Object_110: THREE.Mesh
    Object_111: THREE.Mesh
    Object_119: THREE.Mesh
    Object_125: THREE.Mesh
    Object_122: THREE.Mesh
    Object_123: THREE.Mesh
    Object_131: THREE.Mesh
    Object_128: THREE.Mesh
    Object_129: THREE.Mesh
    Object_134: THREE.Mesh
    Object_135: THREE.Mesh
    Object_141: THREE.Mesh
    Object_138: THREE.Mesh
    Object_144: THREE.Mesh
    Object_153: THREE.Mesh
    Object_156: THREE.Mesh
    Object_159: THREE.Mesh
    Object_165: THREE.Mesh
    Object_168: THREE.Mesh
    Object_171: THREE.Mesh
    Object_180: THREE.Mesh
    Object_186: THREE.Mesh
    Object_189: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    chrom: THREE.MeshStandardMaterial
    glass_01: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    advertising_screens_texture_01: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    metal_black: THREE.MeshStandardMaterial
    metal_gray: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    material_0: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    white_neon: THREE.MeshStandardMaterial
  }
}

export function StarJunction(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/city3-v1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.chrom}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1660.198}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.glass_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.advertising_screens_texture_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.advertising_screens_texture_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.metal_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.advertising_screens_texture_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_71.geometry}
          material={materials.advertising_screens_texture_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_86.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_89001.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_98001.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_101.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_104.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_107.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_113.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_110.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_111.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_119.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_125.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_122.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_123.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_131.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_128.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_129.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_134.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_135.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_141.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_138.geometry}
          material={materials.metal_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_144.geometry}
          material={materials.metal_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_153.geometry}
          material={materials.metal_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_156.geometry}
          material={materials.metal_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_159.geometry}
          material={materials.metal_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_165.geometry}
          material={materials.metal_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_168.geometry}
          material={materials.metal_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_171.geometry}
          material={materials.metal_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_180.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_186.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_189.geometry}
          material={materials.white_neon}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/city3-v1.glb')