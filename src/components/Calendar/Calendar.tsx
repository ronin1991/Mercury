import React, { useState } from 'react'
import './Calendar.scss'

export interface ICalendarProps {
  onSelectDay: any
}

export const Calendar: React.FC<ICalendarProps> = ({onSelectDay}) => {

  const [selectedDay, setSelectedDay] = useState();

  const handleChange = (e: any) => {
    setSelectedDay(e.target.value);
    onSelectDay(selectedDay);
  }

  return (
    <div className="Calendar">
      <input className="Calendar__input" type="date"  onChange={handleChange}/>
    </div>
  )
}
