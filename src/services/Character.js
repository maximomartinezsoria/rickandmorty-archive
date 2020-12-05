import fetcher from '../utilities/fetcher'
import { rickAndMortyApi } from '../config'

const characterEndpoint = `${rickAndMortyApi}/character`

async function getCharacters() {
  const [charactersResponse, statusCode] = await fetcher(characterEndpoint)

  const characters = charactersResponse.results.map((character) => ({
    ...character,
    episodes: getEpisodeNumbers(character.episode),
  }))

  return [characters, statusCode]
}

function getEpisodeNumbers(episodes) {
  return episodes.map((episode) => {
    // Get episode number
    // 'https://rickandmortyapi.com/api/episode/1'
    const regexResult = episode.match(/episode\/(\d\d?)/)
    return { [regexResult[1]]: true }
  })
}

export default {
  get: getCharacters,
}
