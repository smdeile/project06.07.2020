import React, { Component } from "react";
import css from "./userDesktopSignUp.module.css";
import Logo from "../../shared/logo/Logo";
import Form from "../../shared/formUserSignUp/Form";
import FooterBlock from "../../shared/footerBlock/FooterBlock";
export class UserDesktopSignUp extends Component {
  render() {
    return (
      <>
        <div className={css.wrapper}>
          <div className={css.leftSideOfPage}>
            <Logo logoWidth={css.logoWidth} />
            <Form />
            <div className={css.borderGrey}> </div>
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

          <div className={css.rightSidePage}>
            <div className={css.invitePartnersBlock}>
              <div className={css.ellipse}>
                <h2 className={css.invitePartnersHeader}>
                  Devenir partenaire wilive ?
                </h2>
                <p className={css.invitePartnersParagraph}>
                  Que vous soyez dirigeant d’une association sportive ou d’une
                  structure privé proposant des activités sportives, nous
                  pouvons dès maintenant nous rencontrer.
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
          </div>
        </div>
        <footer className={css.footerBlock}>
          <FooterBlock styles={css.footerBlockStyles} desktop="true" />
        </footer>
      </>
    );
  }
}

export default UserDesktopSignUp;
