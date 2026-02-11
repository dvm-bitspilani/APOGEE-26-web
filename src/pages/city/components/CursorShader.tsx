import * as THREE from "three";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function CursorShader() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, camera } = useThree();

  // Load cursor texture
  const texture = useLoader(THREE.TextureLoader, "/cursor.png");
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.premultiplyAlpha = true;

  const mouse = useRef(new THREE.Vector2(0, 0));
  const target = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current.set(
        (e.clientX / size.width) * 2 - 1,
        -(e.clientY / size.height) * 2 + 1
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [size]);

  useFrame(() => {
    if (!meshRef.current) return;

    mouse.current.lerp(target.current, 0.3);

    const ndc = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.1);
    ndc.unproject(camera);

    const dir = ndc.sub(camera.position).normalize();
    const pos = camera.position.clone().add(dir.multiplyScalar(2));

    meshRef.current.position.copy(pos);
    meshRef.current.quaternion.copy(camera.quaternion);
  });

  return (
    <mesh ref={meshRef} renderOrder={9999}>
      {/* Adjust size to match real cursor */}
      <planeGeometry args={[0.35, 0.35]} />

      <meshBasicMaterial
        map={texture}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}
