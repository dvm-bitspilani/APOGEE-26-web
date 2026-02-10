import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import debugFunctions from "../../../../utils/debug";
import { useCityKeyboardControl } from "../../hooks/useCityKeyboardControl";
import FinalProdConfig from "../config/FinalProdConfig";
import CombinedLeva from "../leva/CombinedLeva";
export default function SceneDevOrProd() {
  if (import.meta.env.DEV) {
    debugFunctions();
    studio.initialize();
    studio.extend(extension);
    useCityKeyboardControl();
    return (
      <>
        {/* <Perf position="top-left" /> */}
        <CombinedLeva />
      </>
    );
  }

  return <FinalProdConfig />;
}
