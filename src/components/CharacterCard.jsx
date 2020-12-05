import React from 'react'

export const CharacterCard = ({ character }) => {
  const { name, image, status, origin, location, species } = character

  return (
    <article className="CharacterCard">
      <img src={image} alt={name} />
      <div>
        <div>
          <h3>{name}</h3>
          <p>{species}</p>
        </div>
        <div>
          <p>Origin: {origin.name}</p>
          <p>Location: {location.name}</p>
        </div>
      </div>
      <p>{status}</p>
    </article>
  )
}
