import React from 'react'
import './CardTitle.scss'

export interface ICardTitleProps {
  description: any
}


export const CardTitle: React.FC<ICardTitleProps> = (props) => {
  return (
    <div className="Card__title">
      {props.description}
    </div>
  )
}

