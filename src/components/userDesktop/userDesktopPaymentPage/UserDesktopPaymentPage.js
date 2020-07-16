import React, { Component } from "react";
import PageHeaderBlock from "../../shared/pageHeaderBlock/PageHeaderBlock";
import SubscribeBlockWithInfo from "../../shared/subscribeBlockWithInfo/SubscribeBlockWithInfo";
import FooterBlock from "../../shared/footerBlock/FooterBlock";
import PlanSection from "../../shared/planFolder/PlanSection";
import RadioPaymentPage from "../../shared/radioPaymentPage/RadioPaymentPage";
import css from "./userDesktopPaymentPage.module.css";
export class UserDesktopPaymentPage extends Component {
  render() {
    return (
      <div className={css.wrapperDivided}>
        <PageHeaderBlock
          tittle="Choisissez votre bilan"
          subTitle="Super choix! Sélectionnez maintenant le type de bilan souhaité. Ceci est un paiement unique."
          desktop="true"
          indicator="3"
        />
        <div className={css.wrapperDivided}>
          <div className={css.dividedBlock}>
            <div className={css.leftSide}>
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
                desktop={true}
              />
            </div>
            <div>
              <RadioPaymentPage />
            </div>
          </div>
          <SubscribeBlockWithInfo />
        </div>
        <FooterBlock desktop="true" />
      </div>
    );
  }
}

export default UserDesktopPaymentPage;
