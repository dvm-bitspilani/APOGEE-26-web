import { editable as e } from '@theatre/r3f';

export default function SceneLights() {

  return (
    <>
      <e.group theatreKey={"SpotLights"}>
        <spotLight position={[0.5, 0, 50]} lookAt={[0.5, -5, 50]} color={"rgba(255,255,255,100)"} distance={1000} intensity={1000} />
      </e.group>
      <e.group theatreKey={"SceneLights"}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0.1, 1, 0.1]} color={"purple"} intensity={0.5} />
      </e.group>
      </>
  );
}
