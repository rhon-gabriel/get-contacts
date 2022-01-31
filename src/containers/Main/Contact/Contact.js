import React from "react";
import styles from "./Contact.module.scss";
import contacts from "../../../assets/images/contacts.png";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo"

const Contact = () => {
  return (
    <div className={styles.container}>
      <img src={contacts} />
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
      <div className={styles.contactInfo}>
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
