import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export type InfernusRef = React.RefObject<THREE.Group>;
export type OrbitRef = React.RefObject<OrbitControlsImpl | null>;

export type CarControllerProps = {
  infernusRef: InfernusRef;
  orbitRef: OrbitRef;
  // introDone: boolean;
  // setIntroDone: (v: boolean) => void;
  setPage: (p: number) => void;
};

export type SceneProps = {
  orbitRef: OrbitRef;
  // introDone: boolean;
  // setIntroDone: (v: boolean) => void;
  setPage: (p: number) => void;
};
