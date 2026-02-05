import styles from "../ContactUs.module.scss"
import type { Contact } from "../costaan"

export default function Card({ key, contact }: { key: number; contact: Contact }) {
    return (
        <div className={styles.card} key={key}>
            <img src={contact.photo} alt={contact.name} />
            <p>{contact.name}</p>
            <p>{contact.dept}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    )
}
