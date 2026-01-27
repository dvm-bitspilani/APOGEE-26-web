import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Instances, Model } from "./Model";

export default function City() {
    return (
        <Canvas
                camera={{ position: [0, 0, 5] }}
                style={{ width: "100%", height: "100%" }}
              >
                <OrbitControls/>

                {import.meta.env.DEV && <Perf position="top-left" />}
                <ambientLight intensity={0.9} />
                <Instances>
                  <Model />
                </Instances>
              </Canvas>
    )
}