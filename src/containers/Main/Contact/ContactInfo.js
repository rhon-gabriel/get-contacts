import React from "react";
import styles from "./Contact.module.scss";

const ContactInfo = () => {
  const arr = [
    {
      numbers: "500+",
      value: "Tenders",
    },
    {
      numbers: "200+",
      value: "Callcenter",
    },
    {
      numbers: "375.000",
      value: "Agents available",
    },
    {
      numbers: "80%",
      value: "Faster sourcing",
    },
  ];
  return (
    <div>
      <h3>Welcome to Europe’s largest call center database</h3>
      <div className={styles.row}>
        {arr.map((el, i) => {
          return (
            <div className={styles.column} key={i}>
              <h2>{el.numbers}</h2>
              <p>{el.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
