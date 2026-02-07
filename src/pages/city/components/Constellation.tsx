import { Center, Merged, useGLTF } from "@react-three/drei";
import { StarJunction } from "./models/StarJunction";
import { editable as e } from "@theatre/r3f";
import type { GLTF } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import { useMemo } from "react";

const BLOCKS = 3
const SPACING = 24
const scaleFactor = [1, 1, 1]
const position = [0, 0, 0]//[-3.6, 274, 456.0]
const effectivePosition = [-position[0] * scaleFactor[0], -position[1] * scaleFactor[1], -position[2] * scaleFactor[2]]

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

export default function Constellation() {
    // const positions: [number, number, number][] = [];
   const positions = useMemo<[number, number, number][]>(() => {
  const arr: [number, number, number][] = []
  for (let block = 0; block < BLOCKS; block++) {
    arr.push([-block * SPACING, 0, 0])
  }
  return arr
}, [])


    const { nodes } = useGLTF('/models/city3-v1.glb') as unknown as GLTFResult


    // for (let block = 0; block < BLOCKS; block++) {
    //     positions.push([
    //         -block * SPACING,
    //         0,
    //         0
    //     ])
    // }

    return (
        <e.group theatreKey="Constellation" scale={scaleFactor} position={effectivePosition} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <Merged meshes={nodes}>
                {(instances) => (
                    <>
                        {
                            positions.map((pos, i) =>
                                <group key={i} position={pos}>
                                    <Center>
                                        <StarJunction instances={instances} />
                                    </Center>
                                </group>
                            )
                        }   
                    </>
                )}
            </Merged>
        </e.group>
    )
}