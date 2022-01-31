import React from "react";
import styles from "./Footer.module.scss";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  const list1 = ["About Us", "Become a Partner", "FAQ"];
  const list2 = ["Imprint", "Terms & Condition", "Privacy Policy"];
  const list3 = ["email@js.com", "+49 (0) 12345678"];
  const icons = [facebook, twitter, linkedin];

  const vertList = (array) => {
    return (
      <div className={styles.column}>
        {array.map((el, i) => {
          return <p key={i}>{el}</p>;
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
        {icons.map((el, i) => {
          return <img src={el} alt="icon-social" key={i} />;
        })}
      </div>
    </div>
  );
};

export default Footer;
