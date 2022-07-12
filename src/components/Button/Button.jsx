import React from 'react';
import './Button.styles.scss';

export const Button = ({
  children,
  padding = '20px',
  bgColor = 'blue',
  typeBtn = 'button',
  reset,
  disabledBtn,
}) => {
  if (reset) {
    return (
      <button
        type={typeBtn === 'submit' ? 'submit' : 'button'}
        style={{ backgroundColor: `${bgColor}`, padding: `${padding}` }}
        className="btn"
        onClick={reset}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={typeBtn === 'submit' ? 'submit' : 'button'}
      style={{ backgroundColor: `${bgColor}`, padding: `${padding}` }}
      className={disabledBtn ? 'btn disabled-btn' : 'btn'}
      disabled={disabledBtn}
    >
      {children}
    </button>
  );
};
