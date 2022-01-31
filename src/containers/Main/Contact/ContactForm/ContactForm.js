import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import styles from "./ContactForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import ContactSubmitted from "../ContactSubmitted/ContactSubmitted";
import { getDialCode } from "../../../../helpers/getDialCode";

const ContactForm = () => {
  const [dialCode, setDialCode] = useState(null);
  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const onFinish = (values) => {
    values.Phone = `${dialCode}${values.Phone}`;
    dispatch(actions.addContact(values));
  };

  const getPhoneAddOn = async () => {
    let dialCode = await getDialCode();
    setDialCode(dialCode);
  };

  useEffect(() => {
    getPhoneAddOn();
  }, []);

  const { contact } = useSelector((state) => state.contact);

  return (
    <div className={styles.contactFormContainer}>
      {contact ? (
        <ContactSubmitted contact={contact} />
      ) : (
        <>
          <h3>Find inbound call centers for your company</h3>
          <p>Use our AI and Big Data driven call center sourcing solution</p>
          <Form {...layout} name="contact-form" onFinish={onFinish}>
            <Form.Item
              name="Company"
              label="Company"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Company" />
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
              <Input placeholder="Full Name" />
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
              <Input placeholder="name@email.com" />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Get Informed
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
