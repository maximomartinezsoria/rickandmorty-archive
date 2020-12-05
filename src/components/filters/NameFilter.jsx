import React, { useState, useEffect, useRef } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { filterCharacters, setNameQuery } from '../../store/actions/charactersActions'

export const NameFilter = () => {
  const [nameQuery, setNameQueryState] = useState('')
  const dispatch = useDispatch()
  const nameInput = useRef(null)
  const debouncedNameQuery = useDebounce(nameQuery, 400)

  useEffect(() => {
    dispatch(setNameQuery(nameQuery))
    dispatch(filterCharacters())
  }, [debouncedNameQuery])

  const handleChange = () => {
    setNameQueryState(nameInput.current.value)
  }

  return <input type="text" ref={nameInput} onChange={handleChange} value={nameQuery} />
}
