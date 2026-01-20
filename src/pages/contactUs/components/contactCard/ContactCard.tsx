import styles from "./ContactCard.module.scss";

interface ContactCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  photo: string;
}

const ContactCard = ({ name, role, photo }: ContactCardProps) => {
  return (
    <div className={styles.card}>
      <img src={photo} alt={`${name}'s photo`} className={styles.photo} />
      <div className={styles.info}>
        <p className={styles.role}>{role}</p>
        <h2 className={styles.name}>{name}</h2>
        {/* <p className={styles.email}>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p className={styles.phone}>
        Phone: <a href={`tel:${phone}`}>{phone}</a>
      </p> */}
      </div>
    </div>
  );
};
export default ContactCard;
