import React, { Component } from "react";
import css from "./backgroundImage.module.css";

export class EllipseComponent extends Component {
  render() {
    const { display, twoEllipse = false, fourEllipse = false } = this.props;
    return (
      <div className={`${css.wrapper} ${display}`}>
        {twoEllipse && <div className={css.twoEllipse}></div>}
        {fourEllipse && <div className={css.fourEllipse}></div>}
      </div>
    );
  }
}

export default EllipseComponent;
