import { useCurrentSectionStore, useModalStore, useScrollLockStore } from "../../../../utils/store";
import ComingSoon from "../../../comingSoon/ComingSoon";
// import ContactUs from "../../../contactUs/ContactUs";
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
                {currentsection==="about" ?(<ComingSoon/>):
                currentsection === "contact" ? (
        //   <div className={styles.contactus}>
            <ComingSoon />
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
