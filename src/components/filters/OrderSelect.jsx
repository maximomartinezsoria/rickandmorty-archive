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
    console.log(newOrderBy)
    dispatch(orderCharactersBy(newOrderBy))
  }

  return (
    <div>
      Order by
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
