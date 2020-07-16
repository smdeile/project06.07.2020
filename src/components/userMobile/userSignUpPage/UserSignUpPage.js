import React from "react";
import Logo from "../../shared/logo/Logo";
import Form from "../../shared/formUserSignUp/Form";
import css from "./userSignUpPage.module.css";
import LineGrey from "../../shared/LineGrey";
// import { NavLink } from "react-router-dom";
import FooterBlock from "../../shared/footerBlock/FooterBlock";

const UserSignUpPage = ({ location }) => (
  <div className={css.wrapper}>
    <Logo logoWidth={css.logoWidth} />
    <Form />
    <div className={css.borderGrey}>
      <div className={css.createAccountBlock}>
        <h2 className={css.headerCreateAccount}>Nouveau sur wilive ?</h2>
        {/* <button className={`  ${css.buttonWithGradient} ${css.buttonMainStyle}`}>
        <NavLink
          className={`${css.buttonWhiteColor} ${css.linkCreateAccount}`}
          to={{
            pathname: "/SomePage",
            state: { from: location },
          }}
        >
          Créer un compte
        </NavLink>
      </button> */}
        <a
          href="http://localhost:3000/UserCreateAccountPage"
          className={`${css.buttonWhiteColor} ${css.linkCreateAccount} ${css.buttonWithGradient} ${css.buttonMainStyle}`}
        >
          Créer un compte
        </a>
      </div>
    </div>
    <div className={css.invitePartnersBlock}>
      <div className={css.ellipse}>
        <h2 className={css.invitePartnersHeader}>
          Devenir partenaire wilive ?
        </h2>
        <p className={css.invitePartnersParagraph}>
          Que vous soyez dirigeant d’une association sportive ou d’une structure
          privé proposant des activités sportives, nous pouvons dès maintenant
          nous rencontrer.
        </p>
        {/* <button className={`${css.buttonMainStyle}  ${css.linkContactUs}`}>
        <NavLink
          className={` ${css.buttonMainStyle} ${css.linkContactUsStyleText}`}
          to={{
            pathname: "/UserCreateAccountPage",
            state: { from: location },
          }}
        >
          Contactez-nous
        </NavLink>
      </button> */}
        <a
          href="http://localhost:3000/UserCreateAccountPage"
          className={`${css.buttonMainStyle}  ${css.linkContactUs}`}
        >
          Contactez-nous
        </a>
      </div>
    </div>
    <FooterBlock />
  </div>
);

export default UserSignUpPage;
