import React from 'react'
import './Slider.scss'

export const Slider = (props: any) => {

  const { children } = props;
  return (
    <div className="Slider">
      {children}
    </div>
  )
}
