
import * as THREE from 'three'
import { type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { editable as e } from "@theatre/r3f";

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
    Object_11001: THREE.Mesh
    Object_11002: THREE.Mesh
    Object_11004: THREE.Mesh
    Object_11007: THREE.Mesh
    Object_11008: THREE.Mesh
    Object_11009: THREE.Mesh
    Object_11010: THREE.Mesh
    Object_11011: THREE.Mesh
    Object_98002: THREE.Mesh
    Object_98004: THREE.Mesh
    Object_98005: THREE.Mesh
    Object_98006: THREE.Mesh
    Object_98007: THREE.Mesh
    Object_11012: THREE.Mesh
    Object_11013: THREE.Mesh
    Object_98003: THREE.Mesh
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
    Object_98008: THREE.Mesh
    Object_98009: THREE.Mesh
    Object_11026: THREE.Mesh
    Object_11027: THREE.Mesh
    Object_11028: THREE.Mesh
    Object_11029: THREE.Mesh
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
    Plane007: THREE.Mesh
    Plane008: THREE.Mesh
    Plane009: THREE.Mesh
    Plane010: THREE.Mesh
    Plane011: THREE.Mesh
    Plane012: THREE.Mesh
    Plane013: THREE.Mesh
    Plane014: THREE.Mesh
    Plane015: THREE.Mesh
    Plane016: THREE.Mesh
    Plane017: THREE.Mesh
    Plane018: THREE.Mesh
    Plane019: THREE.Mesh
    Plane020: THREE.Mesh
    Plane021: THREE.Mesh
    Plane022: THREE.Mesh
    Plane023: THREE.Mesh
    Plane024: THREE.Mesh
    Plane025: THREE.Mesh
    Plane026: THREE.Mesh
    Plane027: THREE.Mesh
    Plane028: THREE.Mesh
    Plane029: THREE.Mesh
    Plane030: THREE.Mesh
    Plane031: THREE.Mesh
    Plane032: THREE.Mesh
    Plane033: THREE.Mesh
    Plane034: THREE.Mesh
    Plane035: THREE.Mesh
    Plane036: THREE.Mesh
    Plane037: THREE.Mesh
    Plane038: THREE.Mesh
    Plane039: THREE.Mesh
    Plane040: THREE.Mesh
    Plane041: THREE.Mesh
    Plane042: THREE.Mesh
    Plane043: THREE.Mesh
    Plane044: THREE.Mesh
    Plane045: THREE.Mesh
    Plane046: THREE.Mesh
    Plane047: THREE.Mesh
    Plane048: THREE.Mesh
    Plane049: THREE.Mesh
    Plane050: THREE.Mesh
    Plane051: THREE.Mesh
    Plane052: THREE.Mesh
    Object_44001: THREE.Mesh
    Object_44002: THREE.Mesh
    Object_41001: THREE.Mesh
    Object_41002: THREE.Mesh
    Object_41003: THREE.Mesh
    Object_41004: THREE.Mesh
    Object_41005: THREE.Mesh
    Object_47001: THREE.Mesh
    Object_47002: THREE.Mesh
    Object_47003: THREE.Mesh
    Plane053: THREE.Mesh
    Plane054: THREE.Mesh
    Plane055: THREE.Mesh
    Plane056: THREE.Mesh
    Plane057: THREE.Mesh
    Plane058: THREE.Mesh
    Plane059: THREE.Mesh
    Plane060: THREE.Mesh
    Plane061: THREE.Mesh
    Plane062: THREE.Mesh
    Plane063: THREE.Mesh
    Plane064: THREE.Mesh
    Plane065: THREE.Mesh
    Plane066: THREE.Mesh
    Plane067: THREE.Mesh
    Plane068: THREE.Mesh
    Plane069: THREE.Mesh
    Plane070: THREE.Mesh
    Plane071: THREE.Mesh
    Plane072: THREE.Mesh
    Plane073: THREE.Mesh
    Plane074: THREE.Mesh
    Plane075: THREE.Mesh
    Plane076: THREE.Mesh
    Plane077: THREE.Mesh
    Plane078: THREE.Mesh
    Plane079: THREE.Mesh
    Plane080: THREE.Mesh
    Plane081: THREE.Mesh
    Plane082: THREE.Mesh
    Plane083: THREE.Mesh
    Plane084: THREE.Mesh
    Plane085: THREE.Mesh
    Plane086: THREE.Mesh
    Plane087: THREE.Mesh
    Plane088: THREE.Mesh
    Plane089: THREE.Mesh
    Plane090: THREE.Mesh
    Plane091: THREE.Mesh
    Plane092: THREE.Mesh
    Plane093: THREE.Mesh
    Plane094: THREE.Mesh
    Plane095: THREE.Mesh
    Plane096: THREE.Mesh
    Plane097: THREE.Mesh
    Plane098: THREE.Mesh
    Plane099: THREE.Mesh
    Plane100: THREE.Mesh
    Plane101: THREE.Mesh
    Plane102: THREE.Mesh
    Plane103: THREE.Mesh
    Plane104: THREE.Mesh
    Plane105: THREE.Mesh
    Plane106: THREE.Mesh
    Plane107: THREE.Mesh
    Plane108: THREE.Mesh
    Plane109: THREE.Mesh
    Plane110: THREE.Mesh
    Plane111: THREE.Mesh
    Plane112: THREE.Mesh
    Plane113: THREE.Mesh
    Plane114: THREE.Mesh
    Plane115: THREE.Mesh
    Plane116: THREE.Mesh
    Plane117: THREE.Mesh
    Plane118: THREE.Mesh
    Plane119: THREE.Mesh
    Plane120: THREE.Mesh
    Plane121: THREE.Mesh
    Plane122: THREE.Mesh
    Plane123: THREE.Mesh
    Plane124: THREE.Mesh
    Plane125: THREE.Mesh
    Plane126: THREE.Mesh
    Plane127: THREE.Mesh
    Plane128: THREE.Mesh
    Plane129: THREE.Mesh
    Plane130: THREE.Mesh
    Plane131: THREE.Mesh
    Plane132: THREE.Mesh
    Plane133: THREE.Mesh
    Plane134: THREE.Mesh
    Plane135: THREE.Mesh
    Plane136: THREE.Mesh
    Plane137: THREE.Mesh
    Plane138: THREE.Mesh
    Plane139: THREE.Mesh
    Plane140: THREE.Mesh
    Plane141: THREE.Mesh
    Plane142: THREE.Mesh
    Plane143: THREE.Mesh
    Plane144: THREE.Mesh
    Plane145: THREE.Mesh
    Plane146: THREE.Mesh
    Plane147: THREE.Mesh
    Plane148: THREE.Mesh
    Plane149: THREE.Mesh
    Plane150: THREE.Mesh
    Plane151: THREE.Mesh
    Plane152: THREE.Mesh
    Plane153: THREE.Mesh
    Plane154: THREE.Mesh
    Plane155: THREE.Mesh
    Plane156: THREE.Mesh
    Plane157: THREE.Mesh
    Plane158: THREE.Mesh
    Plane159: THREE.Mesh
    Plane160: THREE.Mesh
    Plane161: THREE.Mesh
    Plane162: THREE.Mesh
    Plane163: THREE.Mesh
    Plane164: THREE.Mesh
    Plane165: THREE.Mesh
    Plane166: THREE.Mesh
    Plane167: THREE.Mesh
    Plane168: THREE.Mesh
    Plane169: THREE.Mesh
    Plane170: THREE.Mesh
    Plane171: THREE.Mesh
    Plane172: THREE.Mesh
    Plane173: THREE.Mesh
    Plane174: THREE.Mesh
    Plane175: THREE.Mesh
    Plane176: THREE.Mesh
    Plane177: THREE.Mesh
    Plane178: THREE.Mesh
    Plane179: THREE.Mesh
    Plane180: THREE.Mesh
    Plane181: THREE.Mesh
    Plane182: THREE.Mesh
    Plane183: THREE.Mesh
    Plane184: THREE.Mesh
    Plane185: THREE.Mesh
    Plane186: THREE.Mesh
    Plane187: THREE.Mesh
    Plane188: THREE.Mesh
    Plane189: THREE.Mesh
    Plane190: THREE.Mesh
    Plane191: THREE.Mesh
    Plane192: THREE.Mesh
    Plane193: THREE.Mesh
    Plane194: THREE.Mesh
    Plane195: THREE.Mesh
    Plane196: THREE.Mesh
    Plane197: THREE.Mesh
    Plane198: THREE.Mesh
    Plane199: THREE.Mesh
    Plane200: THREE.Mesh
    Plane201: THREE.Mesh
    Plane202: THREE.Mesh
    Plane203: THREE.Mesh
    Plane204: THREE.Mesh
    Plane205: THREE.Mesh
    Plane206: THREE.Mesh
    Plane207: THREE.Mesh
    Plane208: THREE.Mesh
    Plane209: THREE.Mesh
    Plane210: THREE.Mesh
    Plane211: THREE.Mesh
    Plane212: THREE.Mesh
    Plane213: THREE.Mesh
    Plane214: THREE.Mesh
    Plane215: THREE.Mesh
    Plane216: THREE.Mesh
    Plane217: THREE.Mesh
    Plane218: THREE.Mesh
    Plane219: THREE.Mesh
    Plane220: THREE.Mesh
    Plane221: THREE.Mesh
    Plane222: THREE.Mesh
    Plane223: THREE.Mesh
    Plane224: THREE.Mesh
    Plane225: THREE.Mesh
    Plane226: THREE.Mesh
    Plane227: THREE.Mesh
    Plane228: THREE.Mesh
    Plane229: THREE.Mesh
    Plane230: THREE.Mesh
    Plane231: THREE.Mesh
    Plane232: THREE.Mesh
    Plane233: THREE.Mesh
    Plane234: THREE.Mesh
    Plane235: THREE.Mesh
    Plane236: THREE.Mesh
    Plane237: THREE.Mesh
    Plane238: THREE.Mesh
    Plane239: THREE.Mesh
    Plane240: THREE.Mesh
    Plane241: THREE.Mesh
    Plane242: THREE.Mesh
    Plane243: THREE.Mesh
    Plane244: THREE.Mesh
    Plane245: THREE.Mesh
    Plane246: THREE.Mesh
    Plane247: THREE.Mesh
    Plane248: THREE.Mesh
    Plane249: THREE.Mesh
    Plane250: THREE.Mesh
    Plane251: THREE.Mesh
    Plane252: THREE.Mesh
    Plane253: THREE.Mesh
    Plane254: THREE.Mesh
    Plane255: THREE.Mesh
    Plane256: THREE.Mesh
    Plane257: THREE.Mesh
    Plane258: THREE.Mesh
    Plane259: THREE.Mesh
    Plane260: THREE.Mesh
    Plane261: THREE.Mesh
    Plane262: THREE.Mesh
    Plane263: THREE.Mesh
    Plane264: THREE.Mesh
    Plane265: THREE.Mesh
    Plane266: THREE.Mesh
    Plane267: THREE.Mesh
    Plane268: THREE.Mesh
    Plane269: THREE.Mesh
    Plane270: THREE.Mesh
    Plane271: THREE.Mesh
    Plane272: THREE.Mesh
    Plane273: THREE.Mesh
    Plane274: THREE.Mesh
    Plane275: THREE.Mesh
    Plane276: THREE.Mesh
    Plane277: THREE.Mesh
    Plane278: THREE.Mesh
    Plane279: THREE.Mesh
    Plane280: THREE.Mesh
    Plane281: THREE.Mesh
    Plane282: THREE.Mesh
    Plane283: THREE.Mesh
    Plane284: THREE.Mesh
    Plane285: THREE.Mesh
    Plane286: THREE.Mesh
    Plane287: THREE.Mesh
    Plane288: THREE.Mesh
    Plane289: THREE.Mesh
    Plane290: THREE.Mesh
    Plane291: THREE.Mesh
    Plane292: THREE.Mesh
    Plane293: THREE.Mesh
    Plane294: THREE.Mesh
    Plane295: THREE.Mesh
    Plane296: THREE.Mesh
    Plane297: THREE.Mesh
    Plane298: THREE.Mesh
    Plane299: THREE.Mesh
    Plane300: THREE.Mesh
    Plane301: THREE.Mesh
    Plane302: THREE.Mesh
    Plane303: THREE.Mesh
    Plane304: THREE.Mesh
    Plane305: THREE.Mesh
    Plane306: THREE.Mesh
    Plane307: THREE.Mesh
    Plane308: THREE.Mesh
    Plane309: THREE.Mesh
    Plane310: THREE.Mesh
    Plane311: THREE.Mesh
    Plane312: THREE.Mesh
    Plane313: THREE.Mesh
    Plane314: THREE.Mesh
    Plane315: THREE.Mesh
    Plane316: THREE.Mesh
    Plane317: THREE.Mesh
    Plane318: THREE.Mesh
    Plane319: THREE.Mesh
    Plane320: THREE.Mesh
    Plane321: THREE.Mesh
    Plane322: THREE.Mesh
    Plane323: THREE.Mesh
    Plane324: THREE.Mesh
    Plane325: THREE.Mesh
    Plane326: THREE.Mesh
    Plane327: THREE.Mesh
    Plane328: THREE.Mesh
    Plane329: THREE.Mesh
    Plane330: THREE.Mesh
    Plane331: THREE.Mesh
    Plane332: THREE.Mesh
    Plane333: THREE.Mesh
    Plane334: THREE.Mesh
    Plane335: THREE.Mesh
    Plane336: THREE.Mesh
    Plane337: THREE.Mesh
    Plane338: THREE.Mesh
    Plane339: THREE.Mesh
    Plane340: THREE.Mesh
    Plane341: THREE.Mesh
    Plane342: THREE.Mesh
    Plane343: THREE.Mesh
    Plane344: THREE.Mesh
    Plane345: THREE.Mesh
    Plane346: THREE.Mesh
    Plane347: THREE.Mesh
    Plane348: THREE.Mesh
    Plane349: THREE.Mesh
    Plane350: THREE.Mesh
    Plane351: THREE.Mesh
    Plane352: THREE.Mesh
    Plane353: THREE.Mesh
    Plane354: THREE.Mesh
    Plane355: THREE.Mesh
    Plane356: THREE.Mesh
    Plane357: THREE.Mesh
    Plane358: THREE.Mesh
    Plane359: THREE.Mesh
    Plane360: THREE.Mesh
    Plane361: THREE.Mesh
    Plane362: THREE.Mesh
    Plane363: THREE.Mesh
    Plane364: THREE.Mesh
    Plane365: THREE.Mesh
    Plane366: THREE.Mesh
    Plane367: THREE.Mesh
    Plane368: THREE.Mesh
    Plane369: THREE.Mesh
    Plane370: THREE.Mesh
    Plane371: THREE.Mesh
    Plane372: THREE.Mesh
    Plane373: THREE.Mesh
    Plane374: THREE.Mesh
    Plane375: THREE.Mesh
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
    ['neon light blue']: THREE.MeshStandardMaterial
    ['neon light red']: THREE.MeshStandardMaterial
    ['Earth Surface.002']: THREE.MeshStandardMaterial
  }
}


