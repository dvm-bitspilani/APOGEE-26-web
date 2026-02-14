import { Bloom, EffectComposer } from "@react-three/postprocessing";
import MotionBlur from "./MotionBlur";

export default function BloomFinal() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={6.61}
        luminanceThreshold={1.34}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <MotionBlur maxIntensity={1.5} />
    </EffectComposer>
  );
}
