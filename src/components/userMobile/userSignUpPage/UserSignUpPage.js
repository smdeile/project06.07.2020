import React from "react";
import Logo from "../../shared/Logo";
import Form from "./Form";
import css from "./userSignUpPage.module.css";

const UserSignUpPage = () => (
  <div className={css.wrapper}>
    <Logo />
    <Form />
  </div>
);

export default UserSignUpPage;
