import React, { Component } from "react";
import Logo from "../../shared/logo/Logo";
import { LeftCircleOutlined } from "@ant-design/icons";
import TestBlock from "../../shared/testBlock/TestBlock";
import FooterBlock from "../../shared/footerBlock/FooterBlock";
import css from "./userThenkYouPage.module.css";

export class UserThankYouPage extends Component {
  render() {
    const onBack = () => window.history.back();
    return (
      <div className={css.wrapper}>
        <LeftCircleOutlined
          className="ant-page-header-back"
          style={{ fontSize: "23px", color: "red" }}
          onClick={onBack}
        />
        <div className={css.headerBlock}>
          <Logo logoWidth={css.logoWidth} />
          <h2 className={css.tittle}>Mercy</h2>
          <p className={css.subtitle}>
            Vous êtes maintenant membre. Afin de profiter au maximum du service
            suivez les instructions pour réaliser votre bilan.
          </p>
        </div>
        <TestBlock
          tittle="Bilan Complet"
          subtitle="Prennez rendez-vous avec un professionnel afin de définir un bilan
          complet de vos aptitudes."
        />
        <a href="/" className={css.linkGoTo}>
          Aller au Dashboard
        </a>
        <FooterBlock />
      </div>
    );
  }
}

export default UserThankYouPage;
