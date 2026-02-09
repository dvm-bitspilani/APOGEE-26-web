import { Perf } from "r3f-perf";
import CombinedLeva from "../leva/CombinedLeva";
import FinalProdConfig from "../config/FinalProdConfig";
import debugFunctions from "../../../../utils/debug";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { useCityKeyboardControl } from "../../hooks/useCityKeyboardControl";
export default function SceneDevOrProd() {
  if (import.meta.env.DEV) {
    debugFunctions();
    studio.initialize();
    studio.extend(extension);
    useCityKeyboardControl();
    return (
      <>
        <Perf position="bottom-left" />
        {/* <CombinedLeva /> */}
      </>
    );
  }

  return <FinalProdConfig />;
}
