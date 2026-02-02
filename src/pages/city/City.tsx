import { Canvas } from "@react-three/fiber";
import CityScene from "./components/CityScene/CityScene";
import CameraControllerLeva from "./components/leva/CameraControllerLeva/CameraControllerLeva";
import BloomLeva from "./components/leva/BloomLeva/BloomLeva";
export default function City() {
  return (
    <Canvas
      camera={{ position: [0, 3.2, -2] }}
      style={{ width: "100%", height: "100%" }}
    >
      <CameraControllerLeva />
      <CityScene />
      <BloomLeva />
    </Canvas>
  );
}
