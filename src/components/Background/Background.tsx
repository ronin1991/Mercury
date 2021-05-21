import React from 'react'
import './Background.scss'

export const Background: React.FC = (props) => {
  const { children } = props;

  return (
    <div className="Background">
      {children}
    </div>
  )
}

export default Background
