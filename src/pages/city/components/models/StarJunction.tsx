

// import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StarJunction(props: any) {
    const { nodes, materials } = useGLTF('/models/times-square.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials['Material.007']}
                position={[13.74, 6.764, 2.412]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials['Material.001']}
                position={[-0.118, 1.643, 1.047]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials.PaletteMaterial001}
                position={[1.79, 1.139, -0.139]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials.PaletteMaterial002}
                position={[-12.622, 4.891, 4.311]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_26.geometry}
                material={materials.advertising_screens_texture_01}
                position={[-4.284, 6.396, -0.99]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_32.geometry}
                material={materials['Material.003']}
                position={[-0.418, 0.047, 0.024]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_41.geometry}
                material={materials['Material.009']}
                position={[-1.501, 10.034, -2.265]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_50.geometry}
                material={materials['Material.004']}
                position={[-0.936, 5.186, -2.708]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_68.geometry}
                material={materials.PaletteMaterial003}
                position={[-0.936, 5.186, -2.708]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_101.geometry}
                material={materials['Material.008']}
                position={[-0.936, 5.186, -2.708]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_180.geometry}
                material={materials['Material.005']}
                position={[1.348, 6.583, -3.009]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_186.geometry}
                material={materials['Material.002']}
                position={[-1.966, 3.206, -2.232]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_189.geometry}
                material={materials.PaletteMaterial004}
                position={[-1.353, 6.785, -1.047]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.001}
            />
        </group>
    )
}

useGLTF.preload('/models/times-square.glb')