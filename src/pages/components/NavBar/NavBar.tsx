import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { FaInstagram, } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

function NavLink({ to, label }: { to: string, label: string }) {

    const navigate = useNavigate();

    return (
        <a className={styles.navLink} onClick={() => navigate(to)}>
            {
                ["[", ...label.split(""), "]"].map((char, index) => (
                    <span key={index} className={styles.navLinkChar}>{char}</span>
                ))
            }
        </a>
    )

}

export default function NavBar() {

    // const location = useLocation();

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <div className={styles.titleLogo}>
                    <img className={styles.logo} src="/img/apogee26_theme.png" alt="Logo" />
                </div>
                <div className={styles.navlinks}>
                    <NavLink to="/city" label="Home" />
                    <NavLink to="/about" label="About" />
                    <NavLink to="/events" label="Events" />
                    <NavLink to="/contact" label="Contact   Us" />
                    <NavLink to="/speakers" label="Speakers" />
                </div>
                <div className={styles.socialLinks}>
                    <div className={styles.socialLinkContainer}>
                        <a className={styles.socialLink} >
                            <FaInstagram className={styles.socialIcon} />
                        </a>
                    </div>
                    <div className={styles.socialLinkContainer}>
                        <a className={styles.socialLink} >
                            <FaLinkedin className={styles.socialIcon} />
                        </a>
                    </div>
                    <div className={styles.socialLinkContainer}>
                        <a className={styles.socialLink} >
                            <FaXTwitter className={styles.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
