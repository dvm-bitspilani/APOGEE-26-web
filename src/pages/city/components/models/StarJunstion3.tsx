
import { Clone, useGLTF } from '@react-three/drei'
import { type GLTFResult } from '../../types/starJunction.types';
const BLOCKS = 4;
const SPACING = 44.1;
const positions: [number, number, number][] = Array(BLOCKS).fill(0).map((_, i) => [0, 0.01 * (i % 2), i * SPACING])
export default function StarJunction() {
  // const { nodes, materials } = useGLTF('/models/city10feb-transformed.glb') as unknown as GLTFResult
  const { scene } = useGLTF('/models/city34-transformed.glb') as unknown as GLTFResult
// useEffect(() => {
//     scene.traverse((obj) => {
//       console.log(obj)
//         obj.matrixAutoUpdate = false
//         obj.updateMatrix()
        
//     })
//   }, [scene]).
  return (
    positions.map((pos, i) => (
      <Clone key={i} object={scene} dispose={null} scale={[1.5, 1.5, 1.5]} rotation={[0, Math.PI / 2, 0]} position={pos} />
    ))
  )
}
useGLTF.preload('/models/city34-transformed.glb')
