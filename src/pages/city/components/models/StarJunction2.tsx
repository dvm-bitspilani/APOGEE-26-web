import * as THREE from "three";
import { Center, useGLTF } from "@react-three/drei";
import { useMemo, type JSX } from "react";

export function StarJunction2(props: JSX.IntrinsicElements["group"]) {
  const gltf = useGLTF("/models/newcity.glb");

  /**
   * SAFE mesh extraction
   * - skips undefined
   * - skips non-mesh
   * - no isMesh crash
   */
  const meshes = useMemo(() => {
    const arr: THREE.Mesh[] = [];

    Object.values(gltf.nodes).forEach((obj: any) => {
      if (obj && obj.type === "Mesh" && obj.geometry && obj.material) {
        arr.push(obj as THREE.Mesh);
      }
    });

    return arr;
  }, [gltf.nodes]);

  return (
    <group {...props}>
      <Center>
        {meshes.map((mesh, i) => (
          <mesh
            key={i}
            geometry={mesh.geometry}
            material={mesh.material}
            position={mesh.position}
            rotation={mesh.rotation}
            scale={mesh.scale}
            castShadow
            receiveShadow
          />
        ))}
      </Center>
    </group>
  );
}

useGLTF.preload("/models/newcity.glb");
