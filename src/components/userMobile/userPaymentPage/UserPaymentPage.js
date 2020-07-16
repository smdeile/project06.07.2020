import React, { Component } from "react";
import HeaderBlock from "../../shared/pageHeaderBlock/PageHeaderBlock";
import SubscribeBlockWithInfo from "../../shared/subscribeBlockWithInfo/SubscribeBlockWithInfo";
import FooterBlock from "../../shared/footerBlock/FooterBlock";
import PlanSection from "../../shared/planFolder/PlanSection";
import RadioPaymentPage from "../../shared/radioPaymentPage/RadioPaymentPage";
import css from "./userPaymentPage.module.css";

export class UserPayment extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <HeaderBlock
          tittle="Choisissez votre bilan"
          subTitle="Super choix! Sélectionnez maintenant le type de bilan souhaité."
        />
        <PlanSection
          tariffName="Optimale"
          price="150€/mois"
          schedule="3 séance/ semaine"
          services={[
            "·Bilan Basique Inclus",
            "·Suivi Basique",
            "·80€ Bilan Complet",
            "·24€ Suivi Complet",
          ]}
          link="some link"
          button={false}
          customClass={css.customClass}
        />
        <RadioPaymentPage />
        <SubscribeBlockWithInfo />
        <FooterBlock />
      </div>
    );
  }
}

export default UserPayment;
