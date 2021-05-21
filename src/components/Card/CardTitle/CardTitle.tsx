import React from 'react'
import './CardTitle.scss'
import cn from 'classnames'

export interface ICardTitleProps {
  description: any,
  isPositionBottom: any
}


export const CardTitle: React.FC<ICardTitleProps> = (props) => {
  const { isPositionBottom } = props;
  const CardTitleClass = cn({
    'margin__bottom': isPositionBottom,
    'Card__title': true,
  })
  return (
    <div className={CardTitleClass}>
      {props.description}
    </div>
  )
}

