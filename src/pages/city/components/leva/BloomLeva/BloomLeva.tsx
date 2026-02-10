// components/leva/BloomLeva.tsx
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import {
  BloomEffect,
  EffectPass,
  KernelSize,
  EffectComposer as PostEffectComposer,
  RenderPass,
} from "postprocessing";
import { useEffect, useMemo, useRef } from "react";
import { HalfFloatType } from "three";
import { useScrollVelocityStore } from "../../../../../utils/store";
import { MotionBlurEffect } from "../../config/MotionBlurEffect";

export default function BloomLeva() {
  const { gl, scene, camera, size } = useThree();
  const motionBlurRef = useRef<MotionBlurEffect>(null!);

  const bloom = useControls("Bloom", {
    intensity: { value: 6.61, min: 0, max: 50, step: 0.01 },
    threshold: { value: 1.34, min: 0, max: 5, step: 0.01 },
    smoothing: { value: 0.9, min: 0, max: 1, step: 0.01 },
    mipmapBlur: true,
  });

  const { composer, bloomEffect, motionBlur } = useMemo(() => {
    const composer = new PostEffectComposer(gl, {
      frameBufferType: HalfFloatType,
    });

    const bloomEffect = new BloomEffect({
      intensity: bloom.intensity,
      luminanceThreshold: bloom.threshold,
      luminanceSmoothing: bloom.smoothing,
      kernelSize: KernelSize.LARGE,
      mipmapBlur: bloom.mipmapBlur,
    });

    const motionBlur = new MotionBlurEffect();
    motionBlurRef.current = motionBlur;

    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new EffectPass(camera, bloomEffect));
    composer.addPass(new EffectPass(camera, motionBlur));

    return { composer, bloomEffect, motionBlur };
  }, [gl, scene, camera]);

  // Update bloom from Leva controls
  useEffect(() => {
    bloomEffect.intensity = bloom.intensity;
    bloomEffect.luminanceMaterial.threshold = bloom.threshold;
    bloomEffect.luminanceMaterial.smoothing = bloom.smoothing;
  }, [bloomEffect, bloom.intensity, bloom.threshold, bloom.smoothing]);

  // Handle resize
  useEffect(() => {
    composer.setSize(size.width, size.height);
  }, [composer, size]);

  // Cleanup
  useEffect(() => {
    return () => composer.dispose();
  }, [composer]);

  // Render loop
  useFrame((_state, delta) => {
    const velocity = useScrollVelocityStore.getState().velocity;
    motionBlur.strength = velocity * 0.15;
    composer.render(delta);
  }, 1);

  return null;
}
