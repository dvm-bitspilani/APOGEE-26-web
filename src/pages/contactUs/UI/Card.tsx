import styles from "./Card.module.scss";
import type { Contact } from "../costaan";
import cardBorders from "/img/contacts/cardBorder.png";

export default function Card({
  contact,
  classname,
}: {
  contact: Contact;
  classname?: string;
}) {
  return (
    <div className={`${styles.card} ${classname ?? ""}`}>
      <img src={cardBorders} alt="card border" className={styles.borderIMG} />
      <img
        src={contact.photo}
        alt={contact.name}
        className={styles.contactIMG}
      />
      <p className={styles.dept}>{contact.dept}</p>
      <p className={styles.name}>{`[${contact.name}]`}</p>
      <div className={styles.contact}>
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => (window.location.href = `tel:${contact.phone}`)}
        >
          <path
            d="M15.7699 17.2876C13.7696 17.2876 11.8198 16.8272 9.92062 15.9065C8.02079 14.9864 6.33836 13.7699 4.87332 12.2569C3.40766 10.7445 2.22919 9.00778 1.33788 7.0466C0.445961 5.08606 0 3.07334 0 1.00844C0 0.720315 0.0930378 0.48021 0.279113 0.288126C0.465189 0.0960419 0.697784 0 0.976897 0H4.74493C4.96202 0 5.15585 0.0720314 5.32641 0.216094C5.49698 0.360157 5.59777 0.544238 5.62879 0.768336L6.23353 4.12981C6.26454 4.3539 6.26082 4.55783 6.22237 4.74159C6.18329 4.92599 6.09398 5.09022 5.95442 5.23429L3.72151 7.58732C4.37278 8.73982 5.18686 9.82029 6.16375 10.8287C7.14065 11.8372 8.21834 12.7096 9.39682 13.4459L11.5832 11.1889C11.7228 11.0448 11.9051 10.9366 12.1303 10.8643C12.3548 10.7926 12.5756 10.7727 12.7927 10.8047L16.0025 11.477C16.2196 11.525 16.3979 11.6329 16.5375 11.8007C16.677 11.9691 16.7468 12.1653 16.7468 12.3894V16.2791C16.7468 16.5672 16.6538 16.8073 16.4677 16.9994C16.2816 17.1915 16.049 17.2876 15.7699 17.2876Z"
            fill="#FEFFFF"
          />
        </svg>
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => (window.location.href = `mailto:${contact.email}`)}
        >
          <path
            d="M9.85106 9.72425L1.97021 4.32189V15.1266H19.7021C19.7021 16.3201 18.7346 17.2876 17.5412 17.2876H1.97021C1.4284 17.2876 0.964748 17.0761 0.579243 16.6533C0.193081 16.2298 0 15.7209 0 15.1266V2.16094C0 1.56668 0.193081 1.05778 0.579243 0.634237C0.964748 0.211412 1.4284 0 1.97021 0H17.7319C18.2737 0 18.7377 0.211412 19.1239 0.634237C19.5094 1.05778 19.7021 1.56668 19.7021 2.16094V15.1266H17.7319V4.32189L9.85106 9.72425ZM9.85106 7.56331L17.7319 2.16094H1.97021L9.85106 7.56331ZM1.97021 4.32189V2.16094V15.1266V8.64378V4.32189Z"
            fill="#FEFFFF"
          />
        </svg>
      </div>
    </div>
  );
}
