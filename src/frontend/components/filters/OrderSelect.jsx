import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { capitalize } from '../../helpers'
import { orderCharactersBy } from '../../store/actions/charactersActions'

export const OrderSelect = () => {
  const orderByValues = ['popular', 'name']
  const orderBySelect = useRef(null)
  const dispatch = useDispatch()

  const handleChange = () => {
    const newOrderBy = orderBySelect.current.value
    dispatch(orderCharactersBy(newOrderBy))
  }

  return (
    <div className="OrderBy">
      <p className="OrderBy__title">Order by:</p>
      <select ref={orderBySelect} onChange={handleChange}>
        {orderByValues.map((value, index) => (
          <option key={index} value={value}>
            {capitalize(value)}
          </option>
        ))}
      </select>
    </div>
  )
}
