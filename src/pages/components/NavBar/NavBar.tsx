import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavLink({ to, children }: {to: string, children: React.ReactNode }) {

    const navigate = useNavigate();

    return (
        <div className={styles.navLink} onClick={() => navigate(to)}>
            {children}
        </div>
    )
    
}

export default function NavBar() {

    const location = useLocation();

    return (
        <div className={styles.navbar}>
            <div className={styles.titleLogo}>

            </div>
            <div className={styles.navLinks}>
                <NavLink to="/city" >Home</NavLink>
                <NavLink to="/about" >About Us</NavLink>
                <NavLink to="/events" >Events</NavLink>
                <NavLink to="/contact" >Contact Us</NavLink>
                <NavLink to="/speakers" >Speakers</NavLink>
            </div>
            <div className={styles.socialLinks}>
                
            </div>
        </div>
    )
}
