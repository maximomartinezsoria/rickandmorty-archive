import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatusQuery } from '../../store/actions/charactersActions'
import { capitalize } from '../../helpers'

export const StatusFilter = () => {
  const statusQuery = useSelector((state) => state.characters.statusQuery)
  const dispatch = useDispatch()
  const possibleStatus = ['alive', 'dead', 'unknown']

  const handleChange = (event) => {
    dispatch(setStatusQuery(event.target.value))
  }

  return (
    <select value={statusQuery} onChange={handleChange}>
      <option value="" disabled>
        Status
      </option>
      {possibleStatus.map((status, index) => (
        <option key={index} value={status}>
          {capitalize(status)}
        </option>
      ))}
    </select>
  )
}
