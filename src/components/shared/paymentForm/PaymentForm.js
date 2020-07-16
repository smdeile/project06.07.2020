import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import css from "./payment.module.css";

export class PaymentForm extends Component {
  render() {
    const { desktop = false } = this.props;
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <div className={desktop ? css.formBlockDesktop : css.formBlock}>
        <p className={css.tittle}>Ajoutez votre carte</p>
        <Form
          name="card"
          className={css.cardInfoForm}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className={css.cardInfoFormBlock}>
            <div className={css.cardImage}></div>
            <Form.Item
              name="cardNumber"
              rules={[
                { required: true, message: "Please input your cardNumber!" },
              ]}
              className={css.cardNumberForm}
            >
              <Input
                placeholder="**** **** **** 9087"
                className={css.cardNumber}
              />
            </Form.Item>
            <Form.Item
              name="date"
              rules={[{ required: true, message: "Please input your date!" }]}
              className={css.cardDateForm}
            >
              <Input className={css.cardDate} placeholder="MM/YYYY" />
            </Form.Item>
            <Form.Item
              name="ccv"
              rules={[{ required: true, message: "Please input your ccv!" }]}
            >
              <Input className={css.cardCcv} placeholder="CCV" />
            </Form.Item>
          </div>
          <div className={css.signaturePaymentForm}>
            <h2 className={css.signatureHeader}>Paiement par PayPal</h2>
            <p
              className={
                desktop ? css.signaturePhraseDesktop : css.signaturePhrase
              }
            >
              Vous pouvez aussi connecter votre compte Paypal en suivant les
              instructions ci-dessous.
            </p>
          </div>
          <Form.Item className={desktop && css.buttonForm}>
            <Button type="primary" htmlType="submit" className={css.submitCard}>
              Connecter mon PayPal
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default PaymentForm;
