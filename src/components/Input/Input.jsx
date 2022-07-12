import React from 'react';
import './Input.styles.scss';

export const Input = ({ labelName, inputId }) => (
  <div className="input-wrapper">
    <label htmlFor={inputId}>{labelName}</label>
    <input type="text" id={inputId} />
  </div>
);
