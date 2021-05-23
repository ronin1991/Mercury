import React from 'react';
import './Header.scss';
import cn from 'classnames'

export interface IHeaderInterface {
  className: string
}

export const Header: React.FC<IHeaderInterface> = (props) => {
 
  return (
    <div className={cn('Header', props.className)}>
      <div className="Header__left-world">Weather</div>
      <div className="Header__right-world">forecast</div>
    </div>
  )
}
