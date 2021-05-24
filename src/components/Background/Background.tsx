import React from 'react'
import './Background.scss'

export const Background = (props: any) => {
  return (
    <div className="Background">
      {props.children}
    </div>
  )
}

export default Background
