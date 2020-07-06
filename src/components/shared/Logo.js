import React from 'react';
import css from './logo.module.css';
const Logo = () => (
  <div className={css.logoWrapper}>
    <a href="someUrl" className={css.logoLink}>
      <img
        src={require('../../images/logo.svg')}
        alt="logo"
        className="unit-photo"
      />
      <img
        src={require('../../images/logoText.svg')}
        alt="logo"
        className={css.logoText}
      />
    </a>
  </div>
);
export default Logo;
