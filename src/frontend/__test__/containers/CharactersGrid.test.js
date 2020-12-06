import React from 'react'
import { mount } from 'enzyme'
import { CharactersGridComponent } from '../../containers/CharactersGrid'
import ProviderMock, { store } from '../../__mocks__/ProviderMock'
import CharactersMock from '../../__mocks__/CharactersMock'
import { setLoading, setError } from '../../store/actions/charactersActions'

describe('Characters', () => {
  const charactersGrid = mount(
    <ProviderMock>
      <CharactersGridComponent characters={CharactersMock} />
    </ProviderMock>
  )

  const charactersGridWithoutCharacters = mount(
    <ProviderMock>
      <CharactersGridComponent characters={[]} />
    </ProviderMock>
  )

  test('CharactersGrid should render', () => {
    expect(charactersGrid.length).toEqual(1)
    expect(charactersGridWithoutCharacters.length).toEqual(1)
  })

  test('CharactersGrid should render CharacterCards', () => {
    const characterCards = charactersGrid.find('CharacterCard')
    expect(characterCards).toHaveLength(CharactersMock.length)
  })

  test('CharactersGrid should show message when there are no characters', () => {
    const characterCards = charactersGridWithoutCharacters.find('CharacterCard')
    const message = charactersGridWithoutCharacters.find('p')

    expect(characterCards).toHaveLength(0)
    expect(message).toHaveLength(1)
    expect(message.text()).toEqual('There is nothing here. Try changing the search criteria.')
  })

  test('CharactersGrid should show message while loading', () => {
    store.dispatch(setLoading(true))
    const message = charactersGridWithoutCharacters.find('p')

    expect(message).toHaveLength(1)
    expect(message.text()).toEqual('Loading...')
  })

  test('CharactersGrid should show error message', () => {
    store.dispatch(setError(true))
    const message = charactersGridWithoutCharacters.find('p')

    expect(message).toHaveLength(1)
    expect(message.text()).toEqual('Sorry, there was an error. Plase try again later.')
  })
})
