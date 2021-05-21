import React from 'react';
import './CardForm.scss';

export const CardForm = (props) => {
  const { children } = props;
  return (
    <div className="CardForm">
      {children}
    </div>
  )
}
