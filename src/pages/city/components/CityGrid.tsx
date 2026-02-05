import { Model } from "./models/Model"

const GRID = 1
const SPACING = 100

export default function CityGrid() {
  const positions: [number, number, number][] = []

  for (let x = 0; x < GRID; x++) {
    for (let z = 0; z < GRID; z++) {
      positions.push([
        (x - (GRID - 1)/2) * SPACING,
        0,
        (z - (GRID - 1)/2) * SPACING,
      ])
    }
  }

  return (
    <>
      {/* {positions.map((pos, i) => ( */}
        {/* <group key={i} position={pos}> */}
        <group>
          <Model />
        </group>
      {/* ))} */}
    </>
  )
}
