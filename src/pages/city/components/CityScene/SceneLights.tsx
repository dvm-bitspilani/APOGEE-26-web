// SceneLights.jsx
export default function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} />
    </>
  );
}
