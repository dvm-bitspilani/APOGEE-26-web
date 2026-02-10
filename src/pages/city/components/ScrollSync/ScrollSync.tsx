import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { useRef } from "react";
import { MathUtils } from "three";
import { useScrollVelocityStore } from "../../../../utils/store";

import state from "../../state2.json";
export const project = getProject("City Project", { state });
export const sheet = project.sheet("Cyber City");

// Timeline phases where the car is moving
const MOVING_PHASES: [number, number][] = [
  [0, 4], // first movement phase
  [6, 10], // second movement phase
];

function isMovingPhase(timelinePos: number): boolean {
  return MOVING_PHASES.some(
    ([start, end]) => timelinePos >= start && timelinePos <= end,
  );
}

export default function ScrollSync() {
  const scroll = useScroll();
  const prevOffset = useRef(0);
  const smoothVelocity = useRef(0);
  const setVelocity = useScrollVelocityStore((s) => s.setVelocity);

  useFrame((_state, delta) => {
    const sequenceLength = 10;
    const timelinePos = scroll.offset * sequenceLength;

    // Update the Theatre.js sequence position
    sheet.sequence.position = timelinePos;

    // Compute raw scroll velocity (change in offset per second)
    const rawVelocity =
      Math.abs(scroll.offset - prevOffset.current) / Math.max(delta, 0.001);
    prevOffset.current = scroll.offset;

    // Only apply motion blur during moving phases
    const targetVelocity = isMovingPhase(timelinePos)
      ? Math.min(rawVelocity, 1.0)
      : 0;

    // Smooth the velocity with lerp (fast attack, slower decay)
    const lerpFactor = targetVelocity > smoothVelocity.current ? 0.3 : 0.08;
    smoothVelocity.current = MathUtils.lerp(
      smoothVelocity.current,
      targetVelocity,
      lerpFactor,
    );

    // Kill tiny values to avoid permanent micro-blur
    if (smoothVelocity.current < 0.005) smoothVelocity.current = 0;

    setVelocity(smoothVelocity.current);
  });

  return null;
}
