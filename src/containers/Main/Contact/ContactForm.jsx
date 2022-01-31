import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import styles from "./Contact.module.scss";
import axios from "axios";

const ContactForm = () => {
  const [dialCode, setDialCode] = useState(null);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setDialCode(data.country_calling_code);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <div className={styles.contactFormContainer}>
      <h3>Find inbound call centers for your company</h3>
      <p>Use our AI and Big Data driven call center sourcing solution</p>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
      >
        <Form.Item
          name="Company"
          label="Company"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Company"/>
        </Form.Item>
        <Form.Item
          name="Name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Full Name"/>
        </Form.Item>
        <Form.Item
          name="Phone"
          label="Phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={dialCode}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input placeholder="name@email.com"/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Get Informed
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
