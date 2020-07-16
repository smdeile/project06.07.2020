import React from "react";
import FormCreateAccount from "../../shared/formCreateAccount/FormCreateAccount";
import FooterBlock from "../../shared/footerBlock/FooterBlock";
import HeaderBlock from "../../shared/pageHeaderBlock/PageHeaderBlock";
import css from "./UserCreateAccountPage.module.css";

const UserCreateAccountPage = () => {
  return (
    <div className={css.wrapper}>
      <HeaderBlock
        tittle="Inscription Wilive"
        subTitle="Un service simple adapté à vos besoins. Nous avons seulement besoin de quelques informations pour commencer"
      />

      <FormCreateAccount />
      <FooterBlock />
    </div>
  );
};
export default UserCreateAccountPage;
