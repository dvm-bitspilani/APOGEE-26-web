import { useCurrentSectionStore, useModalStore, useScrollLockStore } from "../../../../utils/store";
import ContactUs from "../../../contactUs/ContactUs";
// import ContactUs from "../../../contactUs/ContactUs";
import styles from "./Modal.module.scss";

export default function Modal({children}: {children?: React.ReactNode}) {

    const closeModal = useModalStore((s) => s.closeModal);
    const scrollUnlock = useScrollLockStore((s) => s.unlock);
    const currentsection= useCurrentSectionStore((s) =>s.currentSection);
    const proceed = () => {
        closeModal();
        scrollUnlock();
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal} onClick={proceed}>
                {currentsection === "contact" ? (
        //   <div className={styles.contactus}>
            <ContactUs />
        //   </div>
        ) : (
          // Otherwise render children if passed
          children
        )}
                {/* <div className={styles.contactus}>
                <ContactUs/>
                </div> */}
                <div className= {styles.backgroundlite}>
                {/* <ContactUs/> */}
                </div>
            </div>
        </div>
    )
}
