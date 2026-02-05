import styles from "./ContactUs.module.scss"
import costaans from "./costaan"
import Card from "./UI/Card"
// import type { Contact } from "./costaan"
import Navbar from "../commonComponent/navbar/navbar"


export default function ContactUs() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.title}>
                <p className={styles.titleText}>Contact Us</p>
            </div>
            {costaans.map((costaan, i) => (
                <Card key={i} contact={costaan} />
            ))}
        </div>
    )
}