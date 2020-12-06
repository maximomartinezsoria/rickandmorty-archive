import React from 'react'
import { mount } from 'enzyme'
import { CharacterCard } from '../../components/CharacterCard'
import CharactersMock from '../../__mocks__/CharactersMock'

describe('<CharacterCard />', () => {
  const character = CharactersMock[0]
  const characterCard = mount(<CharacterCard character={character} />)

  test('Component should render', () => {
    expect(characterCard).toHaveLength(1)
  })

  test('Component should have an image', () => {
    const image = characterCard.find('img')
    expect(image).toHaveLength(1)
  })

  test('Component should show: name, species, status, location and origin', () => {
    const name = characterCard.find('.CharacterCard__name').text()
    expect(name).toEqual(character.name)

    const species = characterCard.find('.CharacterCard__species').text()
    expect(species).toEqual(character.species)

    const status = characterCard.find('.CharacterCard__status').text()
    expect(status).toEqual(character.status)

    const expectedDataTexts = [character.location.name, character.origin.name]
    const dataTexts = characterCard.find('.CharacterCard__dataName').map((data) => data.text())
    expect(dataTexts).toEqual(expectedDataTexts)
  })
})
