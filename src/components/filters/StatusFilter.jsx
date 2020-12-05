import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterCharacters, setStatusQuery } from '../../store/actions/charactersActions'

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const statusSelect = useRef(null)
  const statusQuery = useSelector((state) => state.characters.statusQuery)
  const possibleStatus = ['Alive', 'Dead', 'Unknown']

  useEffect(() => {
    dispatch(filterCharacters())
  }, [statusQuery])

  const handleChange = () => {
    dispatch(setStatusQuery(statusSelect.current.value))
  }

  return (
    <select
      ref={statusSelect}
      value={statusQuery}
      onChange={handleChange}
      className="Filters__selectStatus"
    >
      <option value="" disabled>
        Status
      </option>
      {possibleStatus.map((status, index) => (
        <option key={index} value={status}>
          {status}
        </option>
      ))}
    </select>
  )
}
