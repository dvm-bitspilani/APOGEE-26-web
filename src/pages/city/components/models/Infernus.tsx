import * as THREE from "three";
import { Float, Trail, useGLTF } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { useEffect, useRef } from "react";
import infernusModel from "../../../../assets/3d/landing/car5.0-transformed.glb";
import { useInfernusStore, useNavStateStore } from "../../../../utils/store";
import { useNeonMaterial } from "../../hooks/useNeonMaterial";
// import { useKonami } from "../../hooks/useKonami"; // ⭐ add this
import { editable as e } from "@theatre/r3f";
// import { useFrame } from "@react-three/fiber";
// import StudioEnvironment from "../StudioEnviroment";
import { useMemo } from "react";
import { useTrailIntensity } from "../../hooks/useTrailIntensity";
import { useCyberpunkFogMaterial } from "../../hooks/useCyberPunkFogMaterial";
// import { useHolographicMaterial } from "../../hooks/useHolographicMaterial";

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

  // const [trailIntensity, setTrailIntensity] = useState(3.5);
  // const smoothedIntensity = useRef(3.5);
  // 🔑 konami state
  // const neonActive = useKonami();

  // neon shader depends on konami
  // const neon = useNeonMaterial(true);
  // const neon2 = useNeonMaterial2(true);
  // const neon3 = useNeonMaterial3(true);
  const neon = useNeonMaterial([0, 1, 0.8], 1);  
const neon2 = useNeonMaterial([1, 0.5, 0], 1.5);    
const neon3 = useNeonMaterial( [1, 0.5, 0], 1.25);  
  // try 0.6–0.8 for rough

  const infernusRef = useRef<THREE.Group>(null!);
  const setInfernus = useInfernusStore((s) => s.setInfernus);

  const trailIntensity = useTrailIntensity(infernusRef);

  useEffect(() => {
    if (infernusRef.current) {
      setInfernus(infernusRef.current);
    }
  }, [setInfernus]);
  const { nodes, materials } = useGLTF(infernusModel, true) as unknown as GLTFResult;
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

// const prevPos = useRef(new THREE.Vector3());
// const speed = useRef(0);

// useFrame(() => {
//   if (!infernusRef.current) return;

//   const currentPos = new THREE.Vector3();
//   infernusRef.current.getWorldPosition(currentPos);

//   speed.current = currentPos.distanceTo(prevPos.current);
//   prevPos.current.copy(currentPos);

//   const intensity = THREE.MathUtils.clamp(speed.current *1, 1, 200);

//   setTrailIntensity(intensity);
// });
/*
useFrame((_, delta) => {
  if (!infernusRef.current) return;

  const currentPos = new THREE.Vector3();
  infernusRef.current.getWorldPosition(currentPos);

  speed.current = currentPos.distanceTo(prevPos.current);
  prevPos.current.copy(currentPos);

  const targetIntensity = THREE.MathUtils.clamp(speed.current * 0.5, 3.5, 200);

  // 🔥 smooth transition (THIS is the key)
  smoothedIntensity.current = THREE.MathUtils.lerp(
    smoothedIntensity.current,
    targetIntensity,
    5 * delta // smoothing factor (tweak this)
  );

//   const lerpFactor =
//   targetIntensity > smoothedIntensity.current
//     ? 8 * delta   // speed up quickly
//     : 2 * delta;  // slow fade out

// smoothedIntensity.current = THREE.MathUtils.lerp(
//   smoothedIntensity.current,
//   targetIntensity,
//   lerpFactor
// );

  setTrailIntensity(smoothedIntensity.current);
});*/
const trailColor = useMemo(() => {
  return new THREE.Color("#40ccef").multiplyScalar(trailIntensity);
}, [trailIntensity]);
const trailColor2 = useMemo(() => {
  return new THREE.Color("#f3ff0f").multiplyScalar(trailIntensity);
}, [trailIntensity]);
const mat = useCyberpunkFogMaterial();
// const mat = useHolographicMaterial(true, [0, 1, 0.8], 1);

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
                // color={new THREE.Color("#40ccef").multiplyScalar(3.5)}
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
                  // material={neonActive ? neon : materials.blue}
                  material={neon2}
                />
              </Trail>
              {/* Left trail */}
              <Trail
                width={4}
                length={2}
                decay={0.2}
                target={leftTrailRef}
                local={false}
                // color={new THREE.Color("#40ccef").multiplyScalar(3.5)}
                color={trailColor}
              >
                <mesh
                  geometry={nodes.meshId5_name_5.geometry}
                  // material={neonActive ? neon : materials.blue}
                  material={neon3}
                />
              </Trail>

              {/* Right trail */}
              <Trail
                width={4}
                length={2}
                decay={0.2}
                target={rightTrailRef}
                local={false}
                // color={new THREE.Color("#40ccef").multiplyScalar(3.5)}
                color={trailColor}
              >
                <mesh
                  geometry={nodes.meshId5_name_5.geometry}
                  // material={neonActive ? neon : materials.blue}
                  material={neon}
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
