import React from "react";
import Logo from "../../shared/Logo";
import Form from "./Form";
import css from "./userSignUpPage.module.css";
import LineGrey from "./LineGrey";

const UserSignUpPage = () => (
  <div className={css.wrapper}>
    <Logo />
    <Form />
    <LineGrey />
    <div className={css.createAccountBlock}>
      <h2>Nouveau sur wilive ?</h2>
      <a
        href="http://localhost:3000/UserCreateAccountPage"
        className={css.buttonSubmit}
      >
        Créer un compte
      </a>
    </div>
    <div className={css.invitePartnersBlock}>
      <h2 className={css.invitePartnersHeader}>Devenir partenaire wilive ?</h2>
      <p className={css.invitePartnersParagraph}>
        Que vous soyez dirigeant d’une association sportive ou d’une structure
        privé proposant des activités sportives, nous pouvons dès maintenant
        nous rencontrer.
      </p>
    </div>
  </div>
);

export default UserSignUpPage;
