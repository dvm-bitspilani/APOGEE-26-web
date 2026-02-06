import { Center } from "@react-three/drei";
import { StarJunction } from "./models/StarJunction";
import { editable as e } from "@theatre/r3f";

const BLOCKS = 1
const SPACING = 100
const scaleFactor = [1,1,1]
const position = [-3.6, 274.2, 456.0]
const effectivePosition = [-position[0]*scaleFactor[0], -position[1]*scaleFactor[1], -position[2]*scaleFactor[2]]

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
        <Center>
            <e.group theatreKey="Constellation" scale={scaleFactor} position={effectivePosition} rotation={[-Math.PI/2, 0, Math.PI/2]}>
                {
                    positions.map((pos, i) => 
                        <group key={i} position={pos}>
                            <StarJunction />
                        </group>
                    )
                }
            </e.group>
        </Center>
    )
}