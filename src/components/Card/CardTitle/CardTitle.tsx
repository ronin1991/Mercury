import React from 'react'
import './CardTitle.scss'
import cn from 'classnames'

export interface ICardTitleProps {
  className: any,
}


export const CardTitle: React.FC<ICardTitleProps>= (props) => {
  const { children, className } = props;
  return (
    <div className={cn('CardTitle', className)}>
      {children}
    </div>
  )
}

