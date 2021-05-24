import React from 'react'
import moment from 'moment'
import './Calendar.scss'

export interface ICalendarProps {
  onSelectDay: any
}

export const Calendar: React.FC<ICalendarProps> = ({ onSelectDay }) => {
  const handleChange = (e: any) => {
    onSelectDay(e.target.value)
  }

  const minDate = () => {
    const date = new Date()
    const formatDate = moment(date).format('YYYY-MM-DD')
    return moment(formatDate).subtract(5, 'days').format('YYYY-MM-DD')
  }

  const maxDate = () => {
    const date = new Date()
    return moment(date).format('YYYY-MM-DD')
  }
  // getFormatDay(date)
  // const minDay = 1

  return (
    <div className="Calendar">
      <input className="Calendar__input" type="date" value="" onChange={handleChange} min={minDate()} max={maxDate()}/>
    </div>
  )
}
