import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CharacterCard } from '../components/CharacterCard'
import { getCharacters } from '../store/actions/charactersActions'

export const CharactersGrid = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.characters.characters)
  const nameQuery = useSelector((state) => state.characters.nameQuery)
  const statusQuery = useSelector((state) => state.characters.statusQuery)
  const isLoading = useSelector((state) => state.characters.loading)
  const hasError = useSelector((state) => state.characters.hasError)
  const error = useSelector((state) => state.characters.error)

  useEffect(() => {
    dispatch(getCharacters(nameQuery, statusQuery))
  }, [nameQuery, statusQuery])

  if (isLoading) return <p>Loading...</p>
  if (hasError)
    return error === 'notFound' ? (
      <p>There is nothing here. Try changing the search criteria.</p>
    ) : (
      <p>Sorry, there was an error. Plase try again later.</p>
    )
  return (
    <section>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  )
}
