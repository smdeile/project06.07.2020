import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink
            exact
            to="/"
            // className={styles.link}
            // activeClassName={styles.activeLink}
          ></NavLink>
          <NavLink
            to="/UserCreateAccountPage"
            // className={styles.link}
            // activeClassName={styles.activeLink}
          ></NavLink>
          <NavLink
            to="/userChoosePlan"
            // className={styles.link}
            // activeClassName={styles.activeLink}
          ></NavLink>
          <NavLink to="/UserPaymentPage"></NavLink>
          <NavLink to="/userPaymentPageCard"></NavLink>
          <NavLink to="/userThankYouPage"></NavLink>
        </div>
      </div>
    );
  }
}
