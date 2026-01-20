import styles from "./ContactUs.module.scss";
import ContactCard from "./components/contactCard/ContactCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import header_svg from "/svgs/contact-us/header.svg";
import contactData from "./costans";

function ContactUs() {

  return (
    <div className={styles.container}>
      <img src={header_svg} alt="header" className={styles.header} />
      <main className={styles.mainContent}>
        {/* <Sidebar /> */}

        <div className={styles.contactGrid}>
          {contactData.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ContactUs;
