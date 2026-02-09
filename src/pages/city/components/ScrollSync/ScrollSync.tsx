import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { sheet } from "../../theatre";
import { getProject } from "@theatre/core";

import state from "../../state5.json";
export const project = getProject("City Project", { state });
export const sheet = project.sheet("Cyber City");
export default function ScrollSync() {
  const scroll = useScroll();
  useFrame(() => {
    // Calculate the sequence position based on scroll offset
    // Using a fixed sequence length of 10 for consistency, or we can use sheet.sequence.length
    // if that is available and reliable. For now, let's assume we want to map full scroll
    // to to the sequence length.

    // Check if the sequence exists and has a length, otherwise default to 10
    const sequenceLength = 20;

    // Update the sequence position
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return null;
}
