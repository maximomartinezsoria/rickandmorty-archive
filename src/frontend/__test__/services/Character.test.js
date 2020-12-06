import Character from '../../services/Character'
import CharactersMock from '../../__mocks__/CharactersMock'

describe('Character service', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  test('should fetch characters', async () => {
    fetch.mockResponseOnce(JSON.stringify({ results: CharactersMock }))
    const [characters] = await Character.get()

    expect(characters).toEqual(CharactersMock)
  })
})
