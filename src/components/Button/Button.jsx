import React from 'react';
import './Button.styles.scss';

export const Button = ({
  children,
  padding = '20px',
  bgColor = 'blue',
  typeBtn = 'button',
}) => (
  <button
    type={typeBtn === 'submit' ? 'submit' : 'button'}
    style={{ backgroundColor: `${bgColor}`, padding: `${padding}` }}
    className="btn"
  >
    {children}
  </button>
);
