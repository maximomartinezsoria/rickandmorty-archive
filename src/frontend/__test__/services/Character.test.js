import fetch from 'isomorphic-fetch'
import Character from '../../services/Character'

describe('Character service', () => {
  test('should fetch characters', async () => {
    const [characters] = await Character.get()

    expect(characters.length).toBeGreaterThan(0)
  })
})
