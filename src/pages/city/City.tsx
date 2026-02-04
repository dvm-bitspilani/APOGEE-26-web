import { Canvas } from "@react-three/fiber";
import CityScene from "./components/CityScene/CityScene";
import CameraControllerLeva from "./components/leva/CameraControllerLeva/CameraControllerLeva";
import BloomLeva from "./components/leva/BloomLeva/BloomLeva";
import ReactHelmet from "../components/ReactHelmet";
import ScrollReminder from "./components/ScrollReminder/ScrollReminder";
// import { Html } from "@react-three/drei";
import styles from "./City.module.scss";
import { OrbitControls } from "@react-three/drei";
// import FogPlane from "./components/FogPlane";
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
          camera={{ position: [0,2, -2],near: 0.1, far: 1000000, fov: 50, }}
          style={{ width: "100%", height: "100%" }}
          
        >
         <CameraControllerLeva />
         <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            distance={0.5}
            intensity={10.5}/>
          {/* <OrbitControls/> */}
          {/* If enabling OrbitControls, disable the CameraControllerLeva here and useHoverCamera, useCityLandingSTrat and useKeyboard control */}
          <spotLight
            position={[0, 5, 0]}
            // angle={0.3}
            color={"#61bbf7"}
            // distance={0.5}
            intensity={100.5}/>
             {/* <spotLight 
            position={[0, 500*15, 141*15]}
            // angle={0.3}
            distance={5000}
            angle={4000}
            color={"purple"}
            intensity={1000000000000.5}/> */}
          <OrbitControls/>
          <CityScene />
          <BloomLeva />
           {/* <FogPlane /> */}
        </Canvas>
        {/* <Html> */}
        <ScrollReminder />
        {/* </Html> */}
      </div>
    </>
  );
}
