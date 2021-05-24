import React, { useState } from 'react'
import cn from 'classnames'
import './Select.scss'

export interface ISelectProps {
  options: any,
  className: string,
  onSelect: any

}

export const Select: React.FC<ISelectProps> = (props) => {
  const { children, options, className, onSelect } = props

  const [visibleMenu, setVisibleMenu] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState('')

  const toggleVisibleMenu = () => {
    setVisibleMenu(!visibleMenu)
  }

  const selectedItemMenu = (item: any) => {
    onSelect(item)
    setActiveMenuItem(item.name)
  }

  const selectInputClass = cn('Select__current', {
    Select__current_selected: activeMenuItem
  })

  return (
    <div className={cn('Select', className)} onClick={ toggleVisibleMenu }>
      <div className="Select__header">
        <div className={selectInputClass}><span>{activeMenuItem || children}</span></div>
        <div className="Select__icon">
          <svg className={cn({ Select__arrow_top: visibleMenu })} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.2929 4.29297L14.7071 5.70718L8.00001 12.4143L1.29291 5.70718L2.70712 4.29297L8.00001 9.58586L13.2929 4.29297Z" fill="#8083A4"/>
          </svg>
        </div>
      </div>
        {visibleMenu &&
            <div className="Select__menu">
              {options.map((item: any, i: any) =>
                <div key={`${item.name}${i}`} className="Select__item" onClick={() => selectedItemMenu(item)}><span>{item.name}</span></div>)
              }
            </div>
          }
    </div>
  )
}
