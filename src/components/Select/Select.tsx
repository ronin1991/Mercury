import React from 'react'
import './select.scss'

// function CardSelect() {
//   return (
//     <select name="select" className="card__select"> 
//       <option defaultValue="Select city">Select city</option>
//       <option value="value1">Значение 1</option>
//       <option value="value2">Значение 2</option>
//       <option value="value3">Значение 3</option>
//     </select>
//   )
// }
function CardSelect() {
  return (
    <div className="select">
      <div className="select__header">
        <span className="select__current">value1</span>
        <div className="select__icon">&times;</div>
      </div>
      
      <div className="select__body">
        <div className="select__item">value1</div>
        <div className="select__item">value2</div>
        <div className="select__item">value3</div>
        <div className="select__item">value4</div>
      </div>
    </div>
  )
}


export default CardSelect
