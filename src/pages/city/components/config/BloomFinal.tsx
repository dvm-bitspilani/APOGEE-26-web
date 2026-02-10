import { useFrame, useThree } from "@react-three/fiber";
import {
  BloomEffect,
  EffectPass,
  KernelSize,
  EffectComposer as PostEffectComposer,
  RenderPass,
} from "postprocessing";
import { useEffect, useMemo, useRef } from "react";
import { HalfFloatType } from "three";
import { useScrollVelocityStore } from "../../../../utils/store";
import { MotionBlurEffect } from "./MotionBlurEffect";

export default function BloomFinal() {
  const { gl, scene, camera, size } = useThree();
  const motionBlurRef = useRef<MotionBlurEffect>(null!);

  const { composer, motionBlur } = useMemo(() => {
    const composer = new PostEffectComposer(gl, {
      frameBufferType: HalfFloatType,
    });

    const bloom = new BloomEffect({
      intensity: 6.61,
      luminanceThreshold: 1.34,
      luminanceSmoothing: 0.9,
      kernelSize: KernelSize.LARGE,
      mipmapBlur: true,
    });

    const motionBlur = new MotionBlurEffect();
    motionBlurRef.current = motionBlur;

    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new EffectPass(camera, bloom));
    composer.addPass(new EffectPass(camera, motionBlur));

    return { composer, motionBlur };
  }, [gl, scene, camera]);

  // Handle resize
  useEffect(() => {
    composer.setSize(size.width, size.height);
  }, [composer, size]);

  // Cleanup
  useEffect(() => {
    return () => composer.dispose();
  }, [composer]);

  // Render loop — priority 1 to run AFTER default R3F render
  useFrame((_state, delta) => {
    const velocity = useScrollVelocityStore.getState().velocity;
    motionBlur.strength = velocity * 0.15;
    composer.render(delta);
  }, 1);

  return null;
}
