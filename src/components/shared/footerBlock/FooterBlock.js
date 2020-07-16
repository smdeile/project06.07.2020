import React, { Component } from "react";
import Logo from "../logo/Logo";
import envelope from "../../../images/envelope.svg";
import css from "./footerBlock.module.css";
export class FooterBlock extends Component {
  render() {
    const { desktop = false } = this.props;
    return (
      <div className={desktop ? css.footerBlockDesktop : css.footerBlockMobile}>
        <Logo logoWidth={css.logoWidth} />

        {!desktop && <div className={css.logoFooterBorder}></div>}
        <div className={css.footerContacts}>
          <a href="00 00 00 00 00" className={css.footerTel}>
            00 00 00 00 00
          </a>

          {desktop ? (
            <a
              href="http://localhost:3000/UserCreateAccountPage"
              className={`${css.buttonMainStyle}  ${css.linkContactUs} `}
            >
              Contactez-nous
            </a>
          ) : (
            <div className={css.footerMail}>
              <a href="some mail@mail">
                <img src={envelope} />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FooterBlock;
