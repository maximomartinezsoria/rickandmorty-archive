import React from 'react'
import { useSelector } from 'react-redux'
import { CharacterCard } from '../components/CharacterCard'
import { WithCharacters } from '../hoc/withCharacters'

export const CharactersGridComponent = ({ characters }) => {
  const isLoading = useSelector((state) => state.characters.loading)
  const hasError = useSelector((state) => state.characters.hasError)

  if (isLoading) return <p>Loading...</p>
  if (hasError) return <p>Sorry, there was an error. Plase try again later.</p>
  if (!characters.length) return <p>There is nothing here. Try changing the search criteria.</p>

  return (
    <section className="CharactersGrid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  )
}

export const CharactersGrid = WithCharacters(CharactersGridComponent)
