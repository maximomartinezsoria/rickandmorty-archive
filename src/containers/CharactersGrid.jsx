import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../store/actions/charactersActions'

export const CharactersGrid = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.characters.characters)

  useEffect(() => {
    dispatch(getCharacters(1))
  }, [])

  if (!characters.length) return <p>No characters were found.</p>
  return (
    <section>
      {characters.map((character) => (
        <p>{character.name}</p>
      ))}
    </section>
  )
}
