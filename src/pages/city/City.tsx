import { Canvas } from "@react-three/fiber";
import CityScene from "./components/CityScene/CityScene";
import CameraControllerLeva from "./components/leva/CameraControllerLeva/CameraControllerLeva";
import BloomLeva from "./components/leva/BloomLeva/BloomLeva";
import ReactHelmet from "../components/ReactHelmet";
import ScrollReminder from "./components/ScrollReminder/ScrollReminder";
// import { Html } from "@react-three/drei";
import styles from "./City.module.scss";
import { OrbitControls } from "@react-three/drei";
export default function City() {
  return (
    <>
      <ReactHelmet
        title="APOGEE 2026 | Home"
        description="Explore the city of APOGEE 2026."
        url="https://www.bits-apogee.org/city"
      />
      <div className={styles.city}>
        <Canvas
          camera={{ position: [0,2, -2],near: 0.1, far: 10000, fov: 50, }}
          style={{ width: "100%", height: "100%" }}
          
        >
         <CameraControllerLeva />
          {/* <OrbitControls/> */}
          <CityScene />
          <BloomLeva />
        </Canvas>
        {/* <Html> */}
        <ScrollReminder />
        {/* </Html> */}
      </div>
    </>
  );
}
