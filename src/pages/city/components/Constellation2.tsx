
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
    Cube001_1: THREE.Mesh
    Cube001_2: THREE.Mesh
    Cube001_3: THREE.Mesh
    Cube049: THREE.Mesh
    Cube049_1: THREE.Mesh
    Cube049_2: THREE.Mesh
    Cube049_3: THREE.Mesh
    Cube092: THREE.Mesh
    Cube092_1: THREE.Mesh
    Cube092_2: THREE.Mesh
    Cube092_3: THREE.Mesh
    Cube092_4: THREE.Mesh
    Cube092_5: THREE.Mesh
    Cube003_1: THREE.Mesh
    Cube003_2: THREE.Mesh
    Cube003_3: THREE.Mesh
    Cube003_4: THREE.Mesh
    Cube003_5: THREE.Mesh
    Cube022_1: THREE.Mesh
    Cube022_2: THREE.Mesh
    Cube022_3: THREE.Mesh
    utility_box_01_box_low: THREE.Mesh
    Cube056: THREE.Mesh
    Cube056_1: THREE.Mesh
    Cube056_2: THREE.Mesh
    Cube056_3: THREE.Mesh
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
    Cube004_4: THREE.Mesh
    Cube008_1: THREE.Mesh
    Cube008_2: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube009_2: THREE.Mesh
    Cube010_1: THREE.Mesh
    Cube010_2: THREE.Mesh
    Cube010_3: THREE.Mesh
    BézierCurve019: THREE.Mesh
    Cube002: THREE.Mesh
    Cube005: THREE.Mesh
    Cube014: THREE.Mesh
    Cube076: THREE.Mesh
    Cube077: THREE.Mesh
    Cube093: THREE.Mesh
    Cube017: THREE.Mesh
    BézierCurve062: THREE.Mesh
    BézierCurve065: THREE.Mesh
    BézierCurve070: THREE.Mesh
    BézierCurve072: THREE.Mesh
    BézierCurve073: THREE.Mesh
    BézierCurve074: THREE.Mesh
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
    Cube001: THREE.Mesh
    Cube003: THREE.Mesh
    Plane004: THREE.Mesh
    utility_box_01_box_low004: THREE.Mesh
    utility_box_01_box_low005: THREE.Mesh
    Cube004: THREE.Mesh
    Cube006: THREE.Mesh
    Cube012: THREE.Mesh
    Cube013: THREE.Mesh
    Cube015: THREE.Mesh
    Cube016: THREE.Mesh
    Cube020: THREE.Mesh
    Cube021: THREE.Mesh
    Cube022: THREE.Mesh
    Cube023: THREE.Mesh
    Cube024: THREE.Mesh
    Cube025: THREE.Mesh
    Cube026: THREE.Mesh
    Cube092_6: THREE.Mesh
    Cube092_7: THREE.Mesh
    Cube092_8: THREE.Mesh
    Cube092_9: THREE.Mesh
    Cube092_10: THREE.Mesh
    Cube092_11: THREE.Mesh
    Cube003_6: THREE.Mesh
    Cube003_7: THREE.Mesh
    Cube003_8: THREE.Mesh
    Cube003_9: THREE.Mesh
    Cube003_10: THREE.Mesh
    Cube008: THREE.Mesh
    Cube027: THREE.Mesh
    Cube028: THREE.Mesh
    Cube029: THREE.Mesh
    Cube030: THREE.Mesh
    BézierCurve001: THREE.Mesh
    BézierCurve002: THREE.Mesh
    Cube031: THREE.Mesh
    BézierCurve003: THREE.Mesh
    BézierCurve004: THREE.Mesh
    BézierCurve005: THREE.Mesh
    BézierCurve006: THREE.Mesh
    BézierCurve007: THREE.Mesh
    Cube032: THREE.Mesh
    Cube033: THREE.Mesh
    Cube034: THREE.Mesh
    Cube035: THREE.Mesh
    Cube036: THREE.Mesh
    Cube037: THREE.Mesh
    Cube038: THREE.Mesh
    Cube039: THREE.Mesh
    Cube040: THREE.Mesh
    Cube041: THREE.Mesh
    Cube042: THREE.Mesh
    Cube046: THREE.Mesh
    BézierCurve008: THREE.Mesh
    BézierCurve009: THREE.Mesh
    BézierCurve010: THREE.Mesh
    BézierCurve011: THREE.Mesh
    Plane005: THREE.Mesh
    Plane016: THREE.Mesh
    Object_11001: THREE.Mesh
    Object_11002: THREE.Mesh
    Object_11003: THREE.Mesh
    Object_11004: THREE.Mesh
    Object_11006: THREE.Mesh
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
    Plane017: THREE.Mesh
    Plane018: THREE.Mesh
    Plane019: THREE.Mesh
    Plane020: THREE.Mesh
    Plane021: THREE.Mesh
    Plane022: THREE.Mesh
    Mesh006: THREE.Mesh
    Mesh006_1: THREE.Mesh
    Plane091: THREE.Mesh
    Plane091_1: THREE.Mesh
    Plane091_2: THREE.Mesh
    Plane091_3: THREE.Mesh
    Plane091_4: THREE.Mesh
    Text001: THREE.Mesh
    Text002: THREE.Mesh
    Text003: THREE.Mesh
    Text004: THREE.Mesh
    Plane091_5: THREE.Mesh
    Plane091_6: THREE.Mesh
    Plane091_7: THREE.Mesh
    Plane091_8: THREE.Mesh
    Plane091_9: THREE.Mesh
    Plane091_10: THREE.Mesh
    Plane091_11: THREE.Mesh
    Plane091_12: THREE.Mesh
    Plane091_13: THREE.Mesh
    Plane091_14: THREE.Mesh
    Plane091_15: THREE.Mesh
    Plane091_16: THREE.Mesh
    Plane091_17: THREE.Mesh
    Plane091_18: THREE.Mesh
    Plane091_19: THREE.Mesh
    Plane091_20: THREE.Mesh
    Plane091_21: THREE.Mesh
    Plane091_22: THREE.Mesh
    Plane091_23: THREE.Mesh
    Plane091_24: THREE.Mesh
    Plane091_25: THREE.Mesh
    Plane091_26: THREE.Mesh
    Plane091_27: THREE.Mesh
    Plane091_28: THREE.Mesh
    Plane091_29: THREE.Mesh
    Plane091_30: THREE.Mesh
    Plane091_31: THREE.Mesh
    Plane091_32: THREE.Mesh
    Plane091_33: THREE.Mesh
    Plane091_34: THREE.Mesh
    Plane091_35: THREE.Mesh
    Plane091_36: THREE.Mesh
    Plane091_37: THREE.Mesh
    Plane091_38: THREE.Mesh
    Plane091_39: THREE.Mesh
    Plane091_40: THREE.Mesh
    Plane091_41: THREE.Mesh
    Plane091_42: THREE.Mesh
    Plane091_43: THREE.Mesh
    Plane091_44: THREE.Mesh
    Plane091_45: THREE.Mesh
    Plane091_46: THREE.Mesh
    Plane091_47: THREE.Mesh
    Plane091_48: THREE.Mesh
    Plane091_49: THREE.Mesh
    Plane091_50: THREE.Mesh
    Plane091_51: THREE.Mesh
    Plane091_52: THREE.Mesh
    Plane091_53: THREE.Mesh
    Plane091_54: THREE.Mesh
    Plane091_55: THREE.Mesh
    Plane091_56: THREE.Mesh
    Plane091_57: THREE.Mesh
    Plane091_58: THREE.Mesh
    Plane091_59: THREE.Mesh
    Plane091_60: THREE.Mesh
    Plane091_61: THREE.Mesh
    Plane091_62: THREE.Mesh
    Plane091_63: THREE.Mesh
    Plane091_64: THREE.Mesh
    Plane091_65: THREE.Mesh
    Plane091_66: THREE.Mesh
    Plane091_67: THREE.Mesh
    Plane091_68: THREE.Mesh
    Plane091_69: THREE.Mesh
    Plane006_1: THREE.Mesh
    Plane006_2: THREE.Mesh
    Plane007_1: THREE.Mesh
    Plane007_2: THREE.Mesh
    Plane008_1: THREE.Mesh
    Plane008_2: THREE.Mesh
    JDM_Body_GEO: THREE.Mesh
    JDM_Body_GEO_1: THREE.Mesh
    JDM_Body_GEO_2: THREE.Mesh
    JDM_Body_GEO_3: THREE.Mesh
    JDM_Body_GEO_4: THREE.Mesh
    JDM_Body_GEO_5: THREE.Mesh
    JDM_Body_GEO_6: THREE.Mesh
    JDM_Body_GEO_7: THREE.Mesh
    JDM_Body_GEO_8: THREE.Mesh
    JDM_Interior: THREE.Mesh
    GearStick: THREE.Mesh
    SteeringWheel: THREE.Mesh
    Plate: THREE.Mesh
    JDM_Body_GEO_9: THREE.Mesh
    JDM_Body_GEO_10: THREE.Mesh
    JDM_Body_GEO_11: THREE.Mesh
    JDM_Body_GEO_12: THREE.Mesh
    JDM_Body_GEO_13: THREE.Mesh
    JDM_Body_GEO_14: THREE.Mesh
    JDM_Body_GEO_15: THREE.Mesh
    JDM_Body_GEO_16: THREE.Mesh
    JDM_Body_GEO_17: THREE.Mesh
    JDM_Body_GEO_18: THREE.Mesh
    JDM_Body_GEO_19: THREE.Mesh
    JDM_Body_GEO_20: THREE.Mesh
    JDM_Body_GEO_21: THREE.Mesh
    JDM_Body_GEO_22: THREE.Mesh
    JDM_Body_GEO_23: THREE.Mesh
    JDM_Body_GEO_24: THREE.Mesh
    JDM_Body_GEO_25: THREE.Mesh
    JDM_Body_GEO_26: THREE.Mesh
    JDM_Body_GEO_27: THREE.Mesh
    JDM_Body_GEO_28: THREE.Mesh
    JDM_Body_GEO_29: THREE.Mesh
    JDM_Body_GEO_30: THREE.Mesh
    JDM_Body_GEO_31: THREE.Mesh
    JDM_Body_GEO_32: THREE.Mesh
    JDM_Body_GEO_33: THREE.Mesh
    JDM_Body_GEO_34: THREE.Mesh
    JDM_Body_GEO_35: THREE.Mesh
    JDM_Body_GEO_36: THREE.Mesh
    JDM_Body_GEO_37: THREE.Mesh
    JDM_Body_GEO_38: THREE.Mesh
    JDM_Body_GEO_39: THREE.Mesh
    JDM_Body_GEO_40: THREE.Mesh
    JDM_Body_GEO_41: THREE.Mesh
    JDM_Body_GEO_42: THREE.Mesh
    JDM_Body_GEO_43: THREE.Mesh
    JDM_Body_GEO_44: THREE.Mesh
    JDM_Body_GEO_45: THREE.Mesh
    JDM_Body_GEO_46: THREE.Mesh
    JDM_Body_GEO_47: THREE.Mesh
    JDM_Body_GEO_48: THREE.Mesh
    JDM_Body_GEO_49: THREE.Mesh
    JDM_Body_GEO_50: THREE.Mesh
    JDM_Body_GEO_51: THREE.Mesh
    JDM_Body_GEO_52: THREE.Mesh
    JDM_Body_GEO_53: THREE.Mesh
    JDM_Body_GEO_54: THREE.Mesh
    JDM_Body_GEO_55: THREE.Mesh
    JDM_Body_GEO_56: THREE.Mesh
    JDM_Body_GEO_57: THREE.Mesh
    JDM_Body_GEO_58: THREE.Mesh
    JDM_Body_GEO_59: THREE.Mesh
    JDM_Body_GEO_60: THREE.Mesh
    JDM_Body_GEO_61: THREE.Mesh
    JDM_Body_GEO_62: THREE.Mesh
    JDM_Body_GEO_63: THREE.Mesh
    JDM_Body_GEO_64: THREE.Mesh
    JDM_Body_GEO_65: THREE.Mesh
    JDM_Body_GEO_66: THREE.Mesh
    JDM_Body_GEO_67: THREE.Mesh
    JDM_Body_GEO_68: THREE.Mesh
    JDM_Body_GEO_69: THREE.Mesh
    JDM_Body_GEO_70: THREE.Mesh
    JDM_Body_GEO_71: THREE.Mesh
    JDM_Body_GEO_72: THREE.Mesh
    JDM_Body_GEO_73: THREE.Mesh
    JDM_Body_GEO_74: THREE.Mesh
    JDM_Body_GEO_75: THREE.Mesh
    JDM_Body_GEO_76: THREE.Mesh
    JDM_Body_GEO_77: THREE.Mesh
    JDM_Body_GEO_78: THREE.Mesh
    JDM_Body_GEO_79: THREE.Mesh
    JDM_Body_GEO_80: THREE.Mesh
    JDM_Body_GEO_81: THREE.Mesh
    JDM_Body_GEO_82: THREE.Mesh
    JDM_Body_GEO_83: THREE.Mesh
    JDM_Body_GEO_84: THREE.Mesh
    JDM_Body_GEO_85: THREE.Mesh
    JDM_Body_GEO_86: THREE.Mesh
    JDM_Body_GEO_87: THREE.Mesh
    JDM_Body_GEO_88: THREE.Mesh
    JDM_Body_GEO_89: THREE.Mesh
    JDM_Body_GEO_90: THREE.Mesh
    JDM_Body_GEO_91: THREE.Mesh
    JDM_Body_GEO_92: THREE.Mesh
    JDM_Body_GEO_93: THREE.Mesh
    JDM_Body_GEO_94: THREE.Mesh
    JDM_Body_GEO_95: THREE.Mesh
    JDM_Body_GEO_96: THREE.Mesh
    JDM_Body_GEO_97: THREE.Mesh
    JDM_Body_GEO_98: THREE.Mesh
    JDM_Body_GEO_99: THREE.Mesh
    JDM_Body_GEO_100: THREE.Mesh
    JDM_Body_GEO_101: THREE.Mesh
    JDM_Body_GEO_102: THREE.Mesh
    JDM_Body_GEO_103: THREE.Mesh
    JDM_Body_GEO_104: THREE.Mesh
    JDM_Body_GEO_105: THREE.Mesh
    JDM_Body_GEO_106: THREE.Mesh
    JDM_Body_GEO_107: THREE.Mesh
    JDM_Body_GEO_108: THREE.Mesh
    JDM_Body_GEO_109: THREE.Mesh
    JDM_Body_GEO_110: THREE.Mesh
    JDM_Body_GEO_111: THREE.Mesh
    JDM_Body_GEO_112: THREE.Mesh
    JDM_Body_GEO_113: THREE.Mesh
    JDM_Body_GEO_114: THREE.Mesh
    JDM_Body_GEO_115: THREE.Mesh
    JDM_Body_GEO_116: THREE.Mesh
    JDM_Body_GEO_117: THREE.Mesh
    JDM_Body_GEO_118: THREE.Mesh
    JDM_Body_GEO_119: THREE.Mesh
    JDM_Body_GEO_120: THREE.Mesh
    JDM_Body_GEO_121: THREE.Mesh
    JDM_Body_GEO_122: THREE.Mesh
    JDM_Body_GEO_123: THREE.Mesh
    JDM_Body_GEO_124: THREE.Mesh
    JDM_Body_GEO_125: THREE.Mesh
    JDM_Body_GEO_126: THREE.Mesh
    JDM_Body_GEO_127: THREE.Mesh
    JDM_Body_GEO_128: THREE.Mesh
    JDM_Body_GEO_129: THREE.Mesh
    JDM_Body_GEO_130: THREE.Mesh
    JDM_Body_GEO_131: THREE.Mesh
    JDM_Body_GEO_132: THREE.Mesh
    JDM_Body_GEO_133: THREE.Mesh
    JDM_Body_GEO_134: THREE.Mesh
    JDM_Body_GEO_135: THREE.Mesh
    JDM_Body_GEO_136: THREE.Mesh
    JDM_Body_GEO_137: THREE.Mesh
    JDM_Body_GEO_138: THREE.Mesh
    JDM_Body_GEO_139: THREE.Mesh
    JDM_Body_GEO_140: THREE.Mesh
    JDM_Body_GEO_141: THREE.Mesh
    JDM_Body_GEO_142: THREE.Mesh
    JDM_Body_GEO_143: THREE.Mesh
    JDM_Body_GEO_144: THREE.Mesh
    JDM_Body_GEO_145: THREE.Mesh
    JDM_Body_GEO_146: THREE.Mesh
    JDM_Body_GEO_147: THREE.Mesh
    JDM_Body_GEO_148: THREE.Mesh
    JDM_Body_GEO_149: THREE.Mesh
    JDM_Body_GEO_150: THREE.Mesh
    JDM_Body_GEO_151: THREE.Mesh
    JDM_Body_GEO_152: THREE.Mesh
    JDM_Body_GEO_153: THREE.Mesh
    JDM_Body_GEO_154: THREE.Mesh
    JDM_Body_GEO_155: THREE.Mesh
    JDM_Body_GEO_156: THREE.Mesh
    JDM_Body_GEO_157: THREE.Mesh
    JDM_Body_GEO_158: THREE.Mesh
    JDM_Body_GEO_159: THREE.Mesh
    JDM_Body_GEO_160: THREE.Mesh
    JDM_Body_GEO_161: THREE.Mesh
    JDM_Body_GEO_162: THREE.Mesh
    JDM_Body_GEO_163: THREE.Mesh
    JDM_Body_GEO_164: THREE.Mesh
    JDM_Body_GEO_165: THREE.Mesh
    JDM_Body_GEO_166: THREE.Mesh
    JDM_Body_GEO_167: THREE.Mesh
    JDM_Body_GEO_168: THREE.Mesh
    JDM_Body_GEO_169: THREE.Mesh
    JDM_Body_GEO_170: THREE.Mesh
    JDM_Body_GEO_171: THREE.Mesh
    JDM_Body_GEO_172: THREE.Mesh
    JDM_Body_GEO_173: THREE.Mesh
    JDM_Body_GEO_174: THREE.Mesh
    JDM_Body_GEO_175: THREE.Mesh
    JDM_Body_GEO_176: THREE.Mesh
    JDM_Body_GEO_177: THREE.Mesh
    JDM_Body_GEO_178: THREE.Mesh
    JDM_Body_GEO_179: THREE.Mesh
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
    utility_box_01: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    Store: THREE.MeshStandardMaterial
    ['Store Glass']: THREE.MeshPhysicalMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Neon  signs']: THREE.MeshStandardMaterial
    ['Dark Metal.003']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Store Emission']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Store.001']: THREE.MeshStandardMaterial
    ['Store Glass.001']: THREE.MeshPhysicalMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Neon  signs.001']: THREE.MeshStandardMaterial
    ['Dark Metal.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Store Emission.001']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['traffic cone']: THREE.MeshStandardMaterial
    bridgeUV: THREE.MeshStandardMaterial
    ['Steel lattice 02']: THREE.MeshStandardMaterial
    rusty_metal_02: THREE.MeshStandardMaterial
    ['Rusty Worn Metal']: THREE.MeshStandardMaterial
    banners: THREE.MeshStandardMaterial
    ['Material.043']: THREE.MeshStandardMaterial
    Light_Road_mat: THREE.MeshStandardMaterial
    Emissive: THREE.MeshStandardMaterial
    ['Galvanized steel']: THREE.MeshStandardMaterial
    ['Reflective.Black']: THREE.MeshStandardMaterial
    ['Reflective.White']: THREE.MeshStandardMaterial
    ['Rough white metal']: THREE.MeshStandardMaterial
    ['Panneau.Rouge']: THREE.MeshStandardMaterial
    ['Reflective.Black']: THREE.MeshStandardMaterial
    ['Old traffic cone']: THREE.MeshStandardMaterial
    ['OLD traffic cone base']: THREE.MeshStandardMaterial
    ['Old traffic cone. 02']: THREE.MeshStandardMaterial
    ['OLD traffic cone base.02']: THREE.MeshStandardMaterial
    ['traffic cone base']: THREE.MeshStandardMaterial
    TailLight: THREE.MeshStandardMaterial
    Paint: THREE.MeshPhysicalMaterial
    Mirrors: THREE.MeshStandardMaterial
    Lamp: THREE.MeshStandardMaterial
    Carbon: THREE.MeshPhysicalMaterial
    Glass: THREE.MeshPhysicalMaterial
    Tire: THREE.MeshPhysicalMaterial
    Rims: THREE.MeshStandardMaterial
    Indicator: THREE.MeshStandardMaterial
    Interiror: THREE.MeshStandardMaterial
    Plate: THREE.MeshStandardMaterial
  }
}

export default function Constellation2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/citypakka.glb') as unknown as  GLTFResult
  return (
    <e.group theatreKey="Constellation2" >
     <group {...props} dispose={null} rotation={[0, Math.PI, 0]} scale={[0.7, 0.7, 0.7]}>
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
    </group>
    </e.group>
  )
}

useGLTF.preload('/models/citypakka.glb')