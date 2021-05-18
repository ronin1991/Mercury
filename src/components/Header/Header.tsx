import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
 
  return (
    <div className="Header">
      <div className="Header__left-world">Weather</div>
      <div className="Header__right-world">forecast</div>
    </div>
  )
}
