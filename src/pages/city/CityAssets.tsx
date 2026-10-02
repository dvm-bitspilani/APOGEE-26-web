import { useGLTF } from "@react-three/drei";
import type { ReactNode } from "react";
import car from "../../assets/3d/landing/car5.0-transformed.glb";

// Read the same individual loader cache entries as the scene, in the DOM
// root. Failed GLBs are caught by the route boundary before Fiber is created.
export default function CityAssets({ children }: { children: ReactNode }) {
  useGLTF("/models/city33-transformed.glb");
  useGLTF(car, true);
  useGLTF("/models/onlyglobe-v1.glb");
  useGLTF("/models/dvmlogowide-v1.glb");
  useGLTF("/models/cone.glb");
  return children;
}
