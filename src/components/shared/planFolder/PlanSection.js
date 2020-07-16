import React, { Component } from "react";
import css from "./planSection.module.css";
import uniqid from "uniqid";
export class PlanSection extends Component {
  render() {
    const {
      tariffName,
      price,
      schedule,
      services,
      link,
      recommendation,
      button = true,
      desktop = false,
      customClass,
    } = this.props;
    return (
      <div className={desktop ? css.wrapperDesktop : css.wrapper}>
        <div className={css.planSectionBlock}>
          <div className={`${css.galaxyOrbit} ${customClass}`}>
            {recommendation && (
              <div className={css.recommendation}>Recommandé</div>
            )}
            <h2 className={css.tariffName}>{tariffName}</h2>
            <h3 className={css.price}>{price}</h3>
            <p className={css.schedule}>{schedule}</p>
            <div className={css.servicesBlock}>
              <ul className={css.servicesList}>
                {services.map((service) => {
                  return (
                    <li key={uniqid()} className={css.servicesItem}>
                      {service}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {button && (
          <a href={link} className={css.buttonSelect}>
            CHOISIR
          </a>
        )}
      </div>
    );
  }
}

export default PlanSection;
