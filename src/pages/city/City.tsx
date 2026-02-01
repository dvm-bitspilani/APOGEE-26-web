import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Instances, Model } from "./Model";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";
import Scene from "../landing/components/Scene/Scene";
import { useRef, useState } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
export default function City() {
  // @ts-ignore
   const [page, setPage] = useState(0);
  // const introDone = useIntroStore((s) => s.introDone);
  const orbitRef = useRef<OrbitControlsImpl>(null);
  const bloom = useControls("Bloom", {
    intensity: { value: 5.0, min: 0, max: 50, step: 0.1 },
    threshold: { value: 0.2, min: 0, max: 1, step: 0.01 },
    smoothing: { value: 0.9, min: 0, max: 1, step: 0.01 },
    mipmapBlur: true,
  });
    return (
        <Canvas
                camera={{ position: [0, 2, -2] }}
                style={{ width: "100%", height: "100%" }}
              >
                <color attach="background" args={["#110013"]} />
                <OrbitControls/>

                {import.meta.env.DEV && <Perf position="top-left" />}
                <ambientLight intensity={0.5} />
                <Instances>
                  <Model />
                  <Scene  orbitRef={orbitRef}
            // introDone={introDone}
            // setIntroDone={setIntroDone}
            setPage={setPage}/>
                </Instances>
                <EffectComposer>
        <Bloom
            intensity={bloom.intensity}
            luminanceThreshold={bloom.threshold}
            luminanceSmoothing={bloom.smoothing}
            mipmapBlur={bloom.mipmapBlur}
          />
      </EffectComposer>
              </Canvas>
    )
}