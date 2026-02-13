import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { useEffect, useRef } from "react";
import infernusModel from "../../../../assets/3d/landing/car5.0.glb";
import { useInfernusStore } from "../../../../utils/store";
import { useNeonMaterial } from "../../hooks/useNeonMaterial";
import { useKonami } from "../../hooks/useKonami";   // ⭐ add this

type GLTFResult = GLTF & {
  nodes: {
    meshId5_name: THREE.Mesh;
    meshId5_name_1: THREE.Mesh;
    meshId5_name_2: THREE.Mesh;
    meshId5_name_3: THREE.Mesh;
    meshId5_name_4: THREE.Mesh;
    meshId5_name_5: THREE.Mesh;
    spinner003: THREE.Mesh;
  };
  materials: {
    ["white light"]: THREE.MeshStandardMaterial;
    ex: THREE.MeshStandardMaterial;
    int: THREE.MeshStandardMaterial;
    mirror: THREE.MeshStandardMaterial;
    ["red light"]: THREE.MeshStandardMaterial;
    blue: THREE.MeshStandardMaterial;
    ["lights purple"]: THREE.MeshStandardMaterial;
  };
};

export default function Infernus() {

  // 🔑 konami state
  const neonActive = useKonami();

  // neon shader depends on konami
  const neon = useNeonMaterial(neonActive);

  const infernusRef = useRef<THREE.Group>(null!);
  const setInfernus = useInfernusStore((s) => s.setInfernus);

  useEffect(() => {
    if (infernusRef.current) {
      setInfernus(infernusRef.current);
    }
  }, [setInfernus]);

  const { nodes, materials } = useGLTF(infernusModel) as unknown as GLTFResult;

  return (
    <Float floatIntensity={3} rotationIntensity={0.05} speed={5}>
      <group
        ref={infernusRef}
        dispose={null}
        position={[0.5, -3, 60]}
        rotation={[0, 0, 0]}
        scale={[6, 6, 6]}
        frustumCulled={false}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={1.492}>

          {/* switch material based on konami */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.meshId5_name.geometry}
            material={neonActive ? neon : materials["white light"]}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.meshId5_name_1.geometry}
            material={materials.ex}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.meshId5_name_2.geometry}
            material={materials.int}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.meshId5_name_3.geometry}
            material={materials.mirror}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.meshId5_name_4.geometry}
            material={neonActive ? neon : materials["red light"]}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.meshId5_name_5.geometry}
            material={neonActive ? neon : materials.blue}
          />
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.spinner003.geometry}
          material={materials["lights purple"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.492}
        />
      </group>
    </Float>
  );
}

useGLTF.preload(infernusModel);
