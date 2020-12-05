import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { capitalize } from '../../helpers'
import { filterCharacters, setStatusQuery } from '../../store/actions/charactersActions'

export const StatusFilter = () => {
  const [statusQuery, setStatusQueryState] = useState('')
  const dispatch = useDispatch()
  const statusSelect = useRef(null)
  const possibleStatus = ['alive', 'dead', 'unknown']

  useEffect(() => {
    dispatch(setStatusQuery(statusQuery))
    dispatch(filterCharacters())
  }, [statusQuery])

  const handleChange = () => {
    setStatusQueryState(statusSelect.current.value)
  }

  return (
    <select ref={statusSelect} value={statusQuery} onChange={handleChange}>
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
