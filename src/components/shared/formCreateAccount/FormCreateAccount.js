import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  AutoComplete,
  Radio,
} from "antd";

import css from "./formCreateAccount.module.css";
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const FormCreateAccount = ({ styles, desktop = false }) => {
  console.dir(styles);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div className={css.wrapper}>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        className={!desktop ? css.formBlockMobile : css.FormBlockDesktop}
      >
        <p className={css.information}>Informations personnelles</p>
        <Form.Item
          className={css.radioForm}
          name="radio-group"
          label="Civilité *"
        >
          <Radio.Group className={css.radioGroup}>
            <Radio value="a">Madame</Radio>
            <Radio value="b">Monsieur</Radio>
          </Radio.Group>
        </Form.Item>
        <div className={styles}>
          <Form.Item
            name="surname"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Nom *" className={css.input} />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Prénom *" className={css.input} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="E-mail*" className={css.input} />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input placeholder="Téléphone *" className={css.input} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Mot de passe*"
              className={css.passwordInput}
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirmation mot de passe *"
              className={css.passwordInput}
            />
          </Form.Item>
          <div>
            {" "}
            <Form.Item
              className={css.checkboxForm}
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox className={css.checkbox}>
                J’accepte les conditions générales de vente
              </Checkbox>
            </Form.Item>
            <Form.Item
              className={css.checkboxForm}
              name="take news from Wilive"
              valuePropName="checked"
            >
              <Checkbox className={css.checkbox}>
                Je souhaite recevoir des news de Wilive
              </Checkbox>
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={`${css.buttonMainStyle} ${css.buttonWithGradient} ${css.buttonWhiteColor}`}
          >
            Suivant
          </Button>
        </Form.Item>
      </Form>{" "}
      <p className={css.signature}>
        Nec minus feminae quoque calamitatum participes fuere similium. nam ex
        hoc quoque sexu peremptae sunt originis altae conplures, adulteriorum
        flagitiis obnoxiae vel stuprorum. inter quas notiores fuere Claritas et
        Flaviana, quarum altera cum duceretur ad mortem, indumento, quo vestita
        erat, abrepto, ne velemen quidem secreto membrorum sufficiens retinere
        permissa est. ideoque carnifex nefas admisisse convictus inmane, vivus
        exustus est.
      </p>
    </div>
  );
};
export default FormCreateAccount;
