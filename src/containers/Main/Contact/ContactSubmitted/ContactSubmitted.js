import React from "react";
import styles from "./ContactSubmitted.module.scss";

const ContactSubmitted = ({ contact }) => {
  return (
    <div className={styles.container}>
      <h3>Thanks for submitting the form</h3>
      <p>You'll be contacted by us soon </p>
      <div className={styles.row}>
        <div className={styles.column}>
          {Object.keys(contact).map((el) => {
            return <p>{el}</p>;
          })}
        </div>
        <div className={styles.column}>
          {Object.values(contact).map((el) => {
            return <p>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactSubmitted;
