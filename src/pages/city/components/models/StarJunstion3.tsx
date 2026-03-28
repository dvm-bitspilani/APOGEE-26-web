
import { Clone, useGLTF } from '@react-three/drei'
import { type GLTFResult } from '../../types/starJunction.types';
// import { CityModel } from './Citywithoutglobe';

const BLOCKS = 10;
const SPACING = 44.1;
const positions: [number, number, number][] = Array(BLOCKS).fill(0).map((_, i) => [0, 0.01 * (i % 2), i * SPACING])

export default function StarJunction() {
  // const { nodes, materials } = useGLTF('/models/city10feb-transformed.glb') as unknown as GLTFResult
  const { scene } = useGLTF('/models/city31-transformed.glb') as unknown as GLTFResult

  return (
    positions.map((pos, i) => (
      <Clone key={i} object={scene} dispose={null} scale={[1.5, 1.5, 1.5]} rotation={[0, Math.PI / 2, 0]} position={pos} />
    ))
  )
}
// export default function StarJunction() {
//   return (
//     <>
//       {positions.map((pos, i) => (
//         <CityModel key={i} position={pos} scale={1.5} rotation={[0, Math.PI / 2, 0]}/>
//       ))}
//     </>
//   )
// }
useGLTF.preload('/models/city31-transformed.glb')
