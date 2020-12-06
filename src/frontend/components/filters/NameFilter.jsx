import React, { useEffect, useRef } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { useDispatch, useSelector } from 'react-redux'
import { filterCharacters, setNameQuery } from '../../store/actions/charactersActions'
import { SearchIcon } from '../icons/SearchIcon'

export const NameFilter = () => {
  const dispatch = useDispatch()
  const nameInput = useRef(null)
  const nameQuery = useSelector((state) => state.characters.nameQuery)
  const debouncedNameQuery = useDebounce(nameQuery, 400)

  useEffect(() => {
    dispatch(filterCharacters())
  }, [debouncedNameQuery])

  const handleChange = () => {
    dispatch(setNameQuery(nameInput.current.value))
  }

  return (
    <div className="NameFilter">
      <label className="NameFilter__label" htmlFor="nameInput">
        <SearchIcon />
      </label>
      <input
        placeholder="Search by name"
        type="text"
        id="nameInput"
        ref={nameInput}
        onChange={handleChange}
        value={nameQuery}
      />
    </div>
  )
}
