import React from "react";
import { Layout } from "antd";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import styles from "./AppContainer.module.scss";

const AppContainer = () => {
  return (
    <Layout className={styles.container}>
      <Layout.Header
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Header />
      </Layout.Header>
      <Layout.Content style={{ height: "50%", backgroundColor: "#fff" }}>
        <Main />
      </Layout.Content>
      <Layout.Footer style={{ backgroundColor: "#4a4a4a", paddingLeft: 150 }}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default AppContainer;
