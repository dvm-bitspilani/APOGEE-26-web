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
                <div className= {styles.backgroundlite}>
                {/* <ContactUs/> */}
                {/* <svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <path d="M50 10 L150 10 L160 2 L640 2 L650 10 L750 10 L790 50 L790 450 L750 490 L50 490 L10 450 L10 50 L50 10 Z" 
        stroke="#00F3FF" stroke-width="3" fill="none" filter="url(#glow)" />
  
  <path d="M30 10 L10 10 L10 30" stroke="#00F3FF" stroke-width="2" />
  <path d="M770 10 L790 10 L790 30" stroke="#00F3FF" stroke-width="2" />
  <path d="M10 470 L10 490 L30 490" stroke="#00F3FF" stroke-width="2" />
  <path d="M790 470 L790 490 L770 490" stroke="#00F3FF" stroke-width="2" />
  
  <path d="M10 200 L18 200 L18 300 L10 300" stroke="#00F3FF" stroke-width="2" />
  <path d="M790 200 L782 200 L782 300 L790 300" stroke="#00F3FF" stroke-width="2" />
</svg> */}
                </div>
            </div>
        </div>
    )
}
