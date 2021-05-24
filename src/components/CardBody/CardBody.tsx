import React from 'react'
import './CardBody.scss'
import cn from 'classnames'
export interface ICardBodyProps{
  isPositionBottom: any,
}

export const CardBody: React.FC<ICardBodyProps> = (props) => {
  const { children, isPositionBottom } = props
  const CardBodyClass = cn({
    CardBody: true,
    CardBody_margin_bottom: isPositionBottom
  })
  return (
    <div className={CardBodyClass}>
      {children}
    </div>
  )
}
