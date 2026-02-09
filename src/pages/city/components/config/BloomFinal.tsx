import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function BloomFinal() {
  return (
    <EffectComposer>
      <Bloom
        intensity={6.61}
        luminanceThreshold={1.34}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
    </EffectComposer>
  );
}