export default function Constellation2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/city10feb.glb') as unknown as  GLTFResult
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
    </group> */}
   <group {...props} dispose={null} rotation={[0, Math.PI/2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials['Material.001']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.chrom}
        position={[0, 1.014, -0.568]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.glass_01}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials['Material.006']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['Material.006']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials['Material.001']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.advertising_screens_texture_01}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials.advertising_screens_texture_01}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['Material.003']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_35.geometry}
        material={materials.metal_black}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41.geometry}
        material={materials['Material.009']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.advertising_screens_texture_01}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={materials['Material.009']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials['Material.004']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials.material_0}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_71.geometry}
        material={materials.advertising_screens_texture_01}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_86.geometry}
        material={materials['Material.001']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_89001.geometry}
        material={materials['Material.001']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98001.geometry}
        material={materials['Material.001']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_101.geometry}
        material={materials['Material.008']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_104.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_107.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_113.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_110.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_119.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_125.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_122.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_123.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_131.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_128.geometry}
        material={materials.material_0}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_129.geometry}
        material={materials.material_0}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_134.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_141.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_138.geometry}
        material={materials.metal_gray}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_144.geometry}
        material={materials.metal_black}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_153.geometry}
        material={materials.metal_black}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_156.geometry}
        material={materials.metal_black}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_159.geometry}
        material={materials.metal_black}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_165.geometry}
        material={materials.metal_black}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_168.geometry}
        material={materials.metal_black}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_171.geometry}
        material={materials.metal_black}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_180.geometry}
        material={materials['Material.005']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_186.geometry}
        material={materials['Material.002']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_189.geometry}
        material={materials.white_neon}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11001.geometry}
        material={materials['Material.001']}
        position={[12.318, 3.724, -3.517]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11002.geometry}
        material={materials['Material.001']}
        position={[-4.221, 3.322, 0.623]}
        rotation={[-Math.PI / 2, 0, 1.655]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11004.geometry}
        material={materials['Material.001']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11007.geometry}
        material={materials['Material.001']}
        position={[-12.136, 1.014, -0.568]}
        rotation={[-Math.PI / 2, -0.002, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11008.geometry}
        material={materials['Material.001']}
        position={[-0.255, 5.302, 1.962]}
        rotation={[-Math.PI / 2, 0, 2.784]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11009.geometry}
        material={materials['Material.001']}
        position={[9.51, 2.589, 0.3]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11010.geometry}
        material={materials['Material.001']}
        position={[9.345, 3.986, -2.84]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11011.geometry}
        material={materials['Material.001']}
        position={[8.931, 4.781, 0.601]}
        rotation={[-Math.PI / 2, 0, -0.119]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98002.geometry}
        material={materials['Material.001']}
        position={[-0.2, 3.647, -1.626]}
        rotation={[-Math.PI / 2, 0, 1.454]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98004.geometry}
        material={materials['Material.001']}
        position={[15.292, 6.984, 0.854]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.001, 0.001, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98005.geometry}
        material={materials['Material.001']}
        position={[15.292, 5.123, 0.854]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.001, 0.001, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98006.geometry}
        material={materials['Material.001']}
        position={[15.292, 3.252, 0.854]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.001, 0.001, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98007.geometry}
        material={materials['Material.001']}
        position={[15.711, 1.813, 0.451]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11012.geometry}
        material={materials['Material.001']}
        position={[14.1, 3.637, -3.855]}
        rotation={[-Math.PI / 2, 0, -2.896]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11013.geometry}
        material={materials['Material.001']}
        position={[14.1, 5.213, -3.855]}
        rotation={[-Math.PI / 2, 0, -2.896]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98003.geometry}
        material={materials['Material.001']}
        position={[12.813, 2.507, -3.483]}
        rotation={[-Math.PI / 2, 0, 1.7]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials['Dark iron']}
        position={[12.537, 2.972, -0.838]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.bridgeUV}
        position={[9.609, 4.703, -0.464]}
        rotation={[-Math.PI, 0.15, -Math.PI]}
        scale={[0.237, 0.16, 0.237]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve062.geometry}
        material={materials['Mystical mesh']}
        position={[8.899, 4.703, 1.167]}
        rotation={[-3.081, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials['Braided metal']}
        position={[5.581, 2.262, -0.617]}
        scale={[0.14, 0.236, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.bridgeUV}
        position={[-0.454, 4.703, 0.33]}
        rotation={[Math.PI, -0.339, Math.PI]}
        scale={[0.237, 0.16, 0.237]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.bridgeUV}
        position={[-11.433, 4.703, -0.464]}
        rotation={[-Math.PI, 0.299, -Math.PI]}
        scale={[0.237, 0.16, 0.237]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.bridgeUV}
        position={[-5.253, 4.703, 3.626]}
        rotation={[Math.PI, -0.41, Math.PI]}
        scale={[0.237, 0.16, 0.237]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Dark iron']}
        position={[0.297, 2.972, -0.204]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Dark iron']}
        position={[-9.47, 2.972, -0.204]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve001.geometry}
        material={materials['Mystical mesh']}
        position={[14.591, 4.703, 1.167]}
        rotation={[2.894, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve002.geometry}
        material={materials['Mystical mesh']}
        position={[14.591, 4.703, 1.167]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve003.geometry}
        material={materials['Mystical mesh']}
        position={[9.91, 4.703, 1.167]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve004.geometry}
        material={materials['Mystical mesh']}
        position={[5.55, 3.68, 1.167]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve005.geometry}
        material={materials['Mystical mesh']}
        position={[-0.237, 4.703, 2.694]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve006.geometry}
        material={materials['Mystical mesh']}
        position={[-4.718, 2.182, 0.826]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve007.geometry}
        material={materials['Mystical mesh']}
        position={[-4.718, 4.703, 5.969]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-0.981, -0.815, -0.835]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve008.geometry}
        material={materials['Mystical mesh']}
        position={[-9.58, 4.703, 2.955]}
        rotation={[-3.061, 1.304, -0.041]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve009.geometry}
        material={materials['Mystical mesh']}
        position={[-0.14, 3.68, 3.662]}
        rotation={[-0.224, 1.5, -2.962]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve010.geometry}
        material={materials['Mystical mesh']}
        position={[-6.678, 2.997, 1.167]}
        rotation={[-3.113, 0.731, 0.018]}
        scale={[-1.172, -0.974, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11014.geometry}
        material={materials['Material.001']}
        position={[-4.221, 4.823, 0.623]}
        rotation={[-Math.PI / 2, 0, 1.655]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11015.geometry}
        material={materials['Material.001']}
        position={[-4.221, 4.042, 0.623]}
        rotation={[-Math.PI / 2, 0, 1.655]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11016.geometry}
        material={materials['Material.001']}
        position={[11.326, 4.327, -3.561]}
        rotation={[-Math.PI / 2, 0, -1.586]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11017.geometry}
        material={materials['Material.001']}
        position={[11.326, 8.789, -3.561]}
        rotation={[-Math.PI / 2, 0, -1.586]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11018.geometry}
        material={materials['Material.001']}
        position={[-0.255, 3.662, 1.962]}
        rotation={[-Math.PI / 2, 0, 2.784]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11019.geometry}
        material={materials['Material.001']}
        position={[-0.255, 7.177, 1.962]}
        rotation={[-Math.PI / 2, 0, 2.784]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11020.geometry}
        material={materials['Material.001']}
        position={[-0.255, 6.233, 1.962]}
        rotation={[-Math.PI / 2, 0, 2.784]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11021.geometry}
        material={materials['Material.001']}
        position={[-5.037, 4.823, -1.823]}
        rotation={[-Math.PI / 2, 0, -0.316]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11022.geometry}
        material={materials['Material.001']}
        position={[-5.037, 1.619, -1.823]}
        rotation={[-Math.PI / 2, 0, -0.316]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11023.geometry}
        material={materials['Material.001']}
        position={[11.326, 6.528, -3.561]}
        rotation={[-Math.PI / 2, 0, -1.586]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11024.geometry}
        material={materials['Material.001']}
        position={[13.435, 2.739, 0.188]}
        rotation={[-Math.PI / 2, 0, -0.201]}
        scale={[0, 0.001, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11025.geometry}
        material={materials['Material.001']}
        position={[13.435, 3.592, 0.188]}
        rotation={[-Math.PI / 2, 0, -0.201]}
        scale={[0, 0.001, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98008.geometry}
        material={materials['Material.001']}
        position={[1.531, 3.647, -2.648]}
        rotation={[-Math.PI / 2, 0, 3.025]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98009.geometry}
        material={materials['Material.001']}
        position={[4.576, 7.243, -3.832]}
        rotation={[-Math.PI / 2, 0, -1.688]}
        scale={[0.001, 0.001, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11026.geometry}
        material={materials['Material.001']}
        position={[-4.65, 4.823, 0.313]}
        rotation={[-Math.PI / 2, 0, 2.865]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11027.geometry}
        material={materials['Material.001']}
        position={[-4.65, 3.181, 0.313]}
        rotation={[-Math.PI / 2, 0, 2.865]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11028.geometry}
        material={materials['Material.001']}
        position={[-6.143, 3.76, 0.313]}
        rotation={[-Math.PI / 2, 0, 2.865]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11029.geometry}
        material={materials['Material.001']}
        position={[-10.478, 3.76, 0.313]}
        rotation={[-Math.PI / 2, 0, 2.781]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.hologram}
        position={[12.531, 3.369, -1.046]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.041, 0.494, 0.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.hologram}
        position={[1.329, 1.209, 0.336]}
        rotation={[Math.PI / 2, 0, -2.014]}
        scale={[0.431, 0.204, 0.204]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.body}
        position={[0.466, 1.023, 0.146]}
        rotation={[0.025, 0.443, -0.059]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.material}
        position={[0.466, 1.023, 0.146]}
        rotation={[0.025, 0.443, -0.059]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.RingMat}
        position={[0.466, 1.023, 0.146]}
        rotation={[0.025, 0.443, -0.059]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.hologram}
        position={[15.336, 4.612, -4.201]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.041, 0.494, 0.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.hologram}
        position={[-0.157, 3.668, 2.307]}
        rotation={[Math.PI / 2, 0, -2.969]}
        scale={[1.041, 0.494, 0.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.hologram}
        position={[-4.135, 3.328, 0.923]}
        rotation={[Math.PI / 2, 0, -1.905]}
        scale={[0.635, 0.301, 0.301]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.hologram}
        position={[-4.499, 6.202, -1.432]}
        rotation={[Math.PI / 2, -0.065, 0]}
        scale={[1.013, 0.48, 0.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.hologram}
        position={[1.674, 3.7, -2.046]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.657, 0.311, 0.311]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials['neon light blue']}
        position={[13.442, 4.287, 0.115]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials['neon light blue']}
        position={[13.442, 4.513, 0.267]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials['neon light blue']}
        position={[13.442, 4.61, 0.241]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials['neon light blue']}
        position={[13.442, 3.139, 0.148]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials['neon light blue']}
        position={[14.425, 3.375, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials['neon light blue']}
        position={[14.425, 3.534, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials['neon light blue']}
        position={[14.425, 3.705, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials['neon light blue']}
        position={[14.425, 3.879, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials['neon light blue']}
        position={[14.425, 4.038, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials['neon light blue']}
        position={[14.425, 4.21, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials['neon light blue']}
        position={[14.425, 4.393, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials['neon light blue']}
        position={[14.425, 4.552, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={materials['neon light blue']}
        position={[14.425, 4.723, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials['neon light blue']}
        position={[14.425, 4.897, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials['neon light blue']}
        position={[14.425, 5.056, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials['neon light blue']}
        position={[14.425, 5.227, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials['neon light blue']}
        position={[14.425, 5.412, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={materials['neon light blue']}
        position={[14.425, 5.571, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials['neon light blue']}
        position={[14.425, 5.742, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials['neon light blue']}
        position={[14.425, 5.916, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials['neon light blue']}
        position={[14.425, 6.075, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={materials['neon light blue']}
        position={[14.425, 6.247, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={materials['neon light blue']}
        position={[14.425, 6.494, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={materials['neon light blue']}
        position={[14.425, 6.653, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={materials['neon light blue']}
        position={[14.425, 6.824, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={materials['neon light blue']}
        position={[14.425, 6.998, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={materials['neon light blue']}
        position={[14.425, 7.157, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={materials['neon light blue']}
        position={[14.425, 7.329, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane035.geometry}
        material={materials['neon light blue']}
        position={[14.425, 7.512, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane036.geometry}
        material={materials['neon light blue']}
        position={[14.425, 7.671, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={materials['neon light blue']}
        position={[14.425, 7.842, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane038.geometry}
        material={materials['neon light blue']}
        position={[14.425, 8.016, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane039.geometry}
        material={materials['neon light blue']}
        position={[14.425, 8.175, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane040.geometry}
        material={materials['neon light blue']}
        position={[14.425, 8.346, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={materials['neon light blue']}
        position={[14.425, 8.531, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane042.geometry}
        material={materials['neon light blue']}
        position={[14.425, 8.69, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane043.geometry}
        material={materials['neon light blue']}
        position={[14.425, 8.861, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane044.geometry}
        material={materials['neon light blue']}
        position={[14.425, 9.035, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane045.geometry}
        material={materials['neon light blue']}
        position={[14.425, 9.194, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane046.geometry}
        material={materials['neon light blue']}
        position={[14.425, 9.366, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={materials['neon light blue']}
        position={[14.425, 9.544, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={materials['neon light blue']}
        position={[14.425, 9.716, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials['neon light blue']}
        position={[14.425, 9.889, 0.501]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.392, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane050.geometry}
        material={materials['neon light blue']}
        position={[14.425, 10.048, 0.497]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.398, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane051.geometry}
        material={materials['neon light blue']}
        position={[14.425, 10.22, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.397, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane052.geometry}
        material={materials['neon light blue']}
        position={[12.855, 4.288, 0.726]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44001.geometry}
        material={materials['neon light blue']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44002.geometry}
        material={materials['neon light red']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41001.geometry}
        material={materials['neon light blue']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41002.geometry}
        material={materials['neon light red']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41003.geometry}
        material={materials.white_neon}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41004.geometry}
        material={materials['neon light blue']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41005.geometry}
        material={materials['neon light red']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47001.geometry}
        material={materials['neon light red']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47002.geometry}
        material={materials['neon light red']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47003.geometry}
        material={materials['Material.009']}
        position={[0, 1.014, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane053.geometry}
        material={materials['neon light blue']}
        position={[10.519, 5.859, 3.365]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.66, 0.007, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane054.geometry}
        material={materials['neon light blue']}
        position={[10.519, 6.092, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane055.geometry}
        material={materials['neon light blue']}
        position={[10.519, 6.335, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane056.geometry}
        material={materials['neon light blue']}
        position={[10.519, 6.582, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane057.geometry}
        material={materials['neon light blue']}
        position={[10.519, 6.824, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane058.geometry}
        material={materials['neon light blue']}
        position={[10.519, 7.094, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane059.geometry}
        material={materials['neon light blue']}
        position={[10.519, 7.336, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane060.geometry}
        material={materials['neon light blue']}
        position={[10.519, 7.599, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane061.geometry}
        material={materials['neon light blue']}
        position={[10.519, 7.842, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane062.geometry}
        material={materials['neon light blue']}
        position={[10.519, 7.348, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane063.geometry}
        material={materials['neon light blue']}
        position={[10.519, 7.591, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane064.geometry}
        material={materials['neon light blue']}
        position={[10.519, 7.838, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane065.geometry}
        material={materials['neon light blue']}
        position={[10.519, 8.08, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane066.geometry}
        material={materials['neon light blue']}
        position={[10.519, 8.35, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane067.geometry}
        material={materials['neon light blue']}
        position={[10.519, 8.592, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane068.geometry}
        material={materials['neon light blue']}
        position={[10.519, 8.855, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane069.geometry}
        material={materials['neon light blue']}
        position={[10.519, 9.098, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane070.geometry}
        material={materials['neon light blue']}
        position={[10.519, 2.088, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane071.geometry}
        material={materials['neon light blue']}
        position={[10.519, 2.331, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane072.geometry}
        material={materials['neon light blue']}
        position={[10.519, 2.578, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane073.geometry}
        material={materials['neon light blue']}
        position={[10.519, 2.821, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane074.geometry}
        material={materials['neon light blue']}
        position={[10.519, 3.09, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane075.geometry}
        material={materials['neon light blue']}
        position={[10.519, 3.332, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane076.geometry}
        material={materials['neon light blue']}
        position={[10.519, 3.596, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane077.geometry}
        material={materials['neon light blue']}
        position={[10.519, 3.838, 2.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.018, 0.011, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane078.geometry}
        material={materials['neon light blue']}
        position={[10.519, 5.581, 3.365]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.66, 0.007, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane079.geometry}
        material={materials['neon light blue']}
        position={[10.519, 5.341, 3.365]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.66, 0.007, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane080.geometry}
        material={materials['neon light blue']}
        position={[10.519, 5.044, 3.365]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.66, 0.007, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane081.geometry}
        material={materials['neon light blue']}
        position={[10.519, 4.865, 3.365]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.66, 0.007, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane082.geometry}
        material={materials['neon light blue']}
        position={[10.519, 4.588, 3.365]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.66, 0.007, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane083.geometry}
        material={materials['neon light blue']}
        position={[10.519, 4.347, 3.365]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.66, 0.007, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane084.geometry}
        material={materials['neon light blue']}
        position={[10.519, 4.05, 3.365]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.66, 0.007, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane085.geometry}
        material={materials['neon light red']}
        position={[10.17, 3.826, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane086.geometry}
        material={materials['neon light red']}
        position={[10.17, 3.578, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane087.geometry}
        material={materials['neon light red']}
        position={[10.17, 3.324, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane088.geometry}
        material={materials['neon light red']}
        position={[10.17, 3.076, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane089.geometry}
        material={materials['neon light red']}
        position={[10.17, 2.823, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane090.geometry}
        material={materials['neon light red']}
        position={[10.17, 2.575, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane091.geometry}
        material={materials['neon light red']}
        position={[10.17, 2.337, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane092.geometry}
        material={materials['neon light red']}
        position={[10.17, 2.089, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane093.geometry}
        material={materials['neon light red']}
        position={[10.17, 6.319, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane094.geometry}
        material={materials['neon light red']}
        position={[10.17, 6.071, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane095.geometry}
        material={materials['neon light red']}
        position={[10.17, 7.584, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane096.geometry}
        material={materials['neon light red']}
        position={[10.17, 7.33, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane097.geometry}
        material={materials['neon light red']}
        position={[10.17, 7.083, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane098.geometry}
        material={materials['neon light red']}
        position={[10.17, 6.844, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane099.geometry}
        material={materials['neon light red']}
        position={[10.17, 6.597, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane100.geometry}
        material={materials['neon light red']}
        position={[-0.312, 4.478, 1.959]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane101.geometry}
        material={materials['neon light red']}
        position={[10.17, 8.81, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane102.geometry}
        material={materials['neon light red']}
        position={[10.17, 8.562, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane103.geometry}
        material={materials['neon light red']}
        position={[10.17, 8.324, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane104.geometry}
        material={materials['neon light red']}
        position={[10.17, 8.076, 1.509]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane105.geometry}
        material={materials['neon light red']}
        position={[10.169, 6.074, 1.511]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane106.geometry}
        material={materials['neon light blue']}
        position={[8.297, 3.753, -2.616]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane107.geometry}
        material={materials['neon light blue']}
        position={[8.297, 3.869, -2.616]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane108.geometry}
        material={materials['neon light blue']}
        position={[8.297, 4.054, -2.616]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane109.geometry}
        material={materials['neon light blue']}
        position={[8.297, 4.222, -2.616]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane110.geometry}
        material={materials['neon light blue']}
        position={[8.297, 4.406, -2.616]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane111.geometry}
        material={materials['neon light blue']}
        position={[8.297, 4.6, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane112.geometry}
        material={materials['neon light blue']}
        position={[8.297, 4.856, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane113.geometry}
        material={materials['neon light blue']}
        position={[8.297, 5.084, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane114.geometry}
        material={materials['neon light blue']}
        position={[8.297, 5.306, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane115.geometry}
        material={materials['neon light blue']}
        position={[8.297, 5.494, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane116.geometry}
        material={materials['neon light blue']}
        position={[8.297, 5.726, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane117.geometry}
        material={materials['neon light blue']}
        position={[8.297, 5.911, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane118.geometry}
        material={materials['neon light blue']}
        position={[8.297, 6.119, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane119.geometry}
        material={materials['neon light blue']}
        position={[8.297, 6.376, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane120.geometry}
        material={materials['neon light blue']}
        position={[8.297, 6.604, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane121.geometry}
        material={materials['neon light blue']}
        position={[8.297, 6.826, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane122.geometry}
        material={materials['neon light blue']}
        position={[8.297, 7.013, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane123.geometry}
        material={materials['neon light blue']}
        position={[8.297, 7.246, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane124.geometry}
        material={materials['neon light blue']}
        position={[8.297, 7.43, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane125.geometry}
        material={materials['neon light blue']}
        position={[8.297, 7.655, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane126.geometry}
        material={materials['neon light blue']}
        position={[8.297, 7.911, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane127.geometry}
        material={materials['neon light blue']}
        position={[8.297, 8.139, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane128.geometry}
        material={materials['neon light blue']}
        position={[8.297, 8.361, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane129.geometry}
        material={materials['neon light blue']}
        position={[8.297, 8.549, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane130.geometry}
        material={materials['neon light blue']}
        position={[8.297, 8.781, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane131.geometry}
        material={materials['neon light blue']}
        position={[8.297, 8.966, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane132.geometry}
        material={materials['neon light blue']}
        position={[8.297, 8.72, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane133.geometry}
        material={materials['neon light blue']}
        position={[8.297, 8.976, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane134.geometry}
        material={materials['neon light blue']}
        position={[8.297, 9.204, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane135.geometry}
        material={materials['neon light blue']}
        position={[8.297, 9.426, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane136.geometry}
        material={materials['neon light blue']}
        position={[8.297, 9.614, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane137.geometry}
        material={materials['neon light blue']}
        position={[8.297, 9.846, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane138.geometry}
        material={materials['neon light blue']}
        position={[8.297, 10.031, -3.727]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.379, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane139.geometry}
        material={materials['neon light red']}
        position={[7.828, 9.958, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane140.geometry}
        material={materials['neon light red']}
        position={[7.828, 9.855, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane141.geometry}
        material={materials['neon light red']}
        position={[7.828, 9.728, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane142.geometry}
        material={materials['neon light red']}
        position={[7.828, 9.569, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane143.geometry}
        material={materials['neon light red']}
        position={[7.828, 9.396, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane144.geometry}
        material={materials['neon light red']}
        position={[7.828, 9.245, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane145.geometry}
        material={materials['neon light red']}
        position={[7.828, 9.067, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane146.geometry}
        material={materials['neon light red']}
        position={[7.828, 8.922, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane147.geometry}
        material={materials['neon light red']}
        position={[7.828, 8.819, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane148.geometry}
        material={materials['neon light red']}
        position={[7.828, 8.692, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane149.geometry}
        material={materials['neon light red']}
        position={[7.828, 8.533, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane150.geometry}
        material={materials['neon light red']}
        position={[7.828, 8.36, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane151.geometry}
        material={materials['neon light red']}
        position={[7.828, 8.209, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane152.geometry}
        material={materials['neon light red']}
        position={[7.828, 8.03, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane153.geometry}
        material={materials['neon light red']}
        position={[7.828, 7.861, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane154.geometry}
        material={materials['neon light red']}
        position={[7.828, 7.759, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane155.geometry}
        material={materials['neon light red']}
        position={[7.828, 7.631, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane156.geometry}
        material={materials['neon light red']}
        position={[7.828, 7.472, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane157.geometry}
        material={materials['neon light red']}
        position={[7.828, 7.3, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane158.geometry}
        material={materials['neon light red']}
        position={[7.828, 7.148, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane159.geometry}
        material={materials['neon light red']}
        position={[7.828, 6.97, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane160.geometry}
        material={materials['neon light red']}
        position={[7.828, 6.844, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane161.geometry}
        material={materials['neon light red']}
        position={[7.828, 6.742, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane162.geometry}
        material={materials['neon light red']}
        position={[7.828, 6.615, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane163.geometry}
        material={materials['neon light red']}
        position={[7.828, 6.456, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane164.geometry}
        material={materials['neon light red']}
        position={[7.828, 6.283, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane165.geometry}
        material={materials['neon light red']}
        position={[7.828, 6.131, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane166.geometry}
        material={materials['neon light red']}
        position={[7.828, 5.953, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane167.geometry}
        material={materials['neon light red']}
        position={[7.828, 5.808, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane168.geometry}
        material={materials['neon light red']}
        position={[7.828, 5.706, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane169.geometry}
        material={materials['neon light red']}
        position={[7.828, 5.579, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane170.geometry}
        material={materials['neon light red']}
        position={[7.828, 5.419, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane171.geometry}
        material={materials['neon light red']}
        position={[7.828, 5.247, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane172.geometry}
        material={materials['neon light red']}
        position={[7.828, 5.095, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane173.geometry}
        material={materials['neon light red']}
        position={[7.828, 4.917, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane174.geometry}
        material={materials['neon light red']}
        position={[7.828, 4.748, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane175.geometry}
        material={materials['neon light red']}
        position={[7.828, 4.645, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane176.geometry}
        material={materials['neon light red']}
        position={[7.828, 4.518, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane177.geometry}
        material={materials['neon light red']}
        position={[7.828, 4.359, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane178.geometry}
        material={materials['neon light red']}
        position={[7.828, 4.187, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane179.geometry}
        material={materials['neon light red']}
        position={[7.828, 4.035, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane180.geometry}
        material={materials['neon light red']}
        position={[7.828, 3.857, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane181.geometry}
        material={materials['neon light red']}
        position={[7.828, 3.697, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane182.geometry}
        material={materials['neon light red']}
        position={[7.828, 3.594, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane183.geometry}
        material={materials['neon light red']}
        position={[7.828, 3.467, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane184.geometry}
        material={materials['neon light red']}
        position={[7.828, 3.308, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane185.geometry}
        material={materials['neon light red']}
        position={[7.828, 3.135, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane186.geometry}
        material={materials['neon light red']}
        position={[7.828, 2.984, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane187.geometry}
        material={materials['neon light red']}
        position={[7.828, 2.805, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane188.geometry}
        material={materials['neon light red']}
        position={[7.828, 2.661, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane189.geometry}
        material={materials['neon light red']}
        position={[7.828, 2.558, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane190.geometry}
        material={materials['neon light red']}
        position={[7.828, 2.431, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane191.geometry}
        material={materials['neon light red']}
        position={[7.828, 2.272, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane192.geometry}
        material={materials['neon light red']}
        position={[7.828, 2.099, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane193.geometry}
        material={materials['neon light red']}
        position={[7.828, 1.948, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane194.geometry}
        material={materials['neon light red']}
        position={[7.828, 1.769, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane195.geometry}
        material={materials['neon light red']}
        position={[7.828, 1.6, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane196.geometry}
        material={materials['neon light red']}
        position={[7.828, 1.498, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane197.geometry}
        material={materials['neon light red']}
        position={[7.828, 1.37, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane198.geometry}
        material={materials['neon light red']}
        position={[7.828, 1.211, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane199.geometry}
        material={materials['neon light red']}
        position={[7.828, 1.039, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane200.geometry}
        material={materials['neon light red']}
        position={[7.828, 0.887, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane201.geometry}
        material={materials['neon light red']}
        position={[7.828, 0.709, -2.262]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.301, 0.024, 0.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane202.geometry}
        material={materials['neon light blue']}
        position={[0.862, 7.778, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane203.geometry}
        material={materials['neon light blue']}
        position={[0.862, 7.592, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane204.geometry}
        material={materials['neon light blue']}
        position={[0.862, 7.402, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane205.geometry}
        material={materials['neon light blue']}
        position={[0.862, 7.218, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane206.geometry}
        material={materials['neon light blue']}
        position={[0.862, 7.033, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane207.geometry}
        material={materials['neon light blue']}
        position={[0.862, 6.848, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane208.geometry}
        material={materials['neon light blue']}
        position={[0.862, 6.657, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane209.geometry}
        material={materials['neon light blue']}
        position={[0.862, 6.473, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane210.geometry}
        material={materials['neon light blue']}
        position={[0.862, 6.278, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane211.geometry}
        material={materials['neon light blue']}
        position={[0.862, 6.092, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane212.geometry}
        material={materials['neon light blue']}
        position={[0.862, 5.902, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane213.geometry}
        material={materials['neon light blue']}
        position={[0.862, 5.718, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane214.geometry}
        material={materials['neon light blue']}
        position={[0.862, 5.585, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane215.geometry}
        material={materials['neon light blue']}
        position={[0.862, 5.399, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane216.geometry}
        material={materials['neon light blue']}
        position={[0.862, 5.209, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane217.geometry}
        material={materials['neon light blue']}
        position={[0.862, 5.025, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane218.geometry}
        material={materials['neon light blue']}
        position={[0.852, 4.84, 2.584]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane219.geometry}
        material={materials['neon light blue']}
        position={[0.852, 4.654, 2.584]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane220.geometry}
        material={materials['neon light blue']}
        position={[0.852, 4.464, 2.584]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane221.geometry}
        material={materials['neon light blue']}
        position={[0.852, 4.28, 2.584]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane222.geometry}
        material={materials['neon light blue']}
        position={[0.852, 4.085, 2.584]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane223.geometry}
        material={materials['neon light blue']}
        position={[0.861, 3.899, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane224.geometry}
        material={materials['neon light blue']}
        position={[0.861, 3.708, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane225.geometry}
        material={materials['neon light blue']}
        position={[0.861, 3.524, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane226.geometry}
        material={materials['neon light blue']}
        position={[0.928, 3.381, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane227.geometry}
        material={materials['neon light blue']}
        position={[0.928, 3.195, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane228.geometry}
        material={materials['neon light blue']}
        position={[0.928, 3.005, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane229.geometry}
        material={materials['neon light blue']}
        position={[0.928, 2.821, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane230.geometry}
        material={materials['neon light blue']}
        position={[0.928, 2.688, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane231.geometry}
        material={materials['neon light blue']}
        position={[0.928, 2.502, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane232.geometry}
        material={materials['neon light blue']}
        position={[0.928, 2.312, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane233.geometry}
        material={materials['neon light blue']}
        position={[0.928, 2.128, 2.816]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.575, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane234.geometry}
        material={materials['neon light red']}
        position={[-0.312, 4.655, 1.959]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane235.geometry}
        material={materials['neon light red']}
        position={[-0.312, 4.846, 1.959]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane236.geometry}
        material={materials['neon light red']}
        position={[-0.312, 4.301, 1.959]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane237.geometry}
        material={materials['neon light red']}
        position={[-0.312, 4.135, 1.959]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane238.geometry}
        material={materials['neon light red']}
        position={[-0.312, 7.974, 1.959]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane239.geometry}
        material={materials['neon light red']}
        position={[-0.312, 7.797, 1.959]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane240.geometry}
        material={materials['neon light red']}
        position={[-0.312, 7.632, 1.959]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane241.geometry}
        material={materials['neon light red']}
        position={[-4.709, 7.775, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane242.geometry}
        material={materials['neon light red']}
        position={[-4.709, 7.598, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane243.geometry}
        material={materials['neon light red']}
        position={[-4.709, 7.432, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane244.geometry}
        material={materials['neon light red']}
        position={[-4.709, 7.293, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane245.geometry}
        material={materials['neon light red']}
        position={[-4.709, 7.116, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane246.geometry}
        material={materials['neon light red']}
        position={[-4.709, 6.95, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane247.geometry}
        material={materials['neon light red']}
        position={[-4.709, 6.757, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane248.geometry}
        material={materials['neon light red']}
        position={[-4.709, 6.58, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane249.geometry}
        material={materials['neon light red']}
        position={[-4.709, 6.414, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane250.geometry}
        material={materials['neon light red']}
        position={[-4.709, 6.187, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane251.geometry}
        material={materials['neon light red']}
        position={[-4.709, 6.01, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane252.geometry}
        material={materials['neon light red']}
        position={[-4.709, 5.844, 3.433]}
        rotation={[Math.PI / 2, 0, -0.016]}
        scale={[1.134, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane253.geometry}
        material={materials['neon light red']}
        position={[-10.762, 4.953, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane254.geometry}
        material={materials['neon light red']}
        position={[-10.762, 4.776, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane255.geometry}
        material={materials['neon light red']}
        position={[-10.762, 4.61, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane256.geometry}
        material={materials['neon light red']}
        position={[-10.762, 5.525, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane257.geometry}
        material={materials['neon light red']}
        position={[-10.762, 5.348, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane258.geometry}
        material={materials['neon light red']}
        position={[-10.762, 5.182, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane259.geometry}
        material={materials['neon light red']}
        position={[-10.762, 6.088, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane260.geometry}
        material={materials['neon light red']}
        position={[-10.762, 5.91, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane261.geometry}
        material={materials['neon light red']}
        position={[-10.762, 5.745, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane262.geometry}
        material={materials['neon light red']}
        position={[-10.762, 6.709, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane263.geometry}
        material={materials['neon light red']}
        position={[-10.762, 6.532, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane264.geometry}
        material={materials['neon light red']}
        position={[-10.762, 6.366, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane265.geometry}
        material={materials['neon light red']}
        position={[-10.762, 4.361, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane266.geometry}
        material={materials['neon light red']}
        position={[-10.762, 4.184, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane267.geometry}
        material={materials['neon light red']}
        position={[-10.762, 4.018, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane268.geometry}
        material={materials['neon light red']}
        position={[-10.762, 3.757, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane269.geometry}
        material={materials['neon light red']}
        position={[-10.762, 3.58, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane270.geometry}
        material={materials['neon light red']}
        position={[-10.762, 3.414, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane271.geometry}
        material={materials['neon light red']}
        position={[-10.762, 7.304, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane272.geometry}
        material={materials['neon light red']}
        position={[-10.762, 7.127, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane273.geometry}
        material={materials['neon light red']}
        position={[-10.762, 6.961, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane274.geometry}
        material={materials['neon light red']}
        position={[-10.762, 7.864, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane275.geometry}
        material={materials['neon light red']}
        position={[-10.762, 7.687, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane276.geometry}
        material={materials['neon light red']}
        position={[-10.762, 7.521, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane277.geometry}
        material={materials['neon light red']}
        position={[-10.762, 8.438, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane278.geometry}
        material={materials['neon light red']}
        position={[-10.762, 8.261, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane279.geometry}
        material={materials['neon light red']}
        position={[-10.762, 8.095, 0.129]}
        rotation={[Math.PI / 2, 0, -0.006]}
        scale={[1.87, 0.024, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane280.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 10.829, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane281.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 10.643, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane282.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 10.453, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane283.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 10.269, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane284.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 10.084, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane285.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 9.898, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane286.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 9.708, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane287.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 9.524, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane288.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 9.328, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane289.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 9.143, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane290.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 8.952, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane291.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 8.768, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane292.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 8.635, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane293.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 8.45, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane294.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 8.259, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane295.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 8.075, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane296.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 7.807, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane297.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 7.622, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane298.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 7.431, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane299.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 7.247, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane300.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 7.063, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane301.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 6.877, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane302.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 6.687, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane303.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 6.503, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane304.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 6.307, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane305.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 6.122, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane306.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 5.931, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane307.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 5.747, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane308.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 5.614, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane309.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 5.428, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane310.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 5.238, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane311.geometry}
        material={materials['neon light blue']}
        position={[-8.73, 5.054, 0.907]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.668, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane312.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 8.681, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane313.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 8.495, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane314.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 8.304, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane315.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 8.12, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane316.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 7.936, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane317.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 7.75, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane318.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 7.56, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane319.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 7.376, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane320.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 7.18, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane321.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 6.995, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane322.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 6.804, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane323.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 6.62, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane324.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 6.487, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane325.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 6.301, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane326.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 6.111, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane327.geometry}
        material={materials['neon light blue']}
        position={[-3.326, 5.927, -3.137]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.746, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane328.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 11.561, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane329.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 11.375, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane330.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 11.185, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane331.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 11.001, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane332.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 10.816, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane333.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 10.631, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane334.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 10.44, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane335.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 10.256, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane336.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 10.061, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane337.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 9.875, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane338.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 9.685, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane339.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 9.501, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane340.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 9.368, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane341.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 9.182, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane342.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 8.992, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane343.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 8.808, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane344.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 8.637, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane345.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 8.451, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane346.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 8.26, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane347.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 8.076, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane348.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 7.892, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane349.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 7.706, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane350.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 7.516, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane351.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 7.332, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane352.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 7.136, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane353.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 6.951, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane354.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 6.76, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane355.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 6.576, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane356.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 6.443, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane357.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 6.258, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane358.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 6.067, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane359.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 5.883, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane360.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 6.289, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane361.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 6.103, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane362.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 5.913, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane363.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 5.729, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane364.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 5.544, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane365.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 5.359, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane366.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 5.168, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane367.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 4.984, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane368.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 4.789, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane369.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 4.603, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane370.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 4.413, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane371.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 4.229, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane372.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 4.096, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane373.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 3.91, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane374.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 3.72, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane375.geometry}
        material={materials['neon light blue']}
        position={[-10.585, 3.535, -1.671]}
        rotation={[-Math.PI / 2, 0, 3.121]}
        scale={[1.518, 0.004, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_globe_glowing_hologram.geometry}
        material={materials['Earth Surface.002']}
        position={[7.979, 1.046, -1.538]}
        rotation={[Math.PI, -0.888, Math.PI]}
        scale={0.733}
      />
    </group>
    </e.group>
  )
}

useGLTF.preload('/models/city10feb.glb')