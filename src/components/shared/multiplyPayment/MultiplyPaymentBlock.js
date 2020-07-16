import React, { Component } from "react";
import css from "./multiplyPayment.module.css";

export class MultiplyPaymentBlock extends Component {
  render() {
    return (
      <div>
        <p className={css.typeOfPayment}>Paiement multiple</p>
        <div className={css.paymentBlock}>
          <div className={css.priceItem}>
            <div>
              <h2 className={css.headerPayment}>Offre Optimale</h2>
              <p className={css.signaturePayment}>Paiement mensuel</p>
            </div>
            <h2 className={css.price}>150€</h2>
          </div>
          <div className={css.priceItem}>
            <div>
              <h2 className={css.headerPayment}>Bilan Complet</h2>
              <p className={css.signaturePayment}>Paiement unique</p>
            </div>
            <h2 className={css.price}>80€</h2>
          </div>
          <div className={css.totalBill}>
            <div className={css.priceItem}>
              <h2 className={css.headerPayment}>Total</h2>
              <h2 className={css.price}>230€</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MultiplyPaymentBlock;
