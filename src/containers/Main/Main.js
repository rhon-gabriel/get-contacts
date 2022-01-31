import React from "react";
import styles from "./Main.module.scss";
import { Row, Col } from "antd";
import Contact from "./Contact/Contact";

const Main = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={24}>
          <Contact />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
