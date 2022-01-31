import React from "react";
import { Menu } from "antd";
import styles from "./Header.module.scss";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className={styles.container}>
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/1/1c/ICloud_logo.svg"
        }
        alt="icon"
      />

      <Menu
        mode="horizontal"
        breakpoint={"md"}
        collapsedWidth={20}
        overflowedIndicator={<MenuOutlined />}
      >
        <Menu.Item disabled key="1">
          About Us
        </Menu.Item>
        <Menu.Item disabled key="2">
          How it works
        </Menu.Item>
        <Menu.Item disabled key="3">
          How it works
        </Menu.Item>
        <Menu.Item disabled key="4">
          Eur <DownOutlined />
        </Menu.Item>
        <Menu.Item disabled key="5">
          En <DownOutlined />
        </Menu.Item>
        <Menu.Item disabled key="6">
          Sign In
        </Menu.Item>
        <Menu.Item disabled key="7">
          Get Access
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
