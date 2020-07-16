import React, { Component } from "react";
import css from "./logo.module.css";

export default class Logo extends Component {
  render() {
    /*width of logo block
    example css
     .logoWidth {
  width: 112px;
} */
    const { logoWidth } = this.props;
    return (
      <div className={css.logoWrapper}>
        <a href="someUrl" className={`${css.logoLink} ${logoWidth}`}>
          <img
            src={require("../../../images/logo.svg")}
            alt="logo"
            className={css.logoNameWidth}
          />
          <img
            src={require("../../../images/logoText.svg")}
            alt="logo"
            className={css.signatureWidth}
          />
        </a>
      </div>
    );
  }
}
