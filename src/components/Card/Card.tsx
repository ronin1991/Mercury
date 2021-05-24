import React from 'react'
import './Card.scss'

// export interface ICardProps {
//   description: any
// }

export const Card: React.FC = (props) => {
  const { children } = props
  return (
    <div className="Card">
      {children}
    </div>
  )
}
