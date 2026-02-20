
import * as THREE from 'three'
import { type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { editable as e } from "@theatre/r3f";

type GLTFResult = GLTF & {
  nodes: {
    Object_11: THREE.Mesh
    Object_11001: THREE.Mesh
    Object_11002: THREE.Mesh
    Object_11004: THREE.Mesh
    Object_11007: THREE.Mesh
    Object_11008: THREE.Mesh
    Object_11009: THREE.Mesh
    Object_11010: THREE.Mesh
    Object_11011: THREE.Mesh
    Object_11012: THREE.Mesh
    Object_11013: THREE.Mesh
    Object_11014: THREE.Mesh
    Object_11015: THREE.Mesh
    Object_11016: THREE.Mesh
    Object_11017: THREE.Mesh
    Object_11018: THREE.Mesh
    Object_11019: THREE.Mesh
    Object_11020: THREE.Mesh
    Object_11021: THREE.Mesh
    Object_11022: THREE.Mesh
    Object_11023: THREE.Mesh
    Object_11024: THREE.Mesh
    Object_11025: THREE.Mesh
    Object_11026: THREE.Mesh
    Object_11027: THREE.Mesh
    Object_11028: THREE.Mesh
    Object_11029: THREE.Mesh
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
    Object_98002: THREE.Mesh
    Object_98003: THREE.Mesh
    Object_98004: THREE.Mesh
    Object_98005: THREE.Mesh
    Object_98006: THREE.Mesh
    Object_98007: THREE.Mesh
    Object_98008: THREE.Mesh
    Object_98009: THREE.Mesh
    Object_101: THREE.Mesh
    Object_104: THREE.Mesh
    Object_107: THREE.Mesh
    Object_113: THREE.Mesh
    Object_110: THREE.Mesh
    Object_119: THREE.Mesh
    Object_125: THREE.Mesh
    Object_122: THREE.Mesh
    Object_123: THREE.Mesh
    Object_131: THREE.Mesh
    Object_128: THREE.Mesh
    Object_129: THREE.Mesh
    Object_134: THREE.Mesh
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
    Cube029: THREE.Mesh
    Cube031: THREE.Mesh
    BézierCurve062: THREE.Mesh
    Cube046: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    Cube004: THREE.Mesh
    Cube005: THREE.Mesh
    BézierCurve001: THREE.Mesh
    BézierCurve002: THREE.Mesh
    BézierCurve003: THREE.Mesh
    BézierCurve004: THREE.Mesh
    BézierCurve005: THREE.Mesh
    BézierCurve006: THREE.Mesh
    BézierCurve007: THREE.Mesh
    BézierCurve008: THREE.Mesh
    BézierCurve009: THREE.Mesh
    BézierCurve010: THREE.Mesh
    Plane: THREE.Mesh
    Plane003: THREE.Mesh
    Object_7: THREE.Mesh
    Object_8: THREE.Mesh
    Object_9: THREE.Mesh
    Plane001: THREE.Mesh
    Plane002: THREE.Mesh
    Plane004: THREE.Mesh
    Plane005: THREE.Mesh
    Plane006: THREE.Mesh
    Earth_globe_glowing_hologram: THREE.Mesh
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
    ['Dark iron']: THREE.MeshPhysicalMaterial
    bridgeUV: THREE.MeshStandardMaterial
    ['Mystical mesh']: THREE.MeshBasicMaterial
    ['Braided metal']: THREE.MeshStandardMaterial
    hologram: THREE.MeshStandardMaterial
    body: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    RingMat: THREE.MeshStandardMaterial
    ['Earth Surface.002']: THREE.MeshStandardMaterial
  }
}

export default function Constellation2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/cityy.glb') as unknown as  GLTFResult
  return (
    <e.group theatreKey="Constellation2" >
     {/* <group {...props} dispose={null} rotation={[0, Math.PI, 0]} scale={[0.7, 0.7, 0.7]}>
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
          material={materials['Bui21e1a523b81e2fbdb526ddd0889b62cc60a1d059lding 1']}
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
          geometry={nodes.Cube001_1.geometry}
          material={materials['Building 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['emission windows']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
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
          geometry={nodes.Cube003_1.geometry}
          material={materials['Window.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials['Building 1.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials['Building 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_4.geometry}
          material={materials['Building Dark']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_5.geometry}
          material={materials['emission windows']}
        />
      </group>
      <group position={[18.012, -1.877, -279.58]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials['Building 1.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_2.geometry}
          material={materials['Window.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_3.geometry}
          material={materials['Building 3.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.utility_box_01_box_low.geometry}
        material={materials.utility_box_01}
        position={[-10.235, -0.096, -7.685]}
        rotation={[0, Math.PI / 2, 0]}
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
      </group>
      <group position={[16.006, 8.301, -94.137]} scale={2.198}>
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
      <group
        position={[-8.306, 9.827, -14.362]}
        rotation={[0, 0, Math.PI]}
        scale={[8.888, 3.543, 3.543]}>
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
      <group
        position={[-23.777, 35.601, -274.159]}
        rotation={[0, -0.017, -Math.PI]}
        scale={[-1.834, -3.754, -3.171]}>
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_4.geometry}
          material={materials['Material.004']}
        />
      </group>
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
      <group position={[10.583, 5.657, -179.29]} scale={[6.91, 2.875, 2.12]}>
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve019.geometry}
        material={materials['Material.007']}
        position={[10.514, 19.244, -11.875]}
        rotation={[-3.125, -0.352, 0.023]}
        scale={[-7.132, -4.718, -12.821]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['traffic cone']}
        position={[-5.592, 0, -81.536]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.bridgeUV}
        position={[-0.562, 14.072, -126.999]}
        rotation={[0, 1.368, 0]}
        scale={[3.463, 2.341, 3.463]}
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
        geometry={nodes.Cube076.geometry}
        material={materials['Steel lattice 02']}
        position={[0, 14.365, -276]}
        rotation={[0, 0.174, 0]}
        scale={1.685}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube077.geometry}
        material={materials.rusty_metal_02}
        position={[-27.006, 8.782, -102.01]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube093.geometry}
        material={materials.rusty_metal_02}
        position={[-4.023, 31.198, -16.725]}
        rotation={[0.803, 0.434, 2.731]}
        scale={[1.355, 1, 1]}
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
        position={[9.096, 14.872, 3.363]}
        rotation={[-3.126, -0.157, 0.02]}
        scale={[-4.185, -3.477, -3.562]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve065.geometry}
        material={materials['Material.007']}
        position={[7.64, 28.106, -7.46]}
        rotation={[-3.123, 0.536, 0.008]}
        scale={[-6.921, -8.421, -11.622]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve070.geometry}
        material={materials['Material.007']}
        position={[7.64, 14.872, -31.907]}
        rotation={[-3.125, -0.334, 0.023]}
        scale={[-4.541, -3.477, -4.134]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve072.geometry}
        material={materials['Material.007']}
        position={[20.452, 13.283, -98.987]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-7.389, -2.702, -8.119]}
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.bridgeUV}
        position={[4.45, 7.166, -327.204]}
        rotation={[0, 0.142, 0]}
        scale={[14.603, 12.842, 12.88]}
      />
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
        position={[-11.665, 6.898, -66.003]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.534}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Rusty Worn Metal']}
        position={[-12.05, -5.477, -185.002]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.07, 0.239, 23.929]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Rusty Worn Metal']}
        position={[-12.05, 28.792, -185.002]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.958, 0.111, 11.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.banners}
        position={[-11.574, 13.409, -125.726]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.598, 0.534, 0.534]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.utility_box_01_box_low004.geometry}
        material={materials.utility_box_01}
        position={[9.701, -0.096, 32.356]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={2.73}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.utility_box_01_box_low005.geometry}
        material={materials.utility_box_01}
        position={[9.701, -0.096, 30.233]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={2.73}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['traffic cone']}
        position={[5.869, -0.136, -65.834]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['traffic cone']}
        position={[-5.691, 0.041, 29.94]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['traffic cone']}
        position={[-5.771, -0.14, -24.786]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials['traffic cone']}
        position={[5.493, -0.126, -118.376]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['traffic cone']}
        position={[-5.627, 0.004, -169.515]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials['traffic cone']}
        position={[6.024, 0.006, -203.649]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials['traffic cone']}
        position={[-5.666, -0.19, -212.751]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials['traffic cone']}
        position={[5.947, -0.145, -226.887]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials['traffic cone']}
        position={[5.947, -0.145, -238.217]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials['traffic cone']}
        position={[5.947, -0.145, -292.98]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials['traffic cone']}
        position={[5.947, -0.145, -304.146]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials['traffic cone']}
        position={[-4.898, -0.145, -315.533]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials['traffic cone']}
        position={[-4.898, -0.145, -326.699]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.27}
      />
      <group position={[-20.954, 0, -221.455]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_6.geometry}
          material={materials['Building 1.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_7.geometry}
          material={materials['Window.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_8.geometry}
          material={materials['Building 3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_9.geometry}
          material={materials['Bare Metal.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_10.geometry}
          material={materials['AC.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_11.geometry}
          material={materials['emission windows']}
        />
      </group>
      <group position={[-29.404, -0.233, -329.443]} scale={[1, 0.683, 1]}>
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
      <group position={[18.582, 7.613, -332.033]} scale={[1, 1, 1.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_6.geometry}
          material={materials['Window.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_7.geometry}
          material={materials['Building 1.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_8.geometry}
          material={materials['Building 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_9.geometry}
          material={materials['Building Dark']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_10.geometry}
          material={materials['emission windows']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['Steel lattice 02']}
        position={[0, 14.365, -222.455]}
        rotation={[0, -0.154, 0]}
        scale={1.685}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials['Steel lattice 02']}
        position={[0, 14.365, -124.936]}
        scale={1.685}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials['Steel lattice 02']}
        position={[0, 14.365, -174.581]}
        rotation={[0, 0.245, 0]}
        scale={1.685}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials['Steel lattice 02']}
        position={[0, 14.365, -74.692]}
        scale={1.685}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials['Steel lattice 02']}
        position={[0, 14.365, 3.801]}
        rotation={[0, -0.128, 0]}
        scale={1.685}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve001.geometry}
        material={materials['Material.007']}
        position={[21.724, 29.171, -187.776]}
        rotation={[-3.123, -0.536, 0.027]}
        scale={[-7.247, -4.169, -5.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve002.geometry}
        material={materials['Material.007']}
        position={[12.024, 8.068, -176.194]}
        rotation={[-3.126, 0.123, 0.016]}
        scale={[-4.681, -2.693, -3.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.bridgeUV}
        position={[-0.562, 14.072, -20.098]}
        rotation={[-Math.PI, 1.066, -Math.PI]}
        scale={[3.463, 2.341, 3.463]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve003.geometry}
        material={materials['Material.007']}
        position={[21.724, 21.177, -172.279]}
        rotation={[-3.125, 0.318, 0.012]}
        scale={[-7.247, -4.169, -5.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve004.geometry}
        material={materials['Material.007']}
        position={[12.024, 10.993, -186.948]}
        rotation={[-3.124, -0.434, 0.025]}
        scale={[-4.95, -2.693, -3.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve005.geometry}
        material={materials['Material.007']}
        position={[20.452, 13.283, -216.986]}
        rotation={[-3.125, -0.199, 0.021]}
        scale={[-7.389, -2.702, -8.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve006.geometry}
        material={materials['Material.007']}
        position={[12.024, 19.984, -235.299]}
        rotation={[3.109, -0.128, -0.35]}
        scale={[-6.027, -2.808, -3.336]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve007.geometry}
        material={materials['Material.007']}
        position={[12.024, 21.907, -224.463]}
        rotation={[3.087, -0.121, -0.53]}
        scale={[-7.436, -3.322, -3.365]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.rusty_metal_02}
        position={[-27.006, 10.537, -151.007]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials.rusty_metal_02}
        position={[15.231, 10.537, -151.007]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials.rusty_metal_02}
        position={[-27.006, 10.537, -255.087]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials.rusty_metal_02}
        position={[15.231, 10.537, -255.087]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials.rusty_metal_02}
        position={[-27.006, 10.537, -306.479]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials.rusty_metal_02}
        position={[15.231, 10.537, -306.479]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials.rusty_metal_02}
        position={[-27.006, 10.537, -355.112]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials.rusty_metal_02}
        position={[15.231, 10.537, -355.112]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials.rusty_metal_02}
        position={[-27.006, 10.537, -50.539]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials.rusty_metal_02}
        position={[15.231, 10.537, -50.539]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials.rusty_metal_02}
        position={[-27.006, 10.537, 24.166]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials.rusty_metal_02}
        position={[15.231, 10.537, 24.166]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.071, 1.809, 1.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve008.geometry}
        material={materials['Material.007']}
        position={[12.024, 21.907, -271.563]}
        rotation={[-3.126, -0.131, 0.02]}
        scale={[-4.681, -2.693, -3.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve009.geometry}
        material={materials['Material.007']}
        position={[12.024, 22.666, -330.611]}
        rotation={[3.109, -0.128, -0.35]}
        scale={[-6.027, -2.808, -3.336]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve010.geometry}
        material={materials['Material.007']}
        position={[12.024, 24.59, -319.776]}
        rotation={[3.087, -0.121, -0.53]}
        scale={[-7.436, -3.322, -3.365]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve011.geometry}
        material={materials['Material.007']}
        position={[12.024, 12.367, -275.14]}
        rotation={[-3.126, -0.131, 0.02]}
        scale={[-4.681, -2.693, -3.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.banners}
        position={[-11.574, 13.409, -125.726]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.598, 0.534, 0.534]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials.banners}
        position={[-19.252, 20.127, -329.093]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.598, 0.534, 0.534]}
      />
      <group position={[10.78, -0.1, -10.813]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.001}>
          <group position={[0.002, 0, 0]}>
            <group position={[0.002, 0, 0]}>
              <group position={[0.002, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11001.geometry}
                  material={materials['Material.043']}
                  position={[10843.393, 66122.672, 7887.354]}
                  rotation={[0, 0, -1.786]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11002.geometry}
                  material={materials['Material.043']}
                  position={[-63679.977, 66122.672, 7887.354]}
                  rotation={[0, 0, 1.356]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11003.geometry}
                  material={materials['Material.043']}
                  position={[10843.389, 236224.781, 7887.354]}
                  rotation={[0, 0, -1.786]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11004.geometry}
                  material={materials['Material.043']}
                  position={[-63679.977, 236224.781, 7887.354]}
                  rotation={[0, 0, 1.356]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11006.geometry}
                  material={materials['Material.043']}
                  position={[10843.385, 400261.781, 7887.354]}
                  rotation={[0, 0, -1.786]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11007.geometry}
                  material={materials['Material.043']}
                  position={[-63679.969, 400261.813, 7887.354]}
                  rotation={[0, 0, 1.356]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11008.geometry}
                  material={materials['Material.043']}
                  position={[15074.398, 280336.188, 43966.07]}
                  rotation={[0, 0, -1.786]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11009.geometry}
                  material={materials['Material.043']}
                  position={[10843.385, 487578.813, 7887.354]}
                  rotation={[0, 0, -1.786]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11010.geometry}
                  material={materials['Material.043']}
                  position={[-63679.969, 487578.906, 7887.354]}
                  rotation={[0, 0, 1.356]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11011.geometry}
                  material={materials['Material.043']}
                  position={[10843.383, 575071.563, 7887.354]}
                  rotation={[0, 0, -1.786]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11012.geometry}
                  material={materials['Material.043']}
                  position={[-63679.969, 575071.625, 7887.354]}
                  rotation={[0, 0, 1.356]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11013.geometry}
                  material={materials['Material.043']}
                  position={[10843.395, -58331.121, 7887.354]}
                  rotation={[0, 0, -1.786]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11014.geometry}
                  material={materials['Material.043']}
                  position={[-63679.98, -58331.121, 7887.354]}
                  rotation={[0, 0, 1.356]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11015.geometry}
                  material={materials['Material.043']}
                  position={[-63679.977, 147729.438, 7887.354]}
                  rotation={[0, 0, 1.356]}
                  scale={5.312}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11016.geometry}
                  material={materials['Material.043']}
                  position={[9.166, 193221.484, 43966.043]}
                  rotation={[0, 0, -1.786]}
                  scale={8.044}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials.banners}
        position={[-15.122, 16.463, -107.865]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.534}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials.banners}
        position={[-18.965, 35.641, -78.653]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.485}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={materials.banners}
        position={[-11.665, 6.898, -77.63]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.534}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials.banners}
        position={[-11.665, 6.898, -90.032]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.534}
      />
      <group position={[16.006, 8.301, -73.107]} scale={2.198}>
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials.banners}
        position={[-11.574, 13.409, -125.726]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.598, 0.534, 0.534]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials.banners}
        position={[-18.886, 53.031, -125.726]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.598, 0.534, 1.646]}
      />
      <group position={[-7.439, -0.096, -118.663]} scale={1.791}>
        <group position={[-0.714, 0, 30.019]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006.geometry}
            material={materials.Light_Road_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group position={[-0.714, 0, -24.64]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006.geometry}
            material={materials.Light_Road_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group position={[-0.714, 0, -85.018]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006.geometry}
            material={materials.Light_Road_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group position={[-0.714, 0, 84.528]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006.geometry}
            material={materials.Light_Road_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group position={[9.473, 0, 49.006]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006.geometry}
            material={materials.Light_Road_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group position={[9.473, 0, -11.374]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006.geometry}
            material={materials.Light_Road_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group position={[9.473, 0, -68.275]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006.geometry}
            material={materials.Light_Road_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group position={[9.473, 0, -121.056]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006.geometry}
            material={materials.Light_Road_mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_1.geometry}
            material={materials.Emissive}
          />
        </group>
      </group>
      <group position={[-7.58, -0.096, -81.794]}>
        <group rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane091.geometry}
            material={materials['Galvanized steel']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane091_1.geometry}
            material={materials['Reflective.Black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane091_2.geometry}
            material={materials['Reflective.White']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane091_3.geometry}
            material={materials['Rough white metal']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane091_4.geometry}
            material={materials['Panneau.Rouge']}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['Reflective.Black']}
        position={[20.187, 2.408, 0.074]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials['Reflective.Black']}
        position={[20.187, 2.596, 0.074]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials['Reflective.Black']}
        position={[20.371, 1.875, 0.123]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials['Reflective.Black']}
        position={[20.127, 1.895, 0.123]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <group position={[9.423, -0.096, -81.794]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_5.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_6.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_7.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_8.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_9.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[-7.58, -0.096, -22.207]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_10.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_11.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_12.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_13.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_14.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[9.423, -0.096, -22.207]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_15.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_16.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_17.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_18.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_19.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[-7.58, -0.096, 23.454]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_20.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_21.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_22.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_23.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_24.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[9.423, -0.096, 23.454]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_25.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_26.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_27.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_28.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_29.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[-7.58, -0.096, -133.776]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_30.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_31.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_32.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_33.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_34.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[9.423, -0.096, -133.776]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_35.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_36.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_37.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_38.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_39.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[-7.58, -0.096, -201.923]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_40.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_41.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_42.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_43.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_44.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[9.423, -0.096, -201.923]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_45.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_46.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_47.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_48.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_49.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[-7.58, -0.096, -274.592]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_50.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_51.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_52.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_53.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_54.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[9.423, -0.096, -274.592]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_55.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_56.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_57.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_58.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_59.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[-7.58, -0.096, -333.935]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_60.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_61.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_62.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_63.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_64.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[9.423, -0.096, -333.935]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_65.geometry}
          material={materials['Galvanized steel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_66.geometry}
          material={materials['Reflective.Black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_67.geometry}
          material={materials['Reflective.White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_68.geometry}
          material={materials['Rough white metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_69.geometry}
          material={materials['Panneau.Rouge']}
        />
      </group>
      <group position={[2.162, -0.345, -7.683]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-4.263, 0, -1.947]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials['Old traffic cone. 02']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_2.geometry}
            material={materials['OLD traffic cone base.02']}
          />
        </group>
        <group position={[-0.45, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials['traffic cone']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials['traffic cone base']}
          />
        </group>
        <group position={[-2.062, 0, -0.49]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials['traffic cone']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials['traffic cone base']}
          />
        </group>
        <group position={[-2.461, 0, -0.966]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials['traffic cone']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials['traffic cone base']}
          />
        </group>
        <group position={[-2.885, 0, -1.554]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials['traffic cone']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials['traffic cone base']}
          />
        </group>
        <group position={[-3.531, 0, -1.971]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials['traffic cone']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials['traffic cone base']}
          />
        </group>
        <group position={[-1.248, 0, -0.237]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials['traffic cone']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials['traffic cone base']}
          />
        </group>
        <group position={[0.542, 0, 0.618]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials['traffic cone']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials['traffic cone base']}
          />
        </group>
        <group position={[0.73, 0, 1.728]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials['traffic cone']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials['traffic cone base']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials['Old traffic cone']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_2.geometry}
          material={materials['OLD traffic cone base']}
        />
      </group>
      <group position={[-5.649, -0.346, -84.859]} rotation={[Math.PI, 0, Math.PI]}>
        <group position={[-11.569, 0, -15.851]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_9.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_10.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_11.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_12.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_13.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_14.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_15.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_16.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_17.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-0.068, 0, -57.112]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_18.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_19.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_20.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_21.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_22.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_23.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_24.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_25.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_26.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-11.338, 0, -76.466]} rotation={[0, Math.PI / 9, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_27.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_28.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_29.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_30.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_31.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_32.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_33.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_34.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_35.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[0.074, 0, -112.206]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_36.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_37.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_38.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_39.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_40.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_41.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_42.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_43.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_44.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-9.085, 0, -74.326]} rotation={[0, -0.474, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_45.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_46.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_47.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_48.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_49.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_50.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_51.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_52.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_53.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[0, 0, 6.002]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_54.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_55.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_56.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_57.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_58.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_59.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_60.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_61.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_62.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[0, 0, 11.652]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_63.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_64.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_65.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_66.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_67.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_68.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_69.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_70.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_71.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-11.143, 0, 36.397]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_72.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_73.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_74.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_75.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_76.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_77.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_78.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_79.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_80.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-11.143, 0, 42.536]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_81.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_82.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_83.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_84.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_85.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_86.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_87.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_88.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_89.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[0, 0, 87.687]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_90.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_91.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_92.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_93.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_94.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_95.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_96.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_97.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_98.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[0, 0, 93.689]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_99.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_100.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_101.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_102.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_103.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_104.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_105.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_106.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_107.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[0, 0, 130.289]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_108.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_109.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_110.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_111.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_112.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_113.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_114.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_115.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_116.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-11.593, 0, 144.98]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_117.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_118.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_119.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_120.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_121.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_122.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_123.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_124.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_125.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-11.593, 0, 121.337]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_126.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_127.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_128.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_129.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_130.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_131.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_132.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_133.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_134.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-11.593, 0, 156.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_135.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_136.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_137.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_138.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_139.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_140.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_141.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_142.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_143.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-11.577, 0, 210.939]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_144.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_145.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_146.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_147.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_148.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_149.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_150.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_151.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_152.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-11.577, 0, 222.59]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_153.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_154.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_155.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_156.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_157.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_158.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_159.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_160.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_161.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-0.752, 0, 233.812]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_162.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_163.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_164.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_165.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_166.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_167.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_168.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_169.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_170.geometry}
            material={materials.Indicator}
          />
        </group>
        <group position={[-0.752, 0, 245.463]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_171.geometry}
            material={materials.TailLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_172.geometry}
            material={materials.Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_173.geometry}
            material={materials.Mirrors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_174.geometry}
            material={materials.Lamp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_175.geometry}
            material={materials.Carbon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_176.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_177.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_178.geometry}
            material={materials.Rims}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JDM_Body_GEO_179.geometry}
            material={materials.Indicator}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Body_GEO.geometry}
          material={materials.TailLight}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Body_GEO_1.geometry}
          material={materials.Paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Body_GEO_2.geometry}
          material={materials.Mirrors}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Body_GEO_3.geometry}
          material={materials.Lamp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Body_GEO_4.geometry}
          material={materials.Carbon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Body_GEO_5.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Body_GEO_6.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Body_GEO_7.geometry}
          material={materials.Rims}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Body_GEO_8.geometry}
          material={materials.Indicator}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JDM_Interior.geometry}
          material={materials.Interiror}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GearStick.geometry}
            material={materials.Interiror}
            position={[0, 0.507, 0.327]}
            rotation={[0, -0.095, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SteeringWheel.geometry}
            material={materials.Interiror}
            position={[-0.396, 0.922, 0.318]}
            rotation={[-1.206, 0, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plate.geometry}
          material={materials.Plate}
          position={[-0.001, 0.621, -2.429]}
        />
      </group>
    </group> */}
    <group {...props} dispose={null}  scale={[2, 2, 4]} rotation={[Math.PI/2, 0, Math.PI / 2]}>
      <group position={[0, 0.136, 0.308]} rotation={[Math.PI, 0, 0]}>
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
            geometry={nodes.Object_11001.geometry}
            material={materials['Material.001']}
            position={[20450.406, 4897.384, 4499.756]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11002.geometry}
            material={materials['Material.001']}
            position={[-7007.288, -1976.315, 3831.46]}
            rotation={[0, 0, 1.655]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11004.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11007.geometry}
            material={materials['Material.001']}
            position={[-20148.779, 0, 0]}
            rotation={[0, -0.002, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11008.geometry}
            material={materials['Material.001']}
            position={[-423.652, -4199.543, 7118.92]}
            rotation={[0, 0, 2.784]}
            scale={0.643}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11009.geometry}
            material={materials['Material.001']}
            position={[15788.576, -1441.037, 2614.543]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11010.geometry}
            material={materials['Material.001']}
            position={[15515.364, 3773.048, 4934.636]}
            rotation={[0, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11011.geometry}
            material={materials['Material.001']}
            position={[14827.472, -1939.864, 6254.369]}
            rotation={[0, 0, -0.119]}
            scale={2.897}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11012.geometry}
            material={materials['Material.001']}
            position={[23408.879, 5457.384, 4354.588]}
            rotation={[0, 0, -2.896]}
            scale={[1.29, 1.021, 2.182]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11013.geometry}
            material={materials['Material.001']}
            position={[23408.879, 5457.383, 6970.932]}
            rotation={[0, 0, -2.896]}
            scale={[1.29, 1.021, 2.182]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11014.geometry}
            material={materials['Material.001']}
            position={[-7007.288, -1976.316, 6323.497]}
            rotation={[0, 0, 1.655]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11015.geometry}
            material={materials['Material.001']}
            position={[-7007.288, -1976.316, 5026.987]}
            rotation={[0, 0, 1.655]}
            scale={0.718}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11016.geometry}
            material={materials['Material.001']}
            position={[18804.201, 4970.419, 5500.791]}
            rotation={[0, 0, -1.586]}
            scale={[1.29, 1.021, 2.305]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11017.geometry}
            material={materials['Material.001']}
            position={[18804.201, 4970.417, 12908.195]}
            rotation={[0, 0, -1.586]}
            scale={[1.29, 1.021, 2.305]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11018.geometry}
            material={materials['Material.001']}
            position={[-423.652, -4199.542, 4395.458]}
            rotation={[0, 0, 2.784]}
            scale={0.643}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11019.geometry}
            material={materials['Material.001']}
            position={[-423.652, -4199.544, 10231.396]}
            rotation={[0, 0, 2.784]}
            scale={0.643}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11020.geometry}
            material={materials['Material.001']}
            position={[-423.652, -4199.543, 8664.948]}
            rotation={[0, 0, 2.784]}
            scale={0.643}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11021.geometry}
            material={materials['Material.001']}
            position={[-8362.127, 2084.71, 6323.498]}
            rotation={[0, 0, -0.316]}
            scale={1.621}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11022.geometry}
            material={materials['Material.001']}
            position={[-8362.127, 2084.712, 1003.75]}
            rotation={[0, 0, -0.316]}
            scale={1.621}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11023.geometry}
            material={materials['Material.001']}
            position={[18804.201, 4970.418, 9153.967]}
            rotation={[0, 0, -1.586]}
            scale={[1.29, 1.021, 2.305]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11024.geometry}
            material={materials['Material.001']}
            position={[22305.535, -1253.971, 2863.308]}
            rotation={[0, 0, -0.201]}
            scale={[0.632, 0.992, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11025.geometry}
            material={materials['Material.001']}
            position={[22305.535, -1253.971, 4279.289]}
            rotation={[0, 0, -0.201]}
            scale={[0.632, 0.992, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11026.geometry}
            material={materials['Material.001']}
            position={[-7719.906, -1461.478, 6323.497]}
            rotation={[0, 0, 2.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11027.geometry}
            material={materials['Material.001']}
            position={[-7719.906, -1461.477, 3597.247]}
            rotation={[0, 0, 2.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11028.geometry}
            material={materials['Material.001']}
            position={[-10197.874, -1461.478, 4559.259]}
            rotation={[0, 0, 2.865]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11029.geometry}
            material={materials['Material.001']}
            position={[-17395.922, -1461.478, 4559.259]}
            rotation={[0, 0, 2.781]}
            scale={1.646}
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
            geometry={nodes.Object_98002.geometry}
            material={materials['Material.001']}
            position={[-331.258, 1757.439, 4371.71]}
            rotation={[0, 0, 1.454]}
            scale={2.424}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98003.geometry}
            material={materials['Material.001']}
            position={[21271.852, 4840.707, 2478.09]}
            rotation={[0, 0, 1.7]}
            scale={1.293}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98004.geometry}
            material={materials['Material.001']}
            position={[25387.395, -2359.38, 9911.609]}
            scale={[1, 1, 2.571]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98005.geometry}
            material={materials['Material.001']}
            position={[25387.395, -2359.379, 6821.752]}
            scale={[1, 1, 2.571]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98006.geometry}
            material={materials['Material.001']}
            position={[25387.395, -2359.378, 3714.916]}
            scale={[1, 1, 2.571]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98007.geometry}
            material={materials['Material.001']}
            position={[26084.018, -1691.66, 1326.912]}
            scale={[1, 1, 1.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98008.geometry}
            material={materials['Material.001']}
            position={[2541.395, 3453.441, 4371.709]}
            rotation={[0, 0, 3.025]}
            scale={1.804}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98009.geometry}
            material={materials['Material.001']}
            position={[7597.885, 5419.247, 10340.923]}
            rotation={[0, 0, -1.688]}
            scale={[1.804, 1.804, 5.113]}
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials['Dark iron']}
        position={[12.537, 1.935, -0.455]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.bridgeUV}
        position={[9.609, 3.666, -0.464]}
        rotation={[-Math.PI, 0.15, -Math.PI]}
        scale={[0.237, 0.16, 0.237]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve062.geometry}
        material={materials['Mystical mesh']}
        position={[8.899, 3.666, 1.167]}
        rotation={[-3.081, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials['Braided metal']}
        position={[5.581, 1.088, -0.214]}
        scale={[0.14, 0.236, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.bridgeUV}
        position={[-0.454, 3.666, 0.33]}
        rotation={[Math.PI, -0.339, Math.PI]}
        scale={[0.237, 0.16, 0.237]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.bridgeUV}
        position={[-11.433, 3.666, -0.464]}
        rotation={[-Math.PI, 0.299, -Math.PI]}
        scale={[0.237, 0.16, 0.237]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.bridgeUV}
        position={[-5.253, 3.666, 3.626]}
        rotation={[Math.PI, -0.41, Math.PI]}
        scale={[0.237, 0.16, 0.237]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Dark iron']}
        position={[0.297, 1.935, -0.204]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Dark iron']}
        position={[-9.47, 1.935, -0.204]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve001.geometry}
        material={materials['Mystical mesh']}
        position={[14.591, 3.666, 1.167]}
        rotation={[2.894, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve002.geometry}
        material={materials['Mystical mesh']}
        position={[14.591, 3.666, 1.167]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve003.geometry}
        material={materials['Mystical mesh']}
        position={[9.91, 3.666, 1.167]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve004.geometry}
        material={materials['Mystical mesh']}
        position={[5.55, 2.643, 1.167]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve005.geometry}
        material={materials['Mystical mesh']}
        position={[-0.237, 3.666, 2.694]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve006.geometry}
        material={materials['Mystical mesh']}
        position={[-4.718, 0.848, 1.167]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve007.geometry}
        material={materials['Mystical mesh']}
        position={[-4.718, 3.666, 5.969]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-0.981, -0.815, -0.835]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve008.geometry}
        material={materials['Mystical mesh']}
        position={[-9.58, 3.666, 2.955]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve009.geometry}
        material={materials['Mystical mesh']}
        position={[-0.14, 2.643, 3.662]}
        rotation={[-0.224, 1.5, -2.962]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve010.geometry}
        material={materials['Mystical mesh']}
        position={[-6.678, 0.848, 1.167]}
        rotation={[-3.113, 0.731, 0.018]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.hologram}
        position={[12.531, 2.332, -0.663]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.041, 0.494, 0.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.hologram}
        position={[1.257, 0.315, 0.877]}
        rotation={[Math.PI / 2, 0, -2.014]}
        scale={[0.431, 0.204, 0.204]}
      />
      <group position={[1.298, -0.289, -0.499]} rotation={[-Math.PI, -1.518, 0]} scale={0.095}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-8.487, -0.013, 13.654]} rotation={[0, 0.443, 0]} scale={0.452}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.RingMat}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.hologram}
        position={[15.336, 3.575, -4.201]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.041, 0.494, 0.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.hologram}
        position={[-0.157, 2.631, 2.307]}
        rotation={[Math.PI / 2, 0, -2.969]}
        scale={[1.041, 0.494, 0.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.hologram}
        position={[-4.135, 2.291, 0.923]}
        rotation={[Math.PI / 2, 0, -1.905]}
        scale={[0.635, 0.301, 0.301]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.hologram}
        position={[-4.499, -0.432, -3.843]}
        rotation={[0, -0.065, 0]}
        scale={[1.013, 0.48, 0.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.hologram}
        position={[1.674, 2.663, -2.046]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.657, 0.311, 0.311]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_globe_glowing_hologram.geometry}
        material={materials['Earth Surface.002']}
        position={[7.979, 0.009, -1.155]}
        rotation={[Math.PI, -0.888, Math.PI]}
        scale={0.733}
      />
    </group>
    </e.group>
  )
}

useGLTF.preload('/models/citypakka.glb')