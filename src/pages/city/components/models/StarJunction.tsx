import { useGLTF } from "@react-three/drei";

export function StarJunction({ instances, ...props }: any) {

    return (
        <group {...props} dispose={null} scale={0.001} >
            <instances.Object_11 castShadow receiveShadow />
            <instances.Object_14 rotation={[Math.PI / 2, 0, 0]} scale={1660.198} castShadow receiveShadow />
            <instances.Object_20 castShadow receiveShadow />
            <instances.Object_17 castShadow receiveShadow />
            <instances.Object_18 castShadow receiveShadow />
            <instances.Object_23 castShadow receiveShadow />
            <instances.Object_26 castShadow receiveShadow />
            <instances.Object_29 castShadow receiveShadow />
            <instances.Object_32 castShadow receiveShadow />
            <instances.Object_35 castShadow receiveShadow />
            <instances.Object_38 castShadow receiveShadow />
            <instances.Object_41 castShadow receiveShadow />
            <instances.Object_44 castShadow receiveShadow />
            <instances.Object_47 castShadow receiveShadow />
            <instances.Object_50 castShadow receiveShadow />
            <instances.Object_68 castShadow receiveShadow />
            <instances.Object_71 castShadow receiveShadow />
            <instances.Object_86 castShadow receiveShadow />
            <instances.Object_89001 castShadow receiveShadow />
            <instances.Object_98001 castShadow receiveShadow />
            <instances.Object_101 castShadow receiveShadow />
            <instances.Object_104 castShadow receiveShadow />
            <instances.Object_107 castShadow receiveShadow />
            <instances.Object_113 castShadow receiveShadow />
            <instances.Object_110 castShadow receiveShadow />
            <instances.Object_111 castShadow receiveShadow />
            <instances.Object_119 castShadow receiveShadow />
            <instances.Object_125 castShadow receiveShadow />
            <instances.Object_122 castShadow receiveShadow />
            <instances.Object_123 castShadow receiveShadow />
            <instances.Object_131 castShadow receiveShadow />
            <instances.Object_128 castShadow receiveShadow />
            <instances.Object_129 castShadow receiveShadow />
            <instances.Object_134 castShadow receiveShadow />
            <instances.Object_135 castShadow receiveShadow />
            <instances.Object_141 castShadow receiveShadow />
            <instances.Object_138 castShadow receiveShadow />
            <instances.Object_144 castShadow receiveShadow />
            <instances.Object_153 castShadow receiveShadow />
            <instances.Object_156 castShadow receiveShadow />
            <instances.Object_159 castShadow receiveShadow />
            <instances.Object_165 castShadow receiveShadow />
            <instances.Object_168 castShadow receiveShadow />
            <instances.Object_171 castShadow receiveShadow />
            <instances.Object_180 castShadow receiveShadow />
            <instances.Object_186 castShadow receiveShadow />
            <instances.Object_189 castShadow receiveShadow />
        </group>
    )
}

useGLTF.preload('/models/city3-v1.glb')