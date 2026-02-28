import StarJunction from "./models/StarJunstion3";
import { editable as e } from "@theatre/r3f";

export default function Constellation() {
  return (
    <e.group theatreKey="Constellation" scale={1.5} position={[1.5, -4.5, 13.5]} scene>
      <StarJunction />
    </e.group>
  )
}
