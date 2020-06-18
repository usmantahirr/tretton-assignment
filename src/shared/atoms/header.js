import React from 'react';

const Header = ({ primaryText, secondaryText }) => (
  <header className="header">
    <div className="header__logo-box">
      <img src="/logo.svg" alt="Logo" className="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        {primaryText && <span className="heading-primary--main">{primaryText}</span>}
        {secondaryText && <span className="heading-primary--sub">{secondaryText}</span>}
      </h1>

      <a href="#ninjas" className="btn btn--white btn--animated">
        See all Ninjas
      </a>
    </div>
  </header>
);

export default Header;
