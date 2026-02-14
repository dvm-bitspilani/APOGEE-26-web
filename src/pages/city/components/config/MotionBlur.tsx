import { useFrame } from "@react-three/fiber";
import { forwardRef, useMemo, useRef } from "react";
import { useScrollVelocityStore } from "../../../../utils/store";
import { MotionBlurEffect } from "./MotionBlurEffect";

type MotionBlurProps = {
  /** Multiplier for blur strength. Default: 1.5 */
  maxIntensity?: number;
};

/**
 * Scroll-velocity–driven radial motion blur.
 *
 * Auto-disables the effect when not scrolling so the GPU
 * skips the shader pass entirely (biggest perf win).
 */
const MotionBlur = forwardRef<MotionBlurEffect, MotionBlurProps>(
  ({ maxIntensity = 1.5 }, ref) => {
    const effect = useMemo(() => new MotionBlurEffect(), []);
    const smoothed = useRef(0);

    useFrame(() => {
      const velocity = useScrollVelocityStore.getState().velocity;
      const target = Math.min(velocity * maxIntensity, 8);

      // Smooth transition
      smoothed.current += (target - smoothed.current) * 0.15;

      // Disable effect entirely when blur is negligible — the
      // EffectPass skips disabled effects, saving a full shader pass.
      const active = smoothed.current > 0.01;
      if (effect.enabled !== active) {
        effect.enabled = active;
      }

      if (active) {
        effect.intensity = smoothed.current;
      }
    });

    return <primitive ref={ref} object={effect} dispose={null} />;
  },
);

MotionBlur.displayName = "MotionBlur";
export default MotionBlur;
