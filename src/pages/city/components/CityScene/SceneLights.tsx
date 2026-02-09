import { editable as e } from '@theatre/r3f';
  // const color ="rgb(172, 33, 207,100)"
export default function SceneLights() {
  return (
  <>
      <e.group theatreKey={"SpotLights"}>
        <spotLight position={[0, -10.53, 0]} lookAt={[0.5, -5, 50]} color={"rgba(172, 33, 207,200)"} distance={1000} intensity={8000} />
      </e.group>
      
      <e.group theatreKey={"SceneLights"}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0.1, 1, 0.1]} color={"purple"} intensity={10} />
      </e.group>
      </>
  );
}
