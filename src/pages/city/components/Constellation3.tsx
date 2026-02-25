import StarJunction from "./models/StarJunstion3";
import { editable as e } from "@theatre/r3f";

export default function Constellation() {
  return (
    <e.group theatreKey="Constellation" scale={1.5} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      <StarJunction />
    </e.group>
  )
}
