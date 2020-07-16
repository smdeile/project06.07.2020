import React, { Component } from "react";
import css from "./userDesktopCreateAccount.module.css";
import PageHeaderBlock from "../../shared/pageHeaderBlock/PageHeaderBlock";
import FormCreateAccount from "../../shared/formCreateAccount/FormCreateAccount";
import FooterBlock from "../../shared/footerBlock/FooterBlock";

export class userDesktopCreateAccount extends Component {
  render() {
    return (
      <>
        <div className={css.wrapper}>
          <PageHeaderBlock
            tittle="Inscription Wilive"
            subTitle="Un service simple adapté à vos besoins. Nous avons seulement besoin de quelques informations pour commencer."
            indicator="1"
          />
          <FormCreateAccount styles={css.stylesForm} desktop="true" />
        </div>
        <div className={css.footerBlock}>
          <FooterBlock desktop="true" />
        </div>
      </>
    );
  }
}

export default userDesktopCreateAccount;
