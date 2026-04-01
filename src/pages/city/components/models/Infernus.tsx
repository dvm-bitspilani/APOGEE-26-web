import * as THREE from "three";
import { Float, Trail, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useMemo } from "react";
import infernusModel from "../../../../assets/3d/landing/car5.0-transformed.glb";
import { useInfernusStore, useNavStateStore } from "../../../../utils/store";
import { useNeonMaterial } from "../../hooks/useNeonMaterial";
import { editable as e } from "@theatre/r3f";
import { useTrailIntensity } from "../../hooks/useTrailIntensity";
import { useCyberpunkFogMaterial } from "../../hooks/useCyberPunkFogMaterial";
import type { GLTFCar } from "../../types/Models.types";

export default function Infernus() {
  //Colors
  const neonColor = useMemo<[number, number, number]>(() => [0, 1, 0.8], []);
  const neonColor2 = useMemo<[number, number, number]>(() => [1, 0.5, 0], []);
  const neonColor3 = useMemo<[number, number, number]>(() => [1, 0.5, 0], []);
  const neon = useNeonMaterial(neonColor, 1);
  const neon2 = useNeonMaterial(neonColor2, 1.5);
  const neon3 = useNeonMaterial(neonColor3, 1.25);

  const infernusRef = useRef<THREE.Group>(null!);
  const setInfernus = useInfernusStore((s) => s.setInfernus);
  const trailIntensity = useTrailIntensity(infernusRef);

  useEffect(() => {
    if (infernusRef.current) {
      setInfernus(infernusRef.current);
    }
  }, [setInfernus]);
  const { nodes, materials } = useGLTF(infernusModel, true) as unknown as GLTFCar;
  useEffect(() => {
    const unused = ["white light", "mirror", "red light", "blue"];

    unused.forEach((key) => {
      const mat = materials[key as keyof typeof materials];
      if (mat) {
        mat.dispose();
      }
    });
  }, [materials]);

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

  const trailColor = useMemo(() => {
    return new THREE.Color("#40ccef").multiplyScalar(trailIntensity);
  }, [trailIntensity]);
  const trailColor2 = useMemo(() => {
    return new THREE.Color("#f3ff0f").multiplyScalar(trailIntensity);
  }, [trailIntensity]);
  const mat = useCyberpunkFogMaterial();
  return (
    <>
      {/* <StudioEnvironment /> */}
      <group >
        <Float floatIntensity={0.3} rotationIntensity={0.005} speed={navState === "off" ? 5 : 0}>
          <e.group
            name="infernus"
            theatreKey="UltaRickshaw"
            ref={infernusRef}
            dispose={null}
            position={[0.5, -6, 75]}
            scale={[6, 6, 6]}
          // frustumCulled={false}
          >
            <group rotation={[Math.PI / 2, 0, 0]} scale={1.492}>
              <group position={[-0.3, 0, 0]} ref={leftTrailRef} />
              <group position={[0.3, 0, 0]} ref={rightTrailRef} />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.meshId5_name.geometry}
                // material={neonActive ? neon : materials["white light"]}
                material={neon2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.meshId5_name_1.geometry}
                material={mat}
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
                material={neon3}
              // material={materials.mirror}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.meshId5_name_4.geometry}
                // material={neonActive ? neon : materials["red light"]}
                material={neon2}
              />
              <Trail
                width={8} // Width of the line
                color={trailColor2}
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
                  material={neon}
                />
              </Trail>
              <Trail
                width={4}
                length={2}
                decay={0.2}
                target={leftTrailRef}
                local={false}
                color={trailColor}
              >
              </Trail>
              <Trail
                width={4}
                length={2}
                decay={0.2}
                target={rightTrailRef}
                local={false}
                color={trailColor}
              >
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
