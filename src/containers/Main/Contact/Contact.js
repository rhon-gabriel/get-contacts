import React from "react";
import styles from "./Contact.module.scss";
import contacts from "../../../assets/images/contacts.png";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
      <div className={styles.contactInfo}>
        <ContactInfo />
      </div>
      <img src={contacts} alt="contacts" />
    </div>
  );
};

export default Contact;
