
import * as THREE from 'three'
import React, { useRef, type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { editable as e } from "@theatre/r3f";
type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
    Cube087: THREE.Mesh
    Cube087_1: THREE.Mesh
    Cube087_2: THREE.Mesh
    // Cube087: THREE.Mesh
    // Cube087_1: THREE.Mesh
    // Cube087_2: THREE.Mesh
    // Cube087: THREE.Mesh
    // Cube087_1: THREE.Mesh
    // Cube087_2: THREE.Mesh
    Cube001: THREE.Mesh
    Cube001_1: THREE.Mesh
    Cube001_2: THREE.Mesh
    Cube049: THREE.Mesh
    Cube049_1: THREE.Mesh
    Cube049_2: THREE.Mesh
    Cube049_3: THREE.Mesh
    // Cube049: THREE.Mesh
    // Cube049_1: THREE.Mesh
    // Cube049_2: THREE.Mesh
    // Cube049_3: THREE.Mesh
    Cube092: THREE.Mesh
    Cube092_1: THREE.Mesh
    Cube092_2: THREE.Mesh
    Cube092_3: THREE.Mesh
    Cube092_4: THREE.Mesh
    Cube092_5: THREE.Mesh
    Cube003: THREE.Mesh
    Cube003_1: THREE.Mesh
    Cube003_2: THREE.Mesh
    Cube003_3: THREE.Mesh
    Cube003_4: THREE.Mesh
    Cube022: THREE.Mesh
    Cube022_1: THREE.Mesh
    Cube022_2: THREE.Mesh
    // Cylinder018: THREE.Mesh
    // Cylinder018_1: THREE.Mesh
    utility_box_01_box_low: THREE.Mesh
    Cube056: THREE.Mesh
    Cube056_1: THREE.Mesh
    Cube056_2: THREE.Mesh
    Cube056_3: THREE.Mesh
    Cube056_4: THREE.Mesh
    Cube053: THREE.Mesh
    Cube053_1: THREE.Mesh
    Cube052_1: THREE.Mesh
    Cube052_2: THREE.Mesh
    Cube011_1: THREE.Mesh
    Cube011_2: THREE.Mesh
    Cube011_3: THREE.Mesh
    Cube004_1: THREE.Mesh
    Cube004_2: THREE.Mesh
    Cube004_3: THREE.Mesh
    Cube008: THREE.Mesh
    Cube008_1: THREE.Mesh
    Cube008_2: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube009_2: THREE.Mesh
    Cube010_1: THREE.Mesh
    Cube010_2: THREE.Mesh
    Cube010_3: THREE.Mesh
    Cube012_1: THREE.Mesh
    Cube012_2: THREE.Mesh
    Cube012_3: THREE.Mesh
    BézierCurve005: THREE.Mesh
    BézierCurve001: THREE.Mesh
    BézierCurve002: THREE.Mesh
    BézierCurve003: THREE.Mesh
    BézierCurve004: THREE.Mesh
    BézierCurve006: THREE.Mesh
    // Cylinder018: THREE.Mesh
    // Cylinder018_1: THREE.Mesh
    BézierCurve007: THREE.Mesh
    BézierCurve008: THREE.Mesh
    BézierCurve009: THREE.Mesh
    BézierCurve010: THREE.Mesh
    BézierCurve011: THREE.Mesh
    BézierCurve012: THREE.Mesh
    // Cylinder018: THREE.Mesh
    // Cylinder018_1: THREE.Mesh
    BézierCurve013: THREE.Mesh
    BézierCurve015: THREE.Mesh
    BézierCurve016: THREE.Mesh
    BézierCurve017: THREE.Mesh
    BézierCurve018: THREE.Mesh
    // Cylinder018: THREE.Mesh
    // Cylinder018_1: THREE.Mesh
    BézierCurve019: THREE.Mesh
    BézierCurve021: THREE.Mesh
    BézierCurve022: THREE.Mesh
    BézierCurve023: THREE.Mesh
    BézierCurve024: THREE.Mesh
    // Cylinder018: THREE.Mesh
    // Cylinder018_1: THREE.Mesh
    BézierCurve025: THREE.Mesh
    BézierCurve026: THREE.Mesh
    BézierCurve027: THREE.Mesh
    BézierCurve028: THREE.Mesh
    BézierCurve029: THREE.Mesh
    BézierCurve030: THREE.Mesh
    // Cylinder018: THREE.Mesh
    // Cylinder018_1: THREE.Mesh
    BézierCurve031: THREE.Mesh
    BézierCurve032: THREE.Mesh
    BézierCurve033: THREE.Mesh
    BézierCurve034: THREE.Mesh
    BézierCurve035: THREE.Mesh
    BézierCurve036: THREE.Mesh
    // Cylinder018: THREE.Mesh
    // Cylinder018_1: THREE.Mesh
    BézierCurve037: THREE.Mesh
    BézierCurve038: THREE.Mesh
    BézierCurve039: THREE.Mesh
    BézierCurve040: THREE.Mesh
    BézierCurve041: THREE.Mesh
    BézierCurve042: THREE.Mesh
    // Cylinder018: THREE.Mesh
    // Cylinder018_1: THREE.Mesh
    BézierCurve043: THREE.Mesh
    BézierCurve044: THREE.Mesh
    BézierCurve045: THREE.Mesh
    BézierCurve046: THREE.Mesh
    BézierCurve047: THREE.Mesh
    BézierCurve048: THREE.Mesh
    // Cylinder018: THREE.Mesh
    // Cylinder018_1: THREE.Mesh
    BézierCurve049: THREE.Mesh
    BézierCurve050: THREE.Mesh
    BézierCurve051: THREE.Mesh
    BézierCurve052: THREE.Mesh
    BézierCurve053: THREE.Mesh
    BézierCurve054: THREE.Mesh
    Cylinder018: THREE.Mesh
    Cylinder018_1: THREE.Mesh
    BézierCurve055: THREE.Mesh
    BézierCurve056: THREE.Mesh
    BézierCurve057: THREE.Mesh
    BézierCurve058: THREE.Mesh
    BézierCurve059: THREE.Mesh
    BézierCurve060: THREE.Mesh
    Cube002: THREE.Mesh
    Cube004: THREE.Mesh
    Cube005: THREE.Mesh
    Cube014: THREE.Mesh
    Cube016: THREE.Mesh
    Cube076: THREE.Mesh
    Cube077: THREE.Mesh
    Cube093: THREE.Mesh
    Cube017: THREE.Mesh
    BézierCurve062: THREE.Mesh
    BézierCurve065: THREE.Mesh
    BézierCurve068: THREE.Mesh
    BézierCurve070: THREE.Mesh
    BézierCurve071: THREE.Mesh
    BézierCurve072: THREE.Mesh
    BézierCurve073: THREE.Mesh
    BézierCurve074: THREE.Mesh
    BézierCurve075: THREE.Mesh
    BézierCurve076: THREE.Mesh
    BézierCurve077: THREE.Mesh
    BézierCurve078: THREE.Mesh
    BézierCurve079: THREE.Mesh
    BézierCurve080: THREE.Mesh
    BézierCurve081: THREE.Mesh
    BézierCurve082: THREE.Mesh
    BézierCurve083: THREE.Mesh
    BézierCurve084: THREE.Mesh
    BézierCurve085: THREE.Mesh
    BézierCurve086: THREE.Mesh
    BézierCurve087: THREE.Mesh
    BézierCurve088: THREE.Mesh
    BézierCurve089: THREE.Mesh
    BézierCurve090: THREE.Mesh
    BézierCurve091: THREE.Mesh
    BézierCurve092: THREE.Mesh
    BézierCurve093: THREE.Mesh
    BézierCurve094: THREE.Mesh
    BézierCurve095: THREE.Mesh
    BézierCurve096: THREE.Mesh
    BézierCurve097: THREE.Mesh
    BézierCurve098: THREE.Mesh
    BézierCurve099: THREE.Mesh
    BézierCurve100: THREE.Mesh
    BézierCurve101: THREE.Mesh
    BézierCurve102: THREE.Mesh
    BézierCurve103: THREE.Mesh
    BézierCurve104: THREE.Mesh
    BézierCurve105: THREE.Mesh
    BézierCurve106: THREE.Mesh
    BézierCurve107: THREE.Mesh
    BézierCurve108: THREE.Mesh
    BézierCurve109: THREE.Mesh
    BézierCurve110: THREE.Mesh
    Cube018: THREE.Mesh
    Cube019: THREE.Mesh
    utility_box_01_box_low001: THREE.Mesh
    utility_box_01_box_low002: THREE.Mesh
    utility_box_01_box_low003: THREE.Mesh
    Plane001: THREE.Mesh
    Object_7: THREE.Mesh
    BézierCurve111: THREE.Mesh
    BézierCurve112: THREE.Mesh
    BézierCurve113: THREE.Mesh
    BézierCurve114: THREE.Mesh
    Plane002: THREE.Mesh
    Plane003: THREE.Mesh
  }
  materials: {
    ['Worn Road']: THREE.MeshStandardMaterial
    ['Building 1']: THREE.MeshStandardMaterial
    Window: THREE.MeshStandardMaterial
    ['emission windows']: THREE.MeshPhysicalMaterial
    ['Dark Metal']: THREE.MeshStandardMaterial
    ['Window.001']: THREE.MeshStandardMaterial
    ['Building 1.001']: THREE.MeshStandardMaterial
    ['Bare Metal']: THREE.MeshStandardMaterial
    ['Building 1.002']: THREE.MeshStandardMaterial
    ['Window.002']: THREE.MeshStandardMaterial
    ['Building 3']: THREE.MeshStandardMaterial
    ['Bare Metal.001']: THREE.MeshStandardMaterial
    ['AC.002']: THREE.MeshStandardMaterial
    ['Window.003']: THREE.MeshStandardMaterial
    ['Building 1.003']: THREE.MeshStandardMaterial
    ['Building 2']: THREE.MeshStandardMaterial
    ['Building Dark']: THREE.MeshStandardMaterial
    ['Building 1.004']: THREE.MeshStandardMaterial
    ['Window.004']: THREE.MeshStandardMaterial
    ['Building 3.001']: THREE.MeshStandardMaterial
    modular_electricity_poles: THREE.MeshStandardMaterial
    modular_electricity_poles_pieces: THREE.MeshStandardMaterial
    utility_box_01: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    Store: THREE.MeshStandardMaterial
    ['Store Glass']: THREE.MeshPhysicalMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Store Emission']: THREE.MeshStandardMaterial
    ['Neon  signs']: THREE.MeshStandardMaterial
    ['Dark Metal.003']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Store.001']: THREE.MeshStandardMaterial
    ['Store Glass.001']: THREE.MeshPhysicalMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Neon  signs.001']: THREE.MeshStandardMaterial
    ['Dark Metal.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Store Emission.001']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    rusty_metal_02: THREE.MeshStandardMaterial
    ['Rusty Worn Metal']: THREE.MeshStandardMaterial
    banners: THREE.MeshStandardMaterial
    bridgeUV: THREE.MeshStandardMaterial
  }
}

