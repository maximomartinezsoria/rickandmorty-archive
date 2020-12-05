import React, { useEffect, useRef } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { useDispatch, useSelector } from 'react-redux'
import { filterCharacters, setNameQuery } from '../../store/actions/charactersActions'

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

  return <input type="text" ref={nameInput} onChange={handleChange} value={nameQuery} />
}
