import { Perf } from "r3f-perf";
import CombinedLeva from "../leva/CombinedLeva";
import FinalProdConfig from "../config/FinalProdConfig";

export default function SceneDevOrProd() {
  if (import.meta.env.DEV) {
    return (
      <>
        <Perf position="top-left" />
        <CombinedLeva />
      </>
    );
  }

  return <FinalProdConfig />;
}
