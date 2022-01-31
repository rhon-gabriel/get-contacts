import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const list1 = ["About Us", "Become a Partner", "FAQ"];
  const list2 = ["Imprint", "Terms & Condition", "Privacy Policy"];
  const list3 = ["email@js.com", "+49 (0) 12345678"];
  const icons = [
    "https://cdn-icons-png.flaticon.com/512/1077/1077041.png",
    "https://cdn-icons-png.flaticon.com/512/2111/2111819.png",
    "https://cdn-icons-png.flaticon.com/512/220/220343.png",
  ];

  const vertList = (array) => {
    return (
      <div className={styles.column}>
        {array.map((el) => {
          return <p>{el}</p>;
        })}
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div>
        {vertList(list1)}
        {vertList(list2)}
        {vertList(list3)}
      </div>
      <div>
        {icons.map((el) => {
          return <img src={el} alt="icon-social" />;
        })}
      </div>
    </div>
  );
};

export default Footer;
