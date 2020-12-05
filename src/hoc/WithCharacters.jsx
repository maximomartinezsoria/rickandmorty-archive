import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from '../store/actions/charactersActions'

export const WithCharacters = (Component) => (props) => {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.characters.characters)

  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return <Component {...props} characters={characters} />
}
