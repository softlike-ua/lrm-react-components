import React, { forwardRef } from 'react';
import './Input.styles.scss';

export const Input = forwardRef(
  ({ type, labelName, inputId, error, ...props }, ref) => (
    <div className="input-wrapper">
      <label htmlFor={inputId}>{labelName}</label>
      <input
        ref={ref}
        type={type}
        id={inputId}
        {...props}
        className={error ? 'error' : ''}
      />
      {error && <span>{error.message}</span>}
    </div>
  ),
);
