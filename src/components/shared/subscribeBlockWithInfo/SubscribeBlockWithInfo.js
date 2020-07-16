import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import css from "./subscribeBlockWithInfo.module.css";

export class SubscribeBlockWithInfo extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <NavLink
          className={css.subscribeButton}
          to={{
            pathname: "/",
          }}
        >
          Suivant
        </NavLink>

        <p className={css.someInfoText}>
          Nec minus feminae quoque calamitatum participes fuere similium. nam ex
          hoc quoque sexu peremptae sunt originis altae conplures, adulteriorum
          flagitiis obnoxiae vel stuprorum. inter quas notiores fuere Claritas
          et Flaviana, quarum altera cum duceretur ad mortem, indumento, quo
          vestita erat, abrepto, ne velemen quidem secreto membrorum sufficiens
          retinere permissa est. ideoque carnifex nefas admisisse convictus
          inmane, vivus exustus est.
        </p>
      </div>
    );
  }
}

export default SubscribeBlockWithInfo;
