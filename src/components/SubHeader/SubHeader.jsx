import React, { useState } from 'react';
import './SubHeader.styles.scss';

export const SubHeader = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header-sub-wrapper">
      {!toggle && (
        <button onClick={handleToggle} type="button">
          <div className="header-sub">
            <div className="header-sub__stroke">sub header</div>
          </div>
        </button>
      )}
    </div>
  );
};
