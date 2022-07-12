import React from 'react';
import './Layout.styles.scss';
import Header from './Header/Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
