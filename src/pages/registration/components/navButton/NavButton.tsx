import type { ReactElement } from "react";
import styles from "./NavButton.module.scss";
import btnFrame from "/svg/registrations/btnFrame.svg";
import btnInternal from "/svg/registrations/btnInternal.min.svg";

interface NavButtonProps {
    outerClass?: string;
    innerClass?: string;
    children?: string | ReactElement | ReactElement[];
    onClick?: (args: any) => void;
}

export default function NavButton({ children, onClick, outerClass = "", innerClass = "" }: NavButtonProps) {

    return (
        <div className={styles.buttonContainer + " " + outerClass}>
            <div className={styles.customBtnWrapper} onClick={onClick}>
                <div className={styles.btnSomething}>
                    <img
                        src={btnFrame}
                        className={styles.leftFrame}
                        alt="frame"
                    />
                    <img
                        src={btnFrame}
                        className={styles.rightFrame}
                        alt="frame"
                    />
                    <div className={styles.content}>
                        <img
                            src={btnInternal}
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
