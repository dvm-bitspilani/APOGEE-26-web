import { StarJunction } from "./models/StarJunction";
import { editable as e } from "@theatre/r3f";

const BLOCKS = 1
const SPACING = 100
const scaleFactor = [0.1,0.1,0.1]

export default function Constellation() {
    const positions: [number, number, number][] = [];

    for (let block = 0; block < BLOCKS; block++) {
        positions.push([
            block*SPACING,
            0,
            0
        ])
    }

    return (
        <e.group theatreKey="Constellation" scale={scaleFactor} position={[0*scaleFactor[0], 0*scaleFactor[1], 0*scaleFactor[2]]}>
            {
                positions.map((pos, i) => 
                    <group key={i} position={pos}>
                        <StarJunction />
                    </group>
                )
            }
        </e.group>
    )
}