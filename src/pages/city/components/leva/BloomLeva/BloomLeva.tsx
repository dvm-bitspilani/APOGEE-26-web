// components/leva/BloomLeva.tsx
// import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";
import { EffectComposer, Bloom} from "@react-three/postprocessing";
// import { BlendFunction } from "postprocessing";

export default function BloomLeva() {
  const bloom = useControls("Bloom", {
    intensity: { value: 5, min: 0, max: 50, step: 0.1 },
    threshold: { value: 0.2, min: 0, max: 1, step: 0.01 },
    smoothing: { value: 0.9, min: 0, max: 1, step: 0.01 },
    mipmapBlur: true,
  });

  return (
    <EffectComposer>
      <Bloom
        intensity={bloom.intensity}
        luminanceThreshold={bloom.threshold}
        luminanceSmoothing={bloom.smoothing}
        mipmapBlur={bloom.mipmapBlur}
         blurPass={undefined}
      />
      {/* <Depth
      
        focusDistance={-100}
        focalLength={200}
        // blendFunction={BlendFunction.NORMAL}
        // color="#0a0a0a"
        // near={5}
        // far={50}
      /> */}
    </EffectComposer>
  );
}
