import React from "react";
import css from "./logo.module.css";
const Logo = ({ classNameLogo, classNameSignature, classNameLogoWrapper }) => (
  <div>
    <a href="someUrl" className={classNameLogoWrapper}>
      <img
        src={require("../../images/logo.svg")}
        alt="logo"
        className={classNameLogo}
      />
      <img
        src={require("../../images/logoText.svg")}
        alt="logo"
        className={classNameSignature}
      />
    </a>
  </div>
);
export default Logo;
