import React from "react";
import styles from "./Contact.module.scss";
import contacts from "../../../assets/images/contacts.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div style={{width: '40%', float: 'left'}}>
        <ContactForm />
      </div>
      <div style={{width: '60%', float: 'right'}}>
        right
      </div>

      <img src={contacts} />
    </div>
  );
};

export default Contact;
