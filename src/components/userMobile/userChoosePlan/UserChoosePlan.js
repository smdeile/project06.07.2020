import React, { Component } from "react";
import { PageHeader } from "antd";
import HeaderBlock from "../../shared/pageHeaderBlock/PageHeaderBlock";
import PlanSection from "../../shared/planFolder/PlanSection";
import FooterBlock from "../../shared/footerBlock/FooterBlock";
import SubscribeBlockWithInfo from "../../shared/subscribeBlockWithInfo/SubscribeBlockWithInfo";
import css from "./userChoosePlan.module.css";

export class UserChoosePlan extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <HeaderBlock
          className={css.headerBlockBox}
          tittle="Choisissez votre offre"
          subTitle="Redécouvrez le sport en toute liberté. Choisissez l’offre avec laquelle commencer, vous pourrez la modifier plus tard"
        />
        <div className={css.planSectionBlock}>
          <PlanSection
            tariffName="Liberté"
            price="10 à 50€"
            schedule="par Activités sportives"
            services={[
              "·20€ Bilan Basique",
              "·10€ Suivi Basique",
              "·100€ Bilan Complet",
              "·30€ Suivi Complet",
            ]}
            link="some link"
          />
          <PlanSection
            tariffName="Confort"
            price="60€/mois"
            schedule="1 séance/ semaine"
            services={[
              "·Bilan Basique Inclus",
              "·8€ Suivi Basique",
              "·80€ Bilan Complet",
              "·24€ Suivi Complet",
            ]}
            link="some link"
          />
          <PlanSection
            tariffName="Equilibre"
            price="110€/mois"
            schedule="2 séances/ semaine"
            services={[
              "·Bilan Basique Inclus",
              "·8€ Suivi Basique",
              "·80€ Bilan Complet",
              "·24€ Suivi Complet",
            ]}
            link="some link"
            recommendation="true"
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
          />
        </div>
        <SubscribeBlockWithInfo />
        <FooterBlock />
      </div>
    );
  }
}
export default UserChoosePlan;
