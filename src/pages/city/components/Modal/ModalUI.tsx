import ComingSoon from "../../../comingSoon/ComingSoon";
import styles from "./Modal.module.scss";

interface ModalUIProps {
    children?: React.ReactNode;
    isModalActive: boolean;
    setModalActive?: (active: boolean) => void;
    onClick?: () => void;
}

export default function ModalUI({ children, isModalActive, setModalActive, onClick }: ModalUIProps) {
    return (
        <div className={`${styles.modalOverlay} ${!isModalActive ? styles.hiddenModal : styles.showModal}`}>
            <div className={styles.modal}>
                <div className={styles.modalContent} onClick={onClick}>
                    {children || <ComingSoon />}
                    <div className={styles.modalCloseButton} onClick={() => setModalActive && setModalActive(false)} />
                </div>
                <div className={styles.backgroundlite} />
            </div>
        </div>
    )
}
