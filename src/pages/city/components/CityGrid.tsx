import { Model } from "./models/Model"

const GRID = 3
const SPACING = 100

export default function CityGrid() {
  const positions: [number, number, number][] = []

  for (let x = 0; x < GRID; x++) {
    for (let z = 0; z < GRID; z++) {
      positions.push([
        (x - 1) * SPACING,
        0,
        (z - 1) * SPACING,
      ])
    }
  }

  return (
    <>
      {positions.map((pos, i) => (
        <group key={i} position={pos}>
          <Model />
        </group>
      ))}
    </>
  )
}
