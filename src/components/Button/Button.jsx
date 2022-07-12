import React from 'react';
import './Button.styles.scss';

export const Button = ({ children, padding = '20px', bgColor = 'blue' }) => (
  <button
    type="button"
    style={{ backgroundColor: `${bgColor}`, padding: `${padding}` }}
    className="btn"
  >
    {children}
  </button>
);
