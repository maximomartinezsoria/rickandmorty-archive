import React from 'react'

export const CharacterCard = ({ character }) => {
  const { name, image, status, origin, location, species } = character

  const getCircleColor = () => {
    if (status === 'Alive') return 'green'
    if (status === 'Dead') return 'red'
    return 'yellow'
  }

  return (
    <article className="CharacterCard">
      <div className="CharacterCard__image">
        <img src={image} alt={name} />
      </div>
      <div className="CharacterCard__textWrapper">
        <div>
          <h3 className="CharacterCard__name">{name}</h3>
          <p className="CharacterCard__species">{species}</p>
          <div className="CharacterCard__data">
            <p className="CharacterCard__dataLabel">Last known location:</p>
            <p className="CharacterCard__dataName">{location.name}</p>
          </div>
          <div className="CharacterCard__data">
            <p className="CharacterCard__dataLabel">Origin:</p>
            <p className="CharacterCard__dataName">{origin.name}</p>
          </div>
        </div>
        <p className="CharacterCard__status" style={{ '--circleColor': getCircleColor() }}>
          {status}
        </p>
      </div>
    </article>
  )
}
