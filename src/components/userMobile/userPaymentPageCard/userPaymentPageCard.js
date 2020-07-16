import React, { Component } from "react";
import HeaderBlock from "../../shared/pageHeaderBlock/PageHeaderBlock";
import SubscribeBlockWithInfo from "../../shared/subscribeBlockWithInfo/SubscribeBlockWithInfo";
import FooterBlock from "../../shared/footerBlock/FooterBlock";
import MultiplyPaymentBlock from "../../shared/multiplyPayment/MultiplyPaymentBlock";
import PaymentForm from "../../shared/paymentForm/PaymentForm";
import css from "./userPaymentPageCard.module.css";

export class userPaymentPageCard extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <HeaderBlock
          tittle="Paiement"
          subTitle="Vérifiez que toutes les informations sont correctes avant de passer au paiement."
        />
        <MultiplyPaymentBlock />
        <PaymentForm />
        <SubscribeBlockWithInfo disabled="true" />
        <FooterBlock />
      </div>
    );
  }
}

export default userPaymentPageCard;
