import * as THREE from "three";
import { Float, Trail, useGLTF } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { useEffect, useRef } from "react";
import infernusModel from "../../../../assets/3d/landing/car5.0-transformed.glb";
import { useInfernusStore, useNavStateStore } from "../../../../utils/store";
import { useNeonMaterial } from "../../hooks/useNeonMaterial";
import { useKonami } from "../../hooks/useKonami"; // ⭐ add this
import { editable as e } from "@theatre/r3f";
// import StudioEnvironment from "../StudioEnviroment";

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
  //   useEffect(() => {
  //   const car = infernusRef.current
  //   if (!car) return

  //   car.traverse((child: THREE.Object3D) => {
  //     child.layers.enable(1) // put entire car on layer 1
  //   })
  // }, [])
  const { nodes, materials } = useGLTF(infernusModel,true) as unknown as GLTFResult;

  // useLayoutEffect(() => {
  //   const car = infernusRef.current;
  //   if (!car) return;

  //   car.traverse((child) => {
  //     if ((child as THREE.Mesh).isMesh) {
  //       child.layers.enable(1); // Ensure Layer 1 is active

  //       const mesh = child as THREE.Mesh;
  //       const mat = mesh.material as THREE.MeshStandardMaterial;

  //       // Force reflections to be "on"
  //       if (mat) {
  //         mat.envMapIntensity = 1.5; // Boost the StudioEnvironment
  //         mat.needsUpdate = true;
  //       }
  //     }
  //   });
  // }, [nodes, neonActive]);

  const leftTrailRef = useRef<THREE.Object3D>(null!);
  const rightTrailRef = useRef<THREE.Object3D>(null!);
  const navState = useNavStateStore((s) => s.navState);
  return (
    <>
      {/* <StudioEnvironment /> */}
      <group >
        <Float floatIntensity={0.3} rotationIntensity={0.005} speed={navState === "off" ?  5 : 0}>
          <e.group
            name="infernus"
            theatreKey="UltaRickshaw"
            ref={infernusRef}
            dispose={null}
            position={[0.5, -6, 75]}
            scale={[6, 6, 6]}
            frustumCulled={false}
          >
            <group rotation={[Math.PI / 2, 0, 0]} scale={1.492}>
              <group position={[-0.3, 0, 0]} ref={leftTrailRef} />

              {/* Right trail target */}
              <group position={[0.3, 0, 0]} ref={rightTrailRef} />
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

              <Trail
                width={8} // Width of the line
                color={new THREE.Color("#40ccef").multiplyScalar(3.5)}
                length={1.5} // Length of the line
                decay={0.2} // How fast the line fades away
                local={false} // Wether to use the target's world or local positions
                stride={0} // Min distance between previous and current point
                interval={1} // Number of frames to wait before next calculation
                target={undefined} // Optional target. This object will produce the trail.
                attenuation={(width) => width} // A function to define the width in each point along it.
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.meshId5_name_5.geometry}
                  material={neonActive ? neon : materials.blue}
                />
              </Trail>
              {/* Left trail */}
              <Trail
                width={4}
                length={2}
                decay={0.2}
                target={leftTrailRef}
                local={false}
                color={new THREE.Color("#40ccef").multiplyScalar(3.5)}
              >
                <mesh
                  geometry={nodes.meshId5_name_5.geometry}
                  material={neonActive ? neon : materials.blue}
                />
              </Trail>

              {/* Right trail */}
              <Trail
                width={4}
                length={2}
                decay={0.2}
                target={rightTrailRef}
                local={false}
                color={new THREE.Color("#40ccef").multiplyScalar(3.5)}
              >
                <mesh
                  geometry={nodes.meshId5_name_5.geometry}
                  material={neonActive ? neon : materials.blue}
                />
              </Trail>
            </group>

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spinner003.geometry}
              material={materials["lights purple"]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1.492}
            />
          </e.group>
        </Float>
      </group>
    </>
  );
}

useGLTF.preload(infernusModel);