export default function Constellation2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/newcity.glb') as unknown as  GLTFResult
  return (
    <e.group theatreKey="Constellation2" >
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Worn Road']}
        position={[-3.623, 1.14, 0]}
        scale={[12, 12, 48]}
      />
      <group position={[-29.063, -0.219, -78.54]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={materials['Building 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087_1.geometry}
          material={materials.Window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087_2.geometry}
          material={materials['emission windows']}
        />
      </group>
      <group position={[-29.063, -0.219, -125.341]} scale={[1, 1.587, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={materials['Building 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087_1.geometry}
          material={materials.Window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087_2.geometry}
          material={materials['emission windows']}
        />
      </group>
      <group
        position={[29.453, -0.233, -180.033]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 0.683, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={materials['Building 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087_1.geometry}
          material={materials.Window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087_2.geometry}
          material={materials['emission windows']}
        />
      </group>
      <group position={[26.303, 10.488, -13.672]} scale={[13.863, 13.863, 29.214]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Building 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['emission windows']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['Dark Metal']}
        />
      </group>
      <group position={[27.858, 38.447, -127.119]} scale={[2.432, 1.365, 2.432]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials['Window.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_1.geometry}
          material={materials['Building 1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_2.geometry}
          material={materials['Bare Metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_3.geometry}
          material={materials['emission windows']}
        />
      </group>
      <group
        position={[-27.548, 31.969, -177.303]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[2.28, 1.365, 2.28]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials['Window.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_1.geometry}
          material={materials['Building 1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_2.geometry}
          material={materials['Bare Metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_3.geometry}
          material={materials['emission windows']}
        />
      </group>
      <group position={[21.586, 0, -83.676]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={materials['Building 1.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_1.geometry}
          material={materials['Window.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_2.geometry}
          material={materials['Building 3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_3.geometry}
          material={materials['Bare Metal.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_4.geometry}
          material={materials['AC.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_5.geometry}
          material={materials['emission windows']}
        />
      </group>
      <group position={[18.582, 7.613, -228.715]} scale={[1, 1, 1.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['Window.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials['Building 1.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials['Building 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials['Building Dark']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_4.geometry}
          material={materials['emission windows']}
        />
      </group>
      <group position={[18.012, -1.877, -279.58]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials['Building 1.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials['Window.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_2.geometry}
          material={materials['Building 3.001']}
        />
      </group>
      <group position={[7.746, -0.095, -63.669]} scale={1.588}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.utility_box_01_box_low.geometry}
        material={materials.utility_box_01}
        position={[-9.094, -0.096, -9.192]}
        scale={2.73}
      />
      <group position={[-45.761, 47.753, -6.464]} rotation={[0, -0.017, -Math.PI]} scale={-4.942}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056_1.geometry}
          material={materials.Store}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056_2.geometry}
          material={materials['Store Glass']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056_3.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056_4.geometry}
          material={materials['Store Emission']}
        />
      </group>
      <group position={[5.447, 8.662, -33.64]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={materials['Neon  signs']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053_1.geometry}
          material={materials['Dark Metal.003']}
        />
      </group>
      <group position={[5.447, 4.713, -33.64]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_1.geometry}
          material={materials['Neon  signs']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_2.geometry}
          material={materials['Dark Metal.003']}
        />
      </group>
      <group position={[-6.548, 10.742, -25.146]} rotation={[0, 0, Math.PI]} scale={3.543}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials.Store}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_2.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_3.geometry}
          material={materials['Store Emission']}
        />
      </group>
      <group position={[136.474, 13.291, -28.74]} rotation={[-Math.PI, 0.017, 0]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials['Store.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_3.geometry}
          material={materials['Store Glass.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['Material.004']}
        position={[132.07, 6.088, -26.325]}
        scale={[0.264, 0.267, 0.264]}
      />
      <group position={[5.447, 8.662, -33.64]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['Neon  signs.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials['Dark Metal.004']}
        />
      </group>
      <group position={[5.447, 4.713, -33.64]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials['Neon  signs.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials['Dark Metal.004']}
        />
      </group>
      <group position={[5.135, 5.657, -25.146]} scale={2.12}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials['Store.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_3.geometry}
          material={materials['Store Emission.001']}
        />
      </group>
      <group position={[137.909, 0.919, -25.994]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials['Store.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_2.geometry}
          material={materials['Store Glass.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_3.geometry}
          material={materials['Store Emission.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve005.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -63.341]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve001.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -76.333]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve002.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -88.867]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve003.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -101.683]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve004.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -114.674]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve006.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -127.209]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <group position={[-8.955, -0.095, -63.669]} scale={1.588}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve007.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -63.341]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve008.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -76.333]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve009.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -88.867]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve010.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -101.683]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve011.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -114.674]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve012.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -127.209]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <group position={[7.746, -0.095, 37.978]} scale={[1.588, 2.638, 1.588]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve013.geometry}
        material={materials['Material.007']}
        position={[17.836, 18.848, 46.534]}
        rotation={[-3.015, 1.445, -0.109]}
        scale={[-6.539, -5.899, -5.899]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve015.geometry}
        material={materials['Material.007']}
        position={[7.64, 14.872, 12.78]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -3.476, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve016.geometry}
        material={materials['Material.007']}
        position={[7.64, 14.872, -0.036]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -3.476, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve017.geometry}
        material={materials['Material.007']}
        position={[7.64, 14.872, -13.028]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -3.476, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve018.geometry}
        material={materials['Material.007']}
        position={[7.64, 14.872, -25.562]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -3.476, -2.093]}
      />
      <group position={[-8.955, -0.095, 37.978]} scale={[1.588, 2.638, 1.588]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve019.geometry}
        material={materials['Material.007']}
        position={[10.514, 19.244, -11.875]}
        rotation={[-3.125, -0.352, 0.023]}
        scale={[-5.228, -4.717, -4.717]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve021.geometry}
        material={materials['Material.007']}
        position={[-9.06, 14.872, 12.78]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -3.476, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve022.geometry}
        material={materials['Material.007']}
        position={[-9.06, 14.872, -0.036]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -3.476, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve023.geometry}
        material={materials['Material.007']}
        position={[-9.06, 14.872, -13.028]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -3.476, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve024.geometry}
        material={materials['Material.007']}
        position={[-9.06, 14.872, -25.562]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -3.476, -2.093]}
      />
      <group position={[7.746, -0.095, -163.818]} scale={1.588}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve025.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -163.49]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve026.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -176.481]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve027.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -189.016]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve028.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -201.831]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve029.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -214.823]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve030.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -227.357]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <group position={[-8.955, -0.095, -163.818]} scale={1.588}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve031.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -163.49]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve032.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -176.481]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve033.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -189.016]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve034.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -201.831]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve035.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -214.823]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve036.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -227.357]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <group position={[7.746, -0.095, -266.873]} scale={1.588}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve037.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -266.545]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve038.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -279.537]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve039.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -292.071]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve040.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -304.887]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve041.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -317.878]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve042.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -330.413]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <group position={[-8.955, -0.095, -266.873]} scale={1.588}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve043.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -266.545]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve044.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -279.537]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve045.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -292.071]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve046.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -304.887]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve047.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -317.878]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve048.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -330.413]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <group position={[7.746, -0.095, -368.205]} scale={1.588}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve049.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -367.877]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve050.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -380.869]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve051.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -393.403]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve052.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -406.219]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve053.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -419.211]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve054.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -431.745]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <group position={[-8.955, -0.095, -368.205]} scale={1.588}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.modular_electricity_poles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.modular_electricity_poles_pieces}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve055.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -367.877]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve056.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -380.869]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve057.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -393.403]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve058.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -406.219]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve059.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -419.211]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve060.geometry}
        material={materials['Material.007']}
        position={[-9.06, 9.04, -431.745]}
        rotation={[-2.1, 1.552, -1.024]}
        scale={[-2.32, -2.093, -2.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[121.393, 0.321, 4.232]}
        scale={0.788}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[121.393, 0.321, -7.918]}
        scale={0.788}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-0.562, 21.685, -126.999]}
        rotation={[0, 1.368, 0]}
        scale={3.463}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-100.045, 5.641, 7.561]}
        scale={[1.624, 0.137, 11.127]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[138.043, 26.435, -6.26]}
        scale={1.24}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube076.geometry}
        material={materials.rusty_metal_02}
        position={[18.463, 223.896, -17.815]}
        rotation={[0, -1.571, 0]}
        scale={0.934}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube077.geometry}
        material={materials.rusty_metal_02}
        position={[21.224, 251.506, -12.797]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube093.geometry}
        material={materials.rusty_metal_02}
        position={[-1.243, 203.696, -21.517]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials['Rusty Worn Metal']}
        position={[6.31, -0.343, -20.398]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[3.913, 0.451, 23.929]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve062.geometry}
        material={materials['Material.007']}
        position={[7.64, 14.872, 3.363]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.639, -3.477, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve065.geometry}
        material={materials['Material.007']}
        position={[7.64, 14.872, -7.46]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.639, -3.477, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve068.geometry}
        material={materials['Material.007']}
        position={[7.64, 14.872, -11.667]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.639, -3.477, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve070.geometry}
        material={materials['Material.007']}
        position={[7.64, 14.872, -31.907]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.639, -3.477, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve071.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -89.57]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve072.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -98.987]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve073.geometry}
        material={materials['Material.007']}
        position={[23.298, 17.811, -66.49]}
        rotation={[-3.064, 0.531, -0.109]}
        scale={[-8.86, -2.093, -4.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve074.geometry}
        material={materials['Material.007']}
        position={[13.249, 29.171, -133.39]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-7.247, -4.169, -5.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve075.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -109.81]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve076.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -119.227]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve077.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -104.6]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve078.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -114.017]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve079.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -124.84]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve080.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -134.257]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve081.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -191.522]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve082.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -200.939]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve083.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -173.472]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve084.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -182.889]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve085.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -211.762]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve086.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -221.179]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve087.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -206.552]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve088.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -215.968]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve089.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -226.792]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve090.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -236.209]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve091.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -290.194]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve092.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -299.611]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve093.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -272.145]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve094.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -281.562]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve095.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -310.435]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve096.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -319.851]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve097.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -305.224]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve098.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -314.641]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve099.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -325.464]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve100.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -334.881]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve101.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -394.27]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve102.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -403.687]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve103.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -376.22]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve104.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -385.637]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve105.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -414.51]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve106.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -423.927]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve107.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -409.3]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve108.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -418.717]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve109.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -429.54]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve110.geometry}
        material={materials['Material.007']}
        position={[7.64, 9.04, -438.957]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-3.638, -2.093, -2.577]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials['Rusty Worn Metal']}
        position={[10.529, -0.343, -116.974]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[2.07, 0.239, 23.929]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials['Rusty Worn Metal']}
        position={[10.529, 33.926, -116.974]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.958, 0.111, 11.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.utility_box_01_box_low001.geometry}
        material={materials.utility_box_01}
        position={[-9.094, -0.096, -9.192]}
        scale={2.73}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.utility_box_01_box_low002.geometry}
        material={materials.utility_box_01}
        position={[9.161, -0.097, -73.262]}
        rotation={[0, -0.937, 0]}
        scale={2.73}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.utility_box_01_box_low003.geometry}
        material={materials.utility_box_01}
        position={[-8.461, -0.095, -100.414]}
        rotation={[0, 1.03, 0]}
        scale={2.73}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.banners}
        position={[-11.481, 18.465, -126.131]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={2.168}
      />
      <group scale={18.749}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.bridgeUV}
          position={[0.14, 0.633, -9.311]}
          rotation={[0, 0.142, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve111.geometry}
        material={materials['Material.007']}
        position={[12.024, 21.907, -117.182]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-4.681, -2.693, -3.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve112.geometry}
        material={materials['Material.007']}
        position={[12.024, 21.907, -117.3]}
        rotation={[-3.126, -0.131, 0.02]}
        scale={[-4.681, -2.693, -3.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve113.geometry}
        material={materials['Material.007']}
        position={[12.024, 21.907, -138.795]}
        rotation={[-3.126, -0.131, 0.02]}
        scale={[-4.681, -2.693, -3.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve114.geometry}
        material={materials['Material.007']}
        position={[12.024, 21.907, -138.795]}
        rotation={[-3.126, 0.123, 0.016]}
        scale={[-4.681, -2.693, -3.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.banners}
        position={[-15.122, 6.885, -107.865]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.534}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.banners}
        position={[-15.122, 16.463, -107.865]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.534}
      />
    </group>
    </e.group>
  )
}

useGLTF.preload('/models/newcity.glb')