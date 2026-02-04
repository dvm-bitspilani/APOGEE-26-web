import type { ReactElement } from "react";
import styles from "./NavButton.module.scss";

interface NavButtonProps {
    outerClass?: string;
    innerClass?: string;
    children?: string | ReactElement | ReactElement[];
    onClick?: (args: any) => void;
}

export default function NavButton({children, onClick, outerClass = "", innerClass = ""}: NavButtonProps) {

    return (
        <div className={styles.buttonContainer + " " + outerClass}>
            <div className={styles.customBtnWrapper} onClick={onClick}>
                <div className={styles.btnSomething}>
                    <img
                        src="/svg/registrations/btnFrame.svg"
                        className={styles.leftFrame}
                        alt="frame"
                    />
                    <img
                        src="/svg/registrations/btnFrame.svg"
                        className={styles.rightFrame}
                        alt="frame"
                    />
                    <div className={styles.content}>
                        <img
                            src="/svg/registrations/btnInternal.svg"
                            className={styles.btnInternal}
                            alt="bg"
                        />
                        <div className={styles.btnContent + " " + innerClass}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
