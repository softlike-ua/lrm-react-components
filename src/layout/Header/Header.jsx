import React from 'react';
import './Header.styles.scss';
import Logo from '../../assets/img/mu-logo.png';
import { SubHeader } from '../../components';

const Header = () => (
  <header className="header">
    <div className="header-main">
      <div className="header-main__logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
    <SubHeader />
  </header>
);

export default Header;
