import React from "react";
import Logo from "../../shared/Logo";
import Form from "./Form";
import css from "./userSignUpPage.module.css";
import LineGrey from "./LineGrey";

const UserSignUpPage = () => (
  <div className={css.wrapper}>
    <Logo
      classNameLogoWrapper={css.logoWrapper}
      classNameLogo={css.headerLogo}
      classNameSignature={css.headerLogoSignature}
    />
    <Form />
    <LineGrey classNameLine={css.lineGreyMiddlePage} />
    <div className={css.createAccountBlock}>
      <h2 className={css.headerCreateAccount}>Nouveau sur wilive ?</h2>
      <a
        href="http://localhost:3000/UserCreateAccountPage"
        className={`${css.buttonWhiteColor} ${css.linkCreateAccount} ${css.buttonWithGradient} ${css.buttonMainStyle}`}
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
      <a
        href="http://localhost:3000/UserCreateAccountPage"
        className={`${css.buttonMainStyle}  ${css.linkContactUs}`}
      >
        Contactez-nous
      </a>
    </div>
    <footer>
      <div>
        <div className={css.footerBlock}>
          <Logo
            classNameLogo={css.footerLogoLabel}
            classNameSignature={css.footerLogoSignature}
            classNameLogoWrapper={css.footerLogoWrapper}
          />
          <LineGrey />
          <div className={css.footerContacts}>
            <a href="00 00 00 00 00" className={css.footerTel}>
              00 00 00 00 00
            </a>

            <div className={css.footerMail}>
              <a href="some mail@mail">
                <img src={require("../../../images/envelope.svg")} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default UserSignUpPage;
