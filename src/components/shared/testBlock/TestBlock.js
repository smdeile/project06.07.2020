import React, { Component } from "react";
import css from "./testBlock.module.css";

export class TestBlock extends Component {
  render() {
    const { tittle, subtitle } = this.props;
    return (
      <div className={css.wrapper}>
        <h2 className={css.tittleBlock}>{tittle}</h2>
        <p className={css.subtitleBlock}>{subtitle}</p>
        <a className={css.button} href="/">
          Planifier le test
        </a>
      </div>
    );
  }
}

export default TestBlock;
