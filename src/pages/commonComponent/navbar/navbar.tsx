import styles from "./navbar.module.scss"

export default function Navbar() {
    return (
        <div className={styles.container}>

            <div className={styles.links}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Events</a>
                <a href="#">Contact Us</a>
                <a href="#">Speaker</a>
            </div>
        </div>
    )
}