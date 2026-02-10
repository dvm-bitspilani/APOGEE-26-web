import { useModalStore, useScrollLockStore } from "../../../../utils/store";
import styles from "./Modal.module.scss";

export default function Modal({children}: {children?: React.ReactNode}) {

    const closeModal = useModalStore((s) => s.closeModal);
    const scrollUnlock = useScrollLockStore((s) => s.unlock);

    const proceed = () => {
        closeModal();
        scrollUnlock();
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal} onClick={proceed}>
                {children}
            </div>
        </div>
    )
}
