import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import css from "./userSignUpPage.module.css";

class FormComponent extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <Form
        className={css.formWrapper}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          className={css.formEmail}
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className={css.input} placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          className={css.formPassword}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Mot de passe" />
        </Form.Item>

        <Form.Item className={css.formButton}>
          <Button
            className={`${css.buttonWhiteColor} ${css.buttonLogin} ${css.buttonWithGradient} ${css.buttonMainStyle}`}
            type="primary"
            htmlType="submit"
          >
            Se connecter
          </Button>
        </Form.Item>

        <Form.Item className={css.forgotPassword}>
          <a
            className={css.linkForgotPassword}
            className={css.buttonLogin}
            href="some url"
          >
            Mot de passe oublié ?
          </a>
        </Form.Item>
      </Form>
    );
  }
}

export default FormComponent;
