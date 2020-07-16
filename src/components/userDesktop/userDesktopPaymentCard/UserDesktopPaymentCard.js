import React, { Component } from "react";
import PageHeaderBlock from "../../shared/pageHeaderBlock/PageHeaderBlock";
import SubscribeBlockWithInfo from "../../shared/subscribeBlockWithInfo/SubscribeBlockWithInfo";
import FooterBlock from "../../shared/footerBlock/FooterBlock";
import MultiplyPaymentBlock from "../../shared/multiplyPayment/MultiplyPaymentBlock";
import PaymentForm from "../../shared/paymentForm/PaymentForm";
import css from "./userDesktopPaymentCard.module.css";

export class UserDesktopPaymentCard extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <PageHeaderBlock
          tittle="Paiement"
          subTitle="Vérifiez que toutes les informations sont correctes avant de passer au paiement."
          indicator="4"
          desktop={true}
        />
        <div className={css.wrapperDividedBlock}>
          <div className={css.dividedBlock}>
            <div className={css.leftSide}>
              <MultiplyPaymentBlock />
            </div>
            <div className={css.rightSide}>
              <PaymentForm desktop={true} />
            </div>
          </div>
          <SubscribeBlockWithInfo />
        </div>
        <FooterBlock desktop={true} />
      </div>
    );
  }
}

export default UserDesktopPaymentCard;
