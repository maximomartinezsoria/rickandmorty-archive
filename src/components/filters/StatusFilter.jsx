import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { capitalize } from '../../helpers'
import { filterCharacters, setStatusQuery } from '../../store/actions/charactersActions'

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const statusSelect = useRef(null)
  const statusQuery = useSelector((state) => state.characters.statusQuery)
  const possibleStatus = ['alive', 'dead', 'unknown']

  useEffect(() => {
    dispatch(filterCharacters())
  }, [statusQuery])

  const handleChange = () => {
    dispatch(setStatusQuery(statusSelect.current.value))
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
