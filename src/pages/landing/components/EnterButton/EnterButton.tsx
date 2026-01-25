import { useCameraPhase } from "../../../../utils/store";
import styles from "./EnterButton.module.scss";

export default function EnterButton() {
  const phase = useCameraPhase((s) => s.phase);
  const setPhase = useCameraPhase((s) => s.setPhase);

  if (phase !== "free") return null;

  return (
    <button className={styles.EnterBtn} onClick={() => setPhase("return")}>
      Enter Site
    </button>
  );
}
