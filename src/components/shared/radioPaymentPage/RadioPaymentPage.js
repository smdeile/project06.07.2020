import React, { Component } from "react";
import { Radio } from "antd";
import css from "./radioPaymentPage.module.css";

export class RadioPaymentPage extends Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Radio.Group
          onChange={this.onChange}
          value={this.state.value}
          className={css.radioGroup}
        >
          <p className={css.signatureRadioBlock}>Choisissez votre Bilan</p>
          <Radio className={css.radioLabel} value={1}>
            <div className={css.radioSignature}>
              <h2 className={css.headerRadioSignature}>Bilan Basique Inclus</h2>
              <p className={css.phraseRadioSignature}>
                Un rapide formulaire en ligne afin de vous fournir un programme
                adapté.
              </p>
            </div>
          </Radio>
          <Radio className={css.radioLabel} value={2}>
            <div className={css.radioSignature}>
              <h2 className={css.headerRadioSignature}>Bilan Complet +80€</h2>
              <p className={css.phraseRadioSignature}>
                Prennez rendez-vous avec un professionnel afin de définir un
                bilan complet de vos aptitudes.
              </p>
            </div>
          </Radio>
        </Radio.Group>
      </div>
    );
  }
}

export default RadioPaymentPage;
