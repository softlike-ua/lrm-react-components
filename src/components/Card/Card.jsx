import React from 'react';
import './Card.styles.scss';

export const Card = ({ children, bgColor = 'beige' }) => (
  <div className="card-wrapper" style={{ backgroundColor: `${bgColor}` }}>
    {children}
  </div>
);
